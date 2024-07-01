import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
}

const moduleSlice = createSlice({
    name: "module",
    initialState,
    reducers: {
        openModule: (state, action) => { state.isOpen = true },
        closeModule: (state, action) => { state.isOpen = false}
    }
})

export const {openModule, closeModule} = moduleSlice.actions
export default moduleSlice.reducer