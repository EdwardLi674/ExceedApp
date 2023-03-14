import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login_content: {},
  signup_content: {},
  password_reset_content: {},
  welcome_content: {},
  about_content: {},
  terms_content: {},
  privacy_policy_content: {},
  contact_us_content: {},
  logo: {},
  error: {},
};

const appsettingSlice = createSlice({
  name: "appsetting",
  initialState,
  reducers: {
    setInit(state, action) {
      state.login_content = action.payload.login_content;
      state.signup_content = action.payload.signup_content;
      state.password_reset_content = action.payload.password_reset_content;
      state.welcome_content = action.payload.welcome_content;
      state.about_content = action.payload.about_content;
      state.terms_content = action.payload.terms_content;
      state.privacy_policy_content = action.payload.privacy_policy_content;
      state.contact_us_content = action.payload.contact_us_content;
      state.logo = action.payload.logo;
    },
    setError(state, action) {
      state.error.isShow = action.payload.isShow;
      state.error.alert_title = action.payload.alert_title;
      state.error.alert_text = action.payload.alert_text;
      state.error.alert_action_button_title =
        action.payload.alert_action_button_title;
      state.error.alert_action_url = action.payload.alert_action_url;
      state.error.message = action.payload.message;
    },
  },
});

export const { setInit, setError } = appsettingSlice.actions;

export default appsettingSlice.reducer;
