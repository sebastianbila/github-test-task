import styled from "styled-components/native";

import Button from "@/components/Button";

export const Title = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 700;
`;

export const DetailsScrollView = styled.ScrollView`
  margin-top: 10px;
`;

export const BackButton = styled(Button)`
  width: 80px;
`;

BackButton.defaultProps = {
  title: "Back",
};
