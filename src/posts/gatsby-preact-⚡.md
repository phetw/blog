---
title: Gatsby + Preact = ⚡
description: Faster than Gatsby ? It's Gatsby + Preact
date: 2019-08-28T08:15:26.460Z
thumbnail: /img/andrew-ly-ds9dtiorpjy-unsplash-1-.jpg
---
![Fast bike riding along the road](/img/andrew-ly-ds9dtiorpjy-unsplash-1-.jpg "Fast bike riding along the road")

Gatsby is a React-based framework that generally generates a static website which is already excellent in performance. 

But for some web performance geek like me, there is always a way to further improve things.

I have heard about [Preact](https://preactjs.com/) for quite sometime, and got to go through the library during free time. Back then it was kinda annoying to use as it uses different syntax from React and a lots of setup is needed. But with the latest version of Preact (Preact X), it is as easy as writing React itself. And its size is just **3kb**.

So I thought, could Preact replace React in Gatsby to make it even "faster" ?

Yes, it happens that someone made a plugin for it. So, integrating with your Gatsby project is as simple as installing a npm package (provided that you don't use anything that Preact does not support). The plugin is [gatsby-plugin-preact](https://www.gatsbyjs.org/packages/gatsby-plugin-preact/).

There you go. 

Gatsby + Preact = saving over **30kb**.
