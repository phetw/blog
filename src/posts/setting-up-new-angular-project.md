---
title: Setting up a new Angular project
description: My personal notes when setting up a new small to medium scale Angular project
date: 2019-06-13T04:51:42.715Z
thumbnail: /img/jeff-sheldon-3220-unsplash.jpg
---
![Planning](/img/jeff-sheldon-3220-unsplash.jpg "Planning")

## Ng new

Yes, it's the Angular cli's `ng new`. It offers a couple of options to configure when starting a new project. For example, style-sheet type `css | scss` or app `prefix` or application's `routing`. I find it is much easier to configure at the beginning of the project than later skimming through `angular.json`.

## Setting up code linter

Angular comes bundle with ready to use `tslint`, which proves to be the Typescript's best friend. Reading through [here](https://palantir.github.io/tslint/rules/) you will find a list of tslint's configuration options, tinker them to suit your team's standard.
Furthermore, `stylelint` can also be apply at them same way.

## Setting up code formatter

Different team members may use a different code formatter in their IDE or text editor, a package name `prettier` can be use to consistently format the code according to the configured options in `.prettierrc.json` file.

## Setting up git hook

To enforce linter's rules and prevent bad code from committing to repository, package like husky can be used to intercept git hooks. I always pair them up with lint-staged to only run linters and format code on staged files.

## Decide modules structure

I always go with typical core/shared/feature modules option when the project is small to medium scale. It's far more than enough for most of the use cases. Then finally, think about your application business requirement and decide modules/routings accordingly. Always try to decide a reusable components and always **DRY** _(don't repeat yourself)_ and **KISS** _(keep it simple stupid)_.

## Code style

Setup team's code style. I usually refers to the official [Angular's style guide](https://angular.io/guide/styleguide), but there are plenty of things that aren't mentioned like Observable should end with `$`. Discuss and put up a documentation somewhere, so that they can be reuse throughout the organization.
