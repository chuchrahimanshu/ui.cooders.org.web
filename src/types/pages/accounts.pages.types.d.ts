interface SignUpStateInterface {
  email: string;
  username: string;
  password: string;
  remember: boolean;
}

interface SignInStateInterface {
  username: string;
  password: string;
  remember: boolean;
}

interface TFAStateInterface {
  username: string;
  otp: string;
}

interface ForgetPasswordStateInterface {
  username: string;
  otp: string;
}

interface EmailVerificationStateInterface {
  username: string;
  otp: string;
}

interface ChangePasswordStateInterface {
  username: string;
  password: string;
  confirmPassword: string;
}
