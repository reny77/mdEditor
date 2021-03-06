import { alias } from '@ember/object/computed';
import { getOwner } from '@ember/application';
import EmberObject, { computed } from '@ember/object';
import { Copyable } from 'ember-copy';
import DS from 'ember-data';
import uuidV4 from "uuid/v4";
import Model from 'mdeditor/models/base';
import {
  validator,
  buildValidations
} from 'ember-cp-validations';

const Validations = buildValidations({
  'recordId': validator(
    'presence', {
      presence: true,
      ignoreBlank: true,
    }),
  'json.metadata.resourceInfo.resourceType': [
    validator('array-valid'),
    validator('array-required', {
      track: ['type']
    })
  ],
  // 'json.resourceInfo.abstract': validator('presence', {
  //   presence: true,
  //   ignoreBlank: true
  // }),
  'json.metadata.resourceInfo.citation.title': validator('presence', {
    presence: true,
    ignoreBlank: true
  })
  // 'json.metadata.resourceInfo.citation': validator('length', {
  //   min: 1
  // }),
  // 'json.metadata.resourceInfo.status': validator('length', {
  //   min: 1
  // }),
  // 'json.metadata.resourceInfo.pointOfContact': validator('length', {
  //   min: 1
  // }),
  // 'json.metadata.resourceInfo.defaultResourceLocale': validator('length', {
  //   min: 1
  // })
});
export default Model.extend(Validations, Copyable, {
  init() {
    this._super(...arguments);

    this.set('allRecords', this.store.peekAll('record'));
  },
  profile: DS.attr('string', {
    defaultValue: 'full'
  }),
  json: DS.attr('json', {
    defaultValue() {
      const obj = EmberObject.create({
        schema: {
          name: 'mdJson',
          version: '2.6.0'
        },
        contact: [],
        metadata: {
          metadataInfo: {
            metadataIdentifier: {
              identifier: uuidV4(),
              namespace: 'urn:uuid'
            },
            metadataContact: [],
            defaultMetadataLocale: {}
          },
          resourceInfo: {
            resourceType: [{}],
            citation: {
              title: null,
              date: []
            },
            pointOfContact: [],
            abstract: '',
            shortAbstract: '',
            status: [],
            defaultResourceLocale: {
              // characterSet: UTF-8,
              // country: USA,
              // language: eng
            },
            timePeriod: {
              periodName: []
            },
            extent: [],
            keyword: []
          }
        },
        metadataRepository: [],
        dataDictionary: []
      });

      return obj;
    }
  }),
  dateUpdated: DS.attr('date', {
    defaultValue() {
      return new Date();
    }
  }),

  title: alias('json.metadata.resourceInfo.citation.title'),

  icon: computed('json.metadata.resourceInfo.resourceType.0.type',
    function () {
      const type = this.get(
          'json.metadata.resourceInfo.resourceType.0.type') ||
        '';
      const list = getOwner(this).lookup('service:icon');

      return type ? list.get(type) || list.get('default') : list.get(
        'defaultFile');
    }),

  recordId: alias(
    'json.metadata.metadataInfo.metadataIdentifier.identifier'),
  recordIdNamespace: alias(
    'json.metadata.metadataInfo.metadataIdentifier.namespace'),

  parentIds: alias(
    'json.metadata.metadataInfo.parentMetadata.identifier'),

  hasParent: computed('parentIds.[]', function () {
    let ids = this.parentIds;
    let records = this.allRecords.rejectBy('hasSchemaErrors');

    if(!ids) {
      return false;
    }

    return ids.find((id) => {
      return records.findBy('recordId', id.identifier) ? true :
        false;
    });
  }),

  defaultParent: computed('hasParent', function () {
    let id = this.get('hasParent.identifier');

    if(!id) {
      return undefined;
    }

    return this.allRecords.findBy('recordId', id);
  }),

  defaultType: alias(
    'json.metadata.resourceInfo.resourceType.firstObject.type'),

  /**
   * The trimmed varsion of the recordId.
   *
   * @property shortId
   * @type {String}
   * @readOnly
   * @category computed
   * @requires recordId
   */
  shortId: computed('recordId', function () {
    const recordId = this.recordId;
    if(recordId) {
      let index = recordId.indexOf('-');

      return recordId.substring(0, index > -1 ? index : 8);
    }

    return recordId;
  }),

  /**
   * A list of schema errors return by the validator.
   *
   * @property hasSchemaErrors
   * @type {Array}
   * @readOnly
   * @category computed
   * @requires status
   */
  hasSchemaErrors: computed('status', function () {
    let mdjson = this.mdjson;
    let errors = mdjson.validateRecord(this).errors;

    //console.log(errors);

    return errors;
  }),

  formatted: computed(function () {
      let mdjson = this.mdjson;

      return mdjson.formatRecord(this);
    })
    .volatile(),

  status: computed('hasDirtyHash', function () {
    let dirty = this.hasDirtyHash;
    let errors = this.hasSchemaErrors;

    if(this.currentHash) {
      return dirty ? 'danger' : errors ? 'warning' : 'success';
    }

    return 'success';
  }),

  copy() {
    let current = this.cleanJson;
    let json = EmberObject.create(current);
    let name = current.metadata.resourceInfo.citation.title;

    json.set('metadata.resourceInfo.citation.title', `Copy of ${name}`);
    json.set('metadata.metadataInfo.metadataIdentifier', {
      identifier: uuidV4(),
      namespace: 'urn:uuid'
    });

    return this.store.createRecord('record', {
      json: json
    });
  }
});
