import { Route } from "react-router-dom";
import { AccountLayout } from "../layouts/index.layouts";
import {
  ChangePassword,
  EmailVerification,
  ForgetPassword,
  SignIn,
  SignUp,
  TFA,
} from "../pages/index.pages";

export const AccountRouter = (
  <>
    <Route path="/accounts" element={<AccountLayout />}>
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="password/forgot" element={<ForgetPassword />} />
      <Route path="password/update" element={<ChangePassword />} />
      <Route path="verify/email" element={<EmailVerification />} />
      <Route path="tfa" element={<TFA />} />
    </Route>
  </>
);
