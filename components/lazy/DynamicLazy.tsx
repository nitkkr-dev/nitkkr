import React, {
  type ComponentType,
  lazy,
  type LazyExoticComponent,
  Suspense,
} from 'react';

export interface DynamicLazyOptions {
  fallback?: React.ReactNode;
}

export interface DynamicLazyComponent<P> {
  (props: P): JSX.Element;
  preload: () => Promise<void>;
}

export function DynamicLazy<P extends React.JSX.IntrinsicAttributes>(
  loader: () => Promise<{ default: React.ComponentType<P> }>,
  options?: DynamicLazyOptions
): DynamicLazyComponent<P> {
  let LoadedComponent: LazyExoticComponent<ComponentType<P>> | null = null;
  let loadPromise: Promise<void> | null = null;

  function preload(): Promise<void> {
    if (!loadPromise) {
      loadPromise = loader().then((mod) => {
        LoadedComponent = lazy(() => Promise.resolve(mod));
      });
    }
    return loadPromise ?? Promise.resolve();
  }

  const LazyComponent = (props: P) => {
    if (!LoadedComponent) {
      LoadedComponent = lazy(loader);
    }
    const Component = LoadedComponent;
    return (
      <Suspense fallback={options?.fallback ?? null}>
        <Component {...(props as React.PropsWithRef<P>)} />
      </Suspense>
    );
  };
  (LazyComponent as DynamicLazyComponent<P>).preload = preload;
  return LazyComponent as DynamicLazyComponent<P>;
}
