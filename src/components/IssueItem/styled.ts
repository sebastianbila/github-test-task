import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  border: 1px solid #090808;
  border-radius: 10px;
  height: 50px;
  margin-bottom: 10px;
  justify-content: center;
  padding: 0 15px;
  overflow: hidden;
  flex-direction: row;
  align-items: center;
`;

export const Details = styled.TouchableOpacity`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export const IconWrapper = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  margin-left: 10px;
`;

export const Subtitle = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: #989595;
`;
