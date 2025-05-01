interface AccountFormTemplatePropsInterface {
  children: ReactNode;
  title: string;
  description?: string;
  submitButtonLabel: string;
  socialIconsSupport: boolean;
  formEndJSX?: ReactNode;
  submitFormHandler?: () => void;
  isLoading?: boolean;
}
