import * as Collections from "./collections";
import { generateProject, app } from "./utils";

const application = app({
  id: "bluelib-todo",
  collections: Object.values(Collections),
});

generateProject(application, {
  // Mark this as true when you want to override even the non-overridable files
  // override: true,
});
