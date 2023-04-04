import useTranslator from "../../hooks/useTranslator";
import IconLang from "./components/IconLang";

const Language = (): React.ReactElement => {
  const { swapLang } = useTranslator();

  return <IconLang swapLang={swapLang} />;
};

export default Language;
