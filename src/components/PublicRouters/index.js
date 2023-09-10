import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

import Login from "../login/Login"
import ROUTER from "../../router"
import { PublicRoutesStyle } from "./styled"

function PublicRoutes() {
  const navigate = useNavigate()
  return (
    <PublicRoutesStyle>
      <div className="boxHead">
        <div onClick={() => {
          navigate(ROUTER.LOGIN)
        }}>LOGIN</div>
        <div onClick={() => {
          navigate(ROUTER.FA)
        }}>2FA</div>
        <div onClick={() => {
          navigate(ROUTER.SHOW_TV)
        }}>SHOW_TV</div>
        <div onClick={() => {
          navigate(ROUTER.ROOT1)
        }}>ROOT_1</div>
        {/* <div onClick={() => {
          navigate(ROUTER.TEST)
        }}>TEST</div> */}
      </div>
      <Outlet />
    </PublicRoutesStyle>
  )
}

export default PublicRoutes
