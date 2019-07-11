import React, {Component} from 'react';
import { ModalTradu, Wrapper, ContainerModal, RemoveText, ContainerButton, ConfirmButton, CancelButton } from './styles';
import {connect} from 'react-redux'
import * as Actions from '../../store/actions'
import {bindActionCreators} from 'redux'
import getRealm from '../../services/realm'
// import { Container } from './styles';


class RemAllModal extends Component{

    async deleteList(){
        const realm = await getRealm()
        realm.write(()=>{
            const data = realm.objects('ListTradu')
            realm.delete(data)
        })
        this.props.handleModalAll(false)
        this.props.requestTraduList()
    }

    render(){
        return(
            <ModalTradu
                onRequestClose={()=>this.props.handleModalAll(false)}
                visible={this.props.modalRemAll}
                transparent={true}
                animationType="fade"
                presentationStyle='overFullScreen'
            >
                <Wrapper>
                    <ContainerModal>
                        <RemoveText>Remover todos os itens?</RemoveText>
                        <ContainerButton>
                            <ConfirmButton title={'Confirmar'} onPress={()=>this.deleteList()}/>
                            <CancelButton title={'Cancelar'} onPress={()=>this.props.handleModalAll(false)}/>
                        </ContainerButton>
                    </ContainerModal>
                </Wrapper>
            </ModalTradu>
        )
    }
};

const mapStateToProps = state => ({
    modalRemAll: state.modais.modalRemAll
})
  
const mapDispatchToProps = dispatch => (
    bindActionCreators(Actions, dispatch)
)

export default connect(mapStateToProps,mapDispatchToProps)(RemAllModal);