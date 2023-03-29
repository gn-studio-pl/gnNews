import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { store } from "../../../redux/app/store";
import { SideNav } from "../SideNav";

export const createMockupElement = (component: JSX.Element) => {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={component} />)
  );

  const returnElement = () => {
    return (
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
  };

  const mockElement = returnElement();

  return {
    mockElement,
  };
};

const { mockElement } = createMockupElement(<SideNav />);

describe("Sidenav", () => {
  it("sidenav should be invisible on launch", () => {
    render(mockElement);
    const sideNav = screen.getByRole("nav");
    expect(sideNav).not.toBeVisible;
  });
});
