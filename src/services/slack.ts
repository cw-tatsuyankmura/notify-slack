import 'dotenv/config';
import { WebClient } from '@slack/web-api';

const env = process.env;
const web = new WebClient(env.REACT_APP_SLACK_TOKEN);

const message = (id: string) => ({
  channel: env.REACT_APP_SLACK_CHANNEL_NAME,
  username: '中条 あやみ',
  text: `${id}に来客だよ！`,
  icon_url:
    'https://yuh-07.com/wp-content/uploads/2018/06/98795db1877f1be2f693b4f0d624f0f8.png',
});

export const call = (id: string) => web.chat.postMessage(message(id) as any);
