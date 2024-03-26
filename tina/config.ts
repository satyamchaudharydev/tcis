import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";



export default defineConfig({
  branch,
  // Get this from tina.io
  clientId: "ff3fc3c1-9a61-4add-99b3-21daac12f6c5", // Get this from tina.io
  token: "1081257f565400924c7b54cc51ae00f47142eb39", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
    ],
  },
});
