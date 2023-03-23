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
      <Route path="/" element={<Main />} loader={newsLoader}>
        <Route
          path="country/:country"
          element={<Main />}
          errorElement={<NewsError />}
        />
      </Route>
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
