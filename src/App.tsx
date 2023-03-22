import "./styles/App.scss";
import { Footer, Navbar } from "./components";
import { CountryNews } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountryNews />
      <Footer />
    </div>
  );
}

export default App;
