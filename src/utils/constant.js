const API = import.meta.env.API_URL || "http://localhost:5000/v2/"

export const LOGIN = `${API}user/login`;
export const USER_INFO = `${API}user/get-userInfo`
export const LOGOUT = `${API}user/log-out`



//Admin
export const GETALLEMPLOYEES = `${API}admin/get-all-employees`;
export const ADDEMPLOYEE = `${API}admin/add-employee`;
export const EDITEMPLOYEE = `${API}admin/edit-employee`;
export const DELETEEMPLOYEE = `${API}admin/delete-employee`;


export const GETALLCUSTOMERS = `${API}admin/get-all-customers`
export const ADDCUSTOMER = `${API}admin/add-customer`
export const UPDATECUSTOMER = `${API}admin/edit-customer`
export const SEARCHCUSTOMER = `${API}admin/searchCustomer`


export const ADDVEHICLE = `${API}admin/add-vehicle`
export const GETALLVEHICLE = `${API}admin/get-all-vehicle`

export const ADDSERVICE = `${API}admin/add-service`
export const GETALLSERVICE = `${API}admin/get-all-service`
export const EDITSERVICE = `${API}admin/edit-service`