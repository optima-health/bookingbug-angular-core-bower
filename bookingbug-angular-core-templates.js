angular.module("BB").run(["$templateCache", function($templateCache) {$templateCache.put("accordion-group.html","<div role=\"tab\" id=\"{{::headingId}}\" aria-selected=\"{{isOpen}}\"\n  class=\"panel-heading\">\n  <h4 class=\"panel-title\">\n    <div role=\"button\" ng-keypress=\"toggleOpen()\" data-toggle=\"collapse\" aria-expanded=\"{{isOpen}}\"\n      aria-controls=\"{{::panelId}}\" tabindex=\"0\" class=\"accordion-toggle\"\n      ng-click=\"toggleOpen()\" uib-accordion-transclude=\"heading\"\n      ng-disabled=\"isDisabled\" ng-attr-tabindex=\"{{$parent.has_availability ? true : -1}}\"><span uib-accordion-header\n      ng-class=\"{\'text-muted\': isDisabled}\">{{heading}}</span></div>\n  </h4>\n</div>\n<div id=\"{{::panelId}}\" aria-labelledby=\"{{::headingId}}\" aria-hidden=\"{{!isOpen}}\" role=\"tabpanel\" class=\"panel-collapse collapse\" uib-collapse=\"!isOpen\">\n  <div class=\"panel-body\" ng-transclude></div>\n</div>");
$templateCache.put("bb_date_time_picker.html","<div class=\"row bb-date-picker\">\n  <div ng-class=\"{\'col-sm-7\': !dateOnly, \'col-sm-12\': dateOnly}\">\n    <div class=\"input-group\">\n      <input type=\"text\" ng-model=\"datetimeWithNoTz\" class=\"form-control\"\n        uib-datepicker-popup=\"{{format}}\"\n        is-open=\"opened\"\n        datepicker-options=\"{\'startingDay\': 1, \'showButtonBar\': false, \'maxDate\': maxDateClean, \'minDate\': minDateClean}\"\n        show-button-bar=\"false\"\n        ng-disabled=\"bbDisabled\"\n        ng-focus=\"opened=true\"\n      />\n      <span class=\"input-group-btn\" ng-click=\"$event.preventDefault(); $event.stopPropagation(); opened=!opened;\">\n        <button class=\"btn btn-default\" title=\"Select date\"><span class=\"fa fa-calendar\"></span></button>\n      </span>\n    </div>\n  </div>\n  <div class=\"col-sm-5\" ng-show=\"!dateOnly\">\n    <div uib-timepicker ng-model=\"datetimeWithNoTz\" show-meridian=\"showMeridian\"\n      minute-step=\"minuteStep\" max=\"maxDateClean\" min=\"minDateClean\" readonly-input=\"bbDisabled\"></div>\n  </div>\n</div>\n");
$templateCache.put("bootstrap_ui_datetime_form.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError(), \'has-success\': !hasError()}\">\n	<label class=\"control-label\">{{form.title}}</label>\n  <input ng-if=\"form.readonly\" ng-show=\"form.key\" type=\"text\" placeholder=\"\" class=\"form-control\" id=\"datetime\" value=\"{{model.datetime  | datetime: \'llll\'}}\" ng-disabled=\"form.readonly\" name=\"datetime\" disabled=\"disabled\"/>\n  <div class=\"input-group\" ng-if=\"!form.readonly\">\n   	<div bb-date-time-picker  date=\"$$value$$\"  bb-disabled=\"form.readonly\" ></div>\n	</div>\n\n  <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\n</div>\n");
$templateCache.put("bootstrap_ui_time_form.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError()}\">\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n\n  <div uib-timepicker ng-model=\"$$value$$\" show-meridian=\"false\"></div>\n\n  <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\n</div>\n");
$templateCache.put("date_form.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError()}\">\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n\n  <input ng-if=\"form.readonly\" ng-show=\"form.key\" type=\"text\" placeholder=\"\" class=\"form-control\" id=\"datetime\" value=\"{{model.datetime  | datetime: \'LL\'}}\" ng-disabled=\"form.readonly\" name=\"datetime\" disabled=\"disabled\"/>\n\n  <p class=\"input-group\" ng-if=\"!form.readonly\">\n    <div bb-date-time-picker date-only=\"true\" date=\"$$value$$\" ></div>\n  </p>\n\n  <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\n</div>\n");
$templateCache.put("dialog.html","<div class=\"modal-header\">\n  <h3 class=\"modal-title\">{{title}}</h3>\n</div>\n<div class=\"modal-body\">{{body}}</div>\n<div class=\"modal-footer\">\n  <button class=\"btn btn-primary\" ng-click=\"ok()\"><span translate=\"COMMON.BTN.YES\"></span></button>\n  <button class=\"btn btn-default\" ng-click=\"cancel()\"><span translate=\"COMMON.BTN.NO\"></span></button>\n</div>\n");
$templateCache.put("file_upload.html","<!-- label -->\n<label for=\"file_upload\" class=\"control-label col-sm-4\">\n    File upload:\n    <p ng-show=\"maxSize\">should be smaller then {{maxSize}}</p>\n</label>\n\n<div class=\"col-sm-5\">\n\n  <!-- upload button -->\n  <button\n    type=\"file\"\n    class=\"btn btn-secondary\"\n    ngf-max-size=\"{{maxSize}}\"\n    ngf-accept=\"{{accept}}\"\n    ngf-model-invalid=\"errorFile\"\n    ngf-select=\"uploadFile(item, $file, $invalidFiles, item.attachment_id)\">\n      Select File\n  </button>\n\n  <!-- progress -->\n  <div class=\"progress\"\n    ng-show=\"my_file.progress >= 0 && my_file.progress < 100\">\n    <div\n      class=\"progress-bar\"\n      role=\"progressbar\"\n      aria-valuenow=\"{{my_file.progress}}\"\n      aria-valuemin=\"0\"\n      aria-valuemax=\"100\"\n      style=\"width:{{my_file.progress}}%\">\n    </div>\n  </div>\n\n  <!-- attachment -->\n  <div ng-if=\"item.attachment_id\">\n    Currently uploaded file:\n    <a ng-href=\"{{item.getAttachment().url}}\">\n      {{my_file.name}}\n    </a>\n    <span class=\"btn btn-link\" ng-click=\"item.deleteAttachment() && clearFileInput()\">\n      <i class=\"fa fa-times\"></i>\n      <span class=\"sr-only\">Delete</span>\n    </span>\n  </div>\n\n</div>\n\n<!-- messages -->\n<div class=\"col-sm-3 messages\">\n  <p class=\"text-danger\" ng-show=\"show_error\">\n    Upload failed\n  </p>\n  <p class=\"text-danger\" ng-show=\"err_file\">\n    The file should be no bigger than {{err_file.$errorParam}}\n  </p>\n  <p class=\"text-danger\" ng-show=\"file_type_error\">\n    The file must be one the following file types: <b>{{prettyAccept}}</b>\n  </p>\n</div>\n\n");
$templateCache.put("modal_form.html","<div class=\"modal-header\">\n  <h3 class=\"modal-title\">{{title}}</h3>\n</div>\n<form name=\"modal_form\" ng-submit=\"submit(modal_form)\">\n  <div ng-show=\"loading\" class=\"loader\"></div>\n  <div class=\"modal-body\" sf-schema=\"schema\" sf-form=\"form\"\n    sf-model=\"form_model\" sf-options=\"{formDefaults: {feedback: false}}\"\n    ng-hide=\"loading\">\n  </div>\n  <div class=\"modal-footer\">\n    <input type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"loading\" value=\"OK\">\n    <button class=\"btn btn-default\" ng-click=\"cancel($event)\">Cancel</button>\n  </div>\n</form>\n");
$templateCache.put("price_form.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError()}\">\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n\n  <div pricepicker ng-model=\"$$value$$\" currency=\"{{form.currency}}\"></div>\n\n  <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\n</div>\n");
$templateCache.put("radio-buttons.html","<div class=\"form-group schema-form-radiobuttons {{form.htmlClass}}\"\n     ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\">\n  <div>\n    <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n  </div>\n  <div class=\"btn-group\">\n    <label class=\"btn {{ (item.value === $$value$$) ? form.style.selected || \'btn-default\' : form.style.unselected || \'btn-default\'; }}\"\n           ng-class=\"{ active: item.value === $$value$$ }\"\n           ng-repeat=\"item in form.titleMap\">\n      <input type=\"radio\"\n             class=\"{{form.fieldHtmlClass}}\"\n             sf-changed=\"form\"\n             style=\"display: none;\"\n             ng-disabled=\"form.readonly\"\n             ng-model=\"$$value$$\"\n             ng-model-options=\"form.ngModelOptions\"\n             ng-value=\"item.value\"\n             name=\"{{form.key.join(\'.\')}}\">\n      <span ng-bind-html=\"item.name\"></span>\n    </label>\n  </div>\n  <div class=\"help-block\" ng-show=\"form.description\" ng-bind-html=\"form.description\"></div>\n</div>\n");
$templateCache.put("radios-inline.html","<div class=\"form-group schema-form-radios-inline {{form.htmlClass}}\"\n     ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\">\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n  <div>\n      <label class=\"radio-inline\" ng-repeat=\"item in form.titleMap\" >\n      <input type=\"radio\"\n             class=\"{{form.fieldHtmlClass}}\"\n             sf-changed=\"form\"\n             ng-disabled=\"form.readonly\"\n             ng-model=\"$$value$$\"\n             ng-value=\"item.value\"\n             name=\"{{form.key.join(\'.\')}}\">\n      <span ng-bind-html=\"item.name\"></span>\n    </label>\n  </div>\n  <div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div>\n</div>\n");
$templateCache.put("radios.html","<div class=\"form-group schema-form-radios {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\">\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n  <div class=\"radio\" ng-repeat=\"item in form.titleMap\" >\n    <label>\n      <input type=\"radio\"\n             class=\"{{form.fieldHtmlClass}}\" \n             sf-changed=\"form\"\n             ng-disabled=\"form.readonly\"\n             ng-model=\"$$value$$\"\n             ng-model-options=\"form.ngModelOptions\"\n             ng-value=\"item.value\"\n             name=\"{{form.key.join(\'.\')}}\">\n      <span ng-bind-html=\"item.name\"></span>\n    </label>\n  </div>\n  <div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div>\n</div>\n");
$templateCache.put("i18n/language_picker.html","<ui-select id=\"language-picker\" ng-model=\"vm.language.selected\" theme=\"bootstrap\"\n           ng-change=\"vm.pickLanguage(vm.language.selected.identifier)\" search-enabled=\"vm.enableSearch\">\n  <ui-select-match placeholder=\"{{ \'Select...\' | translate }}\"><span translate=\"{{$select.selected.label}}\"></span></ui-select-match>\n  <ui-select-choices repeat=\"lang in vm.availableLanguages | props: { label: $select.search}\">\n    <div ng-bind-html=\"lang.label | translate | highlight: $select.search\"></div>\n  </ui-select-choices>\n</ui-select>");}]);