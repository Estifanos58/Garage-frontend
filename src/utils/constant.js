const API = import.meta.env.API_URL || "http://localhost:5000/v2/"

export const LOGIN = `${API}user/login`;
export const USER_INFO = `${API}user/get-userInfo`
export const LOGOUT = `${API}user/log-out`