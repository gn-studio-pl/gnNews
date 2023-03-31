import { useState } from "react";
import SecretPopup from "./SecretPopup";
import { StyledSecretLink } from "./styles/SecretLink.styled";
import WrapperPopup from "./WrapperPopup";

const SecretLink = (): React.ReactElement => {
  const [isActivePopup, setIsActivePopup] = useState<boolean>(false);

  const handleSwapActive = (): void => {
    setIsActivePopup((prevState) => !prevState);
  };

  return (
    <>
      <StyledSecretLink onClick={handleSwapActive}>PopUP</StyledSecretLink>
      {isActivePopup ? (
        <WrapperPopup
          swapActive={handleSwapActive}
          popupContent={<SecretPopup />}
        />
      ) : null}
    </>
  );
};

export default SecretLink;
