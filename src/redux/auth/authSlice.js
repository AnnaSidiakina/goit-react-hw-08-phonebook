import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';

const initialState = {
  name: null,
  email: null,
  token: null,
  isLoggedIn: false,
  isError: null,
};

export const authSlice = createSlice({
  name: 'user',
  initialState,

  extraReducers: builder => {
    builder
      .addMatcher(
        authApi.endpoints.loginUser.matchFulfilled,
        (state, { payload }) => {
          const { user, token } = payload;

          state.email = user.email;
          state.name = user.name;
          state.token = token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        authApi.endpoints.loginUser.matchRejected,
        (state, { payload }) => {
          if (payload.status === 400) {
            state.isError = true;
          }
        }
      )

      .addMatcher(
        authApi.endpoints.signupUser.matchFulfilled,
        (state, { payload }) => {
          const { user, token } = payload;

          state.email = user.email;
          state.name = user.name;
          state.token = token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(authApi.endpoints.logoutUser.matchFulfilled, state => {
        state.name = null;
        state.email = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addMatcher(
        authApi.endpoints.getCurrentUser.matchFulfilled,
        (state, { payload }) => {
          // const { user } = payload;

          state.name = payload.name;
          state.email = payload.email;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        authApi.endpoints.getCurrentUser.matchRejected,
        (state, { payload }) => {
          // const { user } = payload;

          state.name = null;
          state.email = null;
          state.isLoggedIn = false;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
