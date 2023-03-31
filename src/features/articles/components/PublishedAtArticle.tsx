import { FormattedDate, FormattedTime } from "react-intl";
import { PublishedAtArticleProps } from "../../../types/components.types";
import { StyledPublishedAtArticle } from "./styles/PublishedAtArticle.styled";
import { StyledText } from "./styles/Text.styled";

const PublishedAtArticle = ({ publishedAt }: PublishedAtArticleProps) => {
  const date = new Date(publishedAt);
  const time = date.getTime();
  return (
    <>
      <StyledPublishedAtArticle style={{ textAlign: "right" }}>
        <StyledText>
          <FormattedDate
            value={date}
            day="numeric"
            month="long"
            year="numeric"
          />
        </StyledText>
        <StyledText style={{ marginLeft: 20 }}>
          <FormattedTime value={time} hour="2-digit" minute="2-digit" />
        </StyledText>
      </StyledPublishedAtArticle>
    </>
  );
};

export default PublishedAtArticle;
