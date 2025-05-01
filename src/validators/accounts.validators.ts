import { z as ZOD } from "zod";

export const signUpValidationSchema = ZOD.object({
  email: ZOD.string()
    .email("Invalid email address.")
    .min(1, "Email is required."),
  username: ZOD.string()
    .min(3, "Username must be at least 3 characters.")
    .max(20, "Username cannot exceed 20 characters.")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores."
    ),
  password: ZOD.string()
    .min(8, "Password must be at least 8 characters.")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
    .regex(/[0-9]/, "Password must contain at least one number.")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character."
    ),
  remember: ZOD.boolean(),
});

export const signInValidationSchema = ZOD.object({
  username: ZOD.string()
    .min(3, "Username must be at least 3 characters.")
    .max(20, "Username cannot exceed 20 characters.")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores."
    ),
  password: ZOD.string()
    .min(8, "Password must be at least 8 characters.")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
    .regex(/[0-9]/, "Password must contain at least one number.")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character."
    ),
  remember: ZOD.boolean(),
});

export const tfaValidationSchema = ZOD.object({
  username: ZOD.string()
    .min(3, "Username must be at least 3 characters.")
    .max(20, "Username cannot exceed 20 characters.")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores."
    ),
  otp: ZOD.string()
    .length(6, "OTP must be exactly 6 characters.")
    .regex(/^\d{6}$/, "OTP must be a 6-digit number."),
});

export const forgetPasswordValidationSchema = ZOD.object({
  username: ZOD.string()
    .min(3, "Username must be at least 3 characters.")
    .max(20, "Username cannot exceed 20 characters.")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores."
    ),
  otp: ZOD.string()
    .length(6, "OTP must be exactly 6 characters.")
    .regex(/^\d{6}$/, "OTP must be a 6-digit number."),
});

export const emailVerificationValidationSchema = ZOD.object({
  username: ZOD.string()
    .min(3, "Username must be at least 3 characters.")
    .max(20, "Username cannot exceed 20 characters.")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores."
    ),
  otp: ZOD.string()
    .length(6, "OTP must be exactly 6 characters.")
    .regex(/^\d{6}$/, "OTP must be a 6-digit number."),
});

export const changePasswordValidationSchema = ZOD.object({
  username: ZOD.string()
    .min(3, "Username must be at least 3 characters.")
    .max(20, "Username cannot exceed 20 characters.")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores."
    ),
  password: ZOD.string()
    .min(8, "Password must be at least 8 characters.")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
    .regex(/[0-9]/, "Password must contain at least one number.")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character."
    ),
  confirmPassword: ZOD.string()
    .min(8, "Confirm password must be at least 8 characters.")
    .regex(
      /[A-Z]/,
      "Confirm password must contain at least one uppercase letter."
    )
    .regex(
      /[a-z]/,
      "Confirm password must contain at least one lowercase letter."
    )
    .regex(/[0-9]/, "Confirm password must contain at least one number.")
    .regex(
      /[^A-Za-z0-9]/,
      "Confirm password must contain at least one special character."
    ),
});
