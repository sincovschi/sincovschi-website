---
title: VUE + TSX 💖 IDE | How to enable Intellisense with VUE + TS + JSX
shortDescription: VUE setup in a way that boosts the IDE to enable Ctrl + Click to go to Definitions or Usages.
coverPath: /images/blog/vue-tsx-ide-intellisense/cover.jpg
publishedAt: 2 Aug 2021
---

## The Case:

> _I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it._ <br>
> ― Bill Gates

As the quote above implies, the lazier the person is - the merrier. Therefore, having a good [IntelliSense](https://code.visualstudio.com/docs/editor/intellisense) enabled, makes your life so much easier and lazier.

After switching from a strongly typed language to a not typed one, the biggest discomfort, the developer is feeling - is the lack of IntelliSense support in VSCode or other IDE.

Another issue is the way [Vue with Options API](https://v3.vuejs.org/api/options-api.html) distorts your understanding of how Javascript works. It's very hard to understand what is happening inside the component. Also, IDE is completely useless when it comes to templates. You start to hate it... but this is what it is to be a developer. So, beer with it (pun intended).

## The Solutions:

### Solution part 1: install extensions

#### Vetur: https://marketplace.visualstudio.com/items?itemName=octref.vetur

This is an officially promoted extension for VSCode. It is good but does not offer full support. You have to install some additional dependencies. And if the folder structure is not standard - it's nearly useless. You even have to turn on an experimental feature to be able to work with templates.

```json
// .vscode/settings.json
"vetur.experimental.templateInterpolationService": true
```

#### Vue Helper: https://marketplace.visualstudio.com/items?itemName=shenjiaolong.vue-helper

One of the best extensions - it parses your mess of attributes from inside data, props, or computed. Then makes them available inside the template inside double-quotes. Also with this, you are able to Ctrl + Click on props in the template and jump to them inside the script tag. Saves you the whole time of searching "where the heck is this variable comes from".

#### Vue Peek: https://marketplace.visualstudio.com/items?itemName=dariofuzinato.vue-peek

In case Vetur is not working properly, add this extension. It gives you the superpower of Ctrl + Clicks directly inside the template.

### Solution part 2: add TypeScript and JSX

About TS, I can say that I’m a developer which stands on the side of the barricade that believes that Typescript is the best thing that could ever happen to Javascript. I was working with TS from the very beginning. So, to enable TS in .vue files its enough to specify it on the script tag like this:
`<script lang="ts"></script>`

About JSX, so far, at this point in the history of humankind, it is the only HTML interpreter that works with Javascript and IDE understands it. To use it with Vue, a little trick is needed. And I’m going to explain it in-depth inside comments of code that will be attached in this post.

It was like an epiphany when I realized that I can work with Vue just like I used to do with React. And also to pack along with all the tools that Vue offers out of the box. Using Vue like this takes the best of the two worlds. It’s something that I started to love and enjoy working with.

So, to put it in a few words. You need to write Vue with a style friendly toward TS. This is either [Vue with Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html) or [Vue with Class Style Components](https://class-component.vuejs.org/). And to use JSX instead of `<template>`.

[Vue with Class Style Components](https://class-component.vuejs.org/) - This is a very good way to write components if you like Class Style. It has the official support of this style for Vue 2. **BEWARE** Class style is working out of the box in Vue 3. But its support is officially dropped [the reasons can be found here](https://github.com/vuejs/rfcs/pull/17#issuecomment-494242121).

[Vue with Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html) - This is the future of Vue. Just like React with Hooks has become a lot better. It’s the same functional components composition style. With this style, Vue got very much like React, to a point that is hard to say the difference when writing components. And that all comes along with all the awesome features Vue has. For those who are working with Vue 2, there is this official package [Vue 2 Composition API](https://github.com/vuejs/composition-api). This package will also prepare you to migrate to Vue 3 with near to no effort.

## The Code:

Either go through the code via Stackblitz or [clone git repository](https://github.com/sincovschi/vuetsx) locally and open with favorite IDE. But please take a moment and read the comments inside components to understand it better.

Note: Because I have created Stackblitz on a node project, it takes a while to install dependencies and to launch project.

[Stackblitz code sandbox](https://stackblitz.com/edit/vue-tsx?file=src%2FApp.vue)

## The Conclusion:

As developers, we must use our time wisely. And being able to have a framework’s documentation at the tip of your cursor — means a lot.

When you return to a project after a while… to understand what is happening there, like you were working there yesterday — means even more.

Therefore, we must be very lazy. We must not hoard in mind all the technicalities of a project. We must write them down, via self-explanatory code. And that is easily achieved with Typescript and code friendly with TS. The Intellisense will pick it up naturally and will be your best friend and guide you through the abyss\*.

> _We like to think we spend our time power typing, but we actually spend most of our time staring into the abyss._ <br>
> ― Douglas Crockford
