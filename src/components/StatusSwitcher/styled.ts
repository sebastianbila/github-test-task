import styled from "styled-components/native";

import Button from "@/components/Button";

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Item = styled(Button)`
  width: 32.5%;
  ${({ active }: any) => active && "background-color: #a97f7f;"}
`;
