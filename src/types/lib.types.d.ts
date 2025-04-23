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
  onChange?: () => void;
  required?: boolean;
  size?: "medium" | "small";
  sx?: object;
  variant?: "filled" | "outlined" | "standard";
}
