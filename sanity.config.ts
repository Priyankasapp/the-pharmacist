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
      geo: false,
      fieldGroups: [
        {
          name: "meta",
          title: "Meta",
          default: true,
          fields: [
            "title",
            "description",
            "metaImage",
            "keywords",
            "canonicalUrl",
            "robots",
          ],
        },
        {
          name: "openGraph",
          title: "Open Graph",
          fields: ["openGraph"],
        },
        {
          name: "twitter",
          title: "Twitter / X",
          fields: ["twitter"],
        },
      ],
    }),
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
