import styled from "styled-components/native";

import { IFlexProps } from "@/common/interfaces";
import { flexStyles } from "@/common/theme/styles";

const Row = styled.View<IFlexProps>`
  width: 100%;
  flex-direction: row;
  ${flexStyles}
`;

export default Row;
