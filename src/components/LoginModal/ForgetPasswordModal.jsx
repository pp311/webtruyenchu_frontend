import React from 'react'

export default function ForgetPasswordModal() {
  return (
    <>
      <input type="checkbox" id="forget-password-modal" className="modal-toggle" />
      <label htmlFor="forget-password-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label htmlFor="forget-password-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div>
            <h3 className="text-xl font-bold">Quen mat khau</h3>
            <div className="form-control w-full flex justify-center xs:px-8 pb-4">
              <label className="label" htmlFor="email">
                <span className="label-text text-lg">Email</span>
              </label>
              <input type="text" placeholder="Email" id="email" className="input input-bordered w-full" />
              <button type="button" className="btn btn-primary mt-4">Gui mat khau</button>
            </div>
          </div>
        </label>
      </label>
    </>
  )
}
