import { writeFile } from "node:fs/promises";

import { v4 } from "uuid";

import products from "./products.json" with { type: "json" };

const result = products.map((product) => {
  return {
    _id: v4(),
    owner: null,
    roles: [],
    data: {
      id: product.id,
      label: product.title,
      description: product.description_title,
      image: product.media.immersive_image,
      price: product.price?.initial_price?.per_trip,
      currency: product.price?.currency
    },
    access: [],
    externalIds: [],
    created: new Date().toISOString(),
    modified: new Date().toISOString(),
    form: "5e972ae7a1a692917cf54f9e"
  };
});

await writeFile("./form-submissions.json", JSON.stringify(result, null, 2), { encoding: "utf-8" });
