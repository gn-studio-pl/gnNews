import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/app/store";
import { Main } from "../Main";

const MockMain = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

it("Should fetch any articles", () => {
  waitFor(async () => {
    render(<MockMain />);
    const cards = await screen.findAllByTestId("card", {}, { timeout: 1500 });
    expect(cards.length > 0);
  });
});
