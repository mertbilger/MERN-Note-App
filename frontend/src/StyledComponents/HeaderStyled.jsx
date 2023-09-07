import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`;
export const WelcomeMessage = styled.p`
  color: #fff;
  font-size: 16px;
`;
export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-size: 24px;
  margin: 0;

  svg {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const Nav = styled.nav`
  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

export const LogoutButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoutButton = styled.button`
  background-color: #f44336; /* Arkaplan rengi - Kırmızı */
  color: #fff; /* Yazı rengi - Beyaz */
  border: none;
  padding: 10px 30px;
  margin-top: 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #d32f2f; /* Hover durumunda arka plan rengi */
  }
`;
