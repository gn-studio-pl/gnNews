import { IntlProvider } from "react-intl";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import useTranslator from "./hooks/useTranslator";
import GlobalStyles from "./styles/global";
import PageNotFound from "./views/PageNotFound";
import Home from "./views/Home";

function App() {
  const { locale, messages } = useTranslator();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/Page-Not-Found" element={<PageNotFound />} />
        </Routes>
      </Router>
    </IntlProvider>
  );
}

export default App;
