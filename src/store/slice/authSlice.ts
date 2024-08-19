import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface AuthState {
  access?: string
}

const initialState: AuthState = {
  access: undefined
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.access = action.payload;
    },
    signOut(state) {
      state.access = undefined;
      console.log('Sign out', state);
    }

  },
})

export const {
  setToken,
  signOut,
} = authSlice.actions

export default authSlice.reducer
