export interface ButtonProps {
  children: string;
  btnType?: "button" | "submit" | "reset";
  type: string;
  handleButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}
