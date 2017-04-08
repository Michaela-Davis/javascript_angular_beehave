# _Beehave_

#### _Beehave, 3.31.17_

#### By _**Michaela Davis**_

This sugar tracking application allows users to log what they've eaten each day, including details about the item and the grams of sugar it contains.

## Prerequisites

You will need the following things properly installed on your computer:

* [Angular CLI](https://github.com/angular/angular-cli) v1
* [Atom](https://atom.io/) v1 (or another text editor)
* [Bower](https://bower.io/) v1
* [Git](https://git-scm.com/) v2
* [Node.js](https://nodejs.org/) v4 (with NPM)
* [TypeScript](https://git-scm.com/) v2

## Installation

```bash
git clone https://github.com/Michaela-Davis/javascript_angular_beehave.git
cd javascript_angular_beehave
npm install
bower install
```


## Running / Development

* `ng serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).


This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

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

* `apm install atom-typescript` (installs package in Atom that takes away the endless gray in .ts files)

* `ng g class food.model`
* COMMIT -m "create food model"

* `ng g component food-list`
* COMMIT -m "create food-list component"

* `ng g component new-food`
* COMMIT -m "add new-food component with form"

* `ng g component edit-food`
* COMMIT -m "add edit-food component with form"

* `ng g pipe sugar-grams`
* COMMIT -m "implement sugarGrams pipe"
