import React from 'react'

export default function SignUp() {
  return (
    <div className="form-control w-full flex justify-center xs:px-8 pb-4">
      <label className="label" htmlFor="name">
        <span className="label-text text-lg">Ho ten<span className="text-error"> *</span></span>
      </label>
      <input type="text" placeholder="Ho ten" id="name" className="input input-bordered w-full" />

      <label className="label mt-2" htmlFor="username">
        <span className="label-text text-lg">Ten tai khoan<span className="text-error"> *</span></span>
      </label>
      <input type="text" placeholder="Ten tai khoan" id="username" className="input input-bordered w-full" />

      <label className="label mt-2" htmlFor="email">
        <span className="label-text text-lg">Email<span className="text-error"> *</span></span>
      </label>
      <input type="text" placeholder="Email" id="email" className="input input-bordered w-full" />

      <label className="label " htmlFor="password">
        <span className="label-text text-lg">Mat khau<span className="text-error"> *</span></span>
      </label>
      <input type="password" placeholder="Nhap mat khau" id="password" className="input input-bordered w-full" />

      <label className="label mt-2" htmlFor="password-confirm">
        <span className="label-text text-lg">Nhap lai mat khau<span className="text-error"> *</span></span>
      </label>
      <input type="password" placeholder="Nhap lai mat khau" id="password-confirm" className="input input-bordered w-full" />
      <button type="button" className="btn btn-primary mt-8">Dang ky</button>
    </div>
  )
}
