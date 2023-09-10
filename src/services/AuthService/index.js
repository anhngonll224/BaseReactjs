import axios from "axios"
import http from "../index"
import {
  apiLogin,
} from "./urls"
import QueryString from "qs"

const login = body => http.post(apiLogin, body)
const AuthService = {

  login,

}
export default AuthService
