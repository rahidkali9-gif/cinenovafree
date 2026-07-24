export const generateOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const isOTPExpired = (createdAt: Date, expiryMinutes: number = 10): boolean => {
  const now = new Date();
  const diff = (now.getTime() - createdAt.getTime()) / (1000 * 60);
  return diff > expiryMinutes;
};
