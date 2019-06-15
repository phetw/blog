---
title: SASS partials
description: Modularize your cascading style sheets
date: 2019-06-15T02:17:40.121Z
thumbnail: /img/kelli-tungay-324329-unsplash.jpg
---
![Colors](/img/kelli-tungay-324329-unsplash.jpg "Colors")

## CSS with superpowers.





## Partial

In terms of SASS, partial means having an _underscore_ or __ prefix_ at the file name. For example, `_button.scss`. But why add another fuss to the naming ? Partial file naming is meant to let compiler knows that it's just a part of another SASS files and do not compile it into CSS.

## @import vs @import 

CSS's @import works by creating **an extra HTTP request** to the importing files which theoretically makes the website slower. On the other hand, SASS's @Import and partial files will not. By importing partial SASS files, the imported files will bundle with the importing SASS files and finally will form a single CSS which will not make any extra HTTP requests.
