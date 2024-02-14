import nodemailer from "nodemailer"
// const nodemailer = require('nodemailer');

type Props = {
    to: any;
    subject: string;
    component: string;
  };


//If in development mode, use nodemailer, else use Resend
export const resendSendMail = async ({ to, subject, component }: Props) => {
  const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: 'andrei.andronachi95@yahoo.com',
      pass: "uedvekrhictaavxo",
    },
  });


    const response = await transporter.sendMail({
      from: 'andrei.andronachi95@yahoo.com',
      to,
      subject,
      html: component,
    });

    return response?.accepted && response.accepted.includes(to);
  
};