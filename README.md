# aurelia-skeleton-plugin-typescript

[![ZenHub](https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png)](https://zenhub.io)
[![Join the chat at https://gitter.im/aurelia/discuss](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aurelia/discuss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This skeleton is part of the [Aurelia](http://www.aurelia.io/) platform. It sets up a standard aurelia plugin using TypeScript. Karma/Jasmine testing is also configured.

> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.aurelia.io/) and [our email list](http://eepurl.com/ces50j). We also invite you to [follow us on twitter](https://twitter.com/aureliaeffect). If you have questions, please [join our community on Gitter](https://gitter.im/aurelia/discuss) or use [stack overflow](http://stackoverflow.com/search?q=aurelia). Documentation can be found [in our developer hub](http://aurelia.io/hub.html). If you would like to have deeper insight into our development process, please install the [ZenHub](https://zenhub.io) Chrome or Firefox Extension and visit any of our repository's boards.

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. To build the code, you can now run:

  ```shell
  npm run build
  ```
4. You will find the compiled code in the `dist` folder, available in five module formats: AMD, CommonJS, ES2015, ES2017 and System.

## Running The Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
2. You can now run the tests with this command:

  ```shell
  npm test
  ```

Alternatively, you can run the tests in watch mode with this command:

```shell
npm run develop
```

## Installing the plugin

### In a CLI-based app

```json
{
  "name": "aurelia-skeleton-plugin-typescript",
  "path": "../node_modules/aurelia-skeleton-plugin-typescript/dist/amd",
  "main": "index",
  "resources": ["**/*.{css,html}"]
}
```
