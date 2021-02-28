import startCase from "lodash/startCase";
import toLower from "lodash/toLower";

export const ucfirst = (t: string) => startCase(toLower(t));
