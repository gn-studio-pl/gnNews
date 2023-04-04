import { Suspense } from "react";
import { SuspenseWrapperProps } from "../types/components.types";
import Wrapper from "./Wrapper";

const SuspenseWrapper = (props: SuspenseWrapperProps): React.ReactElement => {
  const { loadingComponent: Component, children, ...rest } = props;
  return (
    <>
      <Suspense fallback={Component ? Component : null}>
        <Wrapper {...rest}>{children}</Wrapper>
      </Suspense>
    </>
  );
};

export default SuspenseWrapper;
