export const createUserSlice = (set) => ({
    userInfo: {},
    counter: 0,
    setUserInfo: (data) => set({userInfo: data}),
    addCount: () => set((state)=> ({counter: state.counter + 1})) 
})