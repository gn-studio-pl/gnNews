import { useState } from "react";
import Title from "../../../components/Title";
import { StyledCloseButton } from "./styles/CloseButton.styled";
import { StyledErrorArticles } from "./styles/StyledErrorArticles.styled";
import { StyledText } from "./styles/Text.styled";
import { FaRegWindowClose } from "react-icons/fa";

const ErrorAPI = (): React.ReactElement => {
  const [active, setActive] = useState<boolean>(true);

  const handleClose = (): void => {
    setActive(false);
  };

  return (
    <>
      {active && (
        <StyledErrorArticles>
          <Title
            type="H2"
            defaultMessage={"CORS API"}
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
          <StyledText>
            {
              "The API I use is limited only to using localhost, if you want to see the full operation of the application, you need to download the source code. The articles you see have been hard coded"
            }
          </StyledText>
        </StyledErrorArticles>
      )}
    </>
  );
};
export default ErrorAPI;
