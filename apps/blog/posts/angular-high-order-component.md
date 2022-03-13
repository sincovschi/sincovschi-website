---
title: Pass Angular Component via @Input() | HOC | Dynamic Wrapper
shortDescription: Deep dive into Angular to create a HOC and to pass Components as Input into another Component.
coverPath: /images/blog/angular-high-order-component/cover.jpg
publishedAt: 20 May 2021
---

### The intro

I was working with React Projects for a long time. I have evolved a mindset that allows you to abuse [HOC](https://reactjs.org/docs/higher-order-components.html) to make code more reusable and somewhat clean. But when I got into Angular, it felt weird at first that there is no such concept.

### The spark

At some point, I got in touch with Modals and there it was the gong that awoke the ninja in me. First, I dove again into angular.io docs and indeed [found a way](https://angular.io/guide/dynamic-component-loader) to pass components through `@Input()` and render them. But that was unsatisfying because of the directive. That could be because decorators are something new after React. Or because it splits such a simple concept as HOC into too many files.

### The sandbox

Here I have created a small code sandbox after my researches. You can see how a component can be rendered from a variable. I got deeper into Angular docs. Found a matching pattern between [`template variables`](https://angular.io/guide/template-reference-variables) and [`@directive`](https://angular.io/api/core/Directive). The directive was necessary only to extract reference to the element. As a result HOC got more simple and it is more close to the concept I got used to:

[Stackblitz code sandbox](https://stackblitz.com/edit/ionic-angular-dynamic-components?file=src%2Fapp%2Fwrapper%2Fwrapper.component.ts)

### Ionic Modal Angular

```ts
async openModal() {
  const modal = await this.modalController.create({
    component: ModalWrapperComponent,
    componentProps: {
      bodyComponent: ModalComponent,
      bodyComponentInputs: { key: 'value' }
    },
  });

  modal.present();
}
```

### Material Dialog Angular

```ts
openDialog(): void {
  const dialogRef = this.dialog
    .open(ModalWrapperComponent, {
      data: {
        bodyComponent: ModalComponent,
        bodyComponentInputs: { key: 'value' }
      },
    });
}
```

### The takeaway

I hope this article helps anyone that wants to understand more deeply how Angular works and how to be a ninja with HOC in Angular. I went geek-serk after a few weeks of Angular without this pattern. And this article emerged because there were no good answers out there in the wild about passing components to components.

For those who want a HOC with the less dynamic inner component. Here is a version with [`*ngTemplateOutlet`](https://angular.io/api/common/NgTemplateOutlet). The difference is that this is more simple and cannot pass any inputs into the wrapped component.
[Stackblitz code sandbox (template outlet)](https://stackblitz.com/edit/ionic-angular-dynamic-components-through-outlet?file=src/app/wrapper/wrapper.component.ts)
