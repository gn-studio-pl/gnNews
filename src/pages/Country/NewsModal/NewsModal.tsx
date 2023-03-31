import { Modal } from '../../../components/Modal/Modal';
import { UseModal } from '../../../hooks/useModal';
import { Author, Link, Text, Wrapper } from './NewsModal.styled';

interface NewsModalProps extends UseModal {
  author?: string;
  content?: string;
  description?: string;
  url?: string;
}

export const NewsModal = ({
  author,
  content,
  description,
  url,
  ...modalData
}: NewsModalProps) => {
  return (
    <Modal {...modalData}>
      <Wrapper>
        <Author>Author: {author}</Author>

        {content && <Text> {content.slice(0, 256)}</Text>}
        {description && <Text> {description.slice(0, 256)}</Text>}

        <Link href={url} target='_blank' rel='noreferrer'>
          Visit page
        </Link>
      </Wrapper>
    </Modal>
  );
};
