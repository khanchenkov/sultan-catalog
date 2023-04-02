import "./Header.scss";
import HeaderContacts from "../HeaderContacts/HeaderContacts";
import HeaderPanel from "../HeaderPanel/HeaderPanel";
import HeaderMobile from "../HeaderMobile/HeaderMobile";
import { useMediaQuery } from "react-responsive";
import { useAppSelector } from "../../hooks/redux";

const Header = () => {
  const isMobileOrTab = useMediaQuery({ query: "(max-width: 992px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 993px)" });
  const { cart, cartSum } = useAppSelector((state) => state.productReducer);

  const cartLength: number = cart.length;

  return (
    <header className="header">
      <div className="header__wrapper">
        {isDesktop && (
          <>
            <div className="container">
              <HeaderContacts />
            </div>
            <hr />
            <div className="container">
              <HeaderPanel cartLength={cartLength} cartSum={cartSum} />
            </div>
            <hr />
          </>
        )}
        {isMobileOrTab && (
          <HeaderMobile cartLength={cartLength} cartSum={cartSum} />
        )}
      </div>
    </header>
  );
};

export default Header;
