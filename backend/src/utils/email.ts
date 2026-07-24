import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendOTPEmail = async (email: string, otp: string) => {
  try {
    const response = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'noreply@cinenovafree.com',
      to: email,
      subject: 'CineNova Free - Email Verification OTP',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a1a2e; padding: 20px; border-radius: 8px;">
          <h2 style="color: #d4af37;">CineNova Free</h2>
          <p style="color: #eaeaea;">Your email verification code is:</p>
          <h1 style="color: #d4af37; font-size: 48px; letter-spacing: 10px; text-align: center;">${otp}</h1>
          <p style="color: #b0b0b0;">This code expires in 10 minutes.</p>
          <p style="color: #b0b0b0;">If you didn't request this code, please ignore this email.</p>
        </div>
      `,
    });
    return response;
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};

export const sendWelcomeEmail = async (email: string, name: string) => {
  try {
    const response = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'noreply@cinenovafree.com',
      to: email,
      subject: 'Welcome to CineNova Free',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a1a2e; padding: 20px; border-radius: 8px;">
          <h2 style="color: #d4af37;">Welcome to CineNova Free!</h2>
          <p style="color: #eaeaea;">Hi ${name},</p>
          <p style="color: #eaeaea;">Your account has been created successfully. Start exploring movies, series, music, and more.</p>
          <p><a href="${process.env.FRONTEND_URL}" style="background-color: #d4af37; color: #1a1a2e; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Visit CineNova Free</a></p>
        </div>
      `,
    });
    return response;
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};
