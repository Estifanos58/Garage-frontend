export const createAdminSlice = (set) => ({
    employeeList: [],
    customerList: [],
    addCustomer: (data) => set((state)=> ({customerList: [...customElements, data]})),
    addEmployee: (data) => set((state) => ({employeeList: [...state.employeeList, data]})),
    setEmployeeList: (data) => set({employeeList: data}),
    setCustomerList: (data) => set({customerList: data}),
    removeEmployee: (id) => set((state) => ({employeeList: state.employeeList.filter((item) => item._id !== id)})),
    removeCustomer: (id) => set((state) => ({customerList: state.customerList.filter((item) => item._id !== id)})),
    
})