import React from "react";
import { Link } from "react-router-dom";
import { ButtonProps, ButtonPropsColorOverrides } from "@mui/material/Button";
import { OverridableStringUnion } from "@mui/types";

import { ButtonType } from "./PButton.model";
import StyledButton from "./PButton";

type Props = {
  className?: string;
  color: OverridableStringUnion<
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning",
    ButtonPropsColorOverrides
  >;
  disabled?: boolean;
  type: ButtonType;
  variant?: "contained" | "outlined" | "text";
  to?: string;
  buttonRef?: React.RefObject<HTMLButtonElement>;
  dataTestid?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const PButtonView = (props: React.PropsWithChildren<Props>): JSX.Element => {

  return (
    <StyledButton
      ref={props.buttonRef}
      className={props.className}
      type={props.type}
      variant={props.variant}
      disabled={props.disabled}
      data-testid={props.dataTestid}
      onClick={props.onClick}
      color={props.color}
      href={props.to && !props.disabled ? props.to : undefined} 
      
    >
      {props.children}
    </StyledButton>
  );

};

PButtonView.displayName = "PButtonView";
// PButtonView.defaultProps = {};

export default PButtonView;
