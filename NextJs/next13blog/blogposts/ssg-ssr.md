---
title: 'When to use static generation vs. Server-side Rendering ' 
date: '2023-03-17'
---

We recommend using **Static Generation** (with and without data) whenever possible because
your page cna be built once and server by CDN, which makes it much faster than having a 
server render the page on every request.


You can use static Generation for many types of pags, including:

- Marketing Pages
- Blog posts
- E-commerce product listings 
- Help and Documentation 

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?
If the answer is yes, then you should choose static generation . 

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a 
page ahead of a user's request. Maybe your page shows frequently updated data, 
and the page content changes on every request. 

In that case, you can use **Server-side Rendering**. It will be slower, but 
the pre-rendered page will always be up-to-date. Or you can skip 
pre-rendering and use client-side Javascript to populate data.

