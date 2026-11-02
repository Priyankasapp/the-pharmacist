import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import seofields from "sanity-plugin-seofields";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

export default defineConfig({
  name: "the-pharmacist-studio",
  title: "The Pharmacist Studio",
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    seofields({
      healthDashboard: false,
    }),
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
