import React from 'react'
import { getData } from '../../fetch.js'
import { getConfiguration } from '../../config';
import { useLoginStore } from '../../hooks/useStore.jsx'

const BASE_API_DIR = getConfiguration().apiUrl;

const openForgetPasswordModal = () => {
  document.getElementById("login-modal").checked = false
}

export default function Login() {
  const [isRemember, setIsRemember] = React.useState(false)
  const [errorMsg, setErrorMsg] = React.useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    let userName = e.target.elements.username.value
    let password = e.target.elements.password.value
    if (userName === "" || password === "") {
      setErrorMsg("Vui lòng nhập đầy đủ thông tin")
    }
    else {
      fetch(`${BASE_API_DIR}/api/Account/login`, { method: 'POST', body: JSON.stringify({ userName, password }), headers: { "Content-Type": "application/json-patch+json" } })
        .then(res => {
          if (res.status === 401) {
            setErrorMsg("Tên tài khoản hoặc mật khẩu không đúng")
          }
          else if (res.status === 200) {
            res.json().then(data => {
              setErrorMsg("")
              useLoginStore.setState({ token: data.token, isLogin: true })
              document.getElementById("login-modal").checked = false
            })
          }
        })
    }
  }
  return (
    <form onSubmit={handleSubmit} className="form-control w-full flex justify-center xs:px-8 pb-4">
      <label className="label" htmlFor="username">
        <span className="label-text text-lg">Tên tài khoản hoặc email</span>
      </label>
      <input type="text" placeholder="Tên tài khoản / email" id="username" className="input input-bordered w-full" />
      <label className="label mt-2" htmlFor="password">
        <span className="label-text text-lg">Mật khẩu</span>
        <label htmlFor="forget-password-modal" className="label-text-alt text-lg text-primary hover:text-primary-focus" onClick={openForgetPasswordModal}>Quên mật khẩu?</label>
      </label>
      <input type="password" placeholder="Nhập mật khẩu" id="password" className="input input-bordered w-full" />
      <div className="form-control items-start">
        <label className="label cursor-pointer">
          <input type="checkbox" checked className="checkbox checkbox-primary mr-4" />
          <span className="label-text">Ghi nhớ mật khẩu</span>
        </label>
      </div>
      <div className="text-error">{errorMsg}</div>
      <input type="submit" className="btn btn-primary mt-4" value="Đăng nhập" />
    </form>
  )
}
