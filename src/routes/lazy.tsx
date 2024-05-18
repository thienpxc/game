import React, { lazy, Suspense } from "react";
import Loading from "../components/loading/Loading";

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
export const lazyFnReal = (importFunc: any, access: boolean = true) => {
  if (!access) {
    return <>Không có quyền truy cập</>;
  }

  const LazyComponent = lazy(importFunc);
  console.log("ssssssssss.ssss");

  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
};

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
export const lazyFn = (importFunc: any, access: boolean = true) => {
  if (!access) {
    return <>Không có quyền truy cập</>;
  }
  console.log("dfsdfsdfds");
  const LazyComponent = lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(importFunc());
      }, 1000);
    });
  });
  //const LazyComponent = lazy(importFunc);

  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
};
