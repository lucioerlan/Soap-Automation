const moment = require('moment');
const { WebClient } = require('@slack/web-api');
const token = process.env.SLACK_BOT_TOKEN;
const web = new WebClient(token);
const conversationId = '0000000';

const now = moment();
const dateHourNowDatabase = now.format('YYYY-MM-DD HH:mm:ss');

const slackMessage = async () => {
  const result = await web.chat.postMessage({
    channel: conversationId,
    text:
      dateHourNowDatabase() +
      ' *`  ATTENTION! HAVE A PROBLEM WITH THE SERVICE CONSULTANT `*  :white_frowning_face:   ',
  });

  console.log(
    `Successfully send message ${result.ts} in conversation ${conversationId}`
  );
};

module.exports = {
  slackMessage
};
