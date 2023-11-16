import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';
import SignUpModal from '../../modals/Signup-modal';

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is GPT?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);

//Class name rule: BEM = Block Element modifier
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const handleOpenSignUpModal = (type) => {
    if (type === 'signIn') {
      setIsSignUp(false);
    }
    setOpenSignUpModal(true);
  };
  const handleCloseSignUpModal = () => {
    setOpenSignUpModal(false);

    setIsSignUp(true);
  };
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p onClick={() => handleOpenSignUpModal('signIn')}>Sign in</p>
        <button onClick={() => handleOpenSignUpModal('signUp')} type="button">
          Sign up
        </button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button onClick={handleOpenSignUpModal} type="button">
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
      <SignUpModal
        open={openSignUpModal}
        handleClose={handleCloseSignUpModal}
        isSignUp={isSignUp}
        setIsSignUp={setIsSignUp}
      />
    </div>
  );
};

export default Navbar;
