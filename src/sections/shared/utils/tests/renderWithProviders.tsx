import { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import StoreProvider from "../../../../store/StoreProvider";

const renderWithProviders = (ui: React.ReactElement) => {
  const Wrapper = ({ children }: PropsWithChildren) => {
    return <StoreProvider>{children}</StoreProvider>;
  };

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
