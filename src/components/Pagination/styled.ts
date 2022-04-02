import styled from "styled-components/native";

import Button from "@/components/Button";

export const Wrapper = styled.ScrollView`
  max-height: 40px;
`;

Wrapper.defaultProps = {
  contentContainerStyle: {
    alignItems: "center",
  },
};

export const Item = styled(Button)`
  width: 30px;
  height: 30px;
  margin-right: 5px;
  padding: 0;
  ${({ active }: any) => active && "background-color: #a97f7f;"}
`;
