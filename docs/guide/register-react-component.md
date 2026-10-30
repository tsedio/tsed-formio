# Registering react components

You can register your own components to be used within the `@tsed/react-formio` library. This is useful if you want to
customize `FormEdit` or `Table` components.

For example FormEdit component use the followings components:

```ts
```

You can replace for example replace the default React Button component provided by the library by your own Button:

```tsx

registerComponent("button", (props: ButtonProps) => {
  return <button {...props}>{props.label}</button>;
});
```

A large part of the provided component from the library can be replaced by your own component.

> Note: Override Button react component doesn't affect the button design and implementation used by formio.js.
> To styling the original button component formio, you have to redefine the `.btn` class in your CSS.
