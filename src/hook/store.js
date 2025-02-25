import {create} from 'zustand'
import { createUserSlice } from './Slice/user'

export const useAppStore = create((...a)=>({
    ...createUserSlice(...a),
}))
