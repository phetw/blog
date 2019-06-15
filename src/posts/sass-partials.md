---
title: SASS partials
description: Modularize your cascading style sheets using SASS
date: 2019-06-15T02:17:40.121Z
thumbnail: /img/kelli-tungay-324329-unsplash.jpg
---
![Colors](/img/kelli-tungay-324329-unsplash.jpg "Colors")

## CSS with superpowers.

CSS can be a lot repetitive and hard to maintain codes when it comes to large a code base. This is where CSS preprocessors like SASS comes into play. It helps us to create a much more maintainable, fun and productive to write stylesheets by adding extra awesome functionalities such as easier nesting, import, extend, inheritance etc.

When the stylesheets code base grows larger, it's usually a good practice to split them into smaller chunks. Then import them later. 

_import ?_

_But the good old CSS can already do that..._

## SASS partials

In terms of SASS, partial means having an _underscore_ or _ _prefix_ at the file name. For example, `_button.scss`. But why add another fuss to the naming ? Partial file naming is meant to let compiler knows that it's just a part of another SASS files and do not compile it into separate CSS.

## @import vs @import partial

**CSS's @import** works by creating **an extra HTTP request** to the importing files which theoretically makes the website slower. On the other hand, **SASS's @Import** and partial files will not. By importing partial SASS files, the imported files will bundle with the importing SASS files and finally will form a single CSS which will not make any extra HTTP requests.

_Happy coding !_
