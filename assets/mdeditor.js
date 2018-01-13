"use strict";



define('mdeditor/adapters/application', ['exports', 'ember-local-storage/adapters/adapter'], function (exports, _adapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _adapter.default.extend({
    // //timestamp updates
    // updateRecord(store, type, snapshot) {
    //   //let date = new Date();
    //
    //   //snapshot.record.set('dateUpdated', date.toISOString());
    //   return this._super.apply(this,[store, type, snapshot]);
    // }
  });
});
define('mdeditor/app', ['exports', 'mdeditor/resolver', 'ember-load-initializers', 'mdeditor/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    LinkComponent,
    Route,
    Component,
    Application,
    get,
    getWithDefault,
    defineProperty,
    computed,
    isNone,
    assert
  } = Ember;

  let App;

  //Ember.MODEL_FACTORY_INJECTIONS = true;

  App = Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  //for bootstrap
  LinkComponent.reopen({
    attributeBindings: ['data-toggle', 'data-placement']
  });
  //for crumbly
  Route.reopen({
    //breadCrumb: null
    currentRouteModel: function currentRouteModel() {
      return this.modelFor(this.routeName);
    }
  });
  //for profiles
  Component.reopen({
    init() {
      this._super(...arguments);

      let profile = get(this, 'profile');
      let path = get(this, 'profilePath');
      let visibility = get(this, 'visibility');
      let isVisible = isNone(visibility) ? true : visibility;

      if (path !== undefined) {
        assert(`${path} is not a profile path!`, path.charAt(0) !== '.');
        defineProperty(this, 'isVisible', computed('profile.active', function () {
          let fullPath = 'profiles.' + get(profile, 'active') + '.components.' + path;

          //console.log(fullPath);
          return getWithDefault(profile, fullPath, isVisible);
        }));
      }
    }
  });
  exports.default = App;
});
define('mdeditor/blueprints/ember-string-helpers', ['exports', 'ember-string-helpers/blueprints/ember-string-helpers'], function (exports, _emberStringHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberStringHelpers.default;
    }
  });
});
define("mdeditor/cldrs/en", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{ "locale": "en-US", "parentLocale": "en" }, { "locale": "en", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1],
          t0 = Number(s[0]) == n,
          n10 = t0 && s[0].slice(-1),
          n100 = t0 && s[0].slice(-2);if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";return n == 1 && v0 ? "one" : "other";
    }, "fields": { "year": { "displayName": "year", "relative": { "0": "this year", "1": "next year", "-1": "last year" }, "relativeTime": { "future": { "one": "in {0} year", "other": "in {0} years" }, "past": { "one": "{0} year ago", "other": "{0} years ago" } } }, "month": { "displayName": "month", "relative": { "0": "this month", "1": "next month", "-1": "last month" }, "relativeTime": { "future": { "one": "in {0} month", "other": "in {0} months" }, "past": { "one": "{0} month ago", "other": "{0} months ago" } } }, "day": { "displayName": "day", "relative": { "0": "today", "1": "tomorrow", "-1": "yesterday" }, "relativeTime": { "future": { "one": "in {0} day", "other": "in {0} days" }, "past": { "one": "{0} day ago", "other": "{0} days ago" } } }, "hour": { "displayName": "hour", "relativeTime": { "future": { "one": "in {0} hour", "other": "in {0} hours" }, "past": { "one": "{0} hour ago", "other": "{0} hours ago" } } }, "minute": { "displayName": "minute", "relativeTime": { "future": { "one": "in {0} minute", "other": "in {0} minutes" }, "past": { "one": "{0} minute ago", "other": "{0} minutes ago" } } }, "second": { "displayName": "second", "relative": { "0": "now" }, "relativeTime": { "future": { "one": "in {0} second", "other": "in {0} seconds" }, "past": { "one": "{0} second ago", "other": "{0} seconds ago" } } } } }];
});
define("mdeditor/components/-lf-get-outlet-state", ["exports", "liquid-fire/components/-lf-get-outlet-state"], function (exports, _lfGetOutletState) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _lfGetOutletState.default;
    }
  });
});
define('mdeditor/components/array-path-layer', ['exports', 'ember-leaflet/components/array-path-layer'], function (exports, _arrayPathLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _arrayPathLayer.default;
    }
  });
});
define('mdeditor/components/base-layer', ['exports', 'ember-leaflet/components/base-layer'], function (exports, _baseLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _baseLayer.default;
    }
  });
});
define('mdeditor/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _basicDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDropdown.default;
    }
  });
});
define('mdeditor/components/basic-dropdown/content-element', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content-element'], function (exports, _contentElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contentElement.default;
    }
  });
});
define('mdeditor/components/basic-dropdown/content', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('mdeditor/components/basic-dropdown/trigger', ['exports', 'ember-basic-dropdown/components/basic-dropdown/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('mdeditor/components/bread-crumb', ['exports', 'ember-crumbly/components/bread-crumb'], function (exports, _breadCrumb) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _breadCrumb.default;
    }
  });
});
define('mdeditor/components/bread-crumbs', ['exports', 'ember-crumbly/components/bread-crumbs'], function (exports, _breadCrumbs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _breadCrumbs.default;
    }
  });
});
define('mdeditor/components/bs-datetimepicker', ['exports', 'ember-bootstrap-datetimepicker/components/bs-datetimepicker'], function (exports, _bsDatetimepicker) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDatetimepicker.default;
    }
  });
});
define('mdeditor/components/circle-layer', ['exports', 'ember-leaflet/components/circle-layer'], function (exports, _circleLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _circleLayer.default;
    }
  });
});
define('mdeditor/components/circle-marker-layer', ['exports', 'ember-leaflet/components/circle-marker-layer'], function (exports, _circleMarkerLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _circleMarkerLayer.default;
    }
  });
});
define('mdeditor/components/container-layer', ['exports', 'ember-leaflet/components/container-layer'], function (exports, _containerLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _containerLayer.default;
    }
  });
});
define('mdeditor/components/draggable-object-target', ['exports', 'ember-drag-drop/components/draggable-object-target'], function (exports, _draggableObjectTarget) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _draggableObjectTarget.default;
});
define('mdeditor/components/draggable-object', ['exports', 'ember-drag-drop/components/draggable-object'], function (exports, _draggableObject) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _draggableObject.default;
});
define('mdeditor/components/ember-load-remover', ['exports', 'ember-load/components/ember-load-remover'], function (exports, _emberLoadRemover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberLoadRemover.default;
    }
  });
});
define('mdeditor/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, _positionedContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _positionedContainer.default;
    }
  });
});
define('mdeditor/components/ember-modal-dialog/-basic-dialog', ['exports', 'ember-modal-dialog/components/basic-dialog'], function (exports, _basicDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDialog.default;
    }
  });
});
define('mdeditor/components/ember-modal-dialog/-in-place-dialog', ['exports', 'ember-modal-dialog/components/in-place-dialog'], function (exports, _inPlaceDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inPlaceDialog.default;
    }
  });
});
define('mdeditor/components/ember-modal-dialog/-liquid-dialog', ['exports', 'ember-modal-dialog/components/liquid-dialog'], function (exports, _liquidDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidDialog.default;
    }
  });
});
define('mdeditor/components/ember-modal-dialog/-liquid-tether-dialog', ['exports', 'ember-modal-dialog/components/liquid-tether-dialog'], function (exports, _liquidTetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidTetherDialog.default;
    }
  });
});
define('mdeditor/components/ember-modal-dialog/-tether-dialog', ['exports', 'ember-modal-dialog/components/tether-dialog'], function (exports, _tetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tetherDialog.default;
    }
  });
});
define('mdeditor/components/ember-tether', ['exports', 'ember-tether/components/ember-tether'], function (exports, _emberTether) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberTether.default;
    }
  });
});
define('mdeditor/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
define('mdeditor/components/fa-icon', ['exports', 'ember-font-awesome/components/fa-icon'], function (exports, _faIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _faIcon.default;
    }
  });
});
define('mdeditor/components/fa-list', ['exports', 'ember-font-awesome/components/fa-list'], function (exports, _faList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _faList.default;
    }
  });
});
define('mdeditor/components/fa-stack', ['exports', 'ember-font-awesome/components/fa-stack'], function (exports, _faStack) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _faStack.default;
    }
  });
});
define('mdeditor/components/feature-form', ['exports', 'ember-leaflet-table/components/feature-form'], function (exports, _featureForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _featureForm.default;
    }
  });
});
define('mdeditor/components/feature-group', ['exports', 'ember-leaflet-table/components/feature-group'], function (exports, _featureGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _featureGroup.default;
    }
  });
});
define('mdeditor/components/feature-table', ['exports', 'ember-leaflet-table/components/feature-table'], function (exports, _featureTable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _featureTable.default;
    }
  });
});
define('mdeditor/components/file-picker', ['exports', 'ember-cli-file-picker/components/file-picker'], function (exports, _filePicker) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filePicker.default;
    }
  });
});
define('mdeditor/components/flash-message', ['exports', 'ember-cli-flash/components/flash-message'], function (exports, _flashMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flashMessage.default;
    }
  });
});
define('mdeditor/components/from-elsewhere', ['exports', 'ember-elsewhere/components/from-elsewhere'], function (exports, _fromElsewhere) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fromElsewhere.default;
    }
  });
});
define('mdeditor/components/geojson-layer', ['exports', 'ember-leaflet/components/geojson-layer'], function (exports, _geojsonLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _geojsonLayer.default;
    }
  });
});
define("mdeditor/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (exports, _illiquidModel) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _illiquidModel.default;
    }
  });
});
define('mdeditor/components/image-layer', ['exports', 'ember-leaflet/components/image-layer'], function (exports, _imageLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _imageLayer.default;
    }
  });
});
define('mdeditor/components/layer-control', ['exports', 'ember-leaflet-layer-control/components/layer-control'], function (exports, _layerControl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _layerControl.default;
    }
  });
});
define('mdeditor/components/layer-group', ['exports', 'ember-leaflet-layer-control/components/layer-group'], function (exports, _layerGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _layerGroup.default;
    }
  });
});
define('mdeditor/components/leaflet-draw', ['exports', 'ember-leaflet-table/components/leaflet-draw'], function (exports, _leafletDraw) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _leafletDraw.default;
    }
  });
});
define('mdeditor/components/leaflet-map', ['exports', 'ember-leaflet/components/leaflet-map'], function (exports, _leafletMap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _leafletMap.default;
    }
  });
});
define('mdeditor/components/leaflet-table-row-actions', ['exports', 'ember-leaflet-table/components/leaflet-table-row-actions'], function (exports, _leafletTableRowActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _leafletTableRowActions.default;
    }
  });
});
define('mdeditor/components/leaflet-table-row', ['exports', 'ember-leaflet-table/components/leaflet-table-row'], function (exports, _leafletTableRow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _leafletTableRow.default;
    }
  });
});
define('mdeditor/components/leaflet-table', ['exports', 'ember-leaflet-table/components/leaflet-table'], function (exports, _leafletTable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _leafletTable.default;
    }
  });
});
define('mdeditor/components/lgeojson-layer', ['exports', 'ember-leaflet-table/components/lgeojson-layer'], function (exports, _lgeojsonLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lgeojsonLayer.default;
    }
  });
});
define("mdeditor/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (exports, _liquidBind) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidBind.default;
    }
  });
});
define("mdeditor/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (exports, _liquidChild) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidChild.default;
    }
  });
});
define("mdeditor/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (exports, _liquidContainer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidContainer.default;
    }
  });
});
define("mdeditor/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (exports, _liquidIf) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidIf.default;
    }
  });
});
define("mdeditor/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (exports, _liquidMeasured) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.default;
    }
  });
  Object.defineProperty(exports, "measure", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.measure;
    }
  });
});
define("mdeditor/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (exports, _liquidOutlet) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidOutlet.default;
    }
  });
});
define("mdeditor/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (exports, _liquidSpacer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidSpacer.default;
    }
  });
});
define('mdeditor/components/liquid-sync', ['exports', 'liquid-fire/components/liquid-sync'], function (exports, _liquidSync) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidSync.default;
    }
  });
});
define("mdeditor/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (exports, _liquidUnless) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidUnless.default;
    }
  });
});
define("mdeditor/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (exports, _liquidVersions) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidVersions.default;
    }
  });
});
define('mdeditor/components/marker-layer', ['exports', 'ember-leaflet/components/marker-layer'], function (exports, _markerLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _markerLayer.default;
    }
  });
});
define('mdeditor/components/modal-dialog-overlay', ['exports', 'ember-modal-dialog/components/modal-dialog-overlay'], function (exports, _modalDialogOverlay) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _modalDialogOverlay.default;
    }
  });
});
define('mdeditor/components/modal-dialog', ['exports', 'ember-modal-dialog/components/modal-dialog'], function (exports, _modalDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _modalDialog.default;
    }
  });
});
define('mdeditor/components/models-table-server-paginated', ['exports', 'ember-models-table/components/models-table-server-paginated'], function (exports, _modelsTableServerPaginated) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _modelsTableServerPaginated.default;
    }
  });
});
define('mdeditor/components/models-table', ['exports', 'ember-models-table/components/models-table'], function (exports, _modelsTable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _modelsTable.default;
});
define('mdeditor/components/models-table/cell', ['exports', 'ember-models-table/components/models-table/cell'], function (exports, _cell) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cell.default;
    }
  });
});
define('mdeditor/components/models-table/columns-dropdown', ['exports', 'ember-models-table/components/models-table/columns-dropdown'], function (exports, _columnsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _columnsDropdown.default;
    }
  });
});
define('mdeditor/components/models-table/columns-hidden', ['exports', 'ember-models-table/components/models-table/columns-hidden'], function (exports, _columnsHidden) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _columnsHidden.default;
    }
  });
});
define('mdeditor/components/models-table/footer', ['exports', 'ember-models-table/components/models-table/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('mdeditor/components/models-table/global-filter', ['exports', 'ember-models-table/components/models-table/global-filter'], function (exports, _globalFilter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _globalFilter.default;
    }
  });
});
define('mdeditor/components/models-table/grouped-header', ['exports', 'ember-models-table/components/models-table/grouped-header'], function (exports, _groupedHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _groupedHeader.default;
    }
  });
});
define('mdeditor/components/models-table/no-data', ['exports', 'ember-models-table/components/models-table/no-data'], function (exports, _noData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _noData.default;
    }
  });
});
define('mdeditor/components/models-table/page-size-select', ['exports', 'ember-models-table/components/models-table/page-size-select'], function (exports, _pageSizeSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pageSizeSelect.default;
    }
  });
});
define('mdeditor/components/models-table/pagination-numeric', ['exports', 'ember-models-table/components/models-table/pagination-numeric'], function (exports, _paginationNumeric) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paginationNumeric.default;
    }
  });
});
define('mdeditor/components/models-table/pagination-simple', ['exports', 'ember-models-table/components/models-table/pagination-simple'], function (exports, _paginationSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paginationSimple.default;
    }
  });
});
define('mdeditor/components/models-table/row-expand', ['exports', 'ember-models-table/components/models-table/row-expand'], function (exports, _rowExpand) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rowExpand.default;
    }
  });
});
define('mdeditor/components/models-table/row-filtering-cell', ['exports', 'ember-models-table/components/models-table/row-filtering-cell'], function (exports, _rowFilteringCell) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rowFilteringCell.default;
    }
  });
});
define('mdeditor/components/models-table/row-filtering', ['exports', 'ember-models-table/components/models-table/row-filtering'], function (exports, _rowFiltering) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rowFiltering.default;
    }
  });
});
define('mdeditor/components/models-table/row-sorting-cell', ['exports', 'ember-models-table/components/models-table/row-sorting-cell'], function (exports, _rowSortingCell) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rowSortingCell.default;
    }
  });
});
define('mdeditor/components/models-table/row-sorting', ['exports', 'ember-models-table/components/models-table/row-sorting'], function (exports, _rowSorting) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rowSorting.default;
    }
  });
});
define('mdeditor/components/models-table/row', ['exports', 'ember-models-table/components/models-table/row'], function (exports, _row) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _row.default;
    }
  });
});
define('mdeditor/components/models-table/select', ['exports', 'ember-models-table/components/models-table/select'], function (exports, _select) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _select.default;
    }
  });
});
define('mdeditor/components/models-table/summary', ['exports', 'ember-models-table/components/models-table/summary'], function (exports, _summary) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _summary.default;
    }
  });
});
define('mdeditor/components/models-table/table-body', ['exports', 'ember-models-table/components/models-table/table-body'], function (exports, _tableBody) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tableBody.default;
    }
  });
});
define('mdeditor/components/models-table/table-footer', ['exports', 'ember-models-table/components/models-table/table-footer'], function (exports, _tableFooter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tableFooter.default;
    }
  });
});
define('mdeditor/components/models-table/table-header', ['exports', 'ember-models-table/components/models-table/table-header'], function (exports, _tableHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tableHeader.default;
    }
  });
});
define('mdeditor/components/models-table/table', ['exports', 'ember-models-table/components/models-table/table'], function (exports, _table) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _table.default;
    }
  });
});
define('mdeditor/components/models-table/themes/bootstrap4/columns-dropdown', ['exports', 'ember-models-table/components/models-table/themes/bootstrap4/columns-dropdown'], function (exports, _columnsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _columnsDropdown.default;
    }
  });
});
define('mdeditor/components/models-table/themes/bootstrap4/global-filter', ['exports', 'ember-models-table/components/models-table/themes/bootstrap4/global-filter'], function (exports, _globalFilter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _globalFilter.default;
    }
  });
});
define('mdeditor/components/models-table/themes/bootstrap4/row-filtering-cell', ['exports', 'ember-models-table/components/models-table/themes/bootstrap4/row-filtering-cell'], function (exports, _rowFilteringCell) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rowFilteringCell.default;
    }
  });
});
define('mdeditor/components/models-table/themes/semanticui/columns-dropdown', ['exports', 'ember-models-table/components/models-table/themes/semanticui/columns-dropdown'], function (exports, _columnsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _columnsDropdown.default;
    }
  });
});
define('mdeditor/components/models-table/themes/semanticui/global-filter', ['exports', 'ember-models-table/components/models-table/themes/semanticui/global-filter'], function (exports, _globalFilter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _globalFilter.default;
    }
  });
});
define('mdeditor/components/models-table/themes/semanticui/pagination-numeric', ['exports', 'ember-models-table/components/models-table/themes/semanticui/pagination-numeric'], function (exports, _paginationNumeric) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paginationNumeric.default;
    }
  });
});
define('mdeditor/components/models-table/themes/semanticui/pagination-simple', ['exports', 'ember-models-table/components/models-table/themes/semanticui/pagination-simple'], function (exports, _paginationSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paginationSimple.default;
    }
  });
});
define('mdeditor/components/models-table/themes/semanticui/row-filtering-cell', ['exports', 'ember-models-table/components/models-table/themes/semanticui/row-filtering-cell'], function (exports, _rowFilteringCell) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rowFilteringCell.default;
    }
  });
});
define('mdeditor/components/models-table/themes/semanticui/select', ['exports', 'ember-models-table/components/models-table/themes/semanticui/select'], function (exports, _select) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _select.default;
    }
  });
});
define('mdeditor/components/multiple-from-elsewhere', ['exports', 'ember-elsewhere/components/multiple-from-elsewhere'], function (exports, _multipleFromElsewhere) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _multipleFromElsewhere.default;
    }
  });
});
define('mdeditor/components/multiselect-checkboxes', ['exports', 'ember-multiselect-checkboxes/components/multiselect-checkboxes'], function (exports, _multiselectCheckboxes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _multiselectCheckboxes.default;
});
define('mdeditor/components/nestable-draggable-object', ['exports', 'ember-json-tree/components/nestable-draggable-object'], function (exports, _nestableDraggableObject) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nestableDraggableObject.default;
    }
  });
});
define('mdeditor/components/object-bin', ['exports', 'ember-drag-drop/components/object-bin'], function (exports, _objectBin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _objectBin.default;
});
define('mdeditor/components/path-layer', ['exports', 'ember-leaflet/components/path-layer'], function (exports, _pathLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pathLayer.default;
    }
  });
});
define('mdeditor/components/point-path-layer', ['exports', 'ember-leaflet/components/point-path-layer'], function (exports, _pointPathLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pointPathLayer.default;
    }
  });
});
define('mdeditor/components/polygon-layer', ['exports', 'ember-leaflet/components/polygon-layer'], function (exports, _polygonLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _polygonLayer.default;
    }
  });
});
define('mdeditor/components/polyline-layer', ['exports', 'ember-leaflet/components/polyline-layer'], function (exports, _polylineLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _polylineLayer.default;
    }
  });
});
define('mdeditor/components/popover-on-component', ['exports', 'ember-tooltips/components/popover-on-component'], function (exports, _popoverOnComponent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _popoverOnComponent.default;
    }
  });
});
define('mdeditor/components/popover-on-element', ['exports', 'ember-tooltips/components/popover-on-element'], function (exports, _popoverOnElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _popoverOnElement.default;
    }
  });
});
define('mdeditor/components/power-select-multiple-with-create', ['exports', 'ember-power-select-with-create/components/power-select-multiple-with-create'], function (exports, _powerSelectMultipleWithCreate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectMultipleWithCreate.default;
    }
  });
});
define('mdeditor/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, _powerSelectMultiple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectMultiple.default;
    }
  });
});
define('mdeditor/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('mdeditor/components/power-select-with-create', ['exports', 'ember-power-select-with-create/components/power-select-with-create'], function (exports, _powerSelectWithCreate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectWithCreate.default;
    }
  });
});
define('mdeditor/components/power-select-with-create/suggested-option', ['exports', 'ember-power-select-with-create/components/power-select-with-create/suggested-option'], function (exports, _suggestedOption) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _suggestedOption.default;
    }
  });
});
define('mdeditor/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _powerSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelect.default;
    }
  });
});
define('mdeditor/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, _beforeOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _beforeOptions.default;
    }
  });
});
define('mdeditor/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _options) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _options.default;
    }
  });
});
define('mdeditor/components/power-select/placeholder', ['exports', 'ember-power-select/components/power-select/placeholder'], function (exports, _placeholder) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _placeholder.default;
    }
  });
});
define('mdeditor/components/power-select/power-select-group', ['exports', 'ember-power-select/components/power-select/power-select-group'], function (exports, _powerSelectGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectGroup.default;
    }
  });
});
define('mdeditor/components/power-select/search-message', ['exports', 'ember-power-select/components/power-select/search-message'], function (exports, _searchMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _searchMessage.default;
    }
  });
});
define('mdeditor/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('mdeditor/components/sb-publisher', ['exports', 'mdeditor-sciencebase/components/sb-publisher'], function (exports, _sbPublisher) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sbPublisher.default;
    }
  });
});
define('mdeditor/components/sb-settings', ['exports', 'mdeditor-sciencebase/components/sb-settings'], function (exports, _sbSettings) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sbSettings.default;
    }
  });
});
define('mdeditor/components/sb-tree-label', ['exports', 'mdeditor-sciencebase/components/sb-tree-label'], function (exports, _sbTreeLabel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sbTreeLabel.default;
    }
  });
});
define('mdeditor/components/sb-tree', ['exports', 'mdeditor-sciencebase/components/sb-tree'], function (exports, _sbTree) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sbTree.default;
    }
  });
});
define('mdeditor/components/simple-mde', ['exports', 'ember-simplemde/components/simple-mde'], function (exports, _simpleMde) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _simpleMde.default;
    }
  });
});
define('mdeditor/components/sortable-objects', ['exports', 'ember-drag-drop/components/sortable-objects'], function (exports, _sortableObjects) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _sortableObjects.default;
});
define('mdeditor/components/tether-dialog', ['exports', 'ember-modal-dialog/components/deprecated-tether-dialog'], function (exports, _deprecatedTetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _deprecatedTetherDialog.default;
    }
  });
});
define('mdeditor/components/tether-popover-on-component', ['exports', 'ember-tooltips/components/tether-popover-on-component'], function (exports, _tetherPopoverOnComponent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tetherPopoverOnComponent.default;
    }
  });
});
define('mdeditor/components/tether-popover-on-element', ['exports', 'ember-tooltips/components/tether-popover-on-element'], function (exports, _tetherPopoverOnElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tetherPopoverOnElement.default;
    }
  });
});
define('mdeditor/components/tether-tooltip-on-component', ['exports', 'ember-tooltips/components/tether-tooltip-on-component'], function (exports, _tetherTooltipOnComponent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tetherTooltipOnComponent.default;
    }
  });
});
define('mdeditor/components/tether-tooltip-on-element', ['exports', 'ember-tooltips/components/tether-tooltip-on-element'], function (exports, _tetherTooltipOnElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tetherTooltipOnElement.default;
    }
  });
});
define('mdeditor/components/tile-layer', ['exports', 'ember-leaflet/components/tile-layer'], function (exports, _tileLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tileLayer.default;
    }
  });
});
define('mdeditor/components/to-elsewhere', ['exports', 'ember-elsewhere/components/to-elsewhere'], function (exports, _toElsewhere) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toElsewhere.default;
    }
  });
});
define('mdeditor/components/tooltip-on-component', ['exports', 'ember-tooltips/components/tooltip-on-component'], function (exports, _tooltipOnComponent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tooltipOnComponent.default;
    }
  });
});
define('mdeditor/components/tooltip-on-element', ['exports', 'mdeditor/config/environment', 'ember-tooltips/components/tooltip-on-element'], function (exports, _environment, _tooltipOnElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let _didUpdateTimeoutLength = _environment.default.environment === 'test' ? 0 : 1000;

  exports.default = _tooltipOnElement.default.extend({ _didUpdateTimeoutLength });
});
define('mdeditor/components/tree-branch', ['exports', 'ember-json-tree/components/tree-branch'], function (exports, _treeBranch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _treeBranch.default;
    }
  });
});
define('mdeditor/components/tree-label', ['exports', 'ember-json-tree/components/tree-label'], function (exports, _treeLabel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _treeLabel.default;
    }
  });
});
define('mdeditor/components/tree-leaf', ['exports', 'ember-json-tree/components/tree-leaf'], function (exports, _treeLeaf) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _treeLeaf.default;
    }
  });
});
define('mdeditor/components/tree-search', ['exports', 'ember-json-tree/components/tree-search'], function (exports, _treeSearch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _treeSearch.default;
    }
  });
});
define('mdeditor/components/tree-view', ['exports', 'ember-json-tree/components/tree-view'], function (exports, _treeView) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _treeView.default;
    }
  });
});
define('mdeditor/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('mdeditor/components/wms-tile-layer', ['exports', 'ember-leaflet/components/wms-tile-layer'], function (exports, _wmsTileLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _wmsTileLayer.default;
    }
  });
});
define('mdeditor/components/x-toggle', ['exports', 'ember-toggle/components/x-toggle/component', 'mdeditor/config/environment'], function (exports, _component, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const config = _environment.default['ember-toggle'] || {};

  exports.default = _component.default.extend({
    theme: config.defaultTheme || 'default',
    defaultOffLabel: config.defaultOffLabel || 'Off::off',
    defaultOnLabel: config.defaultOnLabel || 'On::on',
    showLabels: config.defaultShowLabels || false,
    size: config.defaultSize || 'medium'
  });
});
define('mdeditor/csv2geojson', ['exports', 'npm:csv2geojson'], function (exports, _npmCsv2geojson) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.csv2geojson = undefined;
  exports.csv2geojson = _npmCsv2geojson.default;
});
define('mdeditor/ember-json-tree/tests/addon.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | addon');

  QUnit.test('ember-json-tree/components/nestable-draggable-object.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-json-tree/components/nestable-draggable-object.js should pass ESLint\n\n');
  });

  QUnit.test('ember-json-tree/components/tree-branch.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-json-tree/components/tree-branch.js should pass ESLint\n\n');
  });

  QUnit.test('ember-json-tree/components/tree-label.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-json-tree/components/tree-label.js should pass ESLint\n\n');
  });

  QUnit.test('ember-json-tree/components/tree-leaf.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-json-tree/components/tree-leaf.js should pass ESLint\n\n');
  });

  QUnit.test('ember-json-tree/components/tree-search.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-json-tree/components/tree-search.js should pass ESLint\n\n');
  });

  QUnit.test('ember-json-tree/components/tree-view.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-json-tree/components/tree-view.js should pass ESLint\n\n');
  });

  QUnit.test('ember-json-tree/helpers/make-range.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-json-tree/helpers/make-range.js should pass ESLint\n\n');
  });
});
define('mdeditor/ember-json-tree/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('ember-json-tree/components/nestable-draggable-object.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-json-tree/components/nestable-draggable-object.js should pass ESLint\n\n');
  });

  QUnit.test('ember-json-tree/components/tree-branch.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-json-tree/components/tree-branch.js should pass ESLint\n\n');
  });

  QUnit.test('ember-json-tree/components/tree-label.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-json-tree/components/tree-label.js should pass ESLint\n\n');
  });

  QUnit.test('ember-json-tree/components/tree-leaf.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-json-tree/components/tree-leaf.js should pass ESLint\n\n');
  });

  QUnit.test('ember-json-tree/components/tree-search.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-json-tree/components/tree-search.js should pass ESLint\n\n');
  });

  QUnit.test('ember-json-tree/components/tree-view.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-json-tree/components/tree-view.js should pass ESLint\n\n');
  });

  QUnit.test('ember-json-tree/helpers/make-range.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-json-tree/helpers/make-range.js should pass ESLint\n\n');
  });
});
define('mdeditor/ember-leaflet-table/tests/addon.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | addon');

  QUnit.test('ember-leaflet-table/components/feature-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-leaflet-table/components/feature-form.js should pass ESLint\n\n');
  });

  QUnit.test('ember-leaflet-table/components/feature-group.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-leaflet-table/components/feature-group.js should pass ESLint\n\n');
  });

  QUnit.test('ember-leaflet-table/components/feature-table.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-leaflet-table/components/feature-table.js should pass ESLint\n\n');
  });

  QUnit.test('ember-leaflet-table/components/leaflet-draw.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-leaflet-table/components/leaflet-draw.js should pass ESLint\n\n');
  });

  QUnit.test('ember-leaflet-table/components/leaflet-table-row-actions.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-leaflet-table/components/leaflet-table-row-actions.js should pass ESLint\n\n');
  });

  QUnit.test('ember-leaflet-table/components/leaflet-table-row.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-leaflet-table/components/leaflet-table-row.js should pass ESLint\n\n');
  });

  QUnit.test('ember-leaflet-table/components/leaflet-table.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-leaflet-table/components/leaflet-table.js should pass ESLint\n\n');
  });

  QUnit.test('ember-leaflet-table/components/lgeojson-layer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-leaflet-table/components/lgeojson-layer.js should pass ESLint\n\n');
  });
});
define('mdeditor/ember-leaflet-table/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('ember-leaflet-table/components/feature-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-leaflet-table/components/feature-form.js should pass ESLint\n\n');
  });

  QUnit.test('ember-leaflet-table/components/feature-group.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-leaflet-table/components/feature-group.js should pass ESLint\n\n');
  });

  QUnit.test('ember-leaflet-table/components/feature-table.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-leaflet-table/components/feature-table.js should pass ESLint\n\n');
  });

  QUnit.test('ember-leaflet-table/components/leaflet-draw.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-leaflet-table/components/leaflet-draw.js should pass ESLint\n\n');
  });

  QUnit.test('ember-leaflet-table/components/leaflet-table-row-actions.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-leaflet-table/components/leaflet-table-row-actions.js should pass ESLint\n\n');
  });

  QUnit.test('ember-leaflet-table/components/leaflet-table-row.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-leaflet-table/components/leaflet-table-row.js should pass ESLint\n\n');
  });

  QUnit.test('ember-leaflet-table/components/leaflet-table.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-leaflet-table/components/leaflet-table.js should pass ESLint\n\n');
  });

  QUnit.test('ember-leaflet-table/components/lgeojson-layer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-leaflet-table/components/lgeojson-layer.js should pass ESLint\n\n');
  });

  QUnit.test('ember-leaflet-table/csv2geojson.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-leaflet-table/csv2geojson.js should pass ESLint\n\n');
  });

  QUnit.test('ember-leaflet-table/geojsoncoords.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-leaflet-table/geojsoncoords.js should pass ESLint\n\n');
  });

  QUnit.test('ember-leaflet-table/shapefile.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-leaflet-table/shapefile.js should pass ESLint\n\n');
  });

  QUnit.test('ember-leaflet-table/togeojson.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-leaflet-table/togeojson.js should pass ESLint\n\n');
  });

  QUnit.test('ember-leaflet-table/uuid.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-leaflet-table/uuid.js should pass ESLint\n\n');
  });
});
define('mdeditor/flash/object', ['exports', 'ember-cli-flash/flash/object'], function (exports, _object) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _object.default;
    }
  });
});
define('mdeditor/formats', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    time: {
      hhmmss: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    },
    date: {
      hhmmss: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    },
    number: {
      EUR: {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      },
      USD: {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    }
  };
});
define('mdeditor/geojsoncoords', ['exports', 'npm:geojson-coords'], function (exports, _npmGeojsonCoords) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.geojsonCoords = undefined;
  exports.geojsonCoords = _npmGeojsonCoords.default;
});
define('mdeditor/helpers/add-em', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.addEm = addEm;
  function addEm(params) {
    return params.reduce((a, b) => Number(a) + Number(b));
  }

  exports.default = Ember.Helper.helper(addEm);
});
define('mdeditor/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_and.andHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_and.andHelper);
  }

  exports.default = forExport;
});
define('mdeditor/helpers/app-version', ['exports', 'mdeditor/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;


  const {
    APP: {
      version
    }
  } = _environment.default;

  function appVersion(_, hash = {}) {
    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('mdeditor/helpers/append', ['exports', 'ember-composable-helpers/helpers/append'], function (exports, _append) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _append.default;
    }
  });
  Object.defineProperty(exports, 'append', {
    enumerable: true,
    get: function () {
      return _append.append;
    }
  });
});
define('mdeditor/helpers/array', ['exports', 'ember-composable-helpers/helpers/array'], function (exports, _array) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _array.default;
    }
  });
  Object.defineProperty(exports, 'array', {
    enumerable: true,
    get: function () {
      return _array.array;
    }
  });
});
define('mdeditor/helpers/bbox-to-poly', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.bboxToPoly = bboxToPoly;
  function bboxToPoly(params /*, hash*/) {
    let bbox = params[0];

    if (!(bbox.southLatitude && bbox.westLongitude && bbox.northLatitude && bbox.eastLongitude)) {
      return null;
    }

    return [[bbox.southLatitude, bbox.westLongitude], [bbox.northLatitude, bbox.westLongitude], [bbox.northLatitude, bbox.eastLongitude], [bbox.southLatitude, bbox.eastLongitude]];
  }

  exports.default = Ember.Helper.helper(bboxToPoly);
});
define('mdeditor/helpers/camelize', ['exports', 'ember-cli-string-helpers/helpers/camelize'], function (exports, _camelize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _camelize.default;
    }
  });
  Object.defineProperty(exports, 'camelize', {
    enumerable: true,
    get: function () {
      return _camelize.camelize;
    }
  });
});
define('mdeditor/helpers/cancel-all', ['exports', 'ember-concurrency/-helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.cancelHelper = cancelHelper;


  const CANCEL_REASON = "the 'cancel-all' template helper was invoked";

  function cancelHelper(args) {
    let cancelable = args[0];
    if (!cancelable || typeof cancelable.cancelAll !== 'function') {
      Ember.assert(`The first argument passed to the \`cancel-all\` helper should be a Task or TaskGroup (without quotes); you passed ${cancelable}`, false);
    }

    return (0, _helpers.taskHelperClosure)('cancelAll', [cancelable, CANCEL_REASON]);
  }

  exports.default = Ember.Helper.helper(cancelHelper);
});
define('mdeditor/helpers/capitalize', ['exports', 'ember-cli-string-helpers/helpers/capitalize'], function (exports, _capitalize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _capitalize.default;
    }
  });
  Object.defineProperty(exports, 'capitalize', {
    enumerable: true,
    get: function () {
      return _capitalize.capitalize;
    }
  });
});
define('mdeditor/helpers/chunk', ['exports', 'ember-composable-helpers/helpers/chunk'], function (exports, _chunk) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _chunk.default;
    }
  });
  Object.defineProperty(exports, 'chunk', {
    enumerable: true,
    get: function () {
      return _chunk.chunk;
    }
  });
});
define('mdeditor/helpers/classify', ['exports', 'ember-cli-string-helpers/helpers/classify'], function (exports, _classify) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _classify.default;
    }
  });
  Object.defineProperty(exports, 'classify', {
    enumerable: true,
    get: function () {
      return _classify.classify;
    }
  });
});
define('mdeditor/helpers/compact', ['exports', 'ember-composable-helpers/helpers/compact'], function (exports, _compact) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compact.default;
    }
  });
  Object.defineProperty(exports, 'compact', {
    enumerable: true,
    get: function () {
      return _compact.compact;
    }
  });
});
define('mdeditor/helpers/compute', ['exports', 'ember-composable-helpers/helpers/compute'], function (exports, _compute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compute.default;
    }
  });
  Object.defineProperty(exports, 'compute', {
    enumerable: true,
    get: function () {
      return _compute.compute;
    }
  });
});
define('mdeditor/helpers/contains', ['exports', 'ember-composable-helpers/helpers/contains'], function (exports, _contains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contains.default;
    }
  });
  Object.defineProperty(exports, 'contains', {
    enumerable: true,
    get: function () {
      return _contains.contains;
    }
  });
});
define('mdeditor/helpers/dasherize', ['exports', 'ember-cli-string-helpers/helpers/dasherize'], function (exports, _dasherize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dasherize.default;
    }
  });
  Object.defineProperty(exports, 'dasherize', {
    enumerable: true,
    get: function () {
      return _dasherize.dasherize;
    }
  });
});
define('mdeditor/helpers/dec', ['exports', 'ember-composable-helpers/helpers/dec'], function (exports, _dec) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dec.default;
    }
  });
  Object.defineProperty(exports, 'dec', {
    enumerable: true,
    get: function () {
      return _dec.dec;
    }
  });
});
define('mdeditor/helpers/div-icon', ['exports', 'ember-leaflet/helpers/div-icon'], function (exports, _divIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divIcon.default;
    }
  });
  Object.defineProperty(exports, 'divIcon', {
    enumerable: true,
    get: function () {
      return _divIcon.divIcon;
    }
  });
});
define('mdeditor/helpers/drop', ['exports', 'ember-composable-helpers/helpers/drop'], function (exports, _drop) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _drop.default;
    }
  });
  Object.defineProperty(exports, 'drop', {
    enumerable: true,
    get: function () {
      return _drop.drop;
    }
  });
});
define('mdeditor/helpers/ember-power-select-is-group', ['exports', 'ember-power-select/helpers/ember-power-select-is-group'], function (exports, _emberPowerSelectIsGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsGroup', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
define('mdeditor/helpers/ember-power-select-is-selected', ['exports', 'ember-power-select/helpers/ember-power-select-is-selected'], function (exports, _emberPowerSelectIsSelected) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsSelected', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
define('mdeditor/helpers/ember-power-select-true-string-if-present', ['exports', 'ember-power-select/helpers/ember-power-select-true-string-if-present'], function (exports, _emberPowerSelectTrueStringIfPresent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectTrueStringIfPresent', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.emberPowerSelectTrueStringIfPresent;
    }
  });
});
define('mdeditor/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_equal.equalHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_equal.equalHelper);
  }

  exports.default = forExport;
});
define('mdeditor/helpers/exists-in', ['exports', 'ember-models-table/helpers/exists-in'], function (exports, _existsIn) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _existsIn.default;
    }
  });
  Object.defineProperty(exports, 'existsIn', {
    enumerable: true,
    get: function () {
      return _existsIn.existsIn;
    }
  });
});
define('mdeditor/helpers/filter-by', ['exports', 'ember-composable-helpers/helpers/filter-by'], function (exports, _filterBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filterBy.default;
    }
  });
  Object.defineProperty(exports, 'filterBy', {
    enumerable: true,
    get: function () {
      return _filterBy.filterBy;
    }
  });
});
define('mdeditor/helpers/filter', ['exports', 'ember-composable-helpers/helpers/filter'], function (exports, _filter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filter.default;
    }
  });
  Object.defineProperty(exports, 'filter', {
    enumerable: true,
    get: function () {
      return _filter.filter;
    }
  });
});
define('mdeditor/helpers/find-by', ['exports', 'ember-composable-helpers/helpers/find-by'], function (exports, _findBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _findBy.default;
    }
  });
  Object.defineProperty(exports, 'findBy', {
    enumerable: true,
    get: function () {
      return _findBy.findBy;
    }
  });
});
define('mdeditor/helpers/flatten', ['exports', 'ember-composable-helpers/helpers/flatten'], function (exports, _flatten) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flatten.default;
    }
  });
  Object.defineProperty(exports, 'flatten', {
    enumerable: true,
    get: function () {
      return _flatten.flatten;
    }
  });
});
define('mdeditor/helpers/format-date', ['exports', 'ember-string-helpers/helpers/format-date'], function (exports, _formatDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatDate.default;
    }
  });
  Object.defineProperty(exports, 'formatDate', {
    enumerable: true,
    get: function () {
      return _formatDate.formatDate;
    }
  });
});
define('mdeditor/helpers/format-html-message', ['exports', 'ember-intl/helpers/format-html-message'], function (exports, _formatHtmlMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatHtmlMessage.default;
    }
  });
});
define('mdeditor/helpers/format-message', ['exports', 'ember-intl/helpers/format-message'], function (exports, _formatMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatMessage.default;
    }
  });
});
define('mdeditor/helpers/format-number', ['exports', 'ember-intl/helpers/format-number'], function (exports, _formatNumber) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatNumber.default;
    }
  });
});
define('mdeditor/helpers/format-phone', ['exports', 'ember-string-helpers/helpers/format-phone'], function (exports, _formatPhone) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatPhone.default;
    }
  });
  Object.defineProperty(exports, 'formatPhone', {
    enumerable: true,
    get: function () {
      return _formatPhone.formatPhone;
    }
  });
});
define('mdeditor/helpers/format-relative', ['exports', 'ember-intl/helpers/format-relative'], function (exports, _formatRelative) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatRelative.default;
    }
  });
});
define('mdeditor/helpers/format-time', ['exports', 'ember-intl/helpers/format-time'], function (exports, _formatTime) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatTime.default;
    }
  });
});
define("mdeditor/helpers/get-dash", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getDash = getDash;


  const {
    Helper,
    get
  } = Ember;

  function getDash(params /*, hash*/) {
    let obj = params[0];
    let prop = params[1].trim();
    let val = null;

    if (obj) {
      val = get(obj, prop);
    }
    return val || "--";
  }

  exports.default = Helper.helper(getDash);
});
define("mdeditor/helpers/get-property", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Helper,
    get,
    String: EmberString
  } = Ember;

  exports.default = Helper.helper(function (params) {
    let obj = params[0];
    let prop = params[1].trim();
    let val = null;

    if (obj) {
      val = get(obj, prop);
    }
    return val || EmberString.htmlSafe("<em>Not Defined</em>");
  });
});
define('mdeditor/helpers/group-by', ['exports', 'ember-composable-helpers/helpers/group-by'], function (exports, _groupBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _groupBy.default;
    }
  });
  Object.defineProperty(exports, 'groupBy', {
    enumerable: true,
    get: function () {
      return _groupBy.groupBy;
    }
  });
});
define('mdeditor/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_gt.gtHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_gt.gtHelper);
  }

  exports.default = forExport;
});
define('mdeditor/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_gte.gteHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_gte.gteHelper);
  }

  exports.default = forExport;
});
define('mdeditor/helpers/has-next', ['exports', 'ember-composable-helpers/helpers/has-next'], function (exports, _hasNext) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasNext.default;
    }
  });
  Object.defineProperty(exports, 'hasNext', {
    enumerable: true,
    get: function () {
      return _hasNext.hasNext;
    }
  });
});
define('mdeditor/helpers/has-previous', ['exports', 'ember-composable-helpers/helpers/has-previous'], function (exports, _hasPrevious) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasPrevious.default;
    }
  });
  Object.defineProperty(exports, 'hasPrevious', {
    enumerable: true,
    get: function () {
      return _hasPrevious.hasPrevious;
    }
  });
});
define('mdeditor/helpers/html-safe', ['exports', 'ember-models-table/helpers/html-safe'], function (exports, _htmlSafe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _htmlSafe.default;
    }
  });
  Object.defineProperty(exports, 'htmlSafe', {
    enumerable: true,
    get: function () {
      return _htmlSafe.htmlSafe;
    }
  });
});
define('mdeditor/helpers/humanize', ['exports', 'ember-cli-string-helpers/helpers/humanize'], function (exports, _humanize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _humanize.default;
    }
  });
  Object.defineProperty(exports, 'humanize', {
    enumerable: true,
    get: function () {
      return _humanize.humanize;
    }
  });
});
define('mdeditor/helpers/icon', ['exports', 'ember-leaflet/helpers/icon'], function (exports, _icon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _icon.default;
    }
  });
  Object.defineProperty(exports, 'icon', {
    enumerable: true,
    get: function () {
      return _icon.icon;
    }
  });
});
define('mdeditor/helpers/ignore-children', ['exports', 'ember-ignore-children-helper/helpers/ignore-children'], function (exports, _ignoreChildren) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ignoreChildren.default;
    }
  });
  Object.defineProperty(exports, 'ignoreChildren', {
    enumerable: true,
    get: function () {
      return _ignoreChildren.ignoreChildren;
    }
  });
});
define('mdeditor/helpers/inc', ['exports', 'ember-composable-helpers/helpers/inc'], function (exports, _inc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inc.default;
    }
  });
  Object.defineProperty(exports, 'inc', {
    enumerable: true,
    get: function () {
      return _inc.inc;
    }
  });
});
define('mdeditor/helpers/intersect', ['exports', 'ember-composable-helpers/helpers/intersect'], function (exports, _intersect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _intersect.default;
    }
  });
  Object.defineProperty(exports, 'intersect', {
    enumerable: true,
    get: function () {
      return _intersect.intersect;
    }
  });
});
define('mdeditor/helpers/intl-get', ['exports', 'ember-intl/helpers/intl-get'], function (exports, _intlGet) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _intlGet.default;
    }
  });
});
define('mdeditor/helpers/invoke', ['exports', 'ember-composable-helpers/helpers/invoke'], function (exports, _invoke) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _invoke.default;
    }
  });
  Object.defineProperty(exports, 'invoke', {
    enumerable: true,
    get: function () {
      return _invoke.invoke;
    }
  });
});
define('mdeditor/helpers/is-after', ['exports', 'mdeditor/config/environment', 'ember-moment/helpers/is-after'], function (exports, _environment, _isAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isAfter.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('mdeditor/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_isArray.isArrayHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_isArray.isArrayHelper);
  }

  exports.default = forExport;
});
define('mdeditor/helpers/is-before', ['exports', 'mdeditor/config/environment', 'ember-moment/helpers/is-before'], function (exports, _environment, _isBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isBefore.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('mdeditor/helpers/is-between', ['exports', 'mdeditor/config/environment', 'ember-moment/helpers/is-between'], function (exports, _environment, _isBetween) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isBetween.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('mdeditor/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('mdeditor/helpers/is-same-or-after', ['exports', 'mdeditor/config/environment', 'ember-moment/helpers/is-same-or-after'], function (exports, _environment, _isSameOrAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isSameOrAfter.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('mdeditor/helpers/is-same-or-before', ['exports', 'mdeditor/config/environment', 'ember-moment/helpers/is-same-or-before'], function (exports, _environment, _isSameOrBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isSameOrBefore.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('mdeditor/helpers/is-same', ['exports', 'mdeditor/config/environment', 'ember-moment/helpers/is-same'], function (exports, _environment, _isSame) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isSame.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('mdeditor/helpers/join', ['exports', 'ember-composable-helpers/helpers/join'], function (exports, _join) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _join.default;
    }
  });
  Object.defineProperty(exports, 'join', {
    enumerable: true,
    get: function () {
      return _join.join;
    }
  });
});
define('mdeditor/helpers/l', ['exports', 'ember-intl/helpers/l'], function (exports, _l) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _l.default;
    }
  });
});
define('mdeditor/helpers/lat-lng-bounds', ['exports', 'ember-leaflet/helpers/lat-lng-bounds'], function (exports, _latLngBounds) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _latLngBounds.default;
    }
  });
  Object.defineProperty(exports, 'latLngBounds', {
    enumerable: true,
    get: function () {
      return _latLngBounds.latLngBounds;
    }
  });
});
define('mdeditor/helpers/lf-lock-model', ['exports', 'liquid-fire/helpers/lf-lock-model'], function (exports, _lfLockModel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lfLockModel.default;
    }
  });
  Object.defineProperty(exports, 'lfLockModel', {
    enumerable: true,
    get: function () {
      return _lfLockModel.lfLockModel;
    }
  });
});
define('mdeditor/helpers/lf-or', ['exports', 'liquid-fire/helpers/lf-or'], function (exports, _lfOr) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lfOr.default;
    }
  });
  Object.defineProperty(exports, 'lfOr', {
    enumerable: true,
    get: function () {
      return _lfOr.lfOr;
    }
  });
});
define('mdeditor/helpers/lower-case', ['exports', 'ember-string-helpers/helpers/lower-case'], function (exports, _lowerCase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lowerCase.default;
    }
  });
  Object.defineProperty(exports, 'lowerCase', {
    enumerable: true,
    get: function () {
      return _lowerCase.lowerCase;
    }
  });
});
define('mdeditor/helpers/lowercase', ['exports', 'ember-cli-string-helpers/helpers/lowercase'], function (exports, _lowercase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lowercase.default;
    }
  });
  Object.defineProperty(exports, 'lowercase', {
    enumerable: true,
    get: function () {
      return _lowercase.lowercase;
    }
  });
});
define('mdeditor/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_lt.ltHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_lt.ltHelper);
  }

  exports.default = forExport;
});
define('mdeditor/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_lte.lteHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_lte.lteHelper);
  }

  exports.default = forExport;
});
define('mdeditor/helpers/make-range', ['exports', 'ember-json-tree/helpers/make-range'], function (exports, _makeRange) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _makeRange.default;
    }
  });
  Object.defineProperty(exports, 'makeRange', {
    enumerable: true,
    get: function () {
      return _makeRange.makeRange;
    }
  });
});
define('mdeditor/helpers/map-by', ['exports', 'ember-composable-helpers/helpers/map-by'], function (exports, _mapBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mapBy.default;
    }
  });
  Object.defineProperty(exports, 'mapBy', {
    enumerable: true,
    get: function () {
      return _mapBy.mapBy;
    }
  });
});
define('mdeditor/helpers/map', ['exports', 'ember-composable-helpers/helpers/map'], function (exports, _map) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _map.default;
    }
  });
  Object.defineProperty(exports, 'map', {
    enumerable: true,
    get: function () {
      return _map.map;
    }
  });
});
define('mdeditor/helpers/md-markdown', ['exports', 'npm:marked'], function (exports, _npmMarked) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.mdMarkdown = mdMarkdown;


  const {
    String: EmString
  } = Ember;

  function mdMarkdown(params /*, hash*/) {
    _npmMarked.default.setOptions({
      renderer: new _npmMarked.default.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    });

    if (params[0]) {
      return EmString.htmlSafe((0, _npmMarked.default)(params[0]));
    }

    return params[1] || 'No text supplied.';
  }

  exports.default = Ember.Helper.helper(mdMarkdown);
});
define('mdeditor/helpers/mod', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.mod = mod;

  const {
    Helper
  } = Ember;

  function mod(params) {
    return params.reduce((a, b) => Number(a) % Number(b));
  }

  exports.default = Helper.helper(mod);
});
define('mdeditor/helpers/moment-add', ['exports', 'mdeditor/config/environment', 'ember-moment/helpers/moment-add'], function (exports, _environment, _momentAdd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentAdd.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('mdeditor/helpers/moment-calendar', ['exports', 'mdeditor/config/environment', 'ember-moment/helpers/moment-calendar'], function (exports, _environment, _momentCalendar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentCalendar.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('mdeditor/helpers/moment-diff', ['exports', 'mdeditor/config/environment', 'ember-moment/helpers/moment-diff'], function (exports, _environment, _momentDiff) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentDiff.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('mdeditor/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _momentDuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDuration.default;
    }
  });
});
define('mdeditor/helpers/moment-format', ['exports', 'mdeditor/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _environment, _momentFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentFormat.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('mdeditor/helpers/moment-from-now', ['exports', 'mdeditor/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _environment, _momentFromNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentFromNow.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('mdeditor/helpers/moment-from', ['exports', 'mdeditor/config/environment', 'ember-moment/helpers/moment-from'], function (exports, _environment, _momentFrom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentFrom.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('mdeditor/helpers/moment-subtract', ['exports', 'mdeditor/config/environment', 'ember-moment/helpers/moment-subtract'], function (exports, _environment, _momentSubtract) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentSubtract.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('mdeditor/helpers/moment-to-date', ['exports', 'mdeditor/config/environment', 'ember-moment/helpers/moment-to-date'], function (exports, _environment, _momentToDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentToDate.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('mdeditor/helpers/moment-to-now', ['exports', 'mdeditor/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _environment, _momentToNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentToNow.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('mdeditor/helpers/moment-to', ['exports', 'mdeditor/config/environment', 'ember-moment/helpers/moment-to'], function (exports, _environment, _momentTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentTo.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('mdeditor/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function () {
      return _unix.unix;
    }
  });
});
define('mdeditor/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
});
define('mdeditor/helpers/next', ['exports', 'ember-composable-helpers/helpers/next'], function (exports, _next) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _next.default;
    }
  });
  Object.defineProperty(exports, 'next', {
    enumerable: true,
    get: function () {
      return _next.next;
    }
  });
});
define('mdeditor/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_notEqual.notEqualHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_notEqual.notEqualHelper);
  }

  exports.default = forExport;
});
define('mdeditor/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_not.notHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_not.notHelper);
  }

  exports.default = forExport;
});
define('mdeditor/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _now) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _now.default;
    }
  });
});
define('mdeditor/helpers/number-format', ['exports', 'ember-string-helpers/helpers/number-format'], function (exports, _numberFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _numberFormat.default;
    }
  });
  Object.defineProperty(exports, 'numberFormat', {
    enumerable: true,
    get: function () {
      return _numberFormat.numberFormat;
    }
  });
});
define('mdeditor/helpers/object-at', ['exports', 'ember-composable-helpers/helpers/object-at'], function (exports, _objectAt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _objectAt.default;
    }
  });
  Object.defineProperty(exports, 'objectAt', {
    enumerable: true,
    get: function () {
      return _objectAt.objectAt;
    }
  });
});
define('mdeditor/helpers/optional', ['exports', 'ember-composable-helpers/helpers/optional'], function (exports, _optional) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _optional.default;
    }
  });
  Object.defineProperty(exports, 'optional', {
    enumerable: true,
    get: function () {
      return _optional.optional;
    }
  });
});
define('mdeditor/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_or.orHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_or.orHelper);
  }

  exports.default = forExport;
});
define('mdeditor/helpers/perform', ['exports', 'ember-concurrency/-helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.performHelper = performHelper;
  function performHelper(args, hash) {
    return (0, _helpers.taskHelperClosure)('perform', args, hash);
  }

  exports.default = Ember.Helper.helper(performHelper);
});
define('mdeditor/helpers/pipe-action', ['exports', 'ember-composable-helpers/helpers/pipe-action'], function (exports, _pipeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pipeAction.default;
    }
  });
});
define('mdeditor/helpers/pipe', ['exports', 'ember-composable-helpers/helpers/pipe'], function (exports, _pipe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pipe.default;
    }
  });
  Object.defineProperty(exports, 'pipe', {
    enumerable: true,
    get: function () {
      return _pipe.pipe;
    }
  });
});
define('mdeditor/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('mdeditor/helpers/point', ['exports', 'ember-leaflet/helpers/point'], function (exports, _point) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _point.default;
    }
  });
  Object.defineProperty(exports, 'point', {
    enumerable: true,
    get: function () {
      return _point.point;
    }
  });
});
define('mdeditor/helpers/previous', ['exports', 'ember-composable-helpers/helpers/previous'], function (exports, _previous) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _previous.default;
    }
  });
  Object.defineProperty(exports, 'previous', {
    enumerable: true,
    get: function () {
      return _previous.previous;
    }
  });
});
define('mdeditor/helpers/queue', ['exports', 'ember-composable-helpers/helpers/queue'], function (exports, _queue) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _queue.default;
    }
  });
  Object.defineProperty(exports, 'queue', {
    enumerable: true,
    get: function () {
      return _queue.queue;
    }
  });
});
define('mdeditor/helpers/range', ['exports', 'ember-composable-helpers/helpers/range'], function (exports, _range) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _range.default;
    }
  });
  Object.defineProperty(exports, 'range', {
    enumerable: true,
    get: function () {
      return _range.range;
    }
  });
});
define('mdeditor/helpers/reduce', ['exports', 'ember-composable-helpers/helpers/reduce'], function (exports, _reduce) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _reduce.default;
    }
  });
  Object.defineProperty(exports, 'reduce', {
    enumerable: true,
    get: function () {
      return _reduce.reduce;
    }
  });
});
define('mdeditor/helpers/regexp-replace', ['exports', 'ember-string-helpers/helpers/regexp-replace'], function (exports, _regexpReplace) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _regexpReplace.default;
    }
  });
  Object.defineProperty(exports, 'regexpReplace', {
    enumerable: true,
    get: function () {
      return _regexpReplace.regexpReplace;
    }
  });
});
define('mdeditor/helpers/reject-by', ['exports', 'ember-composable-helpers/helpers/reject-by'], function (exports, _rejectBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rejectBy.default;
    }
  });
  Object.defineProperty(exports, 'rejectBy', {
    enumerable: true,
    get: function () {
      return _rejectBy.rejectBy;
    }
  });
});
define('mdeditor/helpers/repeat', ['exports', 'ember-composable-helpers/helpers/repeat'], function (exports, _repeat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _repeat.default;
    }
  });
  Object.defineProperty(exports, 'repeat', {
    enumerable: true,
    get: function () {
      return _repeat.repeat;
    }
  });
});
define('mdeditor/helpers/reverse', ['exports', 'ember-composable-helpers/helpers/reverse'], function (exports, _reverse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _reverse.default;
    }
  });
  Object.defineProperty(exports, 'reverse', {
    enumerable: true,
    get: function () {
      return _reverse.reverse;
    }
  });
});
define('mdeditor/helpers/route-action', ['exports', 'ember-route-action-helper/helpers/route-action'], function (exports, _routeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _routeAction.default;
    }
  });
});
define('mdeditor/helpers/shuffle', ['exports', 'ember-composable-helpers/helpers/shuffle'], function (exports, _shuffle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _shuffle.default;
    }
  });
  Object.defineProperty(exports, 'shuffle', {
    enumerable: true,
    get: function () {
      return _shuffle.shuffle;
    }
  });
});
define('mdeditor/helpers/simple-mde-preview', ['exports', 'ember-simplemde/helpers/simple-mde-preview'], function (exports, _simpleMdePreview) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _simpleMdePreview.default;
    }
  });
  Object.defineProperty(exports, 'simpleMdePreview', {
    enumerable: true,
    get: function () {
      return _simpleMdePreview.simpleMdePreview;
    }
  });
});
define('mdeditor/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('mdeditor/helpers/slice', ['exports', 'ember-composable-helpers/helpers/slice'], function (exports, _slice) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slice.default;
    }
  });
  Object.defineProperty(exports, 'slice', {
    enumerable: true,
    get: function () {
      return _slice.slice;
    }
  });
});
define('mdeditor/helpers/sort-by', ['exports', 'ember-composable-helpers/helpers/sort-by'], function (exports, _sortBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sortBy.default;
    }
  });
  Object.defineProperty(exports, 'sortBy', {
    enumerable: true,
    get: function () {
      return _sortBy.sortBy;
    }
  });
});
define('mdeditor/helpers/substr', ['exports', 'ember-string-helpers/helpers/substr'], function (exports, _substr) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _substr.default;
    }
  });
  Object.defineProperty(exports, 'substr', {
    enumerable: true,
    get: function () {
      return _substr.substr;
    }
  });
});
define('mdeditor/helpers/t-html', ['exports', 'ember-intl/helpers/format-html-message'], function (exports, _formatHtmlMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatHtmlMessage.default;
    }
  });
});
define('mdeditor/helpers/t', ['exports', 'ember-intl/helpers/t'], function (exports, _t) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _t.default;
    }
  });
});
define('mdeditor/helpers/take', ['exports', 'ember-composable-helpers/helpers/take'], function (exports, _take) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _take.default;
    }
  });
  Object.defineProperty(exports, 'take', {
    enumerable: true,
    get: function () {
      return _take.take;
    }
  });
});
define('mdeditor/helpers/task', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  function taskHelper([task, ...args]) {
    return task._curry(...args);
  }

  exports.default = Ember.Helper.helper(taskHelper);
});
define('mdeditor/helpers/titleize', ['exports', 'ember-cli-string-helpers/helpers/titleize'], function (exports, _titleize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _titleize.default;
    }
  });
  Object.defineProperty(exports, 'titleize', {
    enumerable: true,
    get: function () {
      return _titleize.titleize;
    }
  });
});
define('mdeditor/helpers/toggle-action', ['exports', 'ember-composable-helpers/helpers/toggle-action'], function (exports, _toggleAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggleAction.default;
    }
  });
});
define('mdeditor/helpers/toggle', ['exports', 'ember-composable-helpers/helpers/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  Object.defineProperty(exports, 'toggle', {
    enumerable: true,
    get: function () {
      return _toggle.toggle;
    }
  });
});
define('mdeditor/helpers/truncate', ['exports', 'ember-cli-string-helpers/helpers/truncate'], function (exports, _truncate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _truncate.default;
    }
  });
  Object.defineProperty(exports, 'truncate', {
    enumerable: true,
    get: function () {
      return _truncate.truncate;
    }
  });
});
define('mdeditor/helpers/uc-words', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ucWords = ucWords;
  function ucWords(params, hash) {
    var string = String(params[0]),
        force = hash.force === true ? true : false;
    if (force) {
      string = string.toLowerCase();
    }
    return string.replace(/(^|\s)[a-z\u00E0-\u00FC]/g, function ($1) {
      return $1.toUpperCase();
    });
  }

  exports.default = Ember.Helper.helper(ucWords);
});
define('mdeditor/helpers/underscore', ['exports', 'ember-cli-string-helpers/helpers/underscore'], function (exports, _underscore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _underscore.default;
    }
  });
  Object.defineProperty(exports, 'underscore', {
    enumerable: true,
    get: function () {
      return _underscore.underscore;
    }
  });
});
define('mdeditor/helpers/union', ['exports', 'ember-composable-helpers/helpers/union'], function (exports, _union) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _union.default;
    }
  });
  Object.defineProperty(exports, 'union', {
    enumerable: true,
    get: function () {
      return _union.union;
    }
  });
});
define('mdeditor/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function () {
      return _unix.unix;
    }
  });
});
define('mdeditor/helpers/upper-case', ['exports', 'ember-string-helpers/helpers/upper-case'], function (exports, _upperCase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _upperCase.default;
    }
  });
  Object.defineProperty(exports, 'upperCase', {
    enumerable: true,
    get: function () {
      return _upperCase.upperCase;
    }
  });
});
define('mdeditor/helpers/uppercase', ['exports', 'ember-cli-string-helpers/helpers/uppercase'], function (exports, _uppercase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uppercase.default;
    }
  });
  Object.defineProperty(exports, 'uppercase', {
    enumerable: true,
    get: function () {
      return _uppercase.uppercase;
    }
  });
});
define('mdeditor/helpers/w', ['exports', 'ember-cli-string-helpers/helpers/w'], function (exports, _w) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _w.default;
    }
  });
  Object.defineProperty(exports, 'w', {
    enumerable: true,
    get: function () {
      return _w.w;
    }
  });
});
define('mdeditor/helpers/without', ['exports', 'ember-composable-helpers/helpers/without'], function (exports, _without) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _without.default;
    }
  });
  Object.defineProperty(exports, 'without', {
    enumerable: true,
    get: function () {
      return _without.without;
    }
  });
});
define('mdeditor/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_xor.xorHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_xor.xorHelper);
  }

  exports.default = forExport;
});
define('mdeditor/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, _addModalsContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'add-modals-container',
    initialize: _addModalsContainer.default
  };
});
define('mdeditor/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'mdeditor/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    APP: {
      name,
      version
    }
  } = _environment.default;

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define("mdeditor/initializers/autoresize", ["exports", "ember-autoresize/ext/text-field", "ember-autoresize/ext/text-area"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "autoresize",
    initialize: function initialize() {}
  };
});
define('mdeditor/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define("mdeditor/initializers/coordinator-setup", ["exports", "mdeditor/models/coordinator"], function (exports, _coordinator) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "setup coordinator",

    initialize: function initialize() {
      let app = arguments[1] || arguments[0];
      app.register("drag:coordinator", _coordinator.default);
      app.inject("component", "coordinator", "drag:coordinator");
    }
  };
});
define('mdeditor/initializers/crumbly', ['exports', 'ember-crumbly/initializers/crumbly'], function (exports, _crumbly) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _crumbly.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _crumbly.initialize;
    }
  });
});
define('mdeditor/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize() {}
  };
});
define('mdeditor/initializers/ember-concurrency', ['exports', 'ember-concurrency'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-concurrency',
    initialize: function initialize() {}
  };
});
define('mdeditor/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('mdeditor/initializers/export-application-global', ['exports', 'mdeditor/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('mdeditor/initializers/flash-messages', ['exports', 'mdeditor/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;


  const { deprecate } = Ember;
  const merge = Ember.assign || Ember.merge;
  const INJECTION_FACTORIES_DEPRECATION_MESSAGE = '[ember-cli-flash] Future versions of ember-cli-flash will no longer inject the service automatically. Instead, you should explicitly inject it into your Route, Controller or Component with `Ember.inject.service`.';
  const addonDefaults = {
    timeout: 3000,
    extendedTimeout: 0,
    priority: 100,
    sticky: false,
    showProgress: false,
    type: 'info',
    types: ['success', 'info', 'warning', 'danger', 'alert', 'secondary'],
    injectionFactories: ['route', 'controller', 'view', 'component'],
    preventDuplicates: false
  };

  function initialize() {
    const application = arguments[1] || arguments[0];
    const { flashMessageDefaults } = _environment.default || {};
    const { injectionFactories } = flashMessageDefaults || [];
    const options = merge(addonDefaults, flashMessageDefaults);
    const shouldShowDeprecation = !(injectionFactories && injectionFactories.length);

    application.register('config:flash-messages', options, { instantiate: false });
    application.inject('service:flash-messages', 'flashMessageDefaults', 'config:flash-messages');

    deprecate(INJECTION_FACTORIES_DEPRECATION_MESSAGE, shouldShowDeprecation, {
      id: 'ember-cli-flash.deprecate-injection-factories',
      until: '2.0.0'
    });

    options.injectionFactories.forEach(factory => {
      application.inject(factory, 'flashMessages', 'service:flash-messages');
    });
  }

  exports.default = {
    name: 'flash-messages',
    initialize
  };
});
define('mdeditor/initializers/hide-loading-screen', ['exports', 'mdeditor/instance-initializers/hide-loading-screen'], function (exports, _hideLoadingScreen) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;


  const { VERSION } = Ember;

  const EMBER_VERSION_REGEX = /^([0-9]+)\.([0-9]+)\.([0-9]+)(?:(?:\-(alpha|beta)\.([0-9]+)(?:\.([0-9]+))?)?)?(?:\+(canary))?(?:\.([0-9abcdef]+))?(?:\-([A-Za-z0-9\.\-]+))?(?:\+([A-Za-z0-9\.\-]+))?$/;

  /**
   * VERSION_INFO[i] is as follows:
   *
   * 0  complete version string
   * 1  major version
   * 2  minor version
   * 3  trivial version
   * 4  pre-release type (optional: "alpha" or "beta" or undefined for stable releases)
   * 5  pre-release version (optional)
   * 6  pre-release sub-version (optional)
   * 7  canary (optional: "canary", or undefined for stable releases)
   * 8  SHA (optional)
   *
   * @private
   */
  const VERSION_INFO = EMBER_VERSION_REGEX.exec(VERSION);
  const isPre111 = parseInt(VERSION_INFO[1], 10) < 2 && parseInt(VERSION_INFO[2], 10) < 12;

  function initialize() {
    if (isPre111) {
      let [registry, application] = arguments;
      _hideLoadingScreen.default.initialize(registry, application);
    }
  }

  exports.default = {
    name: 'hide-loading-screen',
    initialize
  };
});
define('mdeditor/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize() {}
  };
});
define('mdeditor/initializers/leaflet-assets', ['exports', 'ember-leaflet/initializers/leaflet-assets'], function (exports, _leafletAssets) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _leafletAssets.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _leafletAssets.initialize;
    }
  });
});
define('mdeditor/initializers/leaflet', ['exports', 'mdeditor/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;

  /* global L */

  function initialize() {
    if (_environment.default.environment === 'production') {
      L.Icon.Default.imagePath = _environment.default.rootURL + '/assets/images/';
    }
    if (_environment.default.environment === 'development') {
      L.Icon.Default.imagePath = '/assets/images/';
    }
  }

  exports.default = {
    name: 'leaflet',
    initialize
  };
});
define("mdeditor/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals"], function (exports, _emberInternals) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  (0, _emberInternals.initialize)();

  exports.default = {
    name: 'liquid-fire',
    initialize: function initialize() {}
  };
});
define('mdeditor/initializers/local-storage-adapter', ['exports', 'ember-local-storage/initializers/local-storage-adapter'], function (exports, _localStorageAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _localStorageAdapter.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _localStorageAdapter.initialize;
    }
  });
});
define('mdeditor/initializers/local-storage-export', ['exports', 'ember-data', 'ember-inflector'], function (exports, _emberData, _emberInflector) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;


  const {
    run
  } = Ember;
  const assign = Ember.assign || Ember.merge;
  const exportSelected = function exportSelected(store, types, options) {
    // merge defaults
    options = assign({
      json: true,
      download: false,
      filename: 'ember-data.json',
      filterIds: null
    }, options || {});

    let json, data;
    let filter = typeof options.filterIds === 'object' ? options.filterIds : null;

    // collect data
    data = types.reduce((records, type) => {
      const adapter = store.adapterFor((0, _emberInflector.singularize)(type));
      const url = adapter.buildURL(type),
            exportData = adapter._handleGETRequest(url);

      records.data = records.data.concat(exportData.filter(itm => filter[(0, _emberInflector.singularize)(type)].indexOf(itm.id) !== -1));
      return records;
    }, {
      data: []
    });

    if (options.json || options.download) {
      json = JSON.stringify(data);
    }

    if (options.json) {
      data = json;
    }

    if (options.download) {
      window.saveAs(new Blob([json], {
        type: 'application/json;charset=utf-8'
      }), options.filename);
    }

    return new Ember.RSVP.Promise(resolve => {
      run(null, resolve, data);
    }, 'DS: LocalStorageAdapter#exportData');
  };

  function initialize() {
    _emberData.default.Store.reopen({
      exportSelectedData(types, options) {
        return exportSelected(this, types, options);
      }
    });
  }

  exports.default = {
    name: 'local-storage-export',
    after: 'ember-data',
    initialize: initialize
  };
});
define('mdeditor/initializers/pollboy', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize(app) {
    app.inject('route', 'pollboy', 'service:pollboy');
  }

  exports.default = {
    name: 'pollboy',
    initialize
  };
});
define('mdeditor/initializers/resize', ['exports', 'ember-resize/services/resize', 'mdeditor/config/environment'], function (exports, _resize, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    let application = arguments[1] || arguments[0];

    const { resizeServiceDefaults } = _environment.default;
    const { injectionFactories } = resizeServiceDefaults;

    application.register('config:resize-service', resizeServiceDefaults, { instantiate: false });
    application.register('service:resize', _resize.default);
    application.inject('service:resize', 'resizeServiceDefaults', 'config:resize-service');

    injectionFactories.forEach(factory => {
      application.inject(factory, 'resizeService', 'service:resize');
    });
  }

  exports.default = {
    name: 'resize',
    initialize: initialize
  };
});
define('mdeditor/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize() {}
  };
});
define('mdeditor/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize() {}
  };
});
define('mdeditor/initializers/truth-helpers', ['exports', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _registerHelper, _and, _or, _equal, _not, _isArray, _notEqual, _gt, _gte, _lt, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (Ember.Helper) {
      return;
    }

    (0, _registerHelper.registerHelper)('and', _and.andHelper);
    (0, _registerHelper.registerHelper)('or', _or.orHelper);
    (0, _registerHelper.registerHelper)('eq', _equal.equalHelper);
    (0, _registerHelper.registerHelper)('not', _not.notHelper);
    (0, _registerHelper.registerHelper)('is-array', _isArray.isArrayHelper);
    (0, _registerHelper.registerHelper)('not-eq', _notEqual.notEqualHelper);
    (0, _registerHelper.registerHelper)('gt', _gt.gtHelper);
    (0, _registerHelper.registerHelper)('gte', _gte.gteHelper);
    (0, _registerHelper.registerHelper)('lt', _lt.ltHelper);
    (0, _registerHelper.registerHelper)('lte', _lte.lteHelper);
  }

  exports.default = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define('mdeditor/initializers/viewport-config', ['exports', 'mdeditor/config/environment', 'ember-in-viewport/utils/can-use-dom'], function (exports, _environment, _canUseDom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;


  const defaultConfig = {
    viewportEnabled: true,
    viewportSpy: false,
    viewportScrollSensitivity: 1,
    viewportRefreshRate: 100,
    viewportListeners: [{ context: window, event: 'scroll.scrollable' }, { context: window, event: 'resize.resizable' }],
    viewportTolerance: {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }
  };

  if (_canUseDom.default) {
    defaultConfig.viewportListeners.push({
      context: document,
      event: 'touchmove.scrollable'
    });
  }

  const assign = Ember.assign || Ember.merge;

  function initialize() {
    const application = arguments[1] || arguments[0];
    const { viewportConfig = {} } = _environment.default;
    const mergedConfig = assign({}, defaultConfig, viewportConfig);

    application.register('config:in-viewport', mergedConfig, { instantiate: false });
  }

  exports.default = {
    name: 'viewport-config',
    initialize: initialize
  };
});
define("mdeditor/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('mdeditor/instance-initializers/ember-intl', ['exports', 'ember-intl/initializer'], function (exports, _initializer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.instanceInitializer = undefined;
  exports.instanceInitializer = _initializer.instanceInitializer;
  exports.default = _initializer.default;
});
define('mdeditor/instance-initializers/hide-loading-screen', ['exports', 'mdeditor/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;


  const userConfig = _environment.default['ember-load'] || {};

  function initialize() {
    const instance = arguments[1] || arguments[0];
    const container = !!arguments[1] ? arguments[0] : instance.container;

    if (Ember.View) {
      let ApplicationView = container.lookupFactory ? container.lookupFactory('view:application') : instance.resolveRegistration('view:application');

      ApplicationView = ApplicationView.reopen({
        didInsertElement() {
          this._super(...arguments);

          var loadingIndicatorClass = userConfig.loadingIndicatorClass || 'ember-load-indicator';

          Ember.$(`.${loadingIndicatorClass}`).remove();
        }
      });
    }
  }

  exports.default = {
    name: 'hide-loading-screen-instance',
    initialize
  };
});
define('mdeditor/instance-initializers/profile', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize(appInstance) {
    appInstance.inject('route', 'profile', 'service:profile');
    appInstance.inject('controller', 'profile', 'service:profile');
    appInstance.inject('component', 'profile', 'service:profile');
  }

  exports.default = {
    name: 'profile',
    initialize
  };
});
define('mdeditor/instance-initializers/route-publish', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  var Router = Ember.Router;
  function initialize(appInstance) {
    let catalogs = appInstance.lookup('service:publish').get('catalogs');

    // appInstance.inject('route', 'foo', 'service:foo');
    Router.map(function () {
      this.route('publish', function () {
        catalogs.forEach(itm => {
          this.route(itm.route);
        });
      });
    });
  }

  exports.default = {
    initialize
  };
});
define('mdeditor/instance-initializers/settings-sciencebase', ['exports', 'mdeditor-sciencebase/instance-initializers/settings-sciencebase'], function (exports, _settingsSciencebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _settingsSciencebase.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _settingsSciencebase.initialize;
    }
  });
});
define('mdeditor/instance-initializers/settings', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize(appInstance) {
    appInstance.inject('route', 'settings', 'service:settings');
    appInstance.inject('controller', 'settings', 'service:settings');
  }

  exports.default = {
    name: 'settings',
    initialize
  };
});
define('mdeditor/mdeditor-sciencebase/tests/addon.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | addon');

  QUnit.test('mdeditor-sciencebase/components/sb-publisher.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mdeditor-sciencebase/components/sb-publisher.js should pass ESLint\n\n');
  });

  QUnit.test('mdeditor-sciencebase/components/sb-settings.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mdeditor-sciencebase/components/sb-settings.js should pass ESLint\n\n');
  });

  QUnit.test('mdeditor-sciencebase/components/sb-tree-label.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mdeditor-sciencebase/components/sb-tree-label.js should pass ESLint\n\n');
  });

  QUnit.test('mdeditor-sciencebase/components/sb-tree.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mdeditor-sciencebase/components/sb-tree.js should pass ESLint\n\n');
  });

  QUnit.test('mdeditor-sciencebase/instance-initializers/settings-sciencebase.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mdeditor-sciencebase/instance-initializers/settings-sciencebase.js should pass ESLint\n\n');
  });

  QUnit.test('mdeditor-sciencebase/routes/publish/sciencebase.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mdeditor-sciencebase/routes/publish/sciencebase.js should pass ESLint\n\n');
  });

  QUnit.test('mdeditor-sciencebase/utils/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mdeditor-sciencebase/utils/config.js should pass ESLint\n\n');
  });

  QUnit.test('mdeditor-sciencebase/utils/sb-tree-node.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mdeditor-sciencebase/utils/sb-tree-node.js should pass ESLint\n\n');
  });
});
define('mdeditor/mdeditor-sciencebase/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('mdeditor-sciencebase/components/sb-publisher.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mdeditor-sciencebase/components/sb-publisher.js should pass ESLint\n\n');
  });

  QUnit.test('mdeditor-sciencebase/components/sb-settings.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mdeditor-sciencebase/components/sb-settings.js should pass ESLint\n\n');
  });

  QUnit.test('mdeditor-sciencebase/components/sb-tree-label.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mdeditor-sciencebase/components/sb-tree-label.js should pass ESLint\n\n');
  });

  QUnit.test('mdeditor-sciencebase/components/sb-tree.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mdeditor-sciencebase/components/sb-tree.js should pass ESLint\n\n');
  });

  QUnit.test('mdeditor-sciencebase/instance-initializers/settings-sciencebase.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mdeditor-sciencebase/instance-initializers/settings-sciencebase.js should pass ESLint\n\n');
  });

  QUnit.test('mdeditor-sciencebase/routes/publish/sciencebase.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mdeditor-sciencebase/routes/publish/sciencebase.js should pass ESLint\n\n');
  });

  QUnit.test('mdeditor-sciencebase/templates/publish/sciencebase.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mdeditor-sciencebase/templates/publish/sciencebase.js should pass ESLint\n\n');
  });

  QUnit.test('mdeditor-sciencebase/utils/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mdeditor-sciencebase/utils/config.js should pass ESLint\n\n');
  });

  QUnit.test('mdeditor-sciencebase/utils/sb-tree-node.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mdeditor-sciencebase/utils/sb-tree-node.js should pass ESLint\n\n');
  });
});
define('mdeditor/mixins/hash-poll', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  const pollInterval = exports.pollInterval = 750; // time in milliseconds

  const {
    Mixin,
    //computed,
    inject,
    on
  } = Ember;

  exports.default = Mixin.create({
    settings: inject.service(),

    // autoSave: computed('settings.data.autoSave', function () {
    //   return this.get('settings')
    //     .get('data.autoSave');
    // }),

    afterModel(model) {
      this._super(...arguments);

      if (this.get('settings.data.autoSave')) {
        model.set('jsonRevert', model.serialize().data.attributes.json);
      }

      let hashPoller = this.get('hashPoller');

      // Make sure we only create one poller instance.
      if (!hashPoller) {
        hashPoller = this.get('pollboy').add(this, this.onPoll, pollInterval);
        this.set('hashPoller', hashPoller);
      }

      return model;
    },

    deactivatePoll: on('deactivate', function () {
      // if(this.get('autoSave')) {
      //   return;
      // }

      const hashPoller = this.get('hashPoller');

      this.get('pollboy').remove(hashPoller);
      this.set('hashPoller', null);
    }),

    onPoll() {
      const model = this.currentRouteModel();

      return new Ember.RSVP.Promise(function (resolve) {
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
});
define('mdeditor/mixins/object-template', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Mixin,
    isArray,
    getOwner,
    A,
    merge,
    run
  } = Ember;

  exports.default = Mixin.create({
    /**
     * Use this mixin to apply 'templates' to an array of objects. Especially useful
     * when the object must support setting arrays that are not passed during
     * initialization.
     *
     * @class object-template
     * @constructor
     * @static
     */

    /**
     * Apply the 'template' to the object.
     *
     * @method applyTemplate
     * @param {Object} object The object to apply the template to.
     * @return {Ember.Object}
     */
    applyTemplate(object, defaults) {
      let value = object || {};
      let Template = this.get('templateClass');

      if (Template) {
        let owner = getOwner(this);

        return merge(Template.create(owner.ownerInjection(), defaults || {}), value);
      }

      return object;
    },

    /**
     * Apply the object 'template' to each object in the array.
     *
     * @method applyTemplateArray
     * @param {Array} propertyName The array of objects to apply the template to.
     * @return {Array}
     */
    applyTemplateArray(propertyName, defaults) {
      let property = this.get(propertyName);

      if (isArray(property)) {
        let Template = this.get('templateClass');
        if (Template) {
          let owner = getOwner(this);

          run.once(this, () => {
            property.forEach((item, idx, items) => {
              items.removeAt(idx);

              let newItem = merge(Template.create(owner.ownerInjection(), defaults || {}), item);

              items.insertAt(idx, newItem);
            });
          });
        }
      } else {
        this.set(propertyName, A());
      }

      return this.get(propertyName);
    }
  });
});
define('mdeditor/mixins/resize-aware', ['exports', 'ember-resize/mixins/resize-aware'], function (exports, _resizeAware) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _resizeAware.default;
    }
  });
});
define('mdeditor/mixins/scroll-to', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({
    queryParams: {
      scrollTo: true
    },
    setScrollTo(scrollTo) {
      this.controller.set('scrollTo', scrollTo || '');
    },
    actions: {
      setScrollTo(scrollTo) {
        this.setScrollTo(scrollTo);
      }
    }
  });
});
define('mdeditor/models/base', ['exports', 'ember-data', 'npm:object-hash'], function (exports, _emberData, _npmObjectHash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    inject,
    set,
    computed
  } = Ember;

  exports.default = _emberData.default.Model.extend({
    init() {
      this._super(...arguments);

      this.on('didUpdate', this, this.wasUpdated);
      this.on('didCreate', this, this.wasUpdated);
      this.on('didLoad', this, this.applyPatch);
      this.get('hasDirtyAttributes');
      //this.on('didLoad', this, this.wasLoaded);
    },

    settings: inject.service(),
    patch: inject.service(),
    clean: inject.service('cleaner'),
    mdjson: inject.service('mdjson'),

    /**
     * The hash for the clean record.
     *
     * @property currentHash
     * @type {String}
     */

    /**
     * The clean json object.
     *
     * @property jsonSnapshot
     * @type {String}
     */

    observeReload: Ember.observer('isReloading', function () {
      let reloading = this.get('isReloading');

      if (!reloading) {
        this.wasUpdated(this);
      }
    }),

    observeAutoSave: Ember.observer('hasDirtyAttributes', 'hasDirtyHash', function () {
      if (this.get('isNew')) {
        return;
      }

      if (this.get('settings.data.autoSave') && (this.get('hasDirtyHash') || this.get('hasDirtyAttributes'))) {
        Ember.run.once(this, function () {
          this.save();
        });
      }
    }),

    applyPatch() {
      let patch = this.get('patch');

      patch.applyModelPatch(this);
    },

    wasUpdated() {
      this._super(...arguments);

      //let record = model.record || this;
      let json = JSON.parse(this.serialize().data.attributes.json);

      this.setCurrentHash(json);
      this.set('jsonSnapshot', json);
    },

    wasLoaded() {
      this._super(...arguments);

      let json = JSON.parse(this.serialize().data.attributes.json);

      this.setCurrentHash(json);
      this.set('jsonSnapshot', json);
    },

    saved() {
      this.set('dateUpdated', new Date());

      return this._super(...arguments);
    },

    /**
     * Compute and set the model hash.
     *
     * @method setCurrentHash
     * @param {Object} model Optional model with json property to target
     */
    setCurrentHash(json) {
      let target = json || this.get('json');

      set(this, 'currentHash', this.hashObject(target), true);
    },

    /**
     * Computed a hash for the target object.
     *
     * @param  {Object} target    The object to hash
     * @param  {Boolean} parsed    If true, the object will not be passed through
     *                            JSON.parse before being hashed
     * @return {String|undefined} The hash or undefined if an object wasn't provided.
     */
    hashObject(target, parsed) {
      let toHash = parsed ? target : JSON.parse(JSON.stringify(target));

      return typeof toHash === "object" ? (0, _npmObjectHash.default)(toHash) : undefined;
    },

    /**
     * Compare the current hash with the cached one.
     *
     * @property hasDirtyHash
     * @returns {Boolean} Boolean value indicating if hashes are equivalent
     */
    hasDirtyHash: computed('currentHash', function () {
      let newHash = this.hashObject(JSON.parse(this.serialize().data.attributes.json), true);

      //if the currentHash is undefined, the record is either new or hasn't had the
      //hash calculated yet
      if (this.get('currentHash') === undefined) {
        this.set('currentHash', newHash);
      }

      if (this.get('currentHash') !== newHash || this.get('hasDirtyAttributes')) {
        return true;
      }

      return false;
    }),

    canRevert: computed('hasDirtyHash', 'settings.data.autoSave', function () {
      let dirty = this.get('hasDirtyHash');
      let autoSave = this.get('settings.data.autoSave');

      //no autoSave so just check if dirty
      if (!autoSave && dirty) {
        return true;
      }

      let revert = this.get('jsonRevert');

      //if we have set revert object with autoSave on
      if (revert && autoSave) {
        let hash = this.hashObject(JSON.parse(revert), true) !== this.get('currentHash');

        //check if changes have been made
        if (hash) {
          return true;
        }
      }

      return false;
    }),

    cleanJson: computed('json', function () {
      return this.get('clean').clean(this.get('json'));
    }).volatile(),

    status: computed('hasDirtyHash', function () {
      let dirty = this.get('hasDirtyHash');

      if (this.get('currentHash')) {
        return dirty ? 'danger' : 'success';
      }

      return 'success';
    })
  });
});
define('mdeditor/models/contact', ['exports', 'ember-data', 'npm:uuid/v4', 'npm:validator', 'mdeditor/models/base', 'ember-cp-validations'], function (exports, _emberData, _v, _npmValidator, _base, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.JsonDefault = exports.default = undefined;


  const {
    Copyable,
    computed,
    isEmpty,
    get
  } = Ember;

  const Validations = (0, _emberCpValidations.buildValidations)({
    'json.contactId': (0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true
    }),
    'json.name': [(0, _emberCpValidations.validator)('format', {
      regex: /^\s+$/,
      inverse: true,
      isWarning: true,
      message: "Name should not be only white-space."
    }), (0, _emberCpValidations.validator)('presence', {
      disabled: computed.notEmpty('model.json.positionName'),
      presence: true
    })],
    'json.positionName': [(0, _emberCpValidations.validator)('format', {
      regex: /^\s+$/,
      inverse: true,
      isWarning: true,
      message: "Position Name should not be only white-space."
    }), (0, _emberCpValidations.validator)('presence', {
      disabled: computed.notEmpty('model.json.name'),
      presence: true
    })],
    'json.isOrganization': (0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true
    })
  });

  const JsonDefault = Ember.Object.extend({
    init() {
      this._super(...arguments);
      this.setProperties({
        'contactId': (0, _v.default)(),
        'isOrganization': false,
        'name': null,
        //'positionName': null,
        'memberOfOrganization': [],
        'logoGraphic': [],
        'phone': [],
        'address': [],
        'electronicMailAddress': [],
        'onlineResource': [],
        'hoursOfService': []
        //'contactInstructions': null,
        //'contactType': null;
      });
    }
  });

  const Contact = _base.default.extend(Validations, Copyable, {
    /**
     * Contact model
     *
     * @class contact
     * @constructor
     * @extends DS.Model
     * @mixin Ember.Copyable
     * @module mdeditor
     * @submodule data-models
     */

    contacts: _emberData.default.hasMany('contact', {
      inverse: 'organizations'
    }),
    organizations: _emberData.default.hasMany('contact', {
      inverse: 'contacts'
    }),

    /**
     * The json object for the contact. The data for the contact is stored in this
     * object.
     *
     * @attribute json
     * @type {json}
     * @required
     */
    json: _emberData.default.attr('json', {
      defaultValue: function defaultValue() {
        return JsonDefault.create();
      }
    }),

    /**
     * The timestamp for the record
     *
     * @attribute dateUpdated
     * @type {date}
     * @default new Date()
     * @required
     */
    dateUpdated: _emberData.default.attr('date', {
      defaultValue() {
        return new Date();
      }
    }),

    name: computed.alias('json.name'),
    contactId: Ember.computed.alias('json.contactId'),

    /**
     * The formatted display string for the contact
     *
     * @property title
     * @type {String}
     * @readOnly
     * @category computed
     * @requires json.name, json.positionName
     */
    title: computed('json.name', 'json.positionName', function () {
      const json = this.get('json');

      return json.name || (json.isOrganization ? null : json.positionName);
    }),

    // /**
    //  * The formatted display string for the contact
    //  *
    //  * @property title
    //  * @type {String}
    //  * @readOnly
    //  * @category computed
    //  * @requires json.name, json.positionName
    //  */
    // updateMembers: Ember.observer('json.memberOfOrganization.[]',
    //   function () {
    //     //const me = this;
    //     const json = this.get('json');
    //     const value = json.memberOfOrganization;
    //
    //     let store = this.get('store');
    //     let contacts = store.peekAll('contact');
    //     let organizations = this.get('organizations')
    //       .clear();
    //
    //     value.forEach(function (id) {
    //       let rec = contacts.findBy('json.contactId', id);
    //
    //       if(rec) {
    //         organizations.pushObject(rec);
    //       }
    //       //rec.get('contacts').pushObject(me);
    //     });
    //
    //   }),

    /**
     * The type of contact
     *
     * @property type
     * @type {String}
     * @readOnly
     * @category computed
     * @requires json.isOrganization
     */
    type: computed('json.isOrganization', function () {
      return this.get('json.isOrganization') ? 'Organization' : 'Individual';
    }),

    /**
     * The display icon for the contact
     *
     * @property icon
     * @type {String}
     * @readOnly
     * @category computed
     * @requires json.isOrganization
     */
    icon: computed('json.isOrganization', function () {
      const name = this.get('json.isOrganization');

      return name ? 'users' : 'user';
    }),

    /**
     * The URI of the default logo for the contact.
     *
     * @property defaultLogo
     * @type {String}
     * @readOnly
     * @category computed
     * @requires json.logoGraphic.firstObject.fileUri.firstObject.uri
     */
    defaultLogo: computed('json.logoGraphic.firstObject.fileUri.firstObject.uri', 'defaultOrganization', function () {
      let uri = this.get('json.logoGraphic.firstObject.fileUri.firstObject.uri');

      if (uri) {
        return uri;
      }
      let orgId = get(this, 'defaultOrganization');

      if (orgId && orgId !== this.get('json.contactId')) {
        let contacts = this.get('store').peekAll('contact');
        let org = contacts.findBy('json.contactId', orgId);

        if (org) {
          return get(org, 'defaultLogo');
        }
      }

      return null;
    }),

    /**
     * The id of the default organization for the contact.
     *
     * @property defaultOrganization
     * @type {String}
     * @readOnly
     * @category computed
     * @requires json.memberOfOrganization.[]
     */
    defaultOrganization: computed('json.memberOfOrganization.[]', function () {
      const json = this.get('json');

      let {
        memberOfOrganization
      } = json;

      return !isEmpty(memberOfOrganization) ? memberOfOrganization[0] : null;
    }),

    defaultOrganizationName: computed('defaultOrganization', function () {
      let contacts = this.get('store').peekAll('contact');

      let org = contacts.findBy('json.contactId', get(this, 'defaultOrganization'));

      return org ? get(org, 'name') : null;
    }),

    /**
     * The formatted (name or position) and organization(if any) of the contact.
     *
     * @property combinedName
     * @type {String}
     * @readOnly
     * @category computed
     * @requires json.name, json.isOrganization
     */
    combinedName: computed('name', 'json.isOrganization', 'json.positionName', 'json.memberOfOrganization[]', function () {
      const json = this.get('json');

      let {
        name,
        positionName,
        isOrganization,
        memberOfOrganization
      } = json;

      let orgId = !isEmpty(memberOfOrganization) ? memberOfOrganization[0] : null;
      let combinedName = name || positionName;
      let orgName;

      if (orgId) {
        let contacts = this.get('store').peekAll('contact');
        let org = contacts.findBy('json.contactId', orgId);

        if (org) {
          orgName = get(org, 'name');
        }
      }

      if (orgName && !isOrganization) {
        return orgName += ": " + combinedName;
      }

      return combinedName;
    }),

    /**
     * The trimmed varsion of the contactId.
     *
     * @property shortId
     * @type {String}
     * @readOnly
     * @category computed
     * @requires json.contactId
     */
    shortId: Ember.computed('json.contactId', function () {
      const contactId = this.get('json.contactId');
      if (contactId && _npmValidator.default.isUUID(contactId)) {
        let index = contactId.indexOf('-');

        return contactId.substring(0, index);
      }

      return contactId;
    }),

    status: computed('hasDirtyHash', function () {
      let dirty = this.get('hasDirtyHash');
      let errors = this.get('hasSchemaErrors');

      if (this.get('currentHash')) {
        return dirty ? 'danger' : errors ? 'warning' : 'success';
      }

      return 'success';
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
      let mdjson = this.get('mdjson');
      let errors = mdjson.validateContact(this).errors;

      //console.log(errors);

      return errors;
    }),

    /**
     * Create a copy of the record in the store.
     *
     * @method copy
     * @chainable
     * @return {DS.Model}
     */
    copy() {
      let current = this.get('cleanJson');
      let json = Ember.Object.create(current);
      let {
        name,
        positionName,
        isOrganization
      } = current;

      json.setProperties({
        isOrganization: isOrganization,
        name: name ? `Copy of ${name}` : null,
        positionName: name ? positionName : `Copy of ${positionName}`,
        contactId: (0, _v.default)()
      });

      return this.store.createRecord('contact', {
        json: json
      });
    }
  });

  exports.default = Contact;
  exports.JsonDefault = JsonDefault;
});
define('mdeditor/models/coordinator', ['exports', 'mdeditor/models/obj-hash'], function (exports, _objHash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Object.extend(Ember.Evented, {
    objectMap: Ember.computed(function () {
      return _objHash.default.create();
    }),

    getObject: function getObject(id, ops) {
      ops = ops || {};
      var payload = this.get('objectMap').getObj(id);

      if (payload.ops.source) {
        payload.ops.source.sendAction('action', payload.obj);
      }

      if (payload.ops.target) {
        payload.ops.target.sendAction('action', payload.obj);
      }

      this.trigger("objectMoved", { obj: payload.obj, source: payload.ops.source, target: ops.target });

      return payload.obj;
    },

    setObject: function setObject(obj, ops) {
      ops = ops || {};
      return this.get('objectMap').add({ obj: obj, ops: ops });
    }
  });
});
define('mdeditor/models/dictionary', ['exports', 'ember-data', 'mdeditor/models/base', 'ember-cp-validations'], function (exports, _emberData, _base, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  //import uuidV4 from 'npm:uuid/v4';
  //import Validator from 'npm:validator';
  const {
    Copyable,
    computed,
    //isEmpty,
    //get,
    Object: EmObject
  } = Ember;

  const Validations = (0, _emberCpValidations.buildValidations)({
    'json.dataDictionary.citation.title': (0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true
    }),
    'json.dataDictionary.subject': [(0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true
    }), (0, _emberCpValidations.validator)('array-required', {
      track: []
    })]
  });

  const JsonDefault = Ember.Object.extend({
    init() {
      this._super(...arguments);
      this.setProperties({
        dataDictionary: {
          citation: {
            title: null,
            date: [{
              date: new Date().toISOString(),
              dateType: 'creation'
            }]
          },
          description: null,
          subject: [],
          responsibleParty: {},
          domain: [],
          entity: []
        }
      });
    }
  });

  exports.default = _base.default.extend(Validations, Copyable, {
    json: _emberData.default.attr('json', {
      defaultValue() {
        return JsonDefault.create();
      }
    }),
    dateUpdated: _emberData.default.attr('date', {
      defaultValue() {
        return new Date();
      }
    }),

    title: computed('json.dataDictionary.citation.title', function () {
      return this.get('json.dataDictionary.citation.title');
    }),

    icon: 'book',

    status: computed('hasDirtyHash', function () {
      let dirty = this.get('hasDirtyHash');
      let errors = this.get('hasSchemaErrors');

      if (this.get('currentHash')) {
        return dirty ? 'danger' : errors ? 'warning' : 'success';
      }

      return 'success';
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
      let mdjson = this.get('mdjson');
      let errors = mdjson.validateDictionary(this).errors;

      //console.log(errors);

      return errors;
    }),

    copy() {
      let current = this.get('cleanJson');
      let json = EmObject.create(current);
      let name = current.dataDictionary.citation.title;

      json.set('dataDictionary.citation.title', `Copy of ${name}`);

      return this.store.createRecord('dictionary', {
        json: json
      });
    }
  });
});
define('mdeditor/models/obj-hash', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Object.extend({
    content: {},
    contentLength: 0,
    length: Ember.computed.alias('contentLength'),

    add: function add(obj) {
      var id = this.generateId();
      this.get('content')[id] = obj;
      this.incrementProperty("contentLength");
      return id;
    },

    getObj: function getObj(key) {
      var res = this.get('content')[key];
      if (!res) {
        throw "no obj for key " + key;
      }
      return res;
    },

    generateId: function generateId() {
      var num = Math.random() * 1000000000000.0;
      num = parseInt(num);
      num = "" + num;
      return num;
    },

    keys: function keys() {
      var res = [];
      for (var key in this.get('content')) {
        res.push(key);
      }
      return Ember.A(res);
    }

  });
});
define('mdeditor/models/record', ['exports', 'ember-data', 'npm:uuid/v4', 'mdeditor/models/base', 'ember-cp-validations'], function (exports, _emberData, _v, _base, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Copyable,
    computed
  } = Ember;

  const Validations = (0, _emberCpValidations.buildValidations)({
    'recordId': (0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true
    }),
    'json.metadata.resourceInfo.resourceType': [(0, _emberCpValidations.validator)('array-valid'), (0, _emberCpValidations.validator)('array-required', {
      track: ['type']
    })],
    // 'json.resourceInfo.abstract': validator('presence', {
    //   presence: true,
    //   ignoreBlank: true
    // }),
    'json.metadata.resourceInfo.citation.title': (0, _emberCpValidations.validator)('presence', {
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
  exports.default = _base.default.extend(Validations, Copyable, {
    profile: _emberData.default.attr('string', {
      defaultValue: 'full'
    }),
    json: _emberData.default.attr('json', {
      defaultValue() {
        const obj = Ember.Object.create({
          schema: {
            name: 'mdJson',
            version: '2.0.0'
          },
          contact: [],
          metadata: {
            metadataInfo: {
              metadataIdentifier: {
                identifier: (0, _v.default)(),
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
    dateUpdated: _emberData.default.attr('date', {
      defaultValue() {
        return new Date();
      }
    }),

    title: computed.alias('json.metadata.resourceInfo.citation.title'),

    icon: computed('json.metadata.resourceInfo.resourceType.firstObject.type', function () {
      const type = this.get('json.metadata.resourceInfo.resourceType.firstObject.type') || '';
      const list = Ember.getOwner(this).lookup('service:icon');

      return type ? list.get(type) || list.get('default') : list.get('defaultFile');
    }),

    recordId: computed.alias('json.metadata.metadataInfo.metadataIdentifier.identifier'),
    recordIdNamespace: computed.alias('json.metadata.metadataInfo.metadataIdentifier.namespace'),

    parentIds: computed.alias('json.metadata.metadataInfo.parentMetadata.identifier'),

    hasParent: computed('parentIds.[]', function () {
      let ids = this.get('parentIds');
      let records = this.get('store').peekAll('record').rejectBy('hasSchemaErrors');

      if (!ids) {
        return false;
      }

      return ids.find(id => {
        return records.findBy('recordId', id.identifier) ? true : false;
      });
    }),

    defaultParent: computed('hasParent', function () {
      let id = this.get('hasParent.identifier');

      if (!id) {
        return undefined;
      }

      return this.get('store').peekAll('record').findBy('recordId', id);
    }),

    defaultType: computed.alias('json.metadata.resourceInfo.resourceType.firstObject.type'),

    /**
     * The trimmed varsion of the recordId.
     *
     * @property shortId
     * @type {String}
     * @readOnly
     * @category computed
     * @requires recordId
     */
    shortId: Ember.computed('recordId', function () {
      const recordId = this.get('recordId');
      if (recordId) {
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
      let mdjson = this.get('mdjson');
      let errors = mdjson.validateRecord(this).errors;

      //console.log(errors);

      return errors;
    }),

    formatted: computed(function () {
      let mdjson = this.get('mdjson');

      return mdjson.formatRecord(this);
    }).volatile(),

    status: computed('hasDirtyHash', function () {
      let dirty = this.get('hasDirtyHash');
      let errors = this.get('hasSchemaErrors');

      if (this.get('currentHash')) {
        return dirty ? 'danger' : errors ? 'warning' : 'success';
      }

      return 'success';
    }),

    copy() {
      let current = this.get('cleanJson');
      let json = Ember.Object.create(current);
      let name = current.metadata.resourceInfo.citation.title;

      json.set('metadata.resourceInfo.citation.title', `Copy of ${name}`);
      json.set('metadata.metadataInfo.metadataIdentifier', {
        identifier: (0, _v.default)(),
        namespace: 'urn:uuid'
      });

      return this.store.createRecord('record', {
        json: json
      });
    }
  });
});
define('mdeditor/models/setting', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var EmberObject = Ember.Object;


  const {
    //inject,
    run,
    computed,
    observer,
    inject: {
      service
    }
  } = Ember;

  exports.default = _emberData.default.Model.extend({
    settings: service(),

    init() {
      this._super(...arguments);

      //this.on('didUpdate', this, this.wasUpdated);
      this.on('didLoad', this, this.wasLoaded);
      //this.on('didUpdate', this, this.wasLoaded);
      this.get('updateSettings');
    },
    //cleaner: inject.service(),
    compressOnSave: _emberData.default.attr('boolean', {
      defaultValue: true
    }),
    showSplash: _emberData.default.attr('boolean', {
      defaultValue: true
    }),
    autoSave: _emberData.default.attr('boolean', {
      defaultValue: false
    }),
    lastVersion: _emberData.default.attr('string', {
      defaultValue: ''
    }),
    dateUpdated: _emberData.default.attr('date', {
      defaultValue() {
        return new Date();
      }
    }),
    characterSet: _emberData.default.attr('string', {
      defaultValue: 'UTF-8'
    }),
    country: _emberData.default.attr('string', {
      defaultValue: 'USA'
    }),
    language: _emberData.default.attr('string', {
      defaultValue: 'eng'
    }),
    importUriBase: _emberData.default.attr('string', {
      defaultValue: ''
    }),
    repositoryDefaults: _emberData.default.attr('json'),
    publishOptions: _emberData.default.attr('json', {
      defaultValue: function defaultValue() {
        return EmberObject.create();
      }
    }),
    locale: computed.alias('defaultLocale'),

    wasLoaded() {
      this.get('settings').setup();
    },
    updateSettings: observer('hasDirtyAttributes', function () {
      if (this.get('hasDirtyAttributes')) {
        run.once(this, function () {
          this.save();
        });
      }
    })
  });
});
define('mdeditor/pods/components/bs-datetimepicker/component', ['exports', 'ember-bootstrap-datetimepicker/components/bs-datetimepicker'], function (exports, _bsDatetimepicker) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    run: {
      once
    }
  } = Ember;

  exports.default = _bsDatetimepicker.default.extend({
    didReceiveAttrs() {
      // let arg=arguments;
      // once(this, () => {
      //   this._super(...arg);
      // });
      once(this, this._updateDateTimePicker);
    }
  });
});
define('mdeditor/pods/components/control/md-button-confirm/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'button',
    classNames: 'md-button-modal',
    attributeBindings: ['type'],
    type: 'button',
    isShowingConfirm: false,
    propagateClick: false,

    /**
     * The function to call when action is confirmed.
     *
     * @method onConfirm
     * @return {[type]} [description]
     */
    onConfirm() {},

    //click handler, sets button state
    click(evt) {
      if (!this.get('propagateClick')) {
        evt.stopPropagation();
      }

      if (this.get('isShowingConfirm')) {
        this.get('onConfirm')();
      } else {
        this.set('isShowingConfirm', true);
      }
    },

    //cancel confirm state on button blur
    didInsertElement() {
      this._super(...arguments);
      this.$().on('blur', () => {
        this.set('isShowingConfirm', false);
      });
    }
  });
});
define("mdeditor/pods/components/control/md-button-confirm/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "s5F9yz+O", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[20,[\"isShowingConfirm\"]]],null,{\"statements\":[[0,\"  \"],[6,\"i\"],[9,\"class\",\"fa fa-question\"],[7],[8],[0,\" Confirm\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[11,1],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/control/md-button-confirm/template.hbs" } });
});
define('mdeditor/pods/components/control/md-button-modal/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    /**
     * mdEditor Component that renders a button which displays a modal
     * dialog when clicked.
     *
     * @class md-button-modal
     * @module mdeditor
     * @submodule components-control
     * @constructor
     */

    tagName: 'button',
    classNames: 'md-button-modal',
    attributeBindings: ['type'],

    /**
     * Element selector or element that serves as the reference for modal position
     *
     * @property target
     * @type {String}
     */
    target: 'html',

    /**
     * A boolean, when true renders the modal without wormholing or tethering
     *
     * @property renderInPlace
     * @type {Boolean}
     */
    renderInPlace: false,

    /**
     * Indicates whether the modal dialog is being displayed.
     * @type {Boolean}
     */
    isShowingModal: false,

    /**
     * The function to call when action is cancelled.
     *
     * @method onCancel
     */
    onCancel() {},

    /**
     * The function to call when action is confirmed.
     *
     * @method onConfirm
     */
    onConfirm() {},

    //click handler, sets modal state
    click() {
      this.toggleProperty('isShowingModal');
    },

    actions: {
      toggleModal() {
        this.toggleProperty('isShowingModal');
      },
      cancel() {
        this.get('onCancel')();
        this.toggleProperty('isShowingModal');
      },
      confirm() {
        this.get('onConfirm')();
        this.toggleProperty('isShowingModal');
      }
    }
  });
});
define("mdeditor/pods/components/control/md-button-modal/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VPk/18Pl", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1],[0,\"\\n\"],[4,\"control/md-modal\",null,[[\"isShowing\",\"closeModal\",\"target\",\"renderInPlace\"],[[20,[\"isShowingModal\"]],[25,\"action\",[[19,0,[]],\"cancel\"],null],[20,[\"target\"]],[20,[\"renderInPlace\"]]]],{\"statements\":[[0,\"    \"],[1,[18,\"message\"],true],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"md-modal-buttons pull-right\"],[7],[0,\"\\n      \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-danger\"],[3,\"action\",[[19,0,[]],\"confirm\"]],[7],[0,\"Confirm\"],[8],[0,\"\\n      \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-primary\"],[3,\"action\",[[19,0,[]],\"cancel\"]],[7],[0,\"Cancel\"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/control/md-button-modal/template.hbs" } });
});
define('mdeditor/pods/components/control/md-contact-link/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    computed,
    inject,
    LinkComponent,
    get,
    set
  } = Ember;

  exports.default = LinkComponent.extend({
    /**
     * mdEditor Component that accepts a contact identifier and returns the
     * formatted link element.
     *
     * @class md-contact-link
     * @module mdeditor
     * @submodule components-control
     * @constructor
     */

    didReceiveAttrs() {
      //Inline link title comes first, if present.
      let block = !this.get('block') ? [this.get('contact.title')] : [];
      let params = get(this, 'params');
      let add = block.concat(['contact.show', this.get('contact.id')]);

      set(this, 'params', params ? add.concat(params) : add);
      this._super(...arguments);
    },

    store: inject.service(),

    /**
     * The contacts service
     *
     * @property contacts
     * @type {Ember.Service}
     * @readOnly
     */
    contacts: inject.service(),

    /**
     * The contact identifier
     *
     * @property contactId
     * @type {String}
     * @required
     */

    /**
     * Render as block
     *
     * @property block
     * @type {Boolean}
     * @required
     */

    /**
     * The contact record
     *
     * @property contact
     * @type {String}
     * @readOnly
     * @category computed
     * @requires contactId
     */
    contact: computed('contactId', function () {
      let rec = this.get('store').peekAll('contact').findBy('json.contactId', this.get('contactId'));

      return rec;
    }).readOnly()
  });
});
define('mdeditor/pods/components/control/md-contact-title/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    computed,
    inject
  } = Ember;

  exports.default = Component.extend({
    tagName: '',

    store: inject.service(),

    /**
     * mdEditor Component that accepts a contact identifier and returns the
     * contact title or yields the contact in block form.
     *
     * @class md-contact-title
     * @module mdeditor
     * @submodule components-control
     * @constructor
     */

    /**
     * The contact identifier
     *
     * @property contactId
     * @type {String}
     * @required
     */
    /**
     * description
     *
     * @property contact
     * @type {String}
     * @readOnly
     * @category computed
     * @requires contactId
     */
    contact: computed('contactId', function () {
      let rec = this.get('store').peekAll('contact').findBy('json.contactId', this.get('contactId'));

      return rec;
    }).readOnly()
  });
});
define("mdeditor/pods/components/control/md-contact-title/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uXHyiPFw", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[22,1]],null,{\"statements\":[[0,\"  \"],[11,1,[[20,[\"contact\"]]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[25,\"if\",[[20,[\"contact\"]],[20,[\"contact\",\"title\"]],[20,[\"default\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/control/md-contact-title/template.hbs" } });
});
define('mdeditor/pods/components/control/md-crud-buttons/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    classNames: 'md-crud-buttons',

    actions: {
      save: function save() {
        this.sendAction('doSave');
      },

      cancel: function cancel() {
        this.sendAction('doCancel');
      },

      delete: function _delete() {
        this.sendAction('doDelete');
      },

      copy: function copy() {
        this.sendAction('doCopy');
      }
    }
  });
});
define("mdeditor/pods/components/control/md-crud-buttons/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NhZ+iVIF", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"btn-group-vertical center-block\"],[9,\"role\",\"group\"],[9,\"aria-label\",\"CRUD Button Controls\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"doSave\"]]],null,{\"statements\":[[0,\"      \"],[6,\"button\"],[9,\"type\",\"submit\"],[9,\"class\",\"btn btn-lg btn-success\"],[10,\"disabled\",[25,\"if\",[[20,[\"model\",\"hasDirtyHash\"]],false,true],null],null],[3,\"action\",[[19,0,[]],\"save\"]],[7],[0,\"\\n        \"],[6,\"i\"],[9,\"class\",\"fa fa-floppy-o\"],[7],[8],[0,\" Save\\n      \"],[8],[0,\"\\n      \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-lg btn-warning\"],[10,\"disabled\",[25,\"if\",[[20,[\"model\",\"canRevert\"]],false,true],null],null],[3,\"action\",[[19,0,[]],\"cancel\"]],[7],[0,\"\\n        \"],[6,\"i\"],[9,\"class\",\"fa fa-undo\"],[7],[8],[0,\" Cancel\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-lg btn-info\"],[3,\"action\",[[19,0,[]],\"copy\"]],[7],[0,\"\\n    \"],[6,\"i\"],[9,\"class\",\"fa fa-clone\"],[7],[8],[0,\" Copy\\n  \"],[8],[0,\"\\n\"],[4,\"control/md-button-confirm\",null,[[\"class\",\"onConfirm\"],[\"btn btn-lg btn-danger\",[25,\"action\",[[19,0,[]],\"delete\"],null]]],{\"statements\":[[0,\"    \"],[6,\"span\"],[9,\"class\",\"fa fa-times\"],[7],[8],[0,\" Delete\\n\"]],\"parameters\":[]},null],[0,\"  \"],[11,1],[0,\"\\n  \"],[1,[25,\"tooltip-on-element\",null,[[\"class\",\"enableLazyRendering\",\"text\",\"side\"],[\"md-tooltip primary\",false,\"Manage the record\",\"top\"]]],false],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/control/md-crud-buttons/template.hbs" } });
});
define('mdeditor/pods/components/control/md-definition/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    /**
     * mdEditor Component that renders a definition
     *
     * @class md-definition
     * @module mdeditor
     * @submodule components-control
     * @constructor
     */

    tagName: '',

    /**
     * The definition title
     *
     * @property title
     * @type {String}
     */

    /**
     * The class(es) to apply to the definition title
     *
     * @property titleClass
     * @type {String}
     */

    /**
     * The definition text
     *
     * @property text
     * @type {String}
     * @required
     */

    /**
     * The text to display if the text is falsy.
     *
     * @property empty
     * @type {String}
     * @default  'Not Defined'
     */
    empty: 'Not Defined'
  });
});
define("mdeditor/pods/components/control/md-definition/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FK/N3mSX", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"dt\"],[10,\"class\",[26,[[18,\"titleClass\"]]]],[7],[1,[25,\"if\",[[20,[\"title\"]],[20,[\"title\"]],\"--\"],null],false],[8],[0,\"\\n\"],[6,\"dd\"],[7],[0,\"\\n\"],[4,\"if\",[[22,1]],null,{\"statements\":[[0,\"    \"],[11,1],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[20,[\"text\"]]],null,{\"statements\":[[0,\"      \"],[1,[18,\"text\"],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[6,\"em\"],[9,\"class\",\"text-muted\"],[7],[1,[18,\"empty\"],false],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/control/md-definition/template.hbs" } });
});
define('mdeditor/pods/components/control/md-errors/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component
  } = Ember;

  exports.default = Component.extend({
    classNames: ['md-error-list']
  });
});
define("mdeditor/pods/components/control/md-errors/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7a0g9bZ9", "block": "{\"symbols\":[\"err\",\"idx\",\"&default\"],\"statements\":[[6,\"ul\"],[9,\"class\",\"list-group\"],[7],[0,\"\\n\"],[4,\"each\",[[25,\"unbound\",[[20,[\"errors\"]]],null]],null,{\"statements\":[[0,\"    \"],[6,\"li\"],[10,\"class\",[26,[\"list-group-item \",[25,\"if\",[[25,\"mod\",[[19,2,[]],2],null],\"list-group-item-warning\"],null]]]],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"media\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"media-left media-middle\"],[7],[0,\"\\n            \"],[6,\"span\"],[10,\"class\",[26,[\"label label-\",[25,\"if\",[[19,1,[\"dataPath\"]],\"warning\",\"danger\"],null]]]],[7],[1,[19,2,[]],false],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"media-body\"],[7],[0,\"\\n          \"],[6,\"h4\"],[9,\"class\",\"media-heading\"],[7],[1,[19,1,[\"message\"]],false],[8],[0,\" \"],[1,[19,1,[\"dataPath\"]],false],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[1,2]},null],[8],[0,\"\\n\\n\"],[11,3],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/control/md-errors/template.hbs" } });
});
define('mdeditor/pods/components/control/md-fiscalyear/component', ['exports', 'mdeditor/pods/components/input/md-select/component', 'mdeditor/pods/components/input/md-select/template', 'moment'], function (exports, _component, _template, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    computed
  } = Ember;

  exports.default = _component.default.extend({
    layout: _template.default,
    objectArray: computed(function () {
      return Array.apply(0, Array(12)).map(function (element, index) {
        return {
          year: index + ((0, _moment.default)().year() - 10)
        };
      });
    }),
    label: 'Fiscal Year',
    valuePath: 'year',
    namePath: 'year',
    tooltip: false,
    searchEnabled: true,
    placeholder: 'Select a Fiscal Year.',
    create: true,
    change() {
      let val = this.get('value');
      let start = (0, _moment.default)(val, 'YYYY').subtract(1, 'year').month('October').startOf('month');
      let end = (0, _moment.default)(val, 'YYYY').month('September').endOf('month');
      let context = this.get('context');

      this.setProperties({
        end: end,
        start: start
      });

      //have to set values using datetimepicker
      context.$('.start .date').data("DateTimePicker").date(start);
      context.$('.end .date').data("DateTimePicker").date(end);
    }
  });
});
define('mdeditor/pods/components/control/md-json-button/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  var inject = Ember.inject.service;
  exports.default = Component.extend({
    slider: inject(),

    tagName: 'button',
    classNames: ['btn'],
    attributeBindings: ['type'],
    type: 'button',

    text: 'Preview JSON',
    icon: 'binoculars',
    json: {},
    hideSlider: true,
    propagateClick: false,

    click(evt) {
      //this.set('preview', true);
      if (!this.get('propagateClick')) {
        evt.stopPropagation();
      }
      this.showSlider();
    },

    _close() {
      this.set('preview', false);
      this.set('hideSlider', true);
    },

    showSlider() {
      let slider = this.get('slider');

      slider.set('fromName', 'md-slider-json');
      slider.set('onClose', this.get('_close'));
      slider.set('context', this);
      slider.toggleSlider(true);
      this.set('hideSlider', false);
    },

    actions: {
      close() {
        this.get('_close');
      },
      showSlider() {
        this.showSlider();
      }
    }
  });
});
define("mdeditor/pods/components/control/md-json-button/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Rox9rVZK", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[22,1]],null,{\"statements\":[[0,\"  \"],[11,1],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[6,\"span\"],[10,\"class\",[26,[\"fa fa-\",[18,\"icon\"]]]],[7],[8],[0,\" \"],[1,[18,\"text\"],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"if\",[[20,[\"preview\"]]],null,{\"statements\":[[0,\"  \"],[1,[25,\"control/md-json-viewer\",null,[[\"json\",\"modal\",\"close\"],[[20,[\"json\"]],true,[25,\"action\",[[19,0,[]],\"close\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"unless\",[[20,[\"hideSlider\"]]],null,{\"statements\":[[0,\"  \"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-slider-json\",[25,\"hash\",null,[[\"title\",\"body\"],[[25,\"concat\",[\"Viewing JSON for: \",[20,[\"title\"]]],null],[25,\"component\",[\"control/md-json-viewer\"],[[\"modal\",\"json\"],[false,[20,[\"json\"]]]]]]]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/control/md-json-button/template.hbs" } });
});
define('mdeditor/pods/components/control/md-json-viewer/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    typeOf
  } = Ember;

  exports.default = Component.extend({
    classNames: 'md-json-viewer',
    /**
     * True to render in modal dialog
     *
     * @type {Boolean}
     */
    modal: true,

    /**
     * Element selector or element that serves as the reference for modal position
     *
     * @property target
     * @type {String}
     */
    target: 'html',

    /**
     * Object or string to render as JSON in viewer
     *
     * @type {ObjectString}
     */
    json: {},

    close() {
      this.set('modal', false);
    },

    setFontSize(el, factor) {
      let currentFontSize = el.css('font-size');
      let currentFontSizeNum = parseFloat(currentFontSize, 10);
      let newFontSize = currentFontSizeNum * factor;

      el.animate({
        'font-size': `${newFontSize}px`
      });
    },

    didInsertElement() {
      let json = this.get('json');
      let out = typeOf(json) === 'string' ? json : JSON.stringify(json);

      Ember.$('.md-viewer-body').JSONView(out);
    },

    actions: {
      collapse() {
        this.$('.md-viewer-body').JSONView('collapse');
      },
      expand() {
        this.$('.md-viewer-body').JSONView('expand');
      },
      zoomin() {
        let body = this.$('.md-viewer-body');
        this.setFontSize(body, 1.1);
      },
      zoomout() {
        let body = this.$('.md-viewer-body');
        this.setFontSize(body, 0.9);
      },
      closeModal() {
        this.close();
      }
    }
  });
});
define("mdeditor/pods/components/control/md-json-viewer/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "PkyNkOwp", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[20,[\"modal\"]]],null,{\"statements\":[[4,\"modal-dialog\",null,[[\"close\",\"translucentOverlay\",\"container-class\",\"overlay-class\",\"attachment\",\"targetAttachment\",\"tetherTarget\"],[\"closeModal\",true,\"md-jsmodal-container\",\"md-modal-overlay\",\"top center\",\"top center\",\"html\"]],{\"statements\":[[0,\"    \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"md-modal-close\"],[9,\"aria-label\",\"Close\"],[3,\"action\",[[19,0,[]],\"closeModal\"]],[7],[0,\"\\n      \"],[6,\"span\"],[9,\"class\",\"fa-stack\"],[7],[0,\"\\n          \"],[6,\"i\"],[9,\"class\",\"fa fa-circle fa-stack-2x\"],[7],[8],[0,\"\\n          \"],[6,\"i\"],[9,\"class\",\"fa fa-times fa-stack-1x fa-inverse\"],[7],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"md-viewer-body\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"well\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"btn-toolbar md-viewer-controls pull-right\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"btn-group-vertical\"],[9,\"role\",\"group\"],[9,\"aria-label\",\"JSON viewer controls\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-primary\"],[9,\"title\",\"Expand All\"],[3,\"action\",[[19,0,[]],\"expand\"]],[7],[1,[25,\"fa-icon\",[\"plus\"],null],false],[8],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default\"],[9,\"title\",\"Collapse All\"],[3,\"action\",[[19,0,[]],\"collapse\"]],[7],[1,[25,\"fa-icon\",[\"minus\"],null],false],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"btn-group-vertical\"],[9,\"role\",\"group\"],[9,\"aria-label\",\"JSON viewer controls\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-primary\"],[9,\"title\",\"Zoom in\"],[3,\"action\",[[19,0,[]],\"zoomin\"]],[7],[1,[25,\"fa-icon\",[\"search\"],null],false],[8],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default\"],[9,\"title\",\"Zoom Out\"],[3,\"action\",[[19,0,[]],\"zoomout\"]],[7],[1,[25,\"fa-icon\",[\"search-minus\"],null],false],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"md-viewer-body\"],[7],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/control/md-json-viewer/template.hbs" } });
});
define('mdeditor/pods/components/control/md-modal/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    /**
     * Whether to display the modal
     *
     * @prop isShowing
     * @type {Boolean}
     */
    isShowing: false,

    /**
     * Text to display in the modal.
     * Note: This string is NOT escaped in the template.
     *
     * @property message
     * @type {String}
     */

    /**
     * Element selector or element that serves as the reference for modal position
     *
     * @property target
     * @type {String}
     */
    target: 'viewport',

    /**
     * Whether to display the confirm button
     *
     * @property showConfirm
     * @type {Boolean}
     */
    showConfirm: false,

    /**
     * Whether to render in place
     *
     * @property renderInPlace
     * @type {Boolean}
     */
    renderInPlace: false,

    /**
     * Whether to display the cancel button
     *
     * @property showCancel
     * @type {Boolean}
     */
    showCancel: false,

    /**
     * Label for the confirm button
     *
     * @property confirmLabel
     * @type {String}
     */
    confirmLabel: 'OK',

    /**
     * Close action callback
     */
    closeModal() {
      this.set('isShowing', false);
    },

    /**
     * Confirm action callback
     */
    confirm() {
      this.closeModal();
    },

    /**
     * Cancel action callback
     */
    cancel() {
      this.closeModal();
    },

    actions: {
      closeModal() {
        this.closeModal();
      },

      confirm() {
        this.confirm();
      },

      cancel() {
        this.cancel();
      }
    }
  });
});
define("mdeditor/pods/components/control/md-modal/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "eUe8oFSa", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[20,[\"isShowing\"]]],null,{\"statements\":[[4,\"modal-dialog\",null,[[\"onClose\",\"targetAttachment\",\"attachment\",\"translucentOverlay\",\"containerClass\",\"overlayClass\",\"tetherTarget\",\"renderInPlace\"],[\"closeModal\",\"middle center\",\"middle center\",true,\"md-modal-container\",\"md-modal-overlay\",[20,[\"target\"]],[20,[\"renderInPlace\"]]]],{\"statements\":[[0,\"    \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"md-modal-close\"],[9,\"aria-label\",\"Close\"],[3,\"action\",[[19,0,[]],\"closeModal\"]],[7],[0,\"\\n      \"],[6,\"span\"],[9,\"class\",\"fa-stack\"],[7],[0,\"\\n            \"],[6,\"i\"],[9,\"class\",\"fa fa-circle fa-stack-2x\"],[7],[8],[0,\"\\n            \"],[6,\"i\"],[9,\"class\",\"fa fa-times fa-stack-1x fa-inverse\"],[7],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"md-modal-body\"],[7],[0,\"\\n      \"],[11,1],[0,\" \"],[1,[18,\"message\"],true],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"md-modal-buttons pull-right\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"showConfirm\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-success\"],[3,\"action\",[[19,0,[]],\"confirm\"]],[7],[1,[18,\"confirmLabel\"],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[20,[\"showCancel\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-warning\"],[3,\"action\",[[19,0,[]],\"cancel\"]],[7],[0,\"Cancel\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/control/md-modal/template.hbs" } });
});
define('mdeditor/pods/components/control/md-record-table/buttons/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;


  const {
    inject: {
      service
    }
  } = Ember;

  exports.default = Component.extend({
    router: service(),
    classNames: ['md-dashboard-buttons'],

    actions: {
      deleteItem(item, index, isSelected, clickOnRow) {
        if (isSelected) {
          clickOnRow(index, item);
        }

        this._deleteItem(item);
      },

      editItem(item, evt) {
        evt.stopPropagation();
        this.get('router').transitionTo(`${item.constructor.modelName}.show.edit`, item);

        return false;
      }
    },

    _deleteItem(item) {
      item.destroyRecord().then(() => {
        item.unloadRecord();
      });
    }
  });
});
define('mdeditor/pods/components/control/md-record-table/buttons/custom/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define("mdeditor/pods/components/control/md-record-table/buttons/custom/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+04iR/OI", "block": "{\"symbols\":[\"c\"],\"statements\":[[4,\"with\",[[20,[\"column\",\"buttonConfig\"]]],null,{\"statements\":[[0,\"  \"],[6,\"button\"],[9,\"type\",\"button\"],[10,\"class\",[26,[\"btn btn-sm btn-\",[25,\"if\",[[19,1,[\"style\"]],[19,1,[\"style\"]],\"primary\"],null]]]],[10,\"onclick\",[25,\"action\",[[19,0,[]],[19,1,[\"action\"]],[20,[\"record\"]]],null],null],[7],[0,\"\\n    \"],[1,[25,\"fa-icon\",[\"binoculars\"],null],false],[0,\" \"],[1,[19,1,[\"title\"]],false],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/control/md-record-table/buttons/custom/template.hbs" } });
});
define('mdeditor/pods/components/control/md-record-table/buttons/filter/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    computed,
    inject,
    run: {
      once
    }
  } = Ember;

  exports.default = Component.extend({
    flashMessages: inject.service(),
    showButton: computed('selectedItems.[]', function () {
      return this.get('selectedItems.length') > 1;
    }),
    actions: {
      deleteSelected(records) {
        records.forEach(rec => {
          rec.destroyRecord().then(rec => {
            rec.unloadRecord();
            once(() => {
              records.removeObject(rec);
              this.get('flashMessages').danger(`Deleted ${rec.constructor.modelName} "${rec.get('title')}".`);
            });
          });
        });
      }
    }
  });
});
define("mdeditor/pods/components/control/md-record-table/buttons/filter/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "yK2wXS95", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[20,[\"showButton\"]]],null,{\"statements\":[[4,\"control/md-button-confirm\",null,[[\"class\",\"onConfirm\"],[\"btn btn-danger btn-block\",[25,\"action\",[[19,0,[]],\"deleteSelected\",[20,[\"selectedItems\"]]],null]]],{\"statements\":[[0,\"    \"],[6,\"span\"],[9,\"class\",\"fa fa-times\"],[7],[8],[0,\" Delete Selected\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/control/md-record-table/buttons/filter/template.hbs" } });
});
define('mdeditor/pods/components/control/md-record-table/buttons/show/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: ''
  });
});
define("mdeditor/pods/components/control/md-record-table/buttons/show/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Ln1dT965", "block": "{\"symbols\":[],\"statements\":[[4,\"link-to\",[[25,\"concat\",[[20,[\"record\",\"constructor\",\"modelName\"]],\".show\"],null],[20,[\"record\",\"id\"]]],[[\"class\"],[\"btn btn-sm btn-info\"]],{\"statements\":[[0,\"  \"],[1,[25,\"fa-icon\",[\"eye\"],null],false],[0,\" Show\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/control/md-record-table/buttons/show/template.hbs" } });
});
define("mdeditor/pods/components/control/md-record-table/buttons/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "CvcHpeUq", "block": "{\"symbols\":[\"&default\"],\"statements\":[[1,[25,\"control/md-record-table/buttons/show\",null,[[\"record\"],[[20,[\"record\"]]]]],false],[0,\"\\n\"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-sm btn-success\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"editItem\",[20,[\"record\"]]],null],null],[7],[0,\"\\n  \"],[1,[25,\"fa-icon\",[\"pencil\"],null],false],[0,\" Edit\\n\"],[8],[0,\"\\n\"],[4,\"control/md-button-confirm\",null,[[\"class\",\"onConfirm\"],[\"btn btn-sm btn-danger\",[25,\"action\",[[19,0,[]],\"deleteItem\",[20,[\"record\"]],[20,[\"index\"]],[20,[\"isSelected\"]],[20,[\"clickOnRow\"]]],null]]],{\"statements\":[[0,\"  \"],[6,\"span\"],[9,\"class\",\"fa fa-times\"],[7],[8],[0,\" Delete\\n\"]],\"parameters\":[]},null],[1,[25,\"control/md-json-button\",null,[[\"class\",\"json\",\"title\"],[\"btn-sm btn-primary\",[20,[\"record\",\"cleanJson\"]],[20,[\"record\",\"title\"]]]]],false],[0,\"\\n\"],[1,[25,\"control/md-status\",null,[[\"model\",\"isBtn\",\"hideSlider\",\"showSlider\"],[[20,[\"record\"]],true,true,[25,\"route-action\",[\"showSlider\",[20,[\"record\"]]],null]]]],false],[0,\"\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/control/md-record-table/buttons/template.hbs" } });
});
define('mdeditor/pods/components/control/md-record-table/component', ['exports', 'mdeditor/pods/components/md-models-table/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    get,
    computed,
    A
  } = Ember;

  exports.default = _component.default.extend({
    /**
     * @module mdeditor
     * @submodule components-control
     */

    /**
     * Table used to display objects. Includes column to toggle selection for all
     * rows.
     *
     *```handlebars
     * \{{control/md-record-table
     *   data=model.data
     *   columns=model.columns
     *   select=callback
     * }}
     * ```
     *
     * @class md-select-table
     * @extends models-table
     */

    classNames: ['md-record-table'],

    /**
    * Property name used to identify selected records. Should begin with underscore.
    *
    * @property selectProperty
    * @type {String}
    * @default "_selected"
    * @static
    * @readOnly
    * @required
    */
    selectProperty: '_selected',

    /**
     * Array of table records
     *
     * @property data
     * @type {Array}
     * @default []
     * @required
     */

    /**
     * Array of column configs for the table.
     * See http://onechiporenko.github.io/ember-models-table
     *
     * ```javascript
     * [{
     *  propertyName: 'id',
     *  title: 'ID'
     * }, {
     *  title: '',
     *  template: 'components/leaflet-table/actions',
     *  className: 'text-center text-nowrap'
     * }]
     * ```
     *
     * @property dataColumns
     * @type {Array}
     * @required
     * @default []
     */
    dataColumns: A(),

    /**
     * Column configs for the checkbox column.
     * See http://onechiporenko.github.io/ember-models-table
     *
     *
     * @property checkColumns
     * @type {Object}
     * @required
     */
    checkColumn: {
      component: 'components/md-models-table/components/check',
      disableFiltering: true,
      mayBeHidden: false,
      componentForSortCell: 'components/md-models-table/components/check-all',
      className: 'text-center'
    },

    /**
     * Column configs for the action column.
     * See http://onechiporenko.github.io/ember-models-table
     *
     *
     * @property checkColumns
     * @type {Object}
     * @required
     */
    actionsColumn: computed('allActions', function () {
      let all = this.get('allActions');

      return {
        title: 'Actions',
        component: all ? 'control/md-record-table/buttons' : 'control/md-record-table/buttons/show',
        disableFiltering: !all,
        componentForFilterCell: all ? 'control/md-record-table/buttons/filter' : null
      };
    }),

    columns: computed('dataColumns', 'checkColumn', function () {
      let chk = get(this, 'checkColumn');
      let action = get(this, 'actionsColumn');
      let cols = get(this, 'dataColumns');

      if (chk) {
        cols = [chk].concat(cols);
      }

      if (action) {
        cols.push(action);
      }

      return cols;
    }),

    filteringIgnoreCase: true,
    //rowTemplate: 'components/control/md-select-table/row',

    multipleSelect: true,
    preselectedItems: computed(function () {
      let prop = this.get('selectProperty');

      return this.get('data').filterBy(prop);
    }),

    /**
     * Callback on row selection.
     *
     * @method select
     * @param {Object} rec Selected record.
     * @param {Number} index Selected row index.
     * @param {Array} selected Selected records.
     * @return {Array} Selected records.
     */
    select(rec, index, selected) {
      return selected;
    },

    actions: {
      clickOnRow(idx, rec) {
        this._super(...arguments);

        let prop = this.get('selectProperty');
        let sel = get(this, '_selectedItems');

        rec.toggleProperty(prop);
        this.get('select')(rec, idx, sel);
      },

      toggleAllSelection() {
        this._super(...arguments);

        let selected = get(this, '_selectedItems');
        let prop = this.get('selectProperty');
        let data = get(this, 'data');

        if (get(selected, 'length')) {
          selected.setEach(prop, true);
          return;
        }

        data.setEach(prop, false);

        this.get('select')(null, null, selected);
      }
    }
  });
});
define('mdeditor/pods/components/control/md-repo-link/component', ['exports', 'mdeditor/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    APP: {
      repository,
      version
    }
  } = _environment.default;

  exports.default = Ember.Component.extend({
    tagName: 'a',
    attributeBindings: ['href', 'target'],
    classNames: ['md-fa-link'],

    /**
     * Application repository URL.
     *
     * @property repository
     * @type string
     */
    repository,

    /**
     * Link target, open in new window by default.
     *
     * @property target
     * @type string
     */
    target: '_blank',

    /**
     * Application version.
     *
     * @property version
     * @type string
     */
    version,

    /**
     * The commit hash reference.
     *
     * @property hash
     * @type {Ember.computed}
     * @return string
     */
    hash: Ember.computed('version', function () {
      let idx = this.get('version').indexOf('+') + 1;

      return version.substring(idx);
    }),

    /**
     * The url link
     *
     * @property href
     * @type {Ember.computed}
     * @return string
     */
    href: Ember.computed('repository', 'hash', function () {
      let repo = this.get('repository');
      let hash = this.get('hash');

      return `${repo}/tree/${hash}`;
    })
  });
});
define("mdeditor/pods/components/control/md-repo-link/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kcA/FT/Y", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[22,1]],null,{\"statements\":[[0,\"  \"],[11,1],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[18,\"version\"],false],[1,[25,\"fa-icon\",[\"github\"],null],false],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/control/md-repo-link/template.hbs" } });
});
define('mdeditor/pods/components/control/md-scroll-spy/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    computed,
    $,
    A,
    get
  } = Ember;

  exports.default = Component.extend({
    /**
     * mdEditor Component that enables scrollspy
     *
     * @class md-scroll-spy
     * @module mdeditor
     * @submodule components-control
     * @constructor
     */

    classNames: ['md-scroll-spy'],

    /**
     * The height to offset from top of container.
     *
     * @property offset
     * @type {Number}
     * @default 110
     */
    offset: 110,

    /**
     * The initial scroll target when the component is inserted.
     *
     * @property scrollInit
     * @type {String}
     */

    /**
     * The method(action) used to set the scroll target. Should accept a string with
     * the target.
     *
     * @method setScrollTo
     * @param {String} scrollTo The scroll target
     */

    /**
     * Array of data objects for the navigatoin links.
     *
     * @property links
     * @type {Array}
     * @category computed
     * @requires
     */
    links: computed('refresh', function () {
      //console.info('computed links');

      let liquid = '';

      if ($('.liquid-spy').length) {
        liquid = $('.liquid-spy .liquid-child:first .liquid-container').length ? '.liquid-spy .liquid-child:first .liquid-container:last ' : '.liquid-spy ';
        liquid += '.liquid-child:first ';
      }

      let $targets = $(`${liquid}[data-spy]:visible`);
      let links = A();

      $targets.each(function (idx, link) {
        let $link = $(link);

        links.pushObject({
          id: $link.attr('id'),
          text: $link.attr('data-spy'),
          embedded: $link.hasClass('md-embedded')
        });
      });

      return links;
    }),

    /**
     * Click handler for nav links.
     *
     * @method clickLink
     * @param {Event} e The click event.
     */
    clickLink(e) {
      let setScrollTo = this.get('setScrollTo');
      let $target = $(e.currentTarget);
      let targetId = $target.attr('href');

      e.preventDefault();
      this.scroll(targetId);

      if (typeof setScrollTo === 'function') {
        setScrollTo($target.text().dasherize());
      }
    },

    /**
     * Setup the scrollspy on  the body element
     *
     * @method setupSpy
     */
    setupSpy() {
      $('body').scrollspy({
        target: '.md-scroll-spy',
        offset: get(this, 'offset')
      });
    },

    /**
     * Call setupSpy and perform initial scroll.
     *
     * @method didInsertElement
     */
    didInsertElement() {
      this._super(...arguments);
      this.setupSpy();

      let init = this.get('scrollInit');

      if (!init || init === 'top') {
        this.scroll();
      } else {
        let link = this.get('links').find(link => {
          return init === link.text.dasherize();
        });

        if (link) {
          this.scroll('#' + link.id);
        }
      }
    },

    /**
     * Scrolls to the target.
     *
     * @method MyMethod
     * @param {String} id elemnet id of target
     * @param {Boolean} hilite If true, set the spy nav link to active
     */
    scroll(id, hilite) {
      let $anchor = $(id);

      if ($anchor.length === 0) {
        $('html, body').scrollTop(0 - get(this, 'offset'));
        return;
      }
      $('html, body').scrollTop($anchor.offset().top - get(this, 'offset'));

      if (hilite) {
        $('[href=#' + id + ']').closest('li').addClass('active');
      }

      $anchor.removeClass('md-flash');
      void $anchor[0].offsetWidth;
      $anchor.addClass('md-flash');
    },

    actions: {
      clickLink(e) {
        this.clickLink(e);
      }
    }
  });
});
define("mdeditor/pods/components/control/md-scroll-spy/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JkFO7AuW", "block": "{\"symbols\":[\"link\",\"&default\"],\"statements\":[[6,\"ul\"],[9,\"class\",\"nav nav-pills nav-stacked\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"links\"]]],null,{\"statements\":[[0,\"    \"],[6,\"li\"],[10,\"class\",[26,[[25,\"if\",[[19,1,[\"embedded\"]],\"md-embedded\"],null]]]],[7],[0,\"\\n      \"],[6,\"a\"],[10,\"href\",[26,[\"#\",[19,1,[\"id\"]]]]],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"clickLink\"],null],null],[7],[1,[19,1,[\"text\"]],false],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[11,2],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/control/md-scroll-spy/template.hbs" } });
});
define('mdeditor/pods/components/control/md-select-table/component', ['exports', 'mdeditor/pods/components/md-models-table/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    get
  } = Ember;

  exports.default = _component.default.extend({
    /**
     * @module mdeditor
     * @submodule components-control
     */

    /**
     * Table with action on row click. Used to select objects(records).
     *
     *```handlebars
     * \{{control/md-select-table
     *   data=model.data
     *   columns=model.columns
     *   select=callback
     * }}
     * ```
     *
     * @class md-select-table
     * @extends models-table
     */

    classNames: ['md-select-table'],

    /**
     * Array of table records
     *
     * @property data
     * @type {Array}
     * @default []
     * @required
     */

    /**
     * Array of column configs for the table.
     * See http://onechiporenko.github.io/ember-models-table
     *
     * ```javascript
     * [{
     *  propertyName: 'id',
     *  title: 'ID'
     * }, {
     *  title: '',
     *  template: 'components/leaflet-table/actions',
     *  className: 'text-center text-nowrap'
     * }]
     * ```
     *
     * @property columns
     * @type {Array}
     * @required
     * @default []
     */

    filteringIgnoreCase: true,

    /**
     * Callback on row selection.
     *
     * @method select
     * @param {Array} selected Selected items.
     * @return {Array}
     */
    select(selected) {
      return selected;
    },

    actions: {
      clickOnRow() {
        this._super(...arguments);

        let sel = get(this, '_selectedItems');

        this.get('select')(sel);
      }
    }
  });
});
define('mdeditor/pods/components/control/md-spinner/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    classNames: ['text-center', 'md-spinner']

    /**
    * The size of the FontAwesome icon.
    *
    * @property size
    * @type {String}
    * @default "false"
    * @optional
    */

    /**
    * The the text to show below the spinner.
    *
    * @property text
    * @type {String}
    * @optional
    */
  });
});
define("mdeditor/pods/components/control/md-spinner/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Djxm5n7P", "block": "{\"symbols\":[\"&default\"],\"statements\":[[1,[25,\"fa-icon\",[\"spinner\"],[[\"pulse\",\"size\"],[true,[20,[\"size\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[10,\"class\",[26,[\"md-spinner-text size-\",[18,\"size\"]]]],[7],[0,\"\\n    \"],[1,[18,\"text\"],false],[0,\"\\n\"],[8],[0,\"\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/control/md-spinner/template.hbs" } });
});
define('mdeditor/pods/components/control/md-spotlight/component', ['exports', 'ember-modal-dialog/components/modal-dialog'], function (exports, _modalDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    inject: {
      service
    }
  } = Ember;

  exports.default = _modalDialog.default.extend({
    /**
     * Component that highlights a DOM element
     *
     * @class md-spotlight
     * @module mdeditor
     * @submodule components-control
     * @extends modal-dialog
     * @uses service-spotlight
     * @constructor
     */

    /**
     * The inected spotlight Service
     *
     * @property spotlight
     * @type {Service}
     */
    spotlight: service(),

    containerClassNames: ['md-spotlight-modal'],
    overlayClassNames: ['md-modal-overlay'],
    targetAttachment: 'none',
    translucentOverlay: true,
    clickOutsideToClose: false,
    tetherTarget: 'viewport',

    // /**
    // * The id of the DOM element to spotlight. Uses the spotlight service "elementId"
    // * by default.
    // *
    // * @property spotlightTargetId
    // * @type {String}
    // * @default "computed.alias('spotlight.elementId')"
    // * @category computed
    // * @requires spotlight.elementId
    // * @required
    // */
    // spotlightTargetId: computed.alias('spotlight.elementId'),

    // willInsertElement() {
    //   $('.md-modal-overlay').click();
    // },
    // didInsertElement() {
    //   this._super(...arguments);
    //
    //   let id = this.get('spotlightTargetId');
    //
    //   if(isPresent(id)) {
    //     $('body').addClass('md-no-liquid');
    //     $('#' + id).addClass('md-spotlight-target');
    //   }
    //
    // },

    actions: {
      onClose() {
        this._super(...arguments);
        this.get('spotlight').close();
      },

      onClickOverlay() {
        this._super(...arguments);
        this.get('spotlight').close();
      }
    }
  });
});
define('mdeditor/pods/components/control/md-status/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  const {
    Component,
    get,
    inject
  } = Ember;

  exports.default = Component.extend({
    slider: inject.service(),
    tagName: 'span',
    classNames: ['md-status'],

    /**
     * Model to display status for.
     *
     * @property model
     * @type {DS.model}
     * @required
     */

    isBtn: false,
    hideSlider: false,
    btnSize: 'sm',

    showSlider() {
      let slider = this.get('slider');

      slider.set('fromName', 'md-slider-error');
      slider.toggleSlider(true);
    },

    actions: {
      showSlider(evt) {
        this.showSlider(evt);
      },

      saveRecord(evt) {
        let model = this.get('model');

        evt.stopPropagation();
        model.save().then(() => {
          get(this, 'flashMessages').success(`Saved Record: ${model.get('title')}`);
        });
      }
    }
  });
});
define("mdeditor/pods/components/control/md-status/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VHhV2oNN", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[20,[\"model\",\"hasDirtyHash\"]]],null,{\"statements\":[[6,\"span\"],[9,\"class\",\"md-status-icon\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"saveRecord\"],null],null],[7],[0,\"\\n  \"],[1,[25,\"fa-icon\",[\"exclamation-circle\"],[[\"class\"],[[25,\"if\",[[20,[\"isBtn\"]],[25,\"concat\",[\"btn btn-danger btn-\",[20,[\"btnSize\"]]],null],\"md-error\"],null]]]],false],[0,\"\\n  \"],[1,[25,\"tooltip-on-element\",null,[[\"text\",\"side\",\"class\"],[\"This record has been modified! Cick to save.\",\"top\",\"md-tooltip danger\"]]],false],[0,\"\\n\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"model\",\"hasSchemaErrors\"]]],null,{\"statements\":[[6,\"span\"],[9,\"class\",\"md-status-icon\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"showSlider\"],null],null],[7],[0,\"\\n  \"],[1,[25,\"fa-icon\",[\"exclamation-circle\"],[[\"class\"],[[25,\"if\",[[20,[\"isBtn\"]],[25,\"concat\",[\"btn btn-warning btn-\",[20,[\"btnSize\"]]],null],\"md-warning\"],null]]]],false],[0,\"\\n  \"],[1,[25,\"tooltip-on-element\",null,[[\"text\",\"side\",\"class\"],[\"This record has errors! Click to view.\",\"right\",\"md-tooltip warning\"]]],false],[0,\"\\n\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"unless\",[[20,[\"hideSlider\"]]],null,{\"statements\":[[0,\"  \"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-slider-error\",[25,\"hash\",null,[[\"title\",\"body\"],[[25,\"concat\",[\"Viewing errors for: \",[20,[\"model\",\"title\"]]],null],[25,\"component\",[\"control/md-errors\"],[[\"errors\"],[[20,[\"model\",\"hasSchemaErrors\"]]]]]]]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/control/md-status/template.hbs" } });
});
define('mdeditor/pods/components/control/subbar-citation/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    selectResource() {
      return this;
    }
  });
});
define("mdeditor/pods/components/control/subbar-citation/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7gNZth3g", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"btn-group-vertical center-block\"],[9,\"role\",\"group\"],[9,\"aria-label\",\"Citation Button Controls\"],[7],[0,\"\\n  \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-lg btn-info btn-block md-btn-responsive\"],[3,\"action\",[[19,0,[]],[20,[\"selectResource\"]]]],[7],[0,\"\\n    \"],[1,[25,\"fa-icon\",[\"check\"],null],false],[0,\" Select a Record\\n    \"],[1,[25,\"tooltip-on-element\",null,[[\"text\",\"class\",\"side\"],[\"Select a record to copy into the association.\\n        Note: This will only copy information.\",\"md-tooltip primary\",\"left\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[4,\"link-to\",[[20,[\"route\"]]],[[\"class\"],[\"btn btn-lg btn-primary btn-block md-btn-responsive\"]],{\"statements\":[[0,\" \"],[1,[25,\"fa-icon\",[[20,[\"icon\"]]],null],false],[0,\" \"],[1,[18,\"text\"],false]],\"parameters\":[]},null],[0,\"\\n  \"],[11,1],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/control/subbar-citation/template.hbs" } });
});
define('mdeditor/pods/components/control/subbar-extent/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    actionContext: Ember.computed('context', function () {
      return this.get('context')();
    })
  });
});
define("mdeditor/pods/components/control/subbar-extent/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VLjYGIzb", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"hr\"],[7],[8],[0,\"\\n\"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-lg btn-success btn-block md-btn-responsive\"],[3,\"action\",[[19,0,[]],\"addExtent\"],[[\"target\"],[[20,[\"actionContext\"]]]]],[7],[0,\"\\n  \"],[1,[25,\"fa-icon\",[\"plus\"],null],false],[0,\" Add Geographic Extent\"],[8],[0,\"\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/control/subbar-extent/template.hbs" } });
});
define('mdeditor/pods/components/control/subbar-keywords/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    actionContext: Ember.computed('context', function () {
      return this.get('context')();
    })
  });
});
define("mdeditor/pods/components/control/subbar-keywords/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "t29oYEEz", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"hr\"],[7],[8],[0,\"\\n\"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-lg btn-success btn-block md-btn-responsive\"],[3,\"action\",[[19,0,[]],\"addThesaurus\"],[[\"target\"],[[20,[\"actionContext\"]]]]],[7],[0,\"\\n  \"],[1,[25,\"fa-icon\",[\"plus\"],null],false],[0,\" Add Thesaurus\"],[8],[0,\"\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/control/subbar-keywords/template.hbs" } });
});
define('mdeditor/pods/components/control/subbar-link/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    computed: {
      or
    }
  } = Ember;

  exports.default = Component.extend({
    /**
     * mdEditor Component that renders a button used to navigate to a parent route
     * or perform an action on click.
     *
     * @class md-button-modal
     * @module mdeditor
     * @submodule components-control
     * @constructor
     */

    /**
     * The text to display
     *
     * @property text
     * @type {String}
     * @required
     */

    /**
     * The click text to display
     *
     * @property clickText
     * @type {String}
     * @required
     */

    /**
     * The button icon
     *
     * @property icon
     * @type {String}
     * @required
     */

    /**
     * The button type
     *
     * @property btnType
     * @type {String}
     * @default 'primary'
     */

    /**
     * The click button icon
     *
     * @property clickIcon
     * @type {String}
     * @required
     */

    /**
     * The click button type
     *
     * @property clickType
     * @type {String}
     * @default 'primary'
     */
    btnType: 'primary',

    /**
     * The route to link to.
     *
     * @property route
     * @type {String}
     */

    /**
     * The click action.
     *
     * @property click
     * @type {String}
     */

    clickTxt: or('clickText', 'text'),
    clickButtonType: or('clickType', 'btnType'),
    clickButtonIcon: or('clickIcon', 'icon')
  });
});
define("mdeditor/pods/components/control/subbar-link/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bTely/A1", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"btn-group-vertical center-block\"],[9,\"role\",\"group\"],[9,\"aria-label\",\"Action Button Controls\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"click\"]]],null,{\"statements\":[[0,\"  \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"name\",\"button\"],[10,\"class\",[26,[\"btn btn-lg \",[25,\"concat\",[\"btn-\",[20,[\"clickButtonType\"]]],null],\" btn-block md-btn-responsive\"]]],[9,\"click\",\"click\"],[7],[1,[25,\"fa-icon\",[[20,[\"clickButtonIcon\"]]],null],false],[0,\" \"],[1,[18,\"clickTxt\"],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"route\"]]],null,{\"statements\":[[0,\"    \"],[4,\"link-to\",[[20,[\"route\"]]],[[\"class\"],[[25,\"concat\",[\"btn btn-lg btn-\",[20,[\"btnType\"]],\" btn-block md-btn-responsive\"],null]]],{\"statements\":[[0,\" \"],[1,[25,\"fa-icon\",[[20,[\"icon\"]]],null],false],[0,\" \"],[1,[18,\"text\"],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[11,1],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/control/subbar-link/template.hbs" } });
});
define('mdeditor/pods/components/control/subbar-spatial/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    actionContext: Ember.computed('context', function () {
      return this.get('context')();
    })
  });
});
define("mdeditor/pods/components/control/subbar-spatial/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "W9QK6Zt/", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"hr\"],[7],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"btn-group-vertical center-block\"],[9,\"role\",\"group\"],[9,\"aria-label\",\"Geographic Extent Button Controls\"],[7],[0,\"\\n\"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-lg btn-success btn-block md-btn-responsive\"],[3,\"action\",[[19,0,[]],\"zoomAll\"],[[\"target\"],[[20,[\"actionContext\"]]]]],[7],[0,\"\\n  \"],[1,[25,\"fa-icon\",[\"search\"],null],false],[0,\" Zoom All\"],[8],[0,\"\\n\"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-lg btn-warning btn-block md-btn-responsive\"],[3,\"action\",[[19,0,[]],\"uploadData\"],[[\"target\"],[[20,[\"actionContext\"]]]]],[7],[1,[25,\"fa-icon\",[\"upload\"],null],false],[0,\" Import Features\"],[8],[0,\"\\n\"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-lg btn-info btn-block md-btn-responsive\"],[3,\"action\",[[19,0,[]],\"exportGeoJSON\"],[[\"target\"],[[20,[\"actionContext\"]]]]],[7],[1,[25,\"fa-icon\",[\"download\"],null],false],[0,\" Export Features\"],[8],[0,\"\\n\"],[4,\"control/md-button-confirm\",null,[[\"class\",\"onConfirm\"],[\"btn btn-lg btn-danger btn-block md-btn-responsive\",[25,\"action\",[[19,0,[]],\"deleteAllFeatures\"],[[\"target\"],[[20,[\"actionContext\"]]]]]]],{\"statements\":[[0,\" \"],[1,[25,\"fa-icon\",[\"times\"],null],false],[0,\" Delete All\"]],\"parameters\":[]},null],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"hr\"],[7],[8],[0,\"\\n\"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-lg btn-primary btn-block md-btn-responsive\"],[3,\"action\",[[19,0,[]],\"toList\"],[[\"target\"],[[20,[\"actionContext\"]]]]],[7],[0,\"\\n  \"],[1,[25,\"fa-icon\",[\"list\"],null],false],[0,\" Back to List\\n\"],[8],[0,\"\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/control/subbar-spatial/template.hbs" } });
});
define('mdeditor/pods/components/control/subbar-thesaurus/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    actionContext: Ember.computed('context', function () {
      return this.get('context')();
    })
  });
});
define("mdeditor/pods/components/control/subbar-thesaurus/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ABgZ4WT+", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"hr\"],[7],[8],[0,\"\\n\"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-lg btn-primary btn-block md-btn-responsive\"],[3,\"action\",[[19,0,[]],\"toList\"],[[\"target\"],[[20,[\"actionContext\"]]]]],[7],[0,\"\\n  \"],[1,[25,\"fa-icon\",[\"list\"],null],false],[0,\" Back to List\"],[8],[0,\"\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/control/subbar-thesaurus/template.hbs" } });
});
define('mdeditor/pods/components/input/md-boolean/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    /**
     * Input, edit, display a boolean value
     *
     * @class md-boolean
     * @constructor
     */

    /**
     * Value of the input.
     * The edited value is returned
     *
     * @property value
     * @type Boolean
     * @default false
     */
    value: false,

    /**
     * Text to display next to the checkbox
     *
     * @property text
     * @type String
     */

    /**
     * The form label to display
     *
     * @property label
     * @type String
     * @default null
     */
    label: null

  });
});
define("mdeditor/pods/components/input/md-boolean/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LSmg9gRH", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"label\"]]],null,{\"statements\":[[0,\"    \"],[6,\"label\"],[7],[1,[18,\"label\"],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[6,\"div\"],[9,\"class\",\"checkbox md-boolean\"],[7],[0,\"\\n    \"],[6,\"label\"],[7],[0,\"\\n      \"],[1,[25,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[20,[\"value\"]]]]],false],[0,\"\\n      \"],[6,\"span\"],[9,\"class\",\"md-boolean-text\"],[7],[1,[18,\"text\"],false],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[11,1],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/input/md-boolean/template.hbs" } });
});
define('mdeditor/pods/components/input/md-codelist-multi/component', ['exports', 'mdeditor/pods/components/input/md-codelist/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _component.default.extend({
    classNames: ['md-codelist-multi'],
    /**
     * Specialized select list control for displaying and selecting options in
     * mdCodes codelists. Extends md-codelist. Allows selection of multiple
     * options.
     *
     * ```handlebars
     * \{{input/md-codelist-multi
     *   value=array
     *   create=true
     *   tooltip=true
     *   icon=false
     *   mdCodeName="codeName"
     *   closeOnSelect=false
     *   placeholder="Select or enter one or more"
     * }}
     * ```
     *
     * @class md-codelist-multi
     * @constructor
     * @extends md-codelist
     */

    /**
     * Initial value, returned value.
     * Accepts an Array of strings.
     *
     * Example: `["foo","bar"]`
     *
     * @property value
     * @type Array
     * @return Array
     * @required
     */

    /**
     * The multiple property for power-select-with-create
     *
     * @property multiple
     * @private
     * @type Boolean
     * @default true
     */
    multiple: true,

    /**
     * The component to render
     *
     * @property theComponent
     * @type Ember.computed
     * @return String
     */
    theComponent: Ember.computed('create', function () {
      return this.get('create') ? 'power-select-multiple-with-create' : 'power-select-multiple';
    }),

    /**
     * Whether to close the selection list after a selection has been made.
     *
     * @property closeOnSelect
     * @type Boolean
     * @default false
     */
    closeOnSelect: false,

    /**
     * The string to display when no option is selected.
     *
     * @property placeholder
     * @type String
     * @default 'Select one or more options'
     */
    placeholder: 'Select one or more options',

    /**
     * The currently selected item in the codelist
     *
     * @property selectedItem
     * @type Ember.computed
     * @return PromiseObject
     */
    selectedItem: Ember.computed('value', function () {
      let value = this.get('value');
      let codelist = this.get('codelist');

      if (value) {
        return codelist.filter(item => {
          return value.includes(item['codeId']);
        });
      }
      return null;
    }),

    /**
     * If a value is provided by the user which is not in the codelist and 'create=true'
     * the new value will be added into the codelist array
     *
     * @property codelist
     * @type Ember.computed
     * @return Array
     */
    codelist: Ember.computed('value', 'filterId', function () {
      let codelist = this.get('mapped');
      let value = this.get('value');
      let create = this.get('create');
      let filter = this.get('filterId');

      if (value) {
        if (create) {
          value.forEach(val => {
            let found = codelist.findBy('codeId', val);
            if (found === undefined) {
              let newObject = this.createCode(val);
              codelist.pushObject(newObject);
            }
          });
        }
      }

      return codelist.rejectBy('codeId', filter);
    }),

    /**
     * Set the value on the select.
     *
     * @method setValue
     * @param {Array|Object} selected The value to set. Generally, an array of
     * selected objects, unless using the create option.
     */
    setValue(selected) {
      let sel;

      //power-select-with-create always sends a single object oncreate
      //we need to add that object to the selectedItem array
      if (this.get('create') && !Ember.isArray(selected)) {
        sel = this.get('selectedItem').compact();
        sel.pushObject(selected);
      } else {
        sel = selected;
      }

      this.set('value', sel.mapBy('codeId'));
      this.change();
    }
  });
});
define('mdeditor/pods/components/input/md-codelist/component', ['exports', 'mdeditor/pods/components/input/md-select/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _component.default.extend({
    /**
     * Specialized select list control for displaying and selecting
     * options in mdCodes codelists.
     * Access to codelists is provided by the 'codelist' service.
     * Descriptions of all codes (tooltips) are embedded within the codelists.
     *
     * ```handlebars
     * \{{input/md-codelist
     *   create=true
     *   required=false
     *   tooltip=fasle
     *   icon=false
     *   disabled=false
     *   allowClear=true
     *   showValidations=true
     *   mdCodeName="codeName"
     *   value=value
     *   path="path"
     *   model=model
     *   placeholder="Choose"
     * }}
     * ```
     *
     * @class md-codelist
     * @extends md-select
     * @constructor
     */

    classNames: ['md-codelist'],
    layoutName: 'components/input/md-select',

    /**
     * The name of the mdCodes's codelist to use
     *
     * @property mdCodeName
     * @type String
     * @required
     */

    /**
     * Name of the attribute in the objectArray to be used for the
     * select list's option value.
     *
     * @property valuePath
     * @type String
     * @default codeName
     * @required
     */
    valuePath: 'codeName',
    /**
     * Name of the attribute in the objectArray to be used for the
     * select list's option name or display text.
     *
     * @property namePath
     * @type String
     * @default codename
     * @required
     */
    namePath: 'codeName',

    /**
     * Name of the attribute in the objectArray to be used for the
     * select list's tooltip.  If null, no tooltip will be
     * generated.
     *
     * @property tooltipPath
     * @type String
     * @default null
     */
    tooltipPath: 'description',

    /**
     * Initial value, returned value.
     *
     * @property value
     * @type String
     * @return String
     * @required
     */

    /**
     * Whether to render a button to clear the selection.
     *
     * @property allowClear
     * @type Boolean
     * @default true
     */
    allowClear: true,

    /**
     * The string to display when no option is selected.
     *
     * @property placeholder
     * @type String
     * @default 'Select one option'
     */
    placeholder: "Select one option",

    /**
     * Form label for select list
     *
     * @property label
     * @type String
     * @default null
     */
    label: null,

    mdCodes: Ember.inject.service('codelist'),

    /*
     * The currently selected item in the codelist
     *
     * @property selectedItem
     * @type Ember.computed
     * @return PromiseObject
     */
    selectedItem: Ember.computed('value', function () {
      let value = this.get('value');

      return this.get('codelist').find(item => {
        return item['codeId'] === value;
      });
    }),

    /**
     * mapped is a re-mapped array of code objects.
     * The initial codelist for 'mdCodeName' is provided by the 'codelist' service.
     *
     * @property mapped
     * @type {Array}
     * @category computed
     * @requires mdCodeName
     */
    mapped: Ember.computed('mdCodeName', function () {
      let codeId = this.get('valuePath');
      let codeName = this.get('namePath');
      let tooltip = this.get('tooltipPath');
      let codelist = [];
      let icons = this.get('icons');
      let defaultIcon = this.get('defaultIcon');
      let codelistName = this.get('mdCodeName');
      let mdCodelist = this.get('mdCodes').get(codelistName).codelist
      //.uniqBy(codeName)
      .sortBy(codeName);

      mdCodelist.forEach(function (item) {
        let newObject = {
          codeId: item[codeId],
          codeName: item[codeName],
          tooltip: item[tooltip],
          icon: icons.get(item[codeName]) || icons.get(defaultIcon)
        };
        codelist.pushObject(newObject);
      });

      return codelist;
    }),

    /**
     * If a value is provided by the user which is not in the codelist and 'create=true'
     * the new value will be added into the codelist array
     *
     * @property codelist
     * @type {Array}
     * @category computed
     * @requires value
     */
    codelist: Ember.computed('value', 'filterId', function () {
      let codelist = this.get('mapped');
      let value = this.get('value');
      let create = this.get('create');
      let filter = this.get('filterId');

      if (value) {
        if (create) {
          let found = codelist.findBy('codeId', value);
          if (found === undefined) {
            let newObject = this.createCode(value);
            codelist.pushObject(newObject);
          }
        }
      }

      return codelist.rejectBy('codeId', filter);
    }),

    /**
     * Creates a new codelist entry with a randomly generated code identifier.
     *
     * @method createCode
     * @param  {String} code The codeName
     * @return {Object}      Returns a new codelist object
     */
    createCode(code) {
      return {
        codeId: code,
        codeName: code,
        description: 'Undefined'
      };
    },

    /**
     * Set the value on the select.
     *
     * @method setValue
     * @param {Object} selected The object with the value(codeName) to set.
     */
    /*setValue(selected) {
      let valuePath = this.get('valuePath');
      let namePath = this.get('namePath');
       if(selected) {
        this.get('codelist')
      }
      let val = selected ? selected.codeName : null;
      this.set('value', val);
      this.change();
    },*/

    actions: {
      // do the binding to value
      setValue: function setValue(selected) {
        this.setValue(selected);
      },
      //handle the create
      create(selected) {
        let code = this.createCode(selected);

        this.setValue(code);
      }
    }

  });
});
define('mdeditor/pods/components/input/md-date-range/component', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    computed,
    get,
    set,
    run: {
      once
    }
  } = Ember;
  //import moment from 'moment';

  const Validations = (0, _emberCpValidations.buildValidations)({
    'start': [(0, _emberCpValidations.validator)('presence', {
      presence: true,
      disabled: computed.notEmpty('model.end'),
      ignoreBlank: true
    })],
    'end': [(0, _emberCpValidations.validator)('date', {
      onOrAfter: computed.alias('model.start'),
      isWarning: true
    }), (0, _emberCpValidations.validator)('presence', {
      presence: true,
      disabled: computed.notEmpty('model.start'),
      ignoreBlank: true
    })]
  });

  exports.default = Component.extend(Validations, {
    /**
     * Date range with start date and end date fields.
     *
     * ```handlebars
     * \{{input/md-date-range
     *   startDateTime
     *   endDateTime=false
     * }}
     * ```
     *
     * @class md-date-range
     * @extends Ember.Component
     * @constructor
     */

    classNameBindings: ['formInline'],

    /**
     * If true, render the fields inline
     *
     * @property startDateTime
     * @type {Boolean}
     * @default true
     */
    formInline: true,

    /**
     * The value for the start datetime
     *
     * @property startDateTime
     * @type {String|Date|moment}
     * @default moment().hour(0).second(0).minute(0)
     * @required
     */
    //startDateTime: moment().hour(0).second(0).minute(0),

    /**
     * The value for the end datetime
     *
     * @property endDateTime
     * @type {String|Date|moment}
     * @default moment().hour(0).second(0).minute(0)
     * @required
     */
    //  endDateTime: moment().hour(0).second(0).minute(0)
    start: computed('startDateTime', {
      get() {
        let dt = get(this, 'startDateTime');
        return dt === undefined ? null : dt;
      },
      set(key, value) {
        once(this, function () {
          set(this, 'startDateTime', value);
          return value;
        });
      }
    }),
    end: computed('endDateTime', {
      get() {
        let dt = get(this, 'endDateTime');
        return dt === undefined ? null : dt;
      },
      set(key, value) {
        once(this, function () {
          set(this, 'endDateTime', value);
          return value;
        });
      }
    })
  });
});
define("mdeditor/pods/components/input/md-date-range/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6QnpWr72", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"label\"],[9,\"class\",\"text-info required\"],[7],[0,\"Dates\"],[8],[0,\"\\n\"],[1,[25,\"input/md-datetime\",null,[[\"class\",\"valuePath\",\"model\",\"showValidations\",\"forceDateOutput\",\"label\",\"showClear\",\"format\",\"placeholder\"],[\"start\",\"start\",[19,0,[]],true,true,\"Start Date\",true,\"YYYY-MM-DD HH:mm:ss\",\"Enter start dateTime\"]]],false],[0,\"\\n\"],[1,[25,\"input/md-datetime\",null,[[\"class\",\"valuePath\",\"model\",\"showValidations\",\"forceDateOutput\",\"showClear\",\"label\",\"format\",\"placeholder\"],[\"end\",\"end\",[19,0,[]],true,true,true,\"End Date\",\"YYYY-MM-DD HH:mm:ss\",\"Enter end dateTime\"]]],false],[0,\"\\n\"],[1,[25,\"control/md-fiscalyear\",null,[[\"start\",\"end\",\"context\"],[\"start\",\"end\",[19,0,[]]]]],false],[0,\"\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/input/md-date-range/template.hbs" } });
});
define('mdeditor/pods/components/input/md-datetime/component', ['exports', 'moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    defineProperty,
    computed,
    isBlank,
    set,
    get,
    run: {
      once
    },
    assert
  } = Ember;

  exports.default = Component.extend({

    /**
     * Datetime control with dropdown calendar.
     * Based on Bootstrap datetime picker.
     *
     * @class md-datetime
     * @constructor
     */

    init() {
      this._super(...arguments);

      let model = this.get('model');
      let valuePath = this.get('valuePath');

      if (isBlank(model) !== isBlank(valuePath)) {
        assert(`You must supply both model and valuePath to ${this.toString()} or neither.`);
      }

      if (!isBlank(model)) {
        if (this.get(`model.${valuePath}`) === undefined) {
          Ember.debug(`model.${valuePath} is undefined in ${this.toString()}.`);
        }

        defineProperty(this, 'date', computed(`model.${valuePath}`, {
          get() {
            return (0, _moment.default)(get(this, `model.${valuePath}`));
          },
          set(key, value) {
            once(this, () => {
              this.set(`model.${valuePath}`, value);
            });
            return value;
          }
        }));

        defineProperty(this, 'validation', computed.alias(`model.validations.attrs.${valuePath}`).readOnly());

        defineProperty(this, 'required', computed('validation.options.presence.presence', 'validation.options.presence.disabled', function () {
          return this.get('validation.options.presence.presence') && !this.get('validation.options.presence.disabled');
        }).readOnly());

        defineProperty(this, 'notValidating', computed.not('validation.isValidating').readOnly());

        defineProperty(this, 'hasContent', computed.notEmpty('date').readOnly());

        defineProperty(this, 'hasWarnings', computed.notEmpty('validation.warnings').readOnly());

        defineProperty(this, 'isValid', computed.and('hasContent', 'validation.isTruelyValid').readOnly());

        defineProperty(this, 'shouldDisplayValidations', computed.or('showValidations', 'didValidate', 'hasContent').readOnly());

        defineProperty(this, 'showErrorClass', computed.and('notValidating', 'showErrorMessage', 'hasContent', 'validation').readOnly());

        defineProperty(this, 'showErrorMessage', computed.and('shouldDisplayValidations', 'validation.isInvalid').readOnly());

        defineProperty(this, 'showWarningMessage', computed.and('shouldDisplayValidations', 'hasWarnings', 'isValid').readOnly());
      }
    },
    classNames: ['md-datetime', 'md-input-input'],
    classNameBindings: ['label:form-group', 'required'],

    /**
     * Datetime string passed in, edited, and returned.
     *
     * @property date
     * @type String
     * @default null
     * @return String
     */
    date: null,

    /**
     * Format of date string for property 'date'.
     *
     * @property format
     * @type String
     * @default 'YYYY-MM-DD'
     */
    format: 'YYYY-MM-DD',

    /**
     * The string to display when no datetime is selected.
     *
     * @property placeholder
     * @type String
     * @default 'Enter date or datetime'
     */
    placeholder: "Enter date or datetime",

    /**
     * Form label for datetime input.
     *
     * @property label
     * @type String
     * @default null
     */
    label: null,

    /**
     * On show, will set the picker to the current date/time
     *
     * @property useCurrent
     * @type Boolean
     * @default false
     */
    useCurrent: false,

    /**
     * Icons to be used by the datetime picker and calendar.
     * Icons can be set for time, date, up, down, previous, next, clear,
     * and close.
     * The default icons are chosen from Font Awesome icons
     *
     * @property calendarIcons
     * @type Object
     * @default 'calendarIcons'
     */
    calendarIcons: {
      time: "fa fa-clock-o",
      date: "fa fa-calendar",
      up: "fa fa-chevron-up",
      down: "fa fa-chevron-down",
      previous: "fa fa-angle-double-left",
      next: "fa fa-angle-double-right",
      close: "fa fa-times",
      clear: "fa fa-trash"
    },

    actions: {
      updateDate(date) {
        if (isBlank(date)) {
          set(this, 'date', null);

          return;
        }

        let utc = (0, _moment.default)(date);

        //utc.add(utc.utcOffset(), 'minutes');

        if (utc && utc.toISOString() !== this.get('date')) {

          //once(this, function() {
          set(this, 'date', utc.toISOString());
          //});
        }
      }
    }
  });
});
define("mdeditor/pods/components/input/md-datetime/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "y3a4dpor", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[20,[\"label\"]]],null,{\"statements\":[[0,\"  \"],[6,\"label\"],[7],[1,[18,\"label\"],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[6,\"div\"],[9,\"class\",\"md-input-input\"],[7],[0,\"\\n  \"],[1,[25,\"bs-datetimepicker\",null,[[\"date\",\"format\",\"dateIcon\",\"icons\",\"forceDateOutput\",\"placeholder\",\"showClear\",\"useCurrent\",\"textFieldRequired\",\"updateDate\"],[[20,[\"date\"]],[20,[\"format\"]],\"fa fa-calendar\",[20,[\"calendarIcons\"]],[20,[\"forceDateOutput\"]],[20,[\"placeholder\"]],[20,[\"showClear\"]],[20,[\"useCurrent\"]],[20,[\"required\"]],[25,\"action\",[[19,0,[]],\"updateDate\"],null]]]],false],[0,\"\\n  \"],[6,\"span\"],[9,\"class\",\"md-inputgroup-error\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"showErrorMessage\"]]],null,{\"statements\":[[0,\"      \"],[6,\"span\"],[9,\"class\",\"md-error\"],[7],[0,\"\\n        \"],[1,[25,\"fa-icon\",[\"exclamation-circle\"],null],false],[0,\"\\n\"],[4,\"tooltip-on-element\",null,[[\"side\",\"class\"],[\"right\",\"md-tooltip danger\"]],{\"statements\":[[0,\"            \"],[1,[25,\"get\",[[25,\"get\",[[20,[\"model\",\"validations\",\"attrs\"]],[20,[\"valuePath\"]]],null],\"message\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"showWarningMessage\"]]],null,{\"statements\":[[0,\"      \"],[6,\"span\"],[9,\"class\",\"md-warning\"],[7],[0,\"\\n        \"],[1,[25,\"fa-icon\",[\"exclamation-triangle\"],null],false],[0,\"\\n\"],[4,\"tooltip-on-element\",null,[[\"side\",\"class\"],[\"right\",\"md-tooltip warning\"]],{\"statements\":[[0,\"        \"],[1,[25,\"get\",[[25,\"get\",[[20,[\"model\",\"validations\",\"attrs\"]],[20,[\"valuePath\"]]],null],\"warningMessage\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/input/md-datetime/template.hbs" } });
});
define('mdeditor/pods/components/input/md-input-confirm/component', ['exports', 'mdeditor/pods/components/input/md-input/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _component.default.extend({
    /**
     * Input, edit, display a single item
     *
     * @class md-input-confirm
     * @extends md-input
     * @constructor
     */

    classNameBindings: ['required'],

    disabled: true,

    isDisabled: Ember.computed('disabled', function () {
      return this.get('disabled');
    }),

    didInsertElement() {
      this._super(...arguments);
      this.$('input').on('blur', () => {
        this.set('disabled', true);
      });
    },

    actions: {
      allowEdit() {
        this.set('disabled', false);
        Ember.run.once(() => {
          this.$('input').focus();
        });
      }
    }
  });
});
define("mdeditor/pods/components/input/md-input-confirm/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uPNb6raa", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[20,[\"label\"]]],null,{\"statements\":[[6,\"label\"],[7],[1,[18,\"label\"],false],[8]],\"parameters\":[]},null],[0,\"\\n\"],[6,\"div\"],[10,\"class\",[26,[[25,\"if\",[[20,[\"disabled\"]],\"input-group\"],null]]]],[7],[0,\"\\n\\n\"],[1,[25,\"input\",[[25,\"-input-type\",[[20,[\"type\"]]],null]],[[\"value\",\"placeholder\",\"required\",\"type\",\"maxlength\",\"class\",\"disabled\"],[[20,[\"value\"]],[20,[\"placeholder\"]],[20,[\"required\"]],[20,[\"type\"]],[20,[\"maxlength\"]],[20,[\"inputClass\"]],[20,[\"isDisabled\"]]]]],false],[0,\"\\n\"],[4,\"if\",[[20,[\"disabled\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[9,\"class\",\"input-group-btn\"],[7],[0,\"\\n\"],[4,\"control/md-button-confirm\",null,[[\"class\",\"onConfirm\"],[\"btn btn-warning\",[25,\"action\",[[19,0,[]],\"allowEdit\"],null]]],{\"statements\":[[0,\"            \"],[1,[25,\"fa-icon\",[\"pencil\"],null],false],[0,\" Edit\\n\"],[4,\"if\",[[20,[\"confirmTip\"]]],null,{\"statements\":[[4,\"tooltip-on-component\",null,[[\"enableLazyRendering\"],[true]],{\"statements\":[[0,\"                \"],[1,[18,\"confirmTip\"],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/input/md-input-confirm/template.hbs" } });
});
define('mdeditor/pods/components/input/md-input/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    defineProperty,
    computed,
    isBlank,
    assert
  } = Ember;

  exports.default = Component.extend({
    /**
     * Input, edit, display a single item
     *
     * ```handlebars
     * \{{input/md-input
     *    value=val
     *    model=null
     *    valuePath=null
     *    label="Name"
     *    placeholder="Enter name."
     *    required=false
     *  }}
     * ```
     *
     * @class md-input
     * @constructor
     */

    init() {
      this._super(...arguments);

      let model = this.get('model');
      let valuePath = this.get('valuePath');

      if (isBlank(model) !== isBlank(valuePath)) {
        assert(`You must supply both model and valuePath to ${this.toString()} or neither.`);
      }

      if (!isBlank(model)) {
        if (this.get(`model.${valuePath}`) === undefined) {
          Ember.debug(`model.${valuePath} is undefined in ${this.toString()}.`);

          //Ember.run.once(()=>model.set(valuePath, ""));
        }

        if (this.get('type') === 'number') {
          let attribute = `model.${valuePath}`;

          defineProperty(this, 'value', computed(attribute, {
            get() {
              let val = this.get(attribute);

              return val ? val.toString() : '';
            },

            set(key, value) {
              let parse = this.get('step') ? parseFloat : parseInt;

              this.set(attribute, parse(value, 10));

              return value;
            }
          }));
        } else {
          defineProperty(this, 'value', computed.alias(`model.${valuePath}`));
        }

        defineProperty(this, 'validation', computed.alias(`model.validations.attrs.${valuePath}`).readOnly());

        defineProperty(this, 'required', computed('validation.options.presence.presence', 'validation.options.presence.disabled', 'disabled', function () {
          return !this.get('disabled') && this.get('validation.options.presence.presence') && !this.get('validation.options.presence.disabled');
        }).readOnly());

        defineProperty(this, 'notValidating', computed.not('validation.isValidating').readOnly());

        defineProperty(this, 'hasContent', computed.notEmpty('value').readOnly());

        defineProperty(this, 'hasWarnings', computed.notEmpty('validation.warnings').readOnly());

        defineProperty(this, 'isValid', computed.and('hasContent', 'validation.isTruelyValid').readOnly());

        defineProperty(this, 'shouldDisplayValidations', computed.or('showValidations', 'didValidate', 'hasContent').readOnly());

        defineProperty(this, 'showErrorClass', computed.and('notValidating', 'showErrorMessage', 'hasContent', 'validation').readOnly());

        defineProperty(this, 'showErrorMessage', computed.and('shouldDisplayValidations', 'validation.isInvalid').readOnly());

        defineProperty(this, 'showWarningMessage', computed.and('shouldDisplayValidations', 'hasWarnings', 'isValid').readOnly());
      }
    },

    classNames: ['md-input'],
    classNameBindings: ['label:form-group', 'required'],
    attributeBindings: ['data-spy'],

    /**
     * Value of the input.
     * Value sets the initial value and returns the edited result.
     * This property is overridden if valuePath and model are supplied.
     *
     * @property value
     * @type String
     * @required
     */

    /**
     * Type of data represented by the value string.
     * HTML5 types may be specified ('text', 'number', etc.)
     *
     * @property type
     * @type String
     * @default text
     */
    type: 'text',

    /**
     * The form label to display
     *
     * @property label
     * @type String
     * @default null
     */
    label: null,

    /**
     * Whether a value is required
     *
     * @property required
     * @type Boolean
     * @default false
     */
    required: false,

    /**
     * Whether a input is disabled
     *
     * @property disabled
     * @type Boolean
     * @default false
     */
    disabled: false,

    /**
     * Maximum number of characters for each input string.
     * If no maxlength is specified the length will not be restricted
     *
     * @property maxlength
     * @type Number
     * @default null
     */
    maxlength: null,

    /**
     * Text displayed in empty inputs
     *
     * @property placeholder
     * @type String
     * @default null
     */
    placeholder: null,

    /**
     * CSS class to set on the input control
     *
     * @property class
     * @type String
     * @default 'form-control'
     */
    inputClass: 'form-control',

    /**
     * The model or object containing the input value. Only needed for validation.
     *
     * @property model
     * @type {Object}
     * @default undefined
     * @readOnly
     */

    /**
     * The path of the input value. Only needed for validation.
     *
     * @property valuePath
     * @type {String}
     * @default ''
     * @readOnly
     */
    valuePath: ''

  });
});
define("mdeditor/pods/components/input/md-input/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "F0Dp0IVd", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[20,[\"label\"]]],null,{\"statements\":[[6,\"label\"],[7],[1,[18,\"label\"],false],[8]],\"parameters\":[]},null],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"md-input-input\"],[7],[0,\"\\n  \"],[1,[25,\"input\",[[25,\"-input-type\",[[20,[\"type\"]]],null]],[[\"value\",\"placeholder\",\"required\",\"type\",\"step\",\"maxlength\",\"class\",\"disabled\",\"change\"],[[20,[\"value\"]],[20,[\"placeholder\"]],[20,[\"required\"]],[20,[\"type\"]],[20,[\"step\"]],[20,[\"maxlength\"]],[20,[\"inputClass\"]],[20,[\"disabled\"]],[20,[\"change\"]]]]],false],[0,\"\\n\\n  \"],[6,\"span\"],[9,\"class\",\"md-input-error\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"showErrorMessage\"]]],null,{\"statements\":[[0,\"      \"],[6,\"span\"],[9,\"class\",\"md-error\"],[7],[0,\"\\n        \"],[1,[25,\"fa-icon\",[\"exclamation-circle\"],null],false],[0,\"\\n\"],[4,\"tooltip-on-element\",null,[[\"side\",\"class\"],[\"right\",\"md-tooltip danger\"]],{\"statements\":[[0,\"            \"],[1,[25,\"get\",[[25,\"get\",[[20,[\"model\",\"validations\",\"attrs\"]],[20,[\"valuePath\"]]],null],\"message\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"showWarningMessage\"]]],null,{\"statements\":[[0,\"      \"],[6,\"span\"],[9,\"class\",\"md-warning\"],[7],[0,\"\\n        \"],[1,[25,\"fa-icon\",[\"exclamation-triangle\"],null],false],[0,\"\\n\"],[4,\"tooltip-on-element\",null,[[\"side\",\"class\"],[\"right\",\"md-tooltip warning\"]],{\"statements\":[[0,\"        \"],[1,[25,\"get\",[[25,\"get\",[[20,[\"model\",\"validations\",\"attrs\"]],[20,[\"valuePath\"]]],null],\"warningMessage\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/input/md-input/template.hbs" } });
});
define('mdeditor/pods/components/input/md-inputs/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    /**
     * Input, edit, display an array of strings
     *
     * @class md-inputs
     * @constructor
     */

    /**
     * An array of strings to be edited.
     * The edited array is returned
     *
     * @property model
     * @type Array
     * @default []
     */
    model: [],

    /**
     * Type of data represented by string in the array.
     * HTML5 types may be specified ('text', 'number', etc.)
     *
     * @property type
     * @type String
     * @default 'text'
     */
    type: 'text',

    /**
     * Maximum number of characters for each input string.
     * If no maxlength is specified the length will not be restricted
     *
     * @property maxlength
     * @type Number
     * @default null
     */
    maxlength: null,

    /**
     * Label for the table of input rows
     *
     * @property label
     * @type String
     * @default null
     */
    label: null,

    /**
     * Determines add button text
     *
     * @property buttonText
     * @type String
     * @default Add
     */
    buttonText: "Add",

    /**
     * Determines add button placement
     *
     * @property buttonTop
     * @type Boolean
     * @default false
     */
    buttonTop: false,

    /**
     * Column header for the input column
     *
     * @property header
     * @type String
     * @default null
     */
    header: null,

    /**
     * Text displayed in empty inputs
     *
     * @property placeholder
     * @type String
     * @default null
     */
    placeholder: null,

    // convert the input 'primitive' array to an 'ember' array
    items: Ember.computed('model.[]', {
      get() {
        let items = this.get('model');

        if (items === undefined) {
          items = [];
          items[0] = '';
        }

        return items.reduce(function (acc, val) {
          acc.pushObject({
            val: val
          });
          return acc;
        }, []);
      },

      set(key, value) {
        this.set('model', value.filterBy('val').mapBy('val'));
        return value;
      }
    }),

    itemsObserver: Ember.observer('items.@each.val', function () {
      this.set('items', this.get('items'));
    }),

    actions: {
      addItem() {
        this.addItem();
      },
      deleteItem(idx) {
        this.deleteItem(idx);
      }
    },

    // functions for actions are isolated from actions to facilitate testing
    addItem() {
      this.get('items').pushObject({
        val: ''
      });
    },

    deleteItem(idx) {
      this.get('items').removeAt(idx);
    }

  });
});
define("mdeditor/pods/components/input/md-inputs/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kD+LIEoT", "block": "{\"symbols\":[\"inputItem\",\"index\",\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"form-group border\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"label\"]]],null,{\"statements\":[[0,\"            \"],[6,\"label\"],[7],[1,[18,\"label\"],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[20,[\"buttonTop\"]]],null,{\"statements\":[[0,\"            \"],[6,\"button\"],[9,\"class\",\"btn btn-info btn-xs pull-right\"],[3,\"action\",[[19,0,[]],\"addItem\"]],[7],[0,\"\\n                \"],[1,[25,\"fa-icon\",[\"plus\"],null],false],[0,\" \"],[1,[18,\"buttonText\"],false],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[6,\"table\"],[9,\"class\",\"table table-striped table-hover\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"header\"]]],null,{\"statements\":[[0,\"                \"],[6,\"thead\"],[7],[0,\"\\n                \"],[6,\"th\"],[7],[0,\"#\"],[8],[0,\"\\n                \"],[6,\"th\"],[9,\"class\",\"col-sm-9\"],[7],[1,[18,\"header\"],false],[8],[0,\"\\n                \"],[6,\"th\"],[7],[8],[0,\"\\n                \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[6,\"tbody\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"items\"]]],null,{\"statements\":[[0,\"                \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[7],[1,[19,2,[]],false],[8],[0,\"\\n                    \"],[6,\"td\"],[7],[0,\"\\n                        \"],[1,[25,\"input/md-input\",null,[[\"type\",\"value\",\"maxlength\",\"placeholder\"],[[20,[\"type\"]],[19,1,[\"val\"]],[20,[\"maxlength\"]],[20,[\"placeholder\"]]]]],false],[0,\"\\n                    \"],[8],[0,\"\\n                    \"],[6,\"td\"],[7],[0,\"\\n                        \"],[6,\"button\"],[9,\"class\",\"btn btn-warning btn-xs pull-right\"],[3,\"action\",[[19,0,[]],\"deleteItem\",[19,2,[]]]],[7],[0,\"Delete!\"],[8],[0,\"\\n                    \"],[8],[0,\"\\n                \"],[8],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"            \"],[8],[0,\"\\n\"],[4,\"unless\",[[20,[\"buttonTop\"]]],null,{\"statements\":[[0,\"            \"],[6,\"tfoot\"],[7],[0,\"\\n                \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"colspan\",\"3\"],[7],[0,\"\\n                        \"],[6,\"button\"],[9,\"class\",\"btn btn-info btn-xs\"],[3,\"action\",[[19,0,[]],\"addItem\"]],[7],[0,\"\\n                            \"],[1,[25,\"fa-icon\",[\"plus\"],null],false],[0,\" \"],[1,[18,\"buttonText\"],false],[0,\"\\n                        \"],[8],[0,\"\\n\\n                    \"],[8],[0,\"\\n                \"],[8],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[11,3],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/input/md-inputs/template.hbs" } });
});
define('mdeditor/pods/components/input/md-markdown-area/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    computed,
    get,
    set,
    isNone,
    run
  } = Ember;

  exports.default = Component.extend({
    /**
     * Component for markdown enabled text-area.
     *
     * @class md-markdown-editor
     * @constructor
     * @example
     *   {{md-markdown-editor value=value options=options}}
     */

    /**
     * Fix fullscreen render inside of liquid-outlet..
     *
     * @event didInsertElement
     * @public
     */
    didInsertElement() {
      this._super(...arguments);

      let editor = this.get('editor');
      let $el = this.$();

      const oldEditorSetOption = editor.codemirror.setOption;

      editor.codemirror.setOption = function (option, value) {
        oldEditorSetOption.apply(this, arguments);

        if (option === 'fullScreen') {
          $el.parents('.liquid-child,.liquid-container, .md-card').toggleClass('full-screen', value);
        }
      };
    },

    /**
     * Make sure the value is not null or undefined, for Simple MDE.
     *
     * @event didReceiveAttrs
     * @public
     */
    didReceiveAttrs() {
      this._super(...arguments);

      run.once(() => {
        if (isNone(get(this, 'value'))) {
          set(this, 'value', '');
        }
      });
    },

    classNames: ['md-markdown-editor'],
    classNameBindings: ['label:form-group', 'required', 'errorClass'],
    attributeBindings: ['data-spy'],

    /**
     * The current simplemde editor instance.
     *
     * @property editor
     * @type {Object}
     * @private
     */

    /**
     * Bound textarea value.
     *
     * @property value
     * @type {String}
     */

    /**
     * If true, the "row" the editor will be initally collapse.
     *
     * @property collapsed
     * @type {Boolean}
     * @default undefined
     */

    /**
     * If true, the collapse control will be added to the label header.
     *
     * @property collapsible
     * @type {Boolean}
     * @default true
     */
    collapsible: true,

    /**
     * Placeholder string.
     *
     * @property placeholder
     * @type {String}
     * @default Enter text, Markdown is supported.
     */
    placeholder: 'Enter text, Markdown is supported.',

    /**
     * Options for markdown editor
     *
     * @property options
     * @type {Object}
     * @category computed
     * @requires placeholder
     */
    options: computed('placeholder', function () {
      return {
        placeholder: get(this, 'placeholder'),
        status: [{
          className: 'length',
          defaultValue: el => {
            el.innerHTML = `<span class="length md-${get(this, 'errorClass')}">length: ${get(this, 'length')}</span>`;
          },
          onUpdate: el => {
            el.innerHTML = `<span class="length md-${get(this, 'errorClass')}">length: ${get(this, 'length')}</span>`;
          }
        }, 'lines', 'words', 'cursor']
      };
    }),

    // fullscreen: Ember.observer('editor.codemirror.options.fullScreen', function(){
    //   console.info(this.get('editor.codemirror.options.fullScreen'));
    // }),

    /**
     * Returns the length of hte value string, 0 if falsy.
     *
     * @property length
     * @type {Number}
     * @category computed
     * @requires value
     */
    length: computed('value', function () {
      return get(this, 'value') ? get(this, 'value').length : 0;
    }).readOnly(),

    /**
     * Returns string indicating error or warning based on maxlength.
     *
     * @property errorClass
     * @type {String}
     * @category computed
     * @requires value|maxlength
     */
    errorClass: computed('value', 'maxlength', function () {
      let length = get(this, 'length');
      let max = get(this, 'maxlength');

      if (get(this, 'required') && length < 1) {
        return 'error';
      }

      if (!max || length <= max - 25) {
        return '';
      }

      if (length > max) {
        return 'error';
      } else if (length + 25 > max) {
        return 'warning';
      }
    })
  });
});
define("mdeditor/pods/components/input/md-markdown-area/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "BTDxtoyw", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[20,[\"label\"]]],null,{\"statements\":[[0,\"    \"],[6,\"label\"],[9,\"class\",\"md-card-chevron\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"collapsible\"]]],null,{\"statements\":[[0,\"        \"],[6,\"a\"],[9,\"role\",\"button\"],[9,\"data-toggle\",\"collapse\"],[10,\"href\",[26,[\"#\",[25,\"concat\",[\"md-\",[20,[\"elementId\"]]],null]]]],[10,\"aria-expanded\",[26,[[25,\"if\",[[20,[\"collapsed\"]],\"false\",\"true\"],null]]]],[10,\"class\",[26,[[25,\"if\",[[20,[\"collapsed\"]],\"collapsed\"],null]]]],[10,\"aria-controls\",[26,[[25,\"concat\",[\"md-\",[20,[\"elementId\"]]],null]]]],[7],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"fa\"],[7],[8],[0,\"\\n        \"],[1,[18,\"label\"],false],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[18,\"label\"],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[6,\"div\"],[10,\"id\",[25,\"concat\",[\"md-\",[20,[\"elementId\"]]],null],null],[10,\"class\",[26,[[25,\"if\",[[20,[\"collapsed\"]],\"collapse\",\"in\"],null]]]],[7],[0,\"\\n  \"],[1,[25,\"simple-mde\",null,[[\"value\",\"options\",\"maxlength\",\"spellcheck\",\"disabled\",\"change\",\"currentEditor\"],[[20,[\"value\"]],[20,[\"options\"]],[20,[\"maxlength\"]],true,[20,[\"disabled\"]],[25,\"if\",[[20,[\"change\"]],[20,[\"change\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[20,[\"value\"]]],null]],null]],null],[20,[\"editor\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/input/md-markdown-area/template.hbs" } });
});
define('mdeditor/pods/components/input/md-select-contact/component', ['exports', 'mdeditor/pods/components/input/md-codelist/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    inject,
    computed
  } = Ember;

  exports.default = _component.default.extend({
    /**
     * Specialized select list control for displaying and selecting
     * contacts.
     *
     * @class md-select-contacts
     * @constructor
     * @extends md-select
     */

    /**
     * The contacts service
     *
     * @property contacts
     * @type {Ember.Service}
     * @readOnly
     */
    contacts: inject.service(),

    /**
     * The default CSS classnames
     *
     * @property classNames
     * @type {Array}
     * @default ['md-select-contact']
     * @readOnly
     */
    classNames: ['md-select-contact'],

    /**
     * The default codelist name. Should not be overridden.
     *
     * @property classNames
     * @protected
     * @type {String}
     * @default 'contacts'
     * @readOnly
     */
    mdCodeName: 'contacts',

    /**
     * The property that holds the select item value. Should not be overridden.
     *
     * @property valuePath
     * @protected
     * @type {String}
     * @default 'valuePath'
     * @readOnly
     */
    valuePath: 'contactId',

    /**
     * The property that holds the select item text. Should not be overridden.
     *
     * @property namePath
     * @protected
     * @type {String}
     * @default 'namePath'
     * @readOnly
     */
    namePath: 'title',

    /**
     * The contact type to display in the list. Choices are `organizations` or
     * `individuals` or 'contacts'. Passing any other value will default to
     * 'contacts'.
     *
     * @property contactType
     * @protected
     * @type {String}
     * @default 'contacts'
     */
    contactType: 'contacts',

    /**
     * The contact list mapped from the store to a codelist.
     *
     * @property mapped
     * @type {Array}
     * @category computed
     * @requires contacts.[]
     */
    mapped: computed('contacts.mapped.[]', 'contactType', function () {
      let type = this.get('contactType');

      if (!['individuals', 'organizations'].includes(type)) {
        return this.get('contacts').get('contactsCodes');
      }

      return this.get('contacts').get(type + 'Codes');
    })
  });
});
define('mdeditor/pods/components/input/md-select-contacts/component', ['exports', 'mdeditor/pods/components/input/md-codelist-multi/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    inject,
    computed
  } = Ember;

  exports.default = _component.default.extend({
    /**
     * Specialized select list control for displaying and selecting
     * contacts.
     *
     * @class md-select-contacts
     * @constructor
     * @extends md-select
     */

    /**
     * The contacts service
     *
     * @property contacts
     * @type {Ember.Service}
     * @readOnly
     */
    contacts: inject.service(),

    /**
     * The default CSS classnames
     *
     * @property classNames
     * @type {Array}
     * @default ['md-select-organization']
     * @readOnly
     */
    classNames: ['md-select-contact'],

    /**
     * The default codelist name. Should not be overridden.
     *
     * @property classNames
     * @protected
     * @type {String}
     * @default 'contacts'
     * @readOnly
     */
    mdCodeName: 'contacts',

    /**
     * The property that holds the select item value. Should not be overridden.
     *
     * @property valuePath
     * @protected
     * @type {String}
     * @default 'valuePath'
     * @readOnly
     */
    valuePath: 'contactId',

    /**
     * The property that holds the select item text. Should not be overridden.
     *
     * @property namePath
     * @protected
     * @type {String}
     * @default 'namePath'
     * @readOnly
     */
    namePath: 'title',

    /**
     * The contact type to display in the list. Choices are `organizations` or
     * `individuals` or 'contacts'. Passing any other value will default to
     * 'contacts'.
     *
     * @property contactType
     * @protected
     * @type {String}
     * @default 'contacts'
     */
    contactType: 'contacts',

    /**
     * The contact list mapped from the store to a codelist.
     *
     * @property mapped
     * @type {Array}
     * @category computed
     * @requires contacts.[]
     */
    mapped: computed('contacts.mapped.[]', 'contactType', function () {
      let type = this.get('contactType');

      if (!['individuals', 'organizations'].includes(type)) {
        return this.get('contacts').get('contactsCodes');
      }

      return this.get('contacts').get(type + 'Codes');
    })
  });
});
define('mdeditor/pods/components/input/md-select-profile/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    actions: {
      update(value) {
        this.sendAction('updateProfile', value);
      }
    }
  });
});
define("mdeditor/pods/components/input/md-select-profile/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JbF12IkN", "block": "{\"symbols\":[],\"statements\":[[6,\"form\"],[9,\"class\",\"navbar-form form-inline\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"form-group-sm\"],[7],[0,\"\\n    \"],[6,\"label\"],[9,\"class\",\"navbar-text control-label\"],[7],[0,\"Profile\"],[8],[0,\"\\n    \"],[1,[25,\"input/md-codelist\",null,[[\"change\",\"class\",\"create\",\"tooltip\",\"icon\",\"allowClear\",\"mdCodeName\",\"valuePath\",\"value\",\"placeholder\",\"searchEnabled\",\"label\"],[[25,\"action\",[[19,0,[]],\"update\",[20,[\"value\"]]],null],\"select-profile\",false,true,true,false,\"profile\",\"code\",[20,[\"value\"]],\"Choose profile\",false,false]]],false],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/input/md-select-profile/template.hbs" } });
});
define('mdeditor/pods/components/input/md-select-thesaurus/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    /**
     * A select list control for displaying and selecting thesaurus entries from
     * the keyword service.
     *
     * @class md-select-thesaurus
     * @constructor
     */

    keyword: Ember.inject.service(),

    /**
     * This method is called after the thesaurus selection is updated. It should be
     * overridden.
     *
     * @method selectThesaurus
     * @param  {Object} selected  The selected thesaurus from the keyword service
     * @param  {Object} thesaurus The thesaurus for the keyword record
     */
    selectThesaurus() {},

    thesaurusList: Ember.computed('keyword.thesaurus.[]', function () {
      let list = this.get('keyword').thesaurus.map(k => {
        return Ember.Object.create({
          id: k.citation.identifier[0].identifier,
          label: k.label || k.citation.title || 'Keywords'
        });
      });

      list.unshift(Ember.Object.create({
        id: 'custom',
        label: 'Custom Thesaurus'
      }));
      return list;
    }),
    actions: {
      update(id, thesaurus) {
        let selected = this.get('keyword').findById(id);

        this.get('selectThesaurus')(selected, thesaurus);
      }
    }
  });
});
define("mdeditor/pods/components/input/md-select-thesaurus/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0nYKTBig", "block": "{\"symbols\":[],\"statements\":[[0,\" \"],[1,[25,\"input/md-select\",null,[[\"placeholder\",\"disabled\",\"objectArray\",\"valuePath\",\"namePath\",\"value\",\"change\"],[\"Pick a thesaurus\",[20,[\"disabled\"]],[20,[\"thesaurusList\"]],\"id\",\"label\",[20,[\"value\"]],[25,\"action\",[[19,0,[]],\"update\",[20,[\"value\"]],[20,[\"thesaurus\"]]],null]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/input/md-select-thesaurus/template.hbs" } });
});
define('mdeditor/pods/components/input/md-select/component', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    defineProperty,
    get,
    computed,
    isNone,
    isBlank,
    assert
  } = Ember;

  exports.default = Component.extend({
    /**
     * A select list control for displaying and selecting options
     * provided in an array or promise array.
     *
     * ```handlebars
     * \{{input/md-select
     *  label="Measure Type"
     *  showValidations=true
     *  model=this
     *  path="measureType"
     *  valuePath="value"
     *  namePath="name"
     *  objectArray=typeOptions
     *  tooltip=true
     *  tooltipPath="tip"
     *  searchEnabled=false
     *  disabled=measureDisabled
     *  placeholder="The type of measurement."
     *  profilePath=(concat profilePath ".measure.type")
     * }}
     * ```
     *
     * @class md-select
     * @constructor
     */

    init() {
      this._super(...arguments);

      let model = this.get('model');
      let path = this.get('path');

      if (isNone(model) !== isNone(path)) {
        assert(`You must supply both model and path to ${this.toString()} or neither.`);
      }

      if (!isBlank(model)) {
        if (this.get(`model.${path}`) === undefined) {
          Ember.debug(`model.${path} is undefined in ${this.toString()}.`);

          //Ember.run.once(()=>model.set(path, ""));
        }

        defineProperty(this, 'value', computed.alias(`model.${path}`));

        defineProperty(this, 'validation', computed.alias(`model.validations.attrs.${path}`).readOnly());

        defineProperty(this, 'required', computed('validation.options.presence.presence', 'validation.options.presence.disabled', 'disabled', function () {
          return !this.get('disabled') && this.get('validation.options.presence.presence') && !this.get('validation.options.presence.disabled');
        }).readOnly());

        defineProperty(this, 'notValidating', computed.not('validation.isValidating').readOnly());

        defineProperty(this, 'hasContent', computed.notEmpty('value').readOnly());

        defineProperty(this, 'hasWarnings', computed.notEmpty('validation.warnings').readOnly());

        defineProperty(this, 'isValid', computed.and('hasContent', 'validation.isTruelyValid').readOnly());

        defineProperty(this, 'shouldDisplayValidations', computed.or('showValidations', 'didValidate', 'hasContent').readOnly());

        defineProperty(this, 'showErrorClass', computed.and('notValidating', 'showErrorMessage', 'hasContent', 'validation').readOnly());

        defineProperty(this, 'showErrorMessage', computed.and('shouldDisplayValidations', 'validation.isInvalid').readOnly());

        defineProperty(this, 'showWarningMessage', computed.and('shouldDisplayValidations', 'hasWarnings', 'isValid').readOnly());
      }
    },

    classNames: ['md-select'],
    classNameBindings: ['formGroup', 'required'],
    attributeBindings: ['data-spy'],
    formGroup: Ember.computed.notEmpty('label'),
    icons: Ember.inject.service('icon'),

    /**
     * An array or promise array containing the options for the
     * select list.
     * At a minimum the array elements should provide attributes for the
     * name value pairs displayed as select list options.
     * Tooltips may also be included.
     * Other attributes in the array elements will be ignored.
     *
     * ```javascript
     * {
     *   name: 'displayed',
     *   value: 'option',
     *   type: 'xtra info',
     *   tip: 'tooltip'
     * }
     * ```
     *
     * @property objectArray
     * @type Array
     * @required
     */

    /**
     * The initial value of the select. Type must match the type of the attribute
     * identified by the path option.
     *
     * @property value
     * @type Any
     * @required
     */
    value: null,

    /**
     * Path in the model to be used for the select list's option value. Both
     * `model` and `path` must be supplied together.
     *
     * @property path
     * @type String
     */

    /**
     * The model to be used to compute the value alias, generally used for
     * validations. Both `model` and `path` must be supplied together.
     *
     * @property model
     * @type String
     */

    /**
     * Name of the attribute in the objectArray to be used for the
     * select list's option value.
     *
     * @property valuePath
     * @type String
     * @required
     */

    /**
     * Name of the attribute in the objectArray to be used for the
     * select list's option name or display text.
     *
     * @property namePath
     * @type String
     * @required
     */

    /**
     * Indicates if icons should be rendered.
     *
     * @property icon
     * @type Boolean
     * @default false
     */
    icon: false,

    /**
     * Indicates if value is required.
     *
     * @property required
     * @type Boolean
     * @default false
     */
    required: false,

    /**
     * The default icon.
     *
     * @property defaultIcon
     * @type {String}
     * @default defaultList
     * @required
     */
    defaultIcon: 'defaultList',

    /**
     * Indicates if tooltips should be rendered for the options.
     *
     * @property tooltip
     * @type Boolean
     * @default false
     */
    tooltip: false,

    /**
     * Name of the attribute in the objectArray to be used for the
     * select list's tooltip.  If null, no tooltip will be
     * generated.
     *
     * @property tooltipPath
     * @type String
     * @default null
     */
    tooltipPath: null,

    /**
     * Whether to render a button to clear the selection.
     *
     * @property allowClear
     * @type Boolean
     * @default false
     */
    allowClear: false,

    /**
     * Whether to render the search input.
     *
     * @property searchEnabled
     * @type Boolean
     * @default true
     */
    searchEnabled: true,

    /**
     * Whether to disable the select.
     *
     * @property disabled
     * @type Boolean
     * @default false
     */
    disabled: false,

    /**
     * Whether to close the selection list after a selection has been made.
     *
     * @property closeOnSelect
     * @type Boolean
     * @default true
     */
    closeOnSelect: true,

    /**
     * The string to display when no option is selected.
     *
     * @property placeholder
     * @type String
     * @default 'Select one option'
     */
    placeholder: "Select one option",

    /**
     * Form label for select list
     *
     * @property label
     * @type String
     * @default null
     */
    label: null,

    ariaLabel: Ember.computed('label', function () {
      return this.get('label');
    }),

    /**
     * Indicates whether to allow the user to enter a new option
     * not contained in the select list.
     *
     * @property create
     * @type Boolean
     * @default false
     */
    create: false,

    /**
     * If set, removes the option with the specified id from the list. By default,
     * it will hide options with a null id.
     *
     * @property filterId
     * @type {String|Number|null}
     * @default null
     * @optional
     */
    filterId: null,

    /**
     * The component to render
     *
     * @property theComponent
     * @type Ember.computed
     * @return String
     */
    theComponent: Ember.computed('create', function () {
      return this.get('create') ? 'power-select-with-create' : 'power-select';
    }),

    /**
     * Callback after value is updated, usually an action is passed.
     *
     * @method change
     */
    change() {},

    /**
     * The currently selected item in the codelist
     *
     * @property selectedItem
     * @type Ember.computed
     * @return PromiseObject
     */
    selectedItem: Ember.computed('value', function () {
      let value = this.get('value');

      return _emberData.default.PromiseObject.create({
        promise: this.get('codelist').then(function (arr) {
          return arr.find(item => {
            return item['codeId'] === value;
          });
        })
      });
    }),

    /**
     * codelist is an array of code objects re-mapped from the input 'objectArray'.
     * Values from the input object array are mapped according the path parameters
     * provided.
     *
     * @property codelist
     * @type Ember.computed
     * @return PromiseArray
     */
    codelist: Ember.computed('objectArray', function () {
      const objArray = this.get('objectArray');
      let inList = new Ember.RSVP.Promise(function (resolve, reject) {
        // succeed
        resolve(objArray);
        // or reject
        reject(new Error('Couldn\'t create a promise.'));
      });
      let codeId = this.get('valuePath');
      let codeName = this.get('namePath');
      let tooltip = this.get('tooltipPath');
      let icons = this.get('icons');
      let defaultIcon = this.get('defaultIcon');
      let outList = Ember.A();

      return _emberData.default.PromiseArray.create({
        promise: inList.then(function (arr) {
          arr.forEach(function (item) {
            let newObject = {
              codeId: get(item, codeId),
              codeName: get(item, codeName),
              tooltip: false,
              icon: icons.get(item[codeName].toString()) || icons.get(defaultIcon)
            };
            if (tooltip) {
              newObject.tooltip = get(item, tooltip);
            }
            outList.pushObject(newObject);
          });

          return outList;
        })
      });
    }),

    /**
     * Creates a new codelist entry. The codeId and codeName are both set to the
     * passed value.
     *
     * @method createCode
     * @param  {String} code The code
     * @return {Object}      Returns a new codelist object
     */
    createCode(code) {
      return {
        codeId: code,
        codeName: code,
        tooltip: false
      };
    },

    /**
     * Set the value on the select.
     *
     * @method setValue
     * @param {Object} selected The object with the value(codeName) to set.
     */
    setValue(selected) {
      let val = selected ? selected.codeId : null;
      this.set('value', val);
      this.change();
    },
    actions: {
      // do the binding to value
      setValue(selected) {
        this.setValue(selected);
      },
      create(selected) {
        let code = this.createCode(selected);

        this.get('codelist').pushObject(code);
        this.setValue(code);
      }
    }

  });
});
define("mdeditor/pods/components/input/md-select/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LEerjN0W", "block": "{\"symbols\":[\"code\"],\"statements\":[[4,\"if\",[[20,[\"label\"]]],null,{\"statements\":[[0,\"      \"],[6,\"label\"],[7],[1,[18,\"label\"],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[6,\"div\"],[9,\"class\",\"md-input-input\"],[7],[0,\"\\n\"],[4,\"component\",[[20,[\"theComponent\"]]],[[\"selected\",\"multiple\",\"options\",\"disabled\",\"placeholder\",\"searchField\",\"searchEnabled\",\"allowClear\",\"closeOnSelect\",\"onchange\",\"oncreate\",\"ariaLabel\"],[[20,[\"selectedItem\"]],[20,[\"multiple\"]],[20,[\"codelist\"]],[20,[\"disabled\"]],[20,[\"placeholder\"]],\"codeName\",[20,[\"searchEnabled\"]],[20,[\"allowClear\"]],[20,[\"closeOnSelect\"]],[25,\"action\",[[19,0,[]],\"setValue\"],null],[25,\"action\",[[19,0,[]],\"create\"],null],[20,[\"ariaLabel\"]]]],{\"statements\":[[4,\"unless\",[[20,[\"filter\"]]],null,{\"statements\":[[0,\"        \"],[6,\"span\"],[10,\"class\",[26,[\"md-select-option \",[25,\"if\",[[19,1,[\"tooltip\"]],\"with-tip\"],null]]]],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"icon\"]]],null,{\"statements\":[[4,\"if\",[[19,1,[\"icon\"]]],null,{\"statements\":[[0,\"              \"],[6,\"span\"],[10,\"class\",[26,[\"fa fa-\",[19,1,[\"icon\"]]]]],[7],[0,\" \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"          \"],[6,\"span\"],[9,\"class\",\"select-value\"],[7],[1,[19,1,[\"codeName\"]],false],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"tooltip\"]]],null,{\"statements\":[[4,\"if\",[[19,1,[\"tooltip\"]]],null,{\"statements\":[[0,\"            \"],[6,\"span\"],[9,\"class\",\"select-tip\"],[7],[0,\"\\n              \"],[6,\"span\"],[9,\"class\",\"badge tooltip\"],[7],[0,\"?\\n                \"],[1,[25,\"tooltip-on-element\",null,[[\"text\",\"side\",\"enableLazyRendering\"],[[19,1,[\"tooltip\"]],\"right\",true]]],false],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"      \"],[6,\"span\"],[9,\"class\",\"md-input-error\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"showErrorMessage\"]]],null,{\"statements\":[[0,\"          \"],[6,\"span\"],[9,\"class\",\"md-error\"],[7],[0,\"\\n            \"],[1,[25,\"fa-icon\",[\"exclamation-circle\"],null],false],[0,\"\\n\"],[4,\"tooltip-on-element\",null,[[\"side\",\"class\"],[\"right\",\"md-tooltip danger\"]],{\"statements\":[[0,\"                \"],[1,[25,\"get\",[[25,\"get\",[[20,[\"model\",\"validations\",\"attrs\"]],[20,[\"path\"]]],null],\"message\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"showWarningMessage\"]]],null,{\"statements\":[[0,\"          \"],[6,\"span\"],[9,\"class\",\"md-warning\"],[7],[0,\"\\n            \"],[1,[25,\"fa-icon\",[\"exclamation-triangle\"],null],false],[0,\"\\n\"],[4,\"tooltip-on-element\",null,[[\"side\",\"class\"],[\"right\",\"md-tooltip warning\"]],{\"statements\":[[0,\"            \"],[1,[25,\"get\",[[25,\"get\",[[20,[\"model\",\"validations\",\"attrs\"]],[20,[\"path\"]]],null],\"warningMessage\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/input/md-select/template.hbs" } });
});
define('mdeditor/pods/components/input/md-textarea/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    /**
     * Input, edit, display a multi-line, expandable, text area.
     *
     * @class md-textarea
     * @constructor
     */

    attributeBindings: ['data-spy'],
    classNames: ['md-textarea'],
    classNameBindings: ['label:form-group', 'required'],

    /**
     * Initial value, returned value.
     *
     * @property value
     * @type String
     * @return String
     * @required
     */

    /**
     * Form label for textarea
     *
     * @property label
     * @type String
     * @default null
     */
    label: null,

    /**
     * The string to display when no option is selected.
     *
     * @property placeholder
     * @type String
     * @default 'Select one option'
     */
    placeholder: "Select one option",

    /**
     * Indicates whether the value is required
     *
     * @property required
     * @type Boolean
     * @default false
     */
    required: false,

    /**
     * Maximum number of characters allowed.
     * If maxlength is not provided the number of characters will
     * not be restricted.
     *
     * @property maxlength
     * @type Number
     * @default null
     */
    maxlength: null,

    /**
     * Enable auto-resizing of the textarea
     *
     * @property autoresize
     * @type Boolean
     * @default true
     */
    autoresize: true,

    /**
     * Set the maximum width of the resizeable element in pixels.
     * If maxwidth is not provided width will not be restricted.
     *
     * @property maxwidth
     * @type Number
     * @default null
     */
    maxwidth: null,

    /**
     * Set the maximum height of the resizable element in pixels.
     * If maxheight is not provided height will not be restricted.
     *
     * @property maxheight
     * @type {Number}
     * @default null
     */
    maxheight: null,

    /**
     * Set the minimum number of rows for the element.
     * Recommended for textareas.
     *
     * @property rows
     * @type Number
     * @default 2
     */
    rows: 2,

    /**
     * Set the maximum number of rows for the element.
     * Recommended for textareas.
     *
     * @property maxrows
     * @type Number
     * @default 10
     */
    maxrows: 10,

    /**
     * Class to set on the textarea
     *
     * @property class
     * @type {string}
     * @default 'form-control'
     */
    class: 'form-control',

    _didInsertArea() {
      this.scheduleMeasurement();
    }

  });
});
define("mdeditor/pods/components/input/md-textarea/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uZVhGBBT", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[20,[\"label\"]]],null,{\"statements\":[[0,\"        \"],[6,\"label\"],[7],[1,[18,\"label\"],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[1,[25,\"textarea\",null,[[\"value\",\"placeholder\",\"required\",\"maxlength\",\"autoresize\",\"didInsertElement\",\"rows\",\"max-rows\",\"max-width\",\"max-height\",\"class\"],[[20,[\"value\"]],[20,[\"placeholder\"]],[20,[\"required\"]],[20,[\"maxlength\"]],[20,[\"autoresize\"]],[20,[\"_didInsertArea\"]],[20,[\"rows\"]],[20,[\"maxrows\"]],[20,[\"maxwidth\"]],[20,[\"maxheight\"]],[20,[\"class\"]]]]],false],[0,\"\\n    \"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/input/md-textarea/template.hbs" } });
});
define('mdeditor/pods/components/input/md-toggle/component', ['exports', 'ember-toggle/components/x-toggle/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _component.default.extend({
    /**
    * Custom toggle switch for boolean input
    *
    * @class md-toggle
    * @constructor
    * @extends ember-toggle/components/x-toggle
    */

    /**
     * Bound classes:
     *  - value
     *    - __true__: toggle-on
     *    - __false__: toggle-off
     *
     * @property classNameBindings
     * @type {Array}
     */
    classNameBindings: ['value:toggle-on:toggle-off']
  });
});
define('mdeditor/pods/components/layout/md-breadcrumb/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define("mdeditor/pods/components/layout/md-breadcrumb/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1EUkA2W/", "block": "{\"symbols\":[\"&default\"],\"statements\":[[1,[25,\"bread-crumbs\",null,[[\"tagName\",\"linkable\"],[\"ol\",true]]],false],[0,\"\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/layout/md-breadcrumb/template.hbs" } });
});
define('mdeditor/pods/components/layout/md-card/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    computed,
    get,
    inject: {
      service
    },
    $
  } = Ember;

  exports.default = Component.extend({
    /**
     * Component that renders a Bootstrap card.
     *
     * ```handlebars
     * \{{#layout/md-card
     *   title="title"
     *   collapsible=true
     *   collapsed=false
     *   profilePath="card"
     *   data-spy="Card"
     *   shadow=true
     * }}
     *   Content
     * {{/layout/md-card}}
     * ```
     * @module mdeditor
     * @submodule components-layout
     * @class md-card
     * @constructor
     */

    spotlight: service(),

    classNames: ['md-card', 'card'],
    classNameBindings: ['shadow:box-shadow--4dp', 'scroll:scroll-card', 'maximizable', 'fullScreen', 'required', 'muted'],
    attributeBindings: ['data-spy'],

    /**
     * The card element id.
     *
     * @property cardId
     * @type {String}
     * @readOnly
     * @category computed
     * @requires elementId
     */
    cardId: computed('elementId', function () {
      return 'card-' + this.get('elementId');
    }).readOnly(),

    /**
     * The card title.
     *
     * @property title
     * @type {String}
     * @required
     */

    /**
     * The card title icon.
     *
     * @property titleIcon
     * @type {String}
     * @required
     */

    /**
     * If true, the "row" the card body will be initally collapsed.
     *
     * @property collapsed
     * @type {Boolean}
     * @default undefined
     */

    /**
     * If true, the spotlight button will be inserted into the toolbar.
     *
     * @property spotlightEnabled
     * @type {Boolean}
     * @default true
     */
    spotlightEnabled: true,

    /**
     * If true, the scroll-card class will be applied to the card.
     *
     * @property scroll
     * @type {Boolean}
     * @default undefined
     */

    /**
     * If true, the maximize control will be avialable on the card.
     *
     * @property maximizable
     * @type {Boolean}
     * @default undefined
     */

    /**
     * If true, a box shadow will be rendered around the card.
     *
     * @property shadow
     * @type {Boolean}
     * @default true
     */
    shadow: true,

    /**
     * If true, the card-block class will be added.
     *
     * @property block
     * @type {Boolean}
     * @default true
     */
    block: true,

    /**
     * If true, the card-block text color will be muted.
     *
     * @property muted
     * @type {Boolean}
     * @default false
     */
    muted: false,

    /**
     * If true, the collapse control will be added to the card header.
     *
     * @property collapsible
     * @type {Boolean}
     * @default undefined
     */

    /**
     * If true, the "row" class will be added to the card body.
     *
     * @property bodyIsRow
     * @type {Boolean}
     * @default undefined
     */

    /**
     * Bootstrap button class to apply to header buttton
     *
     * @property btnClass
     * @type {String}
     * @default 'primary'
     */
    btnClass: 'primary',

    /**
     * Icon to display in heder button
     *
     * @property btnIcon
     * @type {String}
     * @default undefined
     */

    /**
     * The text to display in the header button.
     * @property btnText
     * @type {String}
     * @default undefined
     */

    /**
     * The action to perform whrn the header button is clicked.
     * @property btnAction
     * @type {Function}
     * @default undefined
     */

    /**
     * The height to offset from top of container when scrolling.
     *
     * @property offset
     * @type {Number}
     * @default 130
     */
    offset: 130,

    /**
     * The data-spy text. Defaults to the title.
     *
     * @property data-spy
     * @type {String}
     * @default "this.title"
     * @category computed
     */
    'data-spy': computed.oneWay('title'),

    windowIcon: computed('fullScreen', function () {
      return this.get('fullScreen') ? 'compress' : 'expand';
    }),

    isCollapsible: computed('fullScreen', 'collapsible', function () {
      return !this.get('fullScreen') && this.get('collapsible');
    }),

    didInsertElement() {
      this._super(...arguments);

      if (this.get('collapsible')) {
        let card = this.$();
        let body = this.$(' > .card-collapse');
        let offset = this.get('offset') || 0;

        body.on('shown.bs.collapse', function (e) {
          e.stopPropagation();
          // card.get(0).scrollIntoView({
          //   block: "end",
          //   behavior: "smooth"
          // });
          //
          // let scrolledY = window.scrollY;
          //
          // if(scrolledY) {
          //   window.scroll(0, scrolledY - offset);
          // }
          $('html,body').animate({
            scrollTop: card.offset().top - offset
          }, 'slow');
        });
      }
    },

    actions: {
      toggleFullScreen() {
        this.toggleProperty('fullScreen');
      },
      spotlight(id) {
        get(this, 'spotlight').setTarget(id);
      }
    }
  });
});
define("mdeditor/pods/components/layout/md-card/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "W1SlB3OX", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[20,[\"title\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"card-header text-info\"],[7],[0,\"\\n      \"],[6,\"h4\"],[9,\"class\",\"card-title md-card-chevron\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"isCollapsible\"]]],null,{\"statements\":[[4,\"if\",[[20,[\"titleIcon\"]]],null,{\"statements\":[[0,\"          \"],[6,\"a\"],[9,\"role\",\"button\"],[9,\"data-toggle\",\"collapse\"],[10,\"href\",[26,[\"#\",[18,\"cardId\"]]]],[10,\"aria-expanded\",[26,[[25,\"if\",[[20,[\"collapsed\"]],\"false\",\"true\"],null]]]],[10,\"class\",[26,[[25,\"if\",[[20,[\"collapsed\"]],\"collapsed\"],null]]]],[10,\"aria-controls\",[26,[[18,\"panelId\"]]]],[7],[0,\"\\n          \"],[1,[25,\"fa-icon\",[[20,[\"titleIcon\"]]],null],false],[0,\"\\n          \"],[1,[18,\"title\"],false],[0,\"\\n          \"],[6,\"span\"],[9,\"class\",\"fa\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[6,\"a\"],[9,\"role\",\"button\"],[9,\"data-toggle\",\"collapse\"],[10,\"href\",[26,[\"#\",[18,\"cardId\"]]]],[10,\"aria-expanded\",[26,[[25,\"if\",[[20,[\"collapsed\"]],\"false\",\"true\"],null]]]],[10,\"class\",[26,[[25,\"if\",[[20,[\"collapsed\"]],\"collapsed\"],null]]]],[10,\"aria-controls\",[26,[[18,\"panelId\"]]]],[7],[0,\"\\n          \"],[6,\"span\"],[9,\"class\",\"fa\"],[7],[8],[0,\"\\n          \"],[1,[18,\"title\"],false],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[20,[\"titleIcon\"]]],null,{\"statements\":[[0,\"            \"],[1,[25,\"fa-icon\",[[20,[\"titleIcon\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[1,[18,\"title\"],false],[0,\"\\n\"]],\"parameters\":[]}],[4,\"if\",[[20,[\"maximizable\"]]],null,{\"statements\":[[0,\"          \"],[6,\"a\"],[9,\"role\",\"button\"],[9,\"class\",\"pull-right md-card-maximize hidden-print\"],[7],[0,\"\\n            \"],[1,[25,\"fa-icon\",[[20,[\"windowIcon\"]]],[[\"size\",\"click\"],[1,[25,\"action\",[[19,0,[]],\"toggleFullScreen\"],null]]]],false],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[6,\"div\"],[9,\"class\",\"btn-group hidden-print pull-right\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"btnText\"]]],null,{\"statements\":[[0,\"            \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"name\",\"button\"],[10,\"class\",[26,[\"btn btn-\",[25,\"if\",[[20,[\"btnClass\"]],[20,[\"btnClass\"]],\"primary\"],null],\" btn-xs\"]]],[3,\"action\",[[19,0,[]],[20,[\"btnAction\"]]]],[7],[0,\"\\n              \"],[1,[25,\"fa-icon\",[[20,[\"btnIcon\"]]],null],false],[0,\"\\n              \"],[1,[18,\"btnText\"],false],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[20,[\"spotlightEnabled\"]]],null,{\"statements\":[[0,\"            \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"name\",\"button\"],[9,\"class\",\"btn btn-info btn-xs md-btn-spotlight\"],[3,\"action\",[[19,0,[]],\"spotlight\",[20,[\"elementId\"]]]],[7],[0,\"\\n              \"],[1,[25,\"fa-icon\",[\"circle\"],null],false],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[6,\"div\"],[10,\"id\",[26,[[18,\"cardId\"]]]],[10,\"class\",[26,[\"card-collapse \",[25,\"if\",[[20,[\"collapsed\"]],\"collapse\",\"in\"],null],\" \",[25,\"if\",[[20,[\"bodyIsRow\"]],\"row\"],null],\" \",[25,\"if\",[[20,[\"block\"]],\"card-block\"],null]]]],[7],[0,\"\\n    \"],[11,1],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/layout/md-card/template.hbs" } });
});
define('mdeditor/pods/components/layout/md-footer/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    inject
  } = Ember;

  exports.default = Component.extend({
    tagName: 'footer',
    classNames: ['footer'],

    settings: inject.service()
  });
});
define("mdeditor/pods/components/layout/md-footer/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "yM7HwkQu", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"footer-container\"],[7],[0,\"\\n    \"],[6,\"span\"],[7],[0,\"AutoSave:\\n      \"],[6,\"span\"],[10,\"class\",[26,[[25,\"if\",[[20,[\"settings\",\"data\",\"autoSave\"]],\"text-success\",\"text-warning\"],null]]]],[7],[0,\"\\n        \"],[1,[25,\"if\",[[20,[\"settings\",\"data\",\"autoSave\"]],\"On\",\"Off\"],null],false],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[11,1],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/layout/md-footer/template.hbs" } });
});
define('mdeditor/pods/components/layout/md-nav-main/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    /*didInsertElement: function () {
      this.$('[data-toggle="tooltip"]')
        .tooltip();
    },*/
    actions: {
      toggleSidebar() {
        Ember.$('#md-wrapper').toggleClass('toggled');
        //hack to force reflow
        Ember.$('#md-navbar-main-collapse ul').hide().show(0);
      }
    }
  });
});
define("mdeditor/pods/components/layout/md-nav-main/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uWsnq2l6", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"nav\"],[9,\"id\",\"md-navbar-main\"],[9,\"class\",\"navbar navbar-inverse navbar-top\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"container-fluid\"],[7],[0,\"\\n    \"],[2,\" Brand and toggle get grouped for better mobile display \"],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"navbar-header\"],[7],[0,\"\\n      \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"navbar-toggle collapsed\"],[9,\"data-toggle\",\"collapse\"],[9,\"data-target\",\"#md-navbar-main-collapse\"],[9,\"aria-expanded\",\"false\"],[7],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"sr-only\"],[7],[0,\"Toggle navigation\"],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"icon-bar\"],[7],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"icon-bar\"],[7],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"icon-bar\"],[7],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"a\"],[9,\"class\",\"navbar-brand\"],[9,\"href\",\"#\"],[3,\"action\",[[19,0,[]],\"toggleSidebar\"]],[7],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"md-icon-mdeditor\"],[7],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"collapse navbar-collapse\"],[9,\"id\",\"md-navbar-main-collapse\"],[7],[0,\"\\n      \"],[6,\"ul\"],[9,\"class\",\"nav navbar-nav\"],[7],[0,\"\\n        \"],[6,\"li\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"dashboard\"],null,{\"statements\":[[0,\"            \"],[6,\"span\"],[9,\"class\",\"fa fa-dashboard\"],[7],[8],[0,\"\\n            \"],[6,\"span\"],[9,\"class\",\"md-nav-text\"],[7],[0,\"Dashboard\"],[8],[0,\"\\n            \"],[1,[25,\"tooltip-on-element\",null,[[\"text\",\"side\",\"class\"],[\"Dashboard\",\"bottom\",\"md-nav-tip\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n        \"],[6,\"li\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"export\"],null,{\"statements\":[[0,\"            \"],[6,\"span\"],[9,\"class\",\"fa fa-sign-out\"],[7],[8],[0,\"\\n            \"],[6,\"span\"],[9,\"class\",\"md-nav-text\"],[7],[0,\"Export\"],[8],[0,\"\\n            \"],[1,[25,\"tooltip-on-element\",null,[[\"text\",\"side\",\"class\"],[\"Export\",\"bottom\",\"md-nav-tip\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n        \"],[6,\"li\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"import\"],null,{\"statements\":[[0,\"            \"],[6,\"span\"],[9,\"class\",\"fa fa-sign-in\"],[7],[8],[0,\"\\n            \"],[6,\"span\"],[9,\"class\",\"md-nav-text\"],[7],[0,\"Import\"],[8],[0,\"\\n            \"],[1,[25,\"tooltip-on-element\",null,[[\"text\",\"side\",\"class\"],[\"Import\",\"bottom\",\"md-nav-tip\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n        \"],[6,\"li\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"publish\"],null,{\"statements\":[[0,\"            \"],[6,\"span\"],[9,\"class\",\"fa fa-share-square-o\"],[7],[8],[0,\"\\n            \"],[6,\"span\"],[9,\"class\",\"md-nav-text\"],[7],[0,\"Publish\"],[8],[0,\"\\n            \"],[1,[25,\"tooltip-on-element\",null,[[\"text\",\"side\",\"class\"],[\"Publish\",\"bottom\",\"md-nav-tip\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n        \"],[11,1],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"ul\"],[9,\"class\",\"nav navbar-nav navbar-right\"],[7],[0,\"\\n        \"],[6,\"li\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"settings\"],null,{\"statements\":[[0,\"            \"],[6,\"span\"],[9,\"class\",\"fa fa-gear\"],[7],[8],[0,\"\\n            \"],[6,\"span\"],[9,\"class\",\"md-nav-text nav-settings\"],[7],[0,\"Settings\"],[8],[0,\"\\n            \"],[1,[25,\"tooltip-on-element\",null,[[\"text\",\"side\",\"class\"],[\"Settings\",\"bottom\",\"md-nav-tip\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/layout/md-nav-main/template.hbs" } });
});
define('mdeditor/pods/components/layout/md-nav-secondary/component', ['exports', 'ember-resize/mixins/resize-aware'], function (exports, _resizeAware) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_resizeAware.default, {
    profile: Ember.inject.service('profile'),
    resizeService: Ember.inject.service('resize'),
    links: Ember.computed('profile.active', function () {
      const profile = this.get('profile').getActiveProfile();
      this.debouncedDidResize();

      return profile.secondaryNav;
    }),

    resizeWidthSensitive: true,
    resizeHeightSensitive: true,

    /**
     * translated "more" text
     *
     * @name more
     * @type {String}
     */
    more: 'More',

    /**
     * selector for the navbar container
     *
     * @name parent
     * @type {String}
     */
    parent: '#md-navbars',

    /**
     * width that needs to be subtracted from the parent div width
     *
     * @name offset
     * @type {Number}
     */
    offset: 0,

    init() {
      this._super(...arguments);

      // jQuery plugin adapted from https://github.com/tomiford/bootstrap-overflow-navs
      Ember.$.fn.overflowNavs = function (options) {
        // Create a handle to our ul menu
        // @TODO Implement some kind of check to make sure there is only one?  If we accidentally get more than one
        // then strange things happen
        let ul = Ember.$(this);

        // This should work with all navs, not just the navbar, so you should be able to pass a parent in
        let parent = options.parent ? options.parent : ul.parents('.navbar');

        // Get width of the navbar parent so we know how much room we have to work with
        let parent_width = Ember.$(parent).width() - (options.offset ? parseInt(Ember.$(options.offset).width()) : 0);

        // Find an already existing .overflow-nav dropdown
        let dropdown = Ember.$('li.overflow-nav', ul);

        // Create one if none exists
        if (!dropdown.length) {
          dropdown = Ember.$('<li class="overflow-nav dropdown"></li>');
          dropdown.append(Ember.$('<a class="dropdown-toggle" data-toggle="dropdown" href="#">' + options.more + '<b class="caret"></b></a>'));
          dropdown.append(Ember.$('<ul class="dropdown-menu"></ul>'));
        }

        // Get the width of the navbar, need to add together <li>s as the ul wraps in bootstrap
        let width = 100;
        // Allow for padding
        ul.children('li').each(function () {
          let $this = Ember.$(this);
          width += $this.outerWidth();
        });

        // Window is shrinking
        if (width >= parent_width) {
          // Loop through each non-dropdown li in the ul menu from right to left (using .get().reverse())
          Ember.$(Ember.$('li', ul).not('.dropdown').not('.dropdown li').get().reverse()).each(function () {
            let $this = Ember.$(this);
            // Get the width of the navbar
            let width = 100;
            // Allow for padding
            ul.children('li').each(function () {
              let $this = Ember.$(this);
              width += $this.outerWidth();
            });
            if (width >= parent_width) {
              // Remember the original width so that we can restore as the window grows
              $this.attr('data-original-width', $this.outerWidth());
              // Move the rightmost item to top of dropdown menu if we are running out of space
              dropdown.children('ul.dropdown-menu').prepend(this);
            }
            // @todo on shrinking resize some menu items are still in drop down when bootstrap mobile navigation is displaying
          });
        }
        // Window is growing
        else {
            // We used to just look at the first one, but this doesn't work when the window is maximized
            //let dropdownFirstItem = dropdown.children('ul.dropdown-menu').children().first();
            dropdown.children('ul.dropdown-menu').children().each(function () {
              if ((width += parseInt(Ember.$(this).attr('data-original-width'))) < parent_width) {
                // Restore the topmost dropdown item to the main menu
                dropdown.before(this);
              } else {
                // If the topmost item can't be restored, don't look any further
                return false;
              }
            });
          }

        // Remove or add dropdown depending on whether or not it contains menu items
        if (!dropdown.children('ul.dropdown-menu').children().length) {
          dropdown.remove();
        } else {
          // Append new dropdown menu to main menu iff it doesn't already exist
          if (!ul.children('li.overflow-nav').length) {
            ul.append(dropdown);
          }
        }
      };
    },

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      this.debouncedDidResize();
    },

    debouncedDidResize() {
      let options = {
        more: this.get('more'),
        parent: this.get('parent'),
        offset: this.get('offset')
      };

      Ember.$('#md-navbar-secondary').overflowNavs(options);
    }
  });
});
define("mdeditor/pods/components/layout/md-nav-secondary/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Jzsb4TgN", "block": "{\"symbols\":[\"link\",\"&default\"],\"statements\":[[6,\"ul\"],[9,\"id\",\"md-navbar-secondary\"],[9,\"class\",\"nav nav-pills\"],[9,\"role\",\"navigation\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"links\"]]],null,{\"statements\":[[0,\"    \"],[6,\"li\"],[7],[0,\"\\n      \"],[4,\"link-to\",[[19,1,[\"target\"]]],[[\"class\"],[\"link.class\"]],{\"statements\":[[1,[19,1,[\"title\"]],false],[0,\"\\n\"],[4,\"if\",[[19,1,[\"tip\"]]],null,{\"statements\":[[4,\"tooltip-on-component\",null,[[\"effect\",\"side\",\"delay\",\"class\"],[\"slide\",\"bottom\",500,\"md-tooltip info\"]],{\"statements\":[[0,\"            \"],[1,[19,1,[\"tip\"]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n  \"],[11,2],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/layout/md-nav-secondary/template.hbs" } });
});
define('mdeditor/pods/components/layout/md-nav-sidebar/component', ['exports', 'mdeditor/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    classNameBindings: ['isAlpha', 'isBeta'],
    isAlpha: Ember.computed(function () {
      return this.get('version').substring(0, 3) === "0.0";
    }),

    isBeta: Ember.computed(function () {
      let version = this.get('version');
      return version.substring(0, 1) === "0" && version.substring(0, 3) > 0;
    }),

    version: Ember.computed(function () {
      let version = _environment.default.APP.version;

      return version.substring(0, version.indexOf('+'));
    }),
    actions: {
      toggleHelp() {
        const sw = Ember.$('#md-sidebar-wrapper');

        Ember.$('#md-help').fadeToggle();
        sw.toggleClass('help');
      },
      toggleSidebar() {
        Ember.$('#md-wrapper').toggleClass('toggled');
        //hack to force reflow
        Ember.$('#md-navbar-main-collapse ul').hide().show(0);
      }
    }
  });
});
define("mdeditor/pods/components/layout/md-nav-sidebar/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7JZs0mwj", "block": "{\"symbols\":[\"class\",\"meta\",\"record\"],\"statements\":[[6,\"ul\"],[9,\"class\",\"sidebar-nav\"],[7],[0,\"\\n  \"],[6,\"li\"],[9,\"class\",\"sidebar-brand\"],[7],[0,\"\\n    \"],[6,\"a\"],[9,\"class\",\"sidebar-brand-link\"],[9,\"href\",\"#\"],[3,\"action\",[[19,0,[]],\"toggleSidebar\"]],[7],[0,\"md\"],[6,\"span\"],[9,\"class\",\"md-icon-mdeditor\"],[7],[8],[0,\"ditor\"],[8],[6,\"span\"],[10,\"class\",[26,[\"md-app-version \",[25,\"if\",[[20,[\"isAlpha\"]],\"alpha\"],null],\" \",[25,\"if\",[[20,[\"isBeta\"]],\"beta\"],null]]]],[7],[0,\"v\"],[1,[18,\"version\"],false],[8],[0,\"\\n    \"],[6,\"a\"],[9,\"id\",\"md-btn-help\"],[9,\"class\",\"pull-right\"],[9,\"href\",\"#\"],[3,\"action\",[[19,0,[]],\"toggleHelp\"]],[7],[6,\"span\"],[9,\"class\",\"fa fa-question-circle\"],[7],[8],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"li\"],[9,\"id\",\"md-sidebar-lists\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"panel-group\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"items\"]]],null,{\"statements\":[[4,\"with\",[[19,1,[\"meta\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[9,\"class\",\"panel\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"panel-heading clearfix\"],[10,\"id\",[26,[[19,2,[\"listId\"]],\"-heading\"]]],[7],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"btn-group btn-group-xs pull-right\"],[9,\"role\",\"group\"],[9,\"aria-label\",\"...\"],[7],[0,\"\\n\"],[4,\"link-to\",[[25,\"concat\",[[19,2,[\"type\"]],\".new\"],null]],[[\"class\"],[\"btn btn-primary btn-xs\"]],{\"statements\":[[0,\"                  \"],[1,[25,\"fa-icon\",[\"plus\"],null],false],[0,\" \"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"link-to\",[[19,2,[\"list\"]]],[[\"class\"],[\"btn btn-primary btn-xs\"]],{\"statements\":[[0,\"                  \"],[6,\"span\"],[9,\"class\",\"fa fa-list\"],[7],[8],[0,\" \"]],\"parameters\":[]},null],[0,\"\\n              \"],[8],[0,\"\\n              \"],[6,\"h4\"],[9,\"class\",\"panel-title bg-primary\"],[7],[0,\"\\n            \"],[6,\"a\"],[9,\"class\",\"\"],[9,\"data-toggle\",\"collapse\"],[9,\"aria-expanded\",\"true\"],[10,\"href\",[26,[\"#\",[19,2,[\"listId\"]]]]],[10,\"aria-controls\",[26,[[19,2,[\"listId\"]]]]],[7],[0,\"\\n              \"],[6,\"span\"],[9,\"class\",\"fa\"],[7],[8],[0,\" \"],[1,[19,2,[\"title\"]],false],[0,\" (\"],[1,[19,1,[\"length\"]],false],[0,\")\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"panel-collapse collapse in\"],[9,\"role\",\"tabpanel\"],[9,\"aria-expanded\",\"true\"],[10,\"id\",[26,[[19,2,[\"listId\"]]]]],[10,\"aria-labelledby\",[26,[[19,2,[\"listId\"]],\"-heading\"]]],[7],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"list-group\"],[7],[0,\"\\n\"],[4,\"each\",[[19,1,[]]],null,{\"statements\":[[0,\"                  \"],[6,\"div\"],[9,\"class\",\"list-group-item\"],[9,\"draggable\",\"true\"],[7],[0,\"\\n                    \"],[6,\"div\"],[9,\"class\",\"btn-group btn-group-xs pull-right\"],[9,\"role\",\"group\"],[9,\"aria-label\",\"Navigation Buttons\"],[7],[0,\"\\n\"],[4,\"link-to\",[[25,\"concat\",[[19,2,[\"type\"]],\".show.edit\"],null],[19,3,[]]],[[\"class\",\"disabledWhen\",\"draggable\"],[[25,\"concat\",[\"btn btn-\",[19,3,[\"status\"]]],null],[19,3,[\"isNew\"]],\"false\"]],{\"statements\":[[0,\"                        \"],[1,[25,\"fa-icon\",[\"pencil\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                    \"],[8],[0,\"\\n                    \"],[2,\"<span class=\\\"{{if draggable 'fa fa-ellipsis-v pull-right'}}\\\"></span> \"],[0,\"\\n\"],[4,\"link-to\",[[25,\"concat\",[[19,2,[\"type\"]],\".show\"],null],[19,3,[]]],[[\"class\",\"disabledWhen\",\"activeClass\",\"draggable\"],[\"sidebar-row\",[19,3,[\"isNew\"]],[25,\"concat\",[\"active text-\",[19,3,[\"status\"]]],null],\"false\"]],{\"statements\":[[4,\"if\",[[19,3,[\"defaultLogo\"]]],null,{\"statements\":[[0,\"                          \"],[6,\"img\"],[10,\"src\",[26,[[19,3,[\"defaultLogo\"]]]]],[9,\"class\",\"fa-fw\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                          \"],[6,\"span\"],[10,\"class\",[26,[\"fa fa-\",[19,3,[\"icon\"]],\" fa-fw\"]]],[7],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                        \"],[1,[19,3,[\"title\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                  \"],[8],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"              \"],[8],[0,\"\\n              \"],[2,\" <div class=\\\"panel-footer\\\">\\n                    <button>More</button>\\n                    </div> \"],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[1]},null],[0,\"    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/layout/md-nav-sidebar/template.hbs" } });
});
define('mdeditor/pods/components/layout/md-slider/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  var computed = Ember.computed;
  var $ = Ember.$;
  exports.default = Component.extend({
    classNames: ['md-slider'],
    classNameBindings: ['visible:in'],
    visible: false,

    didReceiveAttrs() {
      $('body').toggleClass('slider', this.get('visible') === true);
    },

    fromName: null,

    name: computed('fromName', function () {
      return this.get('fromName') || 'md-slider-content';
    }),

    actions: {
      toggleVisibility() {
        this.toggleProperty('visible');

        if (!this.get('visible')) {
          let context = this.get('context');

          this.set('fromName', null);

          if (!context.isDestroying) {
            this.get('onClose').call(this);
          }
        }
      }
    }
  });
});
define("mdeditor/pods/components/layout/md-slider/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "PSE2WZUx", "block": "{\"symbols\":[\"slider\",\"&default\"],\"statements\":[[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close huge-text\"],[9,\"aria-label\",\"Close\"],[3,\"action\",[[19,0,[]],\"toggleVisibility\"]],[7],[0,\"\\n  Close\\n  \"],[1,[25,\"fa-icon\",[\"caret-right\"],null],false],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"section\"],[9,\"class\",\"md-slider-body\"],[7],[0,\"\\n\"],[4,\"from-elsewhere\",null,[[\"name\"],[[20,[\"name\"]]]],{\"statements\":[[0,\"    \"],[6,\"h3\"],[9,\"class\",\"text-info\"],[7],[1,[19,1,[\"title\"]],false],[8],[0,\"\\n    \"],[6,\"hr\"],[7],[8],[0,\"\\n    \"],[1,[25,\"component\",[[19,1,[\"body\"]]],null],false],[0,\"\\n\"]],\"parameters\":[1]},null],[8],[0,\"\\n\"],[11,2],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/layout/md-slider/template.hbs" } });
});
define('mdeditor/pods/components/layout/md-wrap/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component
  } = Ember;

  exports.default = Component.extend({
    /**
     * Component used as a wrapper, data-spy enabled.
     *
     * ```handlebars
     * \{{#layout/md-wrap
     *   data-spy="Wrap"
     *   shadow=true
     * }}
     *   Content
     * {{/layout/md-wrap}}
     * ```
     * @module mdeditor
     * @submodule components-layout
     * @class md-wrap
     * @constructor
     */
    attributeBindings: ['data-spy']
  });
});
define("mdeditor/pods/components/layout/md-wrap/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1hjzs8j9", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/layout/md-wrap/template.hbs" } });
});
define('mdeditor/pods/components/md-help/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define("mdeditor/pods/components/md-help/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ytp17bEc", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"section\"],[9,\"id\",\"md-help\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"id\",\"md-help-content\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"page-header\"],[7],[0,\"\\n            \"],[6,\"h3\"],[7],[0,\"Help \"],[6,\"small\"],[7],[0,\"Main\"],[8],[0,\"\\n            \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"disabled\",\"\"],[9,\"id\",\"md-btn-tour\"],[9,\"class\",\"btn btn-xs btn-success pull-right\"],[7],[0,\"\\n                \"],[6,\"span\"],[9,\"class\",\"fa fa-bus\"],[7],[8],[0,\" Tour\\n            \"],[8],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"p\"],[7],[0,\"\\n            The mdEditor is a web application that allows users to author and\\n            edit metadata for projects and datasets. The primary design goal is\\n            to develop an editor that will allow creation and management of\\n            archival quality metadata without requiring extensive knowledge of\\n            metadata standards.\\n        \"],[8],[0,\"\\n        \"],[6,\"p\"],[7],[0,\"\\n            \"],[6,\"a\"],[9,\"href\",\"https://adiwg.gitbooks.io/mdeditor/content/\"],[9,\"target\",\"_blank\"],[7],[0,\"\\n              Click here to view the draft documentation.\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"p\"],[7],[0,\"Note, that it is a work in progress. Eventually, the documention will\\n        be available in this sidebar. \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/md-help/template.hbs" } });
});
define('mdeditor/pods/components/md-models-table/component', ['exports', 'ember-models-table/components/models-table', 'mdeditor/pods/components/md-models-table/themes/bootstrap3'], function (exports, _modelsTable, _bootstrap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _modelsTable.default.extend({
    themeInstance: _bootstrap.default.create(),
    filteringIgnoreCase: true,
    pageSizeValues: [10, 25, 50, 500]
  });
});
define('mdeditor/pods/components/md-models-table/components/check-all/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  var get = Ember.get;
  exports.default = Component.extend({
    actions: {
      toggleAllSelection() {
        get(this, 'toggleAllSelection')();
      }
    }
  });
});
define("mdeditor/pods/components/md-models-table/components/check-all/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OTKuT32i", "block": "{\"symbols\":[],\"statements\":[[6,\"span\"],[10,\"class\",[26,[\"center-block\\n\",[25,\"if\",[[25,\"is-equal\",[[20,[\"selectedItems\",\"length\"]],[20,[\"data\",\"length\"]]],null],[20,[\"themeInstance\",\"select-all-rows\"]],[20,[\"themeInstance\",\"deselect-all-rows\"]]],null]]]],[3,\"action\",[[19,0,[]],\"toggleAllSelection\"]],[7],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/md-models-table/components/check-all/template.hbs" } });
});
define('mdeditor/pods/components/md-models-table/components/check/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  var get = Ember.get;
  exports.default = Component.extend({
    actions: {
      clickOnRow(index, record, event) {
        get(this, 'clickOnRow')(index, record);
        event.stopPropagation();
      }
    }
  });
});
define("mdeditor/pods/components/md-models-table/components/check/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "HEkNczza", "block": "{\"symbols\":[],\"statements\":[[6,\"span\"],[10,\"class\",[26,[[25,\"if\",[[20,[\"isSelected\"]],[20,[\"themeInstance\",\"select-row\"]],[20,[\"themeInstance\",\"deselect-row\"]]],null]]]],[7],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/md-models-table/components/check/template.hbs" } });
});
define("mdeditor/pods/components/md-models-table/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Ry9nJjRE", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/md-models-table/template.hbs" } });
});
define('mdeditor/pods/components/md-models-table/themes/bootstrap3', ['exports', 'ember-models-table/themes/bootstrap3'], function (exports, _bootstrap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bootstrap.default.extend({
    'sort-asc': 'fa fa-caret-up',
    'sort-desc': 'fa fa-caret-down',
    'column-visible': 'fa fa-check-square-o',
    'column-hidden': 'fa fa-square-o',
    'nav-first': 'fa fa-fast-backward',
    'nav-prev': 'fa fa-backward',
    'nav-next': 'fa fa-forward',
    'nav-last': 'fa fa-fast-forward',
    'caret': 'fa fa-caret-down',
    'select-row': 'fa fa-fw fa-check-square-o',
    'deselect-row': 'fa fa-fw fa-square-o',
    'select-all-rows': 'fa fa-fw fa-check-square-o',
    'deselect-all-rows': 'fa fa-fw fa-square-o',
    'expand-row': 'fa fa-plus',
    'expand-all-rows': 'fa fa-plus',
    'collapse-row': 'fa fa-minus',
    'collapse-all-rows': 'fa fa-minus',
    clearFilterIcon: 'fa fa-times form-control-feedback',
    clearAllFiltersIcon: 'fa fa-times',
    sortGroupedPropertyBtn: 'btn',
    input: 'form-control',
    inputGroup: 'input-group',

    table: 'table table-striped table-bordered table-condensed table-hover'
  });
});
define('mdeditor/pods/components/md-translate/component', ['exports', 'moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  const {
    Component,
    computed,
    get,
    inject,
    set,
    $
  } = Ember;

  //const _contacts = [];

  exports.default = Component.extend({
    classNames: ['row'],

    cleaner: inject.service(),
    flashMessages: inject.service(),
    mdjson: inject.service(),

    /**
     * Indicates whether empty tags should be written to the translated output
     *
     * @property showAllTags
     * @type {Boolean}
     * @default "false"
     */
    showAllTags: false,

    writer: null,

    writerOptions: [{
      name: 'FGDC CSDGM(beta)',
      value: 'fgdc',
      type: 'application/xml',
      tip: 'Federal Geographic Data Committee Content Standard for Digital Geospatial Metadata'
    }, {
      name: 'HTML',
      value: 'html',
      type: 'text/html',
      tip: 'HTML "human-readable" and printable report of the metadata content'
    }, {
      name: 'ISO 19115-2',
      value: 'iso19115_2',
      type: 'application/xml',
      tip: 'International Standards Organization Geographic Information - Metadata 19115-2:2009'
    }, {
      name: 'ISO 19110',
      value: 'iso19110',
      type: 'application/xml',
      tip: 'International Standards Organization Geographic Information - Feature Catalogue 19110:2005'
    }, {
      name: 'sbJSON',
      value: 'sbJson',
      type: 'application/json',
      tip: 'USGS ScienceBase metadata format'
    }],

    result: null,
    errors: null,
    xhrError: null,
    isLoading: false,
    subTitle: null,

    writeObj: computed('writer', function () {
      return get(this, 'writerOptions').findBy('value', get(this, 'writer'));
    }),

    writerType: computed('writeObj', function () {
      return get(this, 'writeObj').type.split('/')[1];
    }),

    isJson: computed.equal('writerType', 'json'),
    isHtml: computed('writerType', function () {
      //IE does not supoprt srcdoc, so default to non-html display
      return get(this, 'writerType') === 'html' && 'srcdoc' in document.createElement('iframe');
    }),

    messages: computed('errors', function () {
      let err = get(this, 'errors');

      if (!err) {
        return null;
      }

      if (!err.readerStructurePass) {
        set(this, 'subtitle', 'Errors ocurred when reading the mdJSON');
        return err.readerStructureMessages;
      }

      if (!err.readerValidationPass) {
        set(this, 'subtitle', 'mdJSON Schema validation failed');
        return JSON.parse(err.readerValidationMessages[1]);
      }

      if (!err.readerExecutionPass) {
        return err.readerExecutionMessages;
      }

      if (!err.writerPass) {
        return err.writerMessages;
      }
    }),

    _clearResult() {
      set(this, 'result', null);
      set(this, 'subtitle', null);
      set(this, 'errors', null);
      set(this, 'xhrError', null);
    },

    // _replacer(key, value) {
    //   //console.log(arguments);
    //   if(key==='contactId' && !_contacts.includes(value)){
    //     _contacts.push(value);
    //   }
    //   return value;
    // },

    actions: {
      translate() {
        let mdjson = this.get('mdjson');
        // let clean = cleaner.clean(get(this,'model.json'));
        // let json = JSON.parse(JSON.stringify(clean, get(this, '_replacer')));
        // let contacts = this.store.peekAll('contact').mapBy('json');
        //
        // json.contact = contacts.filter((item)=>{
        //   return _contacts.includes(get(item, 'contactId'));
        // });
        //console.info(JSON.stringify(json));

        this._clearResult();
        set(this, 'isLoading', true);

        $.ajax("https://mdtranslator.herokuapp.com/api/v2/translator", {
          type: 'POST',
          data: {
            //file: JSON.stringify(cleaner.clean(json)),
            file: mdjson.formatRecord(get(this, 'model'), true),
            reader: 'mdJson',
            writer: get(this, 'writer'),
            showAllTags: get(this, 'showAllTags'),
            validate: 'normal',
            format: 'json'
          },
          context: this
        }).then(function (response) {
          //this.sendAction("select", response);
          //console.info(response);

          set(this, 'isLoading', false);

          if (response.success) {
            set(this, 'result', response.data);
            //Ember.$('.md-translator-preview textarea').val(response.data);
          } else {
            set(this, 'errors', response.messages);
            set(this, 'result', response.data);
            get(this, 'flashMessages').danger('Translation error!');
          }
        }, response => {
          let error = `mdTranslator Server error:
          ${response.status}: ${response.statusText}`;

          set(this, 'xhrError', error);
          get(this, 'flashMessages').danger(error);
        });
      },
      saveResult() {
        let title = get(this, 'model.title');
        let result = get(this, 'result');
        let writer = get(this, 'writeObj');

        window.saveAs(new Blob([result], {
          type: `${writer.type};charset=utf-8`
        }), `${title}_${(0, _moment.default)().format('YYYYMMDD')}.${get(this, 'writerType')}`);
      },
      clearResult() {
        this._clearResult();
      },
      prettifyJson() {
        let promise = new Ember.RSVP.Promise((resolve, reject) => {
          let parsed = JSON.parse(get(this, 'result'));

          if (parsed) {
            resolve(parsed);
          } else {
            reject('JSON not valid');
          }
        });

        promise.then(obj => {
          set(this, 'result', JSON.stringify(obj, null, 2));
        }).catch(error => {
          //console.log(error);
          get(this, 'flashMessages').danger(error.message);
        });
      }
    }
  });
});
define("mdeditor/pods/components/md-translate/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "dSQVQV34", "block": "{\"symbols\":[\"message\",\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n\\n\"],[4,\"layout/md-card\",null,[[\"title\",\"class\",\"spotlightEnabled\",\"block\"],[\"Options\",\"md-translator-options\",false,false]],{\"statements\":[[0,\"        \"],[6,\"form\"],[3,\"action\",[[19,0,[]],\"translate\"],[[\"on\"],[\"submit\"]]],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"card-block\"],[7],[0,\"\\n                \"],[1,[25,\"input/md-select\",null,[[\"label\",\"value\",\"valuePath\",\"namePath\",\"objectArray\",\"tooltip\",\"tooltipPath\",\"searchEnabled\",\"change\"],[\"Choose Format\",[20,[\"writer\"]],\"value\",\"name\",[20,[\"writerOptions\"]],true,\"tip\",false,[25,\"action\",[[19,0,[]],\"clearResult\"],null]]]],false],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n                    \"],[6,\"label\"],[7],[0,\"Show Empty Tags?\"],[8],[0,\"\\n                    \"],[6,\"div\"],[9,\"class\",\"form-control\"],[7],[0,\"\\n                        \"],[6,\"div\"],[9,\"class\",\"inline-block\"],[7],[0,\"\\n                            \"],[1,[25,\"input/md-toggle\",null,[[\"value\",\"onToggle\",\"showLabels\",\"onLabel\",\"offLabel\",\"size\",\"theme\"],[[20,[\"showAllTags\"]],[25,\"mut\",[[20,[\"showAllTags\"]]],null],true,\"Yes::true\",\"No::false\",\"medium\",\"form\"]]],false],[0,\"\\n                        \"],[8],[0,\"\\n                    \"],[8],[0,\"\\n                \"],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"card-footer\"],[7],[0,\"\\n                \"],[1,[25,\"control/md-status\",null,[[\"model\",\"isBtn\",\"bntSize\"],[[20,[\"model\"]],true,\"lg\"]]],false],[0,\"\\n                \"],[6,\"button\"],[9,\"type\",\"submit\"],[9,\"class\",\"btn btn-lg btn-primary pull-right\"],[10,\"disabled\",[25,\"if\",[[20,[\"writer\"]],false,true],null],null],[7],[0,\"\\n                    \"],[1,[25,\"fa-icon\",[\"retweet\"],null],false],[0,\" Translate \"],[8],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"col-md-7\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"isLoading\"]]],null,{\"statements\":[[0,\"      \"],[1,[25,\"control/md-spinner\",null,[[\"size\",\"text\"],[5,\"Translating...\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"messages\"]]],null,{\"statements\":[[4,\"layout/md-card\",null,[[\"title\",\"class\",\"spotlightEnabled\",\"scroll\",\"maximizable\",\"titleIcon\",\"spotlightEnabled\"],[\"Translation Error\",\"card-inverse card-outline-danger md-translator-error\",false,false,true,\"exclamation\",false]],{\"statements\":[[0,\"        \"],[6,\"h4\"],[9,\"class\",\"text-danger\"],[7],[1,[18,\"subtitle\"],false],[8],[0,\"\\n        \"],[6,\"ul\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"messages\"]]],null,{\"statements\":[[0,\"              \"],[6,\"li\"],[7],[1,[19,1,[]],false],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"xhrError\"]]],null,{\"statements\":[[4,\"layout/md-card\",null,[[\"title\",\"spotlightEnabled\",\"class\",\"scroll\",\"maximizable\",\"titleIcon\"],[\"mdTranslator Error\",false,\"card-inverse card-outline-danger md-translator-error\",false,true,\"exclamation\"]],{\"statements\":[[0,\"        \"],[6,\"p\"],[7],[1,[18,\"xhrError\"],false],[8],[0,\"\\n        \"],[6,\"p\"],[7],[0,\"An error occurred during the translation. The incident has been\\n        logged. If the problem persists, please contact techincal support.\"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"result\"]]],null,{\"statements\":[[4,\"layout/md-card\",null,[[\"title\",\"class\",\"scroll\",\"maximizable\",\"titleIcon\",\"spotlightEnabled\"],[\"Result\",[25,\"if\",[[20,[\"messages\"]],\"card-inverse card-outline-danger md-translator-error md-translator-preview\",\"md-translator-preview\"],null],false,true,\"check\",false]],{\"statements\":[[4,\"if\",[[20,[\"isHtml\"]]],null,{\"statements\":[[0,\"          \"],[6,\"iframe\"],[10,\"srcdoc\",[26,[[18,\"result\"]]]],[9,\"sandbox\",\"allow-scripts\"],[9,\"width\",\"100%\"],[9,\"height\",\"100%\"],[7],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[1,[25,\"input/md-textarea\",null,[[\"rows\",\"class\",\"placeholder\",\"value\"],[20,\"md-translator-area\",\"\",[20,[\"result\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"card-footer text-right\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"isJson\"]]],null,{\"statements\":[[0,\"              \"],[1,[25,\"control/md-json-button\",null,[[\"class\",\"json\",\"disabled\"],[\"btn-lg btn-primary\",[20,[\"result\"]],[25,\"if\",[[20,[\"result\"]],false,true],null]]]],false],[0,\"\\n\\n              \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-lg btn-primary\"],[10,\"disabled\",[25,\"if\",[[20,[\"result\"]],false,true],null],null],[3,\"action\",[[19,0,[]],\"prettifyJson\"]],[7],[0,\"\\n              \"],[1,[25,\"fa-icon\",[\"align-left\"],null],false],[0,\" Format \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n              \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-lg btn-success\"],[10,\"disabled\",[25,\"if\",[[20,[\"result\"]],false,true],null],null],[3,\"action\",[[19,0,[]],\"saveResult\"]],[7],[0,\"\\n              \"],[1,[25,\"fa-icon\",[\"floppy-o\"],null],false],[0,\" Save Result \"],[8],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[8],[0,\"\\n\"],[11,2],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/md-translate/template.hbs" } });
});
define('mdeditor/pods/components/object/md-address/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    A
  } = Ember;

  exports.default = Component.extend({
    /**
     * mdEditor class for input and edit of mdJSON 'address' object
     * arrays. The class manages the maintenance of an array of address
     * objects using the md-object-table class.
     *
     * @class md-address
     * @constructor
     * @requires md-object-table
     */

    attributeBindings: ['data-spy'],

    /**
     * mdJSON object containing the 'address' array.
     *
     * @property model
     * @type Object
     * @required
     */

    /**
     * List of mdJSON 'address' object attributes to display in
     * md-object-table to aid in choosing the address to edit or
     * delete.
     * The property is passed to md-object-table for configuration.
     *
     * @property attributes
     * @type String
     * @default ''
     */
    attributes: '',

    /**
     * Name to place on the mdEditor panel header for entry and edit of
     * 'address' objects.
     * The property is passed to md-object-table for configuration.
     *
     * @property label
     * @type String
     * @default 'Address'
     */
    label: 'Address',

    templateClass: Ember.Object.extend({
      init() {
        this._super(...arguments);

        this.set('addressType', A());
        this.set('deliveryPoint', A());
      }
    })
  });
});
define('mdeditor/pods/components/object/md-address/md-address-block/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define("mdeditor/pods/components/object/md-address/md-address-block/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "m1IF01Wn", "block": "{\"symbols\":[\"dp\"],\"statements\":[[6,\"address\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"item\",\"deliveryPoint\"]]],null,{\"statements\":[[0,\"    \"],[1,[19,1,[]],false],[6,\"br\"],[7],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[1,[20,[\"item\",\"city\"]],false],[0,\", \"],[1,[20,[\"item\",\"administrativeArea\"]],false],[0,\" \"],[1,[20,[\"item\",\"postalCode\"]],false],[0,\"\\n  \"],[1,[20,[\"item\",\"country\"]],false],[6,\"br\"],[7],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"item\",\"addressType\"]]],null,{\"statements\":[[0,\"    \"],[6,\"strong\"],[7],[1,[25,\"join\",[\", \",[20,[\"item\",\"addressType\"]]],null],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-address/md-address-block/template.hbs" } });
});
define("mdeditor/pods/components/object/md-address/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4vqiklag", "block": "{\"symbols\":[\"address\",\"line\",\"&default\"],\"statements\":[[4,\"object/md-object-table\",null,[[\"items\",\"header\",\"buttonText\",\"previewTemplate\",\"templateClass\",\"attributes\"],[[20,[\"model\"]],[20,[\"label\"]],\"Add Address\",\"object/md-address/md-address-block\",[20,[\"templateClass\"]],[20,[\"attributes\"]]]],{\"statements\":[[0,\"\\n\"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n    \"],[6,\"label\"],[7],[0,\"Address Type\"],[8],[0,\"\\n    \"],[1,[25,\"input/md-codelist-multi\",null,[[\"value\",\"create\",\"tooltip\",\"icon\",\"mdCodeName\",\"placeholder\"],[[19,1,[\"addressType\"]],true,true,false,\"addressType\",\"Select or enter one or more types\"]]],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[4,\"object/md-simple-array-table\",null,[[\"title\",\"required\",\"plain\",\"value\"],[\"Street Line\",false,true,[19,1,[\"deliveryPoint\"]]]],{\"statements\":[[0,\"  \"],[6,\"td\"],[7],[0,\"\\n      \"],[1,[25,\"input/md-input\",null,[[\"value\",\"placeholder\"],[[19,2,[\"item\",\"value\"]],\"Enter street address\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n    \"],[1,[25,\"input/md-input\",null,[[\"value\",\"class\",\"placeholder\",\"label\"],[[19,1,[\"city\"]],\"col-md-6\",\"City Name\",\"City\"]]],false],[0,\"\\n\\n    \"],[1,[25,\"input/md-input\",null,[[\"value\",\"class\",\"placeholder\",\"label\"],[[19,1,[\"administrativeArea\"]],\"col-md-6\",\"State or Province\",\"State/Province\"]]],false],[0,\"\\n\\n    \"],[1,[25,\"input/md-input\",null,[[\"value\",\"class\",\"placeholder\",\"label\"],[[19,1,[\"postalCode\"]],\"col-md-6\",\"Zip or Postal Code\",\"Postal Code\"]]],false],[0,\"\\n\\n\"],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"form-group\"],[9,\"class\",\"col-md-6\"],[7],[0,\"\\n        \"],[6,\"label\"],[7],[0,\"Country\"],[8],[0,\"\\n        \"],[1,[25,\"input/md-codelist\",null,[[\"value\",\"namePath\",\"tooltipPath\",\"width\",\"create\",\"tooltip\",\"icon\",\"mdCodeName\",\"placeholder\"],[[19,1,[\"country\"]],\"description\",\"codeName\",\"175px\",false,true,false,\"countries\",\"Enter a country code\"]]],false],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[25,\"input/md-textarea\",null,[[\"value\",\"placeholder\",\"label\"],[[19,1,[\"description\"]],\"Address description\",\"Description\"]]],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null],[11,3],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-address/template.hbs" } });
});
define('mdeditor/pods/components/object/md-allocation/component', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    computed: {
      alias
    },
    get,
    run: {
      once
    },
    getWithDefault,
    set
  } = Ember;

  const Validations = (0, _emberCpValidations.buildValidations)({
    'amount': [(0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true
    })],
    'currency': [(0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true
    })]
  });

  exports.default = Component.extend(Validations, {
    didReceiveAttrs() {
      this._super(...arguments);

      let model = get(this, 'model');

      once(this, function () {
        set(model, 'currency', getWithDefault(model, 'currency', 'USD'));
        set(model, 'onlineResource', getWithDefault(model, 'onlineResource', []));
      });
    },
    /**
     * The string representing the path in the profile object for the resource.
     *
     * @property profilePath
     * @type {String}
     * @default 'false'
     * @required
     */

    /**
     * The object to use as the data model for the resource.
     *
     * @property model
     * @type {Object}
     * @required
     */

    attributeBindings: ['data-spy'],
    'data-spy': 'Allocation',
    tagName: 'form',
    amount: alias('model.amount'),
    currency: alias('model.currency')
  });
});
define("mdeditor/pods/components/object/md-allocation/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Zp8W3gAa", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"layout/md-card\",null,[[\"shadow\",\"muted\",\"plain\"],[false,false,true]],{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n    \"],[6,\"label\"],[9,\"class\",\"text-info col-md-2 col-xxl-1 required\"],[7],[0,\"Amount\"],[8],[0,\"\\n    \"],[1,[25,\"input/md-input\",null,[[\"class\",\"type\",\"model\",\"valuePath\",\"step\",\"label\",\"placeholder\",\"profilePath\",\"showValidations\"],[\"col-md-5 col-xxl-3\",\"number\",[19,0,[]],\"amount\",\"0.01\",\"Amount\",\"Enter amount for the allocation.\",[25,\"concat\",[[20,[\"profilePath\"]],\".amount\"],null],true]]],false],[0,\"\\n    \"],[1,[25,\"input/md-codelist\",null,[[\"create\",\"model\",\"class\",\"mdCodeName\",\"namePath\",\"valuePath\",\"path\",\"label\",\"required\",\"tooltip\",\"icon\",\"allowClear\",\"placeholder\",\"profilePath\"],[false,[19,0,[]],\"col-md-5 col-xxl-3\",\"currency\",\"codeName\",\"codeName\",\"currency\",\"Currency\",true,true,false,true,\"Choose unit of currency\",[25,\"concat\",[[20,[\"profilePath\"]],\".currency\"],null]]]],false],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[1,[25,\"input/md-input\",null,[[\"value\",\"label\",\"placeholder\",\"profilePath\"],[[20,[\"model\",\"sourceAllocationId\"]],\"Award ID\",\"The source's identfier for the allocation, e.g. award number.\",[25,\"concat\",[[20,[\"profilePath\"]],\".sourceAllocationId\"],null]]]],false],[0,\"\\n\\n  \"],[1,[25,\"input/md-select-contact\",null,[[\"label\",\"placeholder\",\"value\",\"contactType\",\"icon\",\"tooltip\",\"profilePath\"],[\"Source\",\"Pick contact that supplied funds\",[20,[\"model\",\"sourceId\"]],\"contacts\",true,false,[25,\"concat\",[[20,[\"profilePath\"]],\".sourceId\"],null]]]],false],[0,\"\\n\\n  \"],[1,[25,\"input/md-select-contact\",null,[[\"label\",\"placeholder\",\"value\",\"contactType\",\"icon\",\"tooltip\",\"profilePath\"],[\"Recipient\",\"Pick contact that received funds\",[20,[\"model\",\"recipientId\"]],\"contacts\",true,false,[25,\"concat\",[[20,[\"profilePath\"]],\".recipientId\"],null]]]],false],[0,\"\\n\\n  \"],[1,[25,\"input/md-boolean\",null,[[\"label\",\"text\",\"value\",\"profilePath\"],[\"Matching\",\"Matching funds or in-kind services\",[20,[\"model\",\"matching\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".matching\"],null]]]],false],[0,\"\\n\\n \"],[1,[25,\"input/md-textarea\",null,[[\"value\",\"profilePath\",\"label\",\"placeholder\"],[[20,[\"model\",\"description\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".description\"],null],\"Description\",\"Enter text describing the allocation.\"]]],false],[0,\"\\n\\n\"],[4,\"if\",[[25,\"is-array\",[[20,[\"model\",\"onlineResource\"]]],null]],null,{\"statements\":[[0,\"    \"],[1,[25,\"object/md-online-resource-array\",null,[[\"model\",\"profilePath\",\"class\",\"plain\",\"shadow\",\"data-spy\"],[[20,[\"model\",\"onlineResource\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".onlineResource\"],null],[25,\"if\",[[20,[\"embedded\"]],\"md-embedded\"],null],true,false,\"Online Resource\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-allocation/template.hbs" } });
});
define('mdeditor/pods/components/object/md-array-table/component', ['exports', 'mdeditor/mixins/object-template'], function (exports, _objectTemplate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    computed,
    Component,
    A,
    getOwner,
    isArray,
    run,
    typeOf,
    get
  } = Ember;

  exports.default = Component.extend(_objectTemplate.default, {
    /**
     * mdEditor class for input and edit of arrays of objects. The
     * component is rendered as an editable table.
     *
     * @class md-array-table
     * @constructor
     * @uses object-template
     */

    init() {
      this._super(...arguments);

      this.applyTemplateArray('value');

      /*const Validation = this.get('validation');
       if(Validation) {
        const owner = getOwner(this);
        let Item = EmObject.extend(Validation);
         this.set('value', this.get('value')
          .map(i => Item.create(
            owner.ownerInjection(),
            i))
        );
      }*/
    },

    attributeBindings: ['data-spy'],

    /**
     * The array to render in the template
     *
     * @property value
     * @type {Array}
     * @default Ember.A()
     * @required
     */
    value: A(),

    /**
     * The template class to use for new items. This should be a constructor.
     * Objects should be created by extending Ember.Object.
     *  ```javascript
     *  Ember.Object.extend({
     *   foo: null,
     *   bar: Ember.A()
     *  }
     *  ```
     *
     * @property templateClass
     * @type {Any}
     * @constructor
     * @default null
     * @required
     */
    templateClass: null,

    /**
     * Comma-separated list of column headers to display in the table. If not
     * provided, the table header will not be created.
     *
     * @property columns
     * @type String
     */

    /**
     * Inital collapse state fo the panel.
     *
     * @property isCollapsed
     * @type {Boolean}
     * @default undefined
     */

    /**
     * The validation to apply to the array items.
     *
     * @property validation
     * @type {Ember.Mixin}
     * @default undefined
     */

    /**
     * Whether to render in a panel.
     *
     * @property plain
     * @type {Boolean}
     * @default false
     */
    plain: false,

    /**
     * Indicates whether at least one item is required is required in the value
     * array.
     *
     * @property required
     * @type {Boolean}
     * @default false
     */
    required: false,

    /**
     * The title for the panel. Should be in singular form.
     *
     * @property title
     * @type {String}
     * @default Item
     */
    title: 'Item',

    /**
     * The data-spy text. Defaults to the title.
     *
     * @property data-spy
     * @type {String}
     * @default "this.title"
     * @category computed
     */
    'data-spy': computed.oneWay('title'),

    /**
     * Array of column headers
     *
     * @property columnArray
     * @type {Array}
     * @readOnly
     * @category computed
     * @requires columns
     */
    columnArray: computed('columns', function () {
      let columns = this.get('columns');

      return typeof columns === 'string' ? columns.split(',') : null;
    }),

    /**
     * Uses isCollapsed if defined, otherwise inspects array length.
     *
     * @property collapsed
     * @type {Boolean}
     * @readOnly
     * @category computed
     * @requires isCollapsed
     */
    collapsed: computed('isCollapsed', 'value.[]', function () {
      let isCollapsed = this.get('isCollapsed');
      let value = this.get('value');

      if (isCollapsed !== undefined) {
        return isCollapsed;
      } else if (isArray(value) && get(value, 'length') > 0) {
        return false;
      } else {
        return true;
      }
    }),

    /**
     * Alias for values
     *
     * @property arrayValues
     * @type {Array}
     * @readOnly
     * @category computed
     * @requires value
     */
    arrayValues: computed.alias('value'),

    /**
     * The panel id selector
     *
     * @property panelId
     * @type {String}
     * @default "panel-{this.elementId}"
     * @readOnly
     * @category computed
     * @requires elementId
     */
    panelId: computed('elementId', function () {
      return 'panel-' + this.get('elementId');
    }),

    /**
     * The color of the counter displayed in the panel header
     *
     * @property pillColor
     * @type {String}
     * @readOnly
     * @category computed
     * @requires value.[]
     */
    pillColor: computed('value.[]', 'required', function () {
      let count = this.get('value.length') || 0;
      let required = this.get('required');
      return count === 0 ? required ? 'label-danger' : 'label-warning' : 'label-info';
    }),

    onChange() {},
    /**
     * Focus the added row, or the last row on deletion.
     *
     * @method valueChanged
     * @return none
     */
    valueChanged() {
      run.schedule('afterRender', this, function () {
        let panel = this.$('.panel-collapse');
        let input = this.$('.panel-collapse tbody tr:last-of-type input').first();

        if (panel.hasClass('in')) {
          input.focus();
        } else {
          //add a one-time listener to wait until panel is open
          panel.one('shown.bs.collapse', function () {
            input.focus();
          });
          panel.collapse('show');
        }
      });

      this.onChange();
    },

    actions: {
      addItem: function addItem(value) {
        const Template = this.get('templateClass');
        const owner = getOwner(this);

        value.pushObject(typeOf(Template) === 'class' ? Template.create(owner.ownerInjection()) : get(this, 'templateAsObject') ? {} : null);
        this.valueChanged();
      },

      deleteItem: function deleteItem(value, idx) {
        if (value.length > idx) {
          value.removeAt(idx);
        }
        this.valueChanged();
      }
    }
  });
});
define("mdeditor/pods/components/object/md-array-table/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4I7Y68LO", "block": "{\"symbols\":[\"item\",\"index\",\"prop\",\"item\",\"index\",\"prop\",\"&default\"],\"statements\":[[4,\"if\",[[20,[\"plain\"]]],null,{\"statements\":[[0,\"  \"],[6,\"label\"],[9,\"class\",\"show\"],[7],[0,\"\\n      \"],[6,\"span\"],[9,\"class\",\"fa\"],[7],[8],[0,\" \"],[1,[25,\"pluralize\",[[20,[\"title\"]]],null],false],[0,\"\\n      \"],[6,\"label\"],[10,\"class\",[26,[\"label label-pill \",[18,\"pillColor\"]]]],[7],[0,\" \"],[1,[20,[\"value\",\"length\"]],false],[0,\" \"],[8],[0,\"\\n      \"],[6,\"button\"],[9,\"type\",\"button\"],[10,\"id\",[26,[[18,\"panelId\"],\"-btn\"]]],[9,\"class\",\"btn btn-xs btn-info pull-right\"],[3,\"action\",[[19,0,[]],\"addItem\",[20,[\"value\"]]]],[7],[0,\"\\n          \"],[1,[25,\"fa-icon\",[\"plus\"],null],false],[0,\" Add \"],[1,[18,\"title\"],false],[0,\"\\n      \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",[26,[[25,\"if\",[[20,[\"responsive\"]],\"table-responsive\"],null]]]],[7],[0,\"\\n  \"],[6,\"table\"],[9,\"class\",\"table table-striped table-hover\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"columnArray\"]]],null,{\"statements\":[[0,\"          \"],[6,\"thead\"],[7],[0,\"\\n            \"],[6,\"tr\"],[7],[0,\"\\n\"],[4,\"unless\",[[20,[\"hideIndex\"]]],null,{\"statements\":[[0,\"              \"],[6,\"th\"],[7],[0,\"#\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"each\",[[20,[\"columnArray\"]]],null,{\"statements\":[[0,\"              \"],[6,\"th\"],[7],[1,[25,\"uc-words\",[[19,6,[]]],null],false],[8],[0,\"\\n\"]],\"parameters\":[6]},null],[0,\"              \"],[6,\"th\"],[7],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[6,\"tbody\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"arrayValues\"]]],null,{\"statements\":[[0,\"              \"],[6,\"tr\"],[7],[0,\"\\n\"],[4,\"unless\",[[20,[\"hideIndex\"]]],null,{\"statements\":[[0,\"                  \"],[6,\"td\"],[7],[1,[19,5,[]],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                  \"],[11,7,[[25,\"hash\",null,[[\"item\",\"index\"],[[19,4,[]],[19,5,[]]]]]]],[0,\"\\n                  \"],[6,\"td\"],[7],[0,\"\\n                      \"],[6,\"div\"],[9,\"class\",\"md-button-column\"],[7],[0,\"\\n                          \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-xs btn-danger\"],[3,\"action\",[[19,0,[]],\"deleteItem\",[20,[\"value\"]],[19,5,[]]]],[7],[0,\"\\n                              \"],[6,\"span\"],[9,\"class\",\"fa fa-times\"],[7],[8],[0,\" Delete\\n                          \"],[8],[0,\"\\n                      \"],[8],[0,\"\\n                  \"],[8],[0,\"\\n              \"],[8],[0,\"\\n\"]],\"parameters\":[4,5]},{\"statements\":[[0,\"          \"],[6,\"tr\"],[7],[0,\"\\n              \"],[6,\"td\"],[10,\"colspan\",[26,[[25,\"add-em\",[[25,\"if\",[[20,[\"hideIndex\"]],1,2],null],[20,[\"columnArray\",\"length\"]]],null]]]],[7],[0,\"\\n                  \"],[6,\"button\"],[9,\"type\",\"button\"],[10,\"id\",[26,[[18,\"panelId\"],\"-btn\"]]],[9,\"class\",\"btn btn-xs btn-info\"],[3,\"action\",[[19,0,[]],\"addItem\",[20,[\"value\"]]]],[7],[0,\"\\n                      \"],[1,[25,\"fa-icon\",[\"plus\"],null],false],[0,\" Add \"],[1,[18,\"title\"],false],[0,\"\\n                  \"],[8],[0,\"\\n              \"],[8],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"panel panel-default box-shadow--4dp\"],[7],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"panel-heading\"],[7],[0,\"\\n            \"],[6,\"h3\"],[9,\"class\",\"panel-title md-panel-chevron\"],[7],[0,\"\\n                \"],[6,\"a\"],[9,\"data-toggle\",\"collapse\"],[10,\"aria-expanded\",[26,[[25,\"if\",[[20,[\"collapsed\"]],\"false\",\"true\"],null]]]],[10,\"class\",[26,[[25,\"if\",[[20,[\"collapsed\"]],\"collapsed\"],null]]]],[10,\"href\",[26,[\"#\",[18,\"panelId\"]]]],[10,\"aria-controls\",[26,[\"#\",[18,\"panelId\"]]]],[7],[0,\"\\n                    \"],[6,\"span\"],[9,\"class\",\"fa\"],[7],[8],[0,\" \"],[1,[25,\"pluralize\",[[20,[\"title\"]]],null],false],[0,\"\\n                    \"],[6,\"label\"],[10,\"class\",[26,[\"label label-pill \",[18,\"pillColor\"]]]],[7],[0,\" \"],[1,[20,[\"value\",\"length\"]],false],[0,\" \"],[8],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"button\"],[9,\"type\",\"button\"],[10,\"id\",[26,[[18,\"panelId\"],\"-btn\"]]],[9,\"class\",\"btn btn-xs btn-info pull-right\"],[3,\"action\",[[19,0,[]],\"addItem\",[20,[\"value\"]]]],[7],[0,\"\\n                    \"],[1,[25,\"fa-icon\",[\"plus\"],null],false],[0,\" Add\\n                \"],[8],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"id\",[26,[[18,\"panelId\"]]]],[10,\"class\",[26,[\"panel-collapse \",[25,\"if\",[[20,[\"collapsed\"]],\"collapse\",\"in\"],null]]]],[7],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",[26,[\"panel-body \",[25,\"if\",[[20,[\"responsive\"]],\"table-responsive\"],null]]]],[7],[0,\"\\n                \"],[6,\"table\"],[9,\"class\",\"table table-striped table-hover fadeIn\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"columnArray\"]]],null,{\"statements\":[[0,\"                        \"],[6,\"thead\"],[7],[0,\"\\n                          \"],[6,\"tr\"],[7],[0,\"\\n\"],[4,\"unless\",[[20,[\"hideIndex\"]]],null,{\"statements\":[[0,\"                            \"],[6,\"th\"],[7],[0,\"#\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"each\",[[20,[\"columnArray\"]]],null,{\"statements\":[[0,\"                            \"],[6,\"th\"],[7],[1,[25,\"uc-words\",[[19,3,[]]],null],false],[8],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"                            \"],[6,\"th\"],[7],[8],[0,\"\\n                          \"],[8],[0,\"\\n                        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                    \"],[6,\"tbody\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"arrayValues\"]]],null,{\"statements\":[[0,\"                            \"],[6,\"tr\"],[7],[0,\"\\n\"],[4,\"unless\",[[20,[\"hideIndex\"]]],null,{\"statements\":[[0,\"                                \"],[6,\"td\"],[7],[1,[19,2,[]],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                                \"],[11,7,[[25,\"hash\",null,[[\"item\",\"index\"],[[19,1,[]],[19,2,[]]]]]]],[0,\"\\n                                \"],[6,\"td\"],[7],[0,\"\\n                                    \"],[6,\"div\"],[9,\"class\",\"md-button-column\"],[7],[0,\"\\n                                        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-xs btn-danger\"],[3,\"action\",[[19,0,[]],\"deleteItem\",[20,[\"value\"]],[19,2,[]]]],[7],[0,\"\\n                                            \"],[6,\"span\"],[9,\"class\",\"fa fa-times\"],[7],[8],[0,\" Delete\\n                                        \"],[8],[0,\"\\n                                    \"],[8],[0,\"\\n                                \"],[8],[0,\"\\n                            \"],[8],[0,\"\\n\"]],\"parameters\":[1,2]},{\"statements\":[[0,\"                        \"],[6,\"tr\"],[7],[0,\"\\n                            \"],[6,\"td\"],[10,\"colspan\",[26,[[25,\"add-em\",[[25,\"if\",[[20,[\"hideIndex\"]],1,2],null],[20,[\"columnArray\",\"length\"]]],null]]]],[7],[0,\"\\n                                \"],[6,\"button\"],[9,\"type\",\"button\"],[10,\"id\",[26,[[18,\"panelId\"],\"-btn\"]]],[9,\"class\",\"btn btn-xs btn-info\"],[3,\"action\",[[19,0,[]],\"addItem\",[20,[\"value\"]]]],[7],[0,\"\\n                                    \"],[1,[25,\"fa-icon\",[\"plus\"],null],false],[0,\" Add \"],[1,[18,\"title\"],false],[0,\"\\n                                \"],[8],[0,\"\\n                            \"],[8],[0,\"\\n                        \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                    \"],[8],[0,\"\\n                \"],[8],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-array-table/template.hbs" } });
});
define('mdeditor/pods/components/object/md-associated/component', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    computed,
    set,
    get,
    getWithDefault,
    run: {
      once
    },
    inject: {
      service
    }
  } = Ember;

  const Validations = (0, _emberCpValidations.buildValidations)({
    'associationType': [(0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true
    })]
  });

  exports.default = Component.extend(Validations, {
    store: service(),

    didReceiveAttrs() {
      this._super(...arguments);

      let model = get(this, 'model');

      once(this, function () {
        set(model, 'scope', getWithDefault(model, 'scope', {}));
        set(model, 'resourceType', getWithDefault(model, 'resourceType', []));
        set(model, 'resourceCitation', getWithDefault(model, 'resourceCitation', {}));
        set(model, 'metadataCitation', getWithDefault(model, 'metadataCitation', {}));
      });
    },

    tagName: 'form',

    /**
     * The string representing the path in the profile object for the resource.
     *
     * @property profilePath
     * @type {String}
     * @default "false"
     * @required
     */

    /**
     * The object to use as the data model for the resource.
     *
     * @property model
     * @type {Object}
     * @required
     */

    associationType: computed.alias('model.associationType'),

    linkedRecord: computed('model.mdRecordId', function () {
      let store = this.get('store');

      return store.peekAll('record').filterBy('recordId', get(this, 'model.mdRecordId')).get('firstObject');
    }),

    linkedAssociation: computed('linkedRecord.json.metadata.associatedResource.[]', function () {
      let ar = this.get('linkedRecord.json.metadata.associatedResource');

      if (!ar) {
        return null;
      }

      return ar.findBy('mdRecordId', this.get('recordId'));
    }),

    linkedAssociationType: computed('linkedAssociation.associationType', {
      get() {
        return this.get('linkedAssociation.associationType');
      },
      set(key, value) {
        let assoc = this.get('linkedAssociation');
        let model = this.get('linkedRecord');

        if (!assoc) {
          set(model, 'json.metadata.associatedResource', getWithDefault(model, 'json.metadata.associatedResource', []));

          model.get('json.metadata.associatedResource').pushObject({
            mdRecordId: get(this, 'recordId'),
            associationType: value
          });

          model.notifyPropertyChange('hasDirtyHash');

          return value;
        }

        set(assoc, 'associationType', value);
        model.notifyPropertyChange('hasDirtyHash');

        return value;
      }
    }),

    editLinked(record) {
      return record;
    }
  });
});
define('mdeditor/pods/components/object/md-associated/preview/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    get,
    computed,
    inject: {
      service
    }
  } = Ember;

  exports.default = Component.extend({
    store: service(),
    classNameBindings: ['muted:text-muted'],

    /**
     * Whether to render the text muted.
     *
     * @property muted
     * @type {Boolean}
     * @default "true"
     */
    muted: true,

    citation: computed('item', 'item.mdRecordId', function () {
      if (!this.get('item.mdRecordId')) {
        return this.get('item.resourceCitation');
      }

      let store = this.get('store');

      return store.peekAll('record').filterBy('recordId', get(this, 'item.mdRecordId')).get('firstObject.json.metadata.resourceInfo.citation');
    }),

    metadataIdentifier: computed('item.metadataCitation.identifier', 'item.mdRecordId', function () {
      if (!this.get('item.mdRecordId')) {
        return this.get('item.metadataCitation.identifier.0');
      }

      let store = this.get('store');

      return store.peekAll('record').filterBy('recordId', get(this, 'item.mdRecordId')).get('firstObject.json.metadata.metadataInfo.metadataIdentifier');
    })
  });
});
define("mdeditor/pods/components/object/md-associated/preview/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ojSL1ZkC", "block": "{\"symbols\":[\"model\",\"meta\"],\"statements\":[[4,\"with\",[[20,[\"item\"]]],null,{\"statements\":[[0,\"  \"],[6,\"dl\"],[9,\"class\",\"dl-horizontal\"],[7],[0,\"\\n    \"],[6,\"dt\"],[7],[0,\"\\n      \"],[6,\"h4\"],[9,\"class\",\"text-info\"],[7],[0,\"Resource #\"],[1,[18,\"index\"],false],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"dd\"],[7],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-xxl-6\"],[7],[0,\"\\n\"],[4,\"control/md-definition\",null,[[\"title\"],[\"Association Type\"]],{\"statements\":[[0,\"          \"],[1,[19,1,[\"associationType\"]],false],[0,\"\\n\"],[4,\"if\",[[19,1,[\"mdRecordId\"]]],null,{\"statements\":[[0,\"            (\"],[6,\"em\"],[7],[0,\"linked\"],[8],[0,\")\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-xxl-6\"],[7],[0,\"\\n        \"],[1,[25,\"control/md-definition\",null,[[\"title\",\"text\"],[\"Initiative Type\",[19,1,[\"initiativeType\"]]]]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[1,[25,\"object/md-citation/preview/body\",null,[[\"citation\"],[[20,[\"citation\"]]]]],false],[0,\"\\n\\n  \"],[6,\"dl\"],[9,\"class\",\"dl-horizontal col-lg-12\"],[7],[0,\"\\n\"],[4,\"control/md-definition\",null,[[\"title\"],[\"Metadata Identifier\"]],{\"statements\":[[4,\"with\",[[20,[\"metadataIdentifier\"]]],null,{\"statements\":[[0,\"      \"],[1,[19,2,[\"identifier\"]],false],[0,\" \"],[1,[25,\"if\",[[19,2,[\"namespace\"]],[25,\"concat\",[\"(\",[19,2,[\"namespace\"]],\")\"],null]],null],false],[0,\"\\n\"]],\"parameters\":[2]},{\"statements\":[[0,\"      \"],[6,\"em\"],[9,\"class\",\"text-muted\"],[7],[0,\"No metadata identifier assigned.\"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[8],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-associated/preview/template.hbs" } });
});
define("mdeditor/pods/components/object/md-associated/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YY8JsDd6", "block": "{\"symbols\":[\"meta\",\"type\",\"metdata\",\"citation\",\"&default\"],\"statements\":[[1,[25,\"input/md-codelist\",null,[[\"label\",\"create\",\"tooltip\",\"icon\",\"disabled\",\"allowClear\",\"showValidations\",\"mdCodeName\",\"path\",\"model\",\"placeholder\",\"profilePath\",\"data-spy\"],[\"Association Type\",true,true,false,false,true,true,\"associationType\",\"associationType\",[19,0,[]],\"Choose Type of Association\",[25,\"concat\",[[20,[\"profilePath\"]],\".associationType\"],null],\"Association Type\"]]],false],[0,\"\\n\\n\"],[1,[25,\"input/md-codelist\",null,[[\"label\",\"create\",\"tooltip\",\"icon\",\"disabled\",\"allowClear\",\"showValidations\",\"mdCodeName\",\"path\",\"model\",\"placeholder\",\"profilePath\"],[\"Initiative Type\",true,true,false,false,true,true,\"initiativeType\",\"initiativeType\",[20,[\"model\"]],\"Choose Type of Initiative\",[25,\"concat\",[[20,[\"profilePath\"]],\".initiativeType\"],null]]]],false],[0,\"\\n\\n\"],[4,\"unless\",[[20,[\"model\",\"mdRecordId\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n      \"],[1,[25,\"object/md-resource-type-array\",null,[[\"plain\",\"value\",\"required\",\"data-spy\",\"profilePath\"],[false,[20,[\"model\",\"resourceType\"]],true,\"Resource Types\",[25,\"concat\",[[20,[\"profilePath\"]],\".resourceType\"],null]]]],false],[0,\"\\n  \"],[8],[0,\"\\n\\n\\n\"],[4,\"with\",[[20,[\"model\",\"resourceCitation\"]]],null,{\"statements\":[[0,\"    \"],[1,[25,\"object/md-citation\",null,[[\"model\",\"profilePath\",\"simpleIdentifier\"],[[19,4,[]],[25,\"concat\",[[20,[\"profilePath\"]],\".resourceCitation\"],null],true]]],false],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"title\",\"profilePath\",\"shadow\",\"collapsible\",\"collapsed\"],[\"Metadata Citation\",[25,\"concat\",[[20,[\"profilePath\"]],\".metadataCitation\"],null],true,true,true]],{\"statements\":[[4,\"with\",[[20,[\"model\",\"metadataCitation\"]]],null,{\"statements\":[[0,\"    \"],[1,[25,\"object/md-citation\",null,[[\"model\",\"profilePath\",\"embedded\",\"simpleIdentifier\"],[[19,3,[]],[25,\"concat\",[[20,[\"profilePath\"]],\".metadataCitation\"],null],true,true]]],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"title\",\"shadow\",\"block\",\"muted\",\"collapsible\",\"collapsed\",\"btnText\",\"btnClass\",\"btnAction\",\"btnIcon\"],[\"Linked Record\",false,false,false,false,false,\"Edit\",[25,\"concat\",[\"success\",[25,\"unless\",[[20,[\"linkedRecord\"]],\"disabled\"],null]],null],[25,\"action\",[[19,0,[]],[20,[\"editLinked\"]],[20,[\"linkedRecord\"]]],null],\"pencil\"]],{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"card-block\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"linkedRecord\"]]],null,{\"statements\":[[4,\"object/md-citation/preview/body\",null,[[\"citation\",\"class\"],[[20,[\"linkedRecord\",\"json\",\"metadata\",\"resourceInfo\",\"citation\"]],\"text-muted\"]],{\"statements\":[[0,\"        \"],[6,\"dl\"],[9,\"class\",\"dl-horizontal col-lg-12\"],[7],[0,\"\\n\"],[4,\"control/md-definition\",null,[[\"title\"],[\"Resource Type(s)\"]],{\"statements\":[[4,\"each\",[[20,[\"linkedRecord\",\"json\",\"metadata\",\"resourceInfo\",\"resourceType\"]]],null,{\"statements\":[[0,\"                  \"],[1,[19,2,[\"type\"]],false],[0,\":\\n\"],[4,\"if\",[[19,2,[\"name\"]]],null,{\"statements\":[[0,\"                      \"],[1,[19,2,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                      \"],[6,\"em\"],[7],[0,\"Not named\"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                  \"],[6,\"br\"],[7],[8],[0,\"\\n\"]],\"parameters\":[2]},{\"statements\":[[0,\"                      \"],[6,\"em\"],[9,\"class\",\"text-muted\"],[7],[0,\"No types assigned!\"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n\"],[4,\"with\",[[20,[\"linkedRecord\",\"json\",\"metadata\",\"metadataInfo\",\"metadataIdentifier\"]]],null,{\"statements\":[[0,\"          \"],[6,\"dl\"],[9,\"class\",\"dl-horizontal col-lg-12\"],[7],[0,\"\\n\"],[4,\"control/md-definition\",null,[[\"title\"],[\"Metadata Identifier\"]],{\"statements\":[[0,\"                \"],[1,[19,1,[\"identifier\"]],false],[0,\" \"],[1,[25,\"if\",[[19,1,[\"namespace\"]],[25,\"concat\",[\"(\",[19,1,[\"namespace\"]],\")\"],null]],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"card card-inverse card-danger\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"card-block\"],[7],[0,\"\\n          \"],[6,\"h4\"],[9,\"class\",\"card-title\"],[7],[1,[25,\"fa-icon\",[\"exclamation-triangle\"],null],false],[0,\" Linked record is missing!\"],[8],[0,\"\\n          \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"Cannot find the linked record with id \"],[6,\"em\"],[7],[1,[20,[\"model\",\"mdRecordId\"]],false],[8],[0,\".\"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[8],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"recordId\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"card-footer\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n        \"],[6,\"dl\"],[9,\"class\",\"dl-horizontal col-lg-12\"],[7],[0,\"\\n\"],[4,\"control/md-definition\",null,[[\"title\",\"titleClass\"],[\"Linked Association Type\",\"wrapped\"]],{\"statements\":[[0,\"            \"],[1,[25,\"input/md-codelist\",null,[[\"create\",\"tooltip\",\"icon\",\"disabled\",\"allowClear\",\"showValidations\",\"mdCodeName\",\"value\",\"placeholder\",\"profilePath\",\"data-spy\"],[true,true,false,false,true,true,\"associationType\",[20,[\"linkedAssociationType\"]],\"Choose Type of Association\",[25,\"concat\",[[20,[\"profilePath\"]],\".linkedAssociationType\"],null],false]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[11,5],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-associated/template.hbs" } });
});
define('mdeditor/pods/components/object/md-bbox/component', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    computed: {
      alias, readOnly
    }
  } = Ember;

  const Validations = (0, _emberCpValidations.buildValidations)({
    'north': [(0, _emberCpValidations.validator)('number', {
      allowNone: false,
      gte: -90,
      lte: 90
    })],
    'south': [(0, _emberCpValidations.validator)('number', {
      allowNone: false,
      gte: -90,
      lte: 90
    }), (0, _emberCpValidations.validator)('number', {
      lte: readOnly('model.north')
    })],
    'east': [(0, _emberCpValidations.validator)('number', {
      allowNone: false,
      gte: -180,
      lte: 180
    })],
    'west': [(0, _emberCpValidations.validator)('number', {
      allowNone: false,
      gte: -180,
      lte: 180
    }), (0, _emberCpValidations.validator)('number', {
      lte: readOnly('model.east')
    })]
  });

  exports.default = Component.extend(Validations, {
    classNames: ['form'],

    north: alias('model.northLatitude'),
    south: alias('model.southLatitude'),
    east: alias('model.eastLongitude'),
    west: alias('model.westLongitude')

    // btnText: computed('isTruelyValid', function() {
    //   let text = this.get('validations.isTruelyValid') ? ''
    //   this.set('btnText', )
    // }),
  });
});
define("mdeditor/pods/components/object/md-bbox/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uX8Jqief", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"layout/md-card\",null,[[\"collapsible\",\"collapsed\",\"profilePath\",\"data-spy\",\"shadow\"],[false,false,[20,[\"profilePath\"]],false,false]],{\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-lg-6\"],[7],[0,\"\\n    \"],[1,[25,\"input/md-input\",null,[[\"type\",\"step\",\"model\",\"valuePath\",\"label\",\"placeholder\",\"profilePath\",\"showValidations\"],[\"number\",\"0.0001\",[19,0,[]],\"north\",\"North\",\"Enter north latitude.\",[25,\"concat\",[[20,[\"profilePath\"]],\".north\"],null],true]]],false],[0,\"\\n    \"],[1,[25,\"input/md-input\",null,[[\"type\",\"step\",\"model\",\"valuePath\",\"label\",\"placeholder\",\"profilePath\",\"showValidations\"],[\"number\",\"0.0001\",[19,0,[]],\"east\",\"East\",\"Enter east longitude.\",[25,\"concat\",[[20,[\"profilePath\"]],\".east\"],null],true]]],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-lg-6\"],[7],[0,\"\\n\\n    \"],[1,[25,\"input/md-input\",null,[[\"type\",\"step\",\"model\",\"valuePath\",\"label\",\"placeholder\",\"profilePath\",\"showValidations\"],[\"number\",\"0.0001\",[19,0,[]],\"south\",\"South\",\"Enter south latitude.\",[25,\"concat\",[[20,[\"profilePath\"]],\".south\"],null],true]]],false],[0,\"\\n    \"],[1,[25,\"input/md-input\",null,[[\"type\",\"step\",\"model\",\"valuePath\",\"label\",\"placeholder\",\"profilePath\",\"showValidations\"],[\"number\",\"0.0001\",[19,0,[]],\"west\",\"West\",\"Enter west latitude.\",[25,\"concat\",[[20,[\"profilePath\"]],\".west\"],null],true]]],false],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[11,1],[0,\"\\n\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-bbox/template.hbs" } });
});
define('mdeditor/pods/components/object/md-citation-array/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    A,
    Component
  } = Ember;

  exports.default = Component.extend({

    init() {
      this._super(...arguments);

      if (!this.get('model')) {
        this.set('model', A());
      }
    },

    /**
     * mdEditor class for input and edit of mdJSON 'citation' object
     * arrays.
     * The class manages the maintenance of an array of citation
     * objects using the md-object-table class.
     *
     * @module mdeditor
     * @submodule components-object
     * @class md-citation-array
     * @constructor
     */

    attributeBindings: ['data-spy'],

    /**
     * mdJSON object containing the 'citation' array.
     *
     * @property model
     * @type Object
     * @required
     */

    /**
     * List of mdJSON 'citation' object attributes to display in
     * md-object-table to aid in choosing the citation to edit or
     * delete.
     * The property is passed to md-object-table for configuration.
     *
     * @property attributes
     * @type String
     * @default 'title'
     */
    attributes: 'title',

    /**
     * Name to place on the mdEditor panel header for entry and edit of
     * 'citation' objects.
     * The property is passed to md-object-table for configuration.
     *
     * @property label
     * @type String
     * @default 'Citation'
     */
    label: 'Citation',

    /**
     * See [md-array-table](md-array-table.html#property_templateClass).
     *
     * @property templateClass
     * @type Ember.Object
     */
    templateClass: Ember.Object.extend({
      init() {
        this._super(...arguments);
        //this.set('authority', {});
      }
    })
  });
});
define("mdeditor/pods/components/object/md-citation-array/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "h4Nw66VT", "block": "{\"symbols\":[\"&default\"],\"statements\":[[1,[25,\"object/md-objectroute-table\",null,[[\"items\",\"header\",\"buttonText\",\"ellipsis\",\"templateClass\",\"editItem\",\"attributes\"],[[20,[\"model\"]],[20,[\"label\"]],\"Add Citation\",[20,[\"ellipsis\"]],[20,[\"templateClass\"]],[20,[\"editItem\"]],[20,[\"attributes\"]]]]],false],[0,\"\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-citation-array/template.hbs" } });
});
define('mdeditor/pods/components/object/md-citation/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    set,
    get,
    getWithDefault,
    run: {
      once
    }
  } = Ember;

  const formatCitation = function formatCitation(model) {
    set(model, 'responsibleParty', getWithDefault(model, 'responsibleParty', []));
    set(model, 'date', getWithDefault(model, 'date', []));
    set(model, 'alternateTitle', getWithDefault(model, 'alternateTitle', []));
    set(model, 'presentationForm', getWithDefault(model, 'presentationForm', []));
    set(model, 'onlineResource', getWithDefault(model, 'onlineResource', []));
    set(model, 'identifier', getWithDefault(model, 'identifier', []));
    set(model, 'otherCitationDetails', getWithDefault(model, 'otherCitationDetails', []));
    set(model, 'graphic', getWithDefault(model, 'graphic', []));
    set(model, 'series', getWithDefault(model, 'series', {}));

    return model;
  };

  const theComp = Component.extend({
    didReceiveAttrs() {
      this._super(...arguments);

      let model = get(this, 'model');

      once(this, function () {
        formatCitation(model);
      });
    },
    tagName: 'form',

    /**
     * The string representing the path in the profile object for the citation.
     *
     * @property profilePath
     * @type {String}
     * @default "false"
     * @required
     */

    /**
     * The object to use as the data model for the citation.
     *
     * @property model
     * @type {Object}
     * @required
     */

    /**
     * Indicates whether the citation is embedded and should prevent recursion.
     *
     * @property embedded
     * @type {Boolean}
     * @default "false"
     */
    embedded: false,

    /**
     * Indicates whether the citation identifier Component should be rendered using
     * the inline form: md-identifier-object-table.
     *
     * @property simpleIdentifier
     * @type {Boolean}
     * @default "false"
     */
    simpleIdentifier: false
  });

  exports.formatCitation = formatCitation;
  exports.default = theComp;
});
define('mdeditor/pods/components/object/md-citation/preview/body/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define("mdeditor/pods/components/object/md-citation/preview/body/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "R6u37gIG", "block": "{\"symbols\":[\"party\",\"contact\",\"index\",\"id\",\"date\",\"title\",\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"dl\"],[9,\"class\",\"dl-horizontal col-lg-12\"],[7],[0,\"\\n      \"],[1,[25,\"control/md-definition\",null,[[\"title\",\"text\"],[\"Title\",[20,[\"citation\",\"title\"]]]]],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"dl\"],[9,\"class\",\"dl-horizontal col-lg-12\"],[7],[0,\"\\n\"],[4,\"control/md-definition\",null,[[\"title\"],[\"Alternate Titles\"]],{\"statements\":[[4,\"each\",[[20,[\"citation\",\"alternateTitle\"]]],null,{\"statements\":[[0,\"              \"],[1,[19,6,[]],false],[0,\"\\n              \"],[6,\"br\"],[7],[8],[0,\"\\n\"]],\"parameters\":[6]},{\"statements\":[[0,\"              \"],[6,\"em\"],[9,\"class\",\"text-muted\"],[7],[0,\"No alternate titles assigned.\"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"clearfix\"],[7],[8],[0,\"\\n  \"],[6,\"dl\"],[9,\"class\",\"dl-horizontal col-lg-12\"],[7],[0,\"\\n\"],[4,\"control/md-definition\",null,[[\"title\"],[\"Dates\"]],{\"statements\":[[4,\"each\",[[20,[\"citation\",\"date\"]]],null,{\"statements\":[[0,\"              \"],[1,[25,\"format-date\",[[19,5,[\"date\"]]],[[\"format\"],[\"MMMM Do YYYY\"]]],false],[0,\"\\n              (\"],[1,[19,5,[\"dateType\"]],false],[0,\")\\n              \"],[6,\"br\"],[7],[8],[0,\"\\n\"]],\"parameters\":[5]},{\"statements\":[[0,\"              \"],[6,\"em\"],[9,\"class\",\"text-muted\"],[7],[0,\"No dates assigned.\"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"  \"],[8],[0,\"\\n  \"],[6,\"dl\"],[9,\"class\",\"dl-horizontal col-lg-12\"],[7],[0,\"\\n\"],[4,\"control/md-definition\",null,[[\"title\"],[\"Identifier\"]],{\"statements\":[[4,\"each\",[[20,[\"citation\",\"identifier\"]]],null,{\"statements\":[[0,\"              \"],[1,[19,4,[\"identifier\"]],false],[0,\" \"],[1,[25,\"if\",[[19,4,[\"namespace\"]],[25,\"concat\",[\"(\",[19,4,[\"namespace\"]],\")\"],null]],null],false],[0,\"\\n              \"],[6,\"br\"],[7],[8],[0,\"\\n\"]],\"parameters\":[4]},{\"statements\":[[0,\"              \"],[6,\"em\"],[9,\"class\",\"text-muted\"],[7],[0,\"No identifiers assigned.\"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"clearfix\"],[7],[8],[0,\"\\n  \"],[6,\"dl\"],[9,\"class\",\"dl-horizontal col-lg-12\"],[7],[0,\"\\n\"],[4,\"control/md-definition\",null,[[\"title\"],[\"Responsible Party\"]],{\"statements\":[[4,\"each\",[[20,[\"citation\",\"responsibleParty\"]]],null,{\"statements\":[[0,\"              \"],[1,[25,\"if\",[[19,1,[\"role\"]],[19,1,[\"role\"]],\"<em>No Roles assigned.</em>\"],null],true],[0,\"\\n              (\\n\"],[4,\"each\",[[19,1,[\"party\"]]],null,{\"statements\":[[0,\"                  \"],[1,[25,\"if\",[[19,3,[]],\", \"],null],false],[0,\" \"],[1,[25,\"control/md-contact-link\",null,[[\"contactId\"],[[19,2,[\"contactId\"]]]]],false],[0,\"\\n\"]],\"parameters\":[2,3]},{\"statements\":[[0,\"                  \"],[6,\"em\"],[9,\"class\",\"text-muted\"],[7],[0,\"No Contacts assigned.\"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"              )\\n              \"],[6,\"br\"],[7],[8],[0,\"\\n\"]],\"parameters\":[1]},{\"statements\":[[0,\"              \"],[6,\"em\"],[9,\"class\",\"text-muted\"],[7],[0,\"No responsibility assigned.\"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"  \"],[8],[0,\"\\n  \"],[11,7],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-citation/preview/body/template.hbs" } });
});
define("mdeditor/pods/components/object/md-citation/preview/component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    /**
     * Title for the card
     *
     * @property title
     * @type {String}
     * @default "Citation"
     * @required
     */
    title: "Citation",

    /**
     * Indicates if object is required.
     *
     * @property required
     * @type {Boolean}
     * @default "false"
     */
    required: false,

    /**
     * Indicates if object text is muted.
     *
     * @property muted
     * @type {Boolean}
     * @default "true"
     */
    muted: true
  });
});
define("mdeditor/pods/components/object/md-citation/preview/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "h6ezcqAF", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"layout/md-card\",null,[[\"title\",\"collapsible\",\"collapsed\",\"profilePath\",\"required\",\"muted\",\"btnText\",\"btnClass\",\"btnAction\",\"btnIcon\"],[[20,[\"title\"]],true,false,[20,[\"profilePath\"]],[20,[\"required\"]],[20,[\"muted\"]],\"Edit\",\"success\",[25,\"route-action\",[[20,[\"editCitation\"]],[25,\"dasherize\",[[20,[\"title\"]]],null]],null],\"pencil\"]],{\"statements\":[[0,\"\\n\"],[1,[25,\"object/md-citation/preview/body\",null,[[\"citation\"],[[20,[\"citation\"]]]]],false],[0,\"\\n\\n\"],[11,1],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"card-footer\"],[7],[0,\"\\n  \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"name\",\"button\"],[9,\"class\",\"btn btn-success pull-right\"],[3,\"action\",[[19,0,[]],[25,\"route-action\",[[20,[\"editCitation\"]],[25,\"dasherize\",[[20,[\"title\"]]],null]],null]]],[7],[0,\"\\n    \"],[1,[25,\"fa-icon\",[\"pencil\"],null],false],[0,\" Edit Citation\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-citation/preview/template.hbs" } });
});
define("mdeditor/pods/components/object/md-citation/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VRku/yLi", "block": "{\"symbols\":[\"val\",\"alt\",\"&default\"],\"statements\":[[4,\"layout/md-card\",null,[[\"title\",\"collapsible\",\"collapsed\",\"profilePath\",\"data-spy\",\"class\",\"shadow\",\"required\"],[\"Basic Information\",true,false,[25,\"concat\",[[20,[\"profilePath\"]],\".basicInformation\"],null],\"Basic Information\",[25,\"if\",[[20,[\"embedded\"]],\"md-embedded\"],null],[25,\"if\",[[20,[\"embedded\"]],false,true],null],true]],{\"statements\":[[0,\"\\n\"],[0,\"\\n  \"],[1,[25,\"input/md-input\",null,[[\"value\",\"placeholder\",\"label\",\"required\",\"profilePath\",\"data-spy\",\"class\"],[[20,[\"model\",\"title\"]],\"Enter the title for the resource.\",\"Title\",true,[25,\"concat\",[[20,[\"profilePath\"]],\".title\"],null],\"Title\",\"md-embedded\"]]],false],[0,\"\\n\\n\"],[4,\"layout/md-card\",null,[[\"shadow\",\"profilePath\"],[false,[25,\"concat\",[[20,[\"profilePath\"]],\".alternateTitle\"],null]]],{\"statements\":[[4,\"object/md-simple-array-table\",null,[[\"data-spy\",\"title\",\"plain\",\"value\"],[false,\"Alternate Title\",true,[20,[\"model\",\"alternateTitle\"]]]],{\"statements\":[[0,\"        \"],[6,\"td\"],[7],[0,\"\\n            \"],[1,[25,\"input/md-input\",null,[[\"value\",\"placeholder\"],[[19,2,[\"item\",\"value\"]],\"Additional titles for the resource.\"]]],false],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"shadow\",\"profilePath\",\"data-spy\",\"class\"],[false,[25,\"concat\",[[20,[\"profilePath\"]],\".date\"],null],\"Dates\",\"md-embedded\"]],{\"statements\":[[0,\"    \"],[1,[25,\"object/md-date-array\",null,[[\"value\",\"plain\",\"data-spy\"],[[20,[\"model\",\"date\"]],true,false]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\\n\"],[4,\"unless\",[[20,[\"embedded\"]]],null,{\"statements\":[[0,\"    \"],[1,[25,\"input/md-input\",null,[[\"value\",\"placeholder\",\"label\",\"profilePath\"],[[20,[\"model\",\"edition\"]],\"Enter the edition.\",\"Edition\",[25,\"concat\",[[20,[\"profilePath\"]],\".edition\"],null]]]],false],[0,\"\\n\\n    \"],[1,[25,\"input/md-codelist-multi\",null,[[\"value\",\"label\",\"create\",\"tooltip\",\"icon\",\"mdCodeName\",\"closeOnSelect\",\"placeholder\",\"profilePath\"],[[20,[\"model\",\"presentationForm\"]],\"Presentation Form\",true,true,false,\"presentationForm\",false,\"Select or enter one or more forms.\",[25,\"concat\",[[20,[\"profilePath\"]],\".presentationForm\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[1,[25,\"object/md-party-array\",null,[[\"title\",\"data-spy\",\"class\",\"collapsible\",\"collapsed\",\"required\",\"value\",\"profilePath\"],[\"Responsible Party\",\"Responsible Parties\",[25,\"if\",[[20,[\"embedded\"]],\"md-embedded\"],null],true,false,false,[20,[\"model\",\"responsibleParty\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".responsibleParty\"],null]]]],false],[0,\"\\n\\n\"],[1,[25,\"object/md-online-resource-array\",null,[[\"model\",\"profilePath\",\"class\",\"data-spy\"],[[20,[\"model\",\"onlineResource\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".onlineResource\"],null],[25,\"if\",[[20,[\"embedded\"]],\"md-embedded\"],null],\"Online Resource\"]]],false],[0,\"\\n\\n\\n\"],[1,[25,\"object/md-identifier-array\",null,[[\"model\",\"profilePath\",\"data-spy\",\"editItem\",\"class\",\"visibility\"],[[20,[\"model\",\"identifier\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".identifier\"],null],\"Identifier\",[20,[\"editIdentifier\"]],[25,\"if\",[[20,[\"embedded\"]],\"md-embedded\"],null],[25,\"if\",[[20,[\"simpleIdentifier\"]],false,true],null]]]],false],[0,\"\\n\\n\"],[1,[25,\"object/md-identifier-object-table\",null,[[\"model\",\"profilePath\",\"data-spy\",\"visibility\",\"short\",\"class\"],[[20,[\"model\",\"identifier\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".identifierSimple\"],null],\"Identifier\",[25,\"if\",[[20,[\"simpleIdentifier\"]],true,false],null],[20,[\"shortIdentifier\"]],[25,\"if\",[[20,[\"embedded\"]],\"md-embedded\"],null]]]],false],[0,\"\\n\\n\"],[1,[25,\"object/md-identifier-object-table\",null,[[\"model\",\"profilePath\",\"data-spy\",\"visibility\",\"short\",\"class\"],[[20,[\"model\",\"identifier\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".identifierShort\"],null],\"Identifier\",false,true,[25,\"if\",[[20,[\"embedded\"]],\"md-embedded\"],null]]]],false],[0,\"\\n\\n\"],[4,\"unless\",[[20,[\"embedded\"]]],null,{\"statements\":[[4,\"layout/md-card\",null,[[\"collapsible\",\"title\",\"profilePath\",\"data-spy\"],[true,\"Series\",[25,\"concat\",[[20,[\"profilePath\"]],\".series\"],null],\"Series\"]],{\"statements\":[[0,\"    \"],[1,[25,\"input/md-input\",null,[[\"value\",\"placeholder\",\"label\",\"profilePath\"],[[20,[\"model\",\"series\",\"seriesName\"]],\"Enter the name for the series.\",\"Name\",[25,\"concat\",[[20,[\"profilePath\"]],\".series.name\"],null]]]],false],[0,\"\\n\\n    \"],[1,[25,\"input/md-input\",null,[[\"value\",\"placeholder\",\"label\",\"profilePath\"],[[20,[\"model\",\"series\",\"seriesIssue\"]],\"Enter the issue for the series.\",\"Issue\",[25,\"concat\",[[20,[\"profilePath\"]],\".series.issue\"],null]]]],false],[0,\"\\n\\n    \"],[1,[25,\"input/md-input\",null,[[\"value\",\"placeholder\",\"label\",\"profilePath\"],[[20,[\"model\",\"series\",\"issuePage\"]],\"Enter the page(s) for the issue.\",\"Page\",[25,\"concat\",[[20,[\"profilePath\"]],\".series.page\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"object/md-simple-array-table\",null,[[\"title\",\"required\",\"plain\",\"profilePath\",\"value\"],[\"Other Details\",false,false,[25,\"concat\",[[20,[\"profilePath\"]],\".otherCitationDetails\"],null],[20,[\"model\",\"otherCitationDetails\"]]]],{\"statements\":[[0,\"    \"],[6,\"td\"],[7],[0,\"\\n        \"],[1,[25,\"input/md-textarea\",null,[[\"value\",\"placeholder\"],[[19,1,[\"item\",\"value\"]],\"Enter additional detail about the citation.\"]]],false],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n  \"],[1,[25,\"object/md-graphic-array\",null,[[\"model\",\"data-spy\",\"button-text\",\"label\",\"profilePath\"],[[20,[\"model\",\"graphic\"]],\"Graphic\",\"Add Graphic\",\"Graphic\",[25,\"concat\",[[20,[\"profilePath\"]],\".graphicOverview\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[11,3],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-citation/template.hbs" } });
});
define('mdeditor/pods/components/object/md-constraint/component', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    computed: {
      alias,
      equal //,
      //not
    },
    get,
    run: {
      once
    },
    getWithDefault,
    set
  } = Ember;

  const Validations = (0, _emberCpValidations.buildValidations)({
    'classification': [(0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true
    })],
    'type': [(0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true
    })]
  });

  exports.default = Component.extend(Validations, {
    didReceiveAttrs() {
      this._super(...arguments);

      let model = get(this, 'model');

      once(this, function () {
        set(model, 'useLimitation', getWithDefault(model, 'useLimitation', []));
        set(model, 'graphic', getWithDefault(model, 'graphic', []));
        set(model, 'responsibleParty', getWithDefault(model, 'responsibleParty', []));
        set(model, 'legal', getWithDefault(model, 'legal', {
          accessConstraint: [],
          useConstraint: [],
          otherConstraint: []
        }));
        set(model, 'security', getWithDefault(model, 'security', {}));
      });
    },
    /**
     * The string representing the path in the profile object for the resource.
     *
     * @property profilePath
     * @type {String}
     * @default 'false'
     * @required
     */

    /**
     * The object to use as the data model for the resource.
     *
     * @property model
     * @type {Object}
     * @required
     */

    tagName: 'form',

    type: alias('model.type'),
    useRequired: equal('type', 'use'),
    securityRequired: equal('type', 'security'),
    legalRequired: equal('type', 'legal'),
    classification: alias('model.security.classification'),
    // measureUnit: alias('model.measure.unitOfMeasure'),
    // measurePresent: or('measureType','measureUnit','measureValue'),

    typeOptions: [{
      name: 'use',
      value: 'use'
    }, {
      name: 'legal',
      value: 'legal'
    }, {
      name: 'security',
      value: 'security'
    }]
  });
});
define("mdeditor/pods/components/object/md-constraint/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qA9flh6U", "block": "{\"symbols\":[\"val\",\"val\",\"&default\"],\"statements\":[[1,[25,\"input/md-select\",null,[[\"label\",\"showValidations\",\"model\",\"path\",\"valuePath\",\"namePath\",\"objectArray\",\"tooltip\",\"tooltipPath\",\"searchEnabled\",\"placeholder\",\"profilePath\"],[\"Constraint Type\",true,[19,0,[]],\"type\",\"value\",\"name\",[20,[\"typeOptions\"]],true,\"tip\",false,\"The type of constraint.\",[25,\"concat\",[[20,[\"profilePath\"]],\".type\"],null]]]],false],[0,\"\\n\\n\"],[4,\"object/md-simple-array-table\",null,[[\"title\",\"data-spy\",\"plain\",\"required\",\"profilePath\",\"value\"],[\"Use Limitations\",false,false,[20,[\"useRequired\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".useLimitation\"],null],[20,[\"model\",\"useLimitation\"]]]],{\"statements\":[[0,\"  \"],[6,\"td\"],[7],[0,\"\\n    \"],[1,[25,\"input/md-textarea\",null,[[\"value\",\"placeholder\"],[[19,2,[\"item\",\"value\"]],\"Describe Limitation affecting the fitness for use of the resource or metadata. For example, \\\"not to be used for navigation\\\".\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"title\",\"collapsible\",\"required\",\"profilePath\",\"data-spy\",\"shadow\"],[\"Legal\",true,[20,[\"legalRequired\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".legal\"],null],false,true]],{\"statements\":[[0,\"\\n\"],[0,\"\\n  \"],[1,[25,\"input/md-codelist-multi\",null,[[\"value\",\"label\",\"create\",\"tooltip\",\"icon\",\"mdCodeName\",\"closeOnSelect\",\"profilePath\",\"placeholder\"],[[20,[\"model\",\"legal\",\"accessConstraint\"]],\"Access Constraints\",false,true,false,\"restriction\",false,[25,\"concat\",[[20,[\"profilePath\"]],\".legal.accessConstraint\"],null],\"Access constraints applied to assure the protection of privacy or intellectual property, and any special restrictions or limitations on obtaining the resource.\"]]],false],[0,\"\\n\\n  \"],[1,[25,\"input/md-codelist-multi\",null,[[\"value\",\"label\",\"create\",\"tooltip\",\"icon\",\"mdCodeName\",\"closeOnSelect\",\"profilePath\",\"placeholder\"],[[20,[\"model\",\"legal\",\"useConstraint\"]],\"Use Constraints\",false,true,false,\"restriction\",false,[25,\"concat\",[[20,[\"profilePath\"]],\".legal.useConstraint\"],null],\"Constraints applied to assure the protection of privacy or intellectual property, and any special restrictions or limitations or warnings on using the resource.\"]]],false],[0,\"\\n\"],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"shadow\"],[false]],{\"statements\":[[4,\"object/md-simple-array-table\",null,[[\"title\",\"data-spy\",\"plain\",\"profilePath\",\"value\"],[\"Other Constraint\",false,true,[25,\"concat\",[[20,[\"profilePath\"]],\".legal.otherConstraint\"],null],[20,[\"model\",\"legal\",\"otherConstraint\"]]]],{\"statements\":[[0,\"      \"],[6,\"td\"],[7],[0,\"\\n        \"],[1,[25,\"input/md-textarea\",null,[[\"value\",\"rows\",\"placeholder\"],[[19,1,[\"item\",\"value\"]],3,\"Other restrictions and legal prerequisites for accessing and using the resource.\"]]],false],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"title\",\"collapsible\",\"required\",\"profilePath\",\"data-spy\",\"shadow\"],[\"Security\",true,[20,[\"securityRequired\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".security\"],null],false,true]],{\"statements\":[[0,\"  \"],[1,[25,\"input/md-codelist\",null,[[\"label\",\"mdCodeName\",\"showValidations\",\"model\",\"path\",\"placeholder\",\"profilePath\"],[\"Classification\",\"classification\",true,[19,0,[]],\"classification\",\"Name of the handling restrictions on the resource or metadata.\",[25,\"concat\",[[20,[\"profilePath\"]],\".security.classification\"],null]]]],false],[0,\"\\n  \"],[1,[25,\"input/md-input\",null,[[\"value\",\"label\",\"placeholder\",\"profilePath\"],[[20,[\"model\",\"security\",\"classificationSystem\"]],\"Classification System Name\",\"Enter name of the classification system.\",[25,\"concat\",[[20,[\"profilePath\"]],\".security.classificationSystem\"],null]]]],false],[0,\"\\n  \"],[1,[25,\"input/md-textarea\",null,[[\"value\",\"placeholder\",\"label\",\"profilePath\"],[[20,[\"model\",\"security\",\"userNote\"]],\"Explanation of the application of the legal constraints or other restrictions and legal prerequisites for obtaining and using the resource.\",\"Note\",[25,\"concat\",[[20,[\"profilePath\"]],\".security.note\"],null]]]],false],[0,\"\\n  \"],[1,[25,\"input/md-textarea\",null,[[\"value\",\"placeholder\",\"label\",\"profilePath\"],[[20,[\"model\",\"security\",\"handlingDescription\"]],\"Enter additional information about the restrictions on handling the resource.\",\"Handling Description\",[25,\"concat\",[[20,[\"profilePath\"]],\".security.handlingDescription\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[1,[25,\"object/md-party-array\",null,[[\"title\",\"value\",\"profilePath\"],[\"Responsible Party\",[20,[\"model\",\"responsibleParty\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".responsibleParty\"],null]]]],false],[0,\"\\n\\n\"],[1,[25,\"object/md-graphic-array\",null,[[\"model\",\"button-text\",\"label\",\"profilePath\"],[[20,[\"model\",\"graphic\"]],\"Add Graphic\",\"Graphic or Logo\",[25,\"concat\",[[20,[\"profilePath\"]],\".graphic\"],null]]]],false],[0,\"\\n\\n\"],[11,3],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-constraint/template.hbs" } });
});
define('mdeditor/pods/components/object/md-date-array/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    Object: EmObject,
    get,
    set,
    isNone
  } = Ember;

  exports.default = Component.extend({
    init() {
      this._super(...arguments);

      if (isNone(get(this, 'model'))) {
        set(this, 'model', []);
      }
    },

    /**
     * See [md-array-table](md-array-table.html#property_templateClass).
     *
     * @property templateClass
     * @type Ember.Object
     */
    templateClass: EmObject.extend({
      init() {
        this._super(...arguments);
        this.setProperties({
          date: null,
          dateType: null
        });
      }
    })
  });
});
define("mdeditor/pods/components/object/md-date-array/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "T8bzO4NE", "block": "{\"symbols\":[\"date\",\"&default\"],\"statements\":[[4,\"object/md-array-table\",null,[[\"columns\",\"required\",\"title\",\"value\",\"plain\",\"validation\",\"data-spy\",\"templateClass\"],[\"Date,Date Type,Description\",[20,[\"required\"]],\"Date\",[20,[\"value\"]],[20,[\"plain\"]],[20,[\"validation\"]],[20,[\"data-spy\"]],[20,[\"templateClass\"]]]],{\"statements\":[[0,\"  \"],[1,[25,\"object/md-date\",null,[[\"model\"],[[19,1,[\"item\"]]]]],false],[0,\"\\n  \"],[11,2],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-date-array/template.hbs" } });
});
define('mdeditor/pods/components/object/md-date/component', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    computed,
    Component
  } = Ember;

  const Validations = (0, _emberCpValidations.buildValidations)({
    date: (0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true
    }),
    dateType: (0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true
    })
  });

  exports.default = Component.extend(Validations, {
    init() {
      this._super(...arguments);

      // if(isNone(get(this, 'model'))) {
      //   set(this, 'model', {});
      // }
    },

    tagName: '',
    date: computed.alias('model.date'),
    dateType: computed.alias('model.dateType')

  });
});
define("mdeditor/pods/components/object/md-date/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hdTq5jKx", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"td\"],[7],[0,\"\\n    \"],[1,[25,\"input/md-datetime\",null,[[\"valuePath\",\"model\",\"showValidations\",\"required\",\"forceDateOutput\"],[\"date\",[19,0,[]],true,true,true]]],false],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"td\"],[7],[0,\"\\n  \"],[1,[25,\"input/md-codelist\",null,[[\"create\",\"required\",\"tooltip\",\"icon\",\"disabled\",\"allowClear\",\"showValidations\",\"mdCodeName\",\"path\",\"model\",\"placeholder\"],[true,true,true,false,[20,[\"disabled\"]],true,true,\"dateType\",\"dateType\",[19,0,[]],\"Choose date type\"]]],false],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"td\"],[7],[0,\"\\n    \"],[1,[25,\"input/md-input\",null,[[\"value\",\"placeholder\"],[[20,[\"model\",\"description\"]],\"Describe the date.\"]]],false],[0,\"\\n\"],[8],[0,\"\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-date/template.hbs" } });
});
define('mdeditor/pods/components/object/md-distribution/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    get,
    run: {
      once
    },
    getWithDefault,
    set,
    NativeArray
  } = Ember;

  exports.default = Component.extend({
    didReceiveAttrs() {
      this._super(...arguments);

      let model = get(this, 'model.json.metadata');

      once(this, function () {
        set(model, 'resourceDistribution', NativeArray.apply(getWithDefault(model, 'resourceDistribution', [])));
      });
    },
    /**
     * The string representing the path in the profile object for the resource.
     *
     * @property profilePath
     * @type {String}
     * @default 'false'
     * @required
     */

    /**
     * The object to use as the data model for the resource.
     *
     * @property model
     * @type {Object}
     * @required
     */

    attributeBindings: ['data-spy'],
    tagName: 'section'
  });
});
define("mdeditor/pods/components/object/md-distribution/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "MGsbGAXa", "block": "{\"symbols\":[\"dist\",\"index\",\"dist\",\"party\",\"contact\",\"index\"],\"statements\":[[4,\"each\",[[20,[\"model\",\"json\",\"metadata\",\"resourceDistribution\"]]],null,{\"statements\":[[4,\"layout/md-card\",null,[[\"title\",\"collapsible\",\"collapsed\",\"profilePath\",\"data-spy\",\"shadow\",\"spotlightEnabled\"],[[25,\"concat\",[\"Distribution Section #\",[19,2,[]]],null],true,false,[20,[\"profilePath\"]],[25,\"concat\",[\"Distribution #\",[19,2,[]]],null],true,false]],{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"card-buttons\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-sm-6\"],[7],[0,\"\\n            \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-md btn-success btn-block md-btn-responsive\"],[3,\"action\",[[19,0,[]],[25,\"route-action\",[\"editDistribution\",[19,2,[]]],null]]],[7],[0,\"\\n              \"],[1,[25,\"fa-icon\",[\"pencil\"],null],false],[0,\" Edit Distributors\"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-sm-6\"],[7],[0,\"\\n            \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-md btn-danger btn-block md-btn-responsive\"],[3,\"action\",[[19,0,[]],[25,\"route-action\",[\"deleteDistribution\",[19,2,[]]],null]]],[7],[0,\"\\n                \"],[1,[25,\"fa-icon\",[\"times\"],null],false],[0,\" Delete Section\"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-sm-6\"],[7],[0,\"\\n        \"],[6,\"label\"],[7],[0,\"Distributors\"],[8],[0,\"\\n\"],[4,\"if\",[[19,1,[\"distributor\",\"length\"]]],null,{\"statements\":[[4,\"each\",[[19,1,[\"distributor\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[7],[0,\"\\n\"],[4,\"with\",[[19,3,[\"contact\"]]],null,{\"statements\":[[0,\"              \"],[1,[25,\"if\",[[19,4,[\"role\"]],[19,4,[\"role\"]],\"<em>No Roles assigned.</em>\"],null],true],[0,\"\\n              (\\n\"],[4,\"each\",[[19,4,[\"party\"]]],null,{\"statements\":[[0,\"                  \"],[1,[25,\"if\",[[19,6,[]],\", \"],null],false],[0,\" \"],[1,[25,\"control/md-contact-link\",null,[[\"contactId\"],[[19,5,[\"contactId\"]]]]],false],[0,\"\\n\"]],\"parameters\":[5,6]},{\"statements\":[[0,\"                  \"],[6,\"em\"],[9,\"class\",\"text-muted\"],[7],[0,\"No Contacts assigned.\"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"              )\\n\"]],\"parameters\":[4]},{\"statements\":[[0,\"              \"],[6,\"em\"],[9,\"class\",\"text-muted\"],[7],[0,\"No responsibility assigned.\"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[8],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[6,\"div\"],[9,\"class\",\"alert alert-info\"],[7],[0,\"\\n            No Distributors to display.\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-sm-6\"],[7],[0,\"\\n        \"],[1,[25,\"input/md-textarea\",null,[[\"value\",\"rows\",\"maxHeight\",\"placeholder\",\"label\",\"profilePath\"],[[19,1,[\"description\"]],5,300,\"Describe the distribution of the resource\",\"Description\",[25,\"concat\",[[20,[\"profilePath\"]],\".description\"],null]]]],false],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1,2]},{\"statements\":[[0,\"  \"],[6,\"h3\"],[9,\"class\",\"alert alert-info\"],[7],[0,\"No distribution sections found.\\n    \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-success\"],[3,\"action\",[[19,0,[]],[25,\"route-action\",[\"addDistribution\"],null]]],[7],[0,\"\\n      \"],[1,[25,\"fa-icon\",[\"plus\"],null],false],[0,\" Add Distribution Section\"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-distribution/template.hbs" } });
});
define('mdeditor/pods/components/object/md-distributor/component', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    computed,
    set,
    get,
    getWithDefault,
    run: {
      once
    },
    NativeArray
  } = Ember;

  const Validations = (0, _emberCpValidations.buildValidations)({
    'role': [(0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true
    })],
    'contacts': (0, _emberCpValidations.validator)('length', {
      min: 1,
      message: 'At least one contact is required.'
    })
  });

  exports.default = Component.extend(Validations, {
    didReceiveAttrs() {
      this._super(...arguments);

      let model = get(this, 'model');

      once(this, function () {
        set(model, 'contact', getWithDefault(model, 'contact', {
          role: null,
          party: []
        }));
        set(model, 'orderProcess', NativeArray.apply(getWithDefault(model, 'orderProcess', [{}])));
        set(model, 'transferOption', NativeArray.apply(getWithDefault(model, 'transferOption', [{}])));
      });
    },

    tagName: 'form',

    /**
     * The string representing the path in the profile object for the resource.
     *
     * @property profilePath
     * @type {String}
     * @default "false"
     * @required
     */

    /**
     * The object to use as the data model for the resource.
     *
     * @property model
     * @type {Object}
     * @required
     */

    role: computed.alias('model.contact.role'),
    contacts: computed('model.contact.party', {
      get() {
        let party = get(this, 'model.contact.party');
        return party ? party.mapBy('contactId') : null;
      },
      set(key, value) {
        let map = value.map(itm => {
          return {
            contactId: itm
          };
        });
        set(this, 'model.contact.party', map);
        return value;
      }
    })
  });
});
define('mdeditor/pods/components/object/md-distributor/preview/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define("mdeditor/pods/components/object/md-distributor/preview/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "2Xf20aMw", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-distributor/preview/template.hbs" } });
});
define("mdeditor/pods/components/object/md-distributor/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5okLldtl", "block": "{\"symbols\":[\"order\",\"opt\",\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"model\",\"contact\"]]],null,{\"statements\":[[0,\"    \"],[1,[25,\"input/md-select-contacts\",null,[[\"label\",\"placeholder\",\"model\",\"path\",\"icon\",\"tooltip\",\"showValidations\",\"class\"],[\"Contacts\",\"Select one or more contacts\",[19,0,[]],\"contacts\",true,true,true,\"required\"]]],false],[0,\"\\n    \"],[1,[25,\"input/md-codelist\",null,[[\"label\",\"path\",\"model\",\"create\",\"tooltip\",\"icon\",\"disabled\",\"mdCodeName\",\"showValidations\",\"placeholder\"],[\"Role\",\"role\",[19,0,[]],true,true,false,[20,[\"disabled\"]],\"role\",true,\"Select or enter a role\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"with\",[[20,[\"model\",\"transferOption\",\"firstObject\"]]],null,{\"statements\":[[4,\"layout/md-card\",null,[[\"shadow\",\"muted\",\"title\",\"plain\",\"class\",\"data-spy\",\"collapsible\",\"collapsed\",\"bodyIsRow\"],[false,false,\"Transfer Options\",true,\"md-embedded\",false,true,false,false]],{\"statements\":[[0,\"      \"],[1,[25,\"object/md-transfer\",null,[[\"model\",\"profilePath\"],[[19,2,[]],[25,\"concat\",[[20,[\"profilePath\"]],\".transferOption\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[2]},null],[0,\"\\n\"],[4,\"with\",[[20,[\"model\",\"orderProcess\",\"firstObject\"]]],null,{\"statements\":[[4,\"layout/md-card\",null,[[\"shadow\",\"muted\",\"title\",\"plain\",\"class\",\"data-spy\",\"collapsible\",\"collapsed\",\"bodyIsRow\",\"profilePath\"],[false,false,\"Order Process\",true,\"md-embedded\",false,true,true,false,[25,\"concat\",[[20,[\"profilePath\"]],\".orderProcess\"],null]]],{\"statements\":[[0,\"      \"],[1,[25,\"input/md-textarea\",null,[[\"value\",\"placeholder\",\"label\",\"autoresize\",\"profilePath\"],[[19,1,[\"fees\"]],\"Describe the fees and terms for retrieving the resource, including monetary units.\",\"Fees\",false,[25,\"concat\",[[20,[\"profilePath\"]],\".orderProcess.fees\"],null]]]],false],[0,\"\\n      \"],[1,[25,\"input/md-datetime\",null,[[\"date\",\"placeholder\",\"label\",\"profilePath\"],[[19,1,[\"plannedAvailability\"]],\"Date when the resource will be avialable\",\"Planned Availability\",[25,\"concat\",[[20,[\"profilePath\"]],\".orderProcess.plannedAvailability\"],null]]]],false],[0,\"\\n      \"],[1,[25,\"input/md-textarea\",null,[[\"value\",\"maxheight\",\"placeholder\",\"label\",\"profilePath\"],[[19,1,[\"orderingInstructions\"]],100,\"Describe general instructions for obtaining the resource\",\"Ordering Instructions\",[25,\"concat\",[[20,[\"profilePath\"]],\".orderProcess.orderingInstructions\"],null]]]],false],[0,\"\\n      \"],[1,[25,\"input/md-textarea\",null,[[\"value\",\"autoresize\",\"placeholder\",\"label\",\"profilePath\"],[[19,1,[\"turnaround\"]],false,\"Describe the typical turnaround time for the filling of an order\",\"Turnaround\",[25,\"concat\",[[20,[\"profilePath\"]],\".orderProcess.turnaround\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[8],[0,\"\\n\"],[11,3],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-distributor/template.hbs" } });
});
define('mdeditor/pods/components/object/md-documentation/component', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    computed,
    set,
    get,
    getWithDefault,
    run: {
      once
    },
    NativeArray
  } = Ember;

  const Validations = (0, _emberCpValidations.buildValidations)({
    'resourceType': [(0, _emberCpValidations.validator)('array-required', {
      track: ['type']
    })]
  });

  exports.default = Component.extend(Validations, {
    didReceiveAttrs() {
      this._super(...arguments);

      let model = get(this, 'model');

      once(this, function () {
        set(model, 'resourceType', getWithDefault(model, 'resourceType', []));
        set(model, 'citation', NativeArray.apply(getWithDefault(model, 'citation', [{}])));
      });
    },

    tagName: 'form',

    /**
     * The string representing the path in the profile object for the resource.
     *
     * @property profilePath
     * @type {String}
     * @default "false"
     * @required
     */

    /**
     * The object to use as the data model for the resource.
     *
     * @property model
     * @type {Object}
     * @required
     */

    citation: computed.alias('model.citation'),
    resourceType: computed.alias('model.resourceType')
  });
});
define('mdeditor/pods/components/object/md-documentation/preview/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component
  } = Ember;

  exports.default = Component.extend({
    classNameBindings: ['muted:text-muted'],

    /**
     * Whether to render the text muted.
     *
     * @property muted
     * @type {Boolean}
     * @default "true"
     */
    muted: true
  });
});
define("mdeditor/pods/components/object/md-documentation/preview/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kENba+bo", "block": "{\"symbols\":[\"model\",\"type\"],\"statements\":[[4,\"with\",[[20,[\"item\"]]],null,{\"statements\":[[0,\"  \"],[6,\"dl\"],[9,\"class\",\"dl-horizontal\"],[7],[0,\"\\n    \"],[6,\"dt\"],[7],[0,\"\\n      \"],[6,\"h4\"],[9,\"class\",\"text-info\"],[7],[0,\"Document #\"],[1,[18,\"index\"],false],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"dd\"],[7],[8],[0,\"\\n\"],[4,\"control/md-definition\",null,[[\"title\"],[\"Resource Type(s)\"]],{\"statements\":[[4,\"each\",[[19,1,[\"resourceType\"]]],null,{\"statements\":[[0,\"            \"],[1,[19,2,[\"type\"]],false],[0,\":\\n\"],[4,\"if\",[[19,2,[\"name\"]]],null,{\"statements\":[[0,\"                \"],[1,[19,2,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[6,\"em\"],[7],[0,\"Not named\"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"            \"],[6,\"br\"],[7],[8],[0,\"\\n\"]],\"parameters\":[2]},{\"statements\":[[0,\"                \"],[6,\"em\"],[9,\"class\",\"text-muted\"],[7],[0,\"No types assigned!\"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"  \"],[8],[0,\"\\n\\n  \"],[1,[25,\"object/md-citation/preview/body\",null,[[\"citation\"],[[25,\"object-at\",[0,[19,1,[\"citation\"]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-documentation/preview/template.hbs" } });
});
define("mdeditor/pods/components/object/md-documentation/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "O9mOFWZH", "block": "{\"symbols\":[\"citation\",\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n    \"],[1,[25,\"object/md-resource-type-array\",null,[[\"plain\",\"value\",\"required\",\"data-spy\",\"profilePath\"],[false,[20,[\"model\",\"resourceType\"]],true,\"Resource Types\",[25,\"concat\",[[20,[\"profilePath\"]],\".resourceType\"],null]]]],false],[0,\"\\n\"],[8],[0,\"\\n\"],[4,\"with\",[[20,[\"model\",\"citation\",\"firstObject\"]]],null,{\"statements\":[[0,\"  \"],[1,[25,\"object/md-citation\",null,[[\"model\",\"profilePath\",\"simpleIdentifier\"],[[19,1,[]],[25,\"concat\",[[20,[\"profilePath\"]],\".citation\"],null],true]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[11,2],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-documentation/template.hbs" } });
});
define('mdeditor/pods/components/object/md-funding/component', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    computed,
    computed: {
      alias
    },
    get,
    run: {
      once
    },
    getWithDefault,
    set
  } = Ember;

  const Validations = (0, _emberCpValidations.buildValidations)({
    'allocation': [(0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true,
      disabled: computed.notEmpty('model.timePeriod')
    })],
    'timePeriod': [(0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true,
      disabled: computed.notEmpty('model.allocation')
    })]
  });

  exports.default = Component.extend(Validations, {
    didReceiveAttrs() {
      this._super(...arguments);

      let model = get(this, 'model');

      once(this, function () {
        set(model, 'allocation', getWithDefault(model, 'allocation', []));
        set(model, 'timePeriod', getWithDefault(model, 'timePeriod', {}));
      });
    },
    /**
     * The string representing the path in the profile object for the resource.
     *
     * @property profilePath
     * @type {String}
     * @default 'false'
     * @required
     */

    /**
     * The object to use as the data model for the resource.
     *
     * @property model
     * @type {Object}
     * @required
     */

    tagName: 'form',
    allocation: alias('model.allocation'),
    timePeriod: alias('model.timePeriod')
  });
});
define('mdeditor/pods/components/object/md-funding/preview/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define("mdeditor/pods/components/object/md-funding/preview/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "W11gO/Ro", "block": "{\"symbols\":[\"model\",\"alloc\"],\"statements\":[[4,\"with\",[[20,[\"item\"]]],null,{\"statements\":[[0,\"  \"],[6,\"dl\"],[9,\"class\",\"dl-horizontal\"],[7],[0,\"\\n    \"],[6,\"h4\"],[9,\"class\",\"text-info\"],[7],[0,\"Allocation #\"],[1,[18,\"index\"],false],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-md-6\"],[7],[0,\"\\n        \"],[6,\"label\"],[7],[0,\"Start Date:\"],[8],[1,[25,\"log\",[[19,1,[]]],null],false],[0,\"\\n        \"],[1,[25,\"if\",[[19,1,[\"timePeriod\",\"startDateTime\"]],[25,\"moment-format\",[[19,1,[\"timePeriod\",\"startDateTime\"]],\"MM-DD-YYYY\"],null],\"Not defined\"],null],false],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-md-6\"],[7],[0,\"\\n        \"],[6,\"label\"],[7],[0,\"End Date:\"],[8],[0,\"\\n        \"],[1,[25,\"if\",[[19,1,[\"timePeriod\",\"endDateTime\"]],[25,\"moment-format\",[[19,1,[\"timePeriod\",\"endDateTime\"]],\"MM-DD-YYYY\"],null],\"Not defined\"],null],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"table-responsive\"],[7],[0,\"\\n    \"],[6,\"table\"],[9,\"class\",\"table table-condensed table-bordered\"],[7],[0,\"\\n      \"],[6,\"thead\"],[7],[0,\"\\n        \"],[6,\"tr\"],[7],[0,\"\\n          \"],[6,\"th\"],[7],[0,\"Amount\"],[8],[0,\"\\n          \"],[6,\"th\"],[7],[0,\"Currency\"],[8],[0,\"\\n          \"],[6,\"th\"],[7],[0,\"Source\"],[8],[0,\"\\n          \"],[6,\"th\"],[7],[0,\"Recipient\"],[8],[0,\"\\n          \"],[6,\"th\"],[7],[0,\"Match?\"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"tbody\"],[7],[0,\"\\n\"],[4,\"each\",[[19,1,[\"allocation\"]]],null,{\"statements\":[[0,\"          \"],[6,\"tr\"],[7],[0,\"\\n            \"],[6,\"td\"],[7],[1,[25,\"get-dash\",[[19,2,[]],\"amount\"],null],false],[8],[0,\"\\n            \"],[6,\"td\"],[7],[1,[25,\"get-dash\",[[19,2,[]],\"currency\"],null],false],[8],[0,\"\\n            \"],[6,\"td\"],[7],[1,[25,\"control/md-contact-title\",null,[[\"contactId\",\"default\"],[[19,2,[\"sourceId\"]],\"--\"]]],false],[8],[0,\"\\n            \"],[6,\"td\"],[7],[1,[25,\"control/md-contact-title\",null,[[\"contactId\",\"default\"],[[19,2,[\"recipientId\"]],\"--\"]]],false],[8],[0,\"\\n            \"],[6,\"td\"],[7],[1,[25,\"get-dash\",[[19,2,[]],\"matching\"],null],false],[8],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[2]},{\"statements\":[[0,\"          \"],[6,\"tr\"],[7],[0,\"\\n            \"],[6,\"td\"],[9,\"colspan\",\"5\"],[7],[0,\"No allocations found.\"],[8],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-funding/preview/template.hbs" } });
});
define("mdeditor/pods/components/object/md-funding/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "XnIO0nfp", "block": "{\"symbols\":[\"editing\"],\"statements\":[[4,\"object/md-object-table\",null,[[\"items\",\"header\",\"data-spy\",\"shadow\",\"buttonText\",\"ellipsis\",\"attributes\",\"profilePath\",\"collapsible\",\"isCollapsed\",\"verticalButtons\"],[[20,[\"model\",\"allocation\"]],\"Allocation\",\"Allocation\",true,\"Add Allocation\",true,\"amount,currency,matching\",\"record.funding.allocation\",false,false,true]],{\"statements\":[[0,\"\\n  \"],[1,[25,\"object/md-allocation\",null,[[\"model\",\"profilePath\"],[[19,1,[]],\"record.funding.allocation\"]]],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"model\",\"timePeriod\"]]],null,{\"statements\":[[0,\"\\n\"],[1,[25,\"object/md-timePeriod\",null,[[\"model\",\"profilePath\"],[[20,[\"model\",\"timePeriod\"]],\"record.funding.timePeriod\"]]],false],[0,\"\\n\\n\"],[1,[25,\"input/md-textarea\",null,[[\"maxlength\",\"value\",\"label\",\"data-spy\",\"placeholder\",\"profilePath\"],[500,[20,[\"model\",\"description\"]],\"Description\",\"Description\",\"Description: Less than 500 characters\",\"record.funding.timePeriod\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-funding/template.hbs" } });
});
define('mdeditor/pods/components/object/md-graphic-array/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    A
  } = Ember;

  exports.default = Component.extend({
    /**
     * mdEditor class for input and edit of mdJSON 'graphic' object arrays. The
     * class manages the maintenance of an array of graphic objects using the
     * md-object-table class.
     *
     * ```handlebars
     * \{{object/md-graphic-array
     *   model=model
     *   data-spy="Graphic"
     *   button-text="Add Graphic"
     *   label="Graphic"
     * }}
     * ```
     *
     * @class md-graphic-array
     * @constructor
     */

    attributeBindings: ['data-spy'],

    /**
     * mdJSON object containing the 'graphic' array.
     *
     * @property model
     * @type Object
     * @required
     */

    /**
     * List of mdJSON 'graphic' object attributes to display in
     * md-object-table to aid in choosing the onlineResource to edit or
     * delete.
     * The property is passed to md-object-table for configuration.
     *
     * @property attributes
     * @type String
     * @default 'name, uri'
     */
    attributes: 'fileName,fileDescription',

    /**
     * Name to place on the mdEditor panel header for entry and edit of
     * 'onlineResource' objects.
     * The property is passed to md-object-table for configuration.
     *
     * @property label
     * @type String
     * @default 'Graphic'
     */
    label: 'Graphic',

    /**
     * Label for the 'add item' button.
     * The property is passed to md-object-table for configuration.
     *
     * @property buttonText
     * @type String
     * @default 'Graphic'
     */
    buttonText: 'Add Graphic',

    previewTemplate: 'object/md-graphic-array/md-graphic-preview',

    templateClass: Ember.Object.extend({
      init() {
        this._super(...arguments);

        this.set('fileConstraint', A());
        this.set('fileUri', A());
      }
    })
  });
});
define("mdeditor/pods/components/object/md-graphic-array/md-graphic-preview/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4tLiruzt", "block": "{\"symbols\":[\"image\"],\"statements\":[[6,\"strong\"],[7],[1,[20,[\"item\",\"fileName\"]],false],[0,\":\"],[8],[0,\"\\n\"],[4,\"each\",[[20,[\"item\",\"fileUri\"]]],null,{\"statements\":[[4,\"if\",[[19,1,[\"uri\"]]],null,{\"statements\":[[0,\"    \"],[6,\"img\"],[10,\"src\",[26,[[19,1,[\"uri\"]]]]],[9,\"class\",\"md-logo-preview img-responsive img-thumbnail\"],[9,\"alt\",\"Image Preview\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-graphic-array/md-graphic-preview/template.hbs" } });
});
define("mdeditor/pods/components/object/md-graphic-array/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DprYRvx3", "block": "{\"symbols\":[\"editing\",\"&default\"],\"statements\":[[4,\"object/md-object-table\",null,[[\"items\",\"header\",\"buttonText\",\"templateClass\",\"previewTemplate\",\"attributes\"],[[20,[\"model\"]],[20,[\"label\"]],[20,[\"buttonText\"]],[20,[\"templateClass\"]],[20,[\"previewTemplate\"]],[20,[\"attributes\"]]]],{\"statements\":[[0,\"    Editing: \"],[1,[19,1,[\"fileName\"]],false],[0,\"\\n\\n    \"],[1,[25,\"input/md-input\",null,[[\"value\",\"label\",\"placeholder\",\"required\"],[[19,1,[\"fileName\"]],\"Name\",\"File Name\",true]]],false],[0,\"\\n\\n    \"],[1,[25,\"input/md-input\",null,[[\"value\",\"label\",\"placeholder\"],[[19,1,[\"fileType\"]],\"File Type\",\"Enter the file format(s) of the logo.\"]]],false],[0,\"\\n\\n    \"],[1,[25,\"input/md-textarea\",null,[[\"maxlength\",\"value\",\"label\",\"placeholder\"],[500,[19,1,[\"fileDescription\"]],\"Description\",\"Description of the file: Less than 500 characters\"]]],false],[0,\"\\n\\n    \"],[1,[25,\"object/md-online-resource-array\",null,[[\"shadow\",\"model\",\"ellipsis\",\"imagePicker\",\"profilePath\"],[false,[19,1,[\"fileUri\"]],true,true,[20,[\"profilePath\"]]]]],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null],[11,2],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-graphic-array/template.hbs" } });
});
define('mdeditor/pods/components/object/md-identifier-array/component', ['exports', 'mdeditor/pods/components/object/md-identifier/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    A,
    Component
  } = Ember;

  exports.default = Component.extend({

    init() {
      this._super(...arguments);

      if (!this.get('model')) {
        this.set('model', A());
      }
    },

    /**
     * mdEditor class for input and edit of mdJSON 'identifier' object
     * arrays.
     * The class manages the maintenance of an array of identifier
     * objects using the md-objectroute-table class.
     *
     * @module mdeditor
     * @submodule components-object
     * @class md-identifier-array
     * @uses md-objectroute-table
     * @constructor
     */

    attributeBindings: ['data-spy'],

    /**
     * mdJSON object containing the 'identifier' array.
     *
     * @property model
     * @type Object
     * @required
     */

    /**
     * List of mdJSON 'identifier' object attributes to display in
     * md-object-table to aid in choosing the identifier to edit or
     * delete.
     * The property is passed to md-object-table for configuration.
     *
     * @property attributes
     * @type String
     * @default 'name, uri'
     */
    attributes: 'identifier,namespace,description',

    /**
     * Name to place on the mdEditor panel header for entry and edit of
     * 'identifier' objects.
     * The property is passed to md-object-table for configuration.
     *
     * @property label
     * @type String
     * @default 'Identifier'
     */
    label: 'Identifier',

    /**
     * See [md-array-table](md-array-table.html#property_templateClass).
     *
     * @property templateClass
     * @type Ember.Object
     */
    templateClass: Ember.Object.extend(_component.Validations, {
      init() {
        this._super(...arguments);
        this.set('authority', {});
      }
    })
  });
});
define("mdeditor/pods/components/object/md-identifier-array/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "BkKU+NEB", "block": "{\"symbols\":[\"&default\"],\"statements\":[[1,[25,\"object/md-objectroute-table\",null,[[\"items\",\"header\",\"buttonText\",\"ellipsis\",\"templateClass\",\"editItem\",\"attributes\"],[[20,[\"model\"]],[20,[\"label\"]],\"Add Identifier\",[20,[\"ellipsis\"]],[20,[\"templateClass\"]],[20,[\"editItem\"]],[20,[\"attributes\"]]]]],false],[0,\"\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-identifier-array/template.hbs" } });
});
define('mdeditor/pods/components/object/md-identifier-object-table/component', ['exports', 'mdeditor/pods/components/object/md-identifier-array/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _component.default.extend({
    /**
     * mdEditor class for input and edit of mdJSON 'identifier' object
     * arrays.
     * The class manages the maintenance of an array of identifier
     * objects using the md-object-table class.
     *
     * @module mdeditor
     * @submodule components-object
     * @class md-identifier-object-table
     * @uses md-object-table
     * @constructor
     */

    /**
     * Label for the panel
     *
     * @property label
     * @type {String}
     * @default undefined
     */

    /**
     * Array of identifiers
     *
     * @property model
     * @type {Array}
     * @default undefined
     */

    /**
     * Attributes displayed in the preview table.
     *
     * @property attributes
     * @type {String}
     * @default 'identifier,namespace'
     */
    attributes: 'identifier,namespace',

    ellipsis: true,

    /**
     * Default profile visibility
     *
     * @property visibility
     * @type {Boolean}
     * @default false
     */
    visibility: false
  });
});
define("mdeditor/pods/components/object/md-identifier-object-table/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "M34P2O/x", "block": "{\"symbols\":[\"editing\"],\"statements\":[[4,\"object/md-object-table\",null,[[\"items\",\"header\",\"buttonText\",\"ellipsis\",\"templateClass\",\"attributes\"],[[20,[\"model\"]],[20,[\"label\"]],\"Add Identifier\",[20,[\"ellipsis\"]],[20,[\"templateClass\"]],[20,[\"attributes\"]]]],{\"statements\":[[0,\"\\n\"],[1,[25,\"object/md-identifier\",null,[[\"model\",\"short\",\"profilePath\"],[[19,1,[]],[20,[\"short\"]],[20,[\"profilePath\"]]]]],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-identifier-object-table/template.hbs" } });
});
define('mdeditor/pods/components/object/md-identifier/component', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.Validations = undefined;


  const {
    Component,
    computed,
    set,
    getWithDefault
  } = Ember;

  const Validations = (0, _emberCpValidations.buildValidations)({
    'identifier': [(0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true
    })]
  });

  const theComp = Component.extend(Validations, {
    init() {
      this._super(...arguments);

      let model = getWithDefault(this, 'model', {}) || {};
      set(model, 'authority', getWithDefault(model, 'authority', {}));
      set(this, 'model', model);
    },

    classNames: ['md-identifier'],
    attributeBindings: ['data-spy'],

    /**
     * The identifier object to render
     *
     * @property model
     * @type {object}
     * @required
     */

    /**
     * Render short form of the identifier template, i.e. no authority
     *
     * @property short
     * @type {Boolean}
     */

    /**
     * Determines whether to render identifier field with confirmation button
     *
     * @property confirmIdentifier
     * @type {Boolean}
     */

    identifier: computed.alias('model.identifier')
  });

  exports.Validations = Validations;
  exports.default = theComp;
});
define("mdeditor/pods/components/object/md-identifier/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ccHzILid", "block": "{\"symbols\":[\"&default\"],\"statements\":[[1,[25,\"component\",[[25,\"if\",[[20,[\"confirmIdentifier\"]],\"input/md-input-confirm\",\"input/md-input\"],null]],[[\"valuePath\",\"model\",\"confirmTip\",\"placeholder\",\"label\",\"required\",\"showValidations\",\"profilePath\",\"data-spy\",\"class\"],[\"identifier\",[19,0,[]],\"Note! Editing the identifier may break links. Be aware.\",\"Enter the identifier for the resource\",\"Identifier\",true,true,[25,\"concat\",[[20,[\"profilePath\"]],\".identifier\"],null],\"Identifier\",\"md-embedded\"]]],false],[0,\"\\n\\n\"],[1,[25,\"input/md-codelist\",null,[[\"label\",\"data-spy\",\"class\",\"placeholder\",\"create\",\"required\",\"tooltip\",\"icon\",\"disabled\",\"allowClear\",\"mdCodeName\",\"valuePath\",\"value\",\"profilePath\"],[\"Namespace\",\"Namespace\",\"md-embedded\",\"Select or type a namespace for the identifier.\",true,false,true,false,[20,[\"disabled\"]],true,\"namespace\",\"code\",[20,[\"model\",\"namespace\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".namespace\"],null]]]],false],[0,\"\\n\\n\\n\"],[1,[25,\"input/md-input\",null,[[\"value\",\"placeholder\",\"label\",\"profilePath\"],[[20,[\"model\",\"version\"]],\"Enter the version for the identifier.\",\"Version\",[25,\"concat\",[[20,[\"profilePath\"]],\".version\"],null]]]],false],[0,\"\\n\\n\"],[1,[25,\"input/md-textarea\",null,[[\"value\",\"profilePath\",\"label\",\"placeholder\"],[[20,[\"model\",\"description\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".description\"],null],\"Description\",\"Enter a description of the identifier.\"]]],false],[0,\"\\n\\n\"],[4,\"unless\",[[20,[\"short\"]]],null,{\"statements\":[[4,\"layout/md-card\",null,[[\"title\",\"profilePath\",\"shadow\",\"collapsible\"],[\"Authority\",[25,\"concat\",[[20,[\"profilePath\"]],\".authority\"],null],true,true]],{\"statements\":[[0,\"    \"],[1,[25,\"object/md-citation\",null,[[\"model\",\"profilePath\",\"embedded\",\"simpleIdentifier\"],[[20,[\"model\",\"authority\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".authority\"],null],true,true]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-identifier/template.hbs" } });
});
define('mdeditor/pods/components/object/md-keyword-citation/component', ['exports', 'mdeditor/pods/components/object/md-online-resource/component', 'ember-cp-validations'], function (exports, _component, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    isArray,
    computed,
    Component
  } = Ember;

  const Validations = (0, _emberCpValidations.buildValidations)({
    'onlineResource': [(0, _emberCpValidations.validator)('format', {
      regex: _component.regex,
      isWarning: true,
      message: 'This field should be a valid, resolvable uri.',
      dependentKeys: ['onlineResource', 'model.thesaurus.onlineResource.0.uri']
    })],
    title: (0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true
    })
  });

  exports.default = Component.extend(Validations, {
    disabled: computed('model.thesaurus.identifier.0.identifier', function () {
      return this.get('model.thesaurus.identifier.0.identifier') !== 'custom';
    }),
    title: computed.alias('model.thesaurus.title'),
    onlineResource: computed('model.thesaurus.onlineResource.0.uri', {
      get() {
        return this.get('model.thesaurus.onlineResource.0.uri');
      },
      set(key, value) {
        let ol = this.get('model.thesaurus.onlineResource');
        if (!isArray(ol)) {
          this.set('model.thesaurus.onlineResource', [{}]);
        }
        this.set('model.thesaurus.onlineResource.0.uri', value);
        return value;
      }
    }),
    date: computed('model.thesaurus.date.0.date', {
      get() {
        return this.get('model.thesaurus.date.0.date');
      },
      set(key, value) {
        let ol = this.get('model.thesaurus.date');
        if (!isArray(ol)) {
          this.set('model.thesaurus.date', [{}]);
        }
        this.set('model.thesaurus.date.0.date', value.toISOString());
        return value;
      }
    }),
    dateType: computed('model.thesaurus.date.0.dateType', {
      get() {
        return this.get('model.thesaurus.date.0.dateType');
      },
      set(key, value) {
        let ol = this.get('model.thesaurus.date');
        if (!isArray(ol)) {
          this.set('model.thesaurus.date', [{}]);
        }
        this.set('model.thesaurus.date.0.dateType', value);
        return value;
      }
    })
  });
});
define("mdeditor/pods/components/object/md-keyword-citation/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mY415/Tz", "block": "{\"symbols\":[\"thesaurus\",\"&default\"],\"statements\":[[4,\"with\",[[20,[\"model\",\"thesaurus\"]]],null,{\"statements\":[[6,\"form\"],[9,\"class\",\"md-keyword-citation form-horizontal\"],[7],[0,\"\\n  \"],[6,\"fieldset\"],[10,\"disabled\",[18,\"disabled\"],null],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n      \"],[6,\"label\"],[9,\"class\",\"col-sm-2 control-label required\"],[7],[0,\"Title\"],[8],[0,\"\\n      \"],[1,[25,\"input/md-input\",null,[[\"class\",\"placeholder\",\"valuePath\",\"model\",\"showValidations\",\"required\"],[\"col-sm-10\",\"Enter title\",\"title\",[19,0,[]],true,true]]],false],[0,\"\\n    \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n        \"],[6,\"label\"],[9,\"class\",\"col-sm-2 control-label\"],[7],[0,\"Date\"],[8],[0,\"\\n        \"],[1,[25,\"input/md-datetime\",null,[[\"date\",\"class\"],[[20,[\"date\"]],\"col-xxl-4 col-md-10 col-sm-4\"]]],false],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"form-group clearfix visible-md-block visible-lg-block\"],[7],[8],[0,\"\\n        \"],[6,\"label\"],[9,\"class\",\"col-sm-2 control-label\"],[7],[0,\"Date Type\"],[8],[0,\"\\n        \"],[1,[25,\"input/md-codelist\",null,[[\"class\",\"create\",\"tooltip\",\"icon\",\"disabled\",\"allowClear\",\"mdCodeName\",\"value\",\"placeholder\"],[\"col-xxl-4 col-md-10 col-sm-4\",false,true,false,[20,[\"disabled\"]],false,\"dateType\",[20,[\"dateType\"]],\"Choose date type\"]]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n      \"],[6,\"label\"],[9,\"class\",\"col-sm-2 control-label\"],[7],[0,\"Type\"],[8],[0,\"\\n      \"],[1,[25,\"input/md-codelist\",null,[[\"class\",\"create\",\"tooltip\",\"icon\",\"disabled\",\"allowClear\",\"mdCodeName\",\"value\",\"placeholder\"],[\"col-xxl-5 col-lg-7 col-sm-10\",true,true,false,[20,[\"disabled\"]],true,\"keywordType\",[20,[\"model\",\"keywordType\"]],\"Choose keyword type\"]]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n      \"],[6,\"label\"],[9,\"class\",\"col-sm-2 control-label\"],[7],[0,\"Edition\"],[8],[0,\"\\n      \"],[1,[25,\"input/md-input\",null,[[\"class\",\"placeholder\",\"value\",\"required\"],[\"col-sm-10\",\"Enter edition or version\",[19,1,[\"edition\"]],false]]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n      \"],[6,\"label\"],[9,\"class\",\"col-sm-2 control-label\"],[7],[0,\"URL\"],[8],[0,\"\\n      \"],[1,[25,\"input/md-input\",null,[[\"class\",\"type\",\"valuePath\",\"model\",\"showValidations\",\"placeholder\"],[\"col-sm-10\",\"url\",\"onlineResource\",[19,0,[]],true,\"Enter online link\"]]],false],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[11,2],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-keyword-citation/template.hbs" } });
});
define('mdeditor/pods/components/object/md-keyword-list/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    readOnly: Ember.computed('model.thesaurus.identifier.0.identifier', function () {
      return this.get('model.thesaurus.identifier.0.identifier') !== 'custom';
    }),

    actions: {
      addKeyword(model) {
        this.get('addKeyword')(model);
      },
      deleteKeyword(model, object) {
        this.get('deleteKeyword')(model, object);
      }
    }
  });
});
define("mdeditor/pods/components/object/md-keyword-list/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xZSSFGpC", "block": "{\"symbols\":[\"keyword\",\"index\",\"keyword\",\"index\",\"&default\"],\"statements\":[[4,\"unless\",[[20,[\"readOnly\"]]],null,{\"statements\":[[0,\"  \"],[6,\"table\"],[9,\"class\",\"table table-striped table-hover fadeIn\"],[7],[0,\"\\n    \"],[6,\"thead\"],[7],[0,\"\\n      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"th\"],[7],[0,\"Keyword\"],[8],[0,\"\\n        \"],[6,\"th\"],[7],[0,\"Id (Optional)\"],[8],[0,\"\\n        \"],[6,\"th\"],[7],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tbody\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"model\",\"keyword\"]]],null,{\"statements\":[[0,\"        \"],[6,\"tr\"],[7],[0,\"\\n          \"],[6,\"td\"],[7],[0,\"\\n            \"],[1,[25,\"input/md-input\",null,[[\"value\",\"placeholder\"],[[19,3,[\"keyword\"]],\"Keyword\"]]],false],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"td\"],[7],[0,\"\\n            \"],[1,[25,\"input/md-input\",null,[[\"value\",\"placeholder\"],[[19,3,[\"identifier\"]],\"Unique identifier\"]]],false],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"td\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"md-button-column\"],[7],[0,\"\\n              \"],[6,\"button\"],[9,\"class\",\"btn btn-xs btn-danger\"],[3,\"action\",[[19,0,[]],\"deleteKeyword\",[20,[\"model\",\"keyword\"]],[19,3,[]]]],[7],[0,\"\\n                \"],[6,\"span\"],[9,\"class\",\"fa fa-times\"],[7],[8],[0,\" Delete\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[3,4]},{\"statements\":[[0,\"  \"],[6,\"tr\"],[7],[0,\"\\n    \"],[6,\"td\"],[9,\"colspan\",\"3\"],[7],[0,\"\\n      Add some keywords.\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"td\"],[9,\"colspan\",\"3\"],[7],[0,\"\\n          \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-xs btn-success\"],[3,\"action\",[[19,0,[]],\"addKeyword\",[20,[\"model\",\"keyword\"]]]],[7],[0,\"\\n            \"],[1,[25,\"fa-icon\",[\"plus\"],null],false],[0,\" Add Keyword\\n          \"],[8],[0,\"\\n          \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-xs btn-info\"],[3,\"action\",[[19,0,[]],[20,[\"hideThesaurus\"]],[19,0,[\"element\"]]]],[7],[0,\"\\n            \"],[1,[25,\"fa-icon\",[\"eye\"],null],false],[0,\" Toggle Thesaurus\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\n  \"],[6,\"ul\"],[9,\"class\",\"list-group\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"model\",\"keyword\"]]],null,{\"statements\":[[0,\"      \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"class\",\"btn btn-xs btn-danger pull-right\"],[3,\"action\",[[19,0,[]],\"deleteKeyword\",[20,[\"model\",\"keyword\"]],[19,1,[]]]],[7],[0,\"\\n          \"],[6,\"span\"],[9,\"class\",\"fa fa-times\"],[7],[8],[0,\" Delete\\n        \"],[8],[0,\"\\n        \"],[1,[19,1,[\"keyword\"]],false],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[1,2]},{\"statements\":[[0,\"    \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Add some keywords.\"],[8],[0,\"\\n\"]],\"parameters\":[]}],[4,\"if\",[[20,[\"editThesaurus\"]]],null,{\"statements\":[[0,\"    \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"\\n      \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-block btn-success\"],[3,\"action\",[[19,0,[]],[20,[\"editThesaurus\"]],[20,[\"listId\"]]]],[7],[0,\"\\n        \"],[1,[25,\"fa-icon\",[\"pencil\"],null],false],[0,\" Edit keywords.\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[11,5],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-keyword-list/template.hbs" } });
});
define('mdeditor/pods/components/object/md-lineage/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    set,
    get,
    getWithDefault,
    run: {
      once
    }
  } = Ember;

  exports.default = Component.extend({
    didReceiveAttrs() {
      this._super(...arguments);

      let model = get(this, 'model');

      once(function () {
        set(model, 'scope', getWithDefault(model, 'scope', {}));
        set(model, 'citation', getWithDefault(model, 'citation', []));
        set(model, 'processStep', getWithDefault(model, 'processStep', []));
        set(model, 'source', getWithDefault(model, 'source', []));
      });
    },

    tagName: 'form',

    /**
     * The string representing the path in the profile object for the citation.
     *
     * @property profilePath
     * @type {String}
     * @default "false"
     * @required
     */

    /**
     * The object to use as the data model for the citation.
     *
     * @property model
     * @type {Object}
     * @required
     */

    /**
     * See [md-array-table](md-array-table.html#property_templateClass).
     *
     * @property stepTemplateClass
     * @type Ember.Object
     */
    stepTemplateClass: Ember.Object.extend({
      init() {
        this._super(...arguments);
        this.set('timePeriod', {});
      }
    }),

    sourceTemplate: Ember.Object.extend()
  });
});
define('mdeditor/pods/components/object/md-lineage/preview/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define("mdeditor/pods/components/object/md-lineage/preview/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "wRNKsy6a", "block": "{\"symbols\":[\"step\"],\"statements\":[[6,\"dl\"],[9,\"class\",\"dl-horizontal col-lg-12\"],[7],[0,\"\\n    \"],[6,\"dt\"],[7],[0,\"\\n      \"],[6,\"h4\"],[9,\"class\",\"text-info\"],[7],[0,\"Lineage #\"],[1,[18,\"index\"],false],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"dd\"],[7],[8],[0,\"\\n    \"],[1,[25,\"control/md-definition\",null,[[\"title\",\"text\"],[\"Statement\",[20,[\"item\",\"statement\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"dl\"],[9,\"class\",\"dl-horizontal col-lg-12\"],[7],[0,\"\\n\"],[4,\"control/md-definition\",null,[[\"title\"],[\"Process Step\"]],{\"statements\":[[4,\"each\",[[20,[\"item\",\"processStep\"]]],null,{\"statements\":[[0,\"          \"],[6,\"em\"],[7],[1,[19,1,[\"stepId\"]],false],[8],[0,\": \"],[1,[19,1,[\"description\"]],false],[0,\"\\n            \"],[6,\"br\"],[7],[8],[0,\"\\n\"]],\"parameters\":[1]},{\"statements\":[[0,\"            \"],[6,\"em\"],[9,\"class\",\"text-muted\"],[7],[0,\"No proces steps assigned.\"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-lineage/preview/template.hbs" } });
});
define("mdeditor/pods/components/object/md-lineage/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "2gW4HipW", "block": "{\"symbols\":[\"source\",\"&default\"],\"statements\":[[1,[25,\"input/md-textarea\",null,[[\"value\",\"profilePath\",\"label\",\"placeholder\",\"data-spy\",\"required\"],[[20,[\"model\",\"statement\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".statement\"],null],\"Statement\",\"A general statement of the actions taken to verify, transform, repair, and integrate the resource.\",\"Statement\",true]]],false],[0,\"\\n\\n\"],[1,[25,\"object/md-objectroute-table\",null,[[\"items\",\"hideIndex\",\"header\",\"buttonText\",\"ellipsis\",\"templateClass\",\"editItem\",\"attributes\",\"profilePath\",\"data-spy\"],[[20,[\"model\",\"processStep\"]],true,\"Process Step\",\"Add Step\",[20,[\"ellipsis\"]],[20,[\"stepTemplateClass\"]],[20,[\"editProcessStep\"]],\"stepId,description\",[25,\"concat\",[[20,[\"profilePath\"]],\".processStep\"],null],\"Process Step\"]]],false],[0,\"\\n\\n\"],[4,\"object/md-array-table\",null,[[\"columns\",\"value\",\"required\",\"title\",\"templateClass\",\"profilePath\",\"data-spy\"],[\"Description\",[20,[\"model\",\"source\"]],[20,[\"required\"]],\"Source\",[20,[\"sourceTemplate\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".source\"],null],[20,[\"Source\"]]]],{\"statements\":[[0,\"  \"],[6,\"td\"],[7],[0,\"\\n    \"],[1,[25,\"input/md-textarea\",null,[[\"value\",\"placeholder\"],[[19,1,[\"item\",\"value\"]],\"A brief description about the source dataset used in creating the data.\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\\n\"],[1,[25,\"object/md-citation-array\",null,[[\"model\",\"profilePath\",\"data-spy\",\"editItem\",\"label\"],[[20,[\"model\",\"citation\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".citation\"],null],\"Lineage Citation\",[20,[\"editCitation\"]],\"Citation\"]]],false],[0,\"\\n\\n\"],[1,[25,\"input/md-codelist\",null,[[\"value\",\"label\",\"create\",\"tooltip\",\"icon\",\"mdCodeName\",\"closeOnSelect\",\"placeholder\",\"profilePath\",\"data-spy\"],[[20,[\"model\",\"scope\",\"scopeCode\"]],\"Scope\",true,true,true,\"scope\",false,\"Select type of resource.\",[25,\"concat\",[[20,[\"profilePath\"]],\".scope\"],null],\"Scope\"]]],false],[0,\"\\n\"],[11,2],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-lineage/template.hbs" } });
});
define('mdeditor/pods/components/object/md-locale-array/component', ['exports', 'mdeditor/pods/components/object/md-locale/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend({
    attributeBindings: ['data-spy'],

    /**
     * See [md-array-table](md-array-table.html#property_templateClass).
     *
     * @property templateClass
     * @type Ember.Object
     */
    templateClass: _component.Template
  });
});
define("mdeditor/pods/components/object/md-locale-array/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rys9XnXC", "block": "{\"symbols\":[\"locale\",\"item\"],\"statements\":[[4,\"object/md-array-table\",null,[[\"columns\",\"title\",\"required\",\"plain\",\"value\",\"validation\",\"data-spy\",\"templateClass\"],[\"Language,Character Set,Country\",[20,[\"title\"]],[20,[\"required\"]],[20,[\"plain\"]],[20,[\"value\"]],[20,[\"validation\"]],false,[20,[\"templateClass\"]]]],{\"statements\":[[4,\"with\",[[19,1,[\"item\"]]],null,{\"statements\":[[0,\"     \"],[6,\"td\"],[7],[0,\"\\n       \"],[1,[25,\"input/md-codelist\",null,[[\"path\",\"model\",\"create\",\"tooltip\",\"icon\",\"disabled\",\"mdCodeName\",\"showValidations\",\"placeholder\"],[\"language\",[19,2,[]],true,true,false,[20,[\"disabled\"]],\"language\",true,\"Select or enter a language code.\"]]],false],[0,\"\\n     \"],[8],[0,\"\\n     \"],[6,\"td\"],[7],[0,\"\\n       \"],[1,[25,\"input/md-codelist\",null,[[\"path\",\"model\",\"create\",\"tooltip\",\"icon\",\"disabled\",\"mdCodeName\",\"showValidations\",\"placeholder\"],[\"characterSet\",[19,2,[]],false,true,false,[20,[\"disabled\"]],\"characterSet\",true,\"Select character set.\"]]],false],[0,\"\\n     \"],[8],[0,\"\\n     \"],[6,\"td\"],[7],[0,\"\\n       \"],[1,[25,\"input/md-codelist\",null,[[\"value\",\"create\",\"tooltip\",\"icon\",\"disabled\",\"mdCodeName\",\"placeholder\"],[[19,2,[\"country\"]],false,true,false,[20,[\"disabled\"]],\"countries\",\"Select country code.\"]]],false],[0,\"\\n     \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-locale-array/template.hbs" } });
});
define('mdeditor/pods/components/object/md-locale/component', ['exports', 'mdeditor/mixins/object-template', 'ember-cp-validations'], function (exports, _objectTemplate, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.Template = exports.Validations = undefined;


  const {
    Component,
    get,
    set,
    Object: EmObject,
    computed,
    copy,
    isNone,
    inject: {
      service
    }
  } = Ember;

  const Validations = (0, _emberCpValidations.buildValidations)({
    'language': (0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true
    }),
    'characterSet': (0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true
    })
  });

  const TemplateClass = EmObject.extend(Validations, {
    init() {
      this._super(...arguments);
    }
  });

  const theComp = Component.extend(_objectTemplate.default, {
    settings: service(),

    init() {
      this._super(...arguments);

      let main = this.get('model');
      let modelPath = get(this, 'modelPath');
      let model = modelPath ? get(main, modelPath) : main;
      let settings = get(this, 'settings.data');

      //let model = get(model, modelPath);

      if (isNone(model) || Object.keys(model).length === 0) {
        model = EmObject.create(this.applyTemplate(model, {
          language: copy(settings.get('language')),
          characterSet: copy(settings.get('characterSet')),
          country: copy(settings.get('country'))
        }));
      }

      if (modelPath) {
        set(main, modelPath, model);
      }
    },

    propPath: computed('modelPath', function () {
      return get(this, 'modelPath') ? get(this, 'modelPath') + '.' : '';
    }),
    //value:{},
    /**
     * This templateClass to apply to the supplied model or model.modelPath.
     *
     * @property templateClass
     * @type Ember.Object
     */
    templateClass: TemplateClass
  });

  exports.Validations = Validations;
  exports.Template = TemplateClass;
  exports.default = theComp;
});
define("mdeditor/pods/components/object/md-locale/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "41GmcMsb", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n    \"],[1,[25,\"input/md-codelist\",null,[[\"path\",\"model\",\"create\",\"tooltip\",\"icon\",\"disabled\",\"mdCodeName\",\"label\",\"showValidations\",\"placeholder\"],[[25,\"concat\",[[20,[\"propPath\"]],\"language\"],null],[20,[\"model\"]],true,true,false,[20,[\"disabled\"]],\"language\",\"Language\",true,\"Select or enter a language code.\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n    \"],[1,[25,\"input/md-codelist\",null,[[\"path\",\"model\",\"create\",\"tooltip\",\"icon\",\"disabled\",\"mdCodeName\",\"label\",\"showValidations\",\"placeholder\"],[[25,\"concat\",[[20,[\"propPath\"]],\"characterSet\"],null],[20,[\"model\"]],false,true,false,[20,[\"disabled\"]],\"characterSet\",\"Character Set\",true,\"Select character set.\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n    \"],[1,[25,\"input/md-codelist\",null,[[\"value\",\"create\",\"tooltip\",\"icon\",\"disabled\",\"mdCodeName\",\"label\",\"placeholder\"],[[25,\"get\",[[20,[\"model\"]],[25,\"concat\",[[20,[\"propPath\"]],\"country\"],null]],null],false,true,false,[20,[\"disabled\"]],\"countries\",\"Country\",\"Select country code.\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-locale/template.hbs" } });
});
define('mdeditor/pods/components/object/md-maintenance/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    set,
    get,
    getWithDefault,
    setProperties,
    computed,
    run: {
      once
    }
  } = Ember;

  exports.default = Component.extend({
    /**
     * mdEditor class for input and edit of mdJSON 'maintenance' objects.
     *
     * @class md-maintenance
     * @constructor
     *   myClass = new MyClass()
     */

    tagName: 'form',

    /**
     * The string representing the path in the profile object.
     *
     * @property profilePath
     * @type {String}
     * @default "false"
     * @required
     */

    /**
     * The object to use as the data model.
     *
     * @property model
     * @type {Object}
     * @required
     */

    /**
     * Setup default values for the model.
     *
     * @method didReceiveAttrs
     */
    didReceiveAttrs() {
      this._super(...arguments);

      let model = get(this, 'model');

      once(function () {
        setProperties(model, {
          'date': getWithDefault(model, 'date', []),
          'scope': getWithDefault(model, 'scope', []),
          'note': getWithDefault(model, 'note', []),
          'contact': getWithDefault(model, 'contact', [])
        });
      });
    },

    scopes: computed('scope', {
      get() {
        let scope = get(this, 'model.scope');
        return scope ? scope.mapBy('scopeCode') : [];
      },
      set(key, value) {
        let map = value.map(itm => {
          return {
            scopeCode: itm
          };
        });
        set(this, 'model.scope', map);
        return value;
      }
    })
  });
});
define("mdeditor/pods/components/object/md-maintenance/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6/I+J+gw", "block": "{\"symbols\":[\"val\",\"&default\"],\"statements\":[[1,[25,\"input/md-codelist\",null,[[\"label\",\"create\",\"required\",\"tooltip\",\"icon\",\"allowClear\",\"showValidations\",\"mdCodeName\",\"value\",\"placeholder\",\"profilePath\"],[\"Frequency\",true,true,true,false,true,true,\"maintenanceFrequency\",[20,[\"model\",\"frequency\"]],\"Choose a value.\",[25,\"concat\",[[20,[\"profilePath\"]],\".frequency\"],null]]]],false],[0,\"\\n\\n\"],[4,\"layout/md-card\",null,[[\"shadow\",\"profilePath\",\"data-spy\",\"class\"],[false,[25,\"concat\",[[20,[\"profilePath\"]],\".date\"],null],\"Dates\",\"md-embedded\"]],{\"statements\":[[0,\"  \"],[1,[25,\"object/md-date-array\",null,[[\"value\",\"plain\",\"data-spy\"],[[20,[\"model\",\"date\"]],true,false]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"shadow\",\"profilePath\"],[false,[25,\"concat\",[[20,[\"profilePath\"]],\".contact\"],null]]],{\"statements\":[[0,\"  \"],[1,[25,\"object/md-party-array\",null,[[\"title\",\"data-spy\",\"collapsible\",\"collapsed\",\"required\",\"value\",\"class\",\"plain\"],[\"Contact\",\"Contacts\",true,false,false,[20,[\"model\",\"contact\"]],\"md-embedded\",true]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"shadow\",\"profilePath\"],[false,[25,\"concat\",[[20,[\"profilePath\"]],\".note\"],null]]],{\"statements\":[[4,\"object/md-simple-array-table\",null,[[\"title\",\"required\",\"plain\",\"class\",\"value\"],[\"Notes\",false,true,\"md-embedded\",[20,[\"model\",\"note\"]]]],{\"statements\":[[0,\"    \"],[6,\"td\"],[7],[0,\"\\n        \"],[1,[25,\"input/md-textarea\",null,[[\"value\",\"placeholder\"],[[19,1,[\"item\",\"value\"]],\"Enter notes regarding the maintenance of the resource.\"]]],false],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null],[0,\"\\n\"],[1,[25,\"input/md-codelist-multi\",null,[[\"value\",\"label\",\"create\",\"tooltip\",\"icon\",\"mdCodeName\",\"closeOnSelect\",\"placeholder\",\"profilePath\"],[[20,[\"scopes\"]],\"Scope\",true,true,true,\"scope\",false,\"Select type of resource.\",[25,\"concat\",[[20,[\"profilePath\"]],\".scope\"],null]]]],false],[0,\"\\n\\n\"],[11,2],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-maintenance/template.hbs" } });
});
define('mdeditor/pods/components/object/md-medium/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    set,
    get,
    getWithDefault,
    run: {
      once
    },
    computed: {
      alias
    }
  } = Ember;

  exports.default = Component.extend({
    didReceiveAttrs() {
      this._super(...arguments);

      let model = get(this, 'model');

      once(function () {
        set(model, 'mediumSpecification', getWithDefault(model, 'mediumSpecification', {}));
        set(model, 'identifier', getWithDefault(model, 'identifier', {}));
        set(model, 'mediumFormat', getWithDefault(model, 'mediumFormat', []));
      });
    },
    tagName: 'form',

    /**
     * The profile path for the component
     *
     * @property profilePath
     * @type {String}
     */

    title: alias('model.mediumSpecification.title')
  });
});
define("mdeditor/pods/components/object/md-medium/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "QqcOW0ME", "block": "{\"symbols\":[\"&default\"],\"statements\":[[1,[25,\"input/md-input\",null,[[\"label\",\"value\",\"placeholder\"],[\"Medium Title\",[20,[\"model\",\"mediumSpecification\",\"title\"]],\"Name of the medium\"]]],false],[0,\"\\n\\n\"],[4,\"layout/md-card\",null,[[\"shadow\",\"muted\",\"profilePath\",\"plain\"],[false,false,[25,\"concat\",[[20,[\"profilePath\"]],\".storage\"],null],true]],{\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"label\"],[9,\"class\",\"text-info col-md-2\"],[7],[0,\"Storage\"],[8],[0,\"\\n  \"],[1,[25,\"input/md-input\",null,[[\"type\",\"value\",\"step\",\"label\",\"placeholder\",\"profilePath\",\"class\"],[\"number\",[20,[\"model\",\"density\"]],\"0.01\",\"Density\",\"Density at which the data are recorded.\",[25,\"concat\",[[20,[\"profilePath\"]],\".density\"],null],\"col-md-3\"]]],false],[0,\"\\n\\n  \"],[1,[25,\"input/md-input\",null,[[\"value\",\"label\",\"profilePath\",\"placeholder\",\"class\"],[[20,[\"model\",\"units\"]],\"Density Units\",[25,\"concat\",[[20,[\"profilePath\"]],\".units\"],null],\"Units of measure for the recording density.\",\"col-md-3\"]]],false],[0,\"\\n\\n  \"],[1,[25,\"input/md-input\",null,[[\"type\",\"value\",\"step\",\"label\",\"placeholder\",\"profilePath\",\"class\"],[\"number\",[20,[\"model\",\"numberOfVolumes\"]],\"1\",\"Number Of Volumes\",\"The number of volumes in the media resource.\",[25,\"concat\",[[20,[\"profilePath\"]],\".numberOfVolumes\"],null],\"col-md-3\"]]],false],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[1,[25,\"input/md-codelist-multi\",null,[[\"label\",\"value\",\"create\",\"tooltip\",\"icon\",\"mdCodeName\",\"closeOnSelect\",\"placeholder\",\"class\",\"profilePath\"],[\"Storage Format\",[20,[\"model\",\"mediumFormat\"]],true,true,false,\"mediumFormat\",false,\"Method used to write to the medium.\",\"col-sm-10 col-sm-offset-2\",[25,\"concat\",[[20,[\"profilePath\"]],\".mediumFormat\"],null]]]],false],[0,\"\\n\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"shadow\",\"muted\",\"plain\",\"profilePath\"],[false,false,true,[25,\"concat\",[[20,[\"profilePath\"]],\".identifier\"],null]]],{\"statements\":[[0,\"  \"],[1,[25,\"object/md-identifier\",null,[[\"profilePath\",\"short\",\"model\"],[[25,\"concat\",[[20,[\"profilePath\"]],\".identifier\"],null],true,[20,[\"model\",\"identifier\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[1,[25,\"input/md-textarea\",null,[[\"value\",\"autoresize\",\"placeholder\",\"label\",\"profilePath\"],[[20,[\"model\",\"note\"]],false,\"Describe other limitations or requirements for using the medium.\",\"Note\",[25,\"concat\",[[20,[\"profilePath\"]],\".note\"],null]]]],false],[0,\"\\n\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-medium/template.hbs" } });
});
define('mdeditor/pods/components/object/md-object-table/component', ['exports', 'mdeditor/mixins/object-template', 'ember-in-viewport'], function (exports, _objectTemplate, _emberInViewport) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    computed,
    Component,
    observer,
    isEmpty,
    typeOf,
    getOwner,
    A,
    $,
    inject: {
      service
    }
  } = Ember;

  exports.default = Component.extend(_emberInViewport.default, _objectTemplate.default, {

    /**
     * mdEditor class for managing a table of similar mdJSON objects
     * for selection for edit or deletion.
     * The class is configurable for reuse with mdJSON object arrays.
     *
     * ```handlebars
     * \{{#object/md-object-table
     *  items=model
     *  header=label
     *  buttonText=buttonText
     *  templateClass=templateClass
     *  previewTemplate=previewTemplate
     *  ellipsis=ellipsis
     *  attributes=attributes as |editing|
     * }}
     *
     * {{/object/md-object-table}}
     * ```
     *
     * @class md-object-table
     * @submodule components-object
     * @module mdeditor
     * @constructor
     * @uses object-template
     */

    spotlight: service(),

    didReceiveAttrs() {
      this._super(...arguments);

      this.applyTemplateArray('items');
    },

    attributeBindings: ['data-spy'],
    classNameBindings: ['shadow:box-shadow--4dp'],
    classNames: ['md-object-table'],

    //reset the 'editing' flag
    didUpdateAttrs() {
      this._super(...arguments);
      this.set('editing', false);
    },

    /**
     * Array of the mdJSON object to display in the object table for
     * selection to edit or delete.
     *
     * @property items
     * @type Array
     * @default Ember.A()
     * @required
     */
    items: A(),

    /**
     * List of items object attributes to display in
     * md-object-table to aid in choosing the item to edit or
     * delete.
     *
     * @property attributes
     * @type String
     * @required
     */

    /**
     * Name to place on the mdEditor panel header for entry and edit of
     * items objects.
     *
     * @property header
     * @type String
     * @required
     */

    /**
     * The path of template to render in the table preview for each row.
     * Template content will be wrapped in a `<td>` element.
     *
     * @property previewTemplate
     * @type {String}
     * @optional
     * @default undefined
     */

    /**
     * The template class to use for new items. This should be a constructor.
     * Objects should be created by extending Ember.Object.
     *  ```javascript
     *  Ember.Object.extend({
     *    init() {
     *      this._super(...arguments);
     *
     *      this.set('foo', A());
     *      this.set('bar', A());
     *    }
     *  })
     *  ```
     *
     * @property templateClass
     * @type {Any}
     * @constructor
     * @default null
     * @required
     */
    templateClass: null,

    /**
     * Determines add button text
     *
     * @property buttonText
     * @type String
     * @default Add
     */
    buttonText: "Add",

    /**
     * Render the row actions vertically.
     *
     * @property verticalButtons
     * @type {Boolean}
     * @default undefined
     */

    /**
     * Inital collapse state for the panel.
     *
     * @property isCollapsed
     * @type {Boolean}
     * @default undefined
     */

    /**
     * Whether the panel is collapsible.
     *
     * @property collapsible
     * @type {Boolean}
     * @default true
     */
    collapsible: true,

    /**
     * True to truncate the preview table cell text.
     *
     * @property ellipsis
     * @type {Boolean}
     * @default undefined
     */

    /**
     * If true, a box shadow will be rendered around the panel.
     *
     * @property shadow
     * @type {Boolean}
     * @default true
     */
    shadow: true,

    /**
     * The height to offset from top of container when scrolling.
     *
     * @property offset
     * @type {Number}
     * @default 130
     */
    offset: 130,

    /**
     * Uses isCollapsed if defined, otherwise inspects array length.
     *
     * @property collapsed
     * @type {Boolean}
     * @readOnly
     * @category computed
     * @requires isCollapsed
     */
    collapsed: computed('isCollapsed', 'items.[]', function () {
      let isCollapsed = this.get('isCollapsed');
      let value = this.get('items');

      if (isCollapsed !== undefined) {
        return isCollapsed;
      } else if (value && value.length > 0) {
        return false;
      } else {
        return true;
      }
    }),

    panelId: computed('items.@each.val', 'editing', function () {
      return 'panel-' + this.get('elementId');
    }),

    btnSize: computed('verticalButtons', function () {
      return this.get('verticalButtons') ? 'md' : 'xs';
    }),

    /*citems: computed('items.@each.val', function () {
      let i = this.get('items')
        .map(function (itm) {
          return Ember.Object.create(itm);
        });
      return i;
    }),*/

    attrArray: computed('attributes', function () {
      let attr = this.get('attributes');

      return attr ? attr.split(',') : null;
    }),

    attrTitleArray: computed('attrArray', function () {
      return this.get('attrArray').map(function (item) {
        return item.trim().split('.').get('lastObject').dasherize().replace(/-/g, ' ');
      });
    }),

    editing: false,

    scrollTo(el) {
      let offset = this.get('offset');

      if (this.get('viewportEntered')) {
        // el.scrollIntoView({
        //   block: "end",
        //   behavior: "smooth"
        // });

        $('html,body').animate({
          scrollTop: $(el).offset().top - offset
        }, 'slow');
      }
    },

    editingChanged: observer('editing', function () {
      // deal with the change
      //Ember.run.schedule('afterRender', this, function () {
      let panel = this.$('> .md-object-table > .panel-collapse');
      let table = panel.find('> .panel-body > table, > .panel-body > .object-editor');
      let items = this.get('items');
      let editing = this.get('editing');
      let el = this.get('element');
      let comp = this;

      if (editing === 'adding') {
        items.pushObject(this.get('saveItem'));
      }

      if (editing === false && items.length) {
        let last = Object.keys(items.get('lastObject'));

        if (isEmpty(last)) {
          items.popObject();
        }
      }

      if (panel.hasClass('in')) {
        let out = editing ? table[0] : table[1];
        let inn = editing ? table[1] : table[0];

        $(out).fadeOut(100, function () {
          $(inn).fadeIn(100, function () {
            comp.scrollTo(el);
          });
        });

        table.toggleClass('fadeOut fadeIn');
      } else {
        //add a one-time listener to wait until panel is open
        panel.one('shown.bs.collapse', function () {
          table.toggleClass('fadeOut fadeIn');
          comp.scrollTo(el);
        });
        panel.collapse('show');
      }
      //});
    }),

    pillColor: computed('items.[]', function () {
      let count = this.get('items.length') || 0;

      return count > 0 ? 'label-info' : 'label-warning';
    }),

    actions: {
      deleteItem: function deleteItem(items, index) {
        items.removeAt(index);
      },

      addItem: function addItem() {
        const Template = this.get('templateClass');
        const owner = getOwner(this);
        const spotlight = this.get('spotlight');

        let itm = typeOf(Template) === 'class' ? Template.create(owner.ownerInjection()) : Ember.Object.create({});

        this.set('saveItem', itm);
        this.set('editing', 'adding');
        spotlight.setTarget(this.get('elementId'));
      },

      editItem: function editItem(items, index) {
        const spotlight = this.get('spotlight');

        this.set('saveItem', items.objectAt(index));
        this.set('editing', 'editing');
        spotlight.setTarget(this.get('elementId'));
      },

      cancelEdit: function cancelEdit() {
        const spotlight = this.get('spotlight');

        this.set('editing', false);
        spotlight.close();
      }
    }

  });
});
define("mdeditor/pods/components/object/md-object-table/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "M45gRkZs", "block": "{\"symbols\":[\"item\",\"index\",\"prop\",\"prop\",\"&default\"],\"statements\":[[6,\"div\"],[10,\"class\",[26,[\"md-object-table panel panel-default \",[25,\"if\",[[20,[\"editing\"]],\"editing\"],null]]]],[7],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"panel-heading\"],[7],[0,\"\\n        \"],[6,\"h3\"],[9,\"class\",\"panel-title md-panel-chevron\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"collapsible\"]]],null,{\"statements\":[[0,\"            \"],[6,\"a\"],[9,\"role\",\"button\"],[9,\"data-toggle\",\"collapse\"],[10,\"href\",[26,[\"#\",[25,\"unless\",[[20,[\"editing\"]],[20,[\"panelId\"]]],null]]]],[10,\"aria-expanded\",[26,[[25,\"if\",[[20,[\"collapsed\"]],\"false\",\"true\"],null]]]],[10,\"class\",[26,[[25,\"if\",[[20,[\"collapsed\"]],\"collapsed\"],null]]]],[10,\"aria-controls\",[26,[[18,\"panelId\"]]]],[7],[0,\"\\n                \"],[6,\"span\"],[9,\"class\",\"fa\"],[7],[8],[0,\" \"],[1,[18,\"header\"],false],[0,\"\\n                \"],[6,\"label\"],[10,\"class\",[26,[\"label label-pill \",[18,\"pillColor\"]]]],[7],[0,\" \"],[1,[20,[\"items\",\"length\"]],false],[0,\" \"],[8],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[1,[18,\"header\"],false],[0,\"\\n            \"],[6,\"label\"],[10,\"class\",[26,[\"label label-pill \",[18,\"pillColor\"]]]],[7],[0,\" \"],[1,[20,[\"items\",\"length\"]],false],[0,\" \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n            \"],[6,\"button\"],[9,\"type\",\"button\"],[10,\"id\",[26,[[18,\"panelId\"],\"-btn\"]]],[10,\"class\",[26,[\"btn btn-xs btn-info pull-right \",[25,\"if\",[[20,[\"editing\"]],\"hidden\"],null]]]],[3,\"action\",[[19,0,[]],\"addItem\",[20,[\"items\"]]]],[7],[0,\"\\n                \"],[1,[25,\"fa-icon\",[\"plus\"],null],false],[0,\" Add\\n            \"],[8],[0,\"\\n            \"],[6,\"button\"],[9,\"type\",\"button\"],[10,\"class\",[26,[\"btn btn-xs btn-info pull-right \",[25,\"unless\",[[20,[\"editing\"]],\"hidden\"],null]]]],[3,\"action\",[[19,0,[]],\"cancelEdit\"]],[7],[0,\"\\n                \"],[6,\"span\"],[9,\"class\",\"fa fa-check\"],[7],[8],[0,\" OK\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"id\",[26,[[18,\"panelId\"]]]],[10,\"class\",[26,[\"panel-collapse \",[25,\"if\",[[20,[\"collapsed\"]],\"collapse\",\"in\"],null]]]],[7],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",[26,[\"panel-body \",[25,\"if\",[[20,[\"condensed\"]],\"condensed\"],null]]]],[7],[0,\"\\n            \"],[6,\"table\"],[10,\"class\",[26,[\"table table-striped table-hover fadeIn \",[25,\"if\",[[20,[\"ellipsis\"]],\"ellipsis\"],null]]]],[7],[0,\"\\n\"],[4,\"unless\",[[20,[\"previewTemplate\"]]],null,{\"statements\":[[0,\"\\n                \"],[6,\"thead\"],[7],[0,\"\\n\"],[4,\"unless\",[[20,[\"hideIndex\"]]],null,{\"statements\":[[0,\"                  \"],[6,\"th\"],[7],[0,\"#\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"each\",[[20,[\"attrTitleArray\"]]],null,{\"statements\":[[0,\"                  \"],[6,\"th\"],[7],[1,[25,\"uc-words\",[[19,4,[]]],null],false],[8],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"                  \"],[6,\"th\"],[7],[8],[0,\"\\n                \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[6,\"tbody\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"items\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"tr\"],[7],[0,\"\\n\"],[4,\"unless\",[[20,[\"hideIndex\"]]],null,{\"statements\":[[0,\"                        \"],[6,\"td\"],[9,\"class\",\"md-table-index\"],[7],[0,\"\\n                          \"],[1,[19,2,[]],false],[0,\"\\n                        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[20,[\"previewTemplate\"]]],null,{\"statements\":[[0,\"                            \"],[6,\"td\"],[9,\"class\",\"property\"],[7],[1,[25,\"component\",[[20,[\"previewTemplate\"]]],[[\"item\",\"index\"],[[19,1,[]],[19,2,[]]]]],false],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"each\",[[20,[\"attrArray\"]]],null,{\"statements\":[[4,\"if\",[[25,\"get\",[[19,1,[]],[19,3,[]]],null]],null,{\"statements\":[[0,\"                                \"],[6,\"td\"],[9,\"class\",\"property\"],[7],[6,\"div\"],[9,\"class\",\"wrap\"],[7],[1,[25,\"get\",[[19,1,[]],[19,3,[]]],null],false],[8],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                                \"],[6,\"td\"],[7],[6,\"em\"],[7],[0,\"Not Defined\"],[8],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[3]},null]],\"parameters\":[]}],[0,\"                        \"],[6,\"td\"],[10,\"class\",[26,[\"md-row-actions \",[25,\"if\",[[20,[\"verticalButtons\"]],\"vertical\"],null]]]],[7],[0,\"\\n                          \"],[6,\"div\"],[9,\"class\",\"btn-toolbar\"],[9,\"role\",\"toolbar\"],[9,\"aria-label\",\"Row Toolbar\"],[7],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",[26,[\"btn-group\",[25,\"if\",[[20,[\"verticalButtons\"]],\"-vertical\"],null]]]],[9,\"role\",\"group\"],[9,\"aria-label\",\"Action Buttons\"],[7],[0,\"\\n                              \"],[6,\"button\"],[9,\"type\",\"button\"],[10,\"class\",[26,[\"btn btn-\",[18,\"btnSize\"],\" btn-danger\"]]],[3,\"action\",[[19,0,[]],\"deleteItem\",[20,[\"items\"]],[19,2,[]]]],[7],[0,\"\\n                                  \"],[6,\"span\"],[9,\"class\",\"fa fa-times\"],[7],[8],[0,\" Delete\\n                              \"],[8],[0,\"\\n\\n                              \"],[6,\"button\"],[9,\"type\",\"button\"],[10,\"class\",[26,[\"btn btn-\",[18,\"btnSize\"],\" btn-success\"]]],[3,\"action\",[[19,0,[]],\"editItem\",[20,[\"items\"]],[19,2,[]]]],[7],[0,\"\\n                                  \"],[1,[25,\"fa-icon\",[\"pencil\"],null],false],[0,\" Edit\\n                              \"],[8],[0,\"\\n                            \"],[8],[0,\"\\n\\n                            \"],[6,\"div\"],[10,\"class\",[26,[\"btn-group\",[25,\"if\",[[20,[\"verticalButtons\"]],\"-vertical\"],null]]]],[9,\"role\",\"group\"],[9,\"aria-label\",\"Row Error\"],[7],[0,\"\\n\"],[4,\"if\",[[19,1,[\"validations\",\"isInvalid\"]]],null,{\"statements\":[[0,\"                              \"],[6,\"span\"],[9,\"class\",\"md-error\"],[7],[0,\"\\n                                \"],[1,[25,\"fa-icon\",[\"exclamation-circle\"],[[\"fixedWidth\"],[true]]],false],[0,\"\\n\"],[4,\"tooltip-on-element\",null,[[\"side\",\"class\"],[\"right\",\"md-tooltip danger\"]],{\"statements\":[[0,\"                                This item has errors.\\n\"]],\"parameters\":[]},null],[0,\"                              \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                              \"],[6,\"span\"],[9,\"class\",\"md-error\"],[7],[0,\"\\n                                \"],[6,\"span\"],[9,\"class\",\"fa fa-fw\"],[7],[8],[0,\"\\n                              \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                            \"],[8],[0,\"\\n                          \"],[8],[0,\"\\n                        \"],[8],[0,\"\\n                    \"],[8],[0,\"\\n\"]],\"parameters\":[1,2]},{\"statements\":[[0,\"                \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[10,\"colspan\",[26,[[25,\"add-em\",[[20,[\"attrArray\",\"length\"]],[25,\"if\",[[20,[\"hideIndex\"]],1,2],null]],null]]]],[7],[0,\"\\n                      \"],[6,\"button\"],[9,\"type\",\"button\"],[10,\"id\",[26,[[18,\"panelId\"],\"-btn\"]]],[9,\"class\",\"btn btn-xs btn-info\"],[3,\"action\",[[19,0,[]],\"addItem\",[20,[\"items\"]]]],[7],[0,\"\\n                          \"],[1,[25,\"fa-icon\",[\"plus\"],null],false],[0,\" \"],[1,[18,\"buttonText\"],false],[0,\"\\n                      \"],[8],[0,\"\\n                    \"],[8],[0,\"\\n                \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                \"],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"object-editor fadeOut\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"editing\"]]],null,{\"statements\":[[0,\"                    \"],[11,5,[[20,[\"saveItem\"]]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[6,\"hr\"],[7],[8],[0,\"\\n                \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-xs btn-info\"],[3,\"action\",[[19,0,[]],\"cancelEdit\"]],[7],[0,\"\\n                    \"],[6,\"span\"],[9,\"class\",\"fa fa-check\"],[7],[8],[0,\" OK\\n                \"],[8],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-object-table/template.hbs" } });
});
define('mdeditor/pods/components/object/md-objectroute-table/component', ['exports', 'mdeditor/pods/components/object/md-object-table/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    typeOf,
    getOwner, isBlank, assert
  } = Ember;

  exports.default = _component.default.extend({
    /**
     * The route used to edit items
     *
     * @property itemRoute
     * @type {String}
     * @required
     */

    /**
     * Method used to load form for editing item. Should be overidden.
     *
     * @method editItem
     */
    editItem() {
      return this;
    },

    layoutName: 'components/object/md-object-table',

    actions: {
      addItem: function addItem() {
        const Template = this.get('templateClass');
        const owner = getOwner(this);

        let editItem = this.get('editItem');
        let items = this.get('items');
        let itm = typeOf(Template) === 'class' ? Template.create(owner.ownerInjection()) : Ember.Object.create({});

        if (isBlank(editItem)) {
          assert(`You must supply an editItem method to ${this.toString()}.`);
        }

        items.pushObject(itm);

        editItem(items.indexOf(itm));
      },

      editItem: function editItem(items, index) {
        this.get('editItem')(index);
      }
    }
  });
});
define('mdeditor/pods/components/object/md-online-resource-array/component', ['exports', 'mdeditor/pods/components/object/md-online-resource/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    A,
    computed
  } = Ember;

  exports.default = Ember.Component.extend({

    init() {
      this._super(...arguments);

      if (!this.get('model')) {
        this.set('model', A());
      }
    },

    /**
     * mdEditor class for input and edit of mdJSON 'onlineResource' object
     * arrays.
     * The class manages the maintenance of an array of online resource
     * objects using the md-object-table class.
     *
     * @module mdeditor
     * @submodule components-object
     * @class md-online-resource-array
     * @constructor
     */

    attributeBindings: ['data-spy'],

    /**
     * mdJSON object containing the 'onlineResource' array.
     *
     * @property model
     * @type Object
     * @required
     */

    /**
     * Display the image picker and preview
     *
     * @property imagePicker
     * @type {Boolean}
     * @default undefined
     */

    /**
     * List of mdJSON 'onlineResource' object attributes to display in
     * md-object-table to aid in choosing the onlineResource to edit or
     * delete.
     * The property is passed to md-object-table for configuration.
     *
     * @property attributes
     * @type String
     * @default 'name, uri'
     */
    attributes: 'name,uri',

    /**
     * Name to place on the mdEditor panel header for entry and edit of
     * 'onlineResource' objects.
     * The property is passed to md-object-table for configuration.
     *
     * @property label
     * @type String
     * @default 'Online Resource'
     */
    label: 'Online Resource',

    /**
     * If true, a box shadow will be rendered around the card.
     *
     * @property shadow
     * @type {Boolean}
     * @default true
     */
    shadow: true,

    /**
     * The template to use for the preview table rows. If not overridden, will use
     * the `md-image-preview` template if `imagePicker = true`.
     *
     * @property previewTemplate
     * @type {String}
     * @readOnly
     * @category computed
     * @requires imagePicker
     */
    previewTemplate: computed('imagePicker', function () {
      return this.get('imagePicker') ? "object/md-online-resource-array/md-image-preview" : null;
    }),

    /**
     * See [md-array-table](md-array-table.html#property_templateClass).
     *
     * @property templateClass
     * @type Ember.Object
     */
    templateClass: Ember.Object.extend(_component.Validations, {
      init() {
        this._super(...arguments);
        //this.set('uri', null);
      }
    })
  });
});
define("mdeditor/pods/components/object/md-online-resource-array/md-image-preview/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Oa9Cav/W", "block": "{\"symbols\":[],\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"md-preview-image text-center\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"item\",\"uri\"]]],null,{\"statements\":[[0,\"    \"],[6,\"img\"],[10,\"src\",[26,[[20,[\"item\",\"uri\"]]]]],[9,\"class\",\"img-responsive img-thumbnail\"],[9,\"alt\",\"Image Preview\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    URI Not Defined\\n\"]],\"parameters\":[]}],[0,\"  \"],[8],[0,\"\\n\"],[6,\"dl\"],[9,\"class\",\"dl-horizontal\"],[7],[0,\"\\n  \"],[6,\"dt\"],[7],[0,\"Name\"],[8],[0,\"\\n  \"],[6,\"dd\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"wrap\"],[7],[1,[25,\"if\",[[20,[\"item\",\"name\"]],[20,[\"item\",\"name\"]],\"<em>Not Defined</em>\"],null],true],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"dt\"],[7],[0,\"URI\"],[8],[0,\"\\n  \"],[6,\"dd\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"wrap\"],[7],[1,[25,\"if\",[[20,[\"item\",\"uri\"]],[20,[\"item\",\"uri\"]],\"<em>Not Defined</em>\"],null],true],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-online-resource-array/md-image-preview/template.hbs" } });
});
define("mdeditor/pods/components/object/md-online-resource-array/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "x3nAq5NX", "block": "{\"symbols\":[\"editing\",\"&default\"],\"statements\":[[4,\"object/md-object-table\",null,[[\"items\",\"header\",\"shadow\",\"buttonText\",\"ellipsis\",\"previewTemplate\",\"templateClass\",\"attributes\"],[[20,[\"model\"]],[20,[\"label\"]],[20,[\"shadow\"]],\"Add Resource\",[20,[\"ellipsis\"]],[20,[\"previewTemplate\"]],[20,[\"templateClass\"]],[20,[\"attributes\"]]]],{\"statements\":[[0,\"    Editing: \"],[1,[19,1,[\"name\"]],false],[0,\"\\n\\n    \"],[1,[25,\"object/md-online-resource\",null,[[\"imagePicker\",\"model\",\"profilePath\"],[[20,[\"imagePicker\"]],[19,1,[]],[20,[\"profilePath\"]]]]],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null],[11,2],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-online-resource-array/template.hbs" } });
});
define('mdeditor/pods/components/object/md-online-resource/component', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.regex = exports.Validations = undefined;


  const {
    Component,
    getOwner,
    Object: EmObject,
    set,
    inject,
    // isArray,
    // merge,
    get
  } = Ember;

  const regex = new RegExp("([A-Za-z][A-Za-z0-9+\\-.]*):(?:(//)(?:((?:[A-Za-z0-9\\-._~!$&'()*+,;=:]|%[0-9A-Fa-f]{2})*)@)?((?:\\[(?:(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}|::(?:[0-9A-Fa-f]{1,4}:){5}|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,1}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::)(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|[Vv][0-9A-Fa-f]+\\.[A-Za-z0-9\\-._~!$&'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:[A-Za-z0-9\\-._~!$&'()*+,;=]|%[0-9A-Fa-f]{2})*))(?::([0-9]*))?((?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)|/((?:(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)?)|((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)|)(?:\\?((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})*))?(?:\\#((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})*))?");

  const Validations = (0, _emberCpValidations.buildValidations)({
    'uri': [(0, _emberCpValidations.validator)('format', {
      regex: regex,
      isWarning: true,
      message: 'This field should be a valid, resolvable uri.'
    }), (0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true
    })]
  });

  const theComp = Component.extend({
    init() {
      this._super(...arguments);

      let plain = this.get('model');

      if (plain && !get(plain, 'validations')) {
        const Model = EmObject.extend(Validations, plain);
        const owner = getOwner(this);

        let model = Model.create(owner.ownerInjection(), plain);
        this.set('model', model);
      }
    },

    flashMessages: inject.service(),
    classNames: ['md-online-resource'],
    attributeBindings: ['data-spy'],

    /**
     * Display the image picker and preview
     *
     * @property imagePicker
     * @type {Boolean}
     * @default undefined
     */

    actions: {
      handleFile(file) {
        if (file.size > 50000) {
          get(this, 'flashMessages').danger(`The image exceeded the maximum size of 50KB: ${file.size} bytes.
            Please use an online URL to load the image.`);
        } else {
          let model = this.get('model');

          set(model, 'name', file.name);
          set(model, 'uri', file.data);

          if (file.size > 25000) {
            get(this, 'flashMessages').warning(`The image exceeded the recommended size of 25KB: ${file.size} bytes`);
          }
          //reset the input field
          //this.$('.import-file-picker input:file').val('');
        }
      }
    }
  });

  exports.Validations = Validations;
  exports.regex = regex;
  exports.default = theComp;
});
define("mdeditor/pods/components/object/md-online-resource/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uW9bFhCp", "block": "{\"symbols\":[\"&default\"],\"statements\":[[1,[25,\"input/md-input\",null,[[\"value\",\"label\",\"placeholder\",\"profilePath\"],[[20,[\"model\",\"name\"]],\"Name\",\"Online Resource Name\",[25,\"concat\",[[20,[\"profilePath\"]],\".name\"],null]]]],false],[0,\"\\n\\n\"],[0,\"\\n\"],[1,[25,\"input/md-input\",null,[[\"type\",\"valuePath\",\"model\",\"profilePath\",\"label\",\"placeholder\"],[\"url\",\"uri\",[20,[\"model\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".url\"],null],\"URI\",\"Online Resource URI\"]]],false],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"imagePicker\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-sm-6\"],[7],[0,\"\\n\"],[4,\"file-picker\",null,[[\"class\",\"fileLoaded\",\"preview\",\"accept\",\"readAs\"],[\"md-file-picker text-center\",\"handleFile\",false,\".jpeg,.jpg,.png,.gif,.svg\",\"readAsDataURL\"]],{\"statements\":[[0,\"        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-lg btn-info\"],[7],[0,\"\\n          \"],[1,[25,\"fa-icon\",[\"bullseye\"],null],false],[0,\" Click to Select or Drop Image\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-6\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"md-preview-image text-center\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"model\",\"uri\"]]],null,{\"statements\":[[0,\"            \"],[6,\"img\"],[10,\"src\",[26,[[20,[\"model\",\"uri\"]]]]],[9,\"class\",\"img-responsive img-thumbnail\"],[9,\"alt\",\"Image Preview\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            Enter URI or select file to preview.\\n\"]],\"parameters\":[]}],[0,\"    \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[1,[25,\"input/md-input\",null,[[\"value\",\"profilePath\",\"label\",\"placeholder\"],[[20,[\"model\",\"protocol\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".protocol\"],null],\"Protocol\",\"Protocol for accessing the Online Resource\"]]],false],[0,\"\\n\\n\"],[1,[25,\"input/md-textarea\",null,[[\"maxlength\",\"value\",\"label\",\"profilePath\",\"placeholder\"],[500,[20,[\"model\",\"description\"]],\"Description\",[25,\"concat\",[[20,[\"profilePath\"]],\".description\"],null],\"Description of the Online Resource: Less than 500 characters\"]]],false],[0,\"\\n\\n\"],[1,[25,\"input/md-codelist\",null,[[\"value\",\"mdCodeName\",\"label\",\"placeholder\",\"profilePath\",\"tooltip\",\"allowClear\",\"width\"],[[20,[\"model\",\"function\"]],\"onlineFunction\",\"Function\",\"Select function of the Online Resource\",[25,\"concat\",[[20,[\"profilePath\"]],\".onlineFunction\"],null],true,true,\"70%\"]]],false],[0,\"\\n\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-online-resource/template.hbs" } });
});
define('mdeditor/pods/components/object/md-party-array/component', ['exports', 'mdeditor/pods/components/object/md-party/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend({
    attributeBindings: ['data-spy'],

    /**
     * See [md-array-table](md-array-table.html#property_templateClass).
     *
     * @property templateClass
     * @type Ember.Object
     */
    templateClass: _component.Template
  });
});
define("mdeditor/pods/components/object/md-party-array/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "s011dWW5", "block": "{\"symbols\":[\"party\",\"item\"],\"statements\":[[4,\"object/md-array-table\",null,[[\"columns\",\"title\",\"required\",\"plain\",\"value\",\"validation\",\"data-spy\",\"templateClass\"],[\"Role,Contacts\",[20,[\"title\"]],[20,[\"required\"]],[20,[\"plain\"]],[20,[\"value\"]],[20,[\"validation\"]],false,[20,[\"templateClass\"]]]],{\"statements\":[[4,\"with\",[[19,1,[\"item\"]]],null,{\"statements\":[[0,\"     \"],[6,\"td\"],[7],[0,\"\\n       \"],[1,[25,\"input/md-codelist\",null,[[\"path\",\"model\",\"create\",\"tooltip\",\"icon\",\"disabled\",\"mdCodeName\",\"showValidations\",\"placeholder\"],[\"role\",[19,2,[]],true,true,false,[20,[\"disabled\"]],\"role\",true,\"Select or enter a role\"]]],false],[0,\"\\n     \"],[8],[0,\"\\n     \"],[6,\"td\"],[7],[0,\"\\n       \"],[1,[25,\"input/md-select-contacts\",null,[[\"placeholder\",\"model\",\"path\",\"icon\",\"tooltip\",\"showValidations\"],[\"Select one or more contacts\",[19,2,[]],\"contacts\",true,true,true]]],false],[0,\"\\n     \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-party-array/template.hbs" } });
});
define('mdeditor/pods/components/object/md-party/component', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.Template = exports.Validations = undefined;
  var Component = Ember.Component;
  var EmberObject = Ember.Object;
  var A = Ember.A;
  var once = Ember.run.once;
  var alias = Ember.computed.alias;
  var computed = Ember.computed;
  var get = Ember.get;
  var getWithDefault = Ember.getWithDefault;
  var set = Ember.set;


  const Validations = (0, _emberCpValidations.buildValidations)({
    'role': [(0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true
    })],
    'contacts': (0, _emberCpValidations.validator)('length', {
      min: 1,
      message: 'At least one contact is required.'
    })
  });

  const Template = EmberObject.extend(Validations, {
    init() {
      this._super(...arguments);
      this.set('party', A());
      this.set('role', null);
    },
    contacts: computed('party', {
      get() {
        let party = get(this, 'party');
        return party.mapBy('contactId');
      },
      set(key, value) {
        let map = value.map(itm => {
          return {
            contactId: itm
          };
        });
        set(this, 'party', map);
        return value;
      }
    })
  });

  const theComp = Component.extend(Validations, {
    contacts: computed('model', {
      get() {
        let party = get(this, 'model.party');
        return party ? party.mapBy('contactId') : [];
      },
      set(key, value) {
        let map = value.map(itm => {
          return {
            contactId: itm
          };
        });
        set(this, 'model.party', map);
        return value;
      }
    }),

    role: alias('model.role'),
    didReceiveAttrs() {
      this._super(...arguments);

      let model = this.get('model');

      once(this, function () {
        set(model, 'party', getWithDefault(model, 'party', []));
        set(model, 'role', getWithDefault(model, 'role', null));
      });
    },

    attributeBindings: ['data-spy'],
    templateClass: Template
  });

  exports.Validations = Validations;
  exports.Template = Template;
  exports.default = theComp;
});
define("mdeditor/pods/components/object/md-party/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LtMMYRZt", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"input/md-codelist\",null,[[\"label\",\"path\",\"model\",\"create\",\"tooltip\",\"icon\",\"disabled\",\"mdCodeName\",\"showValidations\",\"placeholder\"],[\"Role\",\"role\",[19,0,[]],true,true,false,[20,[\"disabled\"]],\"role\",true,\"Select or enter a role\"]]],false],[0,\"\\n\"],[1,[25,\"input/md-select-contacts\",null,[[\"label\",\"placeholder\",\"model\",\"path\",\"icon\",\"tooltip\",\"showValidations\"],[\"Contacts\",\"Select one or more contacts\",[19,0,[]],\"contacts\",true,true,true]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-party/template.hbs" } });
});
define('mdeditor/pods/components/object/md-phone-array/component', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Object: EmObject,
    A
  } = Ember;

  const Validations = (0, _emberCpValidations.buildValidations)({
    'phoneNumber': [(0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true
    }), (0, _emberCpValidations.validator)('format', {
      type: 'phone',
      isWarning: true,
      message: 'This field should be a valid phone number.'
    })]
  });

  exports.default = Ember.Component.extend({

    /**
     * mdEditor class for input and edit of mdJSON 'phone' object.
     * The class manages the maintenance of an array of phone objects.
     *
     * @class md-phone-array
     * @module mdeditor
     * @submodule components-object
     * @constructor
     */

    attributeBindings: ['data-spy'],

    /**
     * See [md-array-table](md-array-table.html#property_templateClass).
     *
     * @property templateClass
     * @type Ember.Object
     */
    templateClass: EmObject.extend(Validations, {
      init() {
        this._super(...arguments);
        this.set('service', A());
      }
    })

  });
});
define("mdeditor/pods/components/object/md-phone-array/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "teAjYtBE", "block": "{\"symbols\":[\"phone\"],\"statements\":[[4,\"object/md-array-table\",null,[[\"columns\",\"title\",\"value\",\"validation\",\"data-spy\",\"templateClass\"],[\"Name,Number,Services\",\"Phone\",[20,[\"value\"]],[20,[\"validation\"]],null,[20,[\"templateClass\"]]]],{\"statements\":[[0,\"  \"],[6,\"td\"],[7],[0,\"\\n      \"],[1,[25,\"input/md-input\",null,[[\"value\",\"placeholder\"],[[19,1,[\"item\",\"phoneName\"]],\"Name or location or phone\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"td\"],[7],[0,\"\\n      \"],[1,[25,\"input/md-input\",null,[[\"valuePath\",\"model\",\"showValidations\",\"placeholder\"],[\"phoneNumber\",[19,1,[\"item\"]],true,\"Phone number\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"td\"],[7],[0,\"\\n    \"],[1,[25,\"input/md-codelist-multi\",null,[[\"create\",\"tooltip\",\"icon\",\"disabled\",\"allowClear\",\"mdCodeName\",\"value\",\"placeholder\"],[true,true,false,[20,[\"disabled\"]],true,\"telephone\",[19,1,[\"item\",\"service\"]],\"Choose phone type\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-phone-array/template.hbs" } });
});
define('mdeditor/pods/components/object/md-process-step/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    set,
    get,
    getWithDefault,
    run: {
      once
    }
  } = Ember;

  exports.default = Component.extend({
    init() {
      this._super(...arguments);

      let model = get(this, 'model');

      once(this, function () {
        set(model, 'timePeriod', getWithDefault(model, 'timePeriod', {}));
      });
    },

    didReceiveAttrs() {
      this._super(...arguments);

      let model = get(this, 'model');

      once(this, function () {
        set(model, 'stepId', getWithDefault(model, 'stepId', get(this, 'itemId')));
        set(model, 'timePeriod', getWithDefault(model, 'timePeriod', {}));
        set(model, 'scope', getWithDefault(model, 'scope', {}));
        set(model, 'reference', getWithDefault(model, 'reference', []));
        set(model, 'processor', getWithDefault(model, 'processor', []));
        set(model, 'stepSource', getWithDefault(model, 'stepSource', []));
        set(model, 'stepProduct', getWithDefault(model, 'stepProduct', []));
      });
    },

    tagName: 'form',

    /**
     * The string representing the path in the profile object for the processStep.
     *
     * @property profilePath
     * @type {String}
     * @default "false"
     * @required
     */

    /**
     * The object to use as the data model for the processStep.
     *
     * @property model
     * @type {Object}
     * @required
     */

    sourceTemplate: Ember.Object.extend()
  });
});
define("mdeditor/pods/components/object/md-process-step/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Rln1UMhe", "block": "{\"symbols\":[\"source\",\"source\",\"&default\"],\"statements\":[[1,[25,\"input/md-input\",null,[[\"value\",\"model\",\"valuePath\",\"label\",\"data-spy\",\"placeholder\",\"required\",\"profilePath\"],[[20,[\"model\",\"stepId\"]],null,null,\"Step ID\",\"Step ID\",\"Enter an identifer for the step.\",false,[25,\"concat\",[[20,[\"profilePath\"]],\".stepId\"],null]]]],false],[0,\"\\n\\n\"],[1,[25,\"input/md-textarea\",null,[[\"value\",\"required\",\"profilePath\",\"label\",\"placeholder\",\"data-spy\",\"showValidations\"],[[20,[\"model\",\"description\"]],true,[25,\"concat\",[[20,[\"profilePath\"]],\".description\"],null],\"Description\",\"Description of the process or methodology step.\",\"Step Description\",true]]],false],[0,\"\\n\\n\"],[4,\"object/md-array-table\",null,[[\"columns\",\"value\",\"title\",\"templateClass\",\"profilePath\",\"data-spy\"],[\"Description\",[20,[\"model\",\"stepSource\"]],\"Step Source\",[20,[\"sourceTemplate\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".stepSource\"],null],\"Step Source\"]],{\"statements\":[[0,\"  \"],[6,\"td\"],[7],[0,\"\\n    \"],[1,[25,\"input/md-textarea\",null,[[\"value\",\"placeholder\"],[[19,2,[\"item\",\"value\"]],\"Information about the source data used in the process step.\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"],[4,\"object/md-array-table\",null,[[\"columns\",\"value\",\"title\",\"templateClass\",\"profilePath\",\"data-spy\"],[\"Description\",[20,[\"model\",\"stepProduct\"]],\"Step Product\",[20,[\"sourceTemplate\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".stepProduct\"],null],\"Step Product\"]],{\"statements\":[[0,\"  \"],[6,\"td\"],[7],[0,\"\\n    \"],[1,[25,\"input/md-textarea\",null,[[\"value\",\"placeholder\"],[[19,1,[\"item\",\"value\"]],\"Information about an intermediate data set that (1) is significant in the opinion of the data producer, (2) is generated in the processing step, and (3) is used in later processing steps.\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"],[1,[25,\"object/md-party-array\",null,[[\"title\",\"data-spy\",\"class\",\"collapsible\",\"collapsed\",\"required\",\"value\",\"profilePath\"],[\"Processors\",\"Processors\",[25,\"if\",[[20,[\"embedded\"]],\"md-embedded\"],null],true,false,false,[20,[\"model\",\"processor\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".processor\"],null]]]],false],[0,\"\\n\\n\"],[1,[25,\"object/md-citation-array\",null,[[\"model\",\"profilePath\",\"data-spy\",\"editItem\",\"label\"],[[20,[\"model\",\"reference\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".reference\"],null],\"Step Reference\",[20,[\"editCitation\"]],\"Step Reference\"]]],false],[0,\"\\n\\n\"],[1,[25,\"object/md-time-period\",null,[[\"model\",\"profilePath\",\"data-spy\",\"label\"],[[20,[\"model\",\"timePeriod\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".timePeriod\"],null],\"Time Period\",\"Time Period\"]]],false],[0,\"\\n\\n\"],[1,[25,\"input/md-codelist\",null,[[\"value\",\"label\",\"create\",\"tooltip\",\"icon\",\"mdCodeName\",\"closeOnSelect\",\"placeholder\",\"profilePath\",\"data-spy\"],[[20,[\"model\",\"scope\",\"scopeCode\"]],\"Scope\",true,true,true,\"scope\",false,\"Select type of resource.\",[25,\"concat\",[[20,[\"profilePath\"]],\".scope\"],null],\"Scope\"]]],false],[0,\"\\n\"],[11,3],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-process-step/template.hbs" } });
});
define('mdeditor/pods/components/object/md-repository-array/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  const {
    Component,
    get,
    set,
    inject
  } = Ember;

  exports.default = Component.extend({
    settings: inject.service(),
    repositoryTemplate: Ember.Object.extend({
      init() {
        this._super(...arguments);

        this.set('citation', {});
      }
    }),
    actions: {
      lookupTitle(value) {
        let defs = this.get('settings.data.repositoryDefaults');
        let titles = defs.filterBy('repository', value.repository);

        if (get(titles, 'length')) {

          set(value, 'citation.title', get(titles.objectAt(0), 'title'));
        }
      }
    }
  });
});
define("mdeditor/pods/components/object/md-repository-array/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RvSygWRr", "block": "{\"symbols\":[\"meta\",\"&default\"],\"statements\":[[4,\"object/md-array-table\",null,[[\"columns\",\"value\",\"plain\",\"data-spy\",\"title\",\"templateClass\"],[\"Repository, Collection Title\",[20,[\"value\"]],[20,[\"plain\"]],[20,[\"data-spy\"]],\"Metadata Repository\",[20,[\"repositoryTemplate\"]]]],{\"statements\":[[0,\"  \"],[6,\"td\"],[7],[0,\"\\n    \"],[1,[25,\"input/md-codelist\",null,[[\"value\",\"create\",\"tooltip\",\"icon\",\"mdCodeName\",\"closeOnSelect\",\"placeholder\",\"change\"],[[19,1,[\"item\",\"repository\"]],true,true,false,\"metadataRepository\",true,\"Select or enter a repository.\",[25,\"action\",[[19,0,[]],\"lookupTitle\",[19,1,[\"item\"]]],null]]]],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"td\"],[7],[0,\"\\n    \"],[1,[25,\"input/md-input\",null,[[\"type\",\"value\",\"placeholder\"],[\"text\",[19,1,[\"item\",\"citation\",\"title\"]],\"Text string used to identify a set of resources in the repository.\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[11,2],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-repository-array/template.hbs" } });
});
define('mdeditor/pods/components/object/md-resource-type-array/component', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Object: EmObject
  } = Ember;

  const Validations = (0, _emberCpValidations.buildValidations)({
    'type': [(0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true
    })]
  });

  exports.default = Ember.Component.extend({

    /**
     * mdEditor class for input and edit of mdJSON 'phone' object.
     * The class manages the maintenance of an array of phone objects.
     *
     * @class md-phone-array
     * @module mdeditor
     * @submodule components-object
     * @constructor
     */

    attributeBindings: ['data-spy'],

    /**
     * See [md-array-table](md-array-table.html#property_templateClass).
     *
     * @property templateClass
     * @type Ember.Object
     */
    templateClass: EmObject.extend(Validations, {
      init() {
        this._super(...arguments);
      }
    })

  });
});
define("mdeditor/pods/components/object/md-resource-type-array/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cNdAxCZ+", "block": "{\"symbols\":[\"type\",\"item\"],\"statements\":[[4,\"object/md-array-table\",null,[[\"columns\",\"title\",\"data-spy\",\"value\",\"validation\",\"plain\",\"required\",\"templateClass\"],[\"Type, Name\",\"Resource Type\",false,[20,[\"value\"]],[20,[\"validation\"]],[20,[\"plain\"]],[20,[\"required\"]],[20,[\"templateClass\"]]]],{\"statements\":[[0,\"  \"],[6,\"td\"],[7],[0,\"\\n\"],[4,\"with\",[[19,1,[\"item\"]]],null,{\"statements\":[[0,\"    \"],[1,[25,\"input/md-codelist\",null,[[\"create\",\"tooltip\",\"icon\",\"disabled\",\"allowClear\",\"mdCodeName\",\"showValidations\",\"model\",\"path\",\"placeholder\"],[true,true,true,[20,[\"disabled\"]],true,\"scope\",true,[19,2,[]],\"type\",\"Choose type of resource\"]]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"  \"],[8],[0,\"\\n  \"],[6,\"td\"],[7],[0,\"\\n    \"],[1,[25,\"input/md-input\",null,[[\"value\",\"placeholder\"],[[19,1,[\"item\",\"name\"]],\"Name of resource\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-resource-type-array/template.hbs" } });
});
define('mdeditor/pods/components/object/md-simple-array-table/component', ['exports', 'mdeditor/pods/components/object/md-array-table/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    computed,
    observer
  } = Ember;

  exports.default = _component.default.extend({
    /**
     * mdEditor component for input and edit of arrays of scalars. The
     * component is rendered as an editable table.
     *
     * ```handlebars
     * {{#object/md-simple-array-table
     *   title="Simple"
     *   required=false
     *   plain=true
     *   value=model as |val|
     * }}
     *   <td>
     *       {{input/md-input value=val.item.value
     *       placeholder="Enter value"}}
     *   </td>
     * {{/object/md-simple-array-table}}
     * ```
     * @class md-simple-array-table
     * @module mdeditor
     * @submodule components-object
     * @extends md-array-table
     * @constructor
     */

    layoutName: 'components/object/md-array-table',

    /**
     * Convert the input 'primitive' array to an 'ember' array of objects
     *
     * @property arrayValues
     * @type {Array}
     * @category computed
     * @requires value.[]
     */
    arrayValues: computed('value.[]', {
      get() {
        let items = this.get('value');

        if (items === undefined) {
          items = [];
          items[0] = '';
        }

        return items.reduce(function (acc, value) {
          acc.pushObject({
            value: value
          });
          return acc;
        }, []);
      },

      set(key, value) {
        this.set('value', value.filterBy('value').mapBy('value'));
        return value;
      }
    }),

    /**
     * Set the value when arrayValues is updated
     *
     * @property valuesObserver
     * @type {Observer}
     * @category computed
     * @requires arrayValues.@each.value
     */
    valuesObserver: observer('arrayValues.@each.value', function () {
      this.set('arrayValues', this.get('arrayValues'));
    })
  });
});
define('mdeditor/pods/components/object/md-spatial-extent/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  /* global L */

  const {
    Component,
    computed,
    observer,
    computed: {
      alias,
      or
    },
    setProperties,
    isNone
  } = Ember;

  const {
    isNaN: isNan
  } = Number;

  exports.default = Component.extend({
    isTrulyNone(val) {
      return isNone(val) || isNan(val);
    },

    bboxPoly: computed('bbox', 'bbox.northLatitude', 'bbox.southLatitude', 'bbox.eastLongitude', 'bbox.westLongitude', function () {
      let bbox = this.get('bbox');

      if (this.isTrulyNone(bbox.southLatitude) || this.isTrulyNone(bbox.westLongitude) || this.isTrulyNone(bbox.northLatitude) || this.isTrulyNone(bbox.eastLongitude)) {
        return null;
      }

      return [[bbox.southLatitude, bbox.westLongitude], [bbox.northLatitude, bbox.westLongitude], [bbox.northLatitude, bbox.eastLongitude], [bbox.southLatitude, bbox.eastLongitude]];
    }),

    bboxPolyObserver: observer('bboxPoly', function () {
      let map = this.get('map');
      let bbox = this.get('bboxPoly');

      if (map && bbox) {
        this.setupMap({
          target: map
        });
      }
    }),

    bbox: alias('extent.geographicExtent.0.boundingBox'),
    geographicElement: alias('extent.geographicExtent.0.geographicElement'),
    showMap: or('bboxPoly', 'geographicElement'),
    setupMap(m) {
      let map = m.target;
      let geo = this.get('geographicElement') || [];
      let bbox = this.get('bboxPoly');
      let features;

      features = bbox ? geo.concat([L.rectangle(bbox).toGeoJSON()]) : [].concat(geo);

      let bounds = L.geoJson(features).getBounds();

      map.fitBounds(bounds);

      this.set('map', map);
    },
    actions: {
      calculateBox() {
        let geo = this.get('geographicElement');

        if (!(geo && geo.length)) {
          return null;
        }

        let bounds = L.geoJson(geo).getBounds();
        let bbox = this.get('bbox');

        setProperties(bbox, {
          northLatitude: bounds.getNorth(),
          southLatitude: bounds.getSouth(),
          eastLongitude: bounds.getEast(),
          westLongitude: bounds.getWest()
        });
      }
    }
  });
});
define("mdeditor/pods/components/object/md-spatial-extent/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ftareZnT", "block": "{\"symbols\":[\"l\"],\"statements\":[[4,\"layout/md-card\",null,[[\"title\",\"collapsible\",\"collapsed\",\"data-spy\",\"shadow\",\"spotlightEnabled\"],[[25,\"concat\",[\"Geographic Extent #\",[20,[\"index\"]]],null],true,false,false,true,false]],{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"card-buttons\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-sm-6\"],[7],[0,\"\\n          \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-md btn-success btn-block md-btn-responsive\"],[3,\"action\",[[19,0,[]],[25,\"route-action\",[\"editExtent\",[20,[\"index\"]]],null]]],[7],[0,\"\\n            \"],[1,[25,\"fa-icon\",[\"pencil\"],null],false],[0,\" Edit Extent Features\"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-sm-6\"],[7],[0,\"\\n          \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-md btn-danger btn-block md-btn-responsive\"],[3,\"action\",[[19,0,[]],[25,\"route-action\",[\"deleteExtent\",[20,[\"index\"]]],null]]],[7],[0,\"\\n              \"],[1,[25,\"fa-icon\",[\"times\"],null],false],[0,\" Delete Extent\"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-sm-6\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-xxxl-6\"],[7],[0,\"\\n          \"],[6,\"label\"],[7],[0,\"Bounding Box\"],[8],[0,\"\\n\"],[4,\"object/md-bbox\",null,[[\"model\",\"profilePath\"],[[20,[\"bbox\"]],\"record.extent.bbox\"]],{\"statements\":[[4,\"if\",[[20,[\"geographicElement\",\"length\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"\"],[7],[0,\"\\n              \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-primary\"],[3,\"action\",[[19,0,[]],\"calculateBox\"]],[7],[0,\"Calculate\"],[8],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-xxxl-6 md-extent-description\"],[7],[0,\"\\n          \"],[1,[25,\"input/md-textarea\",null,[[\"value\",\"rows\",\"maxHeight\",\"placeholder\",\"label\"],[[20,[\"extent\",\"description\"]],5,300,\"Description of extent\",\"Description\"]]],false],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-sm-6 md-extent-map\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"showMap\"]]],null,{\"statements\":[[4,\"leaflet-map\",null,[[\"lat\",\"lng\",\"zoom\",\"maxZoom\",\"onLoad\"],[0,0,2,18,[25,\"action\",[[19,0,[]],[20,[\"setupMap\"]]],null]]],{\"statements\":[[4,\"layer-group\",null,[[\"name\",\"baselayer\",\"default\"],[\"Terrain\",true,true]],{\"statements\":[[0,\"            \"],[1,[25,\"tile-layer\",null,[[\"url\",\"attribution\"],[\"http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.png\",[20,[\"mapAttribution\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"geographicElement\",\"length\"]]],null,{\"statements\":[[4,\"feature-group\",null,[[\"name\",\"default\"],[\"Features\",true]],{\"statements\":[[4,\"each\",[[20,[\"geographicElement\"]]],null,{\"statements\":[[0,\"              \"],[1,[25,\"geojson-layer\",null,[[\"geoJSON\"],[[19,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"bboxPoly\"]]],null,{\"statements\":[[4,\"feature-group\",null,[[\"name\",\"default\"],[\"Bounding Box\",true]],{\"statements\":[[0,\"                \"],[1,[25,\"polygon-layer\",null,[[\"locations\",\"color\",\"fillOpacity\"],[[20,[\"bboxPoly\"]],\"#29abe0\",0]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n          \"],[1,[18,\"layer-control\"],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"alert alert-info\"],[7],[0,\"\\n          No Features to display.\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-spatial-extent/template.hbs" } });
});
define('mdeditor/pods/components/object/md-spatial-info/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    get,
    run: {
      once
    },
    getWithDefault,
    set
  } = Ember;

  exports.default = Component.extend({
    didReceiveAttrs() {
      this._super(...arguments);

      let model = get(this, 'model');

      once(this, function () {
        set(model, 'spatialReferenceSystem', getWithDefault(model, 'spatialReferenceSystem', []));
        set(model, 'spatialRepresentationType', getWithDefault(model, 'spatialRepresentationType', []));
        set(model, 'spatialResolution', getWithDefault(model, 'spatialResolution', []));
      });
    },
    /**
     * The string representing the path in the profile object for the resource.
     *
     * @property profilePath
     * @type {String}
     * @default 'false'
     * @required
     */

    /**
     * The object to use as the data model for the resource.
     *
     * @property model
     * @type {Object}
     * @required
     */

    tagName: 'form'
  });
});
define("mdeditor/pods/components/object/md-spatial-info/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "TPfkCBvW", "block": "{\"symbols\":[\"editing\",\"editing\",\"&default\"],\"statements\":[[1,[25,\"input/md-codelist-multi\",null,[[\"value\",\"create\",\"tooltip\",\"icon\",\"mdCodeName\",\"closeOnSelect\",\"placeholder\",\"label\",\"profilePath\"],[[20,[\"model\",\"spatialRepresentationType\"]],true,true,false,\"spatialRepresentation\",false,\"Select method used to represent geographic information\",\"Spatial Representation Type\",[25,\"concat\",[[20,[\"profilePath\"]],\".spatialRepresentationType\"],null]]]],false],[0,\"\\n\\n\"],[4,\"object/md-object-table\",null,[[\"items\",\"header\",\"buttonText\",\"ellipsis\",\"profilePath\",\"attributes\"],[[20,[\"model\",\"spatialReferenceSystem\"]],\"Spatial Reference System\",\"Add Reference System\",true,[25,\"concat\",[[20,[\"profilePath\"]],\".spatialReferenceSystem\"],null],\"referenceSystemType,referenceSystemIdentifier.identifier\"]],{\"statements\":[[0,\"  \"],[1,[25,\"object/md-srs\",null,[[\"model\",\"profilePath\"],[[19,2,[]],[25,\"concat\",[[20,[\"profilePath\"]],\".spatialReferenceSystem\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"],[4,\"object/md-object-table\",null,[[\"items\",\"header\",\"buttonText\",\"ellipsis\",\"profilePath\",\"attributes\"],[[20,[\"model\",\"spatialResolution\"]],\"Spatial Resolution\",\"Add Spatial Resolution\",true,[25,\"concat\",[[20,[\"profilePath\"]],\".spatialResolution\"],null],\"scaleFactor,levelOfDetail,measure.type\"]],{\"statements\":[[0,\"  \"],[1,[25,\"object/md-spatial-resolution\",null,[[\"model\",\"profilePath\"],[[19,1,[]],[25,\"concat\",[[20,[\"profilePath\"]],\".spatialResolution\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"],[11,3],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-spatial-info/template.hbs" } });
});
define('mdeditor/pods/components/object/md-spatial-resolution/component', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    computed,
    isEmpty,
    computed: {
      alias, or
    },
    get,
    run: {
      once
    },
    getWithDefault,
    set
  } = Ember;

  const Validations = (0, _emberCpValidations.buildValidations)({
    'scaleFactor': {
      disabled: alias('model.scaleDisabled'),
      validators: [(0, _emberCpValidations.validator)('presence', {
        presence: true,
        ignoreBlank: true
      }), (0, _emberCpValidations.validator)('number', {
        integer: true,
        allowBlank: true,
        positive: true,
        gt: 0
      })]
    },
    'levelOfDetail': [(0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true,
      disabled: alias('model.levelDisabled')
    })],
    'measure': [(0, _emberCpValidations.validator)('dependent', {
      on: ['measureType', 'measureValue', 'measureUnit']
    })],
    'measureType': [(0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true
    })],
    'measureUnit': [(0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true
    })],
    'measureValue': [(0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true
    })]
  });

  exports.default = Component.extend(Validations, {
    didReceiveAttrs() {
      this._super(...arguments);

      let model = get(this, 'model');

      once(this, function () {
        set(model, 'measure', getWithDefault(model, 'measure', {}));
      });
    },
    /**
     * The string representing the path in the profile object for the resource.
     *
     * @property profilePath
     * @type {String}
     * @default 'false'
     * @required
     */

    /**
     * The object to use as the data model for the resource.
     *
     * @property model
     * @type {Object}
     * @required
     */

    classNames: ['form'],
    scaleFactor: alias('model.scaleFactor'),
    scaleDisabled: computed('model.levelOfDetail', 'measurePresent', function () {
      return !isEmpty(this.get('model.levelOfDetail')) || this.get('measurePresent');
    }),
    levelOfDetail: alias('model.levelOfDetail'),
    levelDisabled: computed('model.scaleFactor', 'measurePresent', function () {
      let scaleFactor = this.get('model.scaleFactor');
      return !isEmpty(scaleFactor) && !Number.isNaN(scaleFactor) || this.get('measurePresent');
    }),
    measure: alias('model.measure'),
    measureDisabled: computed('model.scaleFactor', 'model.levelOfDetail', function () {
      let scaleFactor = this.get('model.scaleFactor');
      return !isEmpty(scaleFactor) && !Number.isNaN(scaleFactor) || !isEmpty(this.get('model.levelOfDetail'));
    }),
    measureType: alias('model.measure.type'),
    measureValue: alias('model.measure.value'),
    measureUnit: alias('model.measure.unitOfMeasure'),
    measurePresent: or('measureType', 'measureUnit', 'measureValue'),

    typeOptions: [{
      name: 'distance',
      value: 'distance'
    }, {
      name: 'length',
      value: 'length'
    }, {
      name: 'angle',
      value: 'angle'
    }, {
      name: 'measure',
      value: 'measure'
    }, {
      name: 'scale',
      value: 'scale'
    }]
  });
});
define("mdeditor/pods/components/object/md-spatial-resolution/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "V7GdAH0V", "block": "{\"symbols\":[\"&default\"],\"statements\":[[1,[25,\"input/md-input\",null,[[\"type\",\"model\",\"valuePath\",\"label\",\"placeholder\",\"profilePath\",\"showValidations\",\"label\",\"disabled\",\"class\"],[\"number\",[19,0,[]],\"scaleFactor\",\"Scale Factor\",\"Enter the geographic(map) scale for the resource.\",[25,\"concat\",[[20,[\"profilePath\"]],\".scaleFactor\"],null],true,\"Scale Factor\",[20,[\"scaleDisabled\"]],[25,\"if\",[[25,\"get\",[[25,\"get\",[[20,[\"model\",\"validations\",\"attrs\"]],\"scaleFactor\"],null],\"isInvalid\"],null],\"required\"],null]]]],false],[0,\"\\n\\n\"],[1,[25,\"input/md-input\",null,[[\"model\",\"valuePath\",\"autoresize\",\"label\",\"placeholder\",\"showValidations\",\"disabled\",\"profilePath\",\"class\"],[[19,0,[]],\"levelOfDetail\",true,\"Level Of Detail\",\"Enter description of the spatial resolution of the resource.\",true,[20,[\"levelDisabled\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".levelOfDetail\"],null],[25,\"if\",[[25,\"get\",[[25,\"get\",[[20,[\"model\",\"validations\",\"attrs\"]],\"levelOfDetail\"],null],\"isInvalid\"],null],\"required\"],null]]]],false],[0,\"\\n\\n\"],[4,\"layout/md-card\",null,[[\"collapsible\",\"collapsed\",\"profilePath\",\"data-spy\",\"shadow\",\"profilePath\",\"class\"],[false,false,\"card\",false,false,[25,\"concat\",[[20,[\"profilePath\"]],\".measure\"],null],[25,\"if\",[[20,[\"measureDisabled\"]],\"text-muted\"],null]]],{\"statements\":[[0,\"  \"],[6,\"label\"],[10,\"class\",[26,[\"text-info \",[25,\"if\",[[25,\"get\",[[25,\"get\",[[20,[\"model\",\"validations\",\"attrs\"]],\"measure\"],null],\"isInvalid\"],null],\"required\"],null]]]],[7],[0,\"Measure\"],[8],[0,\"\\n  \"],[1,[25,\"input/md-select\",null,[[\"label\",\"showValidations\",\"model\",\"path\",\"valuePath\",\"namePath\",\"objectArray\",\"tooltip\",\"tooltipPath\",\"searchEnabled\",\"disabled\",\"placeholder\",\"profilePath\"],[\"Measure Type\",true,[19,0,[]],\"measureType\",\"value\",\"name\",[20,[\"typeOptions\"]],true,\"tip\",false,[20,[\"measureDisabled\"]],\"The type of measurement.\",[25,\"concat\",[[20,[\"profilePath\"]],\".measure.type\"],null]]]],false],[0,\"\\n  \"],[1,[25,\"input/md-input\",null,[[\"type\",\"step\",\"model\",\"valuePath\",\"label\",\"placeholder\",\"profilePath\",\"showValidations\",\"label\",\"disabled\"],[\"number\",\"0.0001\",[19,0,[]],\"measureValue\",\"Value\",\"Enter the number of units in the measurement.\",[25,\"concat\",[[20,[\"profilePath\"]],\".measure.value\"],null],true,\"Value\",[20,[\"measureDisabled\"]]]]],false],[0,\"\\n  \"],[1,[25,\"input/md-input\",null,[[\"model\",\"valuePath\",\"label\",\"placeholder\",\"showValidations\",\"disabled\",\"profilePath\"],[[19,0,[]],\"measureUnit\",\"Units\",\"Type of units to associated with the value.\",true,[20,[\"measureDisabled\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".measure.units\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-spatial-resolution/template.hbs" } });
});
define('mdeditor/pods/components/object/md-srs/component', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    computed,
    computed: {
      alias
    },
    get,
    run: {
      once
    },
    getWithDefault,
    set
  } = Ember;

  const Validations = (0, _emberCpValidations.buildValidations)({
    'refType': [(0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true,
      disabled: computed.notEmpty('model.model.referenceSystemIdentifier.identifier').volatile()
    })],
    'refSystem': [(0, _emberCpValidations.validator)('presence', {
      presence: true,
      ignoreBlank: true,
      disabled: computed.notEmpty('model.model.referenceSystemType').volatile()
    })]
  });

  exports.default = Component.extend(Validations, {
    didReceiveAttrs() {
      this._super(...arguments);

      let model = get(this, 'model');

      once(this, function () {
        set(model, 'referenceSystemIdentifier', getWithDefault(model, 'referenceSystemIdentifier', {}));
      });
    },
    /**
     * The string representing the path in the profile object for the resource.
     *
     * @property profilePath
     * @type {String}
     * @default 'false'
     * @required
     */

    /**
     * The object to use as the data model for the resource.
     *
     * @property model
     * @type {Object}
     * @required
     */

    classNames: ['form'],
    refSystem: alias('model.referenceSystemIdentifier.identifier'),
    refType: alias('model.referenceSystemType')
  });
});
define("mdeditor/pods/components/object/md-srs/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "nqF9WFXL", "block": "{\"symbols\":[\"&default\"],\"statements\":[[1,[25,\"input/md-codelist\",null,[[\"create\",\"label\",\"tooltip\",\"icon\",\"disabled\",\"allowClear\",\"showValidations\",\"mdCodeName\",\"path\",\"model\",\"placeholder\",\"profilePath\",\"class\"],[true,\"Reference System Type\",true,false,false,true,true,\"referenceSystemType\",\"refType\",[19,0,[]],\"Select type of reference system used.\",[25,\"concat\",[[20,[\"profilePath\"]],\".referenceSystemType\"],null],[25,\"if\",[[25,\"get\",[[19,0,[\"validations\"]],\"isInvalid\"],null],\"required\"],null]]]],false],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"model\",\"referenceSystemIdentifier\"]]],null,{\"statements\":[[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"collapsible\",\"collapsed\",\"profilePath\",\"data-spy\",\"shadow\",\"profilePath\"],[false,false,\"card\",\"Card\",false,[25,\"concat\",[[20,[\"profilePath\"]],\".referenceSystemIdentifier\"],null]]],{\"statements\":[[0,\"  \"],[6,\"label\"],[10,\"class\",[26,[[25,\"concat\",[\"text-info\",[25,\"if\",[[25,\"get\",[[19,0,[\"validations\"]],\"isInvalid\"],null],\" required\"],null]],null]]]],[7],[0,\"Reference System Identifier\"],[8],[0,\"\\n\\n  \"],[1,[25,\"object/md-identifier\",null,[[\"model\",\"profilePath\"],[[20,[\"model\",\"referenceSystemIdentifier\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".referenceSystemIdentifier\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-srs/template.hbs" } });
});
define('mdeditor/pods/components/object/md-time-period/component', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    computed,
    set,
    get,
    getWithDefault,
    run: {
      once
    }
  } = Ember;

  const Validations = (0, _emberCpValidations.buildValidations)({
    'intervalAmount': [(0, _emberCpValidations.validator)('presence', {
      presence: true,
      //disabled: computed.notEmpty('model.endDateTime'),
      ignoreBlank: true
    })],
    'startDateTime': [(0, _emberCpValidations.validator)('presence', {
      presence: true,
      disabled: computed.notEmpty('model.endDateTime'),
      ignoreBlank: true
    })],
    'endDateTime': [(0, _emberCpValidations.validator)('date', {
      onOrAfter: computed.alias('model.startDateTime'),
      isWarning: true
    }), (0, _emberCpValidations.validator)('presence', {
      presence: true,
      disabled: computed.notEmpty('model.startDateTime'),
      ignoreBlank: true
    })]
  });

  exports.default = Component.extend(Validations, {
    didReceiveAttrs() {
      this._super(...arguments);

      let model = get(this, 'model');

      once(function () {
        set(model, 'periodName', getWithDefault(model, 'periodName', []));
        set(model, 'timeInterval', getWithDefault(model, 'timeInterval', {}));
        set(model, 'duration', getWithDefault(model, 'duration', {}));
        // set(model, 'presentationForm', getWithDefault(model,
        //   'presentationForm', []));
        // set(model, 'onlineResource', getWithDefault(model,
        //   'onlineResource', []));
        // set(model, 'identifier', getWithDefault(model, 'identifier', []));
        // set(model, 'graphic', getWithDefault(model, 'graphic', []));
      });
    },
    tagName: 'form',

    /**
     * The profile path for the component
     *
     * @property profilePath
     * @type {String}
     */

    startDateTime: computed('model.startDateTime', {
      get() {
        return get(this, 'model.startDateTime');
      },
      set(key, value) {
        once(this, function () {
          set(this, 'model.startDateTime', value);
          return value;
        });
      }
    }),
    endDateTime: computed('model.endDateTime', {
      get() {
        return get(this, 'model.endDateTime');
      },
      set(key, value) {
        once(this, function () {
          set(this, 'model.endDateTime', value);
          return value;
        });
      }
    }),
    intervalAmount: computed.alias('model.timeInterval.interval'),
    timeUnit: [{
      name: 'year',
      value: 'year'
    }, {
      name: 'month',
      value: 'month'
    }, {
      name: 'day',
      value: 'day'
    }, {
      name: 'hour',
      value: 'hour'
    }, {
      name: 'minute',
      value: 'minute'
    }, {
      name: 'second',
      value: 'second'
    }]

  });
});
define("mdeditor/pods/components/object/md-time-period/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ptbGa1LP", "block": "{\"symbols\":[\"unit\",\"val\",\"&default\"],\"statements\":[[4,\"layout/md-card\",null,[[\"title\",\"collapsible\",\"collapsed\",\"data-spy\",\"shadow\"],[\"Time Period\",true,[20,[\"collapsed\"]],\"Time Period\",true]],{\"statements\":[[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"shadow\",\"profilePath\",\"muted\",\"plain\"],[false,[25,\"concat\",[[20,[\"profilePath\"]],\".date\"],null],false,true]],{\"statements\":[[0,\"    \"],[1,[25,\"input/md-date-range\",null,[[\"startDateTime\",\"endDateTime\"],[[20,[\"startDateTime\"]],[20,[\"endDateTime\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[25,\"input/md-input\",null,[[\"value\",\"label\",\"placeholder\",\"required\",\"profilePath\"],[[20,[\"model\",\"id\"]],\"Id\",\"Enter a unique identifier for the time period.\",false,[25,\"concat\",[[20,[\"profilePath\"]],\".id\"],null]]]],false],[0,\"\\n\\n \"],[1,[25,\"input/md-textarea\",null,[[\"value\",\"profilePath\",\"label\",\"placeholder\"],[[20,[\"model\",\"description\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".description\"],null],\"Description\",\"A brief description providing relevant information about the time period.\"]]],false],[0,\"\\n\\n\"],[4,\"layout/md-card\",null,[[\"shadow\",\"profilePath\",\"muted\",\"plain\"],[false,[25,\"concat\",[[20,[\"profilePath\"]],\".periodName\"],null],false,true]],{\"statements\":[[4,\"object/md-simple-array-table\",null,[[\"title\",\"data-spy\",\"plain\",\"value\"],[\"Time Period Name\",false,true,[20,[\"model\",\"periodName\"]]]],{\"statements\":[[0,\"      \"],[6,\"td\"],[7],[0,\"\\n        \"],[1,[25,\"input/md-input\",null,[[\"value\",\"placeholder\"],[[19,2,[\"item\",\"value\"]],\"Enter Name\"]]],false],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"shadow\",\"profilePath\",\"muted\",\"plain\"],[false,[25,\"concat\",[[20,[\"profilePath\"]],\".interval\"],null],false,true]],{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"form-inline\"],[7],[0,\"\\n      \"],[6,\"label\"],[9,\"class\",\"text-info\"],[7],[0,\"Interval\"],[8],[0,\" \"],[1,[25,\"input/md-input\",null,[[\"type\",\"model\",\"valuePath\",\"step\",\"label\",\"placeholder\",\"profilePath\",\"showValidations\"],[\"number\",[19,0,[]],\"intervalAmount\",\"0.01\",\"Interval Amount\",\"Enter amount of time for the interval.\",[25,\"concat\",[[20,[\"profilePath\"]],\".timeInterval.interval\"],null],true]]],false],[0,\"\\n      \"],[1,[25,\"input/md-select\",null,[[\"create\",\"objectArray\",\"valuePath\",\"namePath\",\"label\",\"required\",\"tooltip\",\"icon\",\"allowClear\",\"value\",\"profilePath\",\"placeholder\"],[false,[20,[\"timeUnit\"]],\"value\",\"name\",\"Time Unit\",true,false,false,true,[20,[\"model\",\"timeInterval\",\"units\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".timeInterval.units\"],null],\"Choose unit of time\"]]],false],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"shadow\",\"profilePath\",\"muted\",\"plain\",\"bodyIsRow\"],[false,[25,\"concat\",[[20,[\"profilePath\"]],\".duration\"],null],false,true,true]],{\"statements\":[[0,\"    \"],[6,\"label\"],[9,\"class\",\"text-info col-sm-2\"],[7],[0,\"Duration\"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-sm-10\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n\"],[4,\"each\",[[25,\"array\",[\"years\",\"months\",\"days\",\"hours\",\"minutes\",\"seconds\"],null]],null,{\"statements\":[[0,\"          \"],[1,[25,\"input/md-input\",null,[[\"class\",\"valuePath\",\"model\",\"type\",\"label\",\"placeholder\",\"profilePath\"],[\"col-sm-6 col-md-4 col-lg-2\",[25,\"concat\",[\"duration.\",[19,1,[]]],null],[20,[\"model\"]],\"number\",[25,\"uc-words\",[[19,1,[]]],null],[25,\"concat\",[\"Enter \",[19,1,[]]],null],[25,\"concat\",[[20,[\"profilePath\"]],\".duration.\",[19,1,[]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[11,3],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-time-period/template.hbs" } });
});
define('mdeditor/pods/components/object/md-transfer/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  // import {
  //   validator,
  //   buildValidations
  // } from 'ember-cp-validations';

  const {
    Component,
    computed,
    set,
    get,
    getWithDefault,
    run: {
      once
    }
  } = Ember;

  // const Validations = buildValidations({
  //   // 'intervalAmount': [
  //   //   validator('presence', {
  //   //     presence: true,
  //   //     //disabled: computed.notEmpty('model.endDateTime'),
  //   //     ignoreBlank: true
  //   //   })
  //   // ],
  //   // 'startDateTime': [
  //   //   validator('presence', {
  //   //     presence: true,
  //   //     disabled: computed.notEmpty('model.endDateTime'),
  //   //     ignoreBlank: true
  //   //   })
  //   // ],
  //   // 'endDateTime': [
  //   //   validator('date', {
  //   //     onOrAfter: computed.alias('model.startDateTime'),
  //   //     isWarning: true
  //   //   }),
  //   //   validator('presence', {
  //   //     presence: true,
  //   //     disabled: computed.notEmpty('model.startDateTime'),
  //   //     ignoreBlank: true
  //   //   })
  //   // ]
  // });

  exports.default = Component.extend({
    didReceiveAttrs() {
      this._super(...arguments);

      let model = get(this, 'model');

      once(function () {
        set(model, 'onlineOption', getWithDefault(model, 'onlineOption', []));
        set(model, 'offlineOption', getWithDefault(model, 'offlineOption', []));
        set(model, 'transferFrequency', getWithDefault(model, 'transferFrequency', {}));
        set(model, 'distributionFormat', getWithDefault(model, 'distributionFormat', []));
        // set(model, 'presentationForm', getWithDefault(model,
        //   'presentationForm', []));
        // set(model, 'onlineResource', getWithDefault(model,
        //   'onlineResource', []));
        // set(model, 'identifier', getWithDefault(model, 'identifier', []));
        // set(model, 'graphic', getWithDefault(model, 'graphic', []));
      });
    },
    tagName: 'form',

    /**
     * The profile path for the component
     *
     * @property profilePath
     * @type {String}
     */

    // startDateTime: computed('model.startDateTime', {
    //   get(){
    //     return get(this, 'model.startDateTime');
    //   },
    //   set(key, value) {
    //     once(this,function() {
    //       set(this, 'model.startDateTime', value);
    //       return value;
    //     });
    //   }
    // }),
    // endDateTime: computed('model.endDateTime', {
    //   get(){
    //     return get(this, 'model.endDateTime');
    //   },
    //   set(key, value) {
    //     once(this,function() {
    //       set(this, 'model.endDateTime', value);
    //       return value;
    //     });
    //   }
    // }),
    formatUri: computed.alias('model.distributionFormat.firstObject.formatSpecification.title'),
    timeUnit: [{
      name: 'year',
      value: 'year'
    }, {
      name: 'month',
      value: 'month'
    }, {
      name: 'day',
      value: 'day'
    }, {
      name: 'hour',
      value: 'hour'
    }, {
      name: 'minute',
      value: 'minute'
    }, {
      name: 'second',
      value: 'second'
    }],

    formatTemplate: Ember.Object.extend( /*Validations, */{
      init() {
        this._super(...arguments);
        this.set('formatSpecification', {});
        this.set('formatSpecification.onlineResource', [{}]);
      }
    })
  });
});
define("mdeditor/pods/components/object/md-transfer/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "IdnIHF0l", "block": "{\"symbols\":[\"unit\",\"format\",\"editing\",\"&default\"],\"statements\":[[0,\"  \"],[1,[25,\"input/md-input\",null,[[\"type\",\"valuePath\",\"model\",\"step\",\"label\",\"placeholder\",\"profilePath\"],[\"number\",\"transferSize\",[20,[\"model\"]],\"0.01\",\"Transfer Size (MB)\",\"Estimated size of a unit in the specified transfer format, expressed in megabytes.\",[25,\"concat\",[[20,[\"profilePath\"]],\".transferSize\"],null]]]],false],[0,\"\\n  \"],[1,[25,\"input/md-input\",null,[[\"value\",\"label\",\"placeholder\",\"profilePath\"],[[20,[\"model\",\"unitsOfDistribution\"]],\"Distribution units\",\"Description of the tiles, layers, geographic areas, etc., in which data are available.\",[25,\"concat\",[[20,[\"profilePath\"]],\".distributionUnit\"],null]]]],false],[0,\"\\n\\n  \"],[1,[25,\"object/md-online-resource-array\",null,[[\"model\",\"label\",\"profilePath\",\"class\",\"shadow\",\"data-spy\"],[[20,[\"model\",\"onlineOption\"]],\"Online Option\",[25,\"concat\",[[20,[\"profilePath\"]],\".onlineOption\"],null],\"md-embedded\",false,[20,[\"fales\"]]]]],false],[0,\"\\n\\n\"],[4,\"object/md-object-table\",null,[[\"items\",\"header\",\"buttonText\",\"templateClass\",\"ellipsis\",\"shadow\",\"attributes\"],[[20,[\"model\",\"offlineOption\"]],\"Offline Option\",\"Add Offline Option\",[20,[\"templateClass\"]],false,false,\"title\"]],{\"statements\":[[0,\"      \"],[1,[25,\"object/md-medium\",null,[[\"model\",\"profilePath\"],[[19,3,[]],[25,\"concat\",[[20,[\"profilePath\"]],\".offlineOption\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"\\n\"],[4,\"object/md-array-table\",null,[[\"columns\",\"plain\",\"responsive\",\"title\",\"value\",\"validation\",\"templateClass\",\"profilePath\"],[\"Format Name,Version,Compression Method,URL\",false,true,\"Distribution Format\",[20,[\"model\",\"distributionFormat\"]],[20,[\"formatValidation\"]],[20,[\"formatTemplate\"]],[25,\"concat\",[[20,[\"profilePath\"]],\".distributionFormat\"],null]]],{\"statements\":[[0,\"\\n    \"],[6,\"td\"],[7],[0,\"\\n        \"],[1,[25,\"input/md-input\",null,[[\"value\",\"placeholder\"],[[19,2,[\"item\",\"formatSpecification\",\"title\"]],\"Name of the format\"]]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"td\"],[7],[0,\"\\n        \"],[1,[25,\"input/md-input\",null,[[\"value\",\"placeholder\"],[[19,2,[\"item\",\"amendmentNumber\"]],\"Format version\"]]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"td\"],[7],[0,\"\\n        \"],[1,[25,\"input/md-input\",null,[[\"value\",\"placeholder\"],[[19,2,[\"item\",\"compressionMethod\"]],\"Compression Method\"]]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"td\"],[7],[0,\"\\n      \"],[1,[25,\"input/md-input\",null,[[\"value\",\"placeholder\"],[[19,2,[\"item\",\"formatSpecification\",\"onlineResource\",\"firstObject\",\"uri\"]],\"On-line information about the format\"]]],false],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"shadow\",\"profilePath\",\"muted\",\"plain\",\"bodyIsRow\"],[false,[25,\"concat\",[[20,[\"profilePath\"]],\".transferFrequency\"],null],false,true,true]],{\"statements\":[[0,\"    \"],[6,\"label\"],[9,\"class\",\"text-info col-sm-2\"],[7],[0,\"Transfer Frequency\"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-sm-10\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n\"],[4,\"each\",[[25,\"array\",[\"years\",\"months\",\"days\",\"hours\",\"minutes\",\"seconds\"],null]],null,{\"statements\":[[0,\"          \"],[1,[25,\"input/md-input\",null,[[\"class\",\"valuePath\",\"model\",\"type\",\"label\",\"placeholder\",\"profilePath\"],[\"col-sm-6 col-md-4 col-lg-2\",[25,\"concat\",[\"transferFrequency.\",[19,1,[]]],null],[20,[\"model\"]],\"number\",[25,\"uc-words\",[[19,1,[]]],null],[25,\"concat\",[\"Enter \",[19,1,[]]],null],[25,\"concat\",[[20,[\"profilePath\"]],\".transferFrequency.\",[19,1,[]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[11,4],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/components/object/md-transfer/template.hbs" } });
});
define('mdeditor/pods/components/tooltip-on-component/component', ['exports', 'ember-tooltips/components/tooltip-on-component'], function (exports, _tooltipOnComponent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _tooltipOnComponent.default.extend({
    // effect: 'fade',
    // side: 'bottom',
    enableLazyRendering: true
  });
});
define('mdeditor/pods/components/tooltip-on-element/component', ['exports', 'ember-tooltips/components/tooltip-on-element'], function (exports, _tooltipOnElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _tooltipOnElement.default.extend({
    // effect: 'fade',
    // side: 'bottom',
    enableLazyRendering: true
  });
});
define('mdeditor/pods/contact/new/id/route', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    AdapterError
  } = _emberData.default;

  exports.default = Ember.Route.extend({
    /**
     * The route model
     *
     * @method model
     * @param {Object} params
     * @chainable
     * @return {Object}
     */
    model: function model(params) {
      let record = this.store.peekRecord('contact', params.contact_id);

      if (record) {
        return record;
      }

      return this.store.findRecord('contact', params.contact_id);
    },

    /**
     * The breadcrumb title string.
     *
     * @property breadCrumb
     * @type {String}
     * @default null
     */
    breadCrumb: null,

    /**
     * Called when route is deactivated.
     * The model is destroyed if still "new".
     *
     * @method deactivate
     */
    deactivate: function deactivate() {
      // We grab the model loaded in this route
      let model = this.currentRouteModel();

      // If we are leaving the Route we verify if the model is in
      // 'isNew' state, which means it wasn't saved to the backend.
      if (model && model.get('isNew')) {
        // We call DS#destroyRecord() which removes it from the store
        model.destroyRecord();
      }
    },

    setupController: function setupController(controller, model) {
      // Call _super for default behavior
      this._super(controller, model);

      // // setup tests for required attributes
      // controller.noId = Ember.computed('model.json.contactId', function () {
      //   return model.get('json.contactId') ? false : true;
      // });
      // controller.noName = Ember.computed('model.json.individualName',
      //   'model.json.organizationName',
      //   function () {
      //     let haveIndividual = model.get('json.individualName') ? true :
      //       false;
      //     let haveOrganization = model.get('json.organizationName') ?
      //       true : false;
      //     return !(haveIndividual || haveOrganization);
      //   });
      // controller.allowSave = Ember.computed('noId', 'noName', function () {
      //   return(this.get('noName') || this.get('noId'));
      // });
    },

    // serialize: function (model) {
    //   // If we got here without an ID (and therefore without a model)
    //   // Ensure that we leave the route param in the URL blank (not 'undefined')
    //   if(!model) {
    //     return {
    //       contact_id: ''
    //     };
    //   }
    //
    //   // Otherwise, let Ember handle it as usual
    //   return this._super.apply(this, arguments);
    // },

    actions: {
      willTransition: function willTransition(transition) {
        if (transition.targetName === 'contact.new.index') {
          transition.abort();
          return true;
        }

        // We grab the model loaded in this route
        var model = this.currentRouteModel();
        // If we are leaving the Route we verify if the model is in
        // 'isNew' state, which means it wasn't saved to the backend.
        if (model && model.get('isNew')) {
          //let contexts = transition.intent.contexts;
          // We call DS#destroyRecord() which removes it from the store
          model.destroyRecord();
          //transition.abort();

          // if (contexts && contexts.length > 0) {
          //   //grab any models ids and apply them to transition
          //   let ids = contexts.mapBy('id');
          //   this.replaceWith(transition.targetName, ...ids);
          //   return true;
          // }
          //
          // this.replaceWith(transition.targetName);
          return true;
        }
      },

      saveContact() {
        this.currentRouteModel().save().then(model => {
          this.replaceWith('contact.show.edit', model);
        });
      },

      cancelContact() {
        this.replaceWith('contacts');

        return false;
      },

      error(error) {
        if (error instanceof AdapterError) {
          Ember.get(this, 'flashMessages').warning('No contact found! Re-directing to new contact...');
          // redirect to new
          this.replaceWith('contact.new');
        } else {
          // otherwise let the error bubble
          return true;
        }
      }
    }
  });
});
define("mdeditor/pods/contact/new/id/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LZofQyIN", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"row page-header\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-6 col-md-offset-3\"],[7],[0,\"\\n        \"],[6,\"h3\"],[7],[0,\"Create New Contact\"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n    \"],[6,\"form\"],[9,\"class\",\"form-horizontal col-md-6 col-md-offset-3\"],[3,\"action\",[[19,0,[]],\"saveContact\"],[[\"on\"],[\"submit\"]]],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n            \"],[6,\"label\"],[9,\"class\",\"col-sm-3 control-label\"],[7],[0,\"Contact Type\"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-sm-9 col-sm-offset-\"],[7],[0,\"\\n              \"],[1,[25,\"input/md-toggle\",null,[[\"value\",\"onToggle\",\"showLabels\",\"onLabel\",\"offLabel\",\"size\",\"theme\"],[[20,[\"model\",\"json\",\"isOrganization\"]],[25,\"mut\",[[20,[\"model\",\"json\",\"isOrganization\"]]],null],true,\"Organization::true\",\"Individual::false\",\"large\",\"form\"]]],false],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n            \"],[6,\"label\"],[10,\"class\",[26,[\"col-sm-3 control-label\\n              \",[25,\"if\",[[25,\"get\",[[25,\"get\",[[20,[\"model\",\"validations\",\"attrs\"]],\"json.contactId\"],null],\"options.presence.presence\"],null],\"required\"],null]]]],[7],[0,\"Contact ID\"],[8],[0,\"\\n\\n            \"],[6,\"div\"],[9,\"class\",\"col-sm-9\"],[7],[0,\"\\n                \"],[1,[25,\"input/md-input\",null,[[\"valuePath\",\"model\",\"placeholder\"],[\"json.contactId\",[20,[\"model\"]],\"Enter an ID for this contact\"]]],false],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n            \"],[6,\"label\"],[10,\"class\",[26,[\"col-sm-3 control-label\\n            \",[25,\"unless\",[[25,\"get\",[[25,\"get\",[[20,[\"model\",\"validations\",\"attrs\"]],\"json.name\"],null],\"options.presence.disabled\"],null],\"required\"],null]]]],[7],[0,\"Name\"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-sm-9\"],[7],[0,\"\\n                \"],[1,[25,\"input/md-input\",null,[[\"valuePath\",\"model\",\"placeholder\"],[\"json.name\",[20,[\"model\"]],\"Enter a name for this contact\"]]],false],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"],[4,\"unless\",[[20,[\"model\",\"json\",\"isOrganization\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n            \"],[6,\"label\"],[10,\"class\",[26,[\"col-sm-3 control-label\\n            \",[25,\"unless\",[[25,\"get\",[[25,\"get\",[[20,[\"model\",\"validations\",\"attrs\"]],\"json.positionName\"],null],\"options.presence.disabled\"],null],\"required\"],null]]]],[7],[0,\"Position Name\"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-sm-9\"],[7],[0,\"\\n                \"],[1,[25,\"input/md-input\",null,[[\"valuePath\",\"model\",\"placeholder\"],[\"json.positionName\",[20,[\"model\"]],\"Enter a name for this position\"]]],false],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-sm-offset-4 col-sm-8\"],[7],[0,\"\\n                 \"],[6,\"span\"],[9,\"class\",\"pull-right\"],[7],[0,\"\\n                      \"],[6,\"button\"],[9,\"type\",\"submit\"],[9,\"class\",\"btn btn-success md-form-save\"],[10,\"disabled\",[25,\"get\",[[20,[\"model\",\"validations\"]],\"isInvalid\"],null],null],[7],[0,\"Save\"],[8],[0,\"\\n                      \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-warning \"],[3,\"action\",[[19,0,[]],\"cancelContact\"]],[7],[0,\"Cancel\"],[8],[0,\"\\n                 \"],[8],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/contact/new/id/template.hbs" } });
});
define('mdeditor/pods/contact/new/index/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    redirect() {
      let rec = this.store.createRecord('contact');

      this.replaceWith('contact.new.id', rec);
    }
  });
});
define("mdeditor/pods/contact/new/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "WjdL0fJo", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/contact/new/index/template.hbs" } });
});
define('mdeditor/pods/contact/new/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    breadCrumb: {
      title: 'New',
      linkable: false
    }
  });
});
define('mdeditor/pods/contact/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    breadCrumb: {
      title: 'Contact',
      linkable: false
    }
  });
});
define('mdeditor/pods/contact/show/edit/route', ['exports', 'mdeditor/mixins/hash-poll'], function (exports, _hashPoll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route
  } = Ember;

  exports.default = Route.extend(_hashPoll.default, {

    renderTemplate() {
      this.render('contact.show.edit', {
        into: 'contact'
      });
    }
  });
});
define("mdeditor/pods/contact/show/edit/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7yCHBZFX", "block": "{\"symbols\":[\"hour\",\"email\"],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-sm-9 col-md-offset-1\"],[7],[0,\"\\n        \"],[6,\"h3\"],[7],[0,\"Editing Contact: \"],[1,[20,[\"model\",\"json\",\"name\"]],false],[0,\" \"],[6,\"small\"],[7],[1,[20,[\"model\",\"json\",\"contactId\"]],false],[8],[0,\"\\n          \"],[6,\"span\"],[9,\"class\",\"text-danger\"],[7],[0,\"\\n\"],[0,\"            \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"model\"]]]]],false],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"form\"],[7],[0,\"\\n            \"],[1,[25,\"input/md-input-confirm\",null,[[\"valuePath\",\"model\",\"data-spy\",\"confirmTip\",\"placeholder\",\"label\"],[\"json.contactId\",[20,[\"model\"]],\"Contact ID\",\"Note! Editing the Contact ID may break links. Be aware.\",\"User assigned Contact ID\",\"Contact ID\"]]],false],[0,\"\\n\\n            \"],[1,[25,\"input/md-input\",null,[[\"valuePath\",\"model\",\"placeholder\",\"label\"],[\"json.name\",[20,[\"model\"]],[25,\"concat\",[[20,[\"model\",\"type\"]],\" Name\"],null],[25,\"concat\",[[20,[\"model\",\"type\"]],\" Name\"],null]]]],false],[0,\"\\n\\n\"],[4,\"unless\",[[20,[\"model\",\"json\",\"isOrganization\"]]],null,{\"statements\":[[0,\"                \"],[1,[25,\"input/md-input\",null,[[\"valuePath\",\"model\",\"placeholder\",\"label\"],[\"json.positionName\",[20,[\"model\"]],\"Position Name\",\"Position Name\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n            \"],[1,[25,\"input/md-codelist\",null,[[\"value\",\"label\",\"create\",\"tooltip\",\"icon\",\"mdCodeName\",\"placeholder\"],[[20,[\"model\",\"json\",\"contactType\"]],\"Contact Type\",false,true,false,\"entityType\",\"Select a contact type\"]]],false],[0,\"\\n\\n            \"],[1,[25,\"input/md-select-contacts\",null,[[\"label\",\"placeholder\",\"value\",\"contactType\",\"icon\",\"tooltip\",\"defaultIcon\",\"filterId\"],[\"Member Of Organization\",\"Pick organization(s) this contact belongs to\",[20,[\"model\",\"json\",\"memberOfOrganization\"]],\"organizations\",true,false,\"organizations\",[20,[\"model\",\"json\",\"contactId\"]]]]],false],[0,\"\\n\\n\\n            \"],[1,[25,\"object/md-phone-array\",null,[[\"value\",\"data-spy\"],[[20,[\"model\",\"json\",\"phone\"]],\"Phone\"]]],false],[0,\"\\n\\n\"],[4,\"object/md-simple-array-table\",null,[[\"data-spy\",\"title\",\"required\",\"value\"],[\"E-mail\",\"E-mail Address\",false,[20,[\"model\",\"json\",\"electronicMailAddress\"]]]],{\"statements\":[[0,\"              \"],[6,\"td\"],[7],[0,\"\\n                  \"],[1,[25,\"input/md-input\",null,[[\"value\",\"placeholder\"],[[19,2,[\"item\",\"value\"]],\"Enter valid e-mail address\"]]],false],[0,\"\\n              \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n            \"],[1,[25,\"object/md-address\",null,[[\"model\",\"data-spy\"],[[20,[\"model\",\"json\",\"address\"]],\"Address\"]]],false],[0,\"\\n\\n            \"],[1,[25,\"object/md-online-resource-array\",null,[[\"model\",\"profilePath\",\"data-spy\"],[[20,[\"model\",\"json\",\"onlineResource\"]],\"contact\",\"Online Resource\"]]],false],[0,\"\\n\\n            \"],[1,[25,\"object/md-graphic-array\",null,[[\"model\",\"data-spy\",\"button-text\",\"label\",\"profilePath\"],[[20,[\"model\",\"json\",\"logoGraphic\"]],\"Logo\",\"Add Logo\",\"Logo\",\"contact\"]]],false],[0,\"\\n\\n\"],[4,\"object/md-simple-array-table\",null,[[\"data-spy\",\"title\",\"value\"],[\"Availability\",\"Available Time\",[20,[\"model\",\"json\",\"hoursOfService\"]]]],{\"statements\":[[0,\"              \"],[6,\"td\"],[7],[0,\"\\n                  \"],[1,[25,\"input/md-input\",null,[[\"value\",\"placeholder\"],[[19,1,[\"item\",\"value\"]],\"Describe time when contact is avaiable\"]]],false],[0,\"\\n              \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n            \"],[1,[25,\"input/md-textarea\",null,[[\"value\",\"data-spy\",\"placeholder\",\"label\"],[[20,[\"model\",\"json\",\"contactInstruction\"]],\"Instructions\",\"Supplemental Contact Instructions\",\"Contact Instructions\"]]],false],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-sm-2\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"md-control-sidebar\"],[7],[0,\"\\n            \"],[1,[25,\"control/md-crud-buttons\",null,[[\"model\",\"doSave\",\"doCancel\",\"doDelete\",\"doCopy\"],[[20,[\"model\"]],\"saveContact\",\"cancelContact\",\"destroyContact\",\"copyContact\"]]],false],[0,\"\\n            \"],[1,[18,\"control/md-scroll-spy\"],false],[0,\"\\n\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/contact/show/edit/template.hbs" } });
});
define('mdeditor/pods/contact/show/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    inject,
    Route,
    get,
    copy
  } = Ember;

  exports.default = Route.extend({
    flashMessages: inject.service(),

    model: function model(params) {
      let rec = this.store.peekRecord('contact', params.contact_id);
      return rec;
    },

    actions: {
      saveContact: function saveContact() {
        let model = this.currentRouteModel();

        model.save().then(() => {
          //this.refresh();
          //this.setModelHash();
          get(this, 'flashMessages').success(`Saved Contact: ${model.get('title')}`);

          //this.transitionTo('contacts');
        });
      },

      destroyContact: function destroyContact() {
        let model = this.currentRouteModel();
        model.destroyRecord().then(() => {
          get(this, 'flashMessages').success(`Deleted Contact: ${model.get('title')}`);
          this.replaceWith('contacts');
        });
      },

      cancelContact: function cancelContact() {
        let model = this.currentRouteModel();
        let message = `Cancelled changes to Contact: ${model.get('title')}`;

        if (this.get('settings.data.autoSave')) {
          let json = model.get('jsonRevert');

          if (json) {
            model.set('json', JSON.parse(json));
            get(this, 'flashMessages').warning(message);
          }

          return;
        }

        model.reload().then(() => {
          get(this, 'flashMessages').warning(message);
        });
      },

      copyContact: function copyContact() {

        get(this, 'flashMessages').success(`Copied Contact: ${this.currentRouteModel().get('title')}`);
        this.transitionTo('contact.new.id', copy(this.currentRouteModel()));
      }
    }
  });
});
define("mdeditor/pods/contact/show/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "AtVoiQQt", "block": "{\"symbols\":[\"ol\",\"address\",\"hours\",\"email\",\"ph\",\"orgId\"],\"statements\":[[6,\"div\"],[9,\"class\",\"row md-no-spotlight\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-9 col-md-offset-1\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"model\",\"defaultLogo\"]]],null,{\"statements\":[[0,\"        \"],[6,\"img\"],[10,\"src\",[26,[[20,[\"model\",\"defaultLogo\"]]]]],[9,\"class\",\"img-responsive inline-block md-logo-preview\"],[9,\"alt\",\"Responsive image\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[25,\"fa-icon\",[[20,[\"model\",\"icon\"]]],[[\"class\"],[\"text-muted\"]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n      Viewing \"],[1,[20,[\"model\",\"type\"]],false],[0,\" Contact: \"],[1,[20,[\"model\",\"title\"]],false],[0,\"\\n\"],[0,\"          \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"model\"]]]]],false],[0,\"\\n    \"],[8],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"shadow\",\"muted\",\"title\",\"bodyIsRow\"],[false,true,\"Basic Information\",true]],{\"statements\":[[0,\"        \"],[6,\"dl\"],[9,\"class\",\"dl-horizontal col-lg-6\"],[7],[0,\"\\n          \"],[1,[25,\"control/md-definition\",null,[[\"title\",\"text\"],[\"Contact Id\",[20,[\"model\",\"contactId\"]]]]],false],[0,\"\\n          \"],[1,[25,\"control/md-definition\",null,[[\"title\",\"text\"],[\"Contact Name\",[20,[\"model\",\"name\"]]]]],false],[0,\"\\n\\n\"],[4,\"unless\",[[20,[\"model\",\"json\",\"isOrganization\"]]],null,{\"statements\":[[0,\"            \"],[1,[25,\"control/md-definition\",null,[[\"title\",\"text\"],[\"Postion\",[20,[\"model\",\"json\",\"positionName\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n          \"],[1,[25,\"control/md-definition\",null,[[\"title\",\"text\"],[\"Contact Type\",[20,[\"model\",\"json\",\"contactType\"]]]]],false],[0,\"\\n          \"],[1,[25,\"control/md-definition\",null,[[\"title\",\"text\"],[\"Contact Instructions\",[20,[\"model\",\"json\",\"contactInstructions\"]]]]],false],[0,\"\\n\\n        \"],[8],[0,\"\\n        \"],[6,\"dl\"],[9,\"class\",\"dl-horizontal col-lg-6\"],[7],[0,\"\\n\"],[4,\"control/md-definition\",null,[[\"title\"],[\"Organizations\"]],{\"statements\":[[4,\"each\",[[20,[\"model\",\"json\",\"memberOfOrganization\"]]],null,{\"statements\":[[0,\"              \"],[1,[25,\"control/md-contact-link\",null,[[\"contactId\"],[[19,6,[]]]]],false],[6,\"br\"],[7],[8],[0,\"\\n\"]],\"parameters\":[6]},{\"statements\":[[0,\"                \"],[6,\"em\"],[9,\"class\",\"text-muted\"],[7],[0,\"No organizations assigned.\"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-6 col-xxl-4\"],[7],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"shadow\",\"muted\",\"title\",\"class\"],[false,true,\"Phone\",\"card-table\"]],{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"table-responsive\"],[7],[0,\"\\n        \"],[6,\"table\"],[9,\"class\",\"table\"],[7],[0,\"\\n          \"],[6,\"thead\"],[7],[0,\"\\n            \"],[6,\"tr\"],[7],[0,\"\\n              \"],[6,\"th\"],[7],[0,\"Name\"],[8],[0,\"\\n              \"],[6,\"th\"],[7],[0,\"Number\"],[8],[0,\"\\n              \"],[6,\"th\"],[7],[0,\"Type\"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"tbody\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"model\",\"json\",\"phone\"]]],null,{\"statements\":[[0,\"              \"],[6,\"tr\"],[7],[0,\"\\n                \"],[6,\"td\"],[7],[1,[25,\"get-dash\",[[19,5,[]],\"phoneName\"],null],false],[8],[0,\"\\n                \"],[6,\"td\"],[7],[0,\"\\n\"],[4,\"if\",[[19,5,[\"phoneNumber\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"a\"],[10,\"href\",[26,[\"tel:\",[19,5,[\"phoneNumber\"]]]]],[7],[1,[19,5,[\"phoneNumber\"]],false],[0,\"\\n                      \"],[1,[25,\"tooltip-on-element\",null,[[\"text\"],[\"Click to call.\"]]],false],[0,\"\\n                    \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                    --\\n\"]],\"parameters\":[]}],[0,\"                \"],[8],[0,\"\\n                \"],[6,\"td\"],[7],[0,\"\\n                  \"],[1,[25,\"if\",[[19,5,[\"service\",\"length\"]],[25,\"join\",[\", \",[19,5,[\"service\"]]],null],\"--\"],null],false],[0,\"\\n                \"],[8],[0,\"\\n              \"],[8],[0,\"\\n\"]],\"parameters\":[5]},{\"statements\":[[0,\"              \"],[6,\"tr\"],[7],[6,\"td\"],[7],[6,\"em\"],[9,\"class\",\"text-muted\"],[7],[0,\"No phones assigned.\"],[8],[8],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-6 col-xxl-4\"],[7],[0,\"\\n\\n\"],[4,\"layout/md-card\",null,[[\"shadow\",\"muted\",\"title\",\"class\"],[false,true,\"E-mail\",\"\"]],{\"statements\":[[0,\"      \"],[6,\"ul\"],[9,\"class\",\"list-unstyled\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"model\",\"json\",\"electronicMailAddress\"]]],null,{\"statements\":[[0,\"          \"],[6,\"li\"],[7],[6,\"a\"],[10,\"href\",[26,[\"mailto:\",[19,4,[]]]]],[9,\"target\",\"_blank\"],[7],[1,[19,4,[]],false],[0,\"\\n            \"],[1,[25,\"tooltip-on-element\",null,[[\"text\"],[\"Click to send e-mail.\"]]],false],[0,\"\\n          \"],[8],[8],[0,\"\\n\"]],\"parameters\":[4]},{\"statements\":[[0,\"          \"],[6,\"li\"],[7],[6,\"em\"],[9,\"class\",\"text-muted\"],[7],[0,\"No e-mails assigned.\"],[8],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"clearfix hidden-xxl\"],[7],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-6 col-xxl-4\"],[7],[0,\"\\n\\n\"],[4,\"layout/md-card\",null,[[\"shadow\",\"muted\",\"title\",\"class\"],[false,true,\"Availability\",\"\"]],{\"statements\":[[0,\"      \"],[6,\"ul\"],[9,\"class\",\"list-unstyled\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"model\",\"json\",\"hoursOfService\"]]],null,{\"statements\":[[0,\"          \"],[6,\"li\"],[7],[1,[19,3,[]],false],[8],[0,\"\\n\"]],\"parameters\":[3]},{\"statements\":[[0,\"          \"],[6,\"li\"],[7],[6,\"em\"],[9,\"class\",\"text-muted\"],[7],[0,\"No information provided.\"],[8],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-6\"],[7],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"shadow\",\"muted\",\"title\",\"bodyIsRow\"],[false,true,\"Address\",[20,[\"model\",\"json\",\"address\",\"length\"]]]],{\"statements\":[[4,\"each\",[[20,[\"model\",\"json\",\"address\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[9,\"class\",\"col-lg-6\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"card\"],[7],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"card-block\"],[7],[0,\"\\n                \"],[1,[25,\"object/md-address/md-address-block\",null,[[\"item\"],[[19,2,[]]]]],false],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[2]},{\"statements\":[[0,\"            \"],[6,\"em\"],[7],[0,\"No addresses provided.\"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-6\"],[7],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"shadow\",\"muted\",\"title\"],[false,true,\"Online Resource\"]],{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"table-responsive\"],[7],[0,\"\\n          \"],[6,\"table\"],[9,\"class\",\"table\"],[7],[0,\"\\n            \"],[6,\"thead\"],[7],[0,\"\\n              \"],[6,\"tr\"],[7],[0,\"\\n                \"],[6,\"th\"],[7],[0,\"Name\"],[8],[0,\"\\n                \"],[6,\"th\"],[7],[0,\"URI\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"tbody\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"model\",\"json\",\"onlineResource\"]]],null,{\"statements\":[[0,\"                \"],[6,\"tr\"],[7],[0,\"\\n                  \"],[6,\"td\"],[7],[1,[25,\"get-dash\",[[19,1,[]],\"name\"],null],false],[8],[0,\"\\n                  \"],[6,\"td\"],[7],[0,\"\\n\"],[4,\"if\",[[19,1,[\"uri\"]]],null,{\"statements\":[[0,\"                      \"],[6,\"a\"],[10,\"href\",[26,[[19,1,[\"uri\"]]]]],[9,\"target\",\"_blank\"],[7],[1,[19,1,[\"uri\"]],false],[0,\"\\n\"],[0,\"                      \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                      --\\n\"]],\"parameters\":[]}],[0,\"                  \"],[8],[0,\"\\n                \"],[8],[0,\"\\n\"]],\"parameters\":[1]},{\"statements\":[[0,\"                \"],[6,\"tr\"],[7],[6,\"td\"],[7],[6,\"em\"],[9,\"class\",\"text-muted\"],[7],[0,\"No online resources assigned.\"],[8],[8],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-2\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"md-control-sidebar\"],[7],[0,\"\\n\"],[4,\"control/md-crud-buttons\",null,[[\"model\",\"doDelete\",\"doCopy\"],[[20,[\"model\"]],\"destroyContact\",\"copyContact\"]],{\"statements\":[[4,\"link-to\",[\"contact.show.edit\",[20,[\"model\",\"id\"]]],[[\"class\"],[\"btn btn-lg btn-success\"]],{\"statements\":[[0,\"          \"],[1,[25,\"fa-icon\",[\"pencil\"],null],false],[0,\" Edit\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[6,\"hr\"],[7],[8],[0,\"\\n\"],[4,\"link-to\",[\"contacts\"],[[\"class\"],[\"btn btn-lg btn-primary btn-block\"]],{\"statements\":[[0,\"      \"],[1,[25,\"fa-icon\",[\"list\"],null],false],[0,\" Show List\"]],\"parameters\":[]},null],[0,\"\\n      \"],[1,[18,\"control/md-scroll-spy\"],false],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/contact/show/template.hbs" } });
});
define("mdeditor/pods/contact/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "iyd023iU", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/contact/template.hbs" } });
});
define('mdeditor/pods/contacts/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    inject: {
      service
    }
  } = Ember;

  exports.default = Route.extend({
    slider: service(),
    model() {
      //return this.store.peekAll('contact');
      return this.modelFor('application').findBy('modelName', 'contact');
    },

    columns: [{
      propertyName: 'title',
      title: 'Title'
    }, {
      propertyName: 'defaultOrganizationName',
      title: 'Organization'
    }, {
      propertyName: 'json.electronicMailAddress.firstObject',
      title: 'E-mail'
    }, {
      propertyName: 'contactId',
      title: 'ID',
      isHidden: true
    }, {
      propertyName: 'type',
      title: 'Contact Type',
      filterWithSelect: true
    }],

    actions: {
      getColumns() {
        return this.get('columns');
      },

      showSlider(rec, evt) {
        let slider = this.get('slider');

        evt.stopPropagation();
        this.controller.set('errorTarget', rec);
        slider.set('fromName', 'md-slider-error');
        slider.toggleSlider(true);

        return false;
      }
    }
  });
});
define("mdeditor/pods/contacts/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "K4kMNVpw", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[9,\"class\",\"text-info\"],[7],[1,[25,\"fa-icon\",[\"users\"],null],false],[0,\" Contacts\"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"model\",\"length\"]]],null,{\"statements\":[[4,\"layout/md-card\",null,[[\"collapsible\",\"collapsed\",\"shadow\"],[true,false,true]],{\"statements\":[[0,\"    \"],[1,[25,\"control/md-record-table\",null,[[\"data\",\"dataColumns\",\"allActions\",\"selectProperty\"],[[20,[\"model\"]],[25,\"compute\",[[25,\"route-action\",[\"getColumns\"],null],[20,[\"section\",\"meta\",\"type\"]]],null],true,\"_selectedFromList\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[6,\"div\"],[9,\"class\",\"alert alert-info\"],[7],[0,\"\\n  \"],[6,\"h3\"],[7],[0,\"No Contacts found.\\n\"],[4,\"link-to\",[\"contact.new\"],[[\"class\"],[\"btn btn-success btn-lg\"]],{\"statements\":[[0,\"      \"],[1,[25,\"fa-icon\",[\"plus\"],null],false],[0,\" Create a Contact\\n\"]],\"parameters\":[]},null],[0,\"  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[4,\"if\",[[20,[\"errorTarget\"]]],null,{\"statements\":[[0,\"  \"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-slider-error\",[25,\"hash\",null,[[\"title\",\"body\"],[[25,\"concat\",[\"Viewing errors for: \",[20,[\"errorTarget\",\"title\"]]],null],[25,\"component\",[\"control/md-errors\"],[[\"errors\"],[[20,[\"errorTarget\",\"hasSchemaErrors\"]]]]]]]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/contacts/template.hbs" } });
});
define('mdeditor/pods/dashboard/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("mdeditor/pods/dashboard/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6Yvv1Rkk", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"dashboard\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-xs-12 col-sm-4\"],[7],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"class\",\"block\"],[\"card-inverse card-primary text-center\",false]],{\"statements\":[[0,\"                \"],[6,\"div\"],[9,\"class\",\"card-block\"],[7],[0,\"\\n                    \"],[6,\"div\"],[9,\"class\",\"card-title row\"],[7],[0,\"\\n                        \"],[6,\"div\"],[9,\"class\",\"col-xs-3\"],[7],[0,\"\\n                            \"],[1,[25,\"fa-icon\",[\"file-text\"],[[\"size\"],[5]]],false],[0,\"\\n                        \"],[8],[0,\"\\n                        \"],[6,\"div\"],[9,\"class\",\"col-xs-9 text-right\"],[7],[0,\"\\n                            \"],[6,\"div\"],[9,\"class\",\"huge-text\"],[7],[1,[20,[\"model\",\"0\",\"length\"]],false],[8],[0,\"\\n                            \"],[6,\"div\"],[7],[0,\"Records\"],[8],[0,\"\\n                        \"],[8],[0,\"\\n                    \"],[8],[0,\"\\n                \"],[8],[0,\"\\n\"],[4,\"link-to\",[\"records\"],null,{\"statements\":[[0,\"                    \"],[6,\"div\"],[9,\"class\",\"card-footer\"],[7],[0,\"\\n                        \"],[6,\"div\"],[9,\"class\",\"pull-left\"],[7],[0,\"\\n                            View Records\\n                        \"],[8],[0,\"\\n                        \"],[6,\"div\"],[9,\"class\",\"pull-right\"],[7],[0,\"\\n                            \"],[1,[25,\"fa-icon\",[\"arrow-right\"],[[\"size\"],[1]]],false],[0,\"\\n                        \"],[8],[0,\"\\n\\n                    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-xs-12 col-sm-4\"],[7],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"class\",\"block\"],[\"card-inverse card-success text-center\",false]],{\"statements\":[[0,\"                \"],[6,\"div\"],[9,\"class\",\"card-block\"],[7],[0,\"\\n                    \"],[6,\"div\"],[9,\"class\",\"card-title row\"],[7],[0,\"\\n                        \"],[6,\"div\"],[9,\"class\",\"col-xs-3\"],[7],[0,\"\\n                            \"],[1,[25,\"fa-icon\",[\"users\"],[[\"size\"],[5]]],false],[0,\"\\n                        \"],[8],[0,\"\\n                        \"],[6,\"div\"],[9,\"class\",\"col-xs-9 text-right\"],[7],[0,\"\\n                            \"],[6,\"div\"],[9,\"class\",\"huge-text\"],[7],[1,[20,[\"model\",\"1\",\"length\"]],false],[8],[0,\"\\n                            \"],[6,\"div\"],[7],[0,\"Contacts\"],[8],[0,\"\\n                        \"],[8],[0,\"\\n                    \"],[8],[0,\"\\n                \"],[8],[0,\"\\n\"],[4,\"link-to\",[\"contacts\"],null,{\"statements\":[[0,\"                    \"],[6,\"div\"],[9,\"class\",\"card-footer\"],[7],[0,\"\\n                        \"],[6,\"div\"],[9,\"class\",\"pull-left\"],[7],[0,\"\\n                            View Contacts\\n                        \"],[8],[0,\"\\n                        \"],[6,\"div\"],[9,\"class\",\"pull-right\"],[7],[0,\"\\n                            \"],[1,[25,\"fa-icon\",[\"arrow-right\"],[[\"size\"],[1]]],false],[0,\"\\n                        \"],[8],[0,\"\\n\\n                    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-xs-12 col-sm-4\"],[7],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"class\",\"block\"],[\"card-inverse card-info text-center\",false]],{\"statements\":[[0,\"                \"],[6,\"div\"],[9,\"class\",\"card-block\"],[7],[0,\"\\n                    \"],[6,\"div\"],[9,\"class\",\"card-title row\"],[7],[0,\"\\n                        \"],[6,\"div\"],[9,\"class\",\"col-xs-3\"],[7],[0,\"\\n                            \"],[1,[25,\"fa-icon\",[\"book\"],[[\"size\"],[5]]],false],[0,\"\\n                        \"],[8],[0,\"\\n                        \"],[6,\"div\"],[9,\"class\",\"col-xs-9 text-right\"],[7],[0,\"\\n                            \"],[6,\"div\"],[9,\"class\",\"huge-text\"],[7],[1,[20,[\"model\",\"2\",\"length\"]],false],[8],[0,\"\\n                            \"],[6,\"div\"],[7],[0,\"Dictionaries\"],[8],[0,\"\\n                        \"],[8],[0,\"\\n                    \"],[8],[0,\"\\n                \"],[8],[0,\"\\n\"],[4,\"link-to\",[\"dictionaries\"],null,{\"statements\":[[0,\"                    \"],[6,\"div\"],[9,\"class\",\"card-footer\"],[7],[0,\"\\n                        \"],[6,\"div\"],[9,\"class\",\"pull-left\"],[7],[0,\"\\n                            View Dictionaries\\n                        \"],[8],[0,\"\\n                        \"],[6,\"div\"],[9,\"class\",\"pull-right\"],[7],[0,\"\\n                            \"],[1,[25,\"fa-icon\",[\"arrow-right\"],[[\"size\"],[1]]],false],[0,\"\\n                        \"],[8],[0,\"\\n\\n                    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"hr\"],[7],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-xs-12 col-md-6 col-md-offset-3\"],[7],[0,\"\\n            \"],[6,\"h2\"],[9,\"class\",\"text-center\"],[7],[0,\"\\n                \"],[6,\"b\"],[7],[6,\"span\"],[9,\"class\",\"logo huge-text\"],[7],[0,\"md\"],[6,\"span\"],[9,\"class\",\"md-icon-mdeditor\"],[7],[8],[0,\"ditor\"],[8],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"p\"],[9,\"class\",\"lead\"],[7],[0,\"\\n                The mdEditor is a web application that allows users to author\\n                and edit metadata for projects and datasets. The mdEditor is\\n                currently under active development. The primary goal is to\\n                create an editor that will allow creation and management of\\n                archival quality metadata without requiring extensive knowledge\\n                of various metadata standards.\\n            \"],[8],[0,\"\\n            \"],[6,\"p\"],[9,\"class\",\"lead\"],[7],[0,\"\\n              md\"],[6,\"span\"],[9,\"class\",\"md-icon-mdeditor\"],[7],[8],[0,\"ditor Version 1.0 will be\\n              released \"],[6,\"b\"],[9,\"class\",\"text-success\"],[7],[0,\"January 2018\"],[8],[0,\". \"],[6,\"a\"],[9,\"href\",\"https://github.com/adiwg/mdEditor/projects\"],[9,\"target\",\"_blank\"],[7],[0,\"Follow progress\"],[8],[0,\" or \"],[6,\"a\"],[9,\"href\",\"https://github.com/adiwg/mdEditor/issues\"],[9,\"target\",\"_blank\"],[7],[0,\"report issues\"],[8],[0,\" on  \"],[6,\"a\"],[9,\"href\",\"https://github.com/adiwg/mdEditor\"],[9,\"target\",\"_blank\"],[7],[0,\" the\\n              Github website\"],[8],[0,\". For more information, see \"],[6,\"a\"],[9,\"href\",\"https://github.com/adiwg/mdEditor/wiki\"],[9,\"target\",\"_blank\"],[7],[0,\"the\\n              Github wiki\"],[8],[0,\".\\n            \"],[8],[0,\"\\n\\n            \"],[6,\"style\"],[9,\"media\",\"screen\"],[7],[0,\"\\n                .construction {\\n                    width: 20vh;\\n                    min-width:100px;\\n                    font-size:2vh;\\n                    border: 1vh solid #333333 !important;\\n                    margin: 4vh auto;\\n                    padding: 1.5vh;\\n                    border-radius: 2vh;\\n                }\\n            \"],[8],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"class\",\"shadow\"],[\"construction card-inverse card-warning\",false]],{\"statements\":[[0,\"                \"],[6,\"div\"],[9,\"class\",\"text-center\"],[7],[0,\"\\n                    \"],[6,\"div\"],[7],[0,\"\\n                        \"],[1,[25,\"fa-icon\",[\"exclamation-triangle\"],[[\"size\"],[2]]],false],[0,\"\\n                    \"],[8],[0,\"\\n                    \"],[6,\"div\"],[7],[0,\"\\n                        \"],[6,\"b\"],[7],[0,\"Under \"],[6,\"br\"],[7],[8],[0,\"Construction\"],[8],[0,\"\\n                    \"],[8],[0,\"\\n                \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/dashboard/template.hbs" } });
});
define('mdeditor/pods/dictionaries/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    inject: {
      service
    }
  } = Ember;

  exports.default = Route.extend({
    slider: service(),
    model() {
      //return this.store.peekAll('contact');
      return this.modelFor('application').findBy('modelName', 'dictionary');
    },

    columns: [{
      propertyName: 'title',
      title: 'Title'
    }, {
      propertyName: 'json.dataDictionary.subject',
      title: 'Subject'
    }],

    actions: {
      getColumns() {
        return this.get('columns');
      },

      showSlider(rec, evt) {
        let slider = this.get('slider');

        evt.stopPropagation();
        this.controller.set('errorTarget', rec);
        slider.set('fromName', 'md-slider-error');
        slider.toggleSlider(true);

        return false;
      }
    }
  });
});
define("mdeditor/pods/dictionaries/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "aGK8m2DB", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[9,\"class\",\"text-info\"],[7],[1,[25,\"fa-icon\",[\"book\"],null],false],[0,\" Dictionaries\"],[8],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"model\",\"length\"]]],null,{\"statements\":[[4,\"layout/md-card\",null,[[\"collapsible\",\"collapsed\",\"shadow\"],[true,false,true]],{\"statements\":[[0,\"    \"],[1,[25,\"control/md-record-table\",null,[[\"data\",\"dataColumns\",\"allActions\",\"selectProperty\"],[[20,[\"model\"]],[25,\"compute\",[[25,\"route-action\",[\"getColumns\"],null]],null],true,\"_selectedFromList\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[6,\"div\"],[9,\"class\",\"alert alert-info\"],[7],[0,\"\\n  \"],[6,\"h3\"],[7],[0,\"No Dictionaries found.\\n\"],[4,\"link-to\",[\"dictionary.new\"],[[\"class\"],[\"btn btn-success btn-lg\"]],{\"statements\":[[0,\"      \"],[1,[25,\"fa-icon\",[\"plus\"],null],false],[0,\" Create a Dictionary\\n\"]],\"parameters\":[]},null],[0,\"  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[4,\"if\",[[20,[\"errorTarget\"]]],null,{\"statements\":[[0,\"  \"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-slider-error\",[25,\"hash\",null,[[\"title\",\"body\"],[[25,\"concat\",[\"Viewing errors for: \",[20,[\"errorTarget\",\"title\"]]],null],[25,\"component\",[\"control/md-errors\"],[[\"errors\"],[[20,[\"errorTarget\",\"hasSchemaErrors\"]]]]]]]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/dictionaries/template.hbs" } });
});
define('mdeditor/pods/dictionary/new/id/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model(params) {
      // if(!params.dictionary_id) {
      //   return this.store.createRecord('dictionary');
      // }

      return this.store.findRecord('dictionary', params.dictionary_id);
    },

    breadCrumb: null,

    deactivate: function deactivate() {
      // We grab the model loaded in this route
      let model = this.currentRouteModel();

      // If we are leaving the Route we verify if the model is in
      // 'isNew' state, which means it wasn't saved to the backend.
      if (model && model.get('isNew')) {
        // We call DS#destroyRecord() which removes it from the store
        model.destroyRecord();
      }
    },

    //some test actions
    setupController: function setupController(controller, model) {
      // Call _super for default behavior
      this._super(controller, model);

      // setup tests for required attributes
      controller.noName = Ember.computed('model.json.dataDictionary.citation.title', function () {
        return model.get('json.dataDictionary.citation.title') ? false : true;
      });
      controller.noType = Ember.computed('model.json.dataDictionary.resourceType', function () {
        return model.get('json.dataDictionary.resourceType') ? false : true;
      });
      controller.allowSave = Ember.computed('noType', 'noName', function () {
        return this.get('noName') || this.get('noType');
      });
    },

    // serialize: function (model) {
    //   // If we got here without an ID (and therefore without a model)
    //   // Ensure that we leave the route param in the URL blank (not 'undefined')
    //   if(!model) {
    //     return {
    //       dictionary_id: ''
    //     };
    //   }
    //
    //   // Otherwise, let Ember handle it as usual
    //   return this._super.apply(this, arguments);
    // },

    actions: {
      willTransition: function willTransition(transition) {
        if (transition.targetName === 'dictionary.new.index') {
          this.currentRouteModel().destroyRecord();
          return true;
        }
      },

      saveDictionary() {
        this.currentRouteModel().save().then(model => {
          this.replaceWith('dictionary.show.edit', model);
        });
      },

      cancelDictionary() {
        this.replaceWith('dictionaries');

        return false;
      }
    }

  });
});
define("mdeditor/pods/dictionary/new/id/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "y/6lalTv", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"row page-header\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 col-xxl-6 col-xxl-offset-3\"],[7],[0,\"\\n      \"],[6,\"h3\"],[7],[0,\"Create New Data Dictionary\"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n    \"],[6,\"form\"],[9,\"class\",\"col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 col-xxl-6 col-xxl-offset-3\"],[3,\"action\",[[19,0,[]],\"saveDictionary\"],[[\"on\"],[\"submit\"]]],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n            \"],[6,\"label\"],[10,\"class\",[26,[\"control-label\\n            \",[25,\"if\",[[25,\"get\",[[25,\"get\",[[20,[\"model\",\"validations\",\"attrs\"]],\"json.dataDictionary.citation.title\"],null],\"options.presence.presence\"],null],\"required\"],null]]]],[7],[0,\"Dictionary Title\"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"\"],[7],[0,\"\\n                \"],[1,[25,\"input/md-input\",null,[[\"valuePath\",\"model\",\"placeholder\"],[\"json.dataDictionary.citation.title\",[20,[\"model\"]],\"Enter a title for the dictionary\"]]],false],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n            \"],[6,\"label\"],[9,\"class\",\"control-label\"],[7],[0,\"Dictionary Subject\"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"\"],[7],[0,\"\\n              \"],[1,[25,\"input/md-codelist-multi\",null,[[\"create\",\"tooltip\",\"icon\",\"disabled\",\"allowClear\",\"mdCodeName\",\"showValidations\",\"model\",\"path\",\"placeholder\"],[true,true,true,[20,[\"disabled\"]],true,\"scope\",true,[20,[\"model\"]],\"json.dataDictionary.subject\",\"Choose type(s) of resource\"]]],false],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-sm-offset-4 col-sm-8\"],[7],[0,\"\\n                 \"],[6,\"span\"],[9,\"class\",\"pull-right\"],[7],[0,\"\\n                      \"],[6,\"button\"],[9,\"type\",\"submit\"],[9,\"class\",\"btn btn-success md-form-save\"],[10,\"disabled\",[25,\"get\",[[20,[\"model\",\"validations\"]],\"isInvalid\"],null],null],[7],[0,\"Save\"],[8],[0,\"\\n                      \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-warning \"],[3,\"action\",[[19,0,[]],\"cancelDictionary\"]],[7],[0,\"Cancel\"],[8],[0,\"\\n                 \"],[8],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/dictionary/new/id/template.hbs" } });
});
define('mdeditor/pods/dictionary/new/index/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    redirect: function redirect() {
      let rec = this.store.createRecord('dictionary');

      this.replaceWith('dictionary.new.id', rec);
    }
  });
});
define("mdeditor/pods/dictionary/new/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "29JD9HAj", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/dictionary/new/index/template.hbs" } });
});
define('mdeditor/pods/dictionary/new/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    breadCrumb: {
      title: 'New',
      linkable: false
    }
  });
});
define('mdeditor/pods/dictionary/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    breadCrumb: {
      title: 'Dictionary',
      linkable: false
    }
  });
});
define('mdeditor/pods/dictionary/show/edit/citation/identifier/route', ['exports', 'mdeditor/mixins/scroll-to'], function (exports, _scrollTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  var isEmpty = Ember.isEmpty;
  var isArray = Ember.isArray;
  var get = Ember.get;
  exports.default = Route.extend(_scrollTo.default, {
    model(params) {
      this.set('identifierId', params.identifier_id);

      return this.setupModel();
    },

    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      this.controller.set('parentModel', this.modelFor('dictionary.show.edit.citation.index'));
      this.controllerFor('dictionary.show.edit').setProperties({
        onCancel: this.setupModel
      });
    },

    setupModel() {
      let identifierId = get(this, 'identifierId');
      let model = this.modelFor('dictionary.show.edit.citation.index');
      let identifiers = model.get('json.dataDictionary.citation.identifier');
      let identifier = identifierId && isArray(identifiers) ? identifiers.get(identifierId) : undefined;

      //make sure the identifier exists
      if (isEmpty(identifier)) {
        get(this, 'flashMessages').warning('No identifier found! Re-directing to citation...');
        this.replaceWith('dictionary.show.edit.citation.index');

        return;
      }

      return identifier;
    }
  });
});
define("mdeditor/pods/dictionary/show/edit/citation/identifier/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "tNJhf+MA", "block": "{\"symbols\":[],\"statements\":[[6,\"h4\"],[9,\"class\",\"col-xxl-11 col-xxxl-10 col-xxl-offset-1 section-header\"],[7],[0,\"\\n  Editing Identifier: \"],[1,[20,[\"model\",\"identifier\"]],false],[0,\"\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"parentModel\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[1,[25,\"object/md-identifier\",null,[[\"class\",\"model\",\"profilePath\",\"data-spy\"],[\"col-xxl-11 col-xxxl-10 col-xxl-offset-1\",[20,[\"model\"]],\"dictionary.citation.identifier\",\"Identifier\"]]],false],[0,\"\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-subbar-extra\",[25,\"component\",[\"control/subbar-link\"],[[\"text\",\"icon\",\"route\"],[\"Back to Citation\",\"arrow-left\",\"dictionary.show.edit.citation\"]]]]]],false],[0,\"\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-scroll-spy-dict-edit\",[25,\"component\",[\"control/md-scroll-spy\"],[[\"scrollInit\",\"setScrollTo\"],[[20,[\"scrollTo\"]],[25,\"route-action\",[\"setScrollTo\"],null]]]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/dictionary/show/edit/citation/identifier/template.hbs" } });
});
define('mdeditor/pods/dictionary/show/edit/citation/index/route', ['exports', 'mdeditor/mixins/scroll-to'], function (exports, _scrollTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend(_scrollTo.default, {
    actions: {
      editIdentifier(index) {
        this.transitionTo('dictionary.show.edit.citation.identifier', index).then(function () {
          this.setScrollTo('identifier');
        }.bind(this));
      }
    }
  });
});
define("mdeditor/pods/dictionary/show/edit/citation/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "taTD3sAM", "block": "{\"symbols\":[\"citation\"],\"statements\":[[6,\"h4\"],[9,\"class\",\"col-xxl-11 col-xxxl-10 col-xxl-offset-1 section-header\"],[7],[0,\"Editing Citation\\n  \"],[6,\"span\"],[9,\"class\",\"small\"],[7],[0,\"for \"],[6,\"em\"],[7],[1,[20,[\"model\",\"title\"]],false],[8],[8],[0,\"\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"model\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\"],[4,\"with\",[[20,[\"model\",\"json\",\"dataDictionary\",\"citation\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n      \"],[1,[25,\"object/md-citation\",null,[[\"class\",\"model\",\"profilePath\",\"editIdentifier\"],[\"col-xxl-11 col-xxxl-10 col-xxl-offset-1\",[19,1,[]],\"dictionary.citation\",[25,\"route-action\",[\"editIdentifier\"],null]]]],false],[0,\"\\n      \"],[1,[18,\"outlet\"],false],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-subbar-extra\",[25,\"component\",[\"control/subbar-link\"],[[\"text\",\"icon\",\"route\"],[\"Back to Overview\",\"home\",\"dictionary.show.index\"]]]]]],false],[0,\"\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-scroll-spy-dict-edit\",[25,\"component\",[\"control/md-scroll-spy\"],[[\"scrollInit\",\"setScrollTo\"],[[20,[\"scrollTo\"]],[25,\"route-action\",[\"setScrollTo\"],null]]]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/dictionary/show/edit/citation/index/template.hbs" } });
});
define('mdeditor/pods/dictionary/show/edit/citation/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("mdeditor/pods/dictionary/show/edit/citation/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "++BvoGuK", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"liquid-outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/dictionary/show/edit/citation/template.hbs" } });
});
define('mdeditor/pods/dictionary/show/edit/domains/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("mdeditor/pods/dictionary/show/edit/domains/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5uoJryTC", "block": "{\"symbols\":[],\"statements\":[[0,\"Edit domains\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/dictionary/show/edit/domains/template.hbs" } });
});
define('mdeditor/pods/dictionary/show/edit/entities/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("mdeditor/pods/dictionary/show/edit/entities/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "SDGCsZZH", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/dictionary/show/edit/entities/template.hbs" } });
});
define('mdeditor/pods/dictionary/show/edit/index/route', ['exports', 'mdeditor/mixins/scroll-to'], function (exports, _scrollTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  const {
    Route,
    get,
    getWithDefault,
    set
  } = Ember;

  exports.default = Route.extend(_scrollTo.default, {
    afterModel(m) {
      this._super(...arguments);

      let model = get(m, 'json.dataDictionary');
      set(model, 'citation', getWithDefault(model, 'citation', {}));
      set(model, 'responsibleParty', getWithDefault(model, 'responsibleParty', {}));
      set(model, 'subject', getWithDefault(model, 'subject', []));
      set(model, 'recommendedUse', getWithDefault(model, 'recommendedUse', []));
      set(model, 'locale', getWithDefault(model, 'locale', []));
      set(model, 'domain', getWithDefault(model, 'domain', []));
      set(model, 'entity', getWithDefault(model, 'entity', []));
    },
    actions: {
      editCitation(scrollTo) {
        this.transitionTo('dictionary.show.edit.citation').then(function () {
          this.setScrollTo(scrollTo);
        }.bind(this));
      }
    }
  });
});
define("mdeditor/pods/dictionary/show/edit/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cFvBU8EF", "block": "{\"symbols\":[\"resource\",\"val\"],\"statements\":[[4,\"with\",[[20,[\"model\",\"json\",\"dataDictionary\"]]],null,{\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n    \"],[6,\"form\"],[9,\"class\",\"col-xxl-11 col-xxxl-10 col-xxl-offset-1\"],[7],[0,\"\\n      \"],[6,\"h4\"],[9,\"class\",\"section-header\"],[7],[0,\"\\n        Editing \"],[6,\"em\"],[7],[1,[20,[\"model\",\"title\"]],false],[8],[0,\"\\n        \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"model\"]]]]],false],[0,\"\\n      \"],[8],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"title\",\"collapsible\",\"collapsed\",\"profilePath\",\"data-spy\",\"required\"],[\"Basic Information\",true,false,\"dictionary.main.basicInformation\",\"Basic Information\",true]],{\"statements\":[[0,\"        \"],[1,[25,\"input/md-input\",null,[[\"value\",\"placeholder\",\"label\",\"required\",\"profilePath\",\"data-spy\",\"class\"],[[20,[\"model\",\"title\"]],\"Enter the title for the dictionary.\",\"Title\",true,\"dictionary.main.title\",\"Title\",\"md-embedded\"]]],false],[0,\"\\n\\n\"],[4,\"if\",[[25,\"is-array\",[[19,1,[\"subject\"]]],null]],null,{\"statements\":[[0,\"          \"],[1,[25,\"input/md-codelist-multi\",null,[[\"create\",\"label\",\"tooltip\",\"icon\",\"disabled\",\"allowClear\",\"mdCodeName\",\"showValidations\",\"model\",\"path\",\"placeholder\",\"profilePath\",\"data-spy\",\"class\"],[true,\"Subject\",true,true,[20,[\"disabled\"]],true,\"scope\",true,[20,[\"model\"]],\"json.dataDictionary.subject\",\"Choose type(s) of resource\",\"dictionary.main.subject\",\"Subject\",\"md-embedded\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"title\",\"class\",\"required\",\"collapsible\",\"collapsed\",\"profilePath\",\"data-spy\",\"shadow\"],[\"Responsible Party\",\"md-embedded\",true,false,false,\"dictionary.main.responsibleParty\",\"Responsible Party\",false]],{\"statements\":[[0,\"          \"],[1,[25,\"object/md-party\",null,[[\"model\"],[[19,1,[\"responsibleParty\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n        \"],[1,[25,\"input/md-markdown-area\",null,[[\"value\",\"profilePath\",\"label\",\"placeholder\",\"data-spy\",\"class\"],[[19,1,[\"description\"]],\"dictionary.main.description\",\"Description\",\"Enter text describing the dictionary.\",\"Description\",\"md-embedded\"]]],false],[0,\"\\n\\n        \"],[1,[25,\"input/md-input\",null,[[\"value\",\"placeholder\",\"label\",\"required\",\"profilePath\"],[[19,1,[\"dictionaryFormat\"]],\"Describe the language used in the dictionary, e.g. UML.\",\"Dictionary Format\",true,\"dictionary.main.dictionaryFormat\"]]],false],[0,\"\\n\\n        \"],[1,[25,\"input/md-boolean\",null,[[\"label\",\"text\",\"value\",\"profilePath\"],[\"Dictionary Included?\",\"Dictionary is included with the resource\",[19,1,[\"dictionaryIncludedWithResource\"]],\"dictionary.main.included\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"object/md-simple-array-table\",null,[[\"title\",\"required\",\"plain\",\"profilePath\",\"value\"],[\"Recommended Use\",false,false,\"dictionary.main.included\",[19,1,[\"recommendedUse\"]]]],{\"statements\":[[0,\"        \"],[6,\"td\"],[7],[0,\"\\n            \"],[1,[25,\"input/md-textarea\",null,[[\"value\",\"placeholder\"],[[19,2,[\"item\",\"value\"]],\"Enter a description of how the dictionary should be used.\"]]],false],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n      \"],[1,[25,\"object/md-locale-array\",null,[[\"title\",\"data-spy\",\"collapsible\",\"collapsed\",\"required\",\"value\",\"profilePath\"],[\"Locale\",\"Locales\",true,false,false,[19,1,[\"locale\"]],\"dictionary.main.locale\"]]],false],[0,\"\\n\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-scroll-spy-dict-edit\",[25,\"component\",[\"control/md-scroll-spy\"],[[\"scrollInit\",\"setScrollTo\"],[[20,[\"scrollTo\"]],[25,\"route-action\",[\"setScrollTo\"],null]]]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/dictionary/show/edit/index/template.hbs" } });
});
define('mdeditor/pods/dictionary/show/edit/route', ['exports', 'mdeditor/mixins/hash-poll'], function (exports, _hashPoll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    inject,
    Route,
    get,
    copy
  } = Ember;

  exports.default = Route.extend(_hashPoll.default, {
    /**
     * The profile service
     *
     * @return {Ember.Service} profile
     */
    profile: inject.service(),

    /**
     * The route activate hook, sets the profile to 'dictionary'.
     */
    activate() {
      this.get('profile').set('active', 'dictionary');
    },

    renderTemplate() {
      this.render('nav-secondary', {
        into: 'application',
        outlet: 'nav-secondary'
      });
      this.render('dictionary.show.edit', {
        into: 'dictionary.show'
      });
    }
  });
});
define("mdeditor/pods/dictionary/show/edit/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ONO62Ymw", "block": "{\"symbols\":[\"spy\"],\"statements\":[[6,\"div\"],[9,\"class\",\"row md-section-secondary\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"md-record-content col-sm-10\"],[7],[0,\"\\n    \"],[1,[25,\"liquid-outlet\",null,[[\"class\"],[\"liquid-spy\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-2\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"md-control-sidebar hidden-print\"],[7],[0,\"\\n      \"],[1,[25,\"control/md-crud-buttons\",null,[[\"model\",\"doSave\",\"doCancel\",\"doDelete\",\"doCopy\"],[[20,[\"model\"]],\"saveDictionary\",\"cancelDictionary\",\"destroyDictionary\",\"copyDictionary\"]]],false],[0,\"\\n      \"],[1,[25,\"component\",[[20,[\"subbar\"]]],[[\"context\"],[[25,\"route-action\",[\"getContext\"],null]]]],false],[0,\"\\n      \"],[6,\"hr\"],[7],[8],[0,\"\\n      \"],[1,[25,\"from-elsewhere\",null,[[\"name\"],[\"md-subbar-extra\"]]],false],[0,\"\\n\\n\"],[4,\"from-elsewhere\",null,[[\"name\"],[\"md-scroll-spy-dict-edit\"]],{\"statements\":[[0,\"          \"],[1,[25,\"component\",[[19,1,[]]],[[\"offset\"],[134]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/dictionary/show/edit/template.hbs" } });
});
define('mdeditor/pods/dictionary/show/index/route', ['exports', 'mdeditor/mixins/scroll-to'], function (exports, _scrollTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_scrollTo.default, {
    actions: {
      editCitation(scrollTo) {
        this.transitionTo('dictionary.show.edit.citation').then(function () {
          this.setScrollTo(scrollTo);
        }.bind(this));
      }
    }
  });
});
define("mdeditor/pods/dictionary/show/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ksf2jB+J", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"row md-no-spotlight\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-9 col-md-offset-1\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"\\n      \"],[1,[25,\"fa-icon\",[\"book\"],[[\"class\"],[\"text-muted\"]]],false],[0,\"\\n\\n      Viewing Dictionary: \"],[1,[20,[\"model\",\"title\"]],false],[0,\"\\n      \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"model\"]]]]],false],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[1,[25,\"object/md-citation/preview\",null,[[\"profilePath\",\"citation\",\"muted\",\"editCitation\"],[\"dictionary.main.citation\",[20,[\"model\",\"json\",\"dataDictionary\",\"citation\"]],true,\"editCitation\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-2\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"md-control-sidebar\"],[7],[0,\"\\n\"],[4,\"control/md-crud-buttons\",null,[[\"model\",\"doDelete\",\"doCopy\"],[[20,[\"model\"]],\"destroyDictionary\",\"copyDictionary\"]],{\"statements\":[[4,\"link-to\",[\"dictionary.show.edit\",[20,[\"model\",\"id\"]]],[[\"class\"],[\"btn btn-lg btn-success\"]],{\"statements\":[[0,\"          \"],[1,[25,\"fa-icon\",[\"pencil\"],null],false],[0,\" Edit\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[6,\"hr\"],[7],[8],[0,\"\\n\"],[4,\"link-to\",[\"dictionaries\"],[[\"class\"],[\"btn btn-lg btn-primary btn-block\"]],{\"statements\":[[0,\"      \"],[1,[25,\"fa-icon\",[\"list\"],null],false],[0,\" Show List\"]],\"parameters\":[]},null],[0,\"\\n      \"],[1,[18,\"control/md-scroll-spy\"],false],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/dictionary/show/index/template.hbs" } });
});
define('mdeditor/pods/dictionary/show/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    inject,
    Route,
    get,
    copy
  } = Ember;

  exports.default = Route.extend({
    flashMessages: inject.service(),

    model: function model(params) {
      let rec = this.store.peekRecord('dictionary', params.dictionary_id);
      return rec;
    },

    actions: {
      saveDictionary: function saveDictionary() {
        let model = this.currentRouteModel();

        model.save().then(() => {
          //this.refresh();
          //this.setModelHash();
          get(this, 'flashMessages').success(`Saved Dictionary: ${model.get('title')}`);

          //this.transitionTo('contacts');
        });
      },

      destroyDictionary: function destroyDictionary() {
        let model = this.currentRouteModel();
        model.destroyRecord().then(() => {
          get(this, 'flashMessages').success(`Deleted Dictionary: ${model.get('title')}`);
          this.replaceWith('dictionaries');
        });
      },

      cancelDictionar: function cancelDictionar() {
        let model = this.currentRouteModel();
        let message = `Cancelled changes to Dictionary: ${model.get('title')}`;

        if (this.get('settings.data.autoSave')) {
          let json = model.get('jsonRevert');

          if (json) {
            model.set('json', JSON.parse(json));
            get(this, 'flashMessages').warning(message);
          }

          return;
        }

        model.reload().then(() => {
          get(this, 'flashMessages').warning(message);
        });
      },

      copyDictionary: function copyDictionary() {

        get(this, 'flashMessages').success(`Copied Dictionary: ${this.currentRouteModel().get('title')}`);
        this.transitionTo('dictionary.new.id', copy(this.currentRouteModel()));
      }
    }
  });
});
define("mdeditor/pods/dictionary/show/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "U4N8uUoP", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/dictionary/show/template.hbs" } });
});
define("mdeditor/pods/dictionary/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8jHiSwTM", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/dictionary/template.hbs" } });
});
define('mdeditor/pods/error/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("mdeditor/pods/error/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "oFbM7EgB", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"alert alert-danger text-center\"],[7],[0,\"\\n  \"],[6,\"h1\"],[7],[1,[25,\"fa-icon\",[\"exclamation-triangle\"],null],false],[0,\" Application Error\"],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"\\n    The application has encountered an error, or a record that no longer exists.\\n  \"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"lastError\"]]],null,{\"statements\":[[0,\"    \"],[6,\"p\"],[7],[0,\"\\n      Message:\\n      \"],[6,\"a\"],[9,\"data-toggle\",\"collapse\"],[9,\"href\",\".error-stack\"],[9,\"aria-expanded\",\"false\"],[7],[0,\"\\n        \"],[1,[20,[\"lastError\",\"message\"]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"error-stack collapse\"],[7],[0,\"\\n      \"],[6,\"pre\"],[9,\"class\",\"inline-block text-left\"],[7],[0,\"\\n        TRACE:\\n        \"],[1,[20,[\"lastError\",\"stack\"]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/error/template.hbs" } });
});
define('mdeditor/pods/export/route', ['exports', 'moment', 'mdeditor/mixins/scroll-to', 'ember-inflector'], function (exports, _moment, _scrollTo, _emberInflector) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    get,
    Object: EmObject,
    defineProperty,
    computed,
    inject
  } = Ember;

  const modelTypes = ['records', 'contacts', 'dictionaries', 'settings'];

  exports.default = Ember.Route.extend(_scrollTo.default, {
    mdjson: inject.service(),
    settings: inject.service(),
    model() {
      //const store = this.get('store');

      return EmObject.create({
        records: this.modelFor('application'),
        settings: this.get('settings.data')
      });
    },
    setupController(controller, model) {
      // Call _super for default behavior
      this._super(controller, model);
      // Implement your custom setup after
      defineProperty(this.controller, 'hasSelected', computed('model.records.0.@each._selected', 'model.records.1.@each._selected', 'model.records.2.@each._selected', 'model.settings._selected', function () {
        return this.store.peekAll('record').filterBy('_selected').get('length') + this.store.peekAll('contact').filterBy('_selected').get('length') + this.store.peekAll('dictionary').filterBy('_selected').get('length') + this.store.peekAll('setting').filterBy('_selected').get('length') > 0;
      }));
      defineProperty(this.controller, 'hasSelectedRecords', computed('model.records.0.@each._selected', function () {
        return this.store.peekAll('record').filterBy('_selected').get('length') > 0;
      }));
    },

    columns: EmObject.create({
      record: [{
        propertyName: 'title',
        title: 'Title'
      }, {
        propertyName: 'defaultType',
        title: 'Type'
      }, {
        propertyName: 'recordId',
        title: 'ID'
      }],
      contact: [{
        propertyName: 'title',
        title: 'Title'
      }, {
        propertyName: 'defaultOrganization',
        title: 'Organization'
      }, {
        propertyName: 'json.electronicMailAddress.firstObject',
        title: 'E-mail'
      }, {
        propertyName: 'contactId',
        title: 'ID'
      }],
      dictionary: [{
        propertyName: 'title',
        title: 'Title'
      }, {
        propertyName: 'defaultType',
        title: 'Type'
      }, {
        propertyName: 'dictionaryId',
        title: 'ID'
      }]
    }),
    actions: {
      exportData() {
        this.get('store').exportData(modelTypes, {
          download: true,
          filename: `mdeditor-${(0, _moment.default)().format('YYYYMMDD-HHMMSS')}.json`
        });
      },
      exportSelectedData(asMdjson) {
        let store = this.get('store');

        if (asMdjson) {
          let records = store.peekAll('record').filterBy('_selected').map(itm => {
            return get(this, 'mdjson').formatRecord(itm);
          });

          window.saveAs(new Blob([JSON.stringify(records)], {
            type: 'application/json;charset=utf-8'
          }), `mdjson-${(0, _moment.default)().format('YYYYMMDD-HHMMSS')}.json`);
        } else {
          let filterIds = {};

          modelTypes.forEach(type => {
            let t = (0, _emberInflector.singularize)(type);

            filterIds[t] = store.peekAll(t).filterBy('_selected').mapBy('id');
          });

          store.exportSelectedData(modelTypes, {
            download: true,
            filename: `mdeditor-${(0, _moment.default)().format('YYYYMMDD-HHMMSS')}.json`,
            filterIds: filterIds
          });
        }
      },
      getColumns(type) {
        return get(this, 'columns').get(type);
      },
      hasSelected() {
        return get(this, 'hasSelected');
      }
    }
  });
});
define("mdeditor/pods/export/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4XW0trOl", "block": "{\"symbols\":[\"section\",\"index\"],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-10\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"Export Data\"],[8],[0,\"\\n\"],[4,\"each\",[[20,[\"model\",\"records\"]]],null,{\"statements\":[[4,\"if\",[[19,1,[\"length\"]]],null,{\"statements\":[[4,\"if\",[[19,2,[]]],null,{\"statements\":[[0,\"        \"],[6,\"hr\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[6,\"section\"],[7],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"title\",\"titleIcon\",\"collapsible\",\"collapsed\",\"data-spy\",\"shadow\"],[[19,1,[\"meta\",\"title\"]],[19,1,[\"meta\",\"icon\"]],true,false,[19,1,[\"meta\",\"title\"]],true]],{\"statements\":[[0,\"        \"],[1,[25,\"control/md-record-table\",null,[[\"data\",\"dataColumns\"],[[19,1,[]],[25,\"compute\",[[25,\"route-action\",[\"getColumns\"],null],[19,1,[\"meta\",\"type\"]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1,2]},null],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-2\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"md-control-sidebar\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"btn-group-vertical center-block\"],[9,\"role\",\"group\"],[9,\"aria-label\",\"Export Button Controls\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-lg btn-primary md-btn-responsive\"],[3,\"action\",[[19,0,[]],\"exportData\"]],[7],[0,\"\\n          \"],[1,[25,\"fa-icon\",[\"sign-out\"],null],false],[0,\" Export All\"],[8],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-lg btn-info md-btn-responsive\"],[10,\"disabled\",[25,\"if\",[[20,[\"hasSelected\"]],false,true],null],null],[3,\"action\",[[19,0,[]],\"exportSelectedData\"]],[7],[0,\"\\n          \"],[1,[25,\"fa-icon\",[\"fa-check-square-o\"],null],false],[0,\" Export Selected\"],[8],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-lg btn-success md-btn-responsive\"],[10,\"disabled\",[25,\"if\",[[20,[\"hasSelectedRecords\"]],false,true],null],null],[3,\"action\",[[19,0,[]],\"exportSelectedData\",true]],[7],[0,\"\\n          \"],[1,[25,\"fa-icon\",[\"fa-check-square-o\"],null],false],[0,\" Export mdJSON\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"hr\"],[7],[8],[0,\"\\n      \"],[6,\"label\"],[9,\"class\",\"center-block text-center\"],[7],[0,\"Include Settings?\"],[8],[0,\"\\n      \"],[1,[25,\"x-toggle\",null,[[\"value\",\"onToggle\",\"showLabels\",\"onLabel\",\"offLabel\",\"size\",\"theme\"],[[20,[\"model\",\"settings\",\"_selected\"]],[25,\"mut\",[[20,[\"model\",\"settings\",\"_selected\"]]],null],true,\"Yes::true\",\"No::false\",\"medium\",\"form\"]]],false],[0,\"\\n      \"],[6,\"hr\"],[7],[8],[0,\"\\n      \"],[1,[25,\"control/md-scroll-spy\",null,[[\"offset\",\"scrollInit\",\"setScrollTo\"],[134,[20,[\"scrollTo\"]],[25,\"route-action\",[\"setScrollTo\"],null]]]],false],[0,\"\\n\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n\"],[8],[0,\"\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/export/template.hbs" } });
});
define('mdeditor/pods/help/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("mdeditor/pods/help/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "B/fGdD8J", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/help/template.hbs" } });
});
define('mdeditor/pods/import/route', ['exports', 'ember-local-storage/adapters/base', 'npm:uuid/v4', 'mdeditor/mixins/scroll-to', 'mdeditor/models/contact'], function (exports, _base, _v, _scrollTo, _contact) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var allSettled = Ember.RSVP.allSettled;


  const generateIdForRecord = _base.default.create().generateIdForRecord;

  const {
    Route,
    get,
    set,
    RSVP: {
      Promise
    },
    inject,
    Object: EmObject,
    assign,
    isArray,
    $,
    A,
    merge,
    computed
  } = Ember;

  exports.default = Route.extend(_scrollTo.default, {
    flashMessages: inject.service(),
    jsonvalidator: inject.service(),
    settings: inject.service(),

    setupController(controller, model) {
      // Call _super for default behavior
      this._super(controller, model);
      // Implement your custom setup after
      controller.set('importUri', this.get('settings.data.importUriBase'));
    },

    model() {
      return EmObject.create({
        files: false,
        merge: true
      });
    },

    getTitle(record) {
      let raw = record.attributes.json;
      let json = raw ? JSON.parse(raw) : null;

      switch (record.type) {
        case 'records':
          return json.metadata.resourceInfo.citation.title;
        case 'dictionaries':
          return json.dataDictionary.citation.title;
        case 'contacts':
          return json.name;
        default:
          return 'N/A';
      }
    },

    icons: {
      records: 'file',
      dictionaries: 'book',
      contacts: 'users',
      settings: 'gear'
    },

    formatMdJSON(json) {
      let {
        contact,
        dataDictionary
      } = json;
      let data = A();
      let template = EmObject.extend({
        init() {
          this._super(...arguments);

          set(this, 'id', generateIdForRecord());
        },
        attributes: {
          json: null
          //date-updated: '2017-05-18T21:21:34.446Z'
        },
        type: null
      });

      contact.forEach(item => {
        data.pushObject(template.create({
          attributes: {
            json: JSON.stringify(merge(_contact.JsonDefault.create(), item))
          },
          type: 'contacts'
        }));
      });

      if (get(json, 'metadata.metadataInfo.metadataIdentifier') === undefined) {
        json.metadata.metadataInfo.metadataIdentifier = {
          identifier: (0, _v.default)(),
          namespace: 'urn:uuid'
        };
      }

      data.pushObject(template.create({
        attributes: {
          json: JSON.stringify(json),
          profile: 'full'
        },
        type: 'records'
      }));

      if (dataDictionary) {
        dataDictionary.forEach(item => {
          data.pushObject(template.create({
            attributes: {
              json: JSON.stringify({
                dataDictionary: item
              })
            },
            type: 'dictionaries'
          }));
        });
      }

      return data;
    },

    mapJSON(data) {
      let {
        json,
        route
      } = data;
      let files;

      if (isArray(data.json.data)) {
        files = this.mapEditorJSON(data);
      } else {
        //assume it's raw mdJSON for now
        files = this.mapMdJSON(data);
      }

      route.currentRouteModel().set('files', files);

      route.currentRouteModel().set('data', json.data);
    },

    mapMdJSON(data) {
      let map = A();

      if (isArray(data.json)) {
        data.json.forEach(item => {
          map = map.concat(this.formatMdJSON(item));
        });
      } else {
        map = map.concat(this.formatMdJSON(data.json));
      }

      set(data, 'json.data', map);

      return this.mapRecords(map);
    },

    mapRecords(records) {
      return records.reduce((map, item) => {

        if (!map[item.type]) {
          map[item.type] = [];
        }

        item.meta = {};
        item.meta.title = this.getTitle(item);
        item.meta.icon = this.icons[item.type];
        item.meta.export = true;

        map[item.type].push(EmObject.create(item));
        return map;
      }, {});
    },

    mapEditorJSON(data) {
      let {
        file,
        json
      } = data;
      let jv = get(this, 'jsonvalidator.validator');
      let valid = jv.validate('jsonapi', json);

      if (!valid) {
        throw new Error(`${file.name} is not a valid mdEditor file.`);
      }

      return this.mapRecords(json.data);
    },

    columns: computed(function () {
      let route = this;

      return [{
        propertyName: 'meta.title',
        title: 'Title'
      }, {
        propertyName: 'attributes.date-updated',
        title: 'Last Updated'
      }, {
        propertyName: 'id',
        title: 'ID'
      }, {
        title: 'Actions',
        component: 'control/md-record-table/buttons/custom',
        disableFiltering: true,
        buttonConfig: {
          title: 'Preview JSON',
          action(model) {
            route.showPreview.call(route, model);
          },
          iconPath: 'meta.icon'
        }
      }];
    }),

    showPreview(model) {
      let json = {};
      assign(json, model.attributes);

      if (model.attributes.json) {
        json.json = JSON.parse(model.attributes.json);
      }

      this.currentRouteModel().set('preview', {
        model: model,
        json: json
      });
    },

    actions: {
      getColumns() {
        return get(this, 'columns');
      },
      getIcon(type) {
        return this.get('icons')[type];
      },
      readData(file) {
        let json;

        new Promise((resolve, reject) => {
          try {
            json = JSON.parse(file.data);
          } catch (e) {
            reject(`Failed to parse file: ${file.name}. Is it valid JSON?`);
          }

          resolve({
            json: json,
            file: file,
            route: this
          });
        }).then(data => {
          //determine file type and map
          this.mapJSON(data);
        }).catch(reason => {
          //catch any errors
          get(this, 'flashMessages').danger(reason);
          return false;
        }).finally(() => {
          $('.import-file-picker input:file').val('');
        });
      },

      readFromUri() {
        let uri = this.controller.get('importUri');

        set(this.controller, 'isLoading', true);

        $.ajax(uri, {
          type: 'GET',
          context: this,
          dataType: 'text',
          crossDomain: true
        }).then(function (response, textStatus) {

          if (response && textStatus === 'success') {
            let json;

            new Promise((resolve, reject) => {
              try {
                json = JSON.parse(response);
              } catch (e) {
                reject(`Failed to parse data. Is it valid JSON?`);
              }

              resolve({
                json: json,
                file: null,
                route: this
              });
            }).then(data => {
              //determine file type and map
              this.mapJSON(data);
            }).catch(reason => {
              //catch any errors
              get(this, 'flashMessages').danger(reason);
              return false;
            }).finally(() => {
              set(this.controller, 'isLoading', false);
              $('.import-file-picker input:file').val('');
            });
          } else {
            set(this.controller, 'errors', response.messages);
            get(this, 'flashMessages').danger('Import error!');
          }
        }, response => {
          let error = ` Error retrieving the mdJSON: ${response.status}: ${response.statusText}`;

          set(this.controller, 'xhrError', error);
          set(this.controller, 'isLoading', false);
          get(this, 'flashMessages').danger(error);
        });
      },
      importData() {
        let store = this.store;
        let data = {
          data: this.currentRouteModel().get('data').filterBy('meta.export').rejectBy('type', 'settings')
        };

        store.importData(data, {
          truncate: !this.currentRouteModel().get('merge'),
          json: false
        }).then(() => {
          get(this, 'flashMessages').success(`Imported data. Records were
              ${this.currentRouteModel().get('merge') ? 'merged' : 'replaced'}.`, {
            extendedTimeout: 1500
          });
          //this.transitionTo('dashboard');
        });

        let settingService = this.get('settings');
        let newSettings = this.currentRouteModel().get('data').filterBy('meta.export').findBy('type', 'settings');

        if (newSettings) {
          let settings = {
            data: [newSettings]
          };
          let destroys = [];

          store.findAll('setting').forEach(rec => {
            destroys.pushObject(rec.destroyRecord());
          });

          allSettled(destroys).then(() => {
            store.importData(settings, {
              json: false
            }).then(() => {
              settingService.setup();
              get(this, 'flashMessages').success(`Imported Settings.`, {
                extendedTimeout: 1500
              });
            });
          });
        }
      },
      closePreview() {
        this.currentRouteModel().set('preview', false);
      },
      cancelImport() {
        this.currentRouteModel().set('files', false);
      }
    }
  });
});
define("mdeditor/pods/import/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "WNAcxnXd", "block": "{\"symbols\":[\"key\",\"item\"],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n\\n  \"],[6,\"div\"],[10,\"class\",[26,[\"col-sm-\",[25,\"if\",[[20,[\"model\",\"files\"]],\"9\",\"12\"],null],\" col-xxl-\",[25,\"if\",[[20,[\"model\",\"files\"]],\"10\",\"12\"],null]]]],[7],[0,\"\\n\\n    \"],[6,\"h3\"],[7],[0,\"Import Data\"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"model\",\"preview\"]]],null,{\"statements\":[[0,\"      \"],[6,\"h3\"],[7],[1,[25,\"capitalize\",[[25,\"singularize\",[[20,[\"model\",\"preview\",\"model\",\"type\"]]],null]],null],false],[0,\": \"],[1,[20,[\"model\",\"preview\",\"model\",\"id\"]],false],[8],[0,\"\\n      \"],[1,[25,\"control/md-json-viewer\",null,[[\"class\",\"json\",\"modal\"],[\"md-import-preview\",[20,[\"model\",\"preview\",\"json\"]],false]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"unless\",[[20,[\"model\",\"files\"]]],null,{\"statements\":[[4,\"file-picker\",null,[[\"class\",\"fileLoaded\",\"preview\",\"accept\",\"readAs\"],[\"md-file-picker md-import-picker\",\"readData\",false,\".json\",\"readAsText\"]],{\"statements\":[[0,\"          \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-lg btn-info btn-block\"],[7],[1,[25,\"fa-icon\",[\"bullseye\"],null],false],[0,\"\\n            Click or Drop a file here to import data. \"],[6,\"br\"],[7],[8],[0,\"mdEditor and mdJSON files are supported.\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[6,\"hr\"],[7],[8],[0,\"\\n        \"],[6,\"h3\"],[7],[0,\"Import from Online URL\"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-xxl-6\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"input-group input-group-lg\"],[7],[0,\"\\n              \"],[1,[25,\"input\",null,[[\"type\",\"value\",\"placeholder\",\"class\"],[\"url\",[20,[\"importUri\"]],\"Enter online link to mdJSON\",\"form-control\"]]],false],[0,\"\\n              \"],[6,\"span\"],[9,\"class\",\"input-group-btn\"],[7],[0,\"\\n                  \"],[6,\"button\"],[9,\"class\",\"btn btn-primary\"],[9,\"type\",\"button\"],[3,\"action\",[[19,0,[]],[25,\"route-action\",[\"readFromUri\"],null]]],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"isLoading\"]]],null,{\"statements\":[[0,\"                      \"],[1,[25,\"fa-icon\",[\"spinner\"],[[\"spin\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                      \"],[1,[25,\"fa-icon\",[\"cloud-download\"],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                    Import\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"each\",[[25,\"-each-in\",[[20,[\"model\",\"files\"]]],null]],null,{\"statements\":[[4,\"layout/md-card\",null,[[\"title\",\"titleIcon\",\"collapsible\",\"collapsed\",\"data-spy\",\"shadow\"],[[25,\"capitalize\",[[19,1,[]]],null],[25,\"compute\",[[25,\"route-action\",[\"getIcon\",[19,1,[]]],null]],null],true,false,[25,\"capitalize\",[[19,1,[]]],null],true]],{\"statements\":[[0,\"        \"],[1,[25,\"control/md-record-table\",null,[[\"data\",\"dataColumns\",\"actionsColumn\",\"selectProperty\",\"showColumnsDropdown\",\"showComponentFooter\",\"showGlobalFilter\",\"showPageSize\",\"useFilteringByColumns\"],[[19,2,[]],[25,\"compute\",[[25,\"route-action\",[\"getColumns\"],null],[19,1,[]]],null],false,\"meta.export\",[25,\"not-eq\",[[19,1,[]],\"settings\"],null],[25,\"not-eq\",[[19,1,[]],\"settings\"],null],[25,\"not-eq\",[[19,1,[]],\"settings\"],null],[25,\"not-eq\",[[19,1,[]],\"settings\"],null],[25,\"not-eq\",[[19,1,[]],\"settings\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1,2]},null]],\"parameters\":[]}],[0,\"  \"],[8],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"model\",\"files\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"col-sm-3 col-xxl-2\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"md-control-sidebar\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"model\",\"preview\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-lg btn-primary btn-block md-btn-responsive\"],[3,\"action\",[[19,0,[]],\"closePreview\"]],[7],[1,[25,\"fa-icon\",[\"arrow-left\"],null],false],[0,\" Close Preview\"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[20,[\"model\",\"files\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-lg btn-success btn-block md-btn-responsive\"],[3,\"action\",[[19,0,[]],\"importData\"]],[7],[1,[25,\"fa-icon\",[\"sign-in\"],null],false],[0,\" Click to Import Data\"],[8],[0,\"\\n          \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-lg btn-danger btn-block md-btn-responsive\"],[3,\"action\",[[19,0,[]],\"cancelImport\"]],[7],[1,[25,\"fa-icon\",[\"times\"],null],false],[0,\" Cancel Import\"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"btn btn-block\"],[7],[0,\"\\n            \"],[1,[25,\"x-toggle\",null,[[\"value\",\"onToggle\",\"showLabels\",\"onLabel\",\"offLabel\",\"size\",\"theme\"],[[20,[\"model\",\"merge\"]],[25,\"mut\",[[20,[\"model\",\"merge\"]]],null],true,\"Merge::true\",\"Replace::false\",\"medium\",\"default\"]]],false],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"hr\"],[7],[8],[0,\"\\n          \"],[1,[25,\"control/md-scroll-spy\",null,[[\"offset\",\"scrollInit\",\"setScrollTo\"],[134,[20,[\"scrollTo\"]],[25,\"route-action\",[\"setScrollTo\"],null]]]],false],[0,\"\\n        \"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[8],[0,\"\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/import/template.hbs" } });
});
define('mdeditor/pods/not-found/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model(params) {
      return Ember.Object.create({
        path: params.path
      });
    },

    breadCrumb: {
      title: 'Page Not Found',
      linkable: false
    },

    redirect() {
      var url = this.router.location.formatURL('/not-found');

      if (window.location.pathname !== url) {
        this.transitionTo('/not-found');
      }
    }
  });
});
define("mdeditor/pods/not-found/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3HrSQ8IA", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"alert alert-warning text-center\"],[7],[0,\"\\n  \"],[6,\"h1\"],[7],[1,[25,\"fa-icon\",[\"exclamation-triangle\"],null],false],[0,\" 404 Not Found: \"],[1,[18,\"path\"],false],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"\\n    Perhaps you have visited a link that has changed, or a record that no longer exists.\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/not-found/template.hbs" } });
});
define('mdeditor/pods/publish/index/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  const { Route } = Ember;

  exports.default = Route.extend({});
});
define("mdeditor/pods/publish/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "WpJuXG6Y", "block": "{\"symbols\":[\"catalog\"],\"statements\":[[6,\"h3\"],[9,\"class\",\"text-info\"],[7],[0,\"Click to choose a publishing service:\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"list-group\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[4,\"link-to\",[[25,\"concat\",[\"publish.\",[19,1,[\"route\"]]],null]],[[\"class\"],[\"list-group-item\"]],{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"media\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"media-left media-middle\"],[7],[0,\"\\n\"],[4,\"if\",[[19,1,[\"image\"]]],null,{\"statements\":[[0,\"            \"],[6,\"img\"],[9,\"class\",\"media-object fa-fw fa-5x\"],[10,\"src\",[26,[[19,1,[\"image\"]]]]],[10,\"alt\",[26,[[19,1,[\"title\"]],\" icon\"]]],[7],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[1,[25,\"fa-icon\",[[25,\"if\",[[19,1,[\"icon\"]],[19,1,[\"icon\"]],\"list-alt\"],null]],[[\"size\",\"fixedWidth\",\"class\"],[\"5\",true,\"text-info\"]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"media-body\"],[7],[0,\"\\n\"],[0,\"          \"],[6,\"h1\"],[9,\"class\",\"media-heading\"],[7],[1,[19,1,[\"name\"]],false],[8],[0,\"\\n          \"],[6,\"p\"],[9,\"class\",\"text-muted\"],[7],[1,[19,1,[\"description\"]],false],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"card card-inverse card-warning\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"card-block\"],[7],[0,\"\\n      \"],[6,\"h4\"],[9,\"class\",\"card-title\"],[7],[1,[25,\"fa-icon\",[\"exclamation-triangle\"],null],false],[0,\" No Services Available!\"],[8],[0,\"\\n      \"],[6,\"p\"],[9,\"class\",\"card-text\"],[7],[0,\"No publication services have been configured. Contact your technical support for assistance.\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/publish/index/template.hbs" } });
});
define('mdeditor/pods/publish/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    inject: {
      service
    }
  } = Ember;

  exports.default = Route.extend({
    publish: service('publish'),
    model: function model() {
      return this.get('publish.catalogs');
    }
  });
});
define("mdeditor/pods/publish/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1/NAQXDB", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/publish/template.hbs" } });
});
define('mdeditor/pods/record/index/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    breadCrumb: {
      title: 'Record',
      linkable: false
    }
  });
});
define("mdeditor/pods/record/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qksLsRrn", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/index/template.hbs" } });
});
define("mdeditor/pods/record/nav/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NM4IMrKF", "block": "{\"symbols\":[],\"statements\":[[6,\"li\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"record.show.translate\"],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[9,\"class\",\"fa fa-retweet\"],[7],[8],[0,\"\\n    \"],[6,\"span\"],[9,\"class\",\"md-nav-text\"],[7],[0,\"Translate\"],[8],[0,\"\\n    \"],[1,[25,\"tooltip-on-element\",null,[[\"text\",\"side\",\"class\"],[\"Translate\",\"bottom\",\"md-nav-tip\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/nav/template.hbs" } });
});
define('mdeditor/pods/record/new/id/route', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    inject,
    get,
    Route
  } = Ember;

  const {
    AdapterError
  } = _emberData.default;

  exports.default = Route.extend({
    model(params) {
      let record = this.store.peekRecord('record', params.record_id);

      if (record) {
        return record;
      }

      return this.store.findRecord('record', params.record_id);
    },

    breadCrumb: null,

    /**
     * The profile service
     *
     * @return {Ember.Service} profile
     */
    profile: inject.service(),

    deactivate() {
      // We grab the model loaded in this route
      let model = this.currentRouteModel();

      // If we are leaving the Route we verify if the model is in
      // 'isNew' state, which means it wasn't saved to the metadata.
      if (model && model.get('isNew')) {
        // We call DS#destroyRecord() which removes it from the store
        model.destroyRecord();
      }
    },

    //some test actions
    setupController(controller, model) {
      // Call _super for default behavior
      this._super(controller, model);
    },

    // serialize: function (model) {
    //   // If we got here without an ID (and therefore without a model)
    //   // Ensure that we leave the route param in the URL blank (not 'undefined')
    //   if (!model) {
    //     let rec=this.store.createRecord('record');
    //     return {
    //       record_id: rec.id
    //     };
    //   }
    //
    //   // Otherwise, let Ember handle it as usual
    //   return this._super.apply(this, arguments);
    // },

    actions: {
      willTransition: function willTransition(transition) {
        if (transition.targetName === 'record.new.index') {
          transition.abort();
          return true;
        }

        // We grab the model loaded in this route
        var model = this.currentRouteModel();
        // If we are leaving the Route we verify if the model is in
        // 'isNew' state, which means it wasn't saved to the backend.
        if (model && model.get('isNew')) {
          //let contexts = transition.intent.contexts;
          // We call DS#destroyRecord() which removes it from the store
          model.destroyRecord();
          //transition.abort();

          // if(contexts && contexts.length > 0) {
          //   //grab any models ids and apply them to transition
          //   let ids = contexts.mapBy('id');
          //   this.replaceWith(transition.targetName, ...ids);
          //   return true;
          // }

          //this.replaceWith(transition.targetName);
          return true;
        }
      },
      saveRecord() {
        this.currentRouteModel().save().then(model => {
          this.replaceWith('record.show.edit', model);
        });
      },

      cancelRecord() {
        this.replaceWith('records');

        return false;
      },

      error(error) {
        if (error instanceof AdapterError) {
          get(this, 'flashMessages').warning('No record found! Re-directing to new record...');
          // redirect to new
          this.replaceWith('record.new');
        } else {
          // otherwise let the error bubble
          return true;
        }
      },
      /**
       * Update the record profile
       *
       * @name   updateProfile
       * @param  {String} profile The new profile.
       */
      updateProfile(profile) {
        this.get('profile').set('active', profile);
      }
    }

  });
});
define("mdeditor/pods/record/new/id/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "AepyKMmY", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"row page-header\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 col-xxl-6 col-xxl-offset-3\"],[7],[0,\"\\n        \"],[6,\"h3\"],[7],[0,\"Create New Record\"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n    \"],[6,\"form\"],[9,\"class\",\"col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 col-xxl-6 col-xxl-offset-3\"],[3,\"action\",[[19,0,[]],\"saveRecord\"],[[\"on\"],[\"submit\"]]],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n          \"],[6,\"label\"],[9,\"class\",\"control-label required\"],[7],[0,\"Record ID\"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"\"],[7],[0,\"\\n              \"],[1,[25,\"input/md-input\",null,[[\"valuePath\",\"model\",\"placeholder\"],[\"recordId\",[20,[\"model\"]],\"Enter an ID for this record\"]]],false],[0,\"\\n          \"],[8],[0,\"\\n      \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n            \"],[6,\"label\"],[10,\"class\",[26,[\"control-label\\n            \",[25,\"if\",[[25,\"get\",[[25,\"get\",[[20,[\"model\",\"validations\",\"attrs\"]],\"json.metadata.resourceInfo.citation.title\"],null],\"options.presence.presence\"],null],\"required\"],null]]]],[7],[0,\"Record Title\"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"\"],[7],[0,\"\\n                \"],[1,[25,\"input/md-input\",null,[[\"valuePath\",\"model\",\"placeholder\"],[\"json.metadata.resourceInfo.citation.title\",[20,[\"model\"]],\"Enter a title for the record\"]]],false],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"form-group clear\"],[7],[0,\"\\n\"],[0,\"            \"],[6,\"div\"],[9,\"class\",\"card\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"card-block\"],[7],[0,\"\\n\\n            \"],[1,[25,\"object/md-resource-type-array\",null,[[\"plain\",\"value\",\"required\"],[true,[20,[\"model\",\"json\",\"metadata\",\"resourceInfo\",\"resourceType\"]],true]]],false],[0,\"\\n          \"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-sm-offset-4 col-sm-8\"],[7],[0,\"\\n                 \"],[6,\"span\"],[9,\"class\",\"pull-right\"],[7],[0,\"\\n                      \"],[6,\"button\"],[9,\"type\",\"submit\"],[9,\"class\",\"btn btn-success md-form-save\"],[10,\"disabled\",[25,\"get\",[[20,[\"model\",\"validations\"]],\"isInvalid\"],null],null],[7],[0,\"Save\"],[8],[0,\"\\n                      \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-warning \"],[3,\"action\",[[19,0,[]],\"cancelRecord\"]],[7],[0,\"Cancel\"],[8],[0,\"\\n                 \"],[8],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/new/id/template.hbs" } });
});
define('mdeditor/pods/record/new/index/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    redirect() {
      let rec = this.store.createRecord('record');

      this.replaceWith('record.new.id', rec);
    }
  });
});
define("mdeditor/pods/record/new/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OY37kITc", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/new/index/template.hbs" } });
});
define('mdeditor/pods/record/new/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    breadCrumb: {
      title: 'New',
      linkable: false
    }
  });
});
define('mdeditor/pods/record/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    breadCrumb: {
      title: 'Record',
      linkable: false
    }
  });
});
define('mdeditor/pods/record/show/edit/associated/index/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    set,
    getWithDefault,
    get
  } = Ember;

  exports.default = Route.extend({
    afterModel(m) {
      this._super(...arguments);

      let model = get(m, 'json.metadata');
      set(model, 'associatedResource', getWithDefault(model, 'associatedResource', []));
    },

    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      this.controller.set('parentModel', this.modelFor('record.show.edit'));
    },

    actions: {
      editResource(id) {
        this.transitionTo('record.show.edit.associated.resource', id);
      } //,
      // templateClass() {
      //   return Ember.Object.extend({
      //     init() {
      //       this._super(...arguments);
      //       //this.set('authority', {});
      //     }
      //   });
      // }
    }
  });
});
define("mdeditor/pods/record/show/edit/associated/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "vcxj56UW", "block": "{\"symbols\":[],\"statements\":[[6,\"h4\"],[9,\"class\",\"section-header\"],[7],[0,\"\\n  Editing Associated Resource\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"parentModel\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[25,\"object/md-objectroute-table\",null,[[\"items\",\"header\",\"shadow\",\"buttonText\",\"ellipsis\",\"previewTemplate\",\"editItem\",\"verticalButtons\",\"profilePath\",\"hideIndex\",\"condensed\"],[[20,[\"model\",\"json\",\"metadata\",\"associatedResource\"]],\"Associated Resource\",true,\"Add Resource\",[20,[\"ellipsis\"]],\"object/md-associated/preview\",[25,\"route-action\",[\"editResource\"],null],true,\"record.metadta.associated\",true,true]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/associated/index/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/associated/resource/index/route', ['exports', 'mdeditor/mixins/scroll-to'], function (exports, _scrollTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    get,
    set,
    inject
  } = Ember;

  exports.default = Route.extend(_scrollTo.default, {
    slider: inject.service(),

    sliderColumns: [{
      propertyName: 'recordId',
      title: 'ID'
    }, {
      propertyName: 'title',
      title: 'Title'
    }, {
      propertyName: 'defaultType',
      title: 'Type'
    }],
    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      this.controller.set('parentModel', this.modelFor('record.show.edit'));
      this.controller.set('resourceId', get(this.controllerFor('record.show.edit.associated.resource'), 'resourceId'));
    },
    actions: {
      insertResource(selected) {
        let slider = this.get('slider');
        let rec = selected.get('firstObject');

        if (rec) {
          let resource = this.currentRouteModel();

          set(resource, 'mdRecordId', get(rec, 'recordId'));
        }

        //this.controller.set('slider', false);
        slider.toggleSlider(false);
        selected.clear();
      },
      selectResource() {
        let slider = this.get('slider');

        //this.controller.set('slider', true);
        slider.toggleSlider(true);
      },
      sliderData() {
        return this.store.peekAll('record').filterBy('recordId');
      },
      sliderColumns() {
        return this.get('sliderColumns');
      },
      editLinked(rec) {
        this.transitionTo('record.show.edit', rec.get('id'));
      }
    }
  });
});
define("mdeditor/pods/record/show/edit/associated/resource/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "PS5MiLfF", "block": "{\"symbols\":[],\"statements\":[[6,\"h4\"],[9,\"class\",\"section-header\"],[7],[0,\"\\n  Editing Associated Resource #\"],[1,[18,\"resourceId\"],false],[0,\"\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"parentModel\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[25,\"object/md-associated\",null,[[\"model\",\"recordId\",\"profilePath\",\"editLinked\"],[[20,[\"model\"]],[20,[\"parentModel\",\"recordId\"]],\"record.associated\",[25,\"route-action\",[\"editLinked\"],null]]]],false],[0,\"\\n\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-subbar-extra\",[25,\"component\",[\"control/subbar-citation\"],[[\"text\",\"icon\",\"route\",\"selectResource\"],[\"Back to Resource List\",\"arrow-left\",\"record.show.edit.associated\",[25,\"route-action\",[\"selectResource\"],null]]]]]]],false],[0,\"\\n\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-slider-content\",[25,\"hash\",null,[[\"title\",\"body\"],[[25,\"concat\",[\"Click row to select a resource: \",[20,[\"model\",\"associationType\"]]],null],[25,\"component\",[\"control/md-select-table\"],[[\"select\",\"data\",\"columns\"],[[25,\"route-action\",[\"insertResource\"],null],[25,\"compute\",[[25,\"route-action\",[\"sliderData\"],null]],null],[25,\"compute\",[[25,\"route-action\",[\"sliderColumns\"],null]],null]]]]]]]]]],false],[0,\"\\n\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-scroll-spy-record-edit\",[25,\"component\",[\"control/md-scroll-spy\"],[[\"scrollInit\",\"setScrollTo\"],[[20,[\"scrollTo\"]],[25,\"route-action\",[\"setScrollTo\"],null]]]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/associated/resource/index/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/associated/resource/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    get,
    isEmpty,
    isArray,
    computed
  } = Ember;

  exports.default = Route.extend({
    breadCrumb: computed('resourceId', function () {
      return {
        title: get(this, 'resourceId'),
        linkable: true
      };
    }),

    model(params) {
      this.set('resourceId', params.resource_id);

      return this.setupModel();
    },

    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      //this.controller.set('parentModel', this.modelFor('record.show.edit.main'));
      this.controller.set('resourceId', get(this, 'resourceId'));
      this.controllerFor('record.show.edit').setProperties({
        onCancel: this.setupModel
      });
    },

    setupModel() {
      let resourceId = get(this, 'resourceId');
      let model = this.modelFor('record.show.edit');
      let objects = model.get('json.metadata.associatedResource');
      let resource = resourceId && isArray(objects) ? objects.objectAt(resourceId) : undefined;

      //make sure the identifier exists
      if (isEmpty(resource)) {
        Ember.get(this, 'flashMessages').warning('No Associated Resource object found! Re-directing to list...');
        this.replaceWith('record.show.edit.associated');

        return;
      }

      return resource;
    }
  });
});
define("mdeditor/pods/record/show/edit/associated/resource/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "r5CUBYFO", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"liquid-outlet\",null,[[\"class\"],[\"liquid-spy\"]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/associated/resource/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/associated/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("mdeditor/pods/record/show/edit/associated/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ax9PWmyY", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-xxl-11 col-xxxl-10 col-xxl-offset-1\"],[7],[0,\"\\n    \"],[1,[25,\"liquid-outlet\",null,[[\"class\"],[\"\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/associated/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/constraint/index/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    set,
    getWithDefault,
    get
  } = Ember;

  exports.default = Route.extend({
    afterModel(m) {
      this._super(...arguments);

      let model = get(m, 'json.metadata.resourceInfo');
      set(model, 'constraint', getWithDefault(model, 'constraint', []));
    },

    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      this.controller.set('parentModel', this.modelFor('record.show.edit'));
    }
  });
});
define("mdeditor/pods/record/show/edit/constraint/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4fpBLKrO", "block": "{\"symbols\":[\"editing\"],\"statements\":[[6,\"h4\"],[9,\"class\",\"section-header\"],[7],[0,\"\\n  Editing Constraints\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"model\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\"],[4,\"object/md-object-table\",null,[[\"items\",\"collasped\",\"header\",\"buttonText\",\"previewTemplate\",\"attributes\"],[[20,[\"model\",\"json\",\"metadata\",\"resourceInfo\",\"constraint\"]],false,\"Constraints\",\"Add Constraint\",[20,[\"previewTemplate\"]],\"type\"]],{\"statements\":[[0,\"  \"],[1,[25,\"object/md-constraint\",null,[[\"model\",\"profilePath\"],[[19,1,[]],\"record.constraints\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/constraint/index/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/constraint/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("mdeditor/pods/record/show/edit/constraint/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Fwnev6hH", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-xxl-11 col-xxxl-10 col-xxl-offset-1\"],[7],[0,\"\\n    \"],[1,[25,\"outlet\",null,[[\"class\"],[\"\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/constraint/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/coverages/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("mdeditor/pods/record/show/edit/coverages/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "HvflBKl8", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\\n\"],[6,\"style\"],[9,\"media\",\"screen\"],[7],[0,\"\\n    .construction {\\n        width: 50vh;\\n        min-width:240px;\\n        font-size:5vh;\\n        border: 2vh solid #333333;\\n        margin: 10vh auto;\\n        padding: 3vh;\\n        border-radius: 5vh;\\n    }\\n\"],[8],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"class\",\"shadow\"],[\"construction card-inverse card-warning\",false]],{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"text-center\"],[7],[0,\"\\n        \"],[6,\"div\"],[7],[0,\"\\n            \"],[1,[25,\"fa-icon\",[\"exclamation-triangle\"],[[\"size\"],[2]]],false],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[7],[0,\"\\n            \"],[6,\"b\"],[7],[0,\"Page Under \"],[6,\"br\"],[7],[8],[0,\"Construction\"],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/coverages/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/dictionary/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    breadCrumb: {
      title: 'Dictionaries'
    }
  });
});
define("mdeditor/pods/record/show/edit/dictionary/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "oqRdC/pV", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\\n\"],[6,\"style\"],[9,\"media\",\"screen\"],[7],[0,\"\\n    .construction {\\n        width: 50vh;\\n        min-width:240px;\\n        font-size:5vh;\\n        border: 2vh solid #333333;\\n        margin: 10vh auto;\\n        padding: 3vh;\\n        border-radius: 5vh;\\n    }\\n\"],[8],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"class\",\"shadow\"],[\"construction card-inverse card-warning\",false]],{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"text-center\"],[7],[0,\"\\n        \"],[6,\"div\"],[7],[0,\"\\n            \"],[1,[25,\"fa-icon\",[\"exclamation-triangle\"],[[\"size\"],[2]]],false],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[7],[0,\"\\n            \"],[6,\"b\"],[7],[0,\"Page Under \"],[6,\"br\"],[7],[8],[0,\"Construction\"],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/dictionary/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/distribution/distributor/index/route', ['exports', 'mdeditor/mixins/scroll-to'], function (exports, _scrollTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    get,
    set,
    $
  } = Ember;

  exports.default = Route.extend(_scrollTo.default, {
    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      this.controller.set('parentModel', this.modelFor('record.show.edit'));
      this.controller.set('distributionId', get(this.controllerFor('record.show.edit.distribution.distributor'), 'distributionId'));
    },
    actions: {
      addDistributor() {
        let model = this.currentRouteModel();
        let dists = get(model, 'distributor');

        if (dists) {
          dists.pushObject({});
        } else {
          set(model, 'distributor', [{}]);
        }

        this.controller.set('refresh', get(model, 'distributor.length'));

        $("html, body").animate({
          scrollTop: $(document).height()
        }, "slow");
      },
      editDistributor(id) {
        return id;
      },
      deleteDistributor(id) {
        let model = this.currentRouteModel();
        let dists = get(model, 'distributor');

        dists.removeAt(id);
        this.controller.set('refresh', get(model, 'distributor.length'));
      }
    }
  });
});
define("mdeditor/pods/record/show/edit/distribution/distributor/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DvPS84tk", "block": "{\"symbols\":[\"dist\",\"index\"],\"statements\":[[6,\"h4\"],[9,\"class\",\"section-header\"],[7],[0,\"\\n  Editing Distributors for Distribution #\"],[1,[18,\"distributionId\"],false],[0,\"\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"parentModel\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[4,\"each\",[[20,[\"model\",\"distributor\"]]],null,{\"statements\":[[4,\"if\",[[19,2,[]]],null,{\"statements\":[[0,\"    \"],[6,\"hr\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"layout/md-card\",null,[[\"title\",\"collapsible\",\"collapsed\",\"data-spy\",\"shadow\",\"spotlightEnabled\",\"class\"],[[25,\"concat\",[\"Distributor #\",[19,2,[]]],null],true,false,[25,\"concat\",[\"Distributor \",[19,2,[]]],null],true,true,[25,\"if\",[[25,\"mod\",[[19,2,[]],2],null],\"md-card-even\"],null]]],{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"card-buttons\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-sm-6\"],[7],[0,\"\\n          \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"disabled\",\"disabled\"],[9,\"class\",\"btn btn-md btn-success btn-block md-btn-responsive\"],[3,\"action\",[[19,0,[]],[25,\"route-action\",[\"editDistributor\",[19,2,[]]],null]]],[7],[0,\"\\n            \"],[1,[25,\"fa-icon\",[\"pencil\"],null],false],[0,\" Edit More...\"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-sm-6\"],[7],[0,\"\\n          \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-md btn-danger btn-block md-btn-responsive\"],[3,\"action\",[[19,0,[]],[25,\"route-action\",[\"deleteDistributor\",[19,2,[]]],null]]],[7],[0,\"\\n              \"],[1,[25,\"fa-icon\",[\"times\"],null],false],[0,\" Delete Distributor\"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[1,[25,\"object/md-distributor\",null,[[\"model\",\"profilePath\"],[[19,1,[]],\"record.distribution.distributor\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1,2]},{\"statements\":[[0,\"  \"],[6,\"h3\"],[9,\"class\",\"alert alert-info\"],[7],[0,\"No distributors found.\\n    \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-success\"],[3,\"action\",[[19,0,[]],[25,\"route-action\",[\"addDistributor\"],null]]],[7],[0,\"\\n      \"],[1,[25,\"fa-icon\",[\"plus\"],null],false],[0,\" Add Distributor\"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-subbar-extra\",[25,\"component\",[\"control/subbar-link\"],[[\"clickText\",\"clickIcon\",\"clickType\",\"text\",\"icon\",\"type\",\"click\",\"route\"],[\"Add Distributor Section\",\"plus\",\"success\",\"Back to Distribution List\",\"arrow-left\",\"primary\",[25,\"route-action\",[\"addDistributor\"],null],\"record.show.edit.distribution\"]]]]]],false],[0,\"\\n\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-scroll-spy-record-edit\",[25,\"component\",[\"control/md-scroll-spy\"],[[\"refresh\",\"scrollInit\",\"setScrollTo\"],[[20,[\"refresh\"]],[20,[\"scrollTo\"]],[25,\"route-action\",[\"setScrollTo\"],null]]]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/distribution/distributor/index/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/distribution/distributor/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    get,
    isEmpty,
    isArray,
    NativeArray,
    computed
  } = Ember;

  exports.default = Route.extend({
    model(params) {
      this.set('distributionId', params.distribution_id);

      return this.setupModel();
    },

    breadCrumb: computed('distributionId', function () {
      return {
        title: 'Distributors'
        //title: `${get(this, 'distributionId')}: Distributors`
      };
    }),

    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      //this.controller.set('parentModel', this.modelFor('record.show.edit.main'));
      this.controller.set('distributionId', get(this, 'distributionId'));
      this.controllerFor('record.show.edit').setProperties({
        onCancel: this.setupModel
      });
    },

    setupModel() {
      let distributionId = get(this, 'distributionId');
      let model = this.modelFor('record.show.edit');
      let objects = model.get('json.metadata.resourceDistribution');
      let resource = distributionId && isArray(objects) ? NativeArray.apply(objects).objectAt(distributionId) : undefined;

      //make sure the identifier exists
      if (isEmpty(resource)) {
        Ember.get(this, 'flashMessages').warning('No Distribution object found! Re-directing to list...');
        this.replaceWith('record.show.edit.distribution');

        return;
      }

      return resource;
    }
  });
});
define("mdeditor/pods/record/show/edit/distribution/distributor/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3v8YaJd6", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/distribution/distributor/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/distribution/index/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    $
  } = Ember;

  exports.default = Route.extend({
    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      this.controller.set('parentModel', this.modelFor('record.show.edit'));
    },

    actions: {
      addDistribution() {
        let dists = this.currentRouteModel().get('json.metadata.resourceDistribution');

        dists.pushObject({});

        $("html, body").animate({
          scrollTop: $(document).height()
        }, "slow");
      },
      editDistribution(id) {
        this.transitionTo('record.show.edit.distribution.distributor', id);
      },
      deleteDistribution(id) {
        let dists = this.currentRouteModel().get('json.metadata.resourceDistribution');

        dists.removeAt(id);
      }
    }
  });
});
define("mdeditor/pods/record/show/edit/distribution/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0PJdcvlk", "block": "{\"symbols\":[],\"statements\":[[6,\"h4\"],[9,\"class\",\"section-header\"],[7],[0,\"\\n  Editing Distribution\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"parentModel\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[25,\"object/md-distribution\",null,[[\"model\",\"profilePath\"],[[20,[\"model\"]],\"record.distribution\"]]],false],[0,\"\\n\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-subbar-extra\",[25,\"component\",[\"control/subbar-link\"],[[\"text\",\"icon\",\"btnType\",\"click\"],[\"Add Distribution Section\",\"plus\",\"success\",[25,\"route-action\",[\"addDistribution\"],null]]]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/distribution/index/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/distribution/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("mdeditor/pods/record/show/edit/distribution/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rQR6Oe1H", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-xxl-11 col-xxxl-10 col-xxl-offset-1\"],[7],[0,\"\\n    \"],[1,[25,\"liquid-outlet\",null,[[\"class\"],[\"liquid-spy\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/distribution/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/documents/citation/index/route', ['exports', 'mdeditor/mixins/scroll-to'], function (exports, _scrollTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    get
  } = Ember;

  exports.default = Route.extend(_scrollTo.default, {
    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      this.controller.set('parentModel', this.modelFor('record.show.edit'));
      this.controller.set('citationId', get(this.controllerFor('record.show.edit.documents.citation'), 'citationId'));
    }
  });
});
define("mdeditor/pods/record/show/edit/documents/citation/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "SUQx5dFN", "block": "{\"symbols\":[],\"statements\":[[6,\"h4\"],[9,\"class\",\"section-header\"],[7],[0,\"\\n  Editing Additional Document #\"],[1,[18,\"citationId\"],false],[0,\"\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"parentModel\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[25,\"object/md-documentation\",null,[[\"model\",\"profilePath\"],[[20,[\"model\"]],\"record.documents\"]]],false],[0,\"\\n\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-subbar-extra\",[25,\"component\",[\"control/subbar-link\"],[[\"text\",\"icon\",\"route\"],[\"Back to Document List\",\"arrow-left\",\"record.show.edit.documents\"]]]]]],false],[0,\"\\n\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-scroll-spy-record-edit\",[25,\"component\",[\"control/md-scroll-spy\"],[[\"scrollInit\",\"setScrollTo\"],[[20,[\"scrollTo\"]],[25,\"route-action\",[\"setScrollTo\"],null]]]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/documents/citation/index/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/documents/citation/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    get,
    isEmpty,
    isArray,
    computed,
    NativeArray
  } = Ember;

  exports.default = Route.extend({
    breadCrumb: computed('citationId', function () {
      return {
        title: get(this, 'citationId'),
        linkable: true
      };
    }),

    model(params) {
      this.set('citationId', params.citation_id);

      return this.setupModel();
    },

    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      //this.controller.set('parentModel', this.modelFor('record.show.edit.main'));
      this.controller.set('citationId', get(this, 'citationId'));
      this.controllerFor('record.show.edit').setProperties({
        onCancel: this.setupModel
      });
    },

    setupModel() {
      let citationId = get(this, 'citationId');
      let model = this.modelFor('record.show.edit');
      let objects = model.get('json.metadata.additionalDocumentation');
      let resource = citationId && isArray(objects) ? NativeArray.apply(objects).objectAt(citationId) : undefined;

      //make sure the identifier exists
      if (isEmpty(resource)) {
        Ember.get(this, 'flashMessages').warning('No Document object found! Re-directing to list...');
        this.replaceWith('record.show.edit.documents');

        return;
      }

      return resource;
    }
  });
});
define("mdeditor/pods/record/show/edit/documents/citation/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "M/w0gLyz", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"liquid-outlet\",null,[[\"class\"],[\"liquid-spy\"]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/documents/citation/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/documents/index/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    set,
    getWithDefault,
    get
  } = Ember;

  exports.default = Route.extend({
    afterModel(m) {
      this._super(...arguments);

      let model = get(m, 'json.metadata');
      set(model, 'additionalDocumentation', getWithDefault(model, 'additionalDocumentation', []));
    },

    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      this.controller.set('parentModel', this.modelFor('record.show.edit'));
    },

    actions: {
      editDocument(id) {
        this.transitionTo('record.show.edit.documents.citation', id);
      }
    }
  });
});
define("mdeditor/pods/record/show/edit/documents/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5oj8osPB", "block": "{\"symbols\":[],\"statements\":[[6,\"h4\"],[9,\"class\",\"section-header\"],[7],[0,\"\\n  Editing Additional Documentation\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"parentModel\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[25,\"object/md-objectroute-table\",null,[[\"items\",\"header\",\"shadow\",\"verticalButtons\",\"buttonText\",\"ellipsis\",\"previewTemplate\",\"editItem\",\"hideIndex\",\"condensed\"],[[20,[\"model\",\"json\",\"metadata\",\"additionalDocumentation\"]],\"Additional Documents\",true,true,\"Add Document\",true,\"object/md-documentation/preview\",[25,\"route-action\",[\"editDocument\"],null],true,true]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/documents/index/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/documents/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("mdeditor/pods/record/show/edit/documents/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "u4+odg7t", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-xxl-11 col-xxxl-10 col-xxl-offset-1\"],[7],[0,\"\\n    \"],[1,[25,\"liquid-outlet\",null,[[\"class\"],[\"\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/documents/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/extent/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    A,
    Route,
    computed,
    set,
    getWithDefault,
    get,
    $
  } = Ember;

  exports.default = Route.extend({
    model() {
      let model = this.modelFor('record.show.edit');
      let json = model.get('json');
      let info = json.metadata.resourceInfo;

      set(info, 'extent', getWithDefault(info, 'extent', A()));

      get(info, 'extent').forEach(itm => {
        set(itm, 'geographicExtent', getWithDefault(itm, 'geographicExtent', A()));
        set(itm, 'geographicExtent.0', getWithDefault(itm, 'geographicExtent.0', {}));
        set(itm, 'geographicExtent.0.boundingBox', getWithDefault(itm, 'geographicExtent.0.boundingBox', {}));
      });
      return model;
    },

    subbar: 'control/subbar-extent',

    extents: computed('model.json.metadata.resourceInfo.extent.[]', function () {
      return this.currentRouteModel().get('json.metadata.resourceInfo.extent');
    }),

    clearSubbar: function () {
      this.controllerFor('record.show.edit').set('subbar', null);
    }.on('deactivate'),

    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      this.controllerFor('record.show.edit').set('subbar', this.get('subbar'));
    },

    actions: {
      didTransition() {
        this.controllerFor('record.show.edit').set('subbar', this.get('subbar'));
      },
      addExtent() {
        let extents = this.currentRouteModel().get('json.metadata.resourceInfo.extent');

        extents.pushObject({
          description: '',
          geographicExtent: [{
            boundingBox: {},
            geographicElement: A()
          }]
        });

        $("html, body").animate({
          scrollTop: $(document).height()
        }, "slow");
      },
      deleteExtent(id) {
        let extents = this.get('extents');

        extents.removeAt(id);
      },
      editExtent(id) {
        this.transitionTo('record.show.edit.extent.spatial', id);
      },
      toList() {
        let me = this;

        me.transitionTo(me.get('routeName')).then(function () {
          me.setupController();
        });
      }
    }
  });
});
define('mdeditor/pods/record/show/edit/extent/spatial/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Object: EmberObject,
    NativeArray,
    set,
    get,
    isArray,
    isEmpty
  } = Ember;

  exports.default = Ember.Route.extend({
    model(params) {
      this.set('extentId', params.extent_id);

      return this.setupModel();
    },

    renderTemplate() {
      this.render('record.show.edit.extent.spatial', {
        into: 'record.show.edit'
      });
    },

    subbar: 'control/subbar-spatial',

    // clearSubbar: function() {
    //   this.controllerFor('record.show.edit')
    //     .set('subbar', null);
    // }.on('deactivate'),

    setupController: function setupController(controller) {
      // Call _super for default behavior
      this._super(...arguments);

      this.controllerFor('record.show.edit').setProperties({
        subbar: this.get('subbar'),
        onCancel: this.setupModel,
        extentId: this.get('extentId')
      });

      controller.setProperties({
        featureGroup: null,
        extentId: this.get('extentId')
      });
    },

    setupModel() {
      let model = this.modelFor('record.show.edit.extent');
      let extents = model.get('json.metadata.resourceInfo.extent');
      let extent = get(extents, this.get('extentId') || this.controller.get('extentId'));

      //make sure the extent still exists
      if (isEmpty(extent)) {
        Ember.get(this, 'flashMessages').warning('No extent found! Re-directing to list...');
        this.replaceWith('record.show.edit.extent');

        return;
      }

      if (!isArray(extent.geographicExtent[0].geographicElement)) {
        set(extent, 'geographicExtent.0.geographicElement', NativeArray.apply([]));
      }

      let layers = extent.geographicExtent[0].geographicElement;

      layers.forEach(function (l, idx, arr) {
        arr.replace(idx, 1, EmberObject.create(l));
      });

      this.set('layers', layers);

      return model;
    },

    actions: {
      getContext() {
        return this;
      },
      didTransition() {
        this.controllerFor('record.show.edit').set('subbar', this.get('subbar'));
      },
      handleResize() {
        Ember.$('.map-file-picker .leaflet-container').height((Ember.$(window).height() - Ember.$('#md-navbars').outerHeight() - 15) / 2);
      },
      uploadData() {
        Ember.$('.map-file-picker .file-picker__input').click();
      },
      deleteAllFeatures() {
        let features = this.get('layers');
        let group = this.controller.get('featureGroup');

        if (features.length) {
          features.forEach(item => {
            features.popObject(item);
            group.removeLayer(item._layer);
          });

          if (group._map.drawControl) {
            group._map.drawControl.remove();
          }
          features.clear();
        }
      },
      setFeatureGroup(obj) {
        this.controller.set('featureGroup', obj);
      },
      zoomAll() {
        let layer = this.controller.get('featureGroup');
        let bnds = layer.getBounds();
        let map = layer._map;

        if (bnds.isValid()) {
          map.fitBounds(bnds, {
            maxZoom: 14
          });
          return;
        }

        map.fitWorld();
      },
      exportGeoJSON() {
        let fg = this.controller.get('featureGroup');

        let json = {
          'type': 'FeatureCollection',
          'features': []
        };

        if (fg) {
          let geoGroup = fg.getLayers();
          geoGroup.forEach(l => {
            let layers = l.getLayers();

            layers.forEach(layer => {
              let feature = layer.feature;

              json.features.push({
                'type': 'Feature',
                'id': feature.id,
                'geometry': feature.geometry,
                'properties': feature.properties
              });
            });
          });

          window.saveAs(new Blob([JSON.stringify(json)], {
            type: 'application/json;charset=utf-8'
          }), 'export_features.json');

          // return new Ember.RSVP.Promise((resolve) => {
          //   Ember.run(null, resolve, json);
          // }, 'MD: ExportSpatialData');
        } else {
          Ember.get(this, 'flashMessages').warning('Found no features to export.');
        }
      }
    }
  });
});
define("mdeditor/pods/record/show/edit/extent/spatial/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JZ9BWiTT", "block": "{\"symbols\":[],\"statements\":[[6,\"section\"],[7],[0,\"\\n    \"],[1,[25,\"leaflet-table\",null,[[\"layers\",\"setFeatureGroup\",\"handleResize\"],[[25,\"get\",[[20,[\"model\"]],[25,\"concat\",[\"json.metadata.resourceInfo.extent.\",[20,[\"extentId\"]],\".geographicExtent.0.geographicElement\"],null]],null],[25,\"route-action\",[\"setFeatureGroup\"],null],[25,\"route-action\",[\"handleResize\"],null]]]],false],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/extent/spatial/template.hbs" } });
});
define("mdeditor/pods/record/show/edit/extent/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "XyaCZgYO", "block": "{\"symbols\":[\"extent\",\"index\"],\"statements\":[[6,\"h4\"],[9,\"class\",\"section-header\"],[7],[0,\"\\n  Editing Extents\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"model\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"section\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"model\",\"json\",\"metadata\",\"resourceInfo\",\"extent\"]]],null,{\"statements\":[[1,[25,\"object/md-spatial-extent\",null,[[\"extent\",\"index\"],[[19,1,[]],[19,2,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1,2]},{\"statements\":[[0,\"    \"],[6,\"h3\"],[9,\"class\",\"alert alert-info\"],[7],[0,\"No geographic extents found.\\n      \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-success\"],[3,\"action\",[[19,0,[]],[25,\"route-action\",[\"addExtent\"],null]]],[7],[0,\"\\n        \"],[1,[25,\"fa-icon\",[\"plus\"],null],false],[0,\" Add Geographic Extent\"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[8],[0,\"\\n\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/extent/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/funding/allocation/route', ['exports', 'mdeditor/mixins/scroll-to'], function (exports, _scrollTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    get,
    isEmpty,
    isArray,
    computed,
    NativeArray
  } = Ember;

  exports.default = Route.extend(_scrollTo.default, {
    breadCrumb: computed('allocationId', function () {
      return {
        title: get(this, 'allocationId'),
        linkable: true
      };
    }),

    model(params) {
      this.set('allocationId', params.allocation_id);

      return this.setupModel();
    },

    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      //this.controller.set('parentModel', this.modelFor('record.show.edit.main'));
      this.controller.set('allocationId', get(this, 'allocationId'));

      this.controllerFor('record.show.edit').setProperties({
        onCancel: this.setupModel
      });
    },

    setupModel() {
      let allocationId = get(this, 'allocationId');
      let model = this.modelFor('record.show.edit');
      let objects = model.get('json.metadata.funding');
      let resource = allocationId && isArray(objects) ? NativeArray.apply(objects).objectAt(allocationId) : undefined;

      //make sure the allocation exists
      if (isEmpty(resource)) {
        Ember.get(this, 'flashMessages').warning('No Funding object found! Re-directing to list...');
        this.replaceWith('record.show.edit.funding');

        return;
      }

      return resource;
    }
  });
});
define("mdeditor/pods/record/show/edit/funding/allocation/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "eYmZJLZ0", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[1,[25,\"object/md-funding\",null,[[\"model\",\"profilePath\"],[[20,[\"model\"]],\"record.funding\"]]],false],[0,\"\\n\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-subbar-extra\",[25,\"component\",[\"control/subbar-link\"],[[\"text\",\"icon\",\"route\"],[\"Back to Funding List\",\"arrow-left\",\"record.show.edit.funding\"]]]]]],false],[0,\"\\n\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-scroll-spy-record-edit\",[25,\"component\",[\"control/md-scroll-spy\"],[[\"scrollInit\",\"setScrollTo\"],[[20,[\"scrollTo\"]],[25,\"route-action\",[\"setScrollTo\"],null]]]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/funding/allocation/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/funding/index/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    set,
    getWithDefault,
    get,
    NativeArray
  } = Ember;

  exports.default = Route.extend({
    afterModel(m) {
      this._super(...arguments);

      let model = get(m, 'json.metadata');
      set(model, 'funding', NativeArray.apply(getWithDefault(model, 'funding', [])));
    },

    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      this.controller.set('parentModel', this.modelFor('record.show.edit'));
    },

    actions: {
      editAllocation(id) {
        this.transitionTo('record.show.edit.funding.allocation', id);
      }
    }
  });
});
define("mdeditor/pods/record/show/edit/funding/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "EPOQSkpp", "block": "{\"symbols\":[],\"statements\":[[6,\"h4\"],[9,\"class\",\"section-header\"],[7],[0,\"\\n  Editing Funding\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"parentModel\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[25,\"object/md-objectroute-table\",null,[[\"items\",\"collapsible\",\"isCollapsed\",\"header\",\"shadow\",\"buttonText\",\"ellipsis\",\"previewTemplate\",\"editItem\",\"verticalButtons\",\"hideIndex\",\"condensed\"],[[20,[\"model\",\"json\",\"metadata\",\"funding\"]],false,false,\"Funding Allocations\",true,\"Add Funding\",[20,[\"ellipsis\"]],\"object/md-funding/preview\",[25,\"route-action\",[\"editAllocation\"],null],true,true,true]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/funding/index/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/funding/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("mdeditor/pods/record/show/edit/funding/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NiDze3dw", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-xxl-11 col-xxxl-10 col-xxl-offset-1\"],[7],[0,\"\\n    \"],[1,[25,\"liquid-outlet\",null,[[\"class\"],[\"\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/funding/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/grid/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("mdeditor/pods/record/show/edit/grid/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "McJUUR40", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\\n\"],[6,\"style\"],[9,\"media\",\"screen\"],[7],[0,\"\\n    .construction {\\n        width: 50vh;\\n        min-width:240px;\\n        font-size:5vh;\\n        border: 2vh solid #333333;\\n        margin: 10vh auto;\\n        padding: 3vh;\\n        border-radius: 5vh;\\n    }\\n\"],[8],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"class\",\"shadow\"],[\"construction card-inverse card-warning\",false]],{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"text-center\"],[7],[0,\"\\n        \"],[6,\"div\"],[7],[0,\"\\n            \"],[1,[25,\"fa-icon\",[\"exclamation-triangle\"],[[\"size\"],[2]]],false],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[7],[0,\"\\n            \"],[6,\"b\"],[7],[0,\"Page Under \"],[6,\"br\"],[7],[8],[0,\"Construction\"],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/grid/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/index/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    redirect(model) {
      this.replaceWith('record.show.edit.main', model);
    }
  });
});
define("mdeditor/pods/record/show/edit/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qsfOEPbu", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/index/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/keywords/route', ['exports', 'mdeditor/mixins/scroll-to'], function (exports, _scrollTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    A,
    set,
    //Object: EmObject,
    NativeArray,
    getWithDefault,
    //assign,
    copy,
    inject,
    $
  } = Ember;

  exports.default = Route.extend(_scrollTo.default, {
    keyword: inject.service(),
    model() {
      let model = this.modelFor('record.show.edit');
      let json = model.get('json');
      let info = json.metadata.resourceInfo;

      set(info, 'keyword', !info.hasOwnProperty('keyword') ? A() : NativeArray.apply(info.keyword));

      //check to see if custom list
      info.keyword.forEach(k => {
        set(k, 'thesaurus', getWithDefault(k, 'thesaurus', {}));
        set(k, 'thesaurus.identifier', getWithDefault(k, 'thesaurus.identifier', [{
          identifier: 'custom'
        }]));
        set(k, 'thesaurus.date', getWithDefault(k, 'thesaurus.date', [{}]));
        set(k, 'thesaurus.onlineResource', getWithDefault(k, 'thesaurus.onlineResource', [{}]));

        // if(!has(k, 'thesaurus')) {
        //   set(k, 'thesaurus', {});
        // }
        // if(!has(k, 'thesaurus.identifier')) {
        //   set(k, 'thesaurus.identifier', [{
        //     identifier: 'custom'
        //   }]);
        // }
        // if(!has(k, 'thesaurus.date')) {
        //   set(k, 'thesaurus.date', [{}]);
        // }
        // if(!has(k, 'thesaurus.onlineResource')) {
        //   set(k, 'thesaurus.onlineResource', [{}]);
        // }

        //let obj = arr.objectAt(idx);
        //assign(obj, EmObject.create(k));
      });

      return model;
    },

    subbar: 'control/subbar-keywords',

    clearSubbar: function () {
      this.controllerFor('record.show.edit').set('subbar', null);
    }.on('deactivate'),

    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      this.controllerFor('record.show.edit').set('subbar', this.get('subbar'));
      this.controller.set('subbar', this.get('subbar'));
    },

    actions: {
      getContext() {
        return this;
      },
      addThesaurus() {
        let the = this.currentRouteModel().get('json.metadata.resourceInfo.keyword');

        $("html, body").animate({ scrollTop: $(document).height() }, "slow");

        the.pushObject({
          keyword: [],
          keywordType: 'theme',
          thesaurus: {
            identifier: [{
              identifier: null
            }]
          },
          fullPath: true
        });

        this.controller.set('refresh', the.get('length'));
        this.controller.set('scrollTo', 'thesaurus-' + (the.get('length') - 1));
      },
      deleteThesaurus(id) {
        let the = this.currentRouteModel().get('json.metadata.resourceInfo.keyword');
        the.removeAt(id);
        this.controller.set('refresh', the.get('length'));
      },
      editThesaurus(id) {
        this.transitionTo('record.show.edit.keywords.thesaurus', id);
      },
      selectThesaurus(selected, thesaurus) {
        if (selected) {
          set(thesaurus, 'thesaurus', copy(selected.citation, true));
          if (selected.keywordType) {
            set(thesaurus, 'keywordType', selected.keywordType);
          }
        } else {
          set(thesaurus, 'thesaurus.identifier.0.identifier', 'custom');
        }
      },
      addKeyword(model, obj) {
        let k = obj ? obj : {};

        model.pushObject(k);
      },
      deleteKeyword(model, obj) {
        if (typeof obj === 'number') {
          model.removeAt(obj);
        } else {
          model.removeObject(obj);
        }
      },
      hideThesaurus(el) {
        $(el).closest('.md-keywords-container').toggleClass('hide-thesaurus');
      },
      toList() {
        let me = this;

        me.transitionTo(me.get('routeName')).then(function () {
          me.setupController();
        });
      }
    }
  });
});
define("mdeditor/pods/record/show/edit/keywords/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "IooDyCJ7", "block": "{\"symbols\":[\"thesaurus\",\"index\",\"identifier\"],\"statements\":[[6,\"h4\"],[9,\"class\",\"section-header\"],[7],[0,\"\\n  Editing Keywords\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"model\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n  \"],[6,\"section\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"model\",\"json\",\"metadata\",\"resourceInfo\",\"keyword\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"md-keywords-container\"],[10,\"data-spy\",[26,[[25,\"concat\",[\"Thesaurus \",[19,2,[]]],null]]]],[10,\"id\",[25,\"concat\",[\"thesaurus-container-\",[19,2,[]]],null],null],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"md-keywords-header\"],[7],[0,\"\\n          \"],[6,\"h4\"],[9,\"class\",\"inline-block text-primary\"],[9,\"code\",\"\"],[7],[0,\"\\n            \"],[6,\"strong\"],[7],[1,[25,\"concat\",[\"Thesaurus #\",[19,2,[]]],null],false],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[1,[25,\"input/md-select-thesaurus\",null,[[\"class\",\"thesaurus\",\"selectThesaurus\",\"value\",\"disabled\"],[\"md-keywords-select\",[19,1,[]],[25,\"route-action\",[\"selectThesaurus\"],null],[19,1,[\"thesaurus\",\"identifier\",\"0\",\"identifier\"]],[19,1,[\"keyword\",\"length\"]]]]],false],[0,\"\\n\"],[4,\"control/md-button-confirm\",null,[[\"class\",\"onConfirm\"],[\"btn btn-sm btn-danger\",[25,\"route-action\",[\"deleteThesaurus\",[19,2,[]]],null]]],{\"statements\":[[0,\"            \"],[1,[25,\"fa-icon\",[\"times\"],null],false],[0,\" Delete\\n\"]],\"parameters\":[]},null],[4,\"if\",[[19,1,[\"thesaurus\",\"identifier\",\"0\",\"identifier\"]]],null,{\"statements\":[[0,\"          \"],[6,\"a\"],[9,\"class\",\"md-keywords-collapse pull-right\"],[9,\"data-toggle\",\"collapse\"],[9,\"aria-expanded\",\"true\"],[10,\"href\",[26,[\"#thesaurus-\",[19,2,[]]]]],[10,\"aria-controls\",[26,[\"thesaurus-\",[19,2,[]]]]],[7],[0,\"\\n            \"],[6,\"span\"],[9,\"class\",\"fa\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"id\",[26,[\"thesaurus-\",[19,2,[]]]]],[9,\"class\",\"md-keywords-body collapse in\"],[7],[0,\"\\n\\n\"],[4,\"with\",[[19,1,[\"thesaurus\",\"identifier\",\"0\",\"identifier\"]]],null,{\"statements\":[[0,\"          \"],[6,\"hr\"],[7],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"md-keywords-thesaurus col-md-6 col-lg-7\"],[7],[0,\"\\n              \"],[1,[25,\"object/md-keyword-citation\",null,[[\"model\"],[[19,1,[]]]]],false],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"md-keywords-list col-md-6 col-lg-5\"],[7],[0,\"\\n              \"],[1,[25,\"object/md-keyword-list\",null,[[\"model\",\"listId\",\"addKeyword\",\"deleteKeyword\",\"editThesaurus\",\"hideThesaurus\"],[[19,1,[]],[19,2,[]],[25,\"route-action\",[\"addKeyword\"],null],[25,\"route-action\",[\"deleteKeyword\"],null],[25,\"route-action\",[\"editThesaurus\"],null],[25,\"route-action\",[\"hideThesaurus\"],null]]]],false],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[1,2]},{\"statements\":[[0,\"          \"],[6,\"h3\"],[9,\"class\",\"alert alert-info\"],[7],[0,\"No keywords found.\\n            \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-success\"],[3,\"action\",[[19,0,[]],[25,\"route-action\",[\"addThesaurus\"],null]]],[7],[0,\"\\n              \"],[1,[25,\"fa-icon\",[\"plus\"],null],false],[0,\" Add Thesaurus\"],[8],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[8],[0,\"\\n\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n\\n  \"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-scroll-spy-record-edit\",[25,\"component\",[\"control/md-scroll-spy\"],[[\"refresh\",\"scrollInit\",\"setScrollTo\"],[[20,[\"refresh\"]],[20,[\"scrollTo\"]],[25,\"route-action\",[\"setScrollTo\"],null]]]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/keywords/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/keywords/thesaurus/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    isArray,
    A,
    set,
    get,
    isEmpty
  } = Ember;

  exports.default = Ember.Route.extend({
    keyword: Ember.inject.service(),
    model(params) {
      this.set('thesaurusId', params.thesaurus_id);

      return this.setupModel();
    },

    setupModel() {
      let thesaurusId = get(this, 'thesaurusId') || this.controller.get('thesaurusId');
      let model = this.modelFor('record.show.edit.keywords');
      let thesaurus = model.get('json.metadata.resourceInfo.keyword').get(thesaurusId);

      //make sure the thesaurus still exists
      if (isEmpty(thesaurus)) {
        Ember.get(this, 'flashMessages').warning('No thesaurus found! Re-directing to list...');
        this.replaceWith('record.show.edit.keywords');

        return;
      }

      if (!isArray(thesaurus.keyword)) {
        set(thesaurus, 'keyword', A());
      }

      return Ember.Object.create({
        id: thesaurusId,
        keywords: thesaurus,
        model: model,
        path: `json.metadata.resourceInfo.keyword.${thesaurusId}`,
        thesaurus: this.get('keyword').findById(thesaurus.thesaurus.identifier[0].identifier)
      });
    },

    renderTemplate() {
      this.render('record.show.edit.keywords.thesaurus', {
        into: 'record.show.edit'
      });
    },

    subbar: 'control/subbar-thesaurus',

    // clearSubbar: function() {
    //   this.controllerFor('record.show.edit')
    //     .set('subbar', null);
    // }.on('deactivate'),

    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      this.controllerFor('record.show.edit').setProperties({
        subbar: this.get('subbar'),
        onCancel: this.setupModel,
        thesaurusId: this.get('thesaurusId')
      });
    },

    actions: {
      willTransition: function willTransition(transition) {
        let parent = this.routeName.substring(0, this.routeName.lastIndexOf('.'));

        let subbar = transition.targetName === parent + '.index' ? this.controllerFor(parent).get('subbar') : null;

        this.controllerFor('record.show.edit').set('subbar', subbar);
      },
      selectKeyword(node, path) {
        let model = this.currentRouteModel();
        let keywords = model.get('model').get(model.get('path'));
        let kw = keywords.keyword;
        let target = kw.findBy('identifier', node.uuid);

        if (node.isSelected && target === undefined) {
          let pathStr = '';

          if (Ember.isArray(path)) {
            pathStr = path.reduce(function (prev, item) {
              prev = prev ? `${prev} > ${item.label}` : item.label;

              return prev;
            }, '');
          }

          kw.pushObject({
            identifier: node.uuid,
            keyword: keywords.fullPath && pathStr ? pathStr : node.label,
            path: pathStr.split(' > ').slice(0, pathStr.length - 1)
          });
        } else {
          kw.removeObject(target);
        }
      },
      removeKeyword() {
        this.send('deleteKeyword', ...arguments);
      },
      changeFullPath(evt) {
        let model = this.currentRouteModel();
        let keywords = model.get('model').get(model.get('path'));
        let kw = get(keywords, 'keyword');
        let val = evt.target.checked;

        set(keywords, 'fullPath', val);

        kw.forEach(function (curr) {
          if (val) {
            Ember.set(curr, 'keyword', curr.path.join(' > '));
          } else {
            let words = curr.keyword.split(' > ');
            Ember.set(curr, 'keyword', words[words.length - 1]);
          }
        });
      }
    }
  });
});
define("mdeditor/pods/record/show/edit/keywords/thesaurus/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NqVS3WY/", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"lead\"],[7],[0,\"Editing Thesaurus #\"],[1,[20,[\"model\",\"id\"]],false],[0,\"\\n  \"],[6,\"small\"],[9,\"class\",\"text-muted\"],[7],[1,[20,[\"model\",\"thesaurus\",\"citation\",\"title\"]],false],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-md-6\"],[7],[0,\"\\n    \"],[2,\" Nav tabs \"],[0,\"\\n    \"],[6,\"ul\"],[9,\"class\",\"nav nav-tabs\"],[9,\"role\",\"tablist\"],[7],[0,\"\\n      \"],[6,\"li\"],[9,\"role\",\"presentation\"],[9,\"class\",\"active\"],[7],[0,\"\\n        \"],[6,\"a\"],[9,\"href\",\"#md-keyword-tree\"],[9,\"aria-controls\",\"md-keyword-tree\"],[9,\"role\",\"tab\"],[9,\"data-toggle\",\"tab\"],[7],[0,\"Tree\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"li\"],[9,\"role\",\"presentation\"],[7],[0,\"\\n        \"],[6,\"a\"],[9,\"href\",\"#md-keyword-search\"],[9,\"aria-controls\",\"md-keyword-search\"],[9,\"role\",\"tab\"],[9,\"data-toggle\",\"tab\"],[7],[0,\"Search\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"tab-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"role\",\"tabpanel\"],[9,\"class\",\"md-keyword-tree tab-pane fade in active\"],[9,\"id\",\"md-keyword-tree\"],[7],[0,\"\\n        \"],[1,[25,\"tree-view\",null,[[\"model\",\"selected\",\"select\",\"disableCheck\"],[[20,[\"model\",\"thesaurus\",\"keywords\"]],[25,\"get\",[[20,[\"model\",\"model\"]],[25,\"concat\",[[20,[\"model\",\"path\"]],\".keyword\"],null]],null],[25,\"route-action\",[\"selectKeyword\"],null],true]]],false],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"role\",\"tabpanel\"],[9,\"class\",\"tab-pane fade\"],[9,\"id\",\"md-keyword-search\"],[7],[0,\"\\n        \"],[1,[25,\"tree-search\",null,[[\"model\",\"selected\",\"select\"],[[20,[\"model\",\"thesaurus\",\"keywords\"]],[25,\"get\",[[20,[\"model\",\"model\"]],[25,\"concat\",[[20,[\"model\",\"path\"]],\".keyword\"],null]],null],[25,\"route-action\",[\"selectKeyword\"],null]]]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"col-md-6\"],[7],[0,\"\\n    \"],[6,\"div\"],[7],[0,\"\\n      \"],[6,\"h4\"],[9,\"class\",\"inline-block\"],[7],[0,\"Selected Keywords\"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"checkbox pull-right\"],[7],[0,\"\\n        \"],[6,\"label\"],[7],[0,\"\\n          \"],[6,\"input\"],[9,\"type\",\"checkbox\"],[9,\"name\",\"fullPath\"],[10,\"checked\",[20,[\"model\",\"keywords\",\"fullPath\"]],null],[10,\"onChange\",[25,\"route-action\",[\"changeFullPath\"],null],null],[7],[8],[0,\"\\n            Full Path\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[1,[25,\"object/md-keyword-list\",null,[[\"model\",\"deleteKeyword\",\"editThesaurus\"],[[25,\"get\",[[20,[\"model\",\"model\"]],[20,[\"model\",\"path\"]]],null],[25,\"route-action\",[\"removeKeyword\"],null],false]]],false],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/keywords/thesaurus/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/lineage/index/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    set,
    getWithDefault,
    get
  } = Ember;

  exports.default = Route.extend({
    afterModel(m) {
      this._super(...arguments);

      let model = get(m, 'json.metadata');
      set(model, 'resourceLineage', getWithDefault(model, 'resourceLineage', []));
    },

    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      this.controller.set('parentModel', this.modelFor('record.show.edit'));
    },

    actions: {
      editLineage(id) {
        this.transitionTo('record.show.edit.lineage.lineageobject', id);
      } //,
      // templateClass() {
      //   return Ember.Object.extend({
      //     init() {
      //       this._super(...arguments);
      //       //this.set('authority', {});
      //     }
      //   });
      // }
    }
  });
});
define("mdeditor/pods/record/show/edit/lineage/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "yXveYufq", "block": "{\"symbols\":[],\"statements\":[[6,\"h4\"],[9,\"class\",\"section-header\"],[7],[0,\"\\n  Editing Lineage\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"parentModel\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[25,\"object/md-objectroute-table\",null,[[\"items\",\"header\",\"shadow\",\"buttonText\",\"ellipsis\",\"previewTemplate\",\"editItem\",\"hideIndex\",\"condensed\"],[[20,[\"model\",\"json\",\"metadata\",\"resourceLineage\"]],\"Lineage\",true,\"Add Lineage Object\",[20,[\"ellipsis\"]],\"object/md-lineage/preview\",[25,\"route-action\",[\"editLineage\"],null],true,true]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/lineage/index/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/lineage/lineageobject/citation/identifier/route', ['exports', 'mdeditor/mixins/scroll-to'], function (exports, _scrollTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    get,
    isEmpty,
    isArray
  } = Ember;

  exports.default = Route.extend(_scrollTo.default, {
    model(params) {
      this.set('identifierId', params.identifier_id);

      return this.setupModel();
    },

    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      this.controller.set('parentModel', this.modelFor('record.show.edit'));
      this.controllerFor('record.show.edit').setProperties({
        onCancel: this.setupModel
      });
    },

    setupModel() {
      let identifierId = get(this, 'identifierId');
      let model = this.modelFor('record.show.edit.lineage.lineageobject.citation');
      let identifiers = get(model, 'identifier');
      let identifier = identifierId && isArray(identifiers) ? identifiers.get(identifierId) : undefined;

      //make sure the identifier exists
      if (isEmpty(identifier)) {
        Ember.get(this, 'flashMessages').warning('No identifier found! Re-directing to Citation...');
        this.replaceWith('record.show.edit.lineage.lineageobject.citation');

        return;
      }

      return identifier;
    },
    actions: {
      goBack() {
        this.transitionTo('record.show.edit.lineage.lineageobject.citation');
      }
    }
  });
});
define("mdeditor/pods/record/show/edit/lineage/lineageobject/citation/identifier/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JhUnLHz3", "block": "{\"symbols\":[],\"statements\":[[6,\"h4\"],[9,\"class\",\"section-header\"],[7],[0,\"\\n  Editing Alternate Identifier: \"],[1,[20,[\"model\",\"identifier\"]],false],[0,\"\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[25,\"compute\",[[25,\"route-action\",[\"parentModel\"],null]],null]]]],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"\"],[7],[0,\"\\n  \"],[1,[25,\"object/md-identifier\",null,[[\"model\",\"profilePath\",\"data-spy\"],[[20,[\"model\"]],\"record.metadata.lineage.lineageobject.citation.identifier\",\"Identifier\"]]],false],[0,\"\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-subbar-extra\",[25,\"component\",[\"control/subbar-link\"],[[\"text\",\"icon\",\"click\"],[\"Back to Lineage Citation\",\"arrow-left\",[25,\"route-action\",[\"goBack\"],null]]]]]]],false],[0,\"\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-scroll-spy-record-edit\",[25,\"component\",[\"control/md-scroll-spy\"],[[\"scrollInit\",\"setScrollTo\"],[[20,[\"scrollTo\"]],[25,\"route-action\",[\"setScrollTo\"],null]]]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/lineage/lineageobject/citation/identifier/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/lineage/lineageobject/citation/index/route', ['exports', 'mdeditor/mixins/scroll-to'], function (exports, _scrollTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route
  } = Ember;

  exports.default = Route.extend(_scrollTo.default, {
    actions: {
      editIdentifier(index) {
        this.transitionTo('record.show.edit.lineage.lineageobject.citation.identifier', index).then(function () {
          this.setScrollTo('identifier');
        }.bind(this));
      },
      goBack() {
        this.transitionTo('record.show.edit.lineage.lineageobject');
      }
    }
  });
});
define("mdeditor/pods/record/show/edit/lineage/lineageobject/citation/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fxHhof/Z", "block": "{\"symbols\":[\"citation\"],\"statements\":[[6,\"h4\"],[9,\"class\",\"section-header\"],[7],[0,\"Editing Citation\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[25,\"compute\",[[25,\"route-action\",[\"parentModel\"],null]],null]]]],false],[0,\"\\n\"],[8],[0,\"\\n\"],[4,\"with\",[[20,[\"model\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"\"],[7],[0,\"\\n      \"],[1,[25,\"object/md-citation\",null,[[\"model\",\"profilePath\",\"editIdentifier\"],[[19,1,[]],\"record.metadata.resourceLineage.citation\",[25,\"route-action\",[\"editIdentifier\"],null]]]],false],[0,\"\\n      \"],[1,[18,\"outlet\"],false],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-subbar-extra\",[25,\"component\",[\"control/subbar-link\"],[[\"text\",\"icon\",\"click\"],[\"Back to Lineage Object\",\"arrow-left\",[25,\"route-action\",[\"goBack\"],null]]]]]]],false],[0,\"\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-scroll-spy-record-edit\",[25,\"component\",[\"control/md-scroll-spy\"],[[\"scrollInit\",\"setScrollTo\"],[[20,[\"scrollTo\"]],[25,\"route-action\",[\"setScrollTo\"],null]]]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/lineage/lineageobject/citation/index/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/lineage/lineageobject/citation/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    get,
    isEmpty,
    isArray
  } = Ember;

  exports.default = Route.extend({
    model(params, transition) {
      this.set('citationId', params.citation_id);
      this.set('lineageId', transition.params['record.show.edit.lineage.lineageobject'].lineage_id);

      return this.setupModel();
    },

    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      this.controller.set('parentModel', this.modelFor('record.show.edit'));
      this.controllerFor('record.show.edit').setProperties({
        onCancel: this.setupModel
      });
    },

    setupModel() {
      let citationId = get(this, 'citationId');
      let lineageId = get(this, 'lineageId');
      let model = this.modelFor('record.show.edit');
      let citations = model.get('json.metadata.resourceLineage.' + lineageId + '.citation');
      let citation = citationId && isArray(citations) ? citations.get(citationId) : undefined;

      //make sure the identifier exists
      if (isEmpty(citation)) {
        Ember.get(this, 'flashMessages').warning('No citation found! Re-directing...');
        this.replaceWith('record.show.edit.lineage.lineageobject');

        return;
      }

      return citation;
    },
    actions: {
      parentModel() {
        return this.modelFor('record.show.edit');
      }
    }
  });
});
define("mdeditor/pods/record/show/edit/lineage/lineageobject/citation/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8G44IdLl", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"liquid-outlet\",null,[[\"class\"],[\"liquid-spy\"]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/lineage/lineageobject/citation/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/lineage/lineageobject/index/route', ['exports', 'mdeditor/mixins/scroll-to'], function (exports, _scrollTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    get
  } = Ember;

  exports.default = Route.extend(_scrollTo.default, {
    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      this.controller.set('parentModel', this.modelFor('record.show.edit.main'));
      this.controller.set('lineageId', get(this.controllerFor('record.show.edit.lineage.lineageobject'), 'lineageId'));
    },
    actions: {
      editCitation(index) {
        this.transitionTo('record.show.edit.lineage.lineageobject.citation', index).then(function () {
          this.setScrollTo('citation');
        }.bind(this));
      },
      editProcessStep(index) {
        this.transitionTo('record.show.edit.lineage.lineageobject.step', index).then(function () {
          this.setScrollTo('process-step');
        }.bind(this));
      }
    }
  });
});
define("mdeditor/pods/record/show/edit/lineage/lineageobject/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5NCjP+Di", "block": "{\"symbols\":[],\"statements\":[[6,\"h4\"],[9,\"class\",\"section-header\"],[7],[0,\"\\n  Editing Lineage #\"],[1,[18,\"lineageId\"],false],[0,\"\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"parentModel\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[25,\"object/md-lineage\",null,[[\"model\",\"profilePath\",\"editCitation\",\"editProcessStep\"],[[20,[\"model\"]],\"record.lineage\",[25,\"route-action\",[\"editCitation\"],null],[25,\"route-action\",[\"editProcessStep\"],null]]]],false],[0,\"\\n\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-subbar-extra\",[25,\"component\",[\"control/subbar-link\"],[[\"text\",\"icon\",\"route\"],[\"Back to Lineage List\",\"arrow-left\",\"record.show.edit.lineage\"]]]]]],false],[0,\"\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-scroll-spy-record-edit\",[25,\"component\",[\"control/md-scroll-spy\"],[[\"scrollInit\",\"setScrollTo\"],[[20,[\"scrollTo\"]],[25,\"route-action\",[\"setScrollTo\"],null]]]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/lineage/lineageobject/index/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/lineage/lineageobject/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    get,
    isEmpty,
    isArray,
    computed
  } = Ember;

  exports.default = Route.extend({
    breadCrumb: computed('lineageId', function () {
      return {
        title: get(this, 'lineageId'),
        linkable: true
      };
    }),

    model(params) {
      this.set('lineageId', params.lineage_id);

      return this.setupModel();
    },

    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      //this.controller.set('parentModel', this.modelFor('record.show.edit.main'));
      this.controller.set('lineageId', get(this, 'lineageId'));
      this.controllerFor('record.show.edit').setProperties({
        onCancel: this.setupModel
      });
    },

    setupModel() {
      let lineageId = get(this, 'lineageId');
      let model = this.modelFor('record.show.edit');
      let objects = model.get('json.metadata.resourceLineage');
      let lineage = lineageId && isArray(objects) ? objects.get(lineageId) : undefined;

      //make sure the identifier exists
      if (isEmpty(lineage)) {
        Ember.get(this, 'flashMessages').warning('No lineage object found! Re-directing to list...');
        this.replaceWith('record.show.edit.lineage');

        return;
      }

      return lineage;
    }
  });
});
define('mdeditor/pods/record/show/edit/lineage/lineageobject/step/citation/route', ['exports', 'mdeditor/mixins/scroll-to'], function (exports, _scrollTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    get,
    isEmpty,
    isArray
  } = Ember;

  exports.default = Route.extend(_scrollTo.default, {
    model(params, transition) {
      this.set('citationId', params.citation_id);
      this.set('stepId', transition.params['record.show.edit.lineage.lineageobject.step'].step_id);
      this.set('lineageId', transition.params['record.show.edit.lineage.lineageobject'].lineage_id);

      return this.setupModel();
    },

    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      this.controller.set('parentModel', this.modelFor('record.show.edit'));
      this.controller.set('stepId', get(this, 'stepId'));
      this.controllerFor('record.show.edit').setProperties({
        onCancel: this.setupModel
      });
    },

    setupModel() {
      let citationId = get(this, 'citationId');
      let lineageId = get(this, 'lineageId');
      let stepId = get(this, 'stepId');
      let model = this.modelFor('record.show.edit');
      let citations = model.get(`json.metadata.resourceLineage.${lineageId}.processStep.${stepId}.reference`);
      let citation = citationId && isArray(citations) ? citations.get(citationId) : undefined;

      //make sure the identifier exists
      if (isEmpty(citation)) {
        Ember.get(this, 'flashMessages').warning('No citation found! Re-directing...');
        this.replaceWith('record.show.edit.lineage.lineageobject.step');

        return;
      }

      return citation;
    },
    actions: {
      parentModel() {
        return this.modelFor('record.show.edit');
      },
      goBack() {
        this.transitionTo('record.show.edit.lineage.lineageobject.step');
      }
    }
  });
});
define("mdeditor/pods/record/show/edit/lineage/lineageobject/step/citation/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "AoUro73h", "block": "{\"symbols\":[\"citation\"],\"statements\":[[6,\"h4\"],[9,\"class\",\"section-header\"],[7],[0,\"Editing Step #\"],[1,[18,\"stepId\"],false],[0,\" Citation\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[25,\"compute\",[[25,\"route-action\",[\"parentModel\"],null]],null]]]],false],[0,\"\\n\"],[8],[0,\"\\n\"],[4,\"with\",[[20,[\"model\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"\"],[7],[0,\"\\n      \"],[1,[25,\"object/md-citation\",null,[[\"model\",\"profilePath\",\"simpleIdentifier\"],[[19,1,[]],\"record.metadata.resourceLineage.processStep.reference\",true]]],false],[0,\"\\n      \"],[1,[18,\"outlet\"],false],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-subbar-extra\",[25,\"component\",[\"control/subbar-link\"],[[\"text\",\"icon\",\"click\"],[[25,\"concat\",[\"Back to Step #\",[20,[\"stepId\"]]],null],\"arrow-left\",[25,\"route-action\",[\"goBack\"],null]]]]]]],false],[0,\"\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-scroll-spy-record-edit\",[25,\"component\",[\"control/md-scroll-spy\"],[[\"scrollInit\",\"setScrollTo\"],[[20,[\"scrollTo\"]],[25,\"route-action\",[\"setScrollTo\"],null]]]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/lineage/lineageobject/step/citation/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/lineage/lineageobject/step/index/route', ['exports', 'mdeditor/mixins/scroll-to'], function (exports, _scrollTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    get
  } = Ember;

  exports.default = Route.extend(_scrollTo.default, {
    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      this.controller.set('parentModel', this.modelFor('record.show.edit.main'));
      this.controller.set('stepId', get(this.controllerFor('record.show.edit.lineage.lineageobject.step'), 'stepId'));
    },
    actions: {
      editCitation(index) {
        this.transitionTo('record.show.edit.lineage.lineageobject.step.citation', index).then(function () {
          this.setScrollTo('citation');
        }.bind(this));
      },
      goBack() {
        this.transitionTo('record.show.edit.lineage.lineageobject');
      }
    }
  });
});
define("mdeditor/pods/record/show/edit/lineage/lineageobject/step/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rNQj8/ss", "block": "{\"symbols\":[],\"statements\":[[6,\"h4\"],[9,\"class\",\"section-header\"],[7],[0,\"\\n  Editing Process Step #\"],[1,[18,\"stepId\"],false],[0,\"\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"parentModel\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[25,\"object/md-process-step\",null,[[\"model\",\"profilePath\",\"itemId\",\"editCitation\"],[[20,[\"model\"]],\"record.lineage.processStep\",[20,[\"stepId\"]],[25,\"route-action\",[\"editCitation\"],null]]]],false],[0,\"\\n\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-subbar-extra\",[25,\"component\",[\"control/subbar-link\"],[[\"text\",\"icon\",\"click\"],[\"Back to Lineage\",\"arrow-left\",[25,\"route-action\",[\"goBack\"],null]]]]]]],false],[0,\"\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-scroll-spy-record-edit\",[25,\"component\",[\"control/md-scroll-spy\"],[[\"scrollInit\",\"setScrollTo\"],[[20,[\"scrollTo\"]],[25,\"route-action\",[\"setScrollTo\"],null]]]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/lineage/lineageobject/step/index/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/lineage/lineageobject/step/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    get,
    isEmpty,
    isArray,
    computed
  } = Ember;

  exports.default = Route.extend({
    model(params, transition) {
      this.set('stepId', params.step_id);
      this.set('lineageId', transition.params['record.show.edit.lineage.lineageobject'].lineage_id);

      return this.setupModel();
    },

    breadCrumb: computed('stepId', function () {
      return {
        title: 'Step ' + get(this, 'stepId'),
        linkable: true
      };
    }),

    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      this.controller.set('parentModel', this.modelFor('record.show.edit'));
      this.controller.set('stepId', get(this, 'stepId'));
      this.controllerFor('record.show.edit').setProperties({
        onCancel: this.setupModel
      });
    },

    setupModel() {
      let stepId = get(this, 'stepId');
      let lineageId = get(this, 'lineageId');
      let model = this.modelFor('record.show.edit');
      let steps = model.get('json.metadata.resourceLineage.' + lineageId + '.processStep');
      let step = stepId && isArray(steps) ? steps.get(stepId) : undefined;

      //make sure the identifier exists
      if (isEmpty(step)) {
        Ember.get(this, 'flashMessages').warning('No Process Step found! Re-directing...');
        this.replaceWith('record.show.edit.lineage.lineageobject');

        return;
      }

      return step;
    },
    actions: {
      parentModel() {
        return this.modelFor('record.show.edit');
      }
    }
  });
});
define("mdeditor/pods/record/show/edit/lineage/lineageobject/step/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "dFNRDvy6", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"liquid-outlet\",null,[[\"class\"],[\"liquid-spy\"]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/lineage/lineageobject/step/template.hbs" } });
});
define("mdeditor/pods/record/show/edit/lineage/lineageobject/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9V1W0zcE", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"liquid-outlet\",null,[[\"class\"],[\"liquid-spy\"]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/lineage/lineageobject/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/lineage/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("mdeditor/pods/record/show/edit/lineage/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Y7nDT7zi", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-xxl-11 col-xxxl-10 col-xxl-offset-1\"],[7],[0,\"\\n    \"],[1,[25,\"liquid-outlet\",null,[[\"class\"],[\"\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/lineage/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/main/citation/identifier/route', ['exports', 'mdeditor/mixins/scroll-to'], function (exports, _scrollTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    get,
    isEmpty,
    isArray
  } = Ember;

  exports.default = Route.extend(_scrollTo.default, {
    model(params) {
      this.set('identifierId', params.identifier_id);

      return this.setupModel();
    },

    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      this.controller.set('parentModel', this.modelFor('record.show.edit.main'));
      this.controllerFor('record.show.edit').setProperties({
        onCancel: this.setupModel
      });
    },

    setupModel() {
      let identifierId = get(this, 'identifierId');
      let model = this.modelFor('record.show.edit.main');
      let identifiers = model.get('json.metadata.resourceInfo.citation.identifier');
      let identifier = identifierId && isArray(identifiers) ? identifiers.get(identifierId) : undefined;

      //make sure the identifier exists
      if (isEmpty(identifier)) {
        Ember.get(this, 'flashMessages').warning('No identifier found! Re-directing to citation...');
        this.replaceWith('record.show.edit.main.citation');

        return;
      }

      return identifier;
    }
  });
});
define("mdeditor/pods/record/show/edit/main/citation/identifier/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/Qw74Sno", "block": "{\"symbols\":[],\"statements\":[[6,\"h4\"],[9,\"class\",\"col-xxl-11 col-xxxl-10 col-xxl-offset-1 section-header\"],[7],[0,\"\\n  Editing Identifier: \"],[1,[20,[\"model\",\"identifier\"]],false],[0,\"\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"parentModel\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[1,[25,\"object/md-identifier\",null,[[\"class\",\"model\",\"profilePath\",\"data-spy\"],[\"col-xxl-11 col-xxxl-10 col-xxl-offset-1\",[20,[\"model\"]],\"record.main.citation.identifier\",\"Identifier\"]]],false],[0,\"\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-subbar-extra\",[25,\"component\",[\"control/subbar-link\"],[[\"text\",\"icon\",\"route\"],[\"Back to Citation\",\"arrow-left\",\"record.show.edit.main.citation\"]]]]]],false],[0,\"\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-scroll-spy-record-edit\",[25,\"component\",[\"control/md-scroll-spy\"],[[\"scrollInit\",\"setScrollTo\"],[[20,[\"scrollTo\"]],[25,\"route-action\",[\"setScrollTo\"],null]]]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/main/citation/identifier/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/main/citation/index/route', ['exports', 'mdeditor/mixins/scroll-to'], function (exports, _scrollTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route //,
    // get,
    // getWithDefault,
    // set
  } = Ember;

  exports.default = Route.extend(_scrollTo.default, {
    // afterModel() {
    //   this.setupModel();
    // },
    //
    // setupController: function () {
    //   // Call _super for default behavior
    //   this._super(...arguments);
    //
    //   this.controllerFor('record.show.edit')
    //     .setProperties({
    //       onCancel: this.setupModel
    //     });
    // },
    //
    // setupModel() {
    //   // let model = this.currentRouteModel();
    //   // let citation = get(model, 'json.metadata.resourceInfo.citation');
    //   //
    //   // set(citation, 'responsibleParty', getWithDefault(citation,
    //   //   'responsibleParty', []));
    //   // set(citation, 'presentationForm', getWithDefault(citation,
    //   //   'presentationForm', []));
    //   // set(citation, 'onlineResource', getWithDefault(citation,
    //   //   'onlineResource', []));
    //   // set(citation, 'identifier', getWithDefault(citation, 'identifier', []));
    //   // set(citation, 'graphic', getWithDefault(citation, 'graphic', []));
    //   // set(citation, 'series', getWithDefault(citation, 'series', {}));
    // },

    actions: {
      editIdentifier(index) {
        this.transitionTo('record.show.edit.main.citation.identifier', index).then(function () {
          this.setScrollTo('identifier');
        }.bind(this));
      }
    }
  });
});
define("mdeditor/pods/record/show/edit/main/citation/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Xsd9Rjld", "block": "{\"symbols\":[\"citation\"],\"statements\":[[6,\"h4\"],[9,\"class\",\"col-xxl-11 col-xxxl-10 col-xxl-offset-1 section-header\"],[7],[0,\"Editing Citation\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"model\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\"],[4,\"with\",[[20,[\"model\",\"json\",\"metadata\",\"resourceInfo\",\"citation\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n      \"],[1,[25,\"object/md-citation\",null,[[\"class\",\"model\",\"profilePath\",\"editIdentifier\"],[\"col-xxl-11 col-xxxl-10 col-xxl-offset-1\",[19,1,[]],\"record.main.citation\",[25,\"route-action\",[\"editIdentifier\"],null]]]],false],[0,\"\\n      \"],[1,[18,\"outlet\"],false],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-subbar-extra\",[25,\"component\",[\"control/subbar-link\"],[[\"text\",\"icon\",\"route\"],[\"Back to Main\",\"arrow-left\",\"record.show.edit.main\"]]]]]],false],[0,\"\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-scroll-spy-record-edit\",[25,\"component\",[\"control/md-scroll-spy\"],[[\"scrollInit\",\"setScrollTo\"],[[20,[\"scrollTo\"]],[25,\"route-action\",[\"setScrollTo\"],null]]]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/main/citation/index/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/main/citation/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("mdeditor/pods/record/show/edit/main/citation/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VLVLRRSo", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"liquid-outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/main/citation/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/main/index/route', ['exports', 'mdeditor/mixins/scroll-to'], function (exports, _scrollTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  const {
    Route,
    get,
    getWithDefault,
    set
  } = Ember;

  exports.default = Route.extend(_scrollTo.default, {
    afterModel(m) {
      this._super(...arguments);

      let model = get(m, 'json.metadata.resourceInfo');
      set(model, 'timePeriod', getWithDefault(model, 'timePeriod', {}));
      set(model, 'pointOfContact', getWithDefault(model, 'pointOfContact', []));
      set(model, 'status', getWithDefault(model, 'status', []));
      set(model, 'credit', getWithDefault(model, 'credit', []));
      set(model, 'resourceType', getWithDefault(model, 'resourceType', []));
      set(model, 'graphicOverview', getWithDefault(model, 'graphicOverview', []));
    },
    actions: {
      editCitation(scrollTo) {
        this.transitionTo('record.show.edit.main.citation').then(function () {
          this.setScrollTo(scrollTo);
        }.bind(this));
      },
      editId() {
        this.transitionTo('record.show.edit.metadata.identifier', {
          queryParams: {
            scrollTo: 'identifier'
          }
        });
      }
    }
  });
});
define("mdeditor/pods/record/show/edit/main/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "x5/Fsva0", "block": "{\"symbols\":[\"resource\",\"credit\"],\"statements\":[[4,\"with\",[[20,[\"model\",\"json\",\"metadata\",\"resourceInfo\"]]],null,{\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n    \"],[6,\"form\"],[9,\"class\",\"col-xxl-11 col-xxxl-10 col-xxl-offset-1\"],[7],[0,\"\\n      \"],[6,\"h4\"],[9,\"class\",\"section-header\"],[7],[0,\"\\n        Editing \"],[6,\"em\"],[7],[1,[20,[\"model\",\"title\"]],false],[8],[0,\"\\n        \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"model\"]]]]],false],[0,\"\\n      \"],[8],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"title\",\"collapsible\",\"collapsed\",\"profilePath\",\"data-spy\",\"required\"],[\"Basic Information\",true,false,\"record.main.basicInformation\",\"Basic Information\",true]],{\"statements\":[[0,\"\\n\"],[4,\"layout/md-wrap\",null,[[\"data-spy\",\"class\",\"profilePath\"],[\"Record ID\",\"md-embedded\",\"record.main.recordId\"]],{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n          \"],[6,\"label\"],[9,\"class\",\"required\"],[7],[0,\"Record ID\"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"input-group input-group-md\"],[7],[0,\"\\n            \"],[1,[25,\"input/md-input\",null,[[\"valuePath\",\"model\",\"placeholder\",\"disabled\"],[\"recordId\",[20,[\"model\"]],\"Assigned Record ID\",true]]],false],[0,\"\\n            \"],[6,\"span\"],[9,\"class\",\"input-group-btn\"],[7],[0,\"\\n                \"],[6,\"button\"],[9,\"class\",\"btn btn-warning\"],[9,\"type\",\"button\"],[3,\"action\",[[19,0,[]],[25,\"route-action\",[\"editId\"],null]]],[7],[0,\"\\n                  \"],[1,[25,\"fa-icon\",[\"pencil\"],null],false],[0,\"\\n                  Edit\"],[8],[0,\"\\n                  \"],[1,[25,\"tooltip-on-element\",null,[[\"text\",\"class\"],[\"Edit the metadata id\",\"md-tooltip warning\"]]],false],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n        \"],[1,[25,\"input/md-input\",null,[[\"value\",\"placeholder\",\"label\",\"required\",\"profilePath\",\"data-spy\",\"class\"],[[20,[\"model\",\"title\"]],\"Enter the title for the resource.\",\"Title\",true,\"record.main.title\",\"Title\",\"md-embedded\"]]],false],[0,\"\\n\\n\"],[4,\"if\",[[25,\"is-array\",[[19,1,[\"status\"]]],null]],null,{\"statements\":[[0,\"        \"],[1,[25,\"input/md-codelist-multi\",null,[[\"value\",\"label\",\"required\",\"create\",\"tooltip\",\"icon\",\"mdCodeName\",\"placeholder\",\"profilePath\",\"data-spy\",\"class\"],[[19,1,[\"status\"]],\"Status\",true,true,true,false,\"progress\",\"Select the current status\",\"record.main.status\",\"Status\",\"md-embedded\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"title\",\"shadow\",\"data-spy\",\"required\",\"profilePath\"],[\"Default Locale\",false,false,true,\"record.main.defaultLocale\"]],{\"statements\":[[0,\"          \"],[1,[25,\"object/md-locale\",null,[[\"model\",\"modelPath\"],[[19,1,[]],\"defaultResourceLocale\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[25,\"is-array\",[[19,1,[\"resourceType\"]]],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n            \"],[1,[25,\"object/md-resource-type-array\",null,[[\"plain\",\"value\",\"required\",\"data-spy\",\"profilePath\"],[false,[19,1,[\"resourceType\"]],true,\"Resource Types\",\"record.main.resourceType\"]]],false],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[25,\"is-array\",[[19,1,[\"pointOfContact\"]]],null]],null,{\"statements\":[[0,\"        \"],[1,[25,\"object/md-party-array\",null,[[\"title\",\"data-spy\",\"collapsible\",\"collapsed\",\"required\",\"value\",\"profilePath\"],[\"Point Of Contact\",\"Point Of Contact\",true,false,true,[19,1,[\"pointOfContact\"]],\"record.main.pointOfContact\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n        \"],[1,[25,\"object/md-citation/preview\",null,[[\"profilePath\",\"citation\",\"muted\",\"required\",\"editCitation\"],[\"record.main.citation\",[19,1,[\"citation\"]],true,true,\"editCitation\"]]],false],[0,\"\\n\\n\"],[4,\"layout/md-card\",null,[[\"title\",\"collapsible\",\"collapsed\",\"profilePath\",\"required\"],[\"Description\",true,false,\"record.main.description\",true]],{\"statements\":[[0,\"          \"],[1,[25,\"input/md-markdown-area\",null,[[\"value\",\"profilePath\",\"label\",\"placeholder\",\"required\"],[[19,1,[\"abstract\"]],\"record.main.abstract\",\"Abstract\",\"Enter an Abstract describing the resource.\",true]]],false],[0,\"\\n\\n          \"],[1,[25,\"input/md-markdown-area\",null,[[\"value\",\"profilePath\",\"label\",\"placeholder\",\"maxlength\"],[[19,1,[\"shortAbstract\"]],\"record.main.shortAbstract\",\"Short Abstract\",\"A short description of the resource. Max of 300 characters.\",300]]],false],[0,\"\\n\\n          \"],[1,[25,\"input/md-textarea\",null,[[\"value\",\"profilePath\",\"label\",\"placeholder\"],[[19,1,[\"purpose\"]],\"record.main.purpose\",\"Purpose\",\"Enter text describing the reason for creating the resource.\"]]],false],[0,\"\\n\\n          \"],[1,[25,\"input/md-textarea\",null,[[\"value\",\"profilePath\",\"label\",\"placeholder\"],[[19,1,[\"supplementalInfo\"]],\"record.main.supplementalInfo\",\"Supplemental Information\",\"Enter text describing other descriptive information about the resource.\"]]],false],[0,\"\\n\\n          \"],[1,[25,\"input/md-textarea\",null,[[\"value\",\"profilePath\",\"label\",\"placeholder\"],[[19,1,[\"environmentDescription\"]],\"record.main.environmentDescription\",\"Environment Description\",\"Description of the processing environment, for example the software, hardware, or the computer operating system.\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[19,1,[\"timePeriod\"]]],null,{\"statements\":[[0,\"        \"],[1,[25,\"object/md-time-period\",null,[[\"model\",\"profilePath\",\"data-spy\",\"label\"],[[19,1,[\"timePeriod\"]],\"record.main.timePeriod\",\"Time Period\",\"Time Period\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[25,\"is-array\",[[19,1,[\"graphicOverview\"]]],null]],null,{\"statements\":[[0,\"        \"],[1,[25,\"object/md-graphic-array\",null,[[\"model\",\"data-spy\",\"button-text\",\"label\",\"profilePath\"],[[19,1,[\"graphicOverview\"]],\"Graphic Overview\",\"Add Graphic\",\"Graphic Overview\",\"record.main.graphicOverview\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[25,\"is-array\",[[19,1,[\"credit\"]]],null]],null,{\"statements\":[[4,\"object/md-simple-array-table\",null,[[\"data-spy\",\"title\",\"profilePath\",\"value\"],[\"Credit\",\"Credit\",\"record.main.credit\",[19,1,[\"credit\"]]]],{\"statements\":[[0,\"            \"],[6,\"td\"],[7],[0,\"\\n                \"],[1,[25,\"input/md-input\",null,[[\"value\",\"placeholder\"],[[19,2,[\"item\",\"value\"]],\"Additional credits for the resource.\"]]],false],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-scroll-spy-record-edit\",[25,\"component\",[\"control/md-scroll-spy\"],[[\"scrollInit\",\"setScrollTo\"],[[20,[\"scrollTo\"]],[25,\"route-action\",[\"setScrollTo\"],null]]]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/main/index/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/main/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("mdeditor/pods/record/show/edit/main/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bN5d2vWw", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"liquid-outlet\",null,[[\"class\"],[\"liquid-spy\"]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/main/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/metadata/alternate/identifier/route', ['exports', 'mdeditor/mixins/scroll-to'], function (exports, _scrollTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    get,
    isEmpty,
    isArray
  } = Ember;

  exports.default = Route.extend(_scrollTo.default, {
    model(params) {
      this.set('identifierId', params.identifier_id);

      return this.setupModel();
    },

    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      this.controller.set('parentModel', this.modelFor('record.show.edit'));
      this.controllerFor('record.show.edit').setProperties({
        onCancel: this.setupModel
      });
    },

    setupModel() {
      let identifierId = get(this, 'identifierId');
      let model = this.modelFor('record.show.edit.metadata.alternate');
      let identifiers = get(model, 'identifier');
      let identifier = identifierId && isArray(identifiers) ? identifiers.get(identifierId) : undefined;

      //make sure the identifier exists
      if (isEmpty(identifier)) {
        Ember.get(this, 'flashMessages').warning('No identifier found! Re-directing to Alternate Metadata...');
        this.replaceWith('record.show.edit.metadata.alternate');

        return;
      }

      return identifier;
    },
    actions: {
      goBack() {
        this.transitionTo('record.show.edit.metadata.alternate');
      }
    }
  });
});
define("mdeditor/pods/record/show/edit/metadata/alternate/identifier/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4tzbFsG/", "block": "{\"symbols\":[],\"statements\":[[6,\"h4\"],[9,\"class\",\"col-xxl-11 col-xxxl-10 col-xxl-offset-1 section-header\"],[7],[0,\"\\n  Editing Alternate Identifier: \"],[1,[20,[\"model\",\"identifier\"]],false],[0,\"\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[25,\"compute\",[[25,\"route-action\",[\"parentModel\"],null]],null]]]],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[1,[25,\"object/md-identifier\",null,[[\"class\",\"model\",\"profilePath\",\"data-spy\"],[\"col-xxl-11 col-xxxl-10 col-xxl-offset-1\",[20,[\"model\"]],\"record.metadata.alternateMetadata.identifier\",\"Identifier\"]]],false],[0,\"\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-subbar-extra\",[25,\"component\",[\"control/subbar-link\"],[[\"text\",\"icon\",\"click\"],[\"Back to Alternate\",\"arrow-left\",[25,\"route-action\",[\"goBack\"],null]]]]]]],false],[0,\"\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-scroll-spy-record-edit\",[25,\"component\",[\"control/md-scroll-spy\"],[[\"scrollInit\",\"setScrollTo\"],[[20,[\"scrollTo\"]],[25,\"route-action\",[\"setScrollTo\"],null]]]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/metadata/alternate/identifier/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/metadata/alternate/index/route', ['exports', 'mdeditor/mixins/scroll-to'], function (exports, _scrollTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route
  } = Ember;

  exports.default = Route.extend(_scrollTo.default, {
    actions: {
      editIdentifier(index) {
        this.transitionTo('record.show.edit.metadata.alternate.identifier', index).then(function () {
          this.setScrollTo('identifier');
        }.bind(this));
      }
    }
  });
});
define("mdeditor/pods/record/show/edit/metadata/alternate/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "D7nvlgQC", "block": "{\"symbols\":[\"citation\"],\"statements\":[[6,\"h4\"],[9,\"class\",\"col-xxl-11 col-xxxl-10 col-xxl-offset-1 section-header\"],[7],[0,\"Editing Alternate Metadata Reference\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[25,\"compute\",[[25,\"route-action\",[\"parentModel\"],null]],null]]]],false],[0,\"\\n\"],[8],[0,\"\\n\"],[4,\"with\",[[20,[\"model\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n      \"],[1,[25,\"object/md-citation\",null,[[\"class\",\"model\",\"profilePath\",\"editIdentifier\"],[\"col-xxl-11 col-xxxl-10 col-xxl-offset-1\",[19,1,[]],\"record.metadata.alternateMetadata\",[25,\"route-action\",[\"editIdentifier\"],null]]]],false],[0,\"\\n      \"],[1,[18,\"outlet\"],false],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-subbar-extra\",[25,\"component\",[\"control/subbar-link\"],[[\"text\",\"icon\",\"route\"],[\"Back to Metadata\",\"arrow-left\",\"record.show.edit.metadata\"]]]]]],false],[0,\"\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-scroll-spy-record-edit\",[25,\"component\",[\"control/md-scroll-spy\"],[[\"scrollInit\",\"setScrollTo\"],[[20,[\"scrollTo\"]],[25,\"route-action\",[\"setScrollTo\"],null]]]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/metadata/alternate/index/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/metadata/alternate/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    get,
    isEmpty,
    isArray
  } = Ember;

  exports.default = Route.extend({
    model(params) {
      this.set('citationId', params.citation_id);

      return this.setupModel();
    },

    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      this.controller.set('parentModel', this.modelFor('record.show.edit'));
      this.controllerFor('record.show.edit').setProperties({
        onCancel: this.setupModel
      });
    },

    setupModel() {
      let citationId = get(this, 'citationId');
      let model = this.modelFor('record.show.edit');
      let citations = model.get('json.metadata.metadataInfo.alternateMetadataReference');
      let citation = citationId && isArray(citations) ? citations.get(citationId) : undefined;

      //make sure the identifier exists
      if (isEmpty(citation)) {
        Ember.get(this, 'flashMessages').warning('No citation found! Re-directing...');
        this.replaceWith('record.show.edit.metadata');

        return;
      }

      return citation;
    },
    actions: {
      parentModel() {
        return this.modelFor('record.show.edit');
      }
    }
  });
});
define("mdeditor/pods/record/show/edit/metadata/alternate/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "yjKt9XKj", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"liquid-outlet\",null,[[\"class\"],[\"liquid-spy\"]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/metadata/alternate/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/metadata/identifier/route', ['exports', 'mdeditor/mixins/scroll-to'], function (exports, _scrollTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    get,
    isEmpty
    //isArray
  } = Ember;

  exports.default = Route.extend(_scrollTo.default, {
    model() {
      return this.setupModel();
    },

    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      this.controller.set('parentModel', this.modelFor('record.show.edit'));
      this.controllerFor('record.show.edit').setProperties({
        onCancel: this.setupModel
      });
    },

    setupModel() {
      let model = this.modelFor('record.show.edit');
      let identifier = get(model, 'json.metadata.metadataInfo.metadataIdentifier');

      //make sure the identifier exists
      if (isEmpty(identifier)) {
        // Ember.get(this, 'flashMessages')
        //   .warning('No identifier found! Re-directing to metadata...');
        // this.replaceWith('record.show.edit.metadata');
        model.set('json.metadata.metadataInfo.metadataIdentifier', {});
      }

      return identifier;
    }
  });
});
define("mdeditor/pods/record/show/edit/metadata/identifier/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "349l/2ry", "block": "{\"symbols\":[],\"statements\":[[6,\"h4\"],[9,\"class\",\"col-xxl-11 col-xxxl-10 col-xxl-offset-1 section-header\"],[7],[0,\"\\n  Editing Metadata Identifier: \"],[1,[20,[\"model\",\"identifier\"]],false],[0,\"\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"parentModel\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[1,[25,\"object/md-identifier\",null,[[\"class\",\"model\",\"profilePath\",\"confirmIdentifier\",\"data-spy\"],[\"col-xxl-11 col-xxxl-10 col-xxl-offset-1\",[20,[\"model\"]],\"record.metadata.identifier\",true,\"Metadata Identifier\"]]],false],[0,\"\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-subbar-extra\",[25,\"component\",[\"control/subbar-link\"],[[\"text\",\"icon\",\"route\"],[\"Back to Metadata\",\"arrow-left\",\"record.show.edit.metadata\"]]]]]],false],[0,\"\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-scroll-spy-record-edit\",[25,\"component\",[\"control/md-scroll-spy\"],[[\"scrollInit\",\"setScrollTo\"],[[20,[\"scrollTo\"]],[25,\"route-action\",[\"setScrollTo\"],null]]]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/metadata/identifier/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/metadata/index/route', ['exports', 'mdeditor/mixins/scroll-to'], function (exports, _scrollTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    getWithDefault,
    get,
    set
  } = Ember;

  exports.default = Route.extend(_scrollTo.default, {
    afterModel(m) {
      this._super(...arguments);

      let model = get(m, 'json.metadata.metadataInfo');
      set(model, 'metadataContact', getWithDefault(model, 'metadataContact', []));
      set(model, 'metadataDate', getWithDefault(model, 'metadataDate', []));
      set(model, 'metadataMaintenance', getWithDefault(model, 'metadataMaintenance', {}));
      set(model, 'metadataOnlineResource', getWithDefault(model, 'metadataOnlineResource', []));
      set(model, 'defaultMetadataLocale', getWithDefault(model, 'defaultMetadataLocale', {}));
      set(model, 'metadataIdentifier', getWithDefault(model, 'metadataIdentifier', {}));
      set(model, 'parentMetadata', getWithDefault(model, 'parentMetadata', {}));
      set(model, 'alternateMetadataReference', getWithDefault(model, 'alternateMetadataReference', []));
      set(m, 'json.metadataRepository', getWithDefault(m, 'json.metadataRepository', []));
    },

    actions: {
      editIdentifier() {
        this.transitionTo('record.show.edit.metadata.identifier').then(function () {
          this.setScrollTo('metadata-identifier');
        }.bind(this));
      },
      editAlternate(index) {
        this.transitionTo('record.show.edit.metadata.alternate.index', index).then(function () {
          this.setScrollTo('alternate-metadata');
        }.bind(this));
      },
      editParent() {
        this.transitionTo('record.show.edit.metadata.parent').then(function () {
          this.setScrollTo('parent-metadata');
        }.bind(this));
      }
    }
  });
});
define("mdeditor/pods/record/show/edit/metadata/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "dMh36Qhh", "block": "{\"symbols\":[\"metadata\",\"identifier\"],\"statements\":[[4,\"with\",[[20,[\"model\",\"json\",\"metadata\",\"metadataInfo\"]]],null,{\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"form\"],[9,\"class\",\"col-xxl-11 col-xxxl-10 col-xxl-offset-1\"],[7],[0,\"\\n    \"],[6,\"h4\"],[9,\"class\",\"section-header\"],[7],[0,\"\\n      Editing Metadata Information\\n      \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"model\"]]]]],false],[0,\"\\n    \"],[8],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"title\",\"collapsible\",\"collapsed\",\"profilePath\",\"data-spy\"],[\"Basic Information\",true,false,\"record.metadata.basicInformation\",\"Basic Information\"]],{\"statements\":[[0,\"\\n      \"],[1,[25,\"input/md-codelist\",null,[[\"value\",\"label\",\"create\",\"tooltip\",\"icon\",\"mdCodeName\",\"placeholder\",\"profilePath\",\"data-spy\",\"class\"],[[19,1,[\"metadataStatus\"]],\"Metadata Status\",true,true,false,\"progress\",\"Select the current status\",\"record.metadata.metadataStatus\",false,\"md-embedded\"]]],false],[0,\"\\n\\n\"],[4,\"layout/md-card\",null,[[\"profilePath\",\"data-spy\",\"shadow\",\"class\"],[\"record.metadata.metadataDate\",[20,[\"flase\"]],false,\"md-embedded\"]],{\"statements\":[[0,\"        \"],[1,[25,\"object/md-date-array\",null,[[\"value\",\"plain\",\"data-spy\"],[[19,1,[\"metadataDate\"]],true,false]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[25,\"object/md-party-array\",null,[[\"title\",\"data-spy\",\"collapsible\",\"collapsed\",\"required\",\"value\",\"profilePath\"],[\"Metadata Contact\",\"Metadata Contacts\",true,false,true,[19,1,[\"metadataContact\"]],\"record.metadata.metadataContact\"]]],false],[0,\"\\n\\n\"],[4,\"with\",[[20,[\"model\",\"json\",\"metadata\",\"metadataInfo\",\"metadataIdentifier\"]]],null,{\"statements\":[[4,\"layout/md-card\",null,[[\"title\",\"collapsible\",\"collapsed\",\"profilePath\",\"required\",\"btnText\",\"btnClass\",\"btnAction\",\"btnIcon\"],[\"Metadata Identifier\",true,false,\"record.metadata.metadataIdentifier\",false,\"Edit\",\"success\",[25,\"route-action\",[\"editIdentifier\"],null],\"pencil\"]],{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n        \"],[6,\"dl\"],[9,\"class\",\"dl-horizontal\"],[7],[0,\"\\n          \"],[1,[25,\"control/md-definition\",null,[[\"title\",\"text\"],[\"Identifier\",[19,2,[\"identifier\"]]]]],false],[0,\"\\n\"],[0,\"          \"],[1,[25,\"control/md-definition\",null,[[\"title\",\"text\"],[\"Namespace\",[19,2,[\"namespace\"]]]]],false],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[2]},null],[0,\"\\n    \"],[1,[25,\"object/md-citation/preview\",null,[[\"profilePath\",\"citation\",\"title\",\"muted\",\"editCitation\"],[\"record.metadata.parentMetadata\",[19,1,[\"parentMetadata\"]],\"Parent Metadata\",true,\"editParent\"]]],false],[0,\"\\n\\n    \"],[1,[25,\"object/md-repository-array\",null,[[\"value\",\"data-spy\"],[[20,[\"model\",\"json\",\"metadataRepository\"]],\"Metadata Repository\"]]],false],[0,\"\\n\\n    \"],[1,[25,\"object/md-online-resource-array\",null,[[\"model\",\"profilePath\",\"data-spy\"],[[19,1,[\"metadataOnlineResource\"]],\"record.metadata.onlineResource\",\"Online Resources\"]]],false],[0,\"\\n\\n\"],[4,\"layout/md-card\",null,[[\"profilePath\",\"title\",\"collapsible\",\"collapsed\",\"profilePath\"],[\"record.metadata.maintenance\",\"Metadata Maintenance\",true,true,\"record.metadata.maintenance\"]],{\"statements\":[[0,\"      \"],[1,[25,\"object/md-maintenance\",null,[[\"model\",\"profilePath\"],[[19,1,[\"metadataMaintenance\"]],\"record.metadata.maintenance\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"title\",\"shadow\",\"data-spy\",\"profilePath\",\"collapsible\",\"collapsed\"],[\"Default Metadata Locale\",true,\"Default Locale\",\"record.metadata.defaultLocale\",true,true]],{\"statements\":[[0,\"      \"],[1,[25,\"object/md-locale\",null,[[\"model\",\"modelPath\"],[[20,[\"model\"]],\"json.metadata.metadataInfo.defaultMetadataLocale\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[25,\"object/md-citation-array\",null,[[\"model\",\"profilePath\",\"data-spy\",\"editItem\",\"label\"],[[19,1,[\"alternateMetadataReference\"]],\"record.metadata.alternateMetadataReference\",\"Alternate Metadata\",[25,\"route-action\",[\"editAlternate\"],null],\"Alternate Metadata Reference\"]]],false],[0,\"\\n\\n    \"],[1,[18,\"outlet\"],false],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-scroll-spy-record-edit\",[25,\"component\",[\"control/md-scroll-spy\"],[[\"scrollInit\",\"setScrollTo\"],[[20,[\"scrollTo\"]],[25,\"route-action\",[\"setScrollTo\"],null]]]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/metadata/index/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/metadata/parent/identifier/route', ['exports', 'mdeditor/mixins/scroll-to'], function (exports, _scrollTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    get,
    isEmpty,
    isArray
  } = Ember;

  exports.default = Route.extend(_scrollTo.default, {
    model(params) {
      this.set('identifierId', params.identifier_id);

      return this.setupModel();
    },

    setupController: function setupController() {
      // Call _super for default behavior
      this._super(...arguments);

      this.controller.set('parentModel', this.modelFor('record.show.edit'));
      this.controllerFor('record.show.edit').setProperties({
        onCancel: this.setupModel
      });
    },

    setupModel() {
      let identifierId = get(this, 'identifierId');
      let model = this.modelFor('record.show.edit');
      let identifiers = model.get('json.metadata.metadataInfo.parentMetadata.identifier');
      let identifier = identifierId && isArray(identifiers) ? identifiers.get(identifierId) : undefined;

      //make sure the identifier exists
      if (isEmpty(identifier)) {
        Ember.get(this, 'flashMessages').warning('No identifier found! Re-directing to citation...');
        this.replaceWith('record.show.edit.metadata.parent');

        return;
      }

      return identifier;
    }
  });
});
define("mdeditor/pods/record/show/edit/metadata/parent/identifier/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Uy8Yl/XB", "block": "{\"symbols\":[],\"statements\":[[6,\"h4\"],[9,\"class\",\"col-xxl-11 col-xxxl-10 col-xxl-offset-1 section-header\"],[7],[0,\"\\n  Editing Identifier: \"],[1,[20,[\"model\",\"identifier\"]],false],[0,\"\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"parentModel\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[1,[25,\"object/md-identifier\",null,[[\"class\",\"model\",\"profilePath\",\"data-spy\"],[\"col-xxl-11 col-xxxl-10 col-xxl-offset-1\",[20,[\"model\"]],\"record.metadata.parentMetadata.identifier\",\"Identifier\"]]],false],[0,\"\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-subbar-extra\",[25,\"component\",[\"control/subbar-link\"],[[\"text\",\"icon\",\"route\"],[\"Back to Parent Metadata\",\"arrow-left\",\"record.show.edit.metadata.parent\"]]]]]],false],[0,\"\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-scroll-spy-record-edit\",[25,\"component\",[\"control/md-scroll-spy\"],[[\"scrollInit\",\"setScrollTo\"],[[20,[\"scrollTo\"]],[25,\"route-action\",[\"setScrollTo\"],null]]]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/metadata/parent/identifier/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/metadata/parent/index/route', ['exports', 'mdeditor/mixins/scroll-to'], function (exports, _scrollTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    isNone,
    get
  } = Ember;

  exports.default = Route.extend(_scrollTo.default, {
    afterModel(model) {
      this._super(...arguments);

      if (isNone(get(model, 'json.metadata.metadataInfo.parentMetadata'))) {
        this.transitionTo('record.show.edit.metadata', {
          queryParams: {
            scrollTo: 'parent-metadata'
          }
        });
      }

      return model;
    },

    actions: {
      editIdentifier(index) {
        this.transitionTo('record.show.edit.metadata.parent.identifier', index).then(function () {
          this.setScrollTo('identifier');
        }.bind(this));
      }
    }
  });
});
define("mdeditor/pods/record/show/edit/metadata/parent/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "389qOhVF", "block": "{\"symbols\":[\"citation\"],\"statements\":[[6,\"h4\"],[9,\"class\",\"col-xxl-11 col-xxxl-10 col-xxl-offset-1 section-header\"],[7],[0,\"Editing Parent Metadata Citation\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"model\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\"],[4,\"with\",[[20,[\"model\",\"json\",\"metadata\",\"metadataInfo\",\"parentMetadata\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n      \"],[1,[25,\"object/md-citation\",null,[[\"class\",\"model\",\"profilePath\",\"editIdentifier\"],[\"col-xxl-11 col-xxxl-10 col-xxl-offset-1\",[19,1,[]],\"record.metadata.parentMetadata\",[25,\"route-action\",[\"editIdentifier\"],null]]]],false],[0,\"\\n      \"],[1,[18,\"outlet\"],false],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-subbar-extra\",[25,\"component\",[\"control/subbar-link\"],[[\"text\",\"icon\",\"route\"],[\"Back to Metadata\",\"arrow-left\",\"record.show.edit.metadata\"]]]]]],false],[0,\"\\n\"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-scroll-spy-record-edit\",[25,\"component\",[\"control/md-scroll-spy\"],[[\"scrollInit\",\"setScrollTo\"],[[20,[\"scrollTo\"]],[25,\"route-action\",[\"setScrollTo\"],null]]]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/metadata/parent/index/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/metadata/parent/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("mdeditor/pods/record/show/edit/metadata/parent/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cv27m6W0", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"liquid-outlet\",null,[[\"class\"],[\"liquid-spy\"]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/metadata/parent/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/metadata/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("mdeditor/pods/record/show/edit/metadata/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bDbnau8i", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"liquid-outlet\",null,[[\"class\"],[\"liquid-spy\"]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/metadata/template.hbs" } });
});
define("mdeditor/pods/record/show/edit/nav-secondary/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "eQevqopG", "block": "{\"symbols\":[],\"statements\":[[4,\"layout/md-nav-secondary\",null,[[\"links\"],[[20,[\"model\"]]]],{\"statements\":[[0,\"  \"],[2,\"<li>\\n    <a href=\\\"./\\\"> Main</a>\\n  </li>\\n  <li>\\n    <a href=\\\"./\\\"> Keywords</a>\\n  </li>\\n  <li>\\n    <a href=\\\"./\\\"> Spatial</a>\\n  </li>\\n  <li>\\n    <a href=\\\"./\\\"> Quality</a>\\n  </li>\\n  <li>\\n    <a href=\\\"./\\\"> Distribution</a>\\n  </li>\\n  <li>\\n    <a href=\\\"./\\\"> Associated</a>\\n  </li>\\n  <li>\\n    <a href=\\\"./\\\"> Documents</a>\\n  </li>\\n  <li>\\n    <a href=\\\"./\\\"> Dictionaries</a>\\n  </li>\\n  <li>\\n    <a href=\\\"./\\\"> Coverage</a>\\n  </li>\\n  <li>\\n    <a href=\\\"./\\\"> Grid</a>\\n  </li>\"],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/nav-secondary/template.hbs" } });
});
define("mdeditor/pods/record/show/edit/nav/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "lallpmJR", "block": "{\"symbols\":[],\"statements\":[[6,\"li\"],[9,\"class\",\"divider-vertical\"],[7],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"li\"],[7],[0,\"\\n  \"],[1,[25,\"input/md-select-profile\",null,[[\"value\",\"updateProfile\"],[[20,[\"model\",\"profile\"]],\"updateProfile\"]]],false],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/nav/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/route', ['exports', 'mdeditor/mixins/hash-poll'], function (exports, _hashPoll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    inject,
    Route,
    get
  } = Ember;

  exports.default = Route.extend(_hashPoll.default, {
    breadCrumb: {
      title: 'Edit',
      linkable: false
    },

    /**
     * The profile service
     *
     * @return {Ember.Service} profile
     */
    profile: inject.service(),

    /**
     * The route activate hook, sets the profile.
     */
    afterModel(model) {
      this._super(...arguments);

      this.get('profile').set('active', model.get('profile'));
    },

    /**
     * [renderTemplate description]
     * @param  {[type]} controller [description]
     * @param  {[type]} model      [description]
     * @return {[type]}            [description]
     */
    renderTemplate(controller, model) {
      this.render('record.show.edit.nav', {
        into: 'record.nav'
      });
      this.render('nav-secondary', {
        into: 'application',
        outlet: 'nav-secondary'
      });
      this.render('record.show.edit', {
        into: 'record',
        model: model
      });
    },

    actions: {
      /**
       * Update the record profile
       *
       * @name   updateProfile
       * @param  {String} profile The new profile.
       */
      updateProfile(profile) {
        this.get('profile').set('active', profile);
        this.modelFor('record.show.edit').save();
      },

      saveRecord: function saveRecord() {
        let model = this.currentRouteModel();
        model.save().then(() => {
          get(this, 'flashMessages').success(`Saved Record: ${model.get('title')}`);
        });
      },

      // destroyRecord: function () {
      //   let model = this.currentRouteModel();
      //   model
      //     .destroyRecord()
      //     .then(() => {
      //       get(this, 'flashMessages')
      //         .success(`Deleted Record: ${model.get('title')}`);
      //       this.replaceWith('records');
      //     });
      // },

      cancelRecord: function cancelRecord() {
        let model = this.currentRouteModel();
        let message = `Cancelled changes to Record: ${model.get('title')}`;

        if (this.get('settings.data.autoSave')) {
          let json = model.get('jsonRevert');

          if (json) {
            model.set('json', JSON.parse(json));

            if (this.controller.onCancel) {
              this.controller.onCancel.call(this);
              this.controller.set('onCancel', null);
            }

            get(this, 'flashMessages').warning(message);
          }

          return;
        }

        model.reload().then(() => {
          if (this.controller.onCancel) {
            this.controller.onCancel.call(this);
            this.controller.set('onCancel', null);
          }
          get(this, 'flashMessages').warning(message);
        });
      },

      // copyRecord: function () {
      //
      //   get(this, 'flashMessages')
      //     .success(
      //       `Copied Record: ${this.currentRouteModel().get('title')}`);
      //   this.transitionTo('record.new.id', copy(this.currentRouteModel()));
      // },
      getContext() {
        return this;
      }
    }
  });
});
define('mdeditor/pods/record/show/edit/spatial/index/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("mdeditor/pods/record/show/edit/spatial/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OCvlDtG6", "block": "{\"symbols\":[\"model\"],\"statements\":[[6,\"h4\"],[9,\"class\",\"section-header\"],[7],[0,\"\\n  Editing Spatial Information\\n  \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"model\"]]]]],false],[0,\"\\n\"],[8],[0,\"\\n\"],[4,\"with\",[[20,[\"model\",\"json\",\"metadata\",\"resourceInfo\"]]],null,{\"statements\":[[0,\"  \"],[1,[25,\"object/md-spatial-info\",null,[[\"model\",\"profilePath\"],[[19,1,[]],\"record.spatial\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/spatial/index/template.hbs" } });
});
define('mdeditor/pods/record/show/edit/spatial/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("mdeditor/pods/record/show/edit/spatial/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "TV1SNQqY", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-xxl-11 col-xxxl-10 col-xxl-offset-1\"],[7],[0,\"\\n    \"],[1,[25,\"outlet\",null,[[\"class\"],[\"\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/spatial/template.hbs" } });
});
define("mdeditor/pods/record/show/edit/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bG+5l5j4", "block": "{\"symbols\":[\"spy\"],\"statements\":[[6,\"div\"],[9,\"class\",\"row md-section-secondary\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"md-record-content col-sm-10\"],[7],[0,\"\\n    \"],[1,[18,\"outlet\"],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-2\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"md-control-sidebar hidden-print\"],[7],[0,\"\\n      \"],[1,[25,\"control/md-crud-buttons\",null,[[\"model\",\"doSave\",\"doCancel\",\"doDelete\",\"doCopy\"],[[20,[\"model\"]],\"saveRecord\",\"cancelRecord\",\"destroyRecord\",\"copyRecord\"]]],false],[0,\"\\n      \"],[1,[25,\"component\",[[20,[\"subbar\"]]],[[\"context\"],[[25,\"route-action\",[\"getContext\"],null]]]],false],[0,\"\\n      \"],[6,\"hr\"],[7],[8],[0,\"\\n      \"],[1,[25,\"from-elsewhere\",null,[[\"name\"],[\"md-subbar-extra\"]]],false],[0,\"\\n\\n\"],[4,\"from-elsewhere\",null,[[\"name\"],[\"md-scroll-spy-record-edit\"]],{\"statements\":[[0,\"          \"],[1,[25,\"component\",[[19,1,[]]],[[\"offset\"],[134]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/edit/template.hbs" } });
});
define('mdeditor/pods/record/show/index/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const { Route } = Ember;

  /* global L */

  exports.default = Route.extend({
    actions: {
      linkTo(route) {
        this.transitionTo(route);
      },
      setupMap(features, m) {
        let map = m.target;
        let bounds = L.geoJson(features).getBounds();

        map.fitBounds(bounds);
      }
    }
  });
});
define("mdeditor/pods/record/show/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "HU4Y/9lg", "block": "{\"symbols\":[\"resource\",\"extent\",\"index\",\"l\",\"type\"],\"statements\":[[4,\"with\",[[20,[\"model\",\"json\",\"metadata\",\"resourceInfo\"]]],null,{\"statements\":[[6,\"div\"],[9,\"class\",\"row md-no-spotlight\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-sm-9 col-md-offset-1\"],[7],[0,\"\\n        \"],[6,\"h3\"],[7],[0,\"\\n        \"],[1,[25,\"fa-icon\",[[20,[\"model\",\"icon\"]]],[[\"class\"],[\"text-muted\"]]],false],[0,\"\\n        Viewing Record: \"],[1,[20,[\"model\",\"title\"]],false],[0,\"\\n        \"],[1,[25,\"control/md-status\",null,[[\"model\"],[[20,[\"model\"]]]]],false],[0,\"\\n        \"],[8],[0,\"\\n\\n\"],[4,\"layout/md-card\",null,[[\"shadow\",\"muted\",\"title\",\"bodyIsRow\",\"collapsible\",\"btnText\",\"btnClass\",\"btnAction\",\"btnIcon\"],[false,true,\"Main\",false,true,\"Edit\",\"success\",[25,\"route-action\",[\"linkTo\",\"record.show.edit.main\"],null],\"pencil\"]],{\"statements\":[[0,\"          \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n            \"],[6,\"dl\"],[9,\"class\",\"dl-horizontal col-xxl-8\"],[7],[0,\"\\n                \"],[1,[25,\"control/md-definition\",null,[[\"title\",\"text\"],[\"Record Id\",[20,[\"model\",\"recordId\"]]]]],false],[0,\"\\n                \"],[1,[25,\"control/md-definition\",null,[[\"title\",\"text\"],[\"Record Title\",[20,[\"model\",\"title\"]]]]],false],[0,\"\\n                \"],[1,[25,\"control/md-definition\",null,[[\"title\",\"text\"],[\"Status\",[25,\"if\",[[19,1,[\"status\"]],[25,\"join\",[\", \",[19,1,[\"status\"]]],null]],null]]]],false],[0,\"\\n                \"],[1,[25,\"control/md-definition\",null,[[\"title\",\"text\"],[\"Contact Instructions\",[20,[\"model\",\"json\",\"contactInstructions\"]]]]],false],[0,\"\\n\\n            \"],[8],[0,\"\\n            \"],[6,\"dl\"],[9,\"class\",\"dl-horizontal col-xxl-4\"],[7],[0,\"\\n\"],[4,\"control/md-definition\",null,[[\"title\"],[\"Resource Type(s)\"]],{\"statements\":[[4,\"each\",[[19,1,[\"resourceType\"]]],null,{\"statements\":[[0,\"                        \"],[1,[19,5,[\"type\"]],false],[0,\":\\n\"],[4,\"if\",[[19,5,[\"name\"]]],null,{\"statements\":[[0,\"                            \"],[1,[19,5,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                            \"],[6,\"em\"],[7],[0,\"Not named\"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                        \"],[6,\"br\"],[7],[8],[0,\"\\n\"]],\"parameters\":[5]},{\"statements\":[[0,\"                            \"],[6,\"em\"],[9,\"class\",\"text-muted\"],[7],[0,\"No types assigned!\"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-xs-12\"],[7],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"shadow\",\"muted\",\"plain\",\"shadow\"],[false,true,true,false]],{\"statements\":[[0,\"                \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n                  \"],[6,\"div\"],[9,\"class\",\"text-info col-xs-6 col-sm-3\"],[7],[0,\"Default Resource Locale\"],[8],[0,\"\\n                  \"],[6,\"div\"],[9,\"class\",\"col-xs-6 col-sm-3\"],[7],[0,\"\\n                    \"],[6,\"label\"],[9,\"class\",\"text-nowrap\"],[7],[0,\"Character Set:\"],[8],[0,\"\\n                    \"],[6,\"span\"],[9,\"class\",\"text-nowrap\"],[7],[1,[19,1,[\"defaultResourceLocale\",\"characterSet\"]],false],[8],[0,\"\\n                  \"],[8],[0,\"\\n                  \"],[6,\"div\"],[9,\"class\",\"col-xs-6 col-sm-3\"],[7],[0,\"\\n                    \"],[6,\"label\"],[7],[0,\"Country:\"],[8],[0,\"\\n                    \"],[6,\"span\"],[9,\"class\",\"text-nowrap\"],[7],[1,[19,1,[\"defaultResourceLocale\",\"country\"]],false],[8],[0,\"\\n                  \"],[8],[0,\"\\n                  \"],[6,\"div\"],[9,\"class\",\"col-xs-6 col-sm-3\"],[7],[0,\"\\n                    \"],[6,\"label\"],[7],[0,\"Language:\"],[8],[0,\"\\n                    \"],[6,\"span\"],[7],[1,[19,1,[\"defaultResourceLocale\",\"language\"]],false],[8],[0,\"\\n                  \"],[8],[0,\"\\n                \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n\\n\"],[4,\"layout/md-card\",null,[[\"shadow\",\"muted\",\"title\",\"collapsible\",\"scroll\",\"maximizable\",\"class\"],[false,true,\"Abstract\",true,true,true,\"md-embedded\"]],{\"statements\":[[0,\"              \"],[1,[25,\"md-markdown\",[[19,1,[\"abstract\"]],\"Abstract not provided!\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"shadow\",\"muted\",\"title\",\"collapsible\",\"scroll\",\"class\"],[false,true,\"Short Abstract\",true,false,\"md-embedded\"]],{\"statements\":[[0,\"              \"],[1,[25,\"md-markdown\",[[19,1,[\"shortAbstract\"]],\"Short Abstract not provided!\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"shadow\",\"muted\",\"title\",\"bodyIsRow\",\"collapsible\",\"btnText\",\"btnClass\",\"btnAction\",\"btnIcon\"],[false,true,\"Geographic Extent\",false,true,\"Edit\",\"success\",[25,\"route-action\",[\"linkTo\",\"record.show.edit.extent\"],null],\"pencil\"]],{\"statements\":[[0,\"\\n        \"],[6,\"section\"],[7],[0,\"\\n\"],[4,\"each\",[[19,1,[\"extent\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"row md-extent-container\"],[7],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"col-sm-12\"],[7],[0,\"\\n                \"],[6,\"h4\"],[9,\"class\",\"text-info\"],[7],[0,\"\\n                  Geographic Extent #\"],[1,[19,3,[]],false],[0,\"\\n                \"],[8],[0,\"\\n              \"],[8],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"col-sm-6\"],[7],[0,\"\\n                \"],[6,\"label\"],[9,\"class\",\"\"],[7],[0,\"\\n                  Description\\n                \"],[8],[0,\"\\n                \"],[6,\"p\"],[7],[0,\"\\n                  \"],[1,[25,\"get-property\",[[19,2,[]],\"description\"],null],false],[0,\"\\n                \"],[8],[0,\"\\n              \"],[8],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"col-sm-6 md-extent-map\"],[7],[0,\"\\n\"],[4,\"if\",[[19,2,[\"geographicExtent\",\"0\",\"geographicElement\",\"length\"]]],null,{\"statements\":[[4,\"leaflet-map\",null,[[\"lat\",\"lng\",\"zoom\",\"maxZoom\",\"onLoad\"],[0,0,2,18,[25,\"route-action\",[\"setupMap\",[19,2,[\"geographicExtent\",\"0\",\"geographicElement\"]]],null]]],{\"statements\":[[4,\"layer-group\",null,[[\"name\",\"baselayer\",\"default\"],[\"Terrain\",true,true]],{\"statements\":[[0,\"                      \"],[1,[25,\"tile-layer\",null,[[\"url\",\"attribution\"],[\"http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.png\",[20,[\"mapAttribution\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"feature-group\",null,[[\"name\",\"default\"],[\"Features\",true]],{\"statements\":[[4,\"each\",[[19,2,[\"geographicExtent\",\"0\",\"geographicElement\"]]],null,{\"statements\":[[0,\"                        \"],[1,[25,\"geojson-layer\",null,[[\"geoJSON\"],[[19,4,[]]]]],false],[0,\"\\n\"]],\"parameters\":[4]},null]],\"parameters\":[]},null],[0,\"\\n                    \"],[1,[18,\"layer-control\"],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"                  \"],[6,\"div\"],[9,\"class\",\"alert alert-info\"],[7],[0,\"\\n                    No Features to display.\\n                  \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[2,3]},{\"statements\":[[0,\"            \"],[6,\"h3\"],[9,\"class\",\"alert alert-info\"],[7],[0,\"No geographic extents found.\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[8],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n        \"],[1,[18,\"outlet\"],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-sm-2\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"md-control-sidebar hidden-print\"],[7],[0,\"\\n\"],[4,\"control/md-crud-buttons\",null,[[\"model\",\"doDelete\",\"doCopy\"],[[20,[\"model\"]],\"destroyRecord\",\"copyRecord\"]],{\"statements\":[[4,\"link-to\",[\"record.show.edit\",[20,[\"model\",\"id\"]]],[[\"class\"],[\"btn btn-lg btn-success\"]],{\"statements\":[[0,\"            \"],[1,[25,\"fa-icon\",[\"pencil\"],null],false],[0,\" Edit\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[6,\"hr\"],[7],[8],[0,\"\\n\"],[4,\"link-to\",[\"records\"],[[\"class\"],[\"btn btn-lg btn-primary btn-block\"]],{\"statements\":[[0,\"        \"],[1,[25,\"fa-icon\",[\"list\"],null],false],[0,\" Show List\"]],\"parameters\":[]},null],[0,\"\\n        \"],[1,[18,\"control/md-scroll-spy\"],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/index/template.hbs" } });
});
define("mdeditor/pods/record/show/nav/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "pcZmAY1Q", "block": "{\"symbols\":[],\"statements\":[[6,\"li\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"record.show.translate\"],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[9,\"class\",\"fa fa-retweet\"],[7],[8],[0,\"\\n    \"],[6,\"span\"],[9,\"class\",\"md-nav-text\"],[7],[0,\"Translate\"],[8],[0,\" \"],[1,[25,\"tooltip-on-element\",null,[[\"text\",\"side\",\"class\"],[\"Translate\",\"bottom\",\"md-nav-tip\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\"],[6,\"li\"],[7],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n    \"],[6,\"form\"],[9,\"class\",\"col-xxl-11 col-xxxl-10 col-xxl-offset-1\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"publish\"],null,{\"statements\":[[0,\"        \"],[6,\"span\"],[9,\"class\",\"fa fa-share-square-o\"],[7],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"md-nav-text\"],[7],[0,\"Publish\"],[8],[0,\" \"],[1,[25,\"tooltip-on-element\",null,[[\"text\",\"side\",\"class\"],[\"Publish\",\"bottom\",\"md-nav-tip\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/nav/template.hbs" } });
});
define('mdeditor/pods/record/show/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    get,
    copy
  } = Ember;

  exports.default = Ember.Route.extend({
    breadCrumb: {},
    afterModel(model) {
      const name = model.get('title');

      const crumb = {
        title: name
      };

      this.set('breadCrumb', crumb);
    },
    model(params) {
      return this.store.peekRecord('record', params.record_id);
    },
    renderTemplate() {
      this.render('record.nav', {
        into: 'application',
        outlet: 'nav'
      });
      this.render('record.show', {
        into: 'record'
      });
    },
    actions: {
      destroyRecord: function destroyRecord() {
        let model = this.currentRouteModel();
        model.destroyRecord().then(() => {
          get(this, 'flashMessages').success(`Deleted Record: ${model.get('title')}`);
          this.replaceWith('records');
        });
      },
      copyRecord: function copyRecord() {

        get(this, 'flashMessages').success(`Copied Record: ${this.currentRouteModel().get('title')}`);
        this.transitionTo('record.new.id', copy(this.currentRouteModel()));
      }
    }
  });
});
define("mdeditor/pods/record/show/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "HpcU4d1a", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/template.hbs" } });
});
define('mdeditor/pods/record/show/translate/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  const {
    Route
  } = Ember;

  exports.default = Route.extend({});
});
define("mdeditor/pods/record/show/translate/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "BIqSDNoM", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-xxl-11 col-xxxl-10 col-xxl-offset-1\"],[7],[0,\"\\n      \"],[6,\"h3\"],[7],[0,\"Translate Record\"],[8],[0,\"\\n        \"],[1,[25,\"md-translate\",null,[[\"model\",\"store\"],[[20,[\"model\"]],[20,[\"store\"]]]]],false],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/show/translate/template.hbs" } });
});
define("mdeditor/pods/record/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+YwTa0Ba", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/record/template.hbs" } });
});
define("mdeditor/pods/records/nav/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sW0U3UGf", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/records/nav/template.hbs" } });
});
define('mdeditor/pods/records/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    inject: {
      service
    }
  } = Ember;

  exports.default = Route.extend({
    slider: service(),
    model() {
      //return this.store.peekAll('contact');
      return this.modelFor('application').findBy('modelName', 'record');
    },

    columns: [{
      propertyName: 'title',
      title: 'Title'
    }, {
      propertyName: 'defaultType',
      title: 'Resource Type',
      filterWithSelect: true
    }, {
      propertyName: 'recordId',
      title: 'ID'
    }],

    renderTemplate() {
      this.render('records.nav', {
        into: 'application',
        outlet: 'nav'
      });
      this.render('records', {
        into: 'application'
      });
    },

    actions: {
      getColumns() {
        return this.get('columns');
      },

      showSlider(rec, evt) {
        let slider = this.get('slider');

        evt.stopPropagation();
        this.controller.set('errorTarget', rec);
        slider.set('fromName', 'md-slider-error');
        slider.toggleSlider(true);

        return false;
      }
    }

  });
});
define("mdeditor/pods/records/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "UPA1i4X/", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[9,\"class\",\"text-info\"],[7],[1,[25,\"fa-icon\",[\"file-text\"],null],false],[0,\" Metadata Records\"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"model\",\"length\"]]],null,{\"statements\":[[4,\"layout/md-card\",null,[[\"collapsible\",\"collapsed\",\"shadow\"],[true,false,true]],{\"statements\":[[0,\"    \"],[1,[25,\"control/md-record-table\",null,[[\"data\",\"dataColumns\",\"allActions\",\"selectProperty\"],[[20,[\"model\"]],[25,\"compute\",[[25,\"route-action\",[\"getColumns\"],null],[20,[\"section\",\"meta\",\"type\"]]],null],true,\"_selectedFromList\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"alert alert-info\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"No Metadata Records found.\\n\"],[4,\"link-to\",[\"record.new\"],[[\"class\"],[\"btn btn-success btn-lg\"]],{\"statements\":[[0,\"        \"],[1,[25,\"fa-icon\",[\"plus\"],null],false],[0,\" Create a Metadata Record\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"errorTarget\"]]],null,{\"statements\":[[0,\"  \"],[1,[25,\"to-elsewhere\",null,[[\"named\",\"send\"],[\"md-slider-error\",[25,\"hash\",null,[[\"title\",\"body\"],[[25,\"concat\",[\"Viewing errors for: \",[20,[\"errorTarget\",\"title\"]]],null],[25,\"component\",[\"control/md-errors\"],[[\"errors\"],[[20,[\"errorTarget\",\"hasSchemaErrors\"]]]]]]]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/records/template.hbs" } });
});
define('mdeditor/pods/save/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("mdeditor/pods/save/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "O6ovKlVM", "block": "{\"symbols\":[],\"statements\":[[0,\"Save the Record(s)\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/save/template.hbs" } });
});
define('mdeditor/pods/settings/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Route,
    inject: {
      service
    }
  } = Ember;

  exports.default = Route.extend({
    settings: service(),
    publish: service(),
    model() {
      // this.get('store').findAll('settings').then(function(settings) {
      //   return settings.get("firstObject");
      // });
      return this.get('settings').get('data');
    },
    actions: {
      clearLocalStorage() {
        window.localStorage.clear();
        this.transitionTo('application');
        window.location.reload();
      },
      save() {
        this.currentRouteModel().save();
      },

      catalogs() {
        return this.get('publish.catalogs');
      }
    }
  });
});
define("mdeditor/pods/settings/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Wk1WFqhz", "block": "{\"symbols\":[\"catalog\",\"meta\"],\"statements\":[[6,\"div\"],[9,\"class\",\"page-header\"],[7],[0,\"\\n  \"],[6,\"h3\"],[7],[0,\"Settings\\n    \"],[6,\"small\"],[9,\"class\",\"small\"],[7],[0,\"mdEditor Version: \"],[1,[18,\"control/md-repo-link\"],false],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[4,\"layout/md-card\",null,[[\"title\"],[\"General Settings\"]],{\"statements\":[[6,\"form\"],[9,\"class\",\"form-horizontal\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n      \"],[6,\"label\"],[9,\"class\",\"col-sm-2 col-lg-1 control-label\"],[7],[0,\"Auto Save\"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-sm-1\"],[7],[0,\"\\n        \"],[1,[25,\"x-toggle\",null,[[\"value\",\"onToggle\",\"showLabels\",\"onLabel\",\"offLabel\",\"size\",\"theme\"],[[20,[\"model\",\"autoSave\"]],[25,\"mut\",[[20,[\"model\",\"autoSave\"]]],null],true,\"On::true\",\"Off::false\",\"medium\",\"default\"]]],false],[0,\"\\n      \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n      \"],[6,\"label\"],[9,\"class\",\"col-sm-2 col-lg-1 control-label\"],[7],[0,\"Clear All Records\"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-sm-1\"],[7],[0,\"\\n\"],[4,\"control/md-button-modal\",null,[[\"class\",\"type\",\"message\",\"onConfirm\"],[\"btn btn-lg btn-danger\",\"button\",\"<h1>Are you sure?</h1> Clicking OK will delete ALL  records in\\n            your browser cache. Have you made a backup?\",[25,\"route-action\",[\"clearLocalStorage\"],null]]],{\"statements\":[[0,\"            \"],[6,\"span\"],[9,\"class\",\"fa fa-times\"],[7],[8],[0,\" Clear Storage Cache\\n\"]],\"parameters\":[]},null],[0,\"      \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"title\",\"shadow\"],[\"Defaults\",true]],{\"statements\":[[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n      \"],[1,[25,\"input/md-codelist\",null,[[\"value\",\"create\",\"tooltip\",\"icon\",\"disabled\",\"mdCodeName\",\"label\",\"showValidations\",\"placeholder\"],[[20,[\"model\",\"language\"]],true,true,false,[20,[\"disabled\"]],\"language\",\"Language\",true,\"Select or enter a language code.\"]]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n      \"],[1,[25,\"input/md-codelist\",null,[[\"value\",\"create\",\"tooltip\",\"icon\",\"disabled\",\"mdCodeName\",\"label\",\"showValidations\",\"placeholder\"],[[20,[\"model\",\"characterSet\"]],false,true,false,[20,[\"disabled\"]],\"characterSet\",\"Character Set\",true,\"Select character set.\"]]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n      \"],[1,[25,\"input/md-codelist\",null,[[\"value\",\"create\",\"tooltip\",\"icon\",\"disabled\",\"mdCodeName\",\"label\",\"placeholder\"],[[20,[\"model\",\"country\"]],false,true,false,[20,[\"disabled\"]],\"countries\",\"Country\",\"Select country code.\"]]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"hr\"],[7],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-8\"],[7],[0,\"\\n      \"],[1,[25,\"input/md-input\",null,[[\"label\",\"type\",\"value\",\"placeholder\"],[\"Import URL\",\"text\",[20,[\"model\",\"importUriBase\"]],\"Text string used as the default URL for importing.\"]]],false],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"clearfix\"],[7],[8],[0,\"\\n\"],[6,\"hr\"],[7],[8],[0,\"\\n\"],[4,\"object/md-array-table\",null,[[\"columns\",\"value\",\"plain\",\"title\",\"templateClass\",\"onChange\",\"data-spy\"],[\"Repository, Collection Title\",[20,[\"model\",\"repositoryDefaults\"]],true,\"Metadata Repository\",[20,[\"settings\",\"repositoryTemplate\"]],[25,\"route-action\",[\"save\"],null],\"Metadata Repository\"]],{\"statements\":[[0,\"    \"],[6,\"td\"],[7],[0,\"\\n      \"],[1,[25,\"input/md-codelist\",null,[[\"value\",\"create\",\"tooltip\",\"icon\",\"mdCodeName\",\"closeOnSelect\",\"placeholder\",\"change\"],[[19,2,[\"item\",\"repository\"]],true,true,false,\"metadataRepository\",true,\"Select or enter a repository.\",[25,\"route-action\",[\"save\"],null]]]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"td\"],[7],[0,\"\\n      \"],[1,[25,\"input/md-input\",null,[[\"type\",\"value\",\"placeholder\",\"change\"],[\"text\",[19,2,[\"item\",\"title\"]],\"Text string used to identify a set of resources in the repository.\",[25,\"route-action\",[\"save\"],null]]]],false],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"title\"],[\"Publishing Settings\"]],{\"statements\":[[4,\"each\",[[25,\"compute\",[[25,\"route-action\",[\"catalogs\"],null]],null]],null,{\"statements\":[[4,\"layout/md-card\",null,[[\"title\",\"collapsible\",\"collapsed\",\"shadow\"],[[19,1,[\"name\"]],true,true,false]],{\"statements\":[[0,\"    \"],[1,[25,\"component\",[[19,1,[\"settingsComponent\"]]],[[\"model\"],[[20,[\"model\",\"publishOptions\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"parameters\":[]},null],[0,\" \"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/settings/template.hbs" } });
});
define('mdeditor/pods/translate/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("mdeditor/pods/translate/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ZtceQO7r", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\\n\"],[6,\"style\"],[9,\"media\",\"screen\"],[7],[0,\"\\n    .construction {\\n        width: 50vh;\\n        min-width:240px;\\n        font-size:5vh;\\n        border: 2vh solid #333333;\\n        margin: 10vh auto;\\n        padding: 3vh;\\n        border-radius: 5vh;\\n    }\\n\"],[8],[0,\"\\n\"],[4,\"layout/md-card\",null,[[\"class\",\"shadow\"],[\"construction card-inverse card-warning\",false]],{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"text-center\"],[7],[0,\"\\n        \"],[6,\"div\"],[7],[0,\"\\n            \"],[1,[25,\"fa-icon\",[\"exclamation-triangle\"],[[\"size\"],[2]]],false],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[7],[0,\"\\n            \"],[6,\"b\"],[7],[0,\"Page Under \"],[6,\"br\"],[7],[8],[0,\"Construction\"],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/pods/translate/template.hbs" } });
});
define('mdeditor/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('mdeditor/router', ['exports', 'mdeditor/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('dashboard');
    this.route('export');
    this.route('import');
    this.route('translate');
    //this.route('publish', function() {});
    this.route('help');
    this.route('settings');

    //records
    this.route('records');
    //record
    this.route('record', function () {
      this.route('new', function () {
        this.route('id', {
          path: '/:record_id'
        });
      });
      this.route('show', {
        path: ':record_id'
      }, function () {
        this.route('edit', function () {
          this.route('metadata', function () {
            this.route('identifier');
            this.route('parent', function () {
              this.route('identifier', {
                path: 'identifier/:identifier_id'
              });
            });

            this.route('alternate', {
              path: 'alternate/:citation_id'
            }, function () {
              // this.route('index', {
              //   path: 'alternate/:citation_id'
              // });
              this.route('identifier', {
                path: 'identifier/:identifier_id'
              });
            });
          });
          this.route('keywords', function () {
            this.route('thesaurus', {
              path: 'thesaurus/:thesaurus_id'
            });
          });
          this.route('extent', function () {
            this.route('spatial', {
              path: 'spatial/:extent_id'
            });
          });
          this.route('lineage', function () {
            this.route('lineageobject', {
              path: ':lineage_id'
            }, function () {
              this.route('citation', {
                path: 'citation/:citation_id'
              }, function () {
                this.route('identifier', {
                  path: 'identifier/:identifier_id'
                });
              });
              this.route('step', {
                path: 'step/:step_id'
              }, function () {
                this.route('citation', {
                  path: 'citation/:citation_id'
                });
              });
            });
          });
          this.route('distribution', function () {
            this.route('distributor', {
              path: ':distribution_id/distributor'
            }, function () {});
          });
          this.route('associated', function () {
            this.route('resource', {
              path: ':resource_id'
            }, function () {});
          });
          this.route('documents', function () {
            this.route('citation', {
              path: 'documents/:citation_id'
            }, function () {});
          });
          this.route('coverages');
          this.route('grid');
          this.route('main', function () {
            this.route('citation', function () {
              this.route('identifier', {
                path: 'identifier/:identifier_id'
              });
            });
          });
          this.route('funding', function () {
            this.route('allocation', {
              path: ':allocation_id'
            });
          });
          this.route('dictionary');
          this.route('spatial', function () {});
          this.route('constraint', function () {});
        });
        this.route('translate');
      });
    });
    //contacts
    this.route('contacts');
    //contact
    this.route('contact', function () {
      this.route('new', function () {
        this.route('id', {
          path: '/:contact_id'
        });
      });

      this.route('show', {
        path: ':contact_id'
      }, function () {
        this.route('edit');
      });
    });
    //dictionary
    this.route('dictionaries');
    //dictionary
    this.route('dictionary', function () {
      this.route('new', function () {
        this.route('id', {
          path: '/:dictionary_id'
        });
      });
      this.route('show', {
        path: ':dictionary_id'
      }, function () {
        this.route('edit', function () {
          this.route('domains');
          this.route('entities');
          this.route('citation', function () {
            this.route('identifier', {
              path: 'identifier/:identifier_id'
            });
          });
        });
      });
    });

    this.route('not-found', {
      path: '/*path'
    });
    this.route('error');
  });

  exports.default = Router;
});
define('mdeditor/routes/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    $,
    A,
    Route,
    Object: EmberObject,
    guidFor,
    RSVP,
    Logger,
    inject: {
      service
    }
  } = Ember;

  exports.default = Route.extend({
    init() {
      this._super(...arguments);

      $(window).bind('beforeunload', evt => {
        let dirty = this.currentRouteModel().filter(function (itm) {
          return itm.filterBy('hasDirtyHash').length;
        }).length;

        let message = 'Are you sure you want to leave unsaved work?';

        evt.returnValue = dirty ? message : undefined;

        return evt.returnValue;
      });
    },

    spotlight: service(),
    slider: service(),

    /**
     * Models for sidebar navigation
     *
     * @return {Ember.RSVP.hash}
     */
    model() {
      let promises = [this.store.findAll('record', {
        reload: true
      }), this.store.findAll('contact', {
        reload: true
      }), this.store.findAll('dictionary', {
        reload: true
      })];

      let meta = A([EmberObject.create({
        type: 'record',
        list: 'records',
        title: 'Metadata Records',
        icon: 'file-o'
      }), EmberObject.create({
        type: 'contact',
        list: 'contacts',
        title: 'Contacts',
        icon: 'users'
      }), EmberObject.create({
        type: 'dictionary',
        list: 'dictionaries',
        title: 'Dictionaries',
        icon: 'book'
      })]);

      let idx = 0;

      let mapFn = function mapFn(item) {

        meta[idx].set('listId', guidFor(item));
        item.set('meta', meta[idx]);
        idx = ++idx;

        return item;
      };

      return RSVP.map(promises, mapFn);
    },

    setupController(controller, model) {
      // Call _super for default behavior
      this._super(controller, model);
      // Implement your custom setup after
      controller.set('spotlight', this.get('spotlight'));
      controller.set('slider', this.get('slider'));
    },

    /**
     * The current model for the route
     * @method currentRouteModel
     * @return {Object}
     */

    actions: {
      error(error) {
        Logger.error(error);

        if (error.status === 404) {
          return this.transitionTo('not-found');
        }

        return this.replaceWith('error').then(function (route) {
          route.controller.set('lastError', error);
        });
      }
    }
  });
});
define('mdeditor/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    /** Redirect to dashboard route */
    redirect() {
      this.transitionTo('dashboard');
    }
  });
});
define('mdeditor/routes/publish/sciencebase', ['exports', 'mdeditor-sciencebase/routes/publish/sciencebase'], function (exports, _sciencebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sciencebase.default;
    }
  });
});
define('mdeditor/serializers/application', ['exports', 'ember-local-storage/serializers/serializer'], function (exports, _serializer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _serializer.default;
    }
  });
});
define('mdeditor/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('mdeditor/services/cleaner', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  const {
    typeOf,
    isArray,
    isBlank,
    Service,
    assign
  } = Ember;

  exports.default = Service.extend({
    clean(obj, options) {
      const opt = assign({
        target: {},
        preserveArrays: true,
        //preserveObjects: true,
        preserveRootOnly: true
      }, options);

      if (isBlank(obj)) {
        if (isArray(obj) && opt.preserveArrays) {
          return [];
        }
        return;
      }

      if (/string|number|boolean/.test(typeof obj)) {
        return obj;
      }

      let acc = opt.target;

      return Object.keys(obj).reduce((result, key) => {
        //reject private property
        if (key.match(/^_/)) {
          return result;
        }

        if (isArray(obj[key])) {
          if (opt.preserveArrays === false && obj[key].length === 0) {
            return result;
          }
          let resultArray = [];

          obj[key].forEach(itm => {
            let type = isArray(itm) ? [] : typeof itm === 'object' ? {} : null;
            let cleanItem = this.clean(itm, {
              target: type,
              preserveArrays: opt.preserveRootOnly ? false : opt.preserveArrays
            });
            if (isBlank(cleanItem) || typeof cleanItem === 'object' && Object.keys(cleanItem).length === 0) {
              return;
            }

            //console.info(cleanItem);
            resultArray.push(cleanItem);
            //resultArray[idx] = cleanItem;
          });

          if (opt.preserveArrays === false && resultArray.length < 1) {
            return result;
          }

          result[key] = resultArray;

          return result;
        }

        if (isBlank(obj[key])) {
          //if(obj[key] === undefined) {
          return result;
        }

        if (typeOf(obj[key]) === 'object' || typeOf(obj[key]) === 'instance') {
          let objOpt = assign(opt, {
            preserveArrays: !opt.preserveRootOnly,
            target: {}
          });
          const res = this.clean(obj[key], objOpt);

          if (Object.keys(res).length > 0) {
            result[key] = res;
          }
        } else if (obj[key] !== '') {
          result[key] = obj[key];
        }

        return result;
      }, acc);
    }
  });
});
define('mdeditor/services/codelist', ['exports', 'npm:mdcodes/resources/js/mdcodes.js', 'mdeditor/services/profile'], function (exports, _mdcodes, _profile) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    get,
    Service
  } = Ember;
  /**
   * Codelist Service
   *
   * This service provides controlled value lists for use in the editor. The
   * service may be customized by modifing the object passed to
   * Ember.Service.extend. The existing property names should be maintained.
   *
   * @module
   */

  const profile = _profile.default.create();

  //create a new object
  const codelist = {};

  //remap codelist names to be more generic
  Object.keys(_mdcodes.default).forEach(function (key) {
    const list = _mdcodes.default[key];
    const name = key.replace(/^iso_|adiwg_/, '');

    codelist[name] = list;
    //remove deprecated codes
    codelist[name]['codelist'] = list.codelist.rejectBy('deprecated');
  });

  let recordProfiles = Object.keys(profile.profiles).without('dictionary');

  codelist.profile = {
    codelist: recordProfiles.map(itm => {
      return {
        code: itm,
        codeName: itm,
        description: get(profile, 'profiles.' + itm + '.description')
      };
    })
  };

  exports.default = Service.extend(codelist);
});
define('mdeditor/services/contacts', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Service,
    inject,
    A,
    computed
  } = Ember;

  exports.default = Service.extend({
    init() {
      this._super(...arguments);

      let store = this.get('store');

      this.set('contacts', store.peekAll('contact'));
    },

    store: inject.service(),

    contacts: A(),

    organizations: computed('contacts.[]', function () {
      let orgs = this.get('contacts').filterBy('json.isOrganization');

      return orgs;
    }),

    individuals: computed('contacts.[]', function () {
      let ind = this.get('contacts').rejectBy('json.isOrganization');

      return ind;
    }),

    organizationsCodes: computed('contactsCodes.[]', function () {
      let orgs = this.get('contactsCodes').filterBy('icon', 'users');

      return orgs;
    }),

    individualsCodes: computed('contactsCodes.[]', function () {
      let ind = this.get('contactsCodes').rejectBy('icon', 'users');

      return ind;
    }),

    /**
     * mapped is a re-mapped array of code objects.
     *
     * @property mapped
     * @type {Array}
     * @category computed
     * @requires mdCodeName
     */
    contactsCodes: Ember.computed('contacts.@each.name', function () {
      //let codeId = this.get('valuePath');
      //let codeName = this.get('namePath');
      //let tooltip = this.get('tooltipPath');
      let codelist = [];
      let icons = this.get('icons');
      let defaultIcon = this.get('defaultIcon');
      let mdCodelist = this.get('contacts').sortBy('title');

      mdCodelist.forEach(function (item) {
        let newObject = Ember.Object.create({
          codeId: item.get('contactId'),
          codeName: item.get('title'),
          tooltip: item.get('combinedName'),
          icon: item.get('icon') || icons.get(defaultIcon)
        });
        codelist.pushObject(newObject);
      });

      return codelist;
    })
  });
});
define('mdeditor/services/drag-coordinator', ['exports', 'ember-drag-drop/services/drag-coordinator'], function (exports, _dragCoordinator) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _dragCoordinator.default;
});
define('mdeditor/services/ember-elsewhere', ['exports', 'ember-elsewhere/services/ember-elsewhere'], function (exports, _emberElsewhere) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberElsewhere.default;
    }
  });
});
define('mdeditor/services/ember-load-config', ['exports', 'ember-load/services/ember-load-config', 'mdeditor/config/environment'], function (exports, _emberLoadConfig, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  const userConfig = _environment.default['ember-load'] || {};

  exports.default = _emberLoadConfig.default.extend({
    loadingIndicatorClass: userConfig.loadingIndicatorClass
  });
});
define('mdeditor/services/flash-messages', ['exports', 'ember-cli-flash/services/flash-messages'], function (exports, _flashMessages) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flashMessages.default;
    }
  });
});
define('mdeditor/services/icon', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    dataset: 'globe',
    series: 'list-ol',
    nonGeographicDataset: 'bar-chart',
    feature: 'map-marker',
    software: 'desktop',
    service: 'exchange',
    model: 'cubes',
    tile: 'th-large',
    metadata: 'file-code-o',
    initiative: 'checklist',
    sample: 'flask',
    'document': 'file-o',
    repository: 'database',
    aggregate: 'sitemap',
    collection: 'files-o',
    coverage: 'th',
    application: 'android',
    sciencePaper: 'flask',
    userGuide: 'life-saver',
    dataDictionary: 'book',
    website: 'chrome',
    publication: 'file-text-o',
    report: 'file-text-o',
    awardInfo: 'file-o',
    collectionSite: 'map-marker',
    project: 'wrench',
    factSheet: 'file-o',
    tabularDataset: 'table',
    map: 'map-o',
    drawing: 'picture-o',
    photographicImage: 'camera',
    presentation: 'file-powerpoint-o',
    defaultFile: 'file-o',
    defaultList: 'caret-right',
    individuals: 'user',
    organizations: 'users'
  });
});
define('mdeditor/services/intl', ['exports', 'ember-intl/services/intl'], function (exports, _intl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _intl.default;
    }
  });
});
define('mdeditor/services/jsonvalidator', ['exports', 'npm:ajv', 'npm:ajv/lib/refs/json-schema-draft-04.json'], function (exports, _npmAjv, _jsonSchemaDraft) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let validator = new _npmAjv.default({
    verbose: true,
    allErrors: true,
    removeAdditional: false
  });

  //support draft-04
  validator.addMetaSchema(_jsonSchemaDraft.default);
  //add JSON API schema
  validator.addSchema({
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "JSON API Schema",
    "description": "This is a schema for responses in the JSON API format. For more, see http://jsonapi.org",
    "oneOf": [{
      "$ref": "#/definitions/success"
    }, {
      "$ref": "#/definitions/failure"
    }, {
      "$ref": "#/definitions/info"
    }],

    "definitions": {
      "success": {
        "type": "object",
        "required": ["data"],
        "properties": {
          "data": {
            "$ref": "#/definitions/data"
          },
          "included": {
            "description": "To reduce the number of HTTP requests, servers **MAY** allow responses that include related resources along with the requested primary resources. Such responses are called \"compound documents\".",
            "type": "array",
            "items": {
              "$ref": "#/definitions/resource"
            },
            "uniqueItems": true
          },
          "meta": {
            "$ref": "#/definitions/meta"
          },
          "links": {
            "description": "Link members related to the primary data.",
            "allOf": [{
              "$ref": "#/definitions/links"
            }, {
              "$ref": "#/definitions/pagination"
            }]
          },
          "jsonapi": {
            "$ref": "#/definitions/jsonapi"
          }
        },
        "additionalProperties": false
      },
      "failure": {
        "type": "object",
        "required": ["errors"],
        "properties": {
          "errors": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/error"
            },
            "uniqueItems": true
          },
          "meta": {
            "$ref": "#/definitions/meta"
          },
          "jsonapi": {
            "$ref": "#/definitions/jsonapi"
          }
        },
        "additionalProperties": false
      },
      "info": {
        "type": "object",
        "required": ["meta"],
        "properties": {
          "meta": {
            "$ref": "#/definitions/meta"
          },
          "links": {
            "$ref": "#/definitions/links"
          },
          "jsonapi": {
            "$ref": "#/definitions/jsonapi"
          }
        },
        "additionalProperties": false
      },

      "meta": {
        "description": "Non-standard meta-information that can not be represented as an attribute or relationship.",
        "type": "object",
        "additionalProperties": true
      },
      "data": {
        "description": "The document's \"primary data\" is a representation of the resource or collection of resources targeted by a request.",
        "oneOf": [{
          "$ref": "#/definitions/resource"
        }, {
          "description": "An array of resource objects, an array of resource identifier objects, or an empty array ([]), for requests that target resource collections.",
          "type": "array",
          "items": {
            "$ref": "#/definitions/resource"
          },
          "uniqueItems": true
        }, {
          "description": "null if the request is one that might correspond to a single resource, but doesn't currently.",
          "type": "null"
        }]
      },
      "resource": {
        "description": "\"Resource objects\" appear in a JSON API document to represent resources.",
        "type": "object",
        "required": ["type", "id"],
        "properties": {
          "type": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "attributes": {
            "$ref": "#/definitions/attributes"
          },
          "relationships": {
            "$ref": "#/definitions/relationships"
          },
          "links": {
            "$ref": "#/definitions/links"
          },
          "meta": {
            "$ref": "#/definitions/meta"
          }
        },
        "additionalProperties": false
      },

      "links": {
        "description": "A resource object **MAY** contain references to other resource objects (\"relationships\"). Relationships may be to-one or to-many. Relationships can be specified by including a member in a resource's links object.",
        "type": "object",
        "properties": {
          "self": {
            "description": "A `self` member, whose value is a URL for the relationship itself (a \"relationship URL\"). This URL allows the client to directly manipulate the relationship. For example, it would allow a client to remove an `author` from an `article` without deleting the people resource itself.",
            "type": "string",
            "format": "uri"
          },
          "related": {
            "$ref": "#/definitions/link"
          }
        },
        "additionalProperties": true
      },
      "link": {
        "description": "A link **MUST** be represented as either: a string containing the link's URL or a link object.",
        "oneOf": [{
          "description": "A string containing the link's URL.",
          "type": "string",
          "format": "uri"
        }, {
          "type": "object",
          "required": ["href"],
          "properties": {
            "href": {
              "description": "A string containing the link's URL.",
              "type": "string",
              "format": "uri"
            },
            "meta": {
              "$ref": "#/definitions/meta"
            }
          }
        }]
      },

      "attributes": {
        "description": "Members of the attributes object (\"attributes\") represent information about the resource object in which it's defined.",
        "type": "object",
        "patternProperties": {
          "^(?!relationships$|links$)\\w[-\\w_]*$": {
            "description": "Attributes may contain any valid JSON value."
          }
        },
        "additionalProperties": false
      },

      "relationships": {
        "description": "Members of the relationships object (\"relationships\") represent references from the resource object in which it's defined to other resource objects.",
        "type": "object",
        "patternProperties": {
          "^\\w[-\\w_]*$": {
            "properties": {
              "links": {
                "$ref": "#/definitions/links"
              },
              "data": {
                "description": "Member, whose value represents \"resource linkage\".",
                "oneOf": [{
                  "$ref": "#/definitions/relationshipToOne"
                }, {
                  "$ref": "#/definitions/relationshipToMany"
                }]
              },
              "meta": {
                "$ref": "#/definitions/meta"
              }
            },
            "additionalProperties": false
          }
        },
        "additionalProperties": false
      },
      "relationshipToOne": {
        "description": "References to other resource objects in a to-one (\"relationship\"). Relationships can be specified by including a member in a resource's links object.",
        "anyOf": [{
          "$ref": "#/definitions/empty"
        }, {
          "$ref": "#/definitions/linkage"
        }]
      },
      "relationshipToMany": {
        "description": "An array of objects each containing \"type\" and \"id\" members for to-many relationships.",
        "type": "array",
        "items": {
          "$ref": "#/definitions/linkage"
        },
        "uniqueItems": true
      },
      "empty": {
        "description": "Describes an empty to-one relationship.",
        "type": "null"
      },
      "linkage": {
        "description": "The \"type\" and \"id\" to non-empty members.",
        "type": "object",
        "required": ["type", "id"],
        "properties": {
          "type": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "meta": {
            "$ref": "#/definitions/meta"
          }
        },
        "additionalProperties": false
      },
      "pagination": {
        "type": "object",
        "properties": {
          "first": {
            "description": "The first page of data",
            "oneOf": [{
              "type": "string",
              "format": "uri"
            }, {
              "type": "null"
            }]
          },
          "last": {
            "description": "The last page of data",
            "oneOf": [{
              "type": "string",
              "format": "uri"
            }, {
              "type": "null"
            }]
          },
          "prev": {
            "description": "The previous page of data",
            "oneOf": [{
              "type": "string",
              "format": "uri"
            }, {
              "type": "null"
            }]
          },
          "next": {
            "description": "The next page of data",
            "oneOf": [{
              "type": "string",
              "format": "uri"
            }, {
              "type": "null"
            }]
          }
        }
      },

      "jsonapi": {
        "description": "An object describing the server's implementation",
        "type": "object",
        "properties": {
          "version": {
            "type": "string"
          },
          "meta": {
            "$ref": "#/definitions/meta"
          }
        },
        "additionalProperties": false
      },

      "error": {
        "type": "object",
        "properties": {
          "id": {
            "description": "A unique identifier for this particular occurrence of the problem.",
            "type": "string"
          },
          "links": {
            "$ref": "#/definitions/links"
          },
          "status": {
            "description": "The HTTP status code applicable to this problem, expressed as a string value.",
            "type": "string"
          },
          "code": {
            "description": "An application-specific error code, expressed as a string value.",
            "type": "string"
          },
          "title": {
            "description": "A short, human-readable summary of the problem. It **SHOULD NOT** change from occurrence to occurrence of the problem, except for purposes of localization.",
            "type": "string"
          },
          "detail": {
            "description": "A human-readable explanation specific to this occurrence of the problem.",
            "type": "string"
          },
          "source": {
            "type": "object",
            "properties": {
              "pointer": {
                "description": "A JSON Pointer [RFC6901] to the associated entity in the request document [e.g. \"/data\" for a primary data object, or \"/data/attributes/title\" for a specific attribute].",
                "type": "string"
              },
              "parameter": {
                "description": "A string indicating which query parameter caused the error.",
                "type": "string"
              }
            }
          },
          "meta": {
            "$ref": "#/definitions/meta"
          }
        },
        "additionalProperties": false
      }
    }
  }, 'jsonapi');

  exports.default = Ember.Service.extend({
    validator: validator
  });
});
define('mdeditor/services/keyword', ['exports', 'npm:gcmd-keywords', 'npm:mdkeywords', 'npm:mdcodes/resources/js/iso_topicCategory'], function (exports, _npmGcmdKeywords, _npmMdkeywords, _iso_topicCategory) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let service = Ember.Object.create({
    thesaurus: Ember.A(),
    findById(id) {
      return this.get('thesaurus').find(function (t) {
        return t.citation.identifier[0].identifier === id;
      });
    }
  });

  let type = {
    'Platforms': 'platform',
    'Instruments': 'instrument'
  };

  Object.keys(_npmGcmdKeywords.default).forEach(function (key) {
    if (Array.isArray(_npmGcmdKeywords.default[key])) {
      service.get('thesaurus').pushObject({
        citation: {
          date: [{
            date: _npmGcmdKeywords.default.version.date,
            dateType: 'revision'
          }],
          title: 'Global Change Master Directory (GCMD) ' + _npmGcmdKeywords.default[key][0].label,
          edition: 'Version ' + _npmGcmdKeywords.default.version.edition,
          onlineResource: [{
            uri: 'https://earthdata.nasa.gov/gcmd-forum'
          }],
          identifier: [{
            identifier: _npmGcmdKeywords.default[key][0].uuid
          }]
        },
        keywords: _npmGcmdKeywords.default[key][0].children,
        keywordType: type[_npmGcmdKeywords.default[key][0].label] || 'theme',
        label: 'GCMD ' + _npmGcmdKeywords.default[key][0].label
      });
    }
  });

  let isoKeywords = _iso_topicCategory.default.codelist.map(topic => {
    return {
      label: topic.codeName,
      definition: topic.description,
      uuid: topic.code
    };
  });

  service.get('thesaurus').pushObject({
    citation: {
      date: [{
        date: '2014-04',
        dateType: 'revision'
      }],
      title: 'ISO 19115 Topic Category',
      edition: 'ISO 19115-1:2014',
      onlineResource: [{
        uri: 'https://doi.org/10.18123/D6RP4M'
      }],
      identifier: [{
        identifier: 'ISO 19115 Topic Category'
      }]
    },
    keywords: isoKeywords,
    keywordType: 'isoTopicCategory',
    label: 'ISO Topic Category'
  });

  service.get('thesaurus').pushObjects(_npmMdkeywords.default);

  exports.default = Ember.Service.extend(service);
});
define("mdeditor/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (exports, _transitionMap) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _transitionMap.default;
});
define('mdeditor/services/mdjson', ['exports', 'npm:ajv', 'npm:mdjson-schemas/resources/js/schemas.js', 'mdeditor/pods/components/object/md-citation/component', 'npm:ajv/lib/refs/json-schema-draft-04.json'], function (exports, _npmAjv, _schemas, _component, _jsonSchemaDraft) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const validator = new _npmAjv.default({
    verbose: true,
    allErrors: true,
    jsonPointers: true,
    removeAdditional: false
  });

  //support draft-04
  validator.addMetaSchema(_jsonSchemaDraft.default);

  Object.keys(_schemas.default).forEach(function (key) {
    let val = _schemas.default[key];

    validator.addSchema(val, key);
  });

  const {
    Service,
    inject,
    isArray,
    set,
    get,
    getWithDefault,
    Object: EmObject

  } = Ember;

  const unImplemented = ['dataDictionary', 'metadata.metadataInfo.otherMetadataLocale', 'metadata.resourceInfo.spatialRepresentation', ['metadata.resourceInfo.extent', 'verticalExtent'], ['metadata.resourceInfo.extent', 'temporalExtent'], 'metadata.resourceInfo.coverageDescription', 'metadata.resourceInfo.taxonomy', 'metadata.resourceInfo.otherResourceLocale', 'metadata.resourceInfo.resourceMaintenance'];

  exports.default = Service.extend({
    cleaner: inject.service(),
    contacts: inject.service(),
    store: inject.service(),

    injectCitations(json) {
      let assoc = json.metadata.associatedResource;

      if (assoc) {
        let refs = assoc.reduce((acc, itm) => {
          if (itm.mdRecordId) {
            acc.push(itm);
          }
          return acc;
        }, []);

        let records = this.get('store').peekAll('record').filterBy('recordId');

        refs.forEach(ref => {
          let record = records.findBy('recordId', ref.mdRecordId);

          if (record) {
            let info = get(record, 'json.metadata.metadataInfo') || {};
            let metadata = {
              'title': `Metadata for ${get(record, 'title')}`,
              'responsibleParty': getWithDefault(info, 'metadataContact', []),
              'date': getWithDefault(info, 'metadataDate', []),
              'onlineResource': getWithDefault(info, 'metadataOnlineResource', []),
              'identifier': [getWithDefault(info, 'metadataIdentifier', {})]
            };

            let citation = get(record, 'json.metadata.resourceInfo.citation') || {};
            let resourceType = get(record, 'json.metadata.resourceInfo.resourceType') || [];

            set(ref, 'resourceCitation', EmObject.create((0, _component.formatCitation)(citation)));
            set(ref, 'metadataCitation', EmObject.create((0, _component.formatCitation)(metadata)));
            set(ref, 'resourceType', resourceType);
          }
        });
      }
    },

    formatRecord(rec, asText) {
      let _contacts = [];
      let conts = this.get('contacts');

      const _replacer = (key, value) => {
        let check = {
          contactId: true,
          sourceId: true,
          recipientId: true
        };
        //console.log(arguments);
        if (check[key] && !_contacts.includes(value)) {
          let contact = conts.get('contacts').findBy('contactId', value);

          if (!contact) {
            return null;
          }

          let orgs = contact.get('json.memberOfOrganization');
          _contacts.push(value);

          if (orgs && orgs.length) {
            orgs.forEach(itm => {
              if (conts.get('contacts').findBy('contactId', itm)) {
                _contacts.push(itm);
              }
            });
          }
        }

        return value;
      };

      let cleaner = this.get('cleaner');
      let clean = cleaner.clean(get(rec, 'json'));

      this.injectCitations(clean);

      let json = JSON.parse(JSON.stringify(cleaner.clean(clean), _replacer));
      let contacts = this.get('store').peekAll('contact').mapBy('json');

      json.contact = contacts.filter(item => {
        return _contacts.includes(get(item, 'contactId'));
      });

      if (unImplemented) {
        unImplemented.forEach(path => {
          let array = isArray(path);
          let target = array ? get(json, path[0]) : get(json, path);

          if (target) {
            if (array) {
              target.forEach(item => {
                set(item, path[1], undefined);
              });

              return;
            }

            set(json, path, undefined);
          }
        });
      }

      return asText ? JSON.stringify(cleaner.clean(json)) : cleaner.clean(json);
    },

    validateRecord(record) {
      validator.validate('schema', this.formatRecord(record));

      return validator;
    },

    validateContact(contact) {
      validator.validate('contact', contact.get('cleanJson'));

      return validator;
    },

    validateDictionary(dictionary) {
      validator.validate('dataDictionary', dictionary.get('cleanJson').dataDictionary);

      return validator;
    }
  });
});
define('mdeditor/services/modal-dialog', ['exports', 'mdeditor/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const { computed, Service } = Ember;

  function computedFromConfig(prop) {
    return computed(function () {
      return _environment.default['ember-modal-dialog'] && _environment.default['ember-modal-dialog'][prop];
    });
  }

  exports.default = Service.extend({
    hasEmberTether: computedFromConfig('hasEmberTether'),
    hasLiquidWormhole: computedFromConfig('hasLiquidWormhole'),
    hasLiquidTether: computedFromConfig('hasLiquidTether'),
    destinationElementId: computed(function () {
      /*
        everywhere except test, this property will be overwritten
        by the initializer that appends the modal container div
        to the DOM. because initializers don't run in unit/integration
        tests, this is a nice fallback.
      */
      if (_environment.default.environment === 'test') {
        return 'ember-testing';
      }
    })
  });
});
define('mdeditor/services/moment', ['exports', 'mdeditor/config/environment', 'ember-moment/services/moment'], function (exports, _environment, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _moment.default.extend({
    defaultFormat: Ember.get(_environment.default, 'moment.outputFormat')
  });
});
define('mdeditor/services/patch', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Service = Ember.Service;
  var get = Ember.get;
  var set = Ember.set;
  exports.default = Service.extend({
    applyModelPatch(record) {
      let type = record.constructor.modelName;

      switch (type) {
        case 'contact':
          record.get('json.address').forEach(itm => {
            let oldAdm = get(itm, 'adminstrativeArea');

            if (oldAdm) {
              set(itm, 'administrativeArea', oldAdm);
              set(itm, 'adminstrativeArea', null);

              record.save();
            }
          });

          break;
      }
    }
  });
});
define('mdeditor/services/pollboy', ['exports', 'ember-pollboy/services/pollboy'], function (exports, _pollboy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pollboy.default;
    }
  });
});
define('mdeditor/services/profile', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    get,
    inject
  } = Ember;
  /**
   * Profile service
   *
   * Service that provides profile configurations for metadata records.
   *
   * @module
   * @augments ember/Service
   */
  exports.default = Ember.Service.extend({
    flashMessages: inject.service(),
    /**
     * String identifying the active profile
     *
     * @type {?String}
     */
    active: null,

    /**
     * Get the active profile.
     *
     * @function
     * @returns {Object}
     */
    getActiveProfile() {
      const active = this.get('active');
      const profile = active && typeof active === 'string' ? active : 'full';
      const profiles = this.get('profiles');

      if (profiles[profile]) {
        return profiles[profile];
      } else {
        get(this, 'flashMessages').warning(`Profile "${active}" not found. Using "full" profile.`);
        return 'full';
      }
    },

    /**
     * An object defining the available profiles
     *
     * @type {Object} profiles
     */
    profiles: {
      full: {
        profile: null,
        description: 'The kitchen sink',
        secondaryNav: [{
          title: 'Main',
          target: 'record.show.edit.main',
          tip: 'Basic information about the resource.'

        }, {
          title: 'Metadata',
          target: 'record.show.edit.metadata',
          tip: 'Information about the metadata for the resource.'

        }, {
          title: 'Keywords',
          target: 'record.show.edit.keywords',
          tip: 'Terms used to describe the resource.'

        }, {
          title: 'Extent',
          target: 'record.show.edit.extent',
          tip: 'Information describing the bounds of the resource.'

        }, {
          title: 'Spatial',
          target: 'record.show.edit.spatial',
          tip: 'Information concerning the spatial attributes of the resource.'

        }, {
          title: 'Lineage',
          target: 'record.show.edit.lineage',
          tip: 'Information on the history of the resource.'

        }, {
          title: 'Distribution',
          target: 'record.show.edit.distribution',
          tip: 'Information about obtaining the resource.'

        }, {
          title: 'Constraints',
          target: 'record.show.edit.constraint',
          tip: 'Information about constraints applied to the resource.'

        }, {
          title: 'Associated',
          target: 'record.show.edit.associated',
          tip: 'Other resources with a defined relationship to the resource.'

        }, {
          title: 'Documents',
          target: 'record.show.edit.documents',
          tip: 'Other documents related to, but not defining, the resource.'

        }, {
          title: 'Funding',
          target: 'record.show.edit.funding',
          tip: 'Information about funding allocated to development of the resource.'

        }, {
          title: 'Dictionaries',
          target: 'record.show.edit.dictionary',
          tip: 'Data dictionaries associated with the resource.'
          /*, {
                  title: 'Coverage',
                  target: 'record.show.edit.coverages'
                 }, {
                  title: 'Grid',
                  target: 'record.show.edit.grid'
                }*/
        }],
        components: {
          record: {
            main: {
              recordId: true,
              status: true,
              defaultLocale: true,
              resourceType: true,
              pointOfContact: true,
              description: true,
              abstract: true,
              shortAbstract: true,
              supplementalInfo: true,
              purpose: true,
              environmentDescription: true,
              credit: true,
              citation: {
                title: true,
                alternateTitle: true,
                date: true,
                edition: true,
                onlineResource: true,
                responsibleParty: true,
                presentationForm: true,
                otherCitationDetails: true,
                graphic: true,
                series: {
                  name: true,
                  issue: true,
                  page: true
                },
                identifier: {
                  identifier: true,
                  namespace: true,
                  version: true,
                  description: true,
                  authority: {
                    title: true,
                    alternateTitle: true,
                    date: true,
                    responsibleParty: true
                  }
                }
              }
            },
            metadata: {
              basicInformation: true,
              metadataStatus: true,
              metadataDate: true,
              metadataContact: true,
              defaultLocale: true,
              metadataIdentifier: {
                identifier: true,
                namespace: true,
                version: true,
                description: true,
                authority: {
                  title: true,
                  alternateTitle: true,
                  date: true,
                  responsibleParty: true
                }
              },
              parentMetadata: {
                title: true,
                alternateTitle: true,
                date: true,
                edition: true,
                onlineResource: true,
                responsibleParty: true,
                presentationForm: true,
                otherCitationDetails: true,
                graphic: true,
                series: {
                  name: true,
                  issue: true,
                  page: true
                },
                identifier: {
                  identifier: true,
                  namespace: true,
                  version: true,
                  description: true,
                  authority: {
                    title: true,
                    alternateTitle: true,
                    date: true,
                    responsibleParty: true
                  }
                }
              },
              alternateMetadata: {
                title: true,
                alternateTitle: true,
                date: true,
                edition: false,
                responsibleParty: true,
                onlineResource: true,
                presentationForm: true,
                otherCitationDetails: true,
                graphic: true,
                series: {
                  name: true,
                  issue: true,
                  page: true
                },
                identifier: {
                  identifier: true,
                  namespace: true,
                  version: true,
                  description: true,
                  authority: {
                    title: true,
                    alternateTitle: true,
                    date: true,
                    responsibleParty: true
                  }
                }
              },
              maintenance: {
                frequency: true,
                date: true,
                contact: true,
                note: true,
                scope: true
              }
            },
            lineage: {
              statement: true,
              processStep: {
                stepId: true,
                description: true,
                processor: true,
                reference: true,
                scope: true
              },
              scope: true,
              citation: {
                title: true,
                alternateTitle: true,
                date: true,
                edition: true,
                onlineResource: true,
                responsibleParty: true,
                presentationForm: true,
                otherCitationDetails: true,
                graphic: true,
                series: {
                  name: true,
                  issue: true,
                  page: true
                },
                identifier: {
                  identifier: true,
                  namespace: true,
                  version: true,
                  description: true,
                  authority: {
                    title: true,
                    alternateTitle: true,
                    date: true,
                    responsibleParty: true
                  }
                }
              }
            },
            documents: {
              resourceType: true,
              citation: {
                title: true,
                alternateTitle: true,
                date: true,
                edition: true,
                onlineResource: true,
                responsibleParty: true,
                presentationForm: true,
                otherCitationDetails: true,
                graphic: true,
                series: {
                  name: true,
                  issue: true,
                  page: true
                },
                identifierSimple: false,
                identifierShort: {
                  identifier: true,
                  namespace: true,
                  version: true,
                  description: true
                }
              }
            }
          }
        }
      },
      lccProject: {
        profile: null,
        description: 'Profile for LCC Projects',
        secondaryNav: [{
          title: 'Main',
          target: 'record.show.edit.main',
          tip: 'Basic information about the project.'

        }, {
          title: 'Metadata',
          target: 'record.show.edit.metadata',
          tip: 'Information about the metadata for the project.'

        }, {
          title: 'Keywords',
          target: 'record.show.edit.keywords',
          tip: 'Terms used to describe the project.'

        }, {
          title: 'Extent',
          target: 'record.show.edit.extent',
          tip: 'Information describing the bounds of the project.'

        }, {
          title: 'Associated',
          target: 'record.show.edit.associated',
          tip: 'Other records with a defined relationship to the project.'

        }, {
          title: 'Documents',
          target: 'record.show.edit.documents',
          tip: 'Other documents related to, but not defining, the project.'

        }, {
          title: 'Funding',
          target: 'record.show.edit.funding',
          tip: 'Information about funding allocated to development of the project.'

        }],
        components: {
          record: {
            main: {
              recordId: true,
              purpose: false,
              environmentDescription: false,
              credit: false,
              timePeriod: {
                id: false,
                description: false,
                periodName: false,
                duration: false,
                interval: false
              },
              citation: {
                edition: false,
                onlineResource: {
                  protocol: false
                },
                presentationForm: false,
                otherCitationDetails: false,
                graphic: false,
                series: false,
                identifier: {
                  identifier: true,
                  namespace: true,
                  version: false,
                  description: false,
                  authority: {
                    date: false,
                    alternateTitle: false,
                    identifier: false,
                    onlineResource: false
                  }
                },
                graphicOverview: false
              },
              graphicOverview: false
            },
            metadata: {
              identifier: {
                identifier: true,
                namespace: true,
                version: false,
                description: false,
                authority: false
              },
              parentMetadata: {
                title: true,
                alternateTitle: false,
                date: false,
                edition: false,
                onlineResource: true,
                responsibleParty: true,
                presentationForm: false,
                otherCitationDetails: false,
                graphicOverview: false,
                series: false,
                identifier: false,
                identifierSimple: {
                  identifier: true,
                  namespace: true,
                  version: false,
                  description: false,
                  authority: false
                }
              },
              alternateMetadataReference: false,
              defaultLocale: false,
              maintenance: false
            },
            associated: {
              resourceType: true,
              resourceCitation: {
                alternateTitle: false,
                edition: false,
                presentationForm: false,
                otherCitationDetails: false,
                graphicOverview: false,
                series: false,
                identifierSimple: false,
                identifierShort: {
                  identifier: true,
                  namespace: true,
                  version: true,
                  description: true
                }
              },
              metadataCitation: {
                alternateTitle: false,
                edition: false,
                presentationForm: false,
                otherCitationDetails: false,
                graphicOverview: false,
                series: false,
                identifierSimple: false,
                identifierShort: {
                  identifier: true,
                  namespace: true,
                  version: true,
                  description: true
                }
              }
            },
            documents: {
              resourceType: true,
              citation: {
                title: true,
                alternateTitle: true,
                date: true,
                edition: true,
                onlineResource: true,
                responsibleParty: true,
                presentationForm: true,
                otherCitationDetails: false,
                graphicOverview: false,
                series: {
                  name: true,
                  issue: true,
                  page: true
                },
                identifierSimple: false,
                identifierShort: {
                  identifier: true,
                  namespace: true,
                  version: true,
                  description: true
                }
              }
            },
            funding: {
              timePeriod: {
                id: false,
                description: false,
                periodName: false,
                duration: false,
                interval: false
              }
            }
          }
        }
      },
      lccProduct: {
        profile: null,
        description: 'Profile for LCC Products',
        secondaryNav: [{
          title: 'Main',
          target: 'record.show.edit.main',
          tip: 'Basic information about the product.'

        }, {
          title: 'Metadata',
          target: 'record.show.edit.metadata',
          tip: 'Information about the metadata for the product.'

        }, {
          title: 'Keywords',
          target: 'record.show.edit.keywords',
          tip: 'Terms used to describe the product.'

        }, {
          title: 'Extent',
          target: 'record.show.edit.extent',
          tip: 'Information describing the bounds of the product.'

        }, {
          title: 'Spatial',
          target: 'record.show.edit.spatial',
          tip: 'Information concerning the spatial attributes of the product.'

        }, {
          title: 'Lineage',
          target: 'record.show.edit.lineage',
          tip: 'Information on the history of the product.'

        }, {
          title: 'Distribution',
          target: 'record.show.edit.distribution',
          tip: 'Information about obtaining the product.'

        }, {
          title: 'Constraints',
          target: 'record.show.edit.constraint',
          tip: 'Information about constraints applied to the product.'

        }, {
          title: 'Associated',
          target: 'record.show.edit.associated',
          tip: 'Other records with a defined relationship to the product.'

        }, {
          title: 'Documents',
          target: 'record.show.edit.documents',
          tip: 'Other documents related to, but not defining, the product.'

        }],
        components: {
          record: {
            main: {
              recordId: true,
              purpose: false,
              environmentDescription: false,
              credit: false,
              timePeriod: {
                id: false,
                description: false,
                periodName: false,
                duration: false,
                interval: false
              },
              citation: {
                edition: false,
                onlineResource: {
                  protocol: false
                },
                presentationForm: false,
                otherCitationDetails: false,
                graphic: false,
                series: false,
                identifier: {
                  identifier: true,
                  namespace: true,
                  version: false,
                  description: false,
                  authority: {
                    date: false,
                    alternateTitle: false,
                    identifier: false,
                    onlineResource: false
                  }
                },
                graphicOverview: false
              },
              graphicOverview: false
            },
            metadata: {
              identifier: {
                identifier: true,
                namespace: true,
                version: false,
                description: false,
                authority: false
              },
              parentMetadata: {
                title: true,
                alternateTitle: false,
                date: false,
                edition: false,
                onlineResource: true,
                responsibleParty: true,
                presentationForm: false,
                otherCitationDetails: false,
                graphicOverview: false,
                series: false,
                identifier: false,
                identifierSimple: {
                  identifier: true,
                  namespace: true,
                  version: false,
                  description: false,
                  authority: false
                }
              },
              alternateMetadataReference: false,
              defaultLocale: false,
              maintenance: false
            },
            distribution: {
              distributor: {
                transferOption: {
                  distributionUnit: false,
                  transferFrequency: false,
                  distributionFormat: false,
                  offlineOption: {
                    identifier: false
                  }
                },
                orderProcess: false
              }
            },
            constraints: {
              responsibleParty: false,
              graphic: false
            },
            associated: {
              resourceType: true,
              resourceCitation: {
                alternateTitle: false,
                edition: false,
                presentationForm: false,
                otherCitationDetails: false,
                graphicOverview: false,
                series: false,
                identifierSimple: false,
                identifierShort: {
                  identifier: true,
                  namespace: true,
                  version: true,
                  description: true
                }
              },
              metadataCitation: {
                alternateTitle: false,
                edition: false,
                presentationForm: false,
                otherCitationDetails: false,
                graphicOverview: false,
                series: false,
                identifierSimple: false,
                identifierShort: {
                  identifier: true,
                  namespace: true,
                  version: true,
                  description: true
                }
              }
            },
            documents: {
              resourceType: true,
              citation: {
                title: true,
                alternateTitle: true,
                date: true,
                edition: true,
                onlineResource: true,
                responsibleParty: true,
                presentationForm: true,
                otherCitationDetails: false,
                graphicOverview: false,
                series: {
                  name: true,
                  issue: true,
                  page: true
                },
                identifierSimple: false,
                identifierShort: {
                  identifier: true,
                  namespace: true,
                  version: true,
                  description: true
                }
              }
            },
            funding: {
              timePeriod: {
                id: false,
                description: false,
                periodName: false,
                duration: false,
                interval: false
              }
            }
          }
        }
      },
      publication: {
        secondaryNav: [{
          title: 'Main',
          target: 'record.show.edit.main'

        }, {
          title: 'Metadata',
          target: 'record.show.edit.metadata'

        }, {
          title: 'Keywords',
          target: 'record.show.edit.keywords'

        }, {
          title: 'Extent',
          target: 'record.show.edit.extent'

        }, {
          title: 'Distribution',
          target: 'record.show.edit.distribution'

        }, {
          title: 'Associated',
          target: 'record.show.edit.associated'

        }, {
          title: 'Documents',
          target: 'record.show.edit.documents'

        }],
        components: {
          record: {
            main: {
              supplementalInfo: false,
              environmentDescription: false
            }
          }
        }
      },
      basic: {
        profile: null,
        secondaryNav: [{
          title: 'Main',
          target: 'record.show.edit.main'

        }, {
          title: 'Metadata',
          target: 'record.show.edit.metadata'

        }, {
          title: 'Keywords',
          target: 'record.show.edit.keywords'

        }, {
          title: 'Extent',
          target: 'record.show.edit.extent'

        }, {
          title: 'Distribution',
          target: 'record.show.edit.distribution'

        }],
        components: {
          record: {
            main: {
              recordId: false,
              purpose: false,
              environmentDescription: false,
              supplementalInfo: false,
              credit: false,
              timePeriod: {
                id: false,
                description: false,
                periodName: false,
                duration: false,
                interval: false
              },
              citation: {
                edition: false,
                onlineResource: {
                  protocol: false
                },
                presentationForm: false,
                otherCitationDetails: false,
                graphic: false,
                series: false,
                identifier: false,
                graphicOverview: false
              },
              graphicOverview: false
            },
            metadata: {
              identifier: {
                identifier: true,
                namespace: true,
                version: false,
                description: false,
                authority: false
              },
              parentMetadata: false,
              alternateMetadataReference: false,
              defaultLocale: false,
              maintenance: false
            }
          }
        }
      },
      dictionary: {
        secondaryNav: [{
          title: 'Main',
          target: 'dictionary.show.edit.index',
          tip: 'Basic information about the dictionary.'
        }, {
          title: 'Citation',
          target: 'dictionary.show.edit.citation',
          tip: 'The citation for the dictionary.'
        }, {
          title: 'Domains',
          target: 'dictionary.show.edit.domains',
          tip: 'Information about defined value lists.'

        }, {
          title: 'Entities',
          target: 'dictionary.show.edit.entities',
          tip: 'Information about entities(tables) and attributes(columns or fields).'
        }]
      }
    }
  });
});
define('mdeditor/services/publish', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    A,
    Service
  } = Ember;

  exports.default = Service.extend({
    catalogs: A()
  });
});
define('mdeditor/services/resize', ['exports', 'ember-resize/services/resize'], function (exports, _resize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _resize.default;
    }
  });
});
define('mdeditor/services/settings', ['exports', 'mdeditor/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    APP: {
      version
    },
    environment
  } = _environment.default;

  const {
    Service,
    getWithDefault,
    inject,
    set
  } = Ember;

  exports.default = Service.extend({
    store: inject.service(),
    data: 'null',

    init() {
      this._super(...arguments);

      this.setup();
    },
    setup() {
      let me = this;
      let settings;
      let store = this.get('store');

      store.findAll('setting').then(function (s) {
        let rec = s.get('firstObject');

        settings = rec ? rec : store.createRecord('setting');

        if (settings.get('lastVersion') !== version) {
          settings.set('showSplash', environment !== 'test');
          settings.set('lastVersion', version);
        }

        set(settings, 'repositoryDefaults', getWithDefault(settings, 'repositoryDefaults', []));

        settings.notifyPropertyChange('hasDirtyAttributes');

        if (!(me.get('isDestroyed') || me.get('isDestroying'))) {
          me.set('data', settings);
        }
      });
    },
    repositoryTemplate: Ember.Object.extend({
      init() {
        this._super(...arguments);
      }
    })
  });
});
define('mdeditor/services/slider', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Service = Ember.Service;
  var service = Ember.inject.service;
  var observer = Ember.observer;
  exports.default = Service.extend({
    init() {
      this._super(...arguments);

      this.get('router.currentRouteName');
    },

    router: service(),

    showSlider: false,
    fromName: 'md-slider-content',

    routeObserver: observer('router.currentRouteName', function () {
      this.toggleSlider(false);
      this.set('fromName', 'md-slider-content');
    }),

    onClose() {},

    toggleSlider(state) {
      if (state === undefined) {
        this.toggleProperty('showSlider');

        return;
      }

      this.set('showSlider', !!state);
    }
  });
});
define('mdeditor/services/spotlight', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Service,
    setProperties,
    $,
    isPresent
  } = Ember;

  exports.default = Service.extend({
    show: false,
    elementId: undefined,

    setTarget(id) {
      let el = this.get('elementId');

      if (id === el) {
        this.close();

        return;
      }

      if (id && id !== el) {
        $('#' + el).removeClass('md-spotlight-target');
      }

      setProperties(this, {
        show: true,
        elementId: id
      });

      $('body').addClass('md-no-liquid');
      $('#' + id).addClass('md-spotlight-target');
    },

    close() {
      let id = this.get('elementId');

      if (isPresent(id)) {
        $('body').removeClass('md-no-liquid');
        $('#' + id).removeClass('md-spotlight-target');
      }

      setProperties(this, {
        show: false,
        elementId: undefined
      });
    }
  });
});
define('mdeditor/services/text-measurer', ['exports', 'ember-text-measurer/services/text-measurer'], function (exports, _textMeasurer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textMeasurer.default;
    }
  });
});
define('mdeditor/shapefile', ['exports', 'npm:shapefile'], function (exports, _npmShapefile) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.shapefile = undefined;
  exports.shapefile = _npmShapefile.default;
});
define("mdeditor/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "je8gCdHL", "block": "{\"symbols\":[\"flash\",\"component\",\"flash\"],\"statements\":[[6,\"div\"],[9,\"class\",\"md-message-container\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"md-message-wrapper\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"flashMessages\",\"queue\"]]],null,{\"statements\":[[4,\"flash-message\",null,[[\"flash\"],[[19,1,[]]]],{\"statements\":[[0,\"    \"],[1,[19,3,[\"message\"]],false],[0,\"\\n\"],[4,\"if\",[[19,3,[\"showProgress\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"progress\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"progress-bar\"],[9,\"role\",\"progressbar\"],[10,\"aria-valuenow\",[26,[[19,3,[\"progressValue\"]]]]],[9,\"aria-valuemin\",\"0\"],[9,\"aria-valuemax\",\"100\"],[10,\"style\",[26,[\"width: \",[25,\"html-safe\",[[19,3,[\"progressValue\"]]],null],\"%;\"]]],[7],[0,\"\\n        \"],[1,[19,3,[\"progressValue\"]],false],[0,\"%\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[2,3]},null]],\"parameters\":[1]},null],[0,\"  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"id\",\"md-wrapper\"],[9,\"class\",\"\"],[7],[0,\"\\n\\n  \"],[2,\" Slider \"],[0,\"\\n\"],[4,\"layout/md-slider\",null,[[\"visible\",\"fromName\",\"onClose\",\"context\"],[[20,[\"slider\",\"showSlider\"]],[20,[\"slider\",\"fromName\"]],[20,[\"slider\",\"onClose\"]],[20,[\"slider\",\"context\"]]]],{\"statements\":[],\"parameters\":[]},null],[0,\"  \"],[2,\" /#slider \"],[0,\"\\n\\n  \"],[2,\" Sidebar \"],[0,\"\\n  \"],[6,\"div\"],[9,\"id\",\"md-sidebar-wrapper\"],[7],[0,\"\\n    \"],[1,[25,\"layout/md-nav-sidebar\",null,[[\"items\"],[[20,[\"model\"]]]]],false],[0,\" \"],[1,[18,\"md-help\"],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[2,\" /#sidebar-wrapper \"],[0,\"\\n\\n  \"],[2,\" Page Content \"],[0,\"\\n  \"],[6,\"div\"],[9,\"id\",\"md-page-content-wrapper\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"id\",\"md-navbars\"],[7],[0,\"\\n\"],[4,\"layout/md-nav-main\",null,null,{\"statements\":[[0,\"        \"],[1,[25,\"outlet\",[\"nav\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[1,[18,\"layout/md-breadcrumb\"],false],[0,\" \"],[1,[25,\"outlet\",[\"nav-secondary\"],null],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"id\",\"md-page-content\"],[9,\"class\",\"container-fluid\"],[7],[0,\"\\n      \"],[1,[18,\"outlet\"],false],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[2,\" /#page-content-wrapper \"],[0,\"\\n  \"],[1,[25,\"layout/md-footer\",null,[[\"class\"],[\"hidden-print\"]]],false],[0,\"\\n\"],[8],[0,\"\\n\"],[1,[18,\"ember-load-remover\"],false],[0,\"\\n\\n\"],[4,\"control/md-modal\",null,[[\"isShowing\",\"showConfirm\",\"confirmLabel\"],[[20,[\"settings\",\"data\",\"showSplash\"]],true,\"OK\"]],{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"alert alert-warning\"],[9,\"role\",\"alert\"],[7],[1,[25,\"fa-icon\",[\"exclamation-triangle\"],null],false],[0,\" Update Alert\"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"alert alert-danger\"],[9,\"role\",\"alert\"],[7],[1,[25,\"fa-icon\",[\"wrench\"],null],false],[0,\" Warning:\\n        This application is under development!\\n    \"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"\\n        The application has been updated since your last session. Some features\\n        may have been added or changed. Please note the version below (also shown\\n        in the \"],[4,\"link-to\",[\"settings\"],null,{\"statements\":[[0,\"Settings\"]],\"parameters\":[]},null],[0,\") when reporting bugs or issues.\\n        If you are having problems, you might want to \"],[4,\"link-to\",[\"settings\"],null,{\"statements\":[[0,\"\\n        clear your localstorage\"]],\"parameters\":[]},null],[0,\" which will\\n        delete all records. This application is \"],[6,\"strong\"],[9,\"class\",\"text-warning\"],[7],[0,\"NOT\\n        INTENDED FOR PRODUCTION USE until Version 1.0 (January 2018).\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"\\n        Current Version: \"],[6,\"span\"],[9,\"class\",\"text-info\"],[7],[1,[18,\"control/md-repo-link\"],false],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"spotlight\",\"show\"]]],null,{\"statements\":[[0,\"  \"],[1,[18,\"control/md-spotlight\"],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/templates/application.hbs" } });
});
define("mdeditor/templates/components/bs-datetimepicker", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "QJ42Hsdd", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[22,1]],null,{\"statements\":[[0,\"  \"],[11,1],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[25,\"input\",null,[[\"type\",\"class\",\"disabled\",\"name\",\"placeholder\"],[\"text\",\"form-control\",[20,[\"disabled\"]],[20,[\"textFieldName\"]],[20,[\"placeholder\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[4,\"unless\",[[20,[\"noIcon\"]]],null,{\"statements\":[[6,\"span\"],[9,\"class\",\"input-group-addon\"],[7],[0,\"\\n  \"],[6,\"span\"],[10,\"class\",[26,[[25,\"if\",[[20,[\"icons\",\"date\"]],[20,[\"icons\",\"date\"]],[20,[\"dateIcon\"]]],null]]]],[7],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/templates/components/bs-datetimepicker.hbs" } });
});
define("mdeditor/templates/components/draggable-object-target", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/959xozU", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[20,[\"enableClicking\"]]],null,{\"statements\":[[0,\"  \"],[6,\"a\"],[9,\"href\",\"#\"],[3,\"action\",[[19,0,[]],\"acceptForDrop\"]],[7],[0,\"\\n    \"],[11,1],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[11,1],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/templates/components/draggable-object-target.hbs" } });
});
define("mdeditor/templates/components/draggable-object", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "08Wx+CVh", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[20,[\"enableClicking\"]]],null,{\"statements\":[[0,\"  \"],[6,\"a\"],[9,\"href\",\"#\"],[3,\"action\",[[19,0,[]],\"selectForDrag\"]],[7],[0,\"\\n    \"],[11,1],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[11,1],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/templates/components/draggable-object.hbs" } });
});
define("mdeditor/templates/components/file-picker", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "R7krCaoo", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[20,[\"dropzone\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"file-picker__dropzone\"],[7],[0,\"\\n    \"],[11,1],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[11,1],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"if\",[[20,[\"preview\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"file-picker__preview\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"progress\"]]],null,{\"statements\":[[4,\"if\",[[20,[\"showProgress\"]]],null,{\"statements\":[[4,\"if\",[[20,[\"isProgressSupported\"]]],null,{\"statements\":[[0,\"      \"],[6,\"progress\"],[10,\"value\",[18,\"progressValue\"],null],[9,\"max\",\"100\"],[9,\"class\",\"file-picker__progress\"],[7],[1,[18,\"progress\"],false],[0,\" %\"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"file-picker__progress\"],[7],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"file-picker__progress__value\"],[10,\"style\",[18,\"progressStyle\"],null],[7],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[1,[25,\"input\",null,[[\"type\",\"value\",\"accept\",\"multiple\",\"class\"],[\"file\",[20,[\"file\"]],[20,[\"accept\"]],[20,[\"multiple\"]],\"file-picker__input\"]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/templates/components/file-picker.hbs" } });
});
define("mdeditor/templates/components/leaflet-table/actions", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "aFAcKQjI", "block": "{\"symbols\":[],\"statements\":[[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-xs btn-success\"],[9,\"title\",\"Zoom to Feature\"],[3,\"action\",[[19,0,[]],\"zoomTo\",[20,[\"record\"]]]],[7],[1,[25,\"fa-icon\",[\"search\"],null],false],[8],[0,\"\\n\"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-xs btn-info\"],[9,\"title\",\"Edit Properties\"],[3,\"action\",[[19,0,[]],[20,[\"showForm\"]],[20,[\"record\"]]]],[7],[1,[25,\"fa-icon\",[\"pencil\"],null],false],[8],[0,\"\\n\"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-xs btn-danger\"],[9,\"title\",\"Delete Feature\"],[3,\"action\",[[19,0,[]],\"deleteFeature\",[20,[\"record\"]]]],[7],[1,[25,\"fa-icon\",[\"times\"],null],false],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/templates/components/leaflet-table/actions.hbs" } });
});
define("mdeditor/templates/components/leaflet-table/row", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1l9spbnk", "block": "{\"symbols\":[\"column\"],\"statements\":[[6,\"tr\"],[10,\"class\",[20,[\"record\",\"state\"]],null],[3,\"action\",[[19,0,[]],\"mouseEnter\",[20,[\"record\"]]],[[\"on\"],[\"mouseEnter\"]]],[3,\"action\",[[19,0,[]],\"mouseLeave\",[20,[\"record\"]]],[[\"on\"],[\"mouseLeave\"]]],[3,\"action\",[[19,0,[]],[25,\"action\",[[19,0,[]],[20,[\"showForm\"]],[20,[\"record\"]]],null]],[[\"on\"],[\"doubleClick\"]]],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"processedColumns\"]]],null,{\"statements\":[[4,\"if\",[[19,1,[\"isVisible\"]]],null,{\"statements\":[[0,\"      \"],[6,\"td\"],[10,\"class\",[19,1,[\"className\"]],null],[7],[0,\"\\n\"],[4,\"if\",[[19,1,[\"template\"]]],null,{\"statements\":[[0,\"          \"],[12,[19,1,[\"template\"]],[1]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[1,[25,\"get\",[[20,[\"record\"]],[19,1,[\"propertyName\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[8],[0,\"\\n\"]],\"hasEval\":true}", "meta": { "moduleName": "mdeditor/templates/components/leaflet-table/row.hbs" } });
});
define("mdeditor/templates/components/multiselect-checkboxes", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "c/R44imm", "block": "{\"symbols\":[\"checkbox\",\"index\",\"&default\"],\"statements\":[[4,\"each\",[[20,[\"checkboxes\"]]],null,{\"statements\":[[4,\"if\",[[22,3]],null,{\"statements\":[[0,\"    \"],[11,3,[[19,1,[\"option\"]],[19,1,[\"isSelected\"]],[19,2,[]]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"li\"],[7],[0,\"\\n      \"],[6,\"label\"],[7],[0,\"\\n        \"],[1,[25,\"input\",null,[[\"type\",\"checked\",\"disabled\"],[\"checkbox\",[19,1,[\"isSelected\"]],[20,[\"disabled\"]]]]],false],[0,\"\\n        \"],[1,[19,1,[\"label\"]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[1,2]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/templates/components/multiselect-checkboxes.hbs" } });
});
define("mdeditor/templates/components/object-bin", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/xVlV0ok", "block": "{\"symbols\":[\"obj\",\"&default\"],\"statements\":[[4,\"draggable-object-target\",null,[[\"action\"],[\"handleObjectDropped\"]],{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"object-bin-title\"],[7],[1,[18,\"name\"],false],[8],[0,\"\\n  \"],[6,\"br\"],[7],[8],[0,\"\\n\"],[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[4,\"draggable-object\",null,[[\"action\",\"content\"],[\"handleObjectDragged\",[19,1,[]]]],{\"statements\":[[0,\"      \"],[11,2,[[19,1,[]]]],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/templates/components/object-bin.hbs" } });
});
define("mdeditor/templates/components/sortable-objects", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "KZ24WYpM", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/templates/components/sortable-objects.hbs" } });
});
define("mdeditor/templates/nav-secondary", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kYVVylS6", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"layout/md-nav-secondary\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "mdeditor/templates/nav-secondary.hbs" } });
});
define('mdeditor/templates/publish/sciencebase', ['exports', 'mdeditor-sciencebase/templates/publish/sciencebase'], function (exports, _sciencebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sciencebase.default;
    }
  });
});
define('mdeditor/themes/bootstrap3', ['exports', 'ember-models-table/themes/bootstrap3'], function (exports, _bootstrap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bootstrap.default;
    }
  });
});
define('mdeditor/themes/bootstrap4', ['exports', 'ember-models-table/themes/bootstrap4'], function (exports, _bootstrap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bootstrap.default;
    }
  });
});
define('mdeditor/themes/default', ['exports', 'ember-models-table/themes/default'], function (exports, _default) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _default.default;
    }
  });
});
define('mdeditor/themes/semanticui', ['exports', 'ember-models-table/themes/semanticui'], function (exports, _semanticui) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _semanticui.default;
    }
  });
});
define('mdeditor/togeojson', ['exports', 'npm:@mapbox/togeojson'], function (exports, _togeojson) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.toGeoJSON = undefined;
  exports.toGeoJSON = _togeojson.default;
});
define('mdeditor/transforms/json', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    inject, isArray, A
  } = Ember;

  exports.default = _emberData.default.Transform.extend({
    clean: inject.service('cleaner'),

    deserialize(serialized) {
      let json = JSON.parse(serialized);

      if (isArray(json)) {
        return A(json);
      }

      return Ember.Object.create(json);
    },

    serialize(deserialized) {
      let target = isArray(deserialized) ? [] : {};
      return JSON.stringify(this.get('clean').clean(deserialized, { target: target }));
    }

  });
});
define('mdeditor/transitions', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    this.transition(this.toRoute('record.show.edit.main.citation'), this.fromRoute('record.show.edit.main.index'), this.use('toLeft'), this.reverse('toRight')
    //,this.debug()
    );
    this.transition(this.toRoute('record.show.edit.main.citation.identifier'), this.fromRoute('record.show.edit.main.citation.index'), this.use('toLeft'), this.reverse('toRight')
    //,this.debug()
    );
    this.transition(this.toRoute('record.show.edit.metadata.identifier'), this.fromRoute('record.show.edit.metadata.index'), this.use('toLeft'), this.reverse('toRight')
    //,this.debug()
    );
    this.transition(this.toRoute('record.show.edit.metadata.alternate'), this.fromRoute('record.show.edit.metadata.index'), this.use('toLeft'), this.reverse('toRight')
    //,this.debug()
    );
    this.transition(this.toRoute('record.show.edit.metadata.alternate.identifier'), this.fromRoute('record.show.edit.metadata.alternate.index'), this.use('toLeft'), this.reverse('toRight')
    //,this.debug()
    );
    this.transition(this.toRoute('record.show.edit.metadata.parent'), this.fromRoute('record.show.edit.metadata.index'), this.use('toLeft'), this.reverse('toRight'));
    this.transition(this.toRoute('record.show.edit.metadata.parent.identifier'), this.fromRoute('record.show.edit.metadata.parent.index'), this.use('toLeft'), this.reverse('toRight'));
    this.transition(this.toRoute('record.show.edit.lineage.lineageobject'), this.fromRoute('record.show.edit.lineage.index'), this.use('toLeft'), this.reverse('toRight'));
    this.transition(this.toRoute('record.show.edit.lineage.lineageobject.citation'), this.fromRoute('record.show.edit.lineage.lineageobject.index'), this.use('toLeft'), this.reverse('toRight'));
    this.transition(this.toRoute('record.show.edit.lineage.lineageobject.citation.identifier'), this.fromRoute('record.show.edit.lineage.lineageobject.citation.index'), this.use('toLeft'), this.reverse('toRight'));
    this.transition(this.toRoute('record.show.edit.lineage.lineageobject.step'), this.fromRoute('record.show.edit.lineage.lineageobject.index'), this.use('toLeft'), this.reverse('toRight'));
    this.transition(this.toRoute('record.show.edit.lineage.lineageobject.step.citation'), this.fromRoute('record.show.edit.lineage.lineageobject.step.index'), this.use('toLeft'), this.reverse('toRight'));
    this.transition(this.toRoute('record.show.edit.associated.resource'), this.fromRoute('record.show.edit.associated.index'), this.use('toLeft'), this.reverse('toRight'));
    this.transition(this.toRoute('record.show.edit.documents.citation'), this.fromRoute('record.show.edit.documents.index'), this.use('toLeft'), this.reverse('toRight'));
    this.transition(this.toRoute('record.show.edit.funding.allocation'), this.fromRoute('record.show.edit.funding.index'), this.use('toLeft'), this.reverse('toRight'));
    this.transition(this.toRoute('record.show.edit.distribution.distributor'), this.fromRoute('record.show.edit.distribution.index'), this.use('toLeft'), this.reverse('toRight'));
    this.transition(this.toRoute('dictionary.show.edit.citation.identifier'), this.fromRoute('dictionary.show.edit.citation.index'), this.use('toLeft'), this.reverse('toRight'));
    //if
    // this.transition(
    //   this.hasClass('liquid-collapse'),
    //   this.includingInitialRender(),
    //   this.use('fade'),
    //   this.reverse('fade')
    // );
  };
});
define('mdeditor/transitions/cross-fade', ['exports', 'liquid-fire/transitions/cross-fade'], function (exports, _crossFade) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _crossFade.default;
    }
  });
});
define('mdeditor/transitions/default', ['exports', 'liquid-fire/transitions/default'], function (exports, _default) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _default.default;
    }
  });
});
define('mdeditor/transitions/explode', ['exports', 'liquid-fire/transitions/explode'], function (exports, _explode) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _explode.default;
    }
  });
});
define('mdeditor/transitions/fade', ['exports', 'liquid-fire/transitions/fade'], function (exports, _fade) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fade.default;
    }
  });
});
define('mdeditor/transitions/flex-grow', ['exports', 'liquid-fire/transitions/flex-grow'], function (exports, _flexGrow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexGrow.default;
    }
  });
});
define('mdeditor/transitions/fly-to', ['exports', 'liquid-fire/transitions/fly-to'], function (exports, _flyTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flyTo.default;
    }
  });
});
define('mdeditor/transitions/move-over', ['exports', 'liquid-fire/transitions/move-over'], function (exports, _moveOver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moveOver.default;
    }
  });
});
define('mdeditor/transitions/scale', ['exports', 'liquid-fire/transitions/scale'], function (exports, _scale) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _scale.default;
    }
  });
});
define('mdeditor/transitions/scroll-then', ['exports', 'liquid-fire/transitions/scroll-then'], function (exports, _scrollThen) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _scrollThen.default;
    }
  });
});
define('mdeditor/transitions/to-down', ['exports', 'liquid-fire/transitions/to-down'], function (exports, _toDown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toDown.default;
    }
  });
});
define('mdeditor/transitions/to-left', ['exports', 'liquid-fire/transitions/to-left'], function (exports, _toLeft) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toLeft.default;
    }
  });
});
define('mdeditor/transitions/to-right', ['exports', 'liquid-fire/transitions/to-right'], function (exports, _toRight) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toRight.default;
    }
  });
});
define('mdeditor/transitions/to-up', ['exports', 'liquid-fire/transitions/to-up'], function (exports, _toUp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toUp.default;
    }
  });
});
define('mdeditor/transitions/wait', ['exports', 'liquid-fire/transitions/wait'], function (exports, _wait) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _wait.default;
    }
  });
});
define('mdeditor/utils/config', ['exports', 'mdeditor-sciencebase/utils/config'], function (exports, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _config.default;
    }
  });
});
define('mdeditor/utils/fmt', ['exports', 'ember-models-table/utils/fmt'], function (exports, _fmt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fmt.default;
    }
  });
});
define('mdeditor/utils/functions', ['exports', 'ember-string-helpers/utils/functions'], function (exports, _functions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _functions.default;
    }
  });
});
define('mdeditor/utils/intl/missing-message', ['exports', 'ember-intl/utils/missing-message'], function (exports, _missingMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _missingMessage.default;
    }
  });
});
define('mdeditor/utils/sb-tree-node', ['exports', 'mdeditor-sciencebase/utils/sb-tree-node'], function (exports, _sbTreeNode) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sbTreeNode.default;
    }
  });
});
define('mdeditor/utils/titleize', ['exports', 'ember-cli-string-helpers/utils/titleize'], function (exports, _titleize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _titleize.default;
    }
  });
});
define('mdeditor/uuid', ['exports', 'npm:uuid/v4'], function (exports, _v) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.uuidV4 = undefined;
  exports.uuidV4 = _v.default;
});
define('mdeditor/validators/alias', ['exports', 'ember-cp-validations/validators/alias'], function (exports, _alias) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _alias.default;
    }
  });
});
define('mdeditor/validators/array-required', ['exports', 'ember-cp-validations/validators/base'], function (exports, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    assert,
    get,
    isArray
  } = Ember;

  const ArrayRequired = _base.default.extend({
    validate(value) {
      if (Ember.isArray(value)) {
        if (value.length) {
          return true;
        }
      }
      return 'At least one item is required.';
    }
  });

  ArrayRequired.reopenClass({
    /**
     * Define attribute specific dependent keys for your validator
     *
     * [
     * 	`model.array.@each.${attribute}` --> Dependent is created on the model's context
     * 	`${attribute}.isValid` --> Dependent is created on the `model.validations.attrs` context
     * ]
     *
     * @param {String}  attribute   The attribute being evaluated
     * @param {Unknown} options     Options passed into your validator
     * @return {Array}
     */
    getDependentsFor(attribute, options) {
      //return[];
      let track = [];
      let opts = get(options, 'track');

      assert(`[validator:array-valid] [${attribute}] option 'track' must be an array`, isArray(opts));

      opts.forEach(itm => {
        track.push(`model.${attribute}.@each.${itm}`);
      });

      return track;
    }
  });

  exports.default = ArrayRequired;
});
define('mdeditor/validators/array-valid', ['exports', 'ember-cp-validations/validators/base'], function (exports, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    get
  } = Ember;

  const ArrayValid = _base.default.extend({
    validate(value /*, options, model, attribute*/) {
      let check = value.some(itm => {
        return get(itm, 'validations.isInvalid');
      });
      return check ? 'At least one item is invalid.' : true;
    }
  });

  ArrayValid.reopenClass({
    /**
     * Define attribute specific dependent keys for your validator
     *
     * [
     * 	`model.array.@each.${attribute}` --> Dependent is created on the model's context
     * 	`${attribute}.isValid` --> Dependent is created on the `model.validations.attrs` context
     * ]
     *
     * @param {String}  attribute   The attribute being evaluated
     * @param {Unknown} options     Options passed into your validator
     * @return {Array}
     */
    getDependentsFor(attribute /*, options */) {
      return [`model.${attribute}.@each`];
    }
  });

  exports.default = ArrayValid;
});
define('mdeditor/validators/belongs-to', ['exports', 'ember-cp-validations/validators/belongs-to'], function (exports, _belongsTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _belongsTo.default;
    }
  });
});
define('mdeditor/validators/collection', ['exports', 'ember-cp-validations/validators/collection'], function (exports, _collection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _collection.default;
    }
  });
});
define('mdeditor/validators/confirmation', ['exports', 'ember-cp-validations/validators/confirmation'], function (exports, _confirmation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _confirmation.default;
    }
  });
});
define('mdeditor/validators/date', ['exports', 'ember-cp-validations/validators/date'], function (exports, _date) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _date.default;
    }
  });
});
define('mdeditor/validators/dependent', ['exports', 'ember-cp-validations/validators/dependent'], function (exports, _dependent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dependent.default;
    }
  });
});
define('mdeditor/validators/ds-error', ['exports', 'ember-cp-validations/validators/ds-error'], function (exports, _dsError) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dsError.default;
    }
  });
});
define('mdeditor/validators/exclusion', ['exports', 'ember-cp-validations/validators/exclusion'], function (exports, _exclusion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _exclusion.default;
    }
  });
});
define('mdeditor/validators/format', ['exports', 'ember-cp-validations/validators/format'], function (exports, _format) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _format.default;
    }
  });
});
define('mdeditor/validators/has-many', ['exports', 'ember-cp-validations/validators/has-many'], function (exports, _hasMany) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasMany.default;
    }
  });
});
define('mdeditor/validators/inclusion', ['exports', 'ember-cp-validations/validators/inclusion'], function (exports, _inclusion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inclusion.default;
    }
  });
});
define('mdeditor/validators/length', ['exports', 'ember-cp-validations/validators/length'], function (exports, _length) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _length.default;
    }
  });
});
define('mdeditor/validators/messages', ['exports', 'ember-cp-validations/validators/messages'], function (exports, _messages) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _messages.default;
    }
  });
});
define('mdeditor/validators/number', ['exports', 'ember-cp-validations/validators/number'], function (exports, _number) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _number.default;
    }
  });
});
define('mdeditor/validators/presence', ['exports', 'ember-cp-validations/validators/presence'], function (exports, _presence) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _presence.default;
    }
  });
});
define('mdeditor/views/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});


define('mdeditor/config/environment', [], function() {
  var prefix = 'mdeditor';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("mdeditor/app")["default"].create({"repository":"https://github.com/adiwg/mdEditor","name":"mdeditor","version":"0.0.0+1a01fbb8"});
}
//# sourceMappingURL=mdeditor.map
