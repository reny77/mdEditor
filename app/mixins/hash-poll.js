/**
 * @module mdeditor
 * @submodule mixins
 */

import { inject as service } from '@ember/service';

import { Promise } from 'rsvp';
import Mixin from '@ember/object/mixin';
import { on } from '@ember/object/evented';

export const pollInterval = 750; // time in milliseconds

export default Mixin.create({
  settings: service(),

  // autoSave: computed('settings.data.autoSave', function () {
  //   return this.get('settings')
  //     .get('data.autoSave');
  // }),

  afterModel(model) {
    this._super(...arguments);

    if (this.get('settings.data.autoSave')) {
      model.set('jsonRevert', model.serialize().data.attributes.json);
    }

    let hashPoller = this.hashPoller;

    // Make sure we only create one poller instance.
    if (!hashPoller) {
      hashPoller = this.pollboy
        .add(this, this.onPoll, pollInterval);
      this.set('hashPoller', hashPoller);
    }

    return model;
  },

  deactivatePoll: on('deactivate', function() {
    // if(this.get('autoSave')) {
    //   return;
    // }

    const hashPoller = this.hashPoller;

    this.pollboy
      .remove(hashPoller);
    this.set('hashPoller', null);
  }),

  onPoll() {
    const model = this.currentRouteModel();

    return new Promise(function(resolve) {
      if (model) {
        model.notifyPropertyChange('currentHash');
      }
      resolve(true);
    });
  }

  // /**
  //  * Whether to compare the model hash on transition.
  //  *
  //  * @property checkHash
  //  * @type {Boolean}
  //  * @default true
  //  */
  // checkHash: true,
  //
  //
  //
  //
  //
  // /**
  //  * Compare thw current hash with the cached one.
  //  *
  //  * @method compareHash
  //  * @returns {Boolean} Boolean value indicating if hashes are equivalent
  //  */
  // compareHash: function() {
  //   let model = this.currentRouteModel();
  //
  //   let oldHash = this.get('modelHash');
  //   let newHash = this.hashObject(model.get(
  //     'json'));
  //
  //   if (oldHash === newHash && !model.get('hasDirtyAttributes')) {
  //     return true;
  //   }
  //
  //   return false;
  // },
  //
  // actions: {
  //   confirmTransition() {
  //     let me = this;
  //
  //     me.currentRouteModel().reload();
  //
  //     this.set('checkHash', false);
  //     this.controller.get('pausedTransition')
  //       .retry().then(() => {
  //         me.set('checkHash', true);
  //       });
  //   },
  //   cancelTransition() {
  //     this.controller
  //       .set('pausedTransition', null);
  //   },
  //   willTransition(transition) {
  //     if (this.get('settings').get('data.autoSave')) {
  //       this.currentRouteModel().save();
  //       return true;
  //     }
  //     if (!this.get('checkHash') || this.compareHash()) {
  //       this.controller
  //         .set('pausedTransition', null);
  //       return true;
  //     } else {
  //       transition.abort();
  //       this.controller.set('pausedTransition', transition);
  //     }
  //   }
  // }
});
