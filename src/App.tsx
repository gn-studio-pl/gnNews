import { IntlProvider } from "react-intl";
import { BrowserRouter as Router } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import useTranslator from "./hooks/useTranslator";
import Content from "./layouts/Content";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Navigation from "./layouts/Navigation";

import GlobalStyles from "./styles/global";

function App() {
  const { locale, messages } = useTranslator();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <GlobalStyles />
      <Router>
        <Header />
        <Wrapper
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            minHeight: "calc(100vh - 154px)",
            height: "auto",
          }}
        >
          <Wrapper
            style={{
              position: "relative",
              width: "100%",
              alignItems: "flex-start",
              minHeight: "calc(100vh - 154px)",
              height: "auto",
            }}
          >
            <Navigation />
            <Content />
          </Wrapper>
        </Wrapper>
        <Footer />
      </Router>
    </IntlProvider>
  );
}

export default App;
