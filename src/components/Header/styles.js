import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  background-color: #FFF;
  border-bottom-width: 1;
  border-color: #D3D3D3;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

export const Title = styled.Text`
  margin-left: 15px;
  font-size: 32px;
  color: #000;
  font-weight: bold;
`;

export const ModalSearch = styled.Modal``;

export const Box = styled.View`
  flex: 1; 
  
`;

export const Search = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  width: 100%;
  height: 60px;
`;

export const InputSearch = styled.TextInput`
  flex: 1;
  border: 1px solid;
  border-radius: 4px;
  font-size: 16px;
  border-color: #333;
  padding-left: 10px;
  margin: 5px 15px;
`;

export const SearchButton = styled.TouchableOpacity`
  margin-right: 15px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-left: 15px;
`;