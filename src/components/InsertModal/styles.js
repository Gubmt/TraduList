import styled from 'styled-components/native';

export const ModalTradu = styled.Modal``;

export const Wrapper = styled.View`
    flex: 1;
    background: rgba(0,0,0,0.6);
    justify-content: center;
`;

export const ContainerModal = styled.View`
    justify-content: center;
    margin: 10px 10px;
    padding: 10px;
    background: #FFF;
    border-radius: 15px;
`;

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

export const ErrorText = styled.Text`
    margin-horizontal: 15px;
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

export const CancelButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin-horizontal: 90px;
    padding: 5px;
    background-color: #b22222;
    border: 1px solid;
    border-radius: 10px;
`;
export const CancelButtonText = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: #FFF;
`;