
import { useTranslation } from "react-i18next";

function Content() {
    const { t } = useTranslation();
    return (
        <div className="content">
           <p className="content-text">{t("choose_country")}</p>
        </div>
    )
}

export default Content;