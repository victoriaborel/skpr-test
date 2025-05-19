module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter component name, please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "./src/components/{{kebabCase name}}/index.ts",
        templateFile: "plop-templates/component/index.ts.hbs",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "./src/components/{{kebabCase name}}/{{kebabCase name}}.tsx",
        templateFile: "plop-templates/component/component.tsx.hbs",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "./src/components/{{kebabCase name}}/{{kebabCase name}}.types.ts",
        templateFile: "plop-templates/component/component.types.ts.hbs",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "./src/components/{{kebabCase name}}/{{kebabCase name}}.module.css",
        templateFile: "plop-templates/component/component.module.css.hbs",
        skipIfExists: true,
      },
    ],
  });
};
