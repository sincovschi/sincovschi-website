---
title: JavaScript equivalent of C# 'out' keyword
shortDescription: The various ways of mimicking 'out' with conditional expression and some little extra.
coverPath: /images/blog/js-equivalent-of-c-out/cover.jpg
publishedAt: 11 Oct 2021
---

Since I met the 'out' keyword in C#, I'm trying to find an equivalent in JS.

## C# example:

```c#
string numberAsString = "1640";

if (Int32.TryParse(numberAsString, out int number)) {
    Console.WriteLine($"Converted '{numberAsString}' to {number}");
}
```

## #1: Direct approach:

```js
const numberAsString = '1640';
const number = tryParse(numberAsString);

if (null !== number) {
  console.log(`Converted '${numberAsString}' to ${number}`);
}
```

To break it down - we are not only getting one value instead of 2 (c# returns boolean and creates int). But we also have to double-check the output. https://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric

## #2: KVP response approach:

```js
const numberAsString = '1640';
const { isNumber, number } = tryParse(numberAsString);

if (isNumber) {
  console.log(`Converted '${numberAsString}' to ${number}`);
}
```

This is much better IMHO, at the cost of the small complexity of working with objects.

## #3: Pass by reference approach:

```js
const numberAsString = '1640';
const refNumber = { value: 0 };

if (tryParse(numberAsString, refNumber)) {
  console.log(`Converted '${numberAsString}' to ${refNumber.value}`);
}
```

It's much better and very close to C#. But you have to know a little about JS. And to know that everything in it is an Object and an Object is always passed by reference.

## #4: Exploit conditional expression:

It's time to play dirty!

```js
const numberAsString = '1640';

if (null !== (number = tryParse(numberAsString))) {
  console.log(`Converted '${numberAsString}' to ${number}`);
}
```

Double-checking of the result is back. And the worst part (as per the community's opinion) is variable assignment inside conditional's expression.

## #5: Exploit IIFE and Short circuits:

```js
const numberAsString = '1640';

const number = tryParse(numberAsString) ?? (() => console.log('Fail'))();
```

Well, this version I like a lot. Because you can fall back elegantly with fewer lines. And it even removes one indentation level. The downside is that it involves a not popular pattern and is applicable only for `null` or `falsy` cases. 0 is `falsy`, thus I used here the `??` instead of `||`.

## #6: The mad professor approach:

#### WARNING! The next lines may irreversible twist your mind. Proceed reading with caution.

```js
const numberAsString = '1640';

for (var i, number = tryParse(numberAsString); !i && null !== number; i = 1) {
  console.log(`Converted '${numberAsString}' to ${number}`);
}
```

(Cough)... Well, it's working, try it in the console if you don't believe me.

So, what the heck is happening?

Firstly, `var` is an ancient keyword that has some primordial magic inside it and it is **jumping** outside scopes. So far I know about `for` and `try catch`, maybe there are more, but it's too ancient for me to know them all.

Secondly, `for` is the only space in JS that is allowing you to declare variables outside the plain scope. So, that space between `(` and first `;` - you can use as plain scope to declare something or to break something or someone...

Thirdly, space between `;` and `;` is considered something like an `if` expression. So combining with variables declared before, you can exploit the third part which will make your loop go only once if the second validation is passed.

The thing is that you are actually not breaking any rules of JS. And the best thing is that IDE understands it and when you `Ctrl + Click` on the variable used outside `for` - it will jump right where it's declared.

So... at the cost of your own and the ones that will read your code sanity... It's an interesting trade-off.

## Code sandbox:

I have created a sandbox to see all these working. Also while I was at It, I have added the case with High Order Function. To make each case easier to distinct I have added `#regions` which can be folded.

[Stackblitz code sandbox](https://stackblitz.com/edit/js-out)

## Conclusion

The takeaway is that as developers we often face the decision to choose between fancy and readable code. The rule of thumb is to choose readability if you are in a team and whatever you want if you code alone. But to dive in such researching adventures is fine from time to time, it keeps you #er.
