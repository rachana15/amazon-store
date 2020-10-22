import React from "react";
import "../style/css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStatevalue } from "../Data Layer/StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStatevalue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="Http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          placeholder="search"
        />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Rach!</span>
            <span className="header__optionLineTwo">SignIn</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <Link to="/checkout">
            <ShoppingBasketIcon className="header__optionShoppingBasket" />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
