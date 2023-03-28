import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import "./mainRoot.css";

export const MainRoot = () => {
  const { t } = useTranslation();
  const { country } = useParams();

  if (!country) {
    return (
      <div className="main-default">
        <div>{t("main.msg")}</div>
      </div>
    );
  } else {
    return <></>;
  }
};
