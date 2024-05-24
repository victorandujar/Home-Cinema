import { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import { RootState, setupStore, store } from "../../../../store/store";
import { Provider } from "react-redux";

const renderWithProviders = (
  ui: React.ReactElement,
  preloadState?: Partial<RootState>,
) => {
  const Wrapper = ({ children }: PropsWithChildren) => {
    const testStore = preloadState ? setupStore(preloadState) : store;

    return <Provider store={testStore}>{children}</Provider>;
  };

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
