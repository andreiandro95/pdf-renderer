import nodemailer from 'nodemailer';

type Props = {
    to: string | string[];
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

  if (Array.isArray(to)) {
    const results = await Promise.all(
      to.map(async (recipient) => {
        console.log(recipient);
        const response = await transporter.sendMail({
          from: 'andrei.andronachi95@yahoo.com',
          to: recipient,
          subject,
          html: component,
        });

        return response?.accepted && response.accepted.includes(recipient);
      })
    );

    return results.every((result) => result);
  } else {
    const response = await transporter.sendMail({
      from: 'andrei.andronachi95@yahoo.com',
      to,
      subject,
      html: component,
    });

    return response?.accepted && response.accepted.includes(to);
  }
};