import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Main } from "./components/main/Main";
import { RootLayout } from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Main country="Poland" />} />
      <Route path="/country/poland" element={<Main country="Poland" />} />
      <Route path="/country/argentina" element={<Main country="arg" />} />
      <Route path="/country/belgium" element={<Main country="bel" />} />
      <Route path="/country/canada" element={<Main country="canda" />} />
      <Route path="/country/japan" element={<Main country="jap" />} />
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
