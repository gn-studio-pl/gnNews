import { Container, ContentWrapper, PageWrapper } from './Layout.styled';
import { Footer } from '../Footer/Footer';
import { Navigation } from '../Navigation/Navigation';
import { ReactNode } from 'react';
import { Menu } from '../Menu/Menu';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Navigation />
      <ContentWrapper>
        <Menu />
        <PageWrapper> {children}</PageWrapper>
      </ContentWrapper>
      <Footer />
    </Container>
  );
};
