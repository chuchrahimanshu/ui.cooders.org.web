interface MUITypographyPropsInterface {
  align?: "center" | "inherit" | "justify" | "left" | "right";
  color?: string;
  gutterBottom?: boolean;
  sx?: object;
  variant?:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2";
  content?: string;
  id?: string;
  className?: string;
}

interface MUITextFieldPropsInterface {
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  helperText?: ReactNode;
  id?: string;
  label?: ReactNode;
  name?: string;
  placeholder?: string;
  type?: string;
  value?: any;
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  required?: boolean;
  size?: "medium" | "small";
  sx?: object;
  variant?: "filled" | "outlined" | "standard";
  multiline?: boolean;
  maxRows?: number;
  rows?: number;
}

interface MUIButtonPropsInterface {
  content: string;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  disabled?: boolean;
  disableElevation?: boolean;
  disableFocusRipple?: boolean;
  disableRipple?: boolean;
  fullWidth?: boolean;
  href?: string;
  loadingIndicator?: ReactNode;
  loadingPosition?: "center" | "end" | "start";
  sx?: object;
  size?: "small" | "medium" | "large";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: "contained" | "outlined" | "text";
  onClickHandler?: () => void;
  loading?: boolean;
}

interface MUIPaperPropsInterface {
  children: ReactNode;
  elevation?: number;
  square?: boolean;
  sx?: object;
  variant?: "elevation" | "outlined";
  className?: string;
}

interface MUILinkPropsInterface {
  variant?:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2";
  underline?: "always" | "hover" | "none";
  sx?: object;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | "textPrimary"
    | "textSecondary"
    | "textDisabled";
  children: ReactNode;
  href?: string;
  clickHandler?: () => void;
}

interface MUICheckboxPropsInterface {
  checked?: boolean;
  checkedIcon?: ReactNode;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  defaultChecked?: boolean;
  disabled?: boolean;
  disableRipple?: boolean;
  icon?: ReactNode;
  id?: string;
  onChange?: () => void;
  required?: boolean;
  size?: "medium" | "small";
  value?: any;
  sx?: object;
  label?: string;
}

interface MUIBoxPropsInterface {
  component?: ElementType;
  sx?: object;
  children?: ReactNode;
}

interface MUIAvatarPropsInterface {
  alt: string;
  src?: string;
  className?: string;
  sx?: object;
  variant?: "circular" | "rounded" | "square";
}

interface MUIOTPInputPropsInterface {
  value: string;
  handleOTPChange: (value: string) => void;
}

interface MUIIconButtonPropsInterface {
  children: ReactNode;
  size?: "small" | "medium" | "large";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  disabled?: boolean;
  disableFocusRipple?: boolean;
  disableRipple?: boolean;
  edge?: "end" | "start" | false;
  loading?: boolean;
  loadingIndicator?: ReactNode;
  sx?: object;
  label: string;
}

interface MUIDialogPropsInterface {
  open: boolean;
  handleDialogClose: () => void;
  title?: string;
  dialogActions?: ReactNode;
  fullScreen?: boolean;
  fullWidth?: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  scroll?: "body" | "paper";
  sx?: object;
  dialogActionsSX?: object;
  disableDialogActionsSpacing?: boolean;
  dialogTitleSX?: object;
  dialogContent: ReactNode;
  dialogContentDividers?: boolean;
  dialogContentSX?: object;
}
