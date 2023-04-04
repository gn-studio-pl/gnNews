import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { IconLangProps } from "../../../types/components.types";
import { StyledIconLang } from "./IconLang.styled";

const IconLang = ({ swapLang }: IconLangProps): React.ReactElement => {
  const { locale } = useAppSelector((state) => state.translator);
  const [trimmedLang, setTrimmedLang] = useState<string | null>(null);

  const trimLang = (): void => {
    let trimmedLang: string = locale.substring(0, 2).toUpperCase();
    setTrimmedLang(trimmedLang);
  };

  useEffect(() => {
    trimLang();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  return <StyledIconLang onClick={swapLang}>{trimmedLang}</StyledIconLang>;
};

export default IconLang;
