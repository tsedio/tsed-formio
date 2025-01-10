export function filter(args: any[]) {
  return args.map((item) => {
    if (item && item._form) {
      return "FormioInstance";
    }

    if (item && item.component) {
      return ["Component", item.component.type, item.component.key].filter(Boolean).join(":");
    }

    if (item && item.changed) {
      return `${item.changed.component.key}(${item.changed.value})`;
    }

    return item;
  });
}

export function wrap(args: any) {
  return {
    ...args,
    onPrevPage: (...list: any[]) => {
      return args.onPrevPage(...filter(list));
    },
    onNextPage: (...list: any[]) => {
      return args.onNextPage(...filter(list));
    },
    onCancel: (...list: any[]) => {
      return args.onCancel(...filter(list));
    },
    onChange: (...list: any[]) => {
      return args.onChange(...filter(list));
    },
    onCustomEvent: (...list: any[]) => {
      return args.onCustomEvent(...filter(list));
    },
    onComponentChange: (...list: any[]) => {
      return args.onComponentChange(...filter(list));
    },
    onSubmit: (...list: any[]) => {
      return args.onSubmit(...filter(list));
    },
    onSubmitDone: (...list: any[]) => {
      return args.onSubmitDone(...filter(list));
    },
    onFormLoad: (...list: any[]) => {
      return args.onFormLoad(...filter(list));
    },
    onError: (...list: any[]) => {
      return args.onError(...filter(list));
    },
    onRender: (...list: any[]) => {
      return args.onRender(...filter(list));
    },
    onAttach: (...list: any[]) => {
      return args.onAttach(...filter(list));
    },
    onBuild: (...list: any[]) => {
      return args.onBuild(...filter(list));
    },
    onFocus: (...list: any[]) => {
      return args.onFocus(...filter(list));
    },
    onBlur: (...list: any[]) => {
      return args.onBlur(...filter(list));
    },
    onInitialized: (...list: any[]) => {
      return args.onInitialized(...filter(list));
    },
    onFormReady: (...list: any[]) => {
      return args.onFormReady(...filter(list));
    }
  };
}
