---
title: ̶R̶e̶a̶c̶t̶ VUE Context Provider Pattern | Custom Hooks
shortDescription: React Context Provider Pattern applied to Vue Composition API.
coverPath: /images/blog/react-vue-context-provider/cover.jpg
publishedAt: 28 Sep 2021
---

## The Problem:

Vue has lots of tools out of the box that makes our life easier, e.g Vuex and Vue-router. But it still relies too much on magic connections, which makes code hard to understand. In order to [help IDE and future me](https://dev.to/sincovschi/vue-tsx-ide-how-to-enable-intellisense-with-vue-ts-jsx-49nc) with code readability, I've started to think about hooks and patterns that comes along with them.

## The Code:

In this sandbox, you can find React's Context Provider Pattern - applied to Vue's Composition API `provide` and `inject` methods.

[Stackblitz code sandbox](https://stackblitz.com/edit/vue-jsx-context-provider-pattern)

## The Conclusion:

Vue has a very powerful plugin `Vuex` for state management. But often you are unable to share the state in a simpler way or to multiply the same state functionality. Therefore you have two standard solutions, **props drilling** and **provide/inject**. **Drilling** is good as long it's no deeper than 3 levels. But **provide/inject**, in their raw form are relying too much on magic for my taste.

So the takeaway is: if Composition API borrows so much from React already, why not keep that in mind and make Vue more lovable by combining the best of both worlds. Don't be afraid to experiment by mix features and patterns for the greater good.
