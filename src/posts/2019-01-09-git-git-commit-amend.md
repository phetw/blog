---
path: /git-commit-amend
title: git commit --amend
description: ทำอย่างไรเมื่อ git commit พลาด
date: 2019-01-08T04:39:51.059Z
thumbnail: /img/mr-cup-fabien-barral-86074-unsplash.jpg
---
![old books](/img/mr-cup-fabien-barral-86074-unsplash.jpg)

# git commit --amend

> อ่าว commit งานไปแล้วแต่ลืมลบ code ที่เอาไว้ debug...

แน่นอนครับว่า เหตุการแบบนี้สามารถเกิดขึ้นได้ตลอดระหว่างการใช้ version control ในทุกๆวันในการทำงานของ developer

แต่ทำไงดีหล่ะ ? 

 ถึงแม้ว่าจะไม่ใช่อะไรที่ร้ายแรง และ

`git commit -m 'to remove console.log()'`

น่าจะแก้ไขได้อย่าง่ายดาย แต่ก็แลกมาด้วย commit เพิ่มขึ้นอีกหนึ่งครั้งโดยไม่จำเป็น ทำให้ git history นั้นรก และไม่ _clean_ เห็นแล้วคันไม้คันมือ อยากจะย้อนเวลากลับไปแก้ไขสิ่งที่ทำผิดพลาดไป ในโลกแห่งความจริงอาจจะทำไม่ได้ แต่กับ git แล้ว เราแก้ไขอดีตได้ครับ

หากตกอยู่ในสถานการณ์คล้ายๆที่ยกตัวอย่างไปข้างต้น `git commit --amend` ช่วยคุณได้ โดย flag `--amend` นั้นจะทำการ _rewrite commit_ ตัวล่าสุดของเราด้วย commit message อันเดิมกับ commit ล่าสุด แต่ถ้าหากเราเพิ่ม flag `-m` เข้าไป เราก็จะสามารถแก้ไข commit message อันล่าสุดได้ด้วย

โดย **best practise** ของการใช้ `amend` นั้น กล่าวกันว่า เราไม่ควร amend `commit` ที่มีคนอื่นใช้อยู่ด้วย ซึ่งจะทำให้เกิดอาการงง และ code base อาจจะไม่ตรงกันได้

ซึ่ง git client อย่าง [GitKraken](https://www.gitkraken.com) นั้นก็มี option ให้ amend ตอน commit อีกด้วย สะดวกมากๆเลย
