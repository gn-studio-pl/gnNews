import Title from "../../../components/Title";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { StyledCloseButton } from "./styles/CloseButton.styled";
import { StyledErrorArticles } from "./styles/StyledErrorArticles.styled";
import { StyledText } from "./styles/Text.styled";
import { FaRegWindowClose } from "react-icons/fa";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { closeError } from "../articlesSlice";
import { AppDispatch } from "../../../store";

const ErrorArticles = (): React.ReactElement => {
  const { error } = useAppSelector((state) => state.articles);
  const { code, message } = error!;
  const dispatch: AppDispatch = useAppDispatch();

  const handleClose = (): void => {
    dispatch(closeError());
  };

  return (
    <StyledErrorArticles>
      <Title
        type="H2"
        defaultMessage={code}
        stylesBox={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <StyledCloseButton onClick={handleClose}>
          <FaRegWindowClose />
        </StyledCloseButton>
      </Title>
      <StyledText>{message}</StyledText>
    </StyledErrorArticles>
  );
};

export default ErrorArticles;
