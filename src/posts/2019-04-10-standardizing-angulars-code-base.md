---
path: /standardizing-angulars-code-base
title: Standardizing Angular's code base
description: Standardizing Angular's code base
date: 2019-04-10T04:04:27.277Z
thumbnail: /img/ivan-bandura-757598-unsplash.jpg
---
![Dirty](/img/ivan-bandura-757598-unsplash.jpg "Dirty")

Newer versions of Angular comes with tools like `codelyzer`, `tslint` to help us writes better and cleaner code with static code analysis that shows warnings or suggestions. But many tends to ignore them as the tools don't force the developers to comply to the rules.

Tools like `husky`, `lint-staged` and prettier can be useful and it might even help your team to get the most out of Typescript if they are used correctly and suitable to your team's needs and workflow. The combination of `husky` and `lint-staged` can be config to lint the code at git `pre-commit` or `pre-push` hooks, and make sure that no bad code gets commit or push into the repository.  While prettier can be useful when you want to standardized project's code formatting styles when your team members use different editors or formatting plugins. Moreover, these tools can create clean code habits for junior developers.

**But the most important thing isn't tools being used, it is the agreements and discussions between team members to setup the standards. If your team has no particular code standards, first start with discussions and a lot of (healthy) arguments and then make use of these tools.**
