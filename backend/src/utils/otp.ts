export const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();
export const isOTPExpired = (createdAt, expiryMinutes = 10) => {
  const now = new Date();
  const diff = (now.getTime() - createdAt.getTime()) / (1000 * 60);
  return diff > expiryMinutes;
};
