# _Beehave_

#### _Beehave, 3.31.17_

#### By _**Michaela Davis**_

This sugar tracking application allows users to log what they've eaten each day, including details about the item and the grams of sugar it contains.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Configuration / Dependencies
  * NPM (Development)
    * @angular-cli (Populates  an Angular application)
    * @angular/compiler-cli (Compiles TypeScript into JavaScript in which browsers can understand)
    * Jasmine - core, spec-reporter  (Behavior-driven development framework for testing JavaScript code)
    * Node (JavaScript runtime built on Chrome's V8 JavaScript engine)
    * ts-node (TypeScript execution environment for node)
    * typescript (A superset of JavaScript that compiles to clean JavaScript output)
    * codelyzer (Helps write consistent code, and discover potential errors)
    * gulp-concat (concatenates files into one)
    * karma - chrome-launcher, cli, jasmine, jasmine-html-reporter, coverage-istanbul-reporter (Allows you to execute JavaScript code in multiple real browsers)
    * protractor (end-to-end test framework for Angular and AngularJS applications)
    * tslint (Checks your TypeScript code for readability, maintainability, and functionality errors)

  * bower (Production)
    * Bootstrap

## Planning
* Model / forms
  * food:
  * details:
  * grams: (of sugar)

* app.module.ts (Root Module)
  * app.component.ts (Root Component)
    * food-list.component.ts (Nested Component)
      * food-list.component.html (Corresponding Template)
    * edit-food.component.ts (Nested Component)
      * edit-food.component.html (Corresponding Template)
    * new-food.component.ts (Nested Component)
      * new-food.component.html (Corresponding Template)

* `npm install -g angular-cli`
* `npm install -g typescript`
* `npm new beehave`
* `npm install bower -g`
* `bower init` (in project directory)
* `bower install bootstrap --save` (in project directory)
* `ng serve` (in project directory)
* `ng lint`  (in project directory) this runs a linter that will help locate syntax errors

* replace angular favicon with Beehave icon
* connect to github
* COMMIT -m "init commit, with Beehave icon"

* COMMIT -m "add planning with angular-cli commands corresponding to commits"

* `ng g class food.model`
* COMMIT -m "create food model"

* `ng g component food-list`
* COMMIT -m "create food-list component"

* `ng g component new-food`
* COMMIT -m "add new-food component with form"

* `ng g component edit-food`
* COMMIT -m "add edit-food component with form"

* `ng g pipe sugar-grams`
* COMMIT -m "implement sugarColor by grams"
