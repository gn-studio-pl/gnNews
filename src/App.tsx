import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { NewsError } from "./components/main/error/NewsError";
import { Main, newsLoader } from "./components/main/Main";
import { RootLayout } from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        path="/country/:country"
        element={<Main />}
        loader={newsLoader}
        errorElement={<NewsError />}
      />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
