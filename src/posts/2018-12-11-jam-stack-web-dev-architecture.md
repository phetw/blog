---
path: /introduction-to-jam-stack
title: JAM stack architecture
description: JAM stack คืออะไร ดีกว่ายังไง Gatsby และ JAM stack
date: 2018-12-10T20:08:53.312Z
thumbnail: /img/jam.jpg
---

![Jam stack](/img/jam.jpg)

# JAM stack คืออะไร ?

JAM stack คล้ายๆกับ MEAN stack ไหม ? คำตอบคือ ไม่ครับ เพราะ JAM stack ไม่ได้กำหนด Technologies ที่เราจะใช้เหมือนกับ MEAN ที่ต้องประกอบไปด้วย MongoDB, Express, Angular และ Node

JAM stack คือ architecture ใหม่ของการทำ web application โดย JAM นั้นย่อมาจาก 3 คำนี้ครับ

## J

client-side Javascript

## A

reusable APIs _(Twillio, Stripe, Shopify)_

## M

Markup

ตัวอย่างของ JAM stack ก็คือ blog นี้ครับ ผมใช้ **Gatsby + Markdown** และ **netlify CMS** โดย netlify CMS จะเป็น headless CMS และ gatsby plugin ตัวนึงเท่านั้น ประโยชน์ของมันก็คือทำให้ผมไม่ต้องพิม markdown แบบสดๆนั่นเอง โดย netlify CMS นั้นจะสร้าง Markdown file และ commit ลงไปบน **git repository** ของผม ซึ่งทำหน้าที่เป็น **single source of truth** และ gatsby ที่ผมได้ลง plugin **gatsby-transformer-remark** ที่ซึ่งทำหน้าที่แปลง markdown file ที่อยู่บน repository ของผมนั้นเป็น html และไป render ตามรูปแบบที่ผมกำหนดไว้ โดย gatsby นั้นจะ build ออกมาเป็น **static files** ที่พร้อม deploy เลย โดย **CI/CD** จะ trigger gatsby ให้ build และ deploy ใหม่ทุกครั้งที่ผม commit ลงบน repository ในส่วนของ API blog ของผมนั้นยังไม่มี feature อะไรที่จำเป็นต้องใช้ หากให้ยกตัวอย่างก็คงเป็น [Gatsby store](https://store.gatsbyjs.org) ที่ใช้ [shopify](https://www.shopify.com) ที่เป็น e-commerce platform ในจัดการ inventory และ ใช้ [Github](https://github.com) ในการทำ Authentication

# ทำไมต้อง JAM stack ?

จากตัวอย่างที่เขียนไปด้านบน จะเห็นได้ว่าทุกอย่างนั้น centralised อยู่ที่ front-end developer ทั้งหมดเลย สำหรับผม ด้วยความที่ชื่นชอบในการทำ front-end ผมคิดว่ามันเป็น developer experience ที่ดีนะ ไม่ต้องไปนั่งจัดการเขียน backend และเสียค่า server เพิ่ม แถมยังไม่ต้องกังวลเรื่อง security เพราะมัน build ออกมาเป็น static files หมดแล้ว และแน่นอน static files นอกจากจะเร็วปรู้ดปร้าดแล้ว ยังโดดเด่นในเรื่อง SEO อีกด้วย ถ้ายังเร็วไม่พอใจ ทำ CDN ได้อีกนะ

_EZ..._

นอกจาก Gatsby ก็ยังมีตัวเลือก static site generator อื่นๆอย่างเช่น _React static, Hugo, Jekyll_ และอีกมากมายให้เลือกใช้ตามใจชอบ แถมหลายปีมานี้ก็มี CMS ผุดขึ้นเป็นดอกเห็ด _Prismic.io, Contentful_ และอีกมากมายให้เลือกใช้ เกิดอยากจะ **decouple** เว็บของเราไปให้พวก content creators ใช้งานง่ายๆงี้

ต้องลองชั่งน้ำหนักดูครับ หากต้องการ advance features ระดับ enterprise มีโหลดเป็นแสนต่อวัน JAM stack อาจจะทำให้แพงกว่าก็ได้นะ ยังไงก็ตามแต่ หากท่านต้องการจะขึ้น project ใหม่หรือทำ blog แบบผม ก็อย่าลืมที่จะรับ JAM stack ไว้พิจราณาด้วยครับ

ต้องลองนะ สนุกดี
