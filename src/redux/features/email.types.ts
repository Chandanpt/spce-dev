export interface EmailState {
    value: {
      emailType: string;
      emailCategory: string[];
      emailDetails: {
        category: string;
        details: {
          title: string;
          value: string;
        }
        email_type: string;
        email_use_case: string;
        sender: string;
        subject: string;
        summary: string;
        thread_id: string;
        user_uuid: string;
        uuid: string;
      }
    };
  }