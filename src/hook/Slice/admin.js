export const createAdminSlice = (set) => ({
    employeeList: [],
    addEmployee: (data) => set((state) => ({employeeList: [...state.employeeList, data]})),
    setEmployeeList: (data) => set({employeeList: data}),
    removeEmployee: (id) => set((state) => ({employeeList: state.employeeList.filter((item) => item._id !== id)})),
})