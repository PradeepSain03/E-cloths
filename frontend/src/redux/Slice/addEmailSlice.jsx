import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email:'',
};

const addEmailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
   
  },
});

export const { setEmail } = addEmailSlice.actions;

export default addEmailSlice.reducer;