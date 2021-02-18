declare module "formiojs/*" {
  export = {} as any;
}
declare module "classnames" {
  type classNames = (...args: any[]) => string;
  const classNames: classNames;

  export = classNames;
}
