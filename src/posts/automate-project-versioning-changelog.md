---
title: Automate project versioning & CHANGELOG
description: Automate project versioning & CHANGELOG without tears
date: 2019-06-04T04:51:42.715Z
thumbnail: /img/nathan-anderson-388399-unsplash.jpg
---
![Changes are inevitable](/img/nathan-anderson-388399-unsplash.jpg "Changes are inevitable")

Recently, I was assigned to plan for the project versioning and change log on an Angular project. In this article, I will shared my solution and I hope that this can guide you more or less.

## Why versioning and CHANGELOG ?

Simple. Changes are inevitable in software development and documentation on changes is a must, especially you are building public packages or APIs that a lot of projects depends on. 

## It's hard and boring

Yes, I definitely agreed to that. It's a repetitive work, but we are a programmer we write code to solve problems. So, why not automate it ?

## Versioning standard

[Semantic versioning](https://semver.org/) is the basic versioning standard for most of the packages or projects, and in this article I will follow this standard. 

## When to bump version ?

1. When there are new features.
2. When there are bug fixes,
3. When there are braking changes.

## How to automate ?

By following a commit pattern called, [conventional-commit](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) which is also being used by the Angular [repository](https://github.com/angular/angular). This will allow the tool called [standard-version](https://github.com/conventional-changelog/standard-version) to specify the differences between features, bug fixes and breaking changes and bump version automatically according to semantic versioning.

Setup is simple. 

1. `npm i --save-dev standard-version`
2. add script `{`
      `"scripts": {`
      `"release": "standard-version"`
      `}`
      `}`
3. run `npm run release -- --first-release` to init CHANGELOG.md
4. Subsequently run `npm run release` after each release

[Example of generated CHANGELOG.md](https://github.com/conventional-changelog/standard-version/blob/master/CHANGELOG.md)

There is also an alternative tool called [semantic-release](https://github.com/semantic-release/semantic-release). It's a fully automated version management and package publishing. Personally, I prefer the one I previously mentioned as it gives more controls over bumping version.

_Happy coding!_
