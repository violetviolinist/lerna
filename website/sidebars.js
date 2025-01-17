/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // main: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  main: [
    "introduction",
    "getting-started",
    {
      type: "category",
      label: "Core Concepts",
      items: [
        "core-concepts/bootstrapping",
        "core-concepts/running-tasks",
        "core-concepts/versioning-and-publishing",
        "core-concepts/computation-caching",
        "core-concepts/distributed-task-execution",
      ],
      link: {
        type: "generated-index",
        title: "Core Concepts",
        description: "Learn about the most important core concepts of Lerna!",
        slug: "/core-concepts",
        keywords: ["core", "caching", "dte", "versioning", "publishing"],
      },
    },
    "configuration",
    {
      type: "category",
      label: "Guides",
      items: ["guides/hoisting"],
    },
    {
      type: "category",
      label: "API Reference",
      items: ["api-reference/commands", "api-reference/filter-options"],
    },
    {
      type: "doc",
      label: "FAQ",
      id: "faq",
    },
    "troubleshooting",
  ],
};

module.exports = sidebars;
