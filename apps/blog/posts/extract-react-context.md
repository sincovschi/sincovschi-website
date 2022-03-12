---
title: React extract context for not nested components via shared state pattern
shortDescription: Advanced details about React hooks and how to exploit their behavior for edge cases.
coverPath: /images/blog/extract-react-context/cover.jpg
publishedAt: 23 Apr 2021
---

## The challange

To reuse already working and tested Providers context, into fully independent (not nested) components.

## Logical map

![Logical Map](/images/blog/extract-react-context/logic-map.png)

## The code

Shared state hook, works as a middleman that stores all `setSharedState`, of each component that uses it, into global Map. And exposes back to component the `sharedState` and a closure that will update all states that are used by this hook.

Moreover, you can use this `Hook` just to have a `sharedState` between independent components without the usage of a context extractor.

```jsx
const setSharedStateMap = new Map();

const setAllSharedStates = function (newState) {
  setSharedStateMap.forEach((setState) => {
    setState(newState);
  });
};

/** I used to pass in `id` as an argument
 * because it was nice to see what's inside
 * during debugging, but this `id` can be
 * generated inside hook as a random uuid. */

export function useSharedState(id: string) {
  const [sharedState, setSharedState] = React.useState();

  setSharedStateMap.set(id, setSharedState);

  return [sharedState, setAllSharedStates];
}
```

The extractor component is returning `null`, but it does all the computations like a normal component. This gives us the possibility to extract provider's data from their parent providers and share it through Mapped states to Independent Components.

```jsx
function ExtractContextFromProvidersComponent() {
  const l10n = useL10n();
  const formatDate = useFormatDate();

  const [_, setSharedState] = useSharedState('extractor-uuid');

  // this works as listener on changes of provided's data
  useEffect(() => {
    setSharedState({
      l10n,
      formatDate,
    });
  }, [l10n, formatDate]);

  return null;
}

ReactDOM.render(
  /**
   * Explanations on how to use `FlatProviders`
   * can be found in this article:
   * https://sincovschi.com/react-flat-multi-providers
   */
  <FlatProviders providers={[L10nProvider, FormatDateProvider]}>
    <ExtractContextFromProvidersComponent />
  </FlatProviders>,
  rootElement
);
```

Now the independent components can be included wherever you need them and don't worry about context providers. The `sharedState` update will trigger a re-render of each component.

```jsx
function IndependentComponent() {
    const [sharedState, _] = useSharedState('ic-uuid');
    const { l10n, formatDate } = sharedState;

    return (
        <div>
            <h3>{l10n('Translated text')}</h3>
            <time>{formatDate(Date.now())}</time>
        </div>
    );
}

ReactDOM.render(
    /** IndependentComponent have access
      * to context values through sharedState */
    <IndependentComponent />
    rootElement,
);
```
