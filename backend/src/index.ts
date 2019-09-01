import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();


// Sendgrid Config
import * as sgMail from '@sendgrid/mail';

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

// Sends email to user after signup
export const welcomeEmail = functions.auth.user().onCreate(user => {
  const msg = {
    to: user.email,
    from: 'hello@tristan.ee',
    templateId: TEMPLATE_ID,
    dynamic_template_data: {
      subject: 'Welcome!',
      name: user.displayName
    }
  };

  return sgMail.send(msg);
});

// Sends email via HTTP. Can be called from frontend code.
export const genericEmail = functions.https.onCall(async (data, context) => {
  if (!context.auth && !context!.auth!.token.email) {
    throw new functions.https.HttpsError(
      'failed-precondition',
      'Must be logged with an email address'
    );
  }

  const msg = {
    to: context!.auth!.token.email,
    from: 'hello@tristan.ee',
    templateId: TEMPLATE_ID,
    dynamic_template_data: {
      subject: data.subject,
      name: data.text
    }
  };

  await sgMail.send(msg);

  // Handle errors here

  // Response must be JSON serializable
  return { success: true };
});
