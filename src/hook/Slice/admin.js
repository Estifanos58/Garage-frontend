export const createAdminSlice = (set) => ({
    employeeList: [],
    customerList: [],
    selectedEmployee: {},
    selectedCustomer: {},
    setSelectedEmployee: (data) => set({selectedEmployee: data}),
    setSelectedCustomer: (data) => set({selectedCustomer: data}),
    addCustomer: (data) => set((state)=> ({customerList: [...state.customerList, data]})),
    addEmployee: (data) => set((state) => ({employeeList: [...state.employeeList, data]})),
    setEmployeeList: (data) => set({employeeList: data}),
    setCustomerList: (data) => set({customerList: data}),
    removeEmployee: (id) => set((state) => ({employeeList: state.employeeList.filter((item) => item._id !== id)})),
    removeCustomer: (id) => set((state) => ({customerList: state.customerList.filter((item) => item._id !== id)})),
    editEmployeeList: (data) => set((state) => ({employeeList: state.employeeList.map((item) => item._id === data._id ? data : item)})),
    editCustomerList: (data) => set((state) => ({customerList: state.customerList.map((item) => item._id === data._id ? data : item)})),
    
})