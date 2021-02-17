import FormioFormBuilder from 'formiojs/FormBuilder'
import React, { useEffect, useRef } from 'react'

function WrapperFormBuilder ({ options, form }) {
  const ref = useRef()

  const initializeBuilder = (form, options) => {
    options = Object.assign({}, options)
    form = Object.assign({}, form)

    const builder = new FormioFormBuilder(ref.current, form, options)
    builder.ready.then(() => {
      // onChange();
      // builderEvents.forEach(({name, action}) => builder.instance.on(name, action));
    })

    return builder
  }

  useEffect(() => {
    const builder = initializeBuilder(form, options)
    return () => builder.instance.destroy(true)
  }, [form, options])

  return (
    <div>
      <div ref={ref}/>
    </div>
  )
}

export default {
  title: 'Formiojs/Select',
  component: WrapperFormBuilder,
  argTypes: {
    display: {
      control: {
        type: 'select',
        options: ['form', 'wizard']
      }
    },
    template: {
      control: {
        type: 'select',
        options: ['tailwind', 'bootstrap', 'semantic']
      }
    },
    iconset: {
      control: {
        type: 'select',
        options: ['bx', 'fa']
      }
    },
    form: {
      control: {
        type: 'object'
      }
    }
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  }
}

export const Sandbox = (args) => {
  return (
    <WrapperFormBuilder form={{ ...args.form, display: args.display }}
                        options={{ template: args.template, iconset: args.iconset }}/>
  )
}

Sandbox.args = {
  form: {
    '_id': '6023f8fe4b1a2ab9a3aae096',
    'type': 'form',
    'tags': [],
    'owner': '5d0797a382461b6656d2c790',
    'components': [
      {
        'label': 'Select',
        'multiple': true,
        'labelPosition': 'top',
        'widget': 'choicesjs',
        'placeholder': 'placeholder',
        'description': '',
        'tooltip': '',
        'customClass': '',
        'tabindex': '',
        'hidden': false,
        'hideLabel': false,
        'uniqueOptions': false,
        'autofocus': false,
        'disabled': false,
        'tableView': true,
        'modalEdit': false,
        'dataSrc': 'values',
        'data': {
          'values': [{ 'label': 'label', 'value': 'label' }, { 'label': 'save', 'value': 'save' }],
          'resource': '',
          'json': '',
          'url': '',
          'custom': ''
        },
        'valueProperty': '',
        'dataType': '',
        'idPath': 'id',
        'template': '<span>{{ item.label }}</span>',
        'refreshOn': '',
        'refreshOnBlur': '',
        'clearOnRefresh': false,
        'searchEnabled': true,
        'selectThreshold': 0.3,
        'readOnlyValue': false,
        'customOptions': {},
        'useExactSearch': false,
        'persistent': true,
        'protected': false,
        'dbIndex': false,
        'encrypted': false,
        'clearOnHide': true,
        'customDefaultValue': '',
        'calculateValue': '',
        'calculateServer': false,
        'allowCalculateOverride': false,
        'validateOn': 'change',
        'validate': {
          'required': false,
          'customMessage': '',
          'custom': '',
          'customPrivate': false,
          'json': '',
          'strictDateValidation': false,
          'multiple': false,
          'unique': false
        },
        'unique': false,
        'errorLabel': '',
        'key': 'select',
        'tags': [],
        'properties': {},
        'conditional': { 'show': null, 'when': null, 'eq': '', 'json': '' },
        'customConditional': '',
        'logic': [],
        'attributes': {},
        'overlay': { 'style': '', 'page': '', 'left': '', 'top': '', 'width': '', 'height': '' },
        'type': 'select',
        'indexeddb': { 'filter': {} },
        'selectFields': '',
        'searchField': '',
        'minSearch': 0,
        'filter': '',
        'limit': 100,
        'redrawOn': '',
        'input': true,
        'prefix': '',
        'suffix': '',
        'showCharCount': false,
        'showWordCount': false,
        'allowMultipleMasks': false,
        'lazyLoad': true,
        'authenticate': false,
        'searchThreshold': 0.3,
        'fuseOptions': { 'include': 'score', 'threshold': 0.3 },
        'id': 'ebqtqd6',
        'defaultValue': ''
      }
    ],
    'revisions': '',
    '_vid': 0,
    'title': 'text-field',
    'display': 'form',
    'access': [{
      'roles': ['5d0797bc872fc747da559858', '5d0797bc872fc71d05559859', '5d0797bc872fc7da3b55985a'],
      'type': 'read_all'
    }],
    'submissionAccess': [],
    'controller': '',
    'properties': {},
    'settings': {},
    'name': 'textField',
    'path': 'textfield',
    'project': '5d0797bc872fc7d140559857',
    'created': '2021-02-10T15:17:18.028Z',
    'modified': '2021-02-10T21:38:52.325Z',
    'machineName': 'tcspjwhsevrzpcd:textField'
  },
  display: 'form',
  template: 'tailwind',
  iconset: 'bx'
}
