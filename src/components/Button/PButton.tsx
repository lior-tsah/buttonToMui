
import React from "react";
import { ButtonPropsColorOverrides } from "@mui/material/Button";
import { OverridableStringUnion } from "@mui/types";

import { ButtonType } from "./PButton.model";
import StyledButton from "./PButton.view";

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
  size?: "small" | "medium" | "large";
};

const PButton = (props: React.PropsWithChildren<Props>): JSX.Element => {
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
      size={props.size}
    >
      {props.children}
    </StyledButton>
  );
};

PButton.displayName = "PButton";
// PButtonView.defaultProps = {};

export default PButton;