import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiHeart3Line } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import "./index.css";

function Header() {
  const [showNavSideBar, setNavSideBar] = useState(false);

  const onClickBurger = () => {
    setNavSideBar(true);
  };

  const onClickCloseModal = () => {
    setNavSideBar(false);
  };

  const renderNavSideBar = () => (
    <div className="sidebar-modal">
      <ul className="modal-links">
        <li className="modal-link">HOME</li>
        <li className="modal-link active-modal-link">SHOP</li>
        <li className="modal-link">SKILLS</li>
        <li className="modal-link">STORIES</li>
        <li className="modal-link">ABOUT</li>
        <li className="modal-link">CONTACT US</li>
      </ul>
      <button
        className="close-modal-button"
        onClick={onClickCloseModal}
        type="button"
      >
        x
      </button>
    </div>
  );

  return (
    <>
      <nav className="navbar">
        <div className="navbar-div">
          <div className="navbar-left-side">
            <button
              onClick={onClickBurger}
              type="button"
              className="modal-button nav-button"
            >
              <RxHamburgerMenu className="nav-button-icon" />
            </button>
            <img
              src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1712485236/Logo_hyigqv.png"
              alt="logo"
              className="logo"
            />
          </div>
          <h1 className="title">LOGO</h1>
          <div className="navbar-right-side">
            <button type="button" className="nav-button">
              <RiSearch2Line className="nav-button-icon" />
            </button>
            <button type="button" className="nav-button">
              <RiHeart3Line className="nav-button-icon" />
            </button>
            <button type="button" className="nav-button">
              <HiOutlineShoppingBag className="nav-button-icon" />
            </button>
            <button type="button" className="nav-button desktop-nav-button">
              <HiOutlineUser className="nav-button-icon" />
            </button>
            <button
              type="button"
              className="nav-button desktop-nav-button desktop-nav-lang-button"
            >
              ENG <MdOutlineKeyboardArrowDown className="nav-button-icon" />
            </button>
          </div>
        </div>
        {showNavSideBar ? renderNavSideBar() : null}
      </nav>
      <div className="mobile-links">
        <p className="mobile-home">HOME</p>
        <span className="mobile-home-span">|</span>
        <p className="mobile-shop">SHOP</p>
      </div>
      <div className="desktop-links-div">
        <ul className="desktop-links">
          <li className="desktop-link">HOME</li>
          <li className="desktop-link">SHOP</li>
          <li className="desktop-link">SKILLS</li>
          <li className="desktop-link">STORIES</li>
          <li className="desktop-link">ABOUT</li>
          <li className="desktop-link">CONTACT US</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
