import { changeView } from "../../redux/slices/view";
import { firstLetterToUpperCase } from "../../helpers/strings";
import { JokeModal } from "./JokeModal/JokeModal";
import { paths } from "../../routes/paths";
import { useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useModal } from "../../hooks/useModal";
import { useTranslation } from "react-i18next";
import {
  GridIcon,
  LanguageIcon,
  LanguageWrapper,
  Link,
  ListIcon,
  Nav,
  PopupIcon,
  Strong,
  Text,
  Wrapper,
} from "./Navigation.styled";

export const Navigation = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const view = useAppSelector().view.view;
  const jokeModal = useModal();

  const handleChangeView = () => dispatch(changeView());

  const handleChangeLanguage = () =>
    i18n.changeLanguage(i18n.language === "pl" ? "en" : "pl");

  return (
    <Nav>
      <Link to={paths.home}>
        <Strong>gn</Strong>
        News
      </Link>

      <Wrapper>
        {view === "list" ? (
          <ListIcon onClick={handleChangeView} />
        ) : (
          <GridIcon onClick={handleChangeView} />
        )}

        <PopupIcon onClick={jokeModal.handleOpen} />
        <LanguageWrapper
          onClick={handleChangeLanguage}
          data-testid={"language-icon"}
        >
          <LanguageIcon />
          <Text data-testid={"language-text"}>
            {firstLetterToUpperCase(i18n.language)}
          </Text>
        </LanguageWrapper>
      </Wrapper>

      {jokeModal.open && <JokeModal {...jokeModal} />}
    </Nav>
  );
};
