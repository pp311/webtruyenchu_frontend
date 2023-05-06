import React, { useState } from 'react'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import LoginModal from './LoginModal/LoginModal';
import ForgetPasswordModal from './LoginModal/ForgetPasswordModal'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    [...document.querySelectorAll("[data-toggle-theme]")].forEach((el) => {
      el.addEventListener("click", toggleTheme);
    });

    return () =>
      [...document.querySelectorAll("[data-toggle-theme]")].forEach((el) =>
        el.removeEventListener("click", toggleTheme)
      );
  }, []);

  return (
    <div className="w-full navbar bg-base-300 border-b-[1px] border-primary">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <FontAwesomeIcon icon={faBars} />
        </label>
      </div>
      <Link to="/" className="btn btn-ghost text-primary">WebTruyenChu</Link>
      {/* navbar left items */}
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          <li className="dropdown dropdown-hover dropdown-bottom">
            <a>Navbar Item 1<FontAwesomeIcon icon={faChevronDown} /></a>
            <ul className="bg-base-100 w-[154px] rounded shadow dropdown-content menu">
              <li><a>Navbar Item 1</a></li>
              <li><a>Navbar Item 1</a></li>
              <li><a>Navbar Item 1</a></li>
            </ul>
          </li>
          <li><a>Navbar Item 2</a></li>
        </ul>
      </div>
      {/* Navbar right items */}
      <div className='ml-auto'>
        <label className="swap swap-rotate btn btn-ghost">
          <input type="checkbox" data-toggle-theme="halloween,emerald" />
          <svg className="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
          <svg className="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
        </label>
        {/* <div className='btn btn-ghost dropdown dropdown-bottom dropdown-end dropdown-hover flex items-center'> */}
        {/*   <button><FontAwesomeIcon icon={faUser} /></button> */}
        {/*   <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-48"> */}
        {/*     <li><a>Item 1</a></li> */}
        {/*     <li><a>Item 2</a></li> */}
        {/*   </ul> */}
        {/* </div> */}
        <label htmlFor="login-modal" className="btn btn-square btn-ghost normal-case w-20">Dang nhap</label>
      </div>
      <LoginModal />
      <ForgetPasswordModal />
    </div>
  )
}

function toggleTheme(evt) {
  var themesList = evt.target.getAttribute("data-toggle-theme");
  if (themesList) {
    var themesArray = themesList.split(",");
    if (document.documentElement.getAttribute("data-theme") == themesArray[0]) {
      if (themesArray.length == 1) {
        document.documentElement.removeAttribute("data-theme");
        localStorage.removeItem("theme");
      } else {
        document.documentElement.setAttribute("data-theme", themesArray[1]);
        localStorage.setItem("theme", themesArray[1]);
      }
    } else {
      document.documentElement.setAttribute("data-theme", themesArray[0]);
      localStorage.setItem("theme", themesArray[0]);
    }
  }
}
