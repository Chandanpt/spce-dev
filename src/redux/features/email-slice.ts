import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EmailState } from "./email.types";

const initialState: EmailState = {
  value: {
    emailType: "",
    emailCategory: [],
    emailDetails: {
      category: "",
      details: {
        title: "",
        value: "",
      },
      email_type: "",
      email_use_case: "",
      sender_name: "",
      subject: "",
      summary: "",
      thread_id: "",
      user_uuid: "",
      uuid: "",
    },
  },
};

export const email = createSlice({
  name: "email",
  initialState,
  reducers: {
    emailData: (
      state,
      action: PayloadAction<{
        emailType: string;
        emailCategory: string[];
        emailDetails: {
          category: string;
          details: {
            title: string;
            value: string;
          };
          email_type: string;
          email_use_case: string;
          sender_name: string;
          subject: string;
          summary: string;
          thread_id: string;
          user_uuid: string;
          uuid: string;
        };
      }>
    ) => {
      const { emailType, emailCategory, emailDetails } = action.payload;

      return {
        value: {
          emailType,
          emailCategory,
          emailDetails,
        },
      };
    },
  },
});

export const { emailData } = email.actions;
export default email.reducer;
