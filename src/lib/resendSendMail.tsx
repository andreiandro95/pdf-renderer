import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
type Props = {
  to: string | null;
  subject: string;
  component: string;
};
//If in development mode, use nodemailer, else use Resend
export const resendSendMail = async ({ to, subject, component }: Props) => {
  const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: 'andrei.andronachi95@yahoo.com',
      pass: 'kdjspnczmfdsjlda',
    },
  });
  if (to) {
    const response = await transporter.sendMail({
      from: 'andrei.andronachi95@yahoo.com',
      to,
      subject,
      html: component,
    });
    if (!response?.accepted || !response.accepted.includes(to)) return false;
  }
  return true;
};