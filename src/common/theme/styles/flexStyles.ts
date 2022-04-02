import { css } from "styled-components";

import { IFlexProps } from "@/common/interfaces";

const flexStyle = css<IFlexProps>`
  ${({ justifyContent }: IFlexProps) => {
    return justifyContent && `justify-content: ${justifyContent}`;
  }};
  ${({ alignItems }: IFlexProps) => {
    return alignItems && `align-items: ${alignItems}`;
  }};
  ${({ flex }: IFlexProps) => {
    return flex && `flex: ${flex}`;
  }}
  ${({ flexDirection }: IFlexProps) => {
    return flexDirection && `flex-direction: ${flexDirection}`;
  }}
  ${({ alignSelf }: IFlexProps) => {
    return alignSelf && `align-self: ${alignSelf}`;
  }}
  ${({ flexWrap }: IFlexProps) => {
    return flexWrap && `flex-wrap: ${flexWrap}`;
  }}
`;

export default flexStyle;
