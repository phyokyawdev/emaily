const client = require("@sendgrid/mail");
const {
  classes: { Mail },
} = require("@sendgrid/helpers");
const keys = require("../config/keys");

client.setApiKey(keys.sendGridKey);

class Mailer extends Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.setFrom("phyokyaw.test@gmail.com");
    this.setSubject(subject);

    // set content
    this.addHtmlContent(content);

    // add recipients
    const recipientEmails = recipients.map((recipient) => ({
      email: recipient.email,
    }));
    this.addTo(recipientEmails);

    // add click tracking
    const trackingSettings = {
      clickTracking: { enable: true, enableText: true },
    };
    this.setTrackingSettings(trackingSettings);
  }

  async send() {
    const response = await client.send(this.toJSON());
    return response;
  }
}

module.exports = Mailer;
