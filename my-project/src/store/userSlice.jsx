import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile : {
    name: "",
    age: 0,
    email: "",
    login: false
  }
}

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: { // 可以定義改變state的function
    // 登入
    setLogin(state, action) {
      console.log('setLogin state', state);
      console.log('setLogin action', action);
      const { name, age, email} = action.payload;
      state.profile = {
        name,
        age,
        email,
        login: true
      } 
    },
    // 登出
    setLogout(state) {
      console.log('setLogout state', state);
      state.profile = {...initialState.profile};
    } 
  } 
})

export const {setLogin, setLogout} = userSlice.actions;
export default userSlice.reducer;

// https://www.youtube.com/watch?v=IgFtEGXjl7Y