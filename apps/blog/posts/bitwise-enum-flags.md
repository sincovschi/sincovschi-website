---
title: Bitwise enum flags to generate HTML from array
shortDescription: Once upon a project, I had an interesting task. To generate animated points on a map.
coverPath: /images/blog/cover-bitwise-enum-flags.jpg
publishedAt: 30 May 2021
---

### The case

Once upon a project, I had an interesting task. To generate animated points on a map. The points objects were coming into json array with mixed property types. Thus processing these points was quite cumbersome and very hard to maintain because of the MVP stage. Performance was crucial because these points could be up to thousands at the same time on screen. So the stage was set.

### The idea

Because I was empowered to be able to change both of the worlds. I thought of a way to combine boolean and string-based properties into enum with flags. These flags were basically the same mixed properties that had at the core a business logic to show or hide specific attributes. So there I dived right into the code.

### The steps

First I went to Backend. There I have converted all those mixed properties into flags of an enum. After that, I switched to Frontend and converted logic up there too. Then looping over these enum flags, the code was generating corresponding HTML elements. These elements were stored in memory on an array with an index that matched all enum flag combinations. Then once API emitted this array of points, looping over them and deep cloning that HTML from the array was near to instantaneously. Now combining all these generated elements with some CSS magic, I got some nice cycling beaming animation.

[Stackblitz code sandbox](https://stackblitz.com/edit/bitwise-html-array?file=index.ts)

To separate animation concept from combinatoric one. I created two different code examples. The difference is that the first is generating children elements for that attribute. And the second is combining attributes on the same element.

[Stackblitz code sandbox](https://stackblitz.com/edit/bitwise-html-array-combination?file=index.ts)

### The takeaway

Flags and Bitwise Operations over them are used widely at the low level of frameworks like Angular and React. JavaScript has the native disposition to work well with BO and it's incredibly fast.

JavaScript element creation is quite slow in comparison to element cloning. Therefore storing pre-built elements in an array boosted this concept even further.

I think this concept can also be combined with Components of React and Angular. To generate parts of the application that needs to display some attributes very quickly.
