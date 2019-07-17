import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #DDD;
`;

export const Box = styled.View`
  padding: 10px 15px;
  margin: 7px 15px 7px 15px;
  border-radius: 10px;
  background-color: #FFF;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Word = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export const Tradu = styled.Text`
  font-size: 16px;
  margin-top: 5px;
  line-height: 20px;
  color #666;
`;

export const Inf = styled.View`
  flex: 1;
  margin: 5px;
`;

export const Delete = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
`;

export const EditButton = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const RemoveButton = styled.TouchableOpacity``;

export const ModalTradu = styled.Modal``;

export const Wrapper = styled.View`
    flex: 1;
    background: rgba(0,0,0,0.6);
    justify-content: center;
`;

export const List = styled.FlatList`
    background: #DDD;
`;

export const ContainerModal = styled.View`
    justify-content: center;
    margin: 10px 10px;
    padding: 10px;
    background: #FFF;
    border-radius: 15px;
`;

export const RemoveText = styled.Text`
    color: #000;
    font-size: 20px;
    margin: 10px;
`;

export const ContainerButton = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px 0px 10px;
    margin-bottom: 10px;
`;

export const ConfirmButton = styled.Button``;

export const CancelButton = styled.Button``;

export const InputWord = styled.TextInput`
  margin: 20px 15px 5px 15px;
  border-bottom-width: 1px;
  border-radius: 4px;
  font-size: 20px;
  color: #000;
`;

export const InputTradu = styled.TextInput`
  margin: 5px 15px 10px 15px;
  border-bottom-width: 1px;
  border-radius: 4px;
  font-size: 20px;
  color: #000;
`;

export const InsertButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  margin-horizontal: 15px;
  padding: 5px;
  border: 1px solid;
  background-color: #0066CC;
  border-radius: 10px;
`;

export const InsertButtonText = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: #FFF;
`;