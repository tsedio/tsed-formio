function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o])}return e},i.apply(this,arguments)}function s(e){var n,l="";if(e.mode.autocomplete){l+=`
  <div class="address-autocomplete-container">
    <input
      ref="`+((n=e.ref.searchInput)==null?"":n)+`"
      `;for(var o in e.inputAttributes)l+=`
        `+((n=o)==null?"":n)+'="'+((n=e.inputAttributes[o])==null?"":n)+`"
      `;l+=`
      value="`+((n=e.displayValue)==null?"":n)+`"
      autocomplete="off"
      aria-label="`+((n=e.t("autocomplete"))==null?"":n)+`"
    >
    `,e.component.disableClearIcon||(l+=`
      <i
        class="address-autocomplete-remove-value-icon fa fa-times"
        tabindex="`+((n=e.inputAttributes.tabindex)==null?"":n)+`"
        ref="`+((n=e.ref.removeValueIcon)==null?"":n)+`"
      ></i>
    `),l+=`
  </div>
`}return l+=`
`,e.self.manualModeEnabled&&(l+=`
  <div class="form-check checkbox">
    <label class="form-check-label">
      <input
        ref="`+((n=e.ref.modeSwitcher)==null?"":n)+`"
        type="checkbox"
        class="form-check-input"
        tabindex="`+((n=e.inputAttributes.tabindex)==null?"":n)+`"
        `,e.mode.manual&&(l+="checked=true"),l+=`
        `,e.disabled&&(l+="disabled=true"),l+=`
      >
      <span>`+((n=e.component.switchToManualModeLabel)==null?"":n)+`</span>
    </label>
  </div>
`),l+=`
`,e.self.manualMode&&(l+=`
  <div ref="`+((n=e.nestedKey)==null?"":n)+`">
    `+((n=e.children)==null?"":n)+`
  </div>
`),l+=`
`,l}var u={form:s};function d(e){var n,l="";l+=`<div
  `;for(var o in e.attrs)l+=`
    `+((n=o)==null?"":n)+'="'+((n=e.attrs[o])==null?"":n)+`"
  `;return l+=`
>
  `+((n=e.message)==null?"":n)+`
  `,e.options.vpat&&(l+=`
    <span class="sr-only" id="hotkey-i-`+((n=e.form._id)==null?"":n)+'">'+((n=e.t("errorListHotkey"))==null?"":n)+`</span>
  `),l+=`
</div>
`,l}var p={form:d};function f(e){var n,l="";return l+=`<div class="formio builder grid grid-cols-12 gap-4 formbuilder">
  <div class="col-span-12 xs:col-span-4 sm:col-span-3 md:col-span-2 formcomponents">
    `+((n=e.sidebar)==null?"":n)+`
  </div>
  <div class="col-span-12 xs:col-span-8 sm:col-span-9 md:col-span-10 formarea" ref="form">
    `+((n=e.form)==null?"":n)+`
  </div>
</div>
`,l}var b={form:f};function m(e){var n,l="";return l+=`<div class="builder-component" ref="dragComponent">
  `,e.disableBuilderActions||(l+=`
    <div class="component-btn-group" data-noattach="true">
      <button
        role="button"
        aria-label="Remove button. Click to remove component from the form"
        tabindex="-1"
        class="btn btn-xxs btn-danger component-settings-button component-settings-button-remove"
        ref="removeComponent"
      >
        <i class="`+((n=e.iconClass("remove"))==null?"":n)+`"></i>
      </button>
      <button
        role="button"
        aria-label="Copy button. Click to copy component"
        tabindex="-1"
        class="btn btn-xxs btn-default component-settings-button component-settings-button-copy"
        ref="copyComponent"
      >
        <i class="`+((n=e.iconClass("copy"))==null?"":n)+`"></i>
      </button>
      <button
        role="button"
        aria-label="Paste below button. Click to paste component below the current component"
        tabindex="-1"
        class="btn btn-xxs btn-default component-settings-button component-settings-button-paste"
        ref="pasteComponent"
      >
        <i class="`+((n=e.iconClass("save"))==null?"":n)+`"></i>
      </button>
      <button
        role="button"
        aria-label="Edit json button. Click to edit json of the current component"
        tabindex="-1"
        class="btn btn-xxs btn-default component-settings-button component-settings-button-edit-json"
        ref="editJson"
      >
        <i class="`+((n=e.iconClass("wrench"))==null?"":n)+`"></i>
      </button>
      <button
        role="button"
        aria-label="Move button"
        tabindex="-1"
        class="btn btn-xxs btn-default component-settings-button component-settings-button-move"
        ref="moveComponent"
      >
        <i class="`+((n=e.iconClass("move"))==null?"":n)+`"></i>
      </button>
      <button
        role="button"
        aria-label="Edit button. Click to open component settings modal window"
        tabindex="-1"
        class="btn btn-xxs btn-secondary component-settings-button component-settings-button-edit"
        ref="editComponent"
      >
        <i class="`+((n=e.iconClass("cog"))==null?"":n)+`"></i>
      </button>
    </div>
  `),l+=`
  `+((n=e.html)==null?"":n)+`
</div>
`,l}var v={form:m};function c(e){var n,l="";return l+='<div class="builder-components drag-container formio-builder-'+((n=e.type)==null?"":n)+'" ref="'+((n=e.key)==null?"":n)+`-container">
  `+((n=e.html)==null?"":n)+`
</div>
`,l}var g={form:c};function h(e){var n,l="";return l+=`<div class="flex flex-col w-full h-full">
  <div>
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-6">
        <div class="text-md px-3 py-3">
          `+((n=e.t(e.componentInfo.title,{_userInput:!0}))==null?"":n)+`
          `+((n=e.t("Component"))==null?"":n)+`
        </div>
      </div>
      `,e.helplinks&&(l+=`
      <div class="col-span-6 flex justify-end items-center pr-15">
        <a class="reset-link inline-flex items-center text-secondary text-decoration-none hover:text-primary"
           href="`+((n=e.t(e.helplinks+e.componentInfo.documentation))==null?"":n)+`" target="_blank">
          <i class="`+((n=e.iconClass("new-window"))==null?"":n)+' mr-1"></i> '+((n=e.t("Help"))==null?"":n)+`
        </a>
      </div>
      `),l+=`
    </div>
  </div>
  <div class="overflow-auto flex-1 p-3 pt-0" style="max-height: calc(90vh - 95px)">
    <div class="grid grid-cols-12 gap-4">
      <div class="`,e.preview?l+="col-span-12 sm:col-span-6":l+="col-span-12",l+=`">
        <div ref="editForm">
          `+((n=e.editForm)==null?"":n)+`
        </div>
      </div>
      `,e.preview&&(l+=`
      <div class="col-span-12 sm:col-span-6">
        <div class="card panel preview-panel">
          <div class="card-header">
            <div class="text-sm">`+((n=e.t("Preview"))==null?"":n)+`</div>
          </div>
          <div class="card-body">
            <div class="component-preview" ref="preview">
              `+((n=e.preview)==null?"":n)+`
            </div>
          </div>
        </div>
        `,e.componentInfo.help&&(l+=`
        <div class="card card-body bg-light formio-settings-help">
          `+((n=e.t(e.componentInfo.help))==null?"":n)+`
        </div>
        `),l+=`
      </div>
      `),l+=`
    </div>
  </div>
  <div class="bg-white p-2 flex justify-center">
    <button class="btn btn-primary mx-2" ref="saveButton">
      `+((n=e.t("Save"))==null?"":n)+`
    </button>
    <button class="btn btn-dark mx-2" ref="cancelButton">
      `+((n=e.t("Cancel"))==null?"":n)+`
    </button>
    <button class="btn btn-danger mx-2" ref="removeButton">
      <i class="`+((n=e.iconClass("remove"))==null?"":n)+` sm:mr-2"></i>
      <span class="hidden sm:inline">`+((n=e.t("Remove"))==null?"":n)+`</span>
    </button>
  </div>
</div>


`,l}var _={form:h};function y(e){var n,l="";return l+=`<div
  class="drag-and-drop-alert alert alert-info no-drag"
  style="text-align:center;"
  role="alert"
  data-noattach="true"
  data-position="`+((n=e.position)==null?"":n)+`"
>
  `+((n=e.t("Drag and Drop a form component"))==null?"":n)+`
</div>
`,l}var w={form:y};function k(e){var n,l="";return l+='<div id="'+((n=e.groupId)==null?"":n)+'" class="accordion builder-sidebar'+((n=e.scrollEnabled?" builder-sidebar_scroll":"")==null?"":n)+`" ref="sidebar">
  <input class="form-control builder-sidebar_search" type="search" ref="sidebar-search" placeholder="Search field(s)" />
  <div ref="sidebar-groups">
    `,e.groups.forEach(function(o){l+=`
      `+((n=o)==null?"":n)+`
    `}),l+=`
  </div>
</div>
`,l}var C={form:k};function $(e){var n,l="";return l+='<div class="card form-builder-panel" ref="group-panel-'+((n=e.groupKey)==null?"":n)+`">
  <div class="card-header form-builder-group-header" id="heading-`+((n=e.groupKey)==null?"":n)+`">
    <h5 class="mb-0 mt-0">
      <button
        class="btn btn-block builder-group-button"
        type="button"
        data-toggle="collapse"
        data-target="#group-`+((n=e.groupKey)==null?"":n)+`"
        data-parent="#`+((n=e.groupId)==null?"":n)+`"
        aria-expanded="`+((n=e.group.default)==null?"":n)+`"
        aria-controls="group-`+((n=e.groupKey)==null?"":n)+`"
        ref="sidebar-anchor"
      >
        `+((n=e.t(e.group.title))==null?"":n)+`
      </button>
    </h5>
  </div>
  <div
    id="group-`+((n=e.groupKey)==null?"":n)+`"
    class="collapse `+((n=e.group.default?" show":"")==null?"":n)+`"
    data-parent="#`+((n=e.groupId)==null?"":n)+`"
    data-default="`+((n=e.group.default)==null?"":n)+`"
    aria-labelledby="heading-`+((n=e.groupKey)==null?"":n)+`"
    ref="sidebar-group"
  >
    <div id="group-container-`+((n=e.groupKey)==null?"":n)+`" class="card-body no-drop p-2" ref="sidebar-container">
      `,e.group.componentOrder.length||e.subgroups.length?(l+=`
        `,!e.group.componentOrder||e.group.componentOrder.forEach(function(o){l+=`
          <span
            data-group="`+((n=e.groupKey)==null?"":n)+`"
            data-key="`+((n=e.group.components[o].key)==null?"":n)+`"
            data-type="`+((n=e.group.components[o].schema.type)==null?"":n)+`"
            class="btn btn-primary btn-sm btn-block formcomponent drag-copy"
          >
            `,e.group.components[o].icon&&(l+=`
              <i class="`+((n=e.iconClass(e.group.components[o].icon))==null?"":n)+`" style="margin-right: 5px;"></i>
            `),l+=`
            `+((n=e.t(e.group.components[o].title,{_userInput:!0}))==null?"":n)+`
          </span>
        `}),l+=`
        `+((n=e.subgroups.join(""))==null?"":n)+`
      `):l+=`
        <div>`+((n=e.t("No Matches Found"))==null?"":n)+`</div>
      `,l+=`
    </div>
  </div>
</div>
`,l}var I={form:$};function z(e){var n,l="";return l+=`<div class="formio builder grid grid-cols-12 gap-4 formbuilder">
  <div class="col-span-12 xs:col-span-4 sm:col-span-3 md:col-span-2 formcomponents">
    `+((n=e.sidebar)==null?"":n)+`
  </div>
  <div class="col-span-12 xs:col-span-8 sm:col-span-9 md:col-span-10 formarea">
    <ol class="breadcrumb bg-gray-200">
      `,e.pages.forEach(function(o,a){l+=`
      <li class="text-gray-500">
        <span title="`+((n=o.title)==null?"":n)+'" class="mr-2 badge ',a===e.self.page?l+="bg-primary":l+="bg-light",l+=' wizard-page-label" ref="gotoPage">'+((n=o.title)==null?"":n)+`</span>
      </li>
      `}),l+=`
      <li class="text-gray-500 pl-2">
        <span title="`+((n=e.t("Create Page"))==null?"":n)+`" class="mr-2 badge bg-secondary wizard-page-label" ref="addPage">
          <i class="`+((n=e.iconClass("plus"))==null?"":n)+' mr-1"></i> '+((n=e.t("Page"))==null?"":n)+`
        </span>
      </li>
    </ol>
    <div ref="form">
      `+((n=e.form)==null?"":n)+`
    </div>
  </div>
</div>
`,l}var E={form:z};function R(e){var n,l="";l+="<"+((n=e.input.type)==null?"":n)+`
  ref="button"
  `;for(var o in e.input.attr)l+=`
  `+((n=o)==null?"":n)+'="'+((n=e.input.attr[o])==null?"":n)+`"
  `;return l+=`
  `,e.component.description&&(l+=`
    aria-describedby="d-`+((n=e.instance.id)==null?"":n)+"-"+((n=e.component.key)==null?"":n)+`"
  `),l+=`
>
`,e.component.leftIcon&&(l+='<span class="'+((n=e.component.leftIcon)==null?"":n)+'"></span>&nbsp;'),l+=`
`,e.input.content&&(l+="<span>"+((n=e.input.content)==null?"":n)+"</span> "),l+=`
`,e.component.tooltip&&(l+=`
  <i ref="tooltip" class="`+((n=e.iconClass("question-sign"))==null?"":n)+' text-muted" data-tooltip="'+((n=e.component.tooltip)==null?"":n)+`"></i>
`),l+=`
`,e.component.rightIcon&&(l+='&nbsp;<span class="'+((n=e.component.rightIcon)==null?"":n)+'"></span>'),l+=`
</`+((n=e.input.type)==null?"":n)+`>
<div ref="buttonMessageContainer">
  <span class="help-block" ref="buttonMessage"></span>
</div>
`,l}function P(e){var n="";return n+=`
`,n}var q={form:R,html:P};function L(e){var n,l="";l+=`<div class="form-check checkbox">
  <label class="`+((n=e.input.labelClass)==null?"":n)+` form-check-label">
    <`+((n=e.input.type)==null?"":n)+`
      ref="input"
      `;for(var o in e.input.attr)l+=`
      `+((n=o)==null?"":n)+'="'+((n=e.input.attr[o])==null?"":n)+`"
      `;return l+=`
      `,e.checked&&(l+="checked=true"),l+=`
      aria-required="`+((n=e.component.validate.required)==null?"":n)+`"
      `,e.component.description&&(l+=`
      aria-describedby="d-`+((n=e.instance.id)==null?"":n)+"-"+((n=e.component.key)==null?"":n)+`"
      `),l+=`
      >
    `,e.self.labelIsHidden()||(l+="<span>"+((n=e.input.label)==null?"":n)+"</span>"),l+=`
    `,e.component.tooltip&&(l+=`
      <i ref="tooltip" tabindex="0" class="`+((n=e.iconClass("question-sign"))==null?"":n)+' text-muted" data-tooltip="'+((n=e.component.tooltip)==null?"":n)+`"></i>
    `),l+=`
    `+((n=e.input.content)==null?"":n)+`
    </`+((n=e.input.type)==null?"":n)+`>
  </label>
</div>
`,l}function A(e){var n,l="";return l+='<label class="'+((n=e.input.labelClass)==null?"":n)+`">
    `+((n=e.input.content)==null?"":n)+`
    `,e.self.labelIsHidden()||(l+="<span>"+((n=e.input.label)==null?"":n)+"</span>"),l+=`
</label>
<div ref="value">`,e.checked?l+="True":l+="False",l+=`</div>
`,l}var K={form:L,html:A};function N(e){var n,l="";return e.component.columns.forEach(function(o,a){l+=`
<div class="
    col-`+((n=o.size)==null?"":n)+"-"+((n=o.currentWidth||o.width)==null?"":n)+`
    col-`+((n=o.size)==null?"":n)+"-offset-"+((n=o.offset)==null?"":n)+`
    col-`+((n=o.size)==null?"":n)+"-push-"+((n=o.push)==null?"":n)+`
    col-`+((n=o.size)==null?"":n)+"-pull-"+((n=o.pull)==null?"":n)+`
  " ref="`+((n=e.columnKey)==null?"":n)+`">
  `+((n=e.columnComponents[a])==null?"":n)+`
</div>
`}),l+=`
`,l}var T={form:N};function S(e){var n,l="";return l+='<div id="'+((n=e.id)==null?"":n)+'" class="'+((n=e.classes)==null?"":n)+'"',e.styles&&(l+=' styles="'+((n=e.styles)==null?"":n)+'"'),l+=` ref="component">
  `,e.visible&&(l+=`
  `+((n=e.children)==null?"":n)+`
  <div ref="messageContainer" class="formio-errors invalid-feedback"></div>
  `),l+=`
</div>
`,l}var M={form:S};function O(e){var n,l="";return l+='<div class="formio-component-modal-wrapper formio-component-modal-wrapper-'+((n=e.component.type)==null?"":n)+`" ref="componentModalWrapper">
  <div ref="openModalWrapper"></div>
  <div class="formio-dialog formio-dialog-theme-default component-rendering-hidden" ref="modalWrapper">
    <div class="formio-dialog-overlay" ref="modalOverlay"></div>
    <div class="formio-dialog-content" aria-labelledby="ml-`+((n=e.instance.id)==null?"":n)+"-"+((n=e.component.key)==null?"":n)+'" ',e.self.isIE()||(l+=' role="dialog" '),l+=` ref="modalContents">
      <label class="sr-only" id="ml-`+((n=e.instance.id)==null?"":n)+"-"+((n=e.component.key)==null?"":n)+'">'+((n=e.t(e.component.label))==null?"":n)+((n=e.self.isIE()?", dialog":"")==null?"":n)+`</label>
      `,e.options.vpat?l+=`
      <button class="formio-dialog-close float-right" title="Close" aria-label="Close button. Click to get back to the form" ref="modalCloseButton"></button>
      `:l+=`
      <button class="formio-dialog-close float-right btn btn-secondary btn-sm" aria-label="Close button. Click to get back to the form" ref="modalClose"></button>
      `,l+=`
      <div ref="modalContents">
        `,e.visible&&(l+=`
        `+((n=e.children)==null?"":n)+`
        `),l+=`
        <div class="formio-dialog-buttons">
          `,e.options.vpat&&(l+=`
          <button class="btn btn-secondary formio-dialog-button" aria-label="Cancel button. Click to cancel the changes and get back to the form." ref="modalClose">`+((n=e.t("Cancel"))==null?"":n)+`</button>
          `),l+=`
          <button class="btn btn-success formio-dialog-button" ref="modalSave" aria-label="Save button. Click to save the changes and get back to the form.">`+((n=e.t("Save"))==null?"":n)+`</button>
        </div>
      </div>
    </div>
    <span class="sr-only" ref="modalLiveRegion" aria-live="assertive"></span>
  </div>
</div>
`,l}var B={form:O};function H(e){var n,l="";return l+=((n=e.children.join(""))==null?"":n)+`
`,l}var F={form:H};function D(e){var n,l="";return l+='<div ref="'+((n=e.nestedKey)==null?"":n)+`">
  `+((n=e.children)==null?"":n)+`
</div>
`,l}var j={form:D},V={"border-default":"","formio-tab-panel-active":"active","formio-tab-link-active":"active","formio-tab-link-container-active":"active"};function W(e){var n,l="";return l+=`<table class="table datagrid-table table-bordered
    `+((n=e.component.striped?"table-striped":"")==null?"":n)+`
    `+((n=e.component.hover?"table-hover":"")==null?"":n)+`
    `+((n=e.component.condensed?"table-sm":"")==null?"":n)+`
    " `,e.component.layoutFixed&&(l+='style="table-layout: fixed;"'),l+=`>
  `,e.hasHeader&&(l+=`
  <thead>
    <tr>
      `,e.component.reorder&&(l+="<th></th>"),l+=`
      `,e.columns.forEach(function(o){l+=`
        <th class="`+((n=o.validate&&o.validate.required?"field-required":"")==null?"":n)+`">
          `+((n=o.hideLabel?"":e.t(o.label||o.title,{_userInput:!0}))==null?"":n)+`
          `,o.tooltip&&(l+=' <i ref="tooltip" tabindex="0" data-title="'+((n=o.tooltip)==null?"":n)+'" class="'+((n=e.iconClass("question-sign"))==null?"":n)+' text-muted" data-tooltip="'+((n=o.tooltip)==null?"":n)+'"></i>'),l+=`
        </th>
      `}),l+=`
      `,e.hasExtraColumn&&(l+=`
      <th>
        <span class="sr-only">`+((n=e.t("Add/Remove"))==null?"":n)+`</span>
        `,!e.builder&&e.hasAddButton&&e.hasTopSubmit&&(l+=`
        <button class="btn btn-primary formio-button-add-row" ref="`+((n=e.datagridKey)==null?"":n)+'-addRow" tabindex="'+((n=e.tabIndex)==null?"":n)+`">
          <i class="`+((n=e.iconClass("plus"))==null?"":n)+'"></i>'+((n=e.t(e.component.addAnother||"Add Another",{_userInput:!0}))==null?"":n)+`
        </button>
        `),l+=`
      </th>
      `),l+=`
    </tr>
  </thead>
  `),l+=`
  <tbody ref="`+((n=e.datagridKey)==null?"":n)+'-tbody" data-key="'+((n=e.datagridKey)==null?"":n)+`">
    `,e.rows.forEach(function(o,a){l+=`
    `,e.hasGroups&&e.groups[a]&&(l+=`
    <tr ref="`+((n=e.datagridKey)==null?"":n)+'-group-header" class="datagrid-group-header'+((n=e.hasToggle?" clickable":"")==null?"":n)+`">
      <td
        ref="`+((n=e.datagridKey)==null?"":n)+`-group-label"
        colspan="`+((n=e.numColumns)==null?"":n)+`"
        class="datagrid-group-label">`+((n=e.groups[a].label)==null?"":n)+`</td>
    </tr>
    `),l+=`
    <tr ref="`+((n=e.datagridKey)==null?"":n)+`-row">
      `,e.component.reorder&&(l+=`
        <td class="align-middle">
          <button type="button" class="formio-drag-button btn btn-sm btn-light `+((n=e.iconClass("bars"))==null?"":n)+'" data-key="'+((n=e.datagridKey)==null?"":n)+`"></button>
        </td>
      `),l+=`
      `,e.columns.forEach(function(r){l+=`
        <td ref="`+((n=e.datagridKey)==null?"":n)+'" ',r.key&&r.overlay&&r.overlay.width&&(l+=' style="width: '+((n=r.overlay.width+"px")==null?"":n)+'"'),l+=` >
          `+((n=o[r.key])==null?"":n)+`
        </td>
      `}),l+=`
      `,e.hasExtraColumn&&(l+=`
        `,e.hasRemoveButtons&&(l+=`
        <td class="align-middle">
          <button type="button" class="btn btn-light btn-sm formio-button-remove-row" ref="`+((n=e.datagridKey)==null?"":n)+'-removeRow" tabindex="'+((n=e.tabIndex)==null?"":n)+'" aria-label="'+((n=e.t("remove"))==null?"":n)+`">
            <i class="`+((n=e.iconClass("remove-circle"))==null?"":n)+`"></i>
          </button>
        </td>
        `),l+=`
        `,e.canAddColumn&&(l+=`
        <td ref="`+((n=e.key)==null?"":n)+`-container">
          `+((n=e.placeholder)==null?"":n)+`
        </td>
        `),l+=`
      `),l+=`
    </tr>
    `}),l+=`
  </tbody>
  `,!e.builder&&e.hasAddButton&&e.hasBottomSubmit&&(l+=`
  <tfoot>
    <tr>
      <td colspan="`+((n=e.component.layoutFixed?e.numColumns:e.numColumns+1)==null?"":n)+`">
        <button class="btn btn-primary formio-button-add-row" ref="`+((n=e.datagridKey)==null?"":n)+'-addRow" tabindex="'+((n=e.tabIndex)==null?"":n)+`">
          <i class="`+((n=e.iconClass("plus"))==null?"":n)+' mr-1"></i> '+((n=e.t(e.component.addAnother||"Add Another",{_userInput:!0}))==null?"":n)+`
        </button>
      </td>
    </tr>
  </tfoot>
  `),l+=`
</table>
`,l}function G(e){var n,l="";return l+=`<table class="table datagrid-table table-bordered
    `+((n=e.component.striped?"table-striped":"")==null?"":n)+`
    `+((n=e.component.hover?"table-hover":"")==null?"":n)+`
    `+((n=e.component.condensed?"table-sm":"")==null?"":n)+`
    ">
  `,e.hasHeader&&(l+=`
  <thead>
    <tr>
      `,e.columns.forEach(function(o){l+=`
        <th class="`+((n=o.validate&&o.validate.required?"field-required":"")==null?"":n)+`">
          `+((n=o.hideLabel?"":e.t(o.label||o.title,{_userInput:!0}))==null?"":n)+`
          `,o.tooltip&&(l+=' <i ref="tooltip" tabindex="0" data-title="'+((n=o.tooltip)==null?"":n)+'" class="'+((n=e.iconClass("question-sign"))==null?"":n)+' text-muted" data-tooltip="'+((n=o.tooltip)==null?"":n)+'"></i>'),l+=`
        </th>
      `}),l+=`
    </tr>
  </thead>
  `),l+=`
  <tbody>
    `,e.rows.forEach(function(o){l+=`
    <tr>
      `,e.columns.forEach(function(a){l+=`
        <td ref="`+((n=e.datagridKey)==null?"":n)+`">
          `+((n=o[a.key])==null?"":n)+`
        </td>
      `}),l+=`
    </tr>
    `}),l+=`
  </tbody>
</table>
`,l}var U={form:W,html:G};function X(e){var n,l="";return l+=`<div class="grid grid-cols-12 gap-4"
  `,e.component.hideLabel?l+=`
  aria-label="`+((n=e.component.label)==null?"":n)+`"
  `:l+=`
  aria-labelledby="l-`+((n=e.instance.id)==null?"":n)+"-"+((n=e.component.key)==null?"":n)+`"
  `,l+=`
  `,e.component.description&&(l+=`
  aria-describedby="d-`+((n=e.instance.id)==null?"":n)+"-"+((n=e.component.key)==null?"":n)+`"
  `),l+=`
  >
  `,e.dayFirst&&e.showDay&&(l+=`
  <div class="col-span-3">
    `,e.component.hideInputLabels||(l+=`
    <label for="`+((n=e.component.key)==null?"":n)+'-day" class="',e.component.fields.day.required&&(l+="field-required"),l+='">'+((n=e.t("Day"))==null?"":n)+`</label>
    `),l+=`
    <div>`+((n=e.day)==null?"":n)+`</div>
  </div>
  `),l+=`
  `,e.showMonth&&(l+=`
  <div class="col-span-4">
    `,e.component.hideInputLabels||(l+=`
    <label for="`+((n=e.component.key)==null?"":n)+'-month" class="',e.component.fields.month.required&&(l+="field-required"),l+='">'+((n=e.t("Month"))==null?"":n)+`</label>
    `),l+=`
    <div>`+((n=e.month)==null?"":n)+`</div>
  </div>
  `),l+=`
  `,!e.dayFirst&&e.showDay&&(l+=`
  <div class="col-span-3">
    `,e.component.hideInputLabels||(l+=`
    <label for="`+((n=e.component.key)==null?"":n)+'-day" class="',e.component.fields.day.required&&(l+="field-required"),l+='">'+((n=e.t("Day"))==null?"":n)+`</label>
    `),l+=`
    <div>`+((n=e.day)==null?"":n)+`</div>
  </div>
  `),l+=`
  `,e.showYear&&(l+=`
  <div class="col-span-5">
    `,e.component.hideInputLabels||(l+=`
    <label for="`+((n=e.component.key)==null?"":n)+'-year" class="',e.component.fields.year.required&&(l+="field-required"),l+='">'+((n=e.t("Year"))==null?"":n)+`</label>
    `),l+=`
    <div>`+((n=e.year)==null?"":n)+`</div>
  </div>
  `),l+=`
</div>
<input name="ctx.data[day]" type="hidden" class="form-control" lang="en" value="" ref="input">
`,l}var Y={form:X};function J(e){var n="";return n+=`<div class="formio-dialog formio-dialog-theme-default component-settings">
  <div class="formio-dialog-overlay" ref="dialogOverlay"></div>
  <div class="formio-dialog-content" ref="dialogContents" role="dialog">
    <div ref="dialogContents"></div>
    <button class="formio-dialog-close float-right btn btn-secondary btn-sm" aria-label="Close modal window." ref="dialogClose"></button>
  </div>
</div>
`,n}var Q={form:J};function Z(e){var n,l="";return l+=`<ul class="editgrid-listgroup list-group
    `+((n=e.component.striped?"table-striped":"")==null?"":n)+`
    `+((n=e.component.bordered?"table-bordered":"")==null?"":n)+`
    `+((n=e.component.hover?"table-hover":"")==null?"":n)+`
    `+((n=e.component.condensed?"table-sm":"")==null?"":n)+`
    ">
  `,e.header&&(l+=`
  <li class="list-group-item list-group-header">
    `+((n=e.header)==null?"":n)+`
  </li>
  `),l+=`
  `,e.rows.forEach(function(o,a){l+=`
  <li class="list-group-item" ref="`+((n=e.ref.row)==null?"":n)+`">
    `+((n=o)==null?"":n)+`
    `,e.openRows[a]&&!e.readOnly&&(l+=`
    <div class="editgrid-actions">
      <button class="btn btn-primary" ref="`+((n=e.ref.saveRow)==null?"":n)+'">'+((n=e.t(e.component.saveRow||"Save",{_userInput:!0}))==null?"":n)+`</button>
      `,e.component.removeRow&&(l+=`
      <button class="btn btn-danger" ref="`+((n=e.ref.cancelRow)==null?"":n)+'">'+((n=e.t(e.component.removeRow||"Cancel",{_userInput:!0}))==null?"":n)+`</button>
      `),l+=`
    </div>
    `),l+=`
    <div class="has-error">
      <div class="editgrid-row-error help-block">
        `+((n=e.errors[a])==null?"":n)+`
      </div>
    </div>
  </li>
  `}),l+=`
  `,e.footer&&(l+=`
  <li class="list-group-item list-group-footer">
    `+((n=e.footer)==null?"":n)+`
  </li>
  `),l+=`
</ul>
`,!e.readOnly&&e.hasAddButton&&(l+=`
<button class="btn btn-primary" ref="`+((n=e.ref.addRow)==null?"":n)+`">
  <i class="`+((n=e.iconClass("plus"))==null?"":n)+'"></i> '+((n=e.t(e.component.addAnother||"Add Another",{_userInput:!0}))==null?"":n)+`
</button>
`),l+=`
`,l}function x(e){var n,l="";return l+=`<ul class="editgrid-listgroup list-group
    `+((n=e.component.striped?"table-striped":"")==null?"":n)+`
    `+((n=e.component.bordered?"table-bordered":"")==null?"":n)+`
    `+((n=e.component.hover?"table-hover":"")==null?"":n)+`
    `+((n=e.component.condensed?"table-sm":"")==null?"":n)+`
    ">
  `,e.header&&(l+=`
  <li class="list-group-item list-group-header">
    `+((n=e.header)==null?"":n)+`
  </li>
  `),l+=`
  `,e.rows.forEach(function(o,a){l+=`
  <li class="list-group-item" ref="`+((n=e.ref.row)==null?"":n)+`">
    `+((n=o)==null?"":n)+`
    `,e.openRows[a]&&!e.readOnly&&(l+=`
    <div class="editgrid-actions">
      <button class="btn btn-primary" ref="`+((n=e.ref.saveRow)==null?"":n)+'">'+((n=e.t(e.component.saveRow||"Save",{_userInput:!0}))==null?"":n)+`</button>
      `,e.component.removeRow&&(l+=`
      <button class="btn btn-danger" ref="`+((n=e.ref.cancelRow)==null?"":n)+'">'+((n=e.t(e.component.removeRow||"Cancel",{_userInput:!0}))==null?"":n)+`</button>
      `),l+=`
    </div>
    `),l+=`
    <div class="has-error">
      <div class="editgrid-row-error help-block">
        `+((n=e.errors[a])==null?"":n)+`
      </div>
    </div>
  </li>
  `}),l+=`
  `,e.footer&&(l+=`
  <li class="list-group-item list-group-footer">
    `+((n=e.footer)==null?"":n)+`
  </li>
  `),l+=`
</ul>
`,l}var nn={form:Z,html:x};function en(e){var n,l="";return l+=`<div class="editgrid-table-container">
  <div class="table-responsive">
    <table class="table
      `+((n=e.component.striped?"table-striped":"")==null?"":n)+`
      `+((n=e.component.bordered?"table-bordered":"")==null?"":n)+`
      `+((n=e.component.hover?"table-hover":"")==null?"":n)+`
      `+((n=e.component.condensed?"table-sm":"")==null?"":n)+`
    ">
      `,e.header&&(l+=`
      <thead class="editgrid-table-head">
        `+((n=e.header)==null?"":n)+`
      </thead>
      `),l+=`
      <tbody class="editgrid-table-body">
        `,e.rows.forEach(function(o,a){l+=`
        <tr ref="`+((n=e.ref.row)==null?"":n)+`">
          `+((n=o)==null?"":n)+`
          `,e.openRows[a]&&!e.readOnly&&(l+=`
            <td class="editgrid-table-column">
              <div class="editgrid-actions">
                <button class="btn btn-primary" ref="`+((n=e.ref.saveRow)==null?"":n)+'">'+((n=e.t(e.component.saveRow||"Save",{_userInput:!0}))==null?"":n)+`</button>
                `,e.component.removeRow&&(l+=`
                <button class="btn btn-danger" ref="`+((n=e.ref.cancelRow)==null?"":n)+'">'+((n=e.t(e.component.removeRow||"Cancel",{_userInput:!0}))==null?"":n)+`</button>
                `),l+=`
              </div>
            </td>
          `),l+=`
          `,e.errors[a]&&(l+=`
          <td class="editgrid-table-column">
            <div class="has-error">
              <div class="editgrid-row-error help-block">
                `+((n=e.errors[a])==null?"":n)+`
              </div>
            </div>
          </td>
          `),l+=`
        </tr>
        `}),l+=`
      </tbody>
      `,e.footer&&(l+=`
      <tfoot>
        <tr>
          `+((n=e.footer)==null?"":n)+`
        </tr>
      <tfoot>
      `),l+=`
    </table>
  </div>
</div>
`,!e.readOnly&&e.hasAddButton&&(l+=`
<button class="btn btn-primary" ref="`+((n=e.ref.addRow)==null?"":n)+`">
  <i class="`+((n=e.iconClass("plus"))==null?"":n)+`"></i>
  `+((n=e.t(e.component.addAnother||"Add Another",{_userInput:!0}))==null?"":n)+`
</button>
`),l+=`
`,l}function ln(e){var n,l="";return l+=`<div class="editgrid-table-container">
  <div class="table-responsive">
    <table class="table
      `+((n=e.component.striped?"table-striped":"")==null?"":n)+`
      `+((n=e.component.bordered?"table-bordered":"")==null?"":n)+`
      `+((n=e.component.hover?"table-hover":"")==null?"":n)+`
      `+((n=e.component.condensed?"table-sm":"")==null?"":n)+`
    ">
      `,e.header&&(l+=`
      <thead class="editgrid-table-head">
        `+((n=e.header)==null?"":n)+`
      </thead>
      `),l+=`
      <tbody class="editgrid-table-body">
        `,e.rows.forEach(function(o,a){l+=`
        <tr ref="`+((n=e.ref.row)==null?"":n)+`">
          `+((n=o)==null?"":n)+`
          `,e.openRows[a]&&!e.readOnly&&(l+=`
          <td class="editgrid-table-column">
            <div class="editgrid-actions">
              <button class="btn btn-primary" ref="`+((n=e.ref.saveRow)==null?"":n)+'">'+((n=e.t(e.component.saveRow||"Save",{_userInput:!0}))==null?"":n)+`</button>
              `,e.component.removeRow&&(l+=`
              <button class="btn btn-danger" ref="`+((n=e.ref.cancelRow)==null?"":n)+'">'+((n=e.t(e.component.removeRow||"Cancel",{_userInput:!0}))==null?"":n)+`</button>
              `),l+=`
            </div>
          </td>
          `),l+=`
          `,e.errors[a]&&(l+=`
          <td class="editgrid-table-column">
            <div class="has-error">
              <div class="editgrid-row-error help-block">
                `+((n=e.errors[a])==null?"":n)+`
              </div>
            </div>
          </td>
          `),l+=`
        </tr>
        `}),l+=`
      </tbody>
      `,e.footer&&(l+=`
      <tfoot>
        <tr>
          `+((n=e.footer)==null?"":n)+`
         </tr>
      <tfoot>
      `),l+=`
    </table>
  </div>
</div>
`,l}var on={form:en,html:ln};function an(e){var n,l="";return l+="<p>"+((n=e.t("error"))==null?"":n)+`
  `,e.options.vpat&&(l+=`
  <span ref="errorTooltip" class="`+((n=e.iconClass("question-sign"))==null?"":n)+`" tabindex="0"></span>
  `),l+=`
</p>
<ul>
  `,e.errors.forEach(function(o){l+=`
  <li>
    <span
      data-component-key = "`+((n=o.keyOrPath)==null?"":n)+`"
      ref = "errorRef"
      tabIndex = "0"
      role="link"
    >
      `+((n=o.message)==null?"":n)+`
    </span>
  </li>
  `}),l+=`
</ul>
`,l}var rn={form:an};function tn(e){var n,l="";return l+=`<div class="field-wrapper
  `+((n=e.isRightPosition?"field-wrapper--reverse":"")==null?"":n)+`">
  `,e.label.hidden||(l+=`
    <div class="field-label
      `+((n=e.isRightAlign?"field-label--right":"")==null?"":n)+`"
      style="`+((n=e.labelStyles)==null?"":n)+`">
    `+((n=e.labelMarkup)==null?"":n)+`
    </div>
  `),l+=`

  `,e.label.hidden&&e.label.className&&e.component.validate.required&&(l+=`
    <div class="field-label
      `+((n=e.isRightAlign?"field-label--right":"")==null?"":n)+`"
      style="`+((n=e.labelStyles)==null?"":n)+`">
      <label class="`+((n=e.label.className)==null?"":n)+`"></label>
    </div>
  `),l+=`

  <div class="field-content" style="`+((n=e.contentStyles)==null?"":n)+`">
    `+((n=e.element)==null?"":n)+`
  </div>
</div>

`,e.component.description&&(l+=`
  <div class="form-text text-muted">`+((n=e.t(e.component.description,{_userInput:!0}))==null?"":n)+`</div>
`),l+=`
`,l}function sn(e){var n,l="";return!e.label.hidden&&e.label.labelPosition!=="bottom"&&(l+=`
  `+((n=e.labelMarkup)==null?"":n)+`
`),l+=`

`,e.label.hidden&&e.label.className&&e.component.validate.required&&(l+=`
  <label class="`+((n=e.label.className)==null?"":n)+`"></label>
`),l+=`

`+((n=e.element)==null?"":n)+`

`,!e.label.hidden&&e.label.labelPosition==="bottom"&&(l+=`
  `+((n=e.labelMarkup)==null?"":n)+`
`),l+=`
`,e.component.description&&(l+=`
  <div id="d-`+((n=e.instance.id)==null?"":n)+"-"+((n=e.component.key)==null?"":n)+'" class="form-text text-muted">'+((n=e.t(e.component.description,{_userInput:!0}))==null?"":n)+`</div>
`),l+=`
`,l}var un={form:sn,align:tn};function dn(e){var n,l="";return l+=`<fieldset>
  `,e.component.legend&&(l+=`
  <legend ref="header" class="`+((n=e.component.collapsible?"formio-clickable":"")==null?"":n)+`">
    `+((n=e.t(e.component.legend,{_userInput:!0}))==null?"":n)+`
    `,e.component.tooltip&&(l+=`
      <i ref="tooltip" tabindex="0" class="`+((n=e.iconClass("question-sign"))==null?"":n)+' text-muted" data-tooltip="'+((n=e.component.tooltip)==null?"":n)+`"></i>
    `),l+=`
  </legend>
  `),l+=`
  `,e.collapsed||(l+=`
  <div class="fieldset-body" ref="`+((n=e.nestedKey)==null?"":n)+`">
    `+((n=e.children)==null?"":n)+`
  </div>
  `),l+=`
</fieldset>

`,l}var pn={form:dn};function fn(e){var n,l="";return e.options.vpat&&(l+=`
  <span tabindex="-1" class="sr-only" id="invisible-`+((n=e.instance.id)==null?"":n)+"-"+((n=e.component.key)==null?"":n)+`"></span>
`),l+=`
`,e.self.imageUpload?(l+=`
  <div>
    `,e.files.forEach(function(o){l+=`
      <div>
        <span>
          <img ref="fileImage" src="" alt="`+((n=o.originalName||o.name)==null?"":n)+'" style="width:'+((n=e.component.imageSize)==null?"":n)+`px">
          `,e.disabled||(l+=`
            <i tabindex="0" class="`+((n=e.iconClass("remove"))==null?"":n)+`" ref="removeLink"></i>
          `),l+=`
        </span>
      </div>
    `}),l+=`
  </div>
`):(l+=`
  `,e.options.vpat&&(l+=`
    <div>`+((n=!e.component.filePattern||e.component.filePattern==="*"?"Any file types are allowed":e.t("Allowed file types: ")+e.component.filePattern)==null?"":n)+`</div>
  `),l+=`
  <ul class="list-group list-group-striped">
    <li class="list-group-item list-group-header hidden-xs hidden-sm">
      <div class="grid grid-cols-12 gap-4">
        `,e.disabled||(l+=`
          <div class="md:col-span-1"></div>
        `),l+=`
        <div class="md:col-span-`,e.self.hasTypes?l+="7":l+="9",l+='"><strong>'+((n=e.t("File Name"))==null?"":n)+`</strong></div>
        <div class="md:col-span-2"><strong>`+((n=e.t("Size"))==null?"":n)+`</strong></div>
        `,e.self.hasTypes&&(l+=`
          <div class="md:col-span-2"><strong>`+((n=e.t("Type"))==null?"":n)+`</strong></div>
        `),l+=`
      </div>
    </li>
    `,e.files.forEach(function(o){l+=`
      <li class="list-group-item">
        <div class="grid grid-cols-12 gap-4">
          `,e.disabled||(l+=`
            <div class="md:col-span-1"><i tabindex="0" class="`+((n=e.iconClass("remove"))==null?"":n)+`" ref="removeLink"></i></div>
          `),l+=`
          <div class="md:col-span-`,e.self.hasTypes?l+="7":l+="9",l+=`">
            `,e.component.uploadOnly?l+=`
              `+((n=o.originalName||o.name)==null?"":n)+`
            `:l+=`
              <a href="`+((n=o.url||"#")==null?"":n)+`" target="_blank" ref="fileLink">
                <span class="sr-only">`+((n=e.t("Press to open "))==null?"":n)+"</span>"+((n=o.originalName||o.name)==null?"":n)+`
              </a>
            `,l+=`
          </div>
          <div class="md:col-span-2">`+((n=e.fileSize(o.size))==null?"":n)+`</div>
          `,e.self.hasTypes&&!e.disabled&&(l+=`
            <div class="md:col-span-2">
              <select class="file-type" ref="fileType">
                `,e.component.fileTypes.map(function(a){l+=`
                  <option class="test" value="`+((n=a.value)==null?"":n)+'" ',a.label===o.fileType&&(l+='selected="selected"'),l+=">"+((n=e.t(a.label))==null?"":n)+`</option>
                `}),l+=`
              </select>
            </div>
          `),l+=`
          `,e.self.hasTypes&&e.disabled&&(l+=`
          <div class="md:col-span-2">`+((n=o.fileType)==null?"":n)+`</div>
          `),l+=`
        </div>
      </li>
    `}),l+=`
  </ul>
`),l+=`
`,!e.disabled&&(e.component.multiple||!e.files.length)&&(l+=`
  `,e.self.useWebViewCamera?l+=`
    <div class="fileSelector">
      <button class="btn btn-primary" ref="galleryButton"><i class="fa fa-book"></i> `+((n=e.t("Gallery"))==null?"":n)+`</button>
      <button class="btn btn-primary" ref="cameraButton"><i class="fa fa-camera"></i> `+((n=e.t("Camera"))==null?"":n)+`</button>
    </div>
  `:e.self.cameraMode?l+=`
    <div class="video-container">
      <video class="video" autoplay="true" ref="videoPlayer" tabindex="-1"></video>
    </div>
    <button class="btn btn-primary" ref="takePictureButton"><i class="fa fa-camera"></i> `+((n=e.t("Take Picture"))==null?"":n)+`</button>
    <button class="btn btn-primary" ref="toggleCameraMode">`+((n=e.t("Switch to file upload"))==null?"":n)+`</button>
  `:(l+=`
    <div class="fileSelector" ref="fileDrop" `+((n=e.fileDropHidden?"hidden":"")==null?"":n)+`>
      <i class="`+((n=e.iconClass("cloud-upload"))==null?"":n)+'"></i> '+((n=e.t("Drop files to attach,"))==null?"":n)+`
        `,e.self.imageUpload&&e.component.webcam&&(l+=`
          <a href="#" ref="toggleCameraMode"><i class="`+((n=e.iconClass("camera"))==null?"":n)+'"></i> '+((n=e.t("use camera"))==null?"":n)+`</a>
        `),l+=`
        `+((n=e.t("or"))==null?"":n)+`
        <a href="#" ref="fileBrowse" class="browse">
          `+((n=e.t("browse"))==null?"":n)+`
          <span class="sr-only">
            `+((n=e.t("Browse to attach file for "+e.component.label+". "+(e.component.description?e.component.description+". ":"")+(!e.component.filePattern||e.component.filePattern==="*"?"Any file types are allowed":e.t("Allowed file types: ")+e.component.filePattern)))==null?"":n)+`
          </span>
        </a>
      <div ref="fileProcessingLoader" class="loader-wrapper">
        <div class="loader text-center"></div>
      </div>
    </div>
  `),l+=`
`),l+=`
`,e.statuses.forEach(function(o){l+=`
  <div class="file `+((n=e.statuses.status==="error"?" has-error":"")==null?"":n)+`">
    <div class="grid grid-cols-12 gap-4">
      <div class="fileName col-form-label sm:col-span-10">`+((n=o.originalName)==null?"":n)+`
        <i class="`+((n=e.iconClass("remove"))==null?"":n)+`" ref="fileStatusRemove">
          <span class="sr-only">`+((n=e.t("Remove button. Press to remove "+o.originalName||o.name+"."))==null?"":n)+`</span>
          <span class="sr-only">`+((n=o.message?o.message.replace(";","."):"")==null?"":n)+`</span>
        </i>
      </div>
      <div class="fileSize col-form-label sm:col-span-2 text-right">`+((n=e.fileSize(o.size))==null?"":n)+`</div>
    </div>
    <div class="grid grid-cols-12 gap-4">
      <div class="sm:col-span-12">
        `,o.status==="progress"?l+=`
          <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="`+((n=o.progress)==null?"":n)+'" aria-valuemin="0" aria-valuemax="100" style="width: '+((n=o.progress)==null?"":n)+`%">
              <span class="sr-only">`+((n=o.progress)==null?"":n)+"% "+((n=e.t("Complete"))==null?"":n)+`</span>
            </div>
          </div>
        `:o.status==="error"?l+=`
          <div class="alert alert-danger bg-`+((n=o.status)==null?"":n)+'">'+((n=e.t(o.message))==null?"":n)+`</div>
        `:l+=`
          <div class="bg-`+((n=o.status)==null?"":n)+'">'+((n=e.t(o.message))==null?"":n)+`</div>
        `,l+=`
      </div>
    </div>
  </div>
`}),l+=`
`,(!e.component.storage||e.support.hasWarning)&&(l+=`
  <div class="alert alert-warning">
    `,e.component.storage||(l+=`
      <p>`+((n=e.t("No storage has been set for this field. File uploads are disabled until storage is set up."))==null?"":n)+`</p>
    `),l+=`
    `,e.support.filereader||(l+=`
      <p>`+((n=e.t("File API & FileReader API not supported."))==null?"":n)+`</p>
    `),l+=`
    `,e.support.formdata||(l+=`
      <p>`+((n=e.t("XHR2's FormData is not supported."))==null?"":n)+`</p>
    `),l+=`
    `,e.support.progress||(l+=`
      <p>`+((n=e.t("XHR2's upload progress isn't supported."))==null?"":n)+`</p>
    `),l+=`
  </div>
`),l+=`
`,l}var bn={form:fn};function mn(e){var n,l="";return l+="<"+((n=e.tag)==null?"":n)+' class="'+((n=e.component.className)==null?"":n)+`" ref="html"
  `,e.attrs.forEach(function(o){l+=`
    `+((n=o.attr)==null?"":n)+'="'+((n=o.value)==null?"":n)+`"
  `}),l+=`
>`+((n=e.t(e.content))==null?"":n),(!e.singleTags||e.singleTags.indexOf(e.tag)===-1)&&(l+="</"+((n=e.tag)==null?"":n)+">"),l+=`
`,l}var vn={form:mn};function cn(e){var n,l="";return l+='<i ref="'+((n=e.ref)==null?"":n)+'" class="'+((n=e.className)==null?"":n)+'" style="'+((n=e.styles)==null?"":n)+'">'+((n=e.content)==null?"":n)+`</i>
`,l}var gn={form:cn};const t={remove:"bxs-trash","question-sign":"bx-question-mark inline-block border-1 bg-gray-400 border-solid border-gray-400 text-white text-xxs rounded-full mx-2 mt-px","new-window":"bx-windows","minus-square-o":"bxs-minus-square",cog:"bx-cog",move:"bx-move",wrench:"bx-wrench",save:"bx-save",copy:"bx-copy",calendar:"bx-calendar",file:"bx-file",wpforms:"bxs-spreadsheet","files-o":"bx-copy-alt",refresh:"bx-refresh",indent:"bx-right-indent",tasks:"bx-list-ul",th:"bx-table","th-list":"bxs-spreadsheet","folder-open":"bx-folder-open","folder-o":"bx-folder-open","user-secret":"bxs-user-badge",table:"bx-table",pencil:"bx-pencil",code:"bx-code",terminal:"bx-terminal",home:"bx-home",html5:"bxl-html5",list:"bx-list-ul",usd:"bx-dollar",hashtag:"bx-hash",tags:"bx-purchase-tag",at:"bx-at",font:"bx-font",asterisk:"bx-show",plus:"bx-plus","plus-square":"bx-plus-circle","plus-square-o":"bxs-plus-square","dot-circle-o":"bx-radio-circle-marked","phone-square":"bx-phone","clock-o":"bx-time-five",link:"bx-link",columns:"bx-columns","th-large":"bx-category","list-alt":"bx-credit-card-front","square-o":"bx-caret-down-square",cubes:"bxs-cube",stop:"bx-stop","check-square":"bx-checkbox-checked","remove-circle":"bx-x",bars:"bx-menu"};var hn=(e,n,l)=>(e==="bx"&&(t[n]?n=t[n]:n=`${e}-${n}`),l?n==="bx-radio-circle"?`${e} ${n} bx-burst`:`${e} ${n} bx-spin`:`${e} ${n}`);function _n(e){var n,l="";if((e.prefix||e.suffix)&&(l+=`
<div class="input-group">
  `),l+=`
  `,e.prefix&&(l+=`
    <div class="input-group-prepend" ref="prefix">
    <span class="input-group-text">
      `,e.prefix instanceof HTMLElement?l+=`
        `+((n=e.t(e.prefix.outerHTML,{_userInput:!0}))==null?"":n)+`
      `:l+=`
        `+((n=e.t(e.prefix,{_userInput:!0}))==null?"":n)+`
      `,l+=`
    </span>
    </div>
  `),l+=`
  `,!e.component.editor&&!e.component.wysiwyg){l+=`
    <`+((n=e.input.type)==null?"":n)+`
      ref="`+((n=e.input.ref?e.input.ref:"input")==null?"":n)+`"
      `;for(var o in e.input.attr)l+=`
        `+((n=o)==null?"":n)+'="'+((n=e.input.attr[o])==null?"":n)+`"
      `;l+=`
      id="`+((n=e.instance.id)==null?"":n)+"-"+((n=e.component.key)==null?"":n)+`"
      aria-labelledby="l-`+((n=e.instance.id)==null?"":n)+"-"+((n=e.component.key)==null?"":n)+" ",e.component.description&&(l+="d-"+((n=e.instance.id)==null?"":n)+"-"+((n=e.component.key)==null?"":n)),l+=`"
      aria-required="`+((n=e.input.ref==="input"||!e.input.ref?e.component.validate.required:e.component.fields&&e.component.fields[e.input.ref]&&e.component.fields[e.input.ref].required||!1)==null?"":n)+`"
    >`+((n=e.input.content)==null?"":n)+"</"+((n=e.input.type)==null?"":n)+`>
    `,e.hasValueMaskInput&&(l+=`
      <input ref="valueMaskInput" />
    `),l+=`
`}return l+=`
`,(e.component.editor||e.component.wysiwyg)&&(l+=`
  <div ref="input"></div>
`),l+=`
`,e.component.type==="datetime"&&(l+=`
<span aria-live="assertive" id="`+((n=e.instance.id)==null?"":n)+`-liveRegion" class="sr-only" ref="liveRegion"></span>
`),l+=`
`,e.suffix&&(l+=`
  <div class="input-group-append" ref="suffix">
    <span class="input-group-text">
      `,e.suffix instanceof HTMLElement?l+=`
        `+((n=e.t(e.suffix.outerHTML,{_userInput:!0}))==null?"":n)+`
      `:l+=`
        `+((n=e.t(e.suffix,{_userInput:!0}))==null?"":n)+`
      `,l+=`
    </span>
  </div>
`),l+=`
`,(e.prefix||e.suffix)&&(l+=`
  </div>
`),l+=`
`,(e.component.showCharCount||e.component.showWordCount)&&(l+=`
<div class="form-text `+((n=e.component.description?"pull-right":"text-right")==null?"":n)+`">
  `,e.component.showCharCount&&(l+=`
  <span class="text-muted" ref="charcount" aria-live="polite"></span>
  `),l+=`
  `,e.component.showWordCount&&(l+=`
  <span class="text-muted" ref="wordcount" aria-live="polite"></span>
  `),l+=`
</div>
`),l+=`
`,l}function yn(e){var n,l="";return l+='<div ref="value">',e.value?l+=(n=e.value)==null?"":n:l+="-",l+=`</div>
`,l}var wn={form:_n,html:yn};function kn(e){var n,l="";return l+=`<label
  ref="label"
  class="col-form-label `+((n=e.label.className)==null?"":n)+`"
  for="`+((n=e.instance.id)==null?"":n)+"-"+((n=e.component.key)==null?"":n)+`"
  id="l-`+((n=e.instance.id)==null?"":n)+"-"+((n=e.component.key)==null?"":n)+`"
>
  `+((n=e.t(e.component.label,{_userInput:!0}))==null?"":n)+`
  `,(e.component.type==="number"||e.component.type==="phoneNumber"||e.component.type==="currency")&&(l+=`
    <span class='sr-only'>, `+((n=e.t("numeric only"))==null?"":n)+`,</span>
  `),l+=`
  `,e.component.tooltip&&(l+=`
    <i ref="tooltip" tabindex="0" class="`+((n=e.iconClass("question-sign"))==null?"":n)+' text-muted" data-tooltip="'+((n=e.component.tooltip)==null?"":n)+`"></i>
  `),l+=`
</label>
`,l}var Cn={form:kn};function $n(e){var n="";return n+=`<div class="formio-loader">
  <div class="loader-wrapper">
    <div class="loader text-center"></div>
  </div> 
</div>
`,n}var In={form:$n};function zn(e){var n,l="";return l+=((n=e.t("Loading"))==null?"":n)+`...
`,l}var En={form:zn};function Rn(e){var n,l="";return l+='<div id="'+((n=e.mapId)==null?"":n)+`" style="min-height: 300px; height: calc(100vh - 600px);" ref="gmapElement"></div>
`,l}var Pn={form:Rn};function qn(e){var n,l="";return l+='<div id="e-'+((n=e.instance.id)==null?"":n)+"-"+((n=e.key)==null?"":n)+'" class="form-text '+((n=e.level||"error")==null?"":n)+'">'+((n=e.message)==null?"":n)+`</div>
`,l}var Ln={form:qn};function An(e){var n,l="";return l+=`<div class="formio-dialog formio-dialog-theme-default formio-modaledit-dialog">
  <div ref="overlay" class="formio-dialog-overlay"></div>
  <div ref="content" class="formio-modaledit-content">
    <button
      ref="close"
      type="button"
      role="button"
      class="btn btn-primary btn-xs formio-modaledit-close">
      `+((n=e.t("Close"))==null?"":n)+`
    </button>
    <div ref="inner" class="reset-margins"></div>
  </div>
</div>
`,l}var Kn={form:An};function Nn(e){var n,l="";return l+=`<div ref="container" class="formio-modaledit-view-container">
  <button
    ref="edit"
    type="button"
    role="button"
    class="btn btn-xxs btn-warning formio-modaledit-edit">
    <i class="`+((n=e.iconClass("edit"))==null?"":n)+`"></i>
  </button>
  <div ref="input" class="modaledit-view-inner reset-margins">`+((n=e.content)==null?"":n)+`</div>
</div>
`,l}var Tn={form:Nn};function Sn(e){var n,l="";return l+='<label id="l-'+((n=e.component.key)==null?"":n)+'" class="control-label '+((n=e.label.className)==null?"":n)+`">
  `+((n=e.t(e.component.label,{_userInput:!0}))==null?"":n)+'<span ref="modalLabelValue" class="sr-only">. '+((n=e.component.type==="signature"?e.self.getValueAsString(e.previewText):e.previewText)==null?"":n)+`</span>
</label><br>
<span class="sr-only" ref="modalPreviewLiveRegion" aria-live="assertive"></span>
<button
  lang="en"
  class="btn btn-light btn-md open-modal-button form-control `+((n=e.openModalBtnClasses||"")==null?"":n)+`"
  ref="openModal"
  aria-labelledby="l-`+((n=e.component.key)==null?"":n)+`"
>
  `+((n=e.previewText)==null?"":n)+`
</button>
<div class="formio-errors invalid-feedback">
  `+((n=e.messages)==null?"":n)+`
</div>
`,l}var Mn={form:Sn};function On(e){var n,l="";l+=`<div
  class="input-group formio-multiple-mask-container"
  ref="`+((n=e.input.ref?e.input.ref:"input")==null?"":n)+`"
>
  <select
    class="form-control formio-multiple-mask-select"
    id="`+((n=e.key)==null?"":n)+`-mask"
    ref="select"
    `,e.input.attr.disabled&&(l+="disabled"),l+=`>
    `,e.selectOptions.forEach(function(a){l+=`
    <option value="`+((n=a.value)==null?"":n)+'">'+((n=a.label)==null?"":n)+`</option>
    `}),l+=`
  </select>
  <input
    ref="mask"
    `;for(var o in e.input.attr)l+=`
    `+((n=o)==null?"":n)+'="'+((n=e.input.attr[o])==null?"":n)+`"
    `;return l+=`
  >
</div>
`,l}var Bn={form:On};function Hn(e){var n,l="";return l+=`<tr ref="row">
  <td>
    `+((n=e.element)==null?"":n)+`
  </td>
  `,e.disabled||(l+=`
  <td>
    <button type="button" class="btn btn-secondary" ref="removeRow">
      <i class="`+((n=e.iconClass("remove-circle"))==null?"":n)+`"></i>
    </button>
  </td>
  `),l+=`
</tr>
`,l}var Fn={form:Hn};function Dn(e){var n,l="";return l+=`<table class="table table-bordered">
  <tbody>
  `+((n=e.rows)==null?"":n)+`
  `,e.disabled||(l+=`
  <tr>
    <td colspan="2">
      <button class="btn btn-primary formio-button-add-another" ref="addButton"><i class="`+((n=e.iconClass("plus"))==null?"":n)+'"></i> '+((n=e.t(e.addAnother,{_userInput:!0}))==null?"":n)+`</button>
    </td>
  </tr>
  `),l+=`
  </tbody>
</table>
`,l}var jn={form:Dn};function Vn(e){var n,l="";return l+=`<div class="mb-2 card border">
  `,(!e.component.hideLabel||e.builder||e.component.collapsible||e.component.tooltip)&&(l+=`
  <div class="card-header `+((n=e.transform("class","bg-"+e.component.theme))==null?"":n)+`"
    `,e.component.collapsible&&(l+=`
    tabindex="0"
    `),l+=`
    role="button"
    aria-expanded="`+((n=e.component.collapsible?!e.collapsed:!0)==null?"":n)+`"
    aria-controls="`+((n=e.instance.id)==null?"":n)+"-"+((n=e.component.key)==null?"":n)+`"
    ref="header"
  >
    <span class="mb-0 card-title `,e.component.theme&&e.component.theme!=="default"&&(l+="text-light"),l+=`">
      `,e.component.collapsible&&(l+=`
        <i class="formio-collapse-icon `+((n=e.iconClass(e.collapsed?"plus-square-o":"minus-square-o"))==null?"":n)+` text-muted" data-title="Collapse Panel"></i>
      `),l+=`
      `,(!e.component.hideLabel||e.builder)&&(l+=`
      `+((n=e.t(e.component.title,{_userInput:!0}))==null?"":n)+`
      `),l+=`
      `,e.component.tooltip&&(l+=`
        <i ref="tooltip" tabindex="0" class="`+((n=e.iconClass("question-sign"))==null?"":n)+' text-muted" data-tooltip="'+((n=e.component.tooltip)==null?"":n)+`"></i>
      `),l+=`
    </span>
  </div>
  `),l+=`
  `,(!e.collapsed||e.builder)&&(l+=`
  <div class="card-body" ref="`+((n=e.nestedKey)==null?"":n)+'" id="'+((n=e.instance.id)==null?"":n)+"-"+((n=e.component.key)==null?"":n)+`">
    `+((n=e.children)==null?"":n)+`
  </div>
  `),l+=`
</div>
`,l}var Wn={form:Vn};function Gn(e){var n,l="";return l+='<div class="'+((n=e.classes)==null?"":n)+`" ref="webform">
	<button data-noattach="true" ref="zoomIn" style="position:absolute;right:10px;top:10px;cursor:pointer;" class="btn btn-default btn-secondary no-disable">
		<i class="`+((n=e.iconClass("zoom-in"))==null?"":n)+`"></i>
	</button>
	<button data-noattach="true" ref="zoomOut" style="position:absolute;right:10px;top:60px;cursor:pointer;" class="btn btn-default btn-secondary no-disable">
		<i class="`+((n=e.iconClass("zoom-out"))==null?"":n)+`"></i>
	</button>
  <div data-noattach="true" ref="iframeContainer"></div>
  `+((n=e.submitButton)==null?"":n)+`
</div>
`,l}var Un={form:Gn};function Xn(e){var n,l="";return l+=`<div class="formio builder grid grid-cols-12 gap-4 formbuilder">
  <div class="col-span-12 xs:col-span-4 sm:col-span-3 md:col-span-2 formcomponents">
    `+((n=e.sidebar)==null?"":n)+`
  </div>
  <div class="col-span-12 xs:col-span-8 sm:col-span-9 md:col-span-10 formarea" ref="form">
	  <div class="formio-drop-zone" ref="iframeDropzone"></div>
    `+((n=e.form)==null?"":n)+`
  </div>
</div>
`,l}var Yn={form:Xn};function Jn(e){var n,l="";return l+=`<div class="pdf-upload formio-component-file">
  <h3 class="label">`+((n=e.t("Upload a PDF File"))==null?"":n)+`</h3>
  <input type="file" style="opacity: 0; position: absolute;" tabindex="-1" accept=".pdf" ref="hiddenFileInputElement">
  <div class="fileSelector" ref="fileDrop">
    <span ref="dragDropText">
      <i class="`+((n=e.iconClass("cloud-upload"))==null?"":n)+'"></i>'+((n=e.t("Drop pdf to start, or"))==null?"":n)+' <a href="#" ref="fileBrowse" class="browse">'+((n=e.t("browse"))==null?"":n)+`</a>
    </span>
    <div class="progress pdf-progress" ref="uploadProgressWrapper" style="display:none;">
      <div class="progress-bar" ref="uploadProgress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
  <div class="alert alert-danger" ref="uploadError">

  </div>
</div>

`,l}var Qn={form:Jn};function Zn(e){var n,l="";return l+=`<div
  class="form-radio radio"
  ref="radioGroup"
  role="`+((n=e.component.type==="selectboxes"?"group":"radiogroup")==null?"":n)+`"
  aria-required="`+((n=e.input.component.validate.required)==null?"":n)+`"
  aria-labelledby="l-`+((n=e.instance.id)==null?"":n)+"-"+((n=e.component.key)==null?"":n)+`"
  `,e.component.description&&(l+=`
    aria-describedby="d-`+((n=e.instance.id)==null?"":n)+"-"+((n=e.component.key)==null?"":n)+`"
  `),l+=`
>
  `,e.values.forEach(function(o){l+=`
  <div class="`+((n=e.input.attr.type)==null?"":n)+" "+((n=e.component.optionsLabelPosition&&e.component.optionsLabelPosition!=="right"?"pl-0":"")==null?"":n)+" form-check"+((n=e.inline?"-inline":"")==null?"":n)+`" ref="wrapper">
    <label class="form-check-label label-position-`+((n=e.component.optionsLabelPosition)==null?"":n)+'" for="'+((n=e.instance.root&&e.instance.root.id)==null?"":n)+"-"+((n=e.id)==null?"":n)+"-"+((n=e.row)==null?"":n)+"-"+((n=o.value)==null?"":n)+`">
      `,(e.component.optionsLabelPosition==="left"||e.component.optionsLabelPosition==="top")&&(l+=`
      <span>`+((n=e.t(o.label,{_userInput:!0}))==null?"":n)+`</span>
      `),l+=`
      <`+((n=e.input.type)==null?"":n)+`
        ref="input"
        `;for(var a in e.input.attr)l+=`
        `+((n=a)==null?"":n)+'="'+((n=e.input.attr[a])==null?"":n)+`"
        `;l+=`
        value="`+((n=o.value)==null?"":n)+`"
        `,e.value&&(e.value===o.value||typeof e.value=="object"&&e.value.hasOwnProperty(o.value)&&e.value[o.value])&&(l+=`
          checked=true
        `),l+=`
        `,o.disabled&&(l+=`
          disabled=true
        `),l+=`
        id="`+((n=e.instance.root&&e.instance.root.id)==null?"":n)+"-"+((n=e.id)==null?"":n)+"-"+((n=e.row)==null?"":n)+"-"+((n=o.value)==null?"":n)+`"
        role="`+((n=e.component.type==="selectboxes"?"checkbox":"radio")==null?"":n)+`"
      >
      `,(!e.component.optionsLabelPosition||e.component.optionsLabelPosition==="right"||e.component.optionsLabelPosition==="bottom")&&(l+=`
      <span>`+((n=e.t(o.label,{_userInput:!0}))==null?"":n)+`</span>
      `),l+=`
    </label>
  </div>
  `}),l+=`
</div>
`,l}function xn(e){var n,l="";l+=`<div ref="value">
  `;var o=e.values.filter(function(a){return e.value===a.value||typeof e.value=="object"&&e.value.hasOwnProperty(a.value)&&e.value[a.value]}).map(function(a){return e.t(a.label,{_userInput:!0})}).join(", ");return l+=`
  `+((n=o)==null?"":n)+`
</div>
`,l}var ne={form:Zn,html:xn};function ee(e){var n,l="";return l+=`<table class="table table-bordered">
  <tbody>
    <tr>
      <td>
        `+((n=e.element)==null?"":n)+`
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <button class="btn btn-primary formio-button-add-resource" ref="addResource">
          <i class="`+((n=e.iconClass("plus"))==null?"":n)+` mr-1"></i>
          `+((n=e.t(e.component.addResourceLabel||"Add Resource",{_userInput:!0}))==null?"":n)+`
        </button>
      </td>
    </tr>
  </tbody>
</table>
`,l}var le={form:ee};function oe(e){var n,l="";l+=`<select
  ref="`+((n=e.input.ref?e.input.ref:"selectContainer")==null?"":n)+`"
  `+((n=e.input.multiple?"multiple":"")==null?"":n)+`
  `;for(var o in e.input.attr)l+=`
  `+((n=o)==null?"":n)+'="'+((n=e.input.attr[o])==null?"":n)+`"
  `;return l+=`
  `,e.input.attr.id||(l+=`
  id="`+((n=e.instance.id)==null?"":n)+"-"+((n=e.component.key)==null?"":n)+`"
  `),l+=`
  `,e.component.description&&(l+=`
  aria-describedby="d-`+((n=e.instance.id)==null?"":n)+"-"+((n=e.component.key)==null?"":n)+`"
  `),l+=`
  aria-required="`+((n=e.input.ref==="selectContainer"||!e.input.ref?e.input.component.validate.required:e.component.fields[e.input.ref].required)==null?"":n)+`"
>`+((n=e.selectOptions)==null?"":n)+`</select>
<input type="text"
       class="formio-select-autocomplete-input"
       ref="autocompleteInput"
       `,e.input.attr.autocomplete&&(l+=`
       autocomplete="`+((n=e.input.attr.autocomplete)==null?"":n)+`"
       `),l+=`
       tabindex="-1"
       aria-label="`+((n=e.t("autocomplete"))==null?"":n)+`"
/>
`,l}function ae(e){var n,l="";return l+='<div ref="value">',e.value?l+=(n=e.self.itemValueForHTMLMode(e.value))==null?"":n:l+="-",l+=`</div>
`,l}var re={form:oe,html:ae};function ie(e){var n,l="";l+="<option "+((n=e.selected?'selected="selected"':"")==null?"":n)+`
  value='`+((n=e.useId?e.id:e.option.value)==null?"":n)+`'
  `;for(var o in e.attrs)l+=`
  `+((n=o)==null?"":n)+'="'+((n=e.attrs[o])==null?"":n)+`"
  `;return l+=`
  >
  `+((n=e.t(e.option.label,{_userInput:!0}))==null?"":n)+`
</option>
`,l}function te(e){var n,l="";return e.selected&&(l+=(n=e.t(e.option.label,{_userInput:!0}))==null?"":n),l+=`
`,l}var se={form:ie,html:te};function ue(e){var n,l="";return l+=((n=e.element)==null?"":n)+`
<div
  class="signature-pad-body"
  style="width: `+((n=e.component.width)==null?"":n)+";height: "+((n=e.component.height)==null?"":n)+`;padding:0;margin:0;"
  tabindex="`+((n=e.component.tabindex||0)==null?"":n)+`"
  ref="padBody"
>
  <button class="btn btn-sm btn-light signature-pad-refresh" ref="refresh">
    <i class="`+((n=e.iconClass("refresh"))==null?"":n)+`"></i>
  </button>
  <canvas class="signature-pad-canvas" style="display: none;" height="`+((n=e.component.height)==null?"":n)+`" ref="canvas"></canvas>
  `,e.required&&(l+=`
  <span class="form-control-feedback field-required-inline text-danger">
    <i class="`+((n=e.iconClass("asterisk"))==null?"":n)+`"></i>
  </span>
  `),l+=`
  <img style="width: 100%;display: inherit;" ref="signatureImage">
</div>
`,e.component.footer&&(l+=`
  <div class="signature-pad-footer">
    `+((n=e.t(e.component.footer,{_userInput:!0}))==null?"":n)+`
  </div>
`),l+=`
`,l}function de(e){var n="";return n+=`<img style="width: 100%;" ref="signatureImage">
`,n}var pe={form:ue,html:de};function fe(e){var n,l="";return l+='<table class="table table-striped table-bordered" aria-labelledby="l-'+((n=e.instance.id)==null?"":n)+"-"+((n=e.component.key)==null?"":n)+`">
  <thead>
    <tr>
      <th></th>
      `,e.component.values.forEach(function(o){l+=`
      <th style="text-align: center;">
        `+((n=e.t(o.label,{_userInput:!0}))==null?"":n)+`
        `,o.tooltip&&(l+=`
          <i ref="tooltip" class="`+((n=e.iconClass("question-sign"))==null?"":n)+' text-muted" data-tooltip="'+((n=o.tooltip)==null?"":n)+`"></i>
        `),l+=`
      </th>
      `}),l+=`
    </tr>
  </thead>
  <tbody>
    `,e.component.questions.forEach(function(o){l+=`
    <tr>
      <td>
        `+((n=e.t(o.label))==null?"":n)+`
        `,o.tooltip&&(l+=`
          <i ref="tooltip" class="`+((n=e.iconClass("question-sign"))==null?"":n)+' text-muted" data-tooltip="'+((n=o.tooltip)==null?"":n)+`"></i>
        `),l+=`
      </td>
      `,e.component.values.forEach(function(a){l+=`
      <td style="text-align: center;">
        <input type="radio" name="`+((n=e.self.getInputName(o))==null?"":n)+'" value="'+((n=a.value)==null?"":n)+'" id="'+((n=e.key)==null?"":n)+"-"+((n=o.value)==null?"":n)+"-"+((n=a.value)==null?"":n)+`" ref="input">
      </td>
      `}),l+=`
    </tr>
    `}),l+=`
  </tbody>
</table>
`,l}function be(e){var n,l="";return l+=`<table class="table table-striped table-bordered">
  <tbody>
    `,e.component.questions.forEach(function(o){l+=`
    <tr>
      <th>`+((n=e.t(o.label))==null?"":n)+`</th>
      <td>
      `,e.component.values.forEach(function(a){l+=`
        `,e.value&&e.value.hasOwnProperty(o.value)&&e.value[o.value]===a.value&&(l+=`
          `+((n=e.t(a.label))==null?"":n)+`
        `),l+=`
      `}),l+=`
      </td>
    </tr>
    `}),l+=`
  </tbody>
</table>
`,l}var me={form:fe,html:be};function ve(e){var n,l="";return e.component.components.forEach(function(o,a){l+=`
  <div class="mb-2 card border">
    <div class="card-header bg-default">
      <h4 class="mb-0 card-title">`+((n=e.t(o.label,{_userInput:!0}))==null?"":n)+`</h4>
    </div>
    <div
      class="card-body"
      ref="`+((n=e.tabKey)==null?"":n)+`"
    >
      `+((n=e.tabComponents[a])==null?"":n)+`
    </div>
  </div>
`}),l+=`
`,l}function ce(e){var n,l="";return l+=`<div class="card card-tabs { ctx.component.verticalLayout ? ' card-vertical' : ''}}">
  <div class="card-header card-header-tabs">
    <ul class="nav nav-tabs `+((n=e.component.verticalLayout?" nav-tabs-vertical":"")==null?"":n)+`" role="tablist">
      `,e.component.components.forEach(function(o,a){l+=`
      <li class="nav-item `+((n=e.currentTab===a?" active":"")==null?"":n)+'" role="tab" ref="'+((n=e.tabLikey)==null?"":n)+`">
        <a
                class="nav-link`+((n=e.currentTab===a?" active":"")==null?"":n)+((n=e.component.verticalLayout?" nav-link-vertical":"")==null?"":n)+`"
                href="#`+((n=o.key)==null?"":n)+`"
                ref="`+((n=e.tabLinkKey)==null?"":n)+`"
        >
          `+((n=e.t(o.label,{_userInput:!0}))==null?"":n)+`
        </a>
        <div class="nav-border"></div>
      </li>
      `}),l+=`
    </ul>
  </div>
  `,e.component.components.forEach(function(o,a){l+=`
  <div
    role="tabpanel"
    class="card-body tab-pane`+((n=e.currentTab===a?" active":"")==null?"":n)+`"
    style="display: `+((n=e.currentTab===a?"block":"none")==null?"":n)+`"
    ref="`+((n=e.tabKey)==null?"":n)+`"
  >
    `+((n=e.tabComponents[a])==null?"":n)+`
  </div>
  `}),l+=`
</div>
`,l}var ge={flat:ve,form:ce};function he(e){var n,l="";return l+=`<table class="table
    `+((n=e.component.striped?"table-striped":"")==null?"":n)+`
    `+((n=e.component.bordered?"table-bordered":"")==null?"":n)+`
    `+((n=e.component.hover?"table-hover":"")==null?"":n)+`
    `+((n=e.component.condensed?"table-sm":"")==null?"":n)+`
  ">
  <caption class="sr-only">`+((n=e.t(e.component.label))==null?"":n)+`</caption>
  `,e.component.header&&e.component.header.length>0&&(l+=`
  <thead>
    <tr>
      `,e.component.header.forEach(function(o){l+=`
      <th>`+((n=e.t(o))==null?"":n)+`</th>
      `}),l+=`
    </tr>
  </thead>
  `),l+=`
  <tbody>
    `,e.tableComponents.forEach(function(o,a){l+=`
    <tr ref="row-`+((n=e.id)==null?"":n)+`">
      `,o.forEach(function(r,We){l+=`
      <td ref="`+((n=e.tableKey)==null?"":n)+"-"+((n=a)==null?"":n)+'"',e.cellClassName&&(l+=' class="'+((n=e.cellClassName)==null?"":n)+'"'),l+=">"+((n=r)==null?"":n)+`</td>
      `}),l+=`
    </tr>
    `}),l+=`
  </tbody>
</table>
`,l}var _e={form:he};function ye(e){var n,l="";return e.children.forEach(function(o){l+=`
  <td class="editgrid-table-column">
    `+((n=o)==null?"":n)+`
  </td>
`}),l+=`
`,l}var we={form:ye};function ke(e){var n,l="";return e.node.isRoot?l+=`
  <div ref="root" class="list-group-item">
`:l+=`
  <li ref="node" class="list-group-item sm:col-span-12 tree__level tree__level_`+((n=e.odd?"odd":"even")==null?"":n)+`">
`,l+=`
  `,e.content&&(l+=`
    <div ref="content" class="tree__node-content">
      `+((n=e.content)==null?"":n)+`
    </div>
  `),l+=`
  `,e.childNodes&&e.childNodes.length&&(l+=`
    <ul ref="childNodes" class="tree__node-children list-group grid grid-cols-12 gap-4">
      `+((n=e.childNodes.join(""))==null?"":n)+`
    </ul>
  `),l+=`
`,e.node.isRoot?l+=`
  </div>
`:l+=`
  </li>
`,l+=`
`,l}var Ce={form:ke};function $e(e){var n,l="";return l+=`<div class="node-edit">
  <div ref="nodeEdit">`+((n=e.children)==null?"":n)+`</div>
  `,e.readOnly||(l+=`
    <div class="node-actions">
      <button ref="saveNode" class="btn btn-primary saveNode">`+((n=e.t("Save"))==null?"":n)+`</button>
      <button ref="cancelNode" class="btn btn-danger cancelNode">`+((n=e.t("Cancel"))==null?"":n)+`</button>
    </div>
  `),l+=`
</div>
`,l}function Ie(e){var n,l="";return l+=`<div class="grid grid-cols-12 gap-4">
  `,e.values.forEach(function(o){l+=`
    <div class="sm:col-span-2">
      `+((n=o)==null?"":n)+`
    </div>
  `}),l+=`
  <div class="sm:col-span-3">
    <div class="btn-group pull-right">
      `,e.node.hasChildren&&(l+=`
        <button ref="toggleNode" class="btn btn-default btn-sm toggleNode">`+((n=e.t(e.node.collapsed?"Expand":"Collapse"))==null?"":n)+`</button>
      `),l+=`
      `,e.readOnly||(l+=`
        <button ref="addChild" class="btn btn-default btn-sm addChild">`+((n=e.t("Add"))==null?"":n)+`</button>
        <button ref="editNode" class="btn btn-default btn-sm editNode">`+((n=e.t("Edit"))==null?"":n)+`</button>
        <button ref="removeNode" class="btn btn-danger btn-sm removeNode">`+((n=e.t("Delete"))==null?"":n)+`</button>
        `,e.node.revertAvailable&&(l+=`
          <button ref="revertNode" class="btn btn-danger btn-sm revertNode">`+((n=e.t("Revert"))==null?"":n)+`</button>
        `),l+=`
      `),l+=`
    </div>
  </div>
</div>
`,l}var ze={treeView:{form:Ie},treeEdit:{form:$e}};function Ee(e){var n,l="";return l+='<div class="text-muted text-center p-2">'+((n=e.t(e.component.title,{_userInput:!0}))==null?"":n)+`</div>
`,l}function Re(e){var n,l="";return l+='<div class="'+((n=e.classes)==null?"":n)+'" ref="webform" novalidate>'+((n=e.children)==null?"":n)+`</div>
`,l}var Pe={form:Re,builder:Ee};function qe(e){var n,l="";return l+=`<div class="border-1 border-solid border-gray-300 bg-gray-200 shadow-inner p-5 rounded">
  <div ref="`+((n=e.nestedKey)==null?"":n)+`">
    `+((n=e.children)==null?"":n)+`
  </div>
</div>
`,l}var Le={form:qe};function Ae(e){var n,l="";return l+='<div class="text-muted text-center p-2">'+((n=e.t(e.component.title,{_userInput:!0}))==null?"":n)+`</div>
`,l}function Ke(e){var n,l="";return l+='<div class="'+((n=e.className)==null?"":n)+`">
    <div style="position: relative;">
        `,e.wizardHeaderType==="wizardHeaderVertical"?(l+=`
        <div class="row">
            `,e.wizardHeaderLocation!=="right"&&(l+=`
            <div class="col-sm-2">
                `+((n=e.wizardHeader)==null?"":n)+`
            </div>
            `),l+=`
            <div class="wizard-page col-sm-10" ref="`+((n=e.wizardKey)==null?"":n)+`">
                `+((n=e.components)==null?"":n)+`
            </div>
            `,e.wizardHeaderLocation==="right"&&(l+=`
            <div class="col-sm-2">
                `+((n=e.wizardHeader)==null?"":n)+`
            </div>
            `),l+=`
        </div>
        <div class="col-sm-offset-2 col-sm-10 `+((n=e.wizardHeaderLocation==="right"?"col-sm-offset-0 col-md-offset-0":"")==null?"":n)+`">
            `+((n=e.wizardNav)==null?"":n)+`
        </div>
        `):l+=`
        `+((n=e.wizardHeader)==null?"":n)+`
        <div class="wizard-page" ref="`+((n=e.wizardKey)==null?"":n)+`">
            `+((n=e.components)==null?"":n)+`
        </div>
        `+((n=e.wizardNav)==null?"":n)+`
        `,l+=`
    </div>
</div>
`,l}var Ne={form:Ke,builder:Ae};function Te(e){var n,l="";return l+='<nav aria-label="Wizard navigation" id="'+((n=e.wizardKey)==null?"":n)+'-header" ref="'+((n=e.wizardKey)==null?"":n)+`-header">
  <ul class="pagination" role="tablist">
    `,e.panels.forEach(function(o,a){l+=`
    <li class="page-item`+((n=e.currentPage===a?" active":"")==null?"":n)+`" style="cursor: pointer;">
      <button tabindex="0" data-index="`+((n=a)==null?"":n)+'" role="tab" class="page-link" ref="'+((n=e.wizardKey)==null?"":n)+`-link">
        `+((n=e.t(o.title,{_userInput:!0}))==null?"":n)+`
        `,o.tooltip&&e.currentPage===a&&(l+=`
        <i ref="`+((n=e.wizardKey)==null?"":n)+'-tooltip" class="'+((n=e.iconClass("question-sign"))==null?"":n)+' text-muted" data-tooltip="'+((n=o.tooltip)==null?"":n)+`"></i>
        `),l+=`
      </button>
    </li>
    `}),l+=`
  </ul>
</nav>
`,l}var Se={form:Te};function Me(e){var n,l="";return l+='<nav aria-label="navigation" id="'+((n=e.wizardKey)==null?"":n)+`-header">
  <div class="classic-pagination row justify-content-center" style="border-bottom:0;">
    `,e.panels.forEach(function(o,a){l+=`
      <div class="classic-pagination-page col-xs-12 col-sm-6 col-md-3
          `+((n=e.currentPage<a?" disabled":"")==null?"":n)+`
          `+((n=e.currentPage===a?" active":"")==null?"":n)+`
          `+((n=e.currentPage>a?" complete":"")==null?"":n)+`">
        <div class="text-center classic-pagination-title">`+((n=e.t(o.title,{_userInput:!0}))==null?"":n)+`</div>
        `,e.panels.length>1&&(l+=`
          <div class="progress"><div class="progress-bar"></div></div>
        `),l+=` 
        <span ref="`+((n=e.wizardKey)==null?"":n)+`-link" class="classic-pagination-dot"></span>
      </div>
    `}),l+=`
  </div>
</nav>
`,l}var Oe={form:Me};function Be(e){var n,l="";return l+='<nav aria-label="navigation" id="'+((n=e.wizardKey)==null?"":n)+`-header">
  <ul class="pagination flex-column">
    `,e.panels.forEach(function(o,a){l+=`
    <li class="col-xs-12 page-item`+((n=e.currentPage===a?" active":"")==null?"":n)+`" style="cursor: pointer;">
      <span class="page-link" ref="`+((n=e.wizardKey)==null?"":n)+`-link" style="margin-left: 0px;">
        `+((n=e.t(o.title,{_userInput:!0}))==null?"":n)+`
        `,o.tooltip&&e.currentPage===a&&(l+=`
        <i ref="`+((n=e.wizardKey)==null?"":n)+'-tooltip" class="'+((n=e.iconClass("question-sign"))==null?"":n)+' text-muted" data-tooltip="'+((n=o.tooltip)==null?"":n)+`"></i>
        `),l+=`
      </span>
    </li>
    `}),l+=`
  </ul>
</nav>
`,l}var He={form:Be};function Fe(e){var n,l="";return l+='<ul class="formio-wizard-nav-container list-inline" id="'+((n=e.wizardKey)==null?"":n)+`-nav">
  `,e.buttonOrder.forEach(function(o){l+=`
    `,o==="cancel"&&e.buttons.cancel&&(l+=`
    <li>
      <button class="btn btn-secondary btn-wizard-nav-cancel" ref="`+((n=e.wizardKey)==null?"":n)+'-cancel" aria-label="'+((n=e.t("cancelButtonAriaLabel"))==null?"":n)+'">'+((n=e.t("cancel"))==null?"":n)+`</button>
    </li>
    `),l+=`
    `,o==="previous"&&e.buttons.previous&&(l+=`
    <li>
      <button class="btn btn-primary btn-wizard-nav-previous" ref="`+((n=e.wizardKey)==null?"":n)+'-previous" aria-label="'+((n=e.t("previousButtonAriaLabel"))==null?"":n)+'">'+((n=e.t("previous"))==null?"":n)+`</button>
    </li>
    `),l+=`
    `,o==="next"&&e.buttons.next&&(l+=`
    <li>
      <button class="btn btn-primary btn-wizard-nav-next" ref="`+((n=e.wizardKey)==null?"":n)+'-next" aria-label="'+((n=e.t("nextButtonAriaLabel"))==null?"":n)+'">'+((n=e.t("next"))==null?"":n)+`</button>
    </li>
    `),l+=`
    `,o==="submit"&&e.buttons.submit&&(l+=`
    <li>
      `,e.disableWizardSubmit?l+=`
      <button disabled class="btn btn-primary btn-wizard-nav-submit" ref="`+((n=e.wizardKey)==null?"":n)+'-submit" aria-label="'+((n=e.t("submitButtonAriaLabel"))==null?"":n)+'">'+((n=e.t("submit"))==null?"":n)+`</button>
      `:l+=`
      <button class="btn btn-primary btn-wizard-nav-submit" ref="`+((n=e.wizardKey)==null?"":n)+'-submit" aria-label="'+((n=e.t("submitButtonAriaLabel"))==null?"":n)+'">'+((n=e.t("submit"))==null?"":n)+`</button>
      `,l+=`
    </li>
    `),l+=`
  `}),l+=`
</ul>
`,l}var De={form:Fe},je=i({ICONS:t,transform(e,n){if(!n)return n;switch(e){case"class":return this.cssClasses.hasOwnProperty(n.toString())?this.cssClasses[n.toString()]:n}return n},defaultIconset:"bx",iconClass:hn,cssClasses:V,address:u,builder:b,builderComponent:v,builderComponents:g,builderEditForm:_,builderPlaceholder:w,builderSidebar:C,builderSidebarGroup:I,builderWizard:E,button:q,checkbox:K,columns:T,component:M,componentModal:B,components:F,tableComponents:we,container:j,datagrid:U,day:Y,dialog:Q,editgrid:nn,editgridTable:on,field:un,fieldset:pn,file:bn,html:vn,icon:gn,input:wn,label:Cn,loader:In,loading:En,map:Pn,message:Ln,modaledit:Tn,modaldialog:Kn,modalPreview:Mn,multipleMasksInput:Bn,multiValueRow:Fn,multiValueTable:jn,panel:Wn,pdf:Un,pdfBuilder:Yn,pdfBuilderUpload:Qn,radio:ne,resourceAdd:le,select:re,selectOption:se,signature:pe,survey:me,tab:ge,table:_e,tree:Ce},ze,{webform:Pe,well:Le,wizard:Ne,wizardHeader:Se,wizardHeaderClassic:Oe,wizardHeaderVertical:He,wizardNav:De,errorsList:rn,alert:p}),Ve={tailwind:je},Ge={framework:"tailwind",templates:Ve};export{Ge as i};
//# sourceMappingURL=index.modern-f0a5489b.js.map
