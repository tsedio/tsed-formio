import { mapRequestParams } from "./mapRequestParams";

describe("mapRequestParams", () => {
  it("should map request params to call formio API (1)", () => {
    const result = mapRequestParams({
      query: {
        type: "form",
        tags: "survey"
      },
      select: ["id", "components"],
      filters: [
        {
          id: "data.name",
          value: "value"
        },
        {
          id: "data.id",
          value: "value2"
        }
      ],
      sortBy: [
        {
          id: "data.id",
          desc: true
        }
      ]
    });

    expect(result).toEqual({
      "data.name__regex": "/value/gi",
      "data.id__regex": "/value2/gi",
      select: "id,components",
      skip: 0,
      limit: 10,
      sort: "-data.id",
      tags: "survey",
      type: "form"
    });
  });
  it("should map request params to call formio API (2)", () => {
    const result = mapRequestParams({
      pageSize: 20,
      pageIndex: 3,
      query: {
        type: "form",
        tags: "survey"
      },
      select: "id,components",
      filters: [
        {
          id: "data.name",
          value: "value"
        }
      ],
      sortBy: [
        {
          id: "data.id",
          desc: false
        }
      ]
    });

    expect(result).toEqual({
      "data.name__regex": "/value/gi",
      limit: 20,
      select: "id,components",
      skip: 60,
      sort: "data.id",
      tags: "survey",
      type: "form"
    });
  });
  it("should map request params to call formio API (3)", () => {
    const result = mapRequestParams({});

    expect(result).toEqual({
      limit: 10,
      skip: 0
    });
  });
});
