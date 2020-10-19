import React from "react";
import "../style/css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img src="Http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          placeholder="search"
        />
        <SearchIcon className="header__searchIcon"/>
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Rach!</span>
          <span className="header__optionLineTwo">SignIn</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLine1">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
