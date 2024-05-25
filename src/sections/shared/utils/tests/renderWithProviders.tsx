import { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import { RootState, setupStore, store } from "../../../../store/store";
import StoreProvider from "@/store/StoreProvider";

const renderWithProviders = (
  ui: React.ReactElement,
  preloadState?: Partial<RootState>,
) => {
  const Wrapper = ({ children }: PropsWithChildren) => {
    const testStore = preloadState ? setupStore(preloadState) : store;

    return <StoreProvider store={testStore}>{children}</StoreProvider>;
  };

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
