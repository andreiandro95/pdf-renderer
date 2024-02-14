import { Body, Container, Head, Html, Img, Link, Preview, Section, Tailwind, Text } from '@react-email/components';
import * as React from 'react';
import { headers } from 'next/headers';
export const dynamic = 'force-dynamic';

export const ResetPasswordEmail = ({ id }) => {
  return (
    <Html>
      <Head />
      <Preview>ONO - Cereri de concediu</Preview>
      <Tailwind>
        <Body className='mx-auto my-auto bg-white font-sans tracking-wide'>
          <Container className='mx-auto my-9 rounded border border-solid border-gray-300 p-5'>
              <Section>
                <Text className='text-xl font-extrabold text-slate-700'>
                  Test ({id}):
                </Text>
              </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ResetPasswordEmail;