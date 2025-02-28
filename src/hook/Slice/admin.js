export const createAdminSlice = (set) => ({
    displayOpt: false,
    employeeList: [],
    customerList: [],
    selectedEmployee: {},
    selectedCustomer: {},
    customerVehicles: [],
    selectedVehicle: {},
    setSelectedVehicle: (data) => set({selectedVehicle: data}),
    setDisplayOpt: () => set((state)=>({displayOpt: !state.displayOpt})),
    setCustomerVehicles: (data) => set({ customerVehicles: Array.isArray(data) ? data : [data] }),
    addCustomerVehicle: (data) => set((state) => ({
        customerVehicles: state.customerVehicles.length > 0 ? [...state.customerVehicles, data]:[data]
    })),    
    editCustomerVehicle: (data) => set((state) => ({customerVehicles: state.customerVehicles.map((item) => item._id === data._id ? data : item)})),
    removeCustomerVehicle: (id) => set((state) => ({customerVehicles: state.customerVehicles.filter((item) => item._id !== id)})),
    setSelectedEmployee: (data) => set({selectedEmployee: data}),
    setSelectedCustomer: (data) => set({selectedCustomer: data}),
    addCustomer: (data) => set((state) => ({customerList: state.customerList.length > 0 ? [...state.customerList, data] : [data]})),
    addEmployee: (data) => set((state) => ({employeeList: state.employeeList.length > 0 ? [...state.employeeList, data] : [data]})),
    setEmployeeList: (data) => set({employeeList: data}),
    setCustomerList: (data) => set({customerList: data}),
    removeEmployee: (id) => set((state) => ({employeeList: state.employeeList.filter((item) => item._id !== id)})),
    removeCustomer: (id) => set((state) => ({customerList: state.customerList.filter((item) => item._id !== id)})),
    editEmployeeList: (data) => set((state) => ({employeeList: state.employeeList.map((item) => item._id === data._id ? data : item)})),
    editCustomerList: (data) => set((state) => ({customerList: state.customerList.map((item) => item._id === data._id ? data : item)})),
    
})