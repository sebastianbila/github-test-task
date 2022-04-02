import React, { ComponentProps } from "react";

import { StyledButton, ButtonText } from "./styled";

type ButtonProps = {
  title: string;
  onPress?: (...args: any) => void;
};

function Button({
  title,
  onPress,
  ...rest
}: ButtonProps & ComponentProps<any>) {
  return (
    <StyledButton onPress={onPress} {...rest}>
      <ButtonText>{title}</ButtonText>
    </StyledButton>
  );
}

export default Button;
