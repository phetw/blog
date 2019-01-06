---
path: /debounce-vs-throttle
title: 'Debounce vs Throttle : ต่างกันอย่างไร'
description: มาดูกันว่า debounce และ throttle คืออะไร ใช้ยังไง และมีประโยชน์ตอนไหนบ้าง
date: 2019-01-06T12:45:48.991Z
thumbnail: /img/aron-visuals-322314-unsplash.jpg
---
![Timer](/img/aron-visuals-322314-unsplash.jpg)

หลายคนอาจจะเคยเห็นคำสองคำนี้ผ่านหูผ่านตามาบ้าง และอาจจะงงว่ามันแตกต่างกันยังไง หรือหลายคนอาจจะยังไม่รู้จัก ในบทความนี้ เรามาดูกันว่า 2 อย่างนี้คืออะไร แตกต่างกันยังไง และเราจะใช้ประโยชน์จากมันได้อย่างไรบ้าง

# **Debounce**

สมมุติว่าผมต้องการทำ feature search ที่ต้องทำ api request ไปยัง server ทุกครั้งที่ผมเปลี่ยนข้อความในช่อง input มันก็คงจะไม่ดีต่อ performance และ server resources แน่ๆถ้าหากมี user พิมรัวๆ 

แต่หากถ้านำ concept ของ debounce มาใช้ ผมอาจจะ debounce search function เป็นเวลา 1 วินาที เพื่อเว้นช่องว่างหลังจากที่ user พิมเสร็จเรียบร้อย 1 วินาที แล้วถึงจะทำการ request api หาก user พิมต่อ เวลา 1 วินาทีจะถูก reset ใหม่ และ api request ก็ยังจะไม่ถูกส่งไปนั่นเอง

# Throttle

สมมุติว่าเราต้องการ detect event resize ของ browser

```
 window.addEventListener('resize', function listenToResizeEvent(){}) 
```

โดยปกติแล้ว ทุกๆ pixel ที่หน้าจอถูก resize จะไปเรียก `listenToResizeEvent()` ซึ่งอาจจะทำให้มีผลกระทบกับ performance ได้หากมีการคำนวนอยู่ใน function นั้นๆเยอะ 

แต่ถ้าหากเรา throttle function นี้  ทุกๆ 300ms จะเป็นผลให้ `listenToResizeEvent()` ถูกเรียกทุกๆ 300ms แทน ทำให้ประหยัด resource ขึ้น โดย throttle นั้นจะจำกัดจำนวนที่เรียก function นั้นๆในเวลาที่กำหนด ซึ่งในเคสนี้คือ 1 ครั้วต่อ 300ms

> จะเห็นได้ว่า ถึงแม้ทั้งคู่จะแตกต่าง และทำงานไม่เหมือนกัน  แต่จริงๆแล้วทั้งคู่นั้นมีจุดประสงค์เดียวกันนั่นคือ performance optimization และทำหน้าที่เหมือนกับประตูระบายน้ำที่คอยจำกัดปริมาณของน้ำไม่ให้ไหลลงสู่อีกฝั่งมากเกินไป
