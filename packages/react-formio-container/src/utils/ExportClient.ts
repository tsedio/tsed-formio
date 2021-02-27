import { FormSchema } from "@tsed/react-formio";
import FileSaver from "file-saver";
import moment from "moment";
import { httpClient } from "./HttpClient";

async function getDatabase() {
  return httpClient.get("/export");
}

async function exportForm(form: FormSchema) {
  const database = await getDatabase();
  return (
    database.forms[form.machineName] || database.resources[form.machineName]
  );
}

async function exportActions(form: FormSchema) {
  const database = await getDatabase();

  return Object.entries(database.actions).reduce(
    (obj, [machineName, action]) => {
      if (machineName.startsWith(form.machineName)) {
        obj[machineName] = action;
      }

      return obj;
    },
    {}
  );
}

async function getContent(form: FormSchema, type: string, format = "json") {
  let result;
  console.log(form, type, format);
  switch (type) {
    case "schema":
      result = await exportForm(form);
      break;
    case "actions":
      result = await exportActions(form);
      break;
    case "form":
    default:
      result = await httpClient.get(
        `/form/${form._id}/export?format=${format}`
      );
  }

  if (format === "json") {
    result = JSON.stringify(result, null, 2);
  }

  return result;
}

function getName(name: string, format: "json" | "csv") {
  const env = window.location.origin
    .replace(/https?:\/\//, "")
    .replace(/\./gi, "-")
    .split(":")[0];

  name = `${moment().format("YYYYMMDDHHmmss")}-${env}-${name}`;

  return `${name}.${format}`;
}

function createBlob(name: string, data: any, contentType: string) {
  const blob = new Blob([data], { type: `${contentType};charset=utf-8` });
  FileSaver.saveAs(blob, name);
}

export async function exportAs(
  form: any,
  type: string,
  format: "json" | "csv"
) {
  const result = await getContent(form, type, format);
  const name = `${form.machineName}-${type}`;
  format = format === "csv" ? "csv" : "json";

  createBlob(getName(name, format), result, `text/${format}`);
}

export async function exportDatabase(name: string) {
  const result = JSON.stringify(await getDatabase(), null, 2);

  createBlob(getName(`${name}-database`, "json"), result, "text/json");
}
