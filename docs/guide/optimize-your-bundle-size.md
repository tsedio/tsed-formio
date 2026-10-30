# Optimize your bundle size

Because @tsed/react-formio provides multiple exports and a mechanism to register your own components, you can reduce
the bundle size by importing only the components you need.

But you have to create your own imports file to import only the components you need.

The first step is to create a `registers.ts` file:

  ```ts
```

> Comment lines you don't need and add your own component if necessary.

This file references all the components used by the library, you can remove the components you don't need or replace
them by your own component.

Then you can import only the components you need in your application:

```tsx
// import "@tsed/react-formio/all"; // remove or comment this line

function App() {
  return (
    <div className='App'>
      <FormBuilder display={"form"} components={[/**/]} />
    </div>
  );
}

export default App;
```
