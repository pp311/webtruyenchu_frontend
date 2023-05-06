import React, { useState } from 'react'
import Login from "./Login"
import SignIn from "./SignIn"

export default function LoginModal() {
  const [currentTab, setCurrentTab] = useState(0)
  return (
    <>
      <input type="checkbox" id="login-modal" className="modal-toggle" />
      <label htmlFor="login-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label htmlFor="login-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div className="mt-0">
            <div className="tabs flex justify-center">
              <a className={`tab ${currentTab == 0 ? "tab-active text-primary " : ""} text-xl`} onClick={() => setCurrentTab(0)}>Dang nhap</a>
              <a className={`tab ${currentTab == 1 ? "tab-active text-primary" : ""} text-xl`} onClick={() => setCurrentTab(1)}>Dang ky</a>
            </div>
            <Login />
            {/* <SignIn /> */}
          </div>
        </label>
      </label>
    </>
  )
}

