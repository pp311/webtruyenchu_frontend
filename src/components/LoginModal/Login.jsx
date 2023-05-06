import React from 'react'

export default function Login() {
  const openForgetPasswordModal = () => {
    document.getElementById("login-modal").checked = false
  }
  return (
    <div className="form-control w-full flex justify-center xs:px-8 pb-4">
      <label className="label" htmlFor="username">
        <span className="label-text text-lg">Ten tai khoan hoac email</span>
      </label>
      <input type="text" placeholder="Ten tai khoan / email" id="username" className="input input-bordered w-full" />
      <label className="label mt-2" htmlFor="password">
        <span className="label-text text-lg">Mat khau</span>
        <label htmlFor="forget-password-modal" className="label-text-alt text-lg text-primary hover:text-primary-focus" onClick={openForgetPasswordModal}>Quen mat khau?</label>
      </label>
      <input type="password" placeholder="Nhap mat khau" id="password" className="input input-bordered w-full" />
      <div className="form-control items-start">
        <label className="label cursor-pointer">
          <input type="checkbox" checked className="checkbox checkbox-primary mr-4" />
          <span className="label-text">Ghi nho mat khau</span>
        </label>
      </div>
      <button type="button" className="btn btn-primary mt-4">Dang nhap</button>
    </div>
  )
}
