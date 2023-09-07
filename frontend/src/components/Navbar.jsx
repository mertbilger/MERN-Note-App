import { Link } from "react-router-dom";
import {
  Header,
  Nav,
  StyledLink,
  LogoutButton,
  LogoutButtonContainer,
  WelcomeMessage,
} from "../StyledComponents/HeaderStyled";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { kullanici } = useAuthContext();

  const handleClick = () => {
    logout();
  };
  return (
    <Header>
      <div className="container">
        <Link to="/">
          <h1>Not Blog</h1>
        </Link>
        <Nav>
          {kullanici && (
            <LogoutButtonContainer>
              <WelcomeMessage>{kullanici.email}</WelcomeMessage>
              <LogoutButton onClick={handleClick}>Çıkış Yap</LogoutButton>
            </LogoutButtonContainer>
          )}
          {!kullanici && (
            <div>
              <StyledLink to="/login">Giriş Yap</StyledLink>
              <StyledLink to="/signup">Üye Ol</StyledLink>
            </div>
          )}
        </Nav>
      </div>
    </Header>
  );
};

export default Navbar;
