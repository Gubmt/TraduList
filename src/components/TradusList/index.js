import React, {Component} from 'react';
import {Text} from 'react-native'
import {Alert} from 'react-native'
import getRealm from '../../services/realm'
import {
    Container, 
    Box, 
    List, 
    Inf, 
    Word, 
    Tradu, 
    Delete, 
    EditButton,
    RemoveButton, 
    ModalTradu, 
    Wrapper, 
    RemoveText, 
    ContainerModal, 
    ContainerButton, 
    ConfirmButton,
    CancelButton,
    InputWord,
    InputTradu,
    InsertButton,
    InsertButtonText
  } from './styles'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import * as Actions from '../../store/actions'
import {Formik} from 'formik'
import * as yup from 'yup'
import Icon from 'react-native-vector-icons/dist/Ionicons'


const validationSchema = yup.object().shape({
  word: yup
      .string()
      .required(),

  tradu: yup
      .string()
      .required()
})

class TradusList extends Component{

  state = {
    id: null,
    word: null,
    tradu: null,
    editTranslation: {},
  }

  edit = (id,word,tradu) => {
    this.setState({id,word,tradu})
    this.props.handleModalEdit(true)
  }

  editItem = async(data) =>{
    this.setState({
      editTranslation:{
        id: this.state.id,
        word: data.word,
        tradu: data.tradu
      },
    })
    const realm = await getRealm()
    realm.write(()=>{
      realm.create('ListTradu',this.state.editTranslation,true)
    })
    this.setState({
      id: null,
      word: null,
      tradu: null,
    })
    this.props.requestTraduList()
    this.props.handleModalEdit(false)
  }

  remove = item => {
    this.setState({item})
    this.props.handleModalItem(true)
  }

  async deleteItem(){
    const realm = await getRealm()
    realm.write(()=>{
      let res = realm.objectForPrimaryKey('ListTradu',this.state.item)
      realm.delete(res)
    })
    this.setState({item:null})
    this.props.requestTraduList()
    this.props.handleModalItem(false)
  }
  
  render(){
    return(
    <Container>
      <List keyboardShouldPersistTaps="handled"
        data={this.props.translations}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Box>
            <Inf>
              <Word>{item.word}</Word>
              <Tradu>{item.tradu}</Tradu>
            </Inf>
            <Delete>
              <EditButton onPress={() => this.edit(item.id, item.word, item.tradu)}>
                <Icon name='md-create' size={32} color='#0066CC'/>
              </EditButton>
              <RemoveButton title={'Deletar'} onPress={() => this.remove(item.id)}>
                <Icon name='md-close' size={32} color='#ff0000'/>
              </RemoveButton>
            </Delete>
          </Box>
        )}
      />

      <ModalTradu
        onRequestClose={()=>this.props.handleModalEdit(false)}
        visible={this.props.modalEdit}
        transparent={true}
        animationType="fade"
        presentationStyle='overFullScreen'
      >
        <Formik
          initialValues={{word:this.state.word, tradu:this.state.tradu}}
          isInitialValid={true}
          validationSchema={validationSchema}
          onSubmit={values=>this.editItem(values)}
          render={({values, handleChange, handleSubmit, errors, isValid, setFieldTouched})=>(
            <Wrapper>
              <ContainerModal>
                  <InputWord 
                    name={'word'}
                    autoFocus={true}
                    onChangeText={handleChange('word')}
                    value={values.word}
                    placeholder={'Digite a palavra'} 
                    error={errors.word}
                    onFocus={()=>setFieldTouched('word')}
                  />
                  <InputTradu 
                    name={'tradu'}
                    value={values.tradu}
                    placeholder={'Digite a tradução'} 
                    onFocus={()=>setFieldTouched('tradu')}
                    error={errors.tradu}
                    onChangeText={handleChange('tradu')}
                  />
                  <InsertButton disabled={!isValid} onPress={handleSubmit}><InsertButtonText>Inserir</InsertButtonText></InsertButton>
              </ContainerModal>
            </Wrapper>
          )}
        />
      </ModalTradu>

      <ModalTradu
        onRequestClose={()=>{}}
        visible={this.props.modalRemItems}
        transparent={true}
        animationType="fade"
        presentationStyle='overFullScreen'
      >
        <Wrapper>
          <ContainerModal>
            <RemoveText>Remover este item?</RemoveText>
            <ContainerButton>
              <ConfirmButton title={'Confirmar'} onPress={()=>this.deleteItem()}/>
              <CancelButton title={'Cancelar'} onPress={()=>this.props.handleModalItem(false)}/>
            </ContainerButton>
          </ContainerModal>
        </Wrapper>
      </ModalTradu>
    </Container>
    )
  }
}

const mapStateToProps = state => ({
  translations: state.translations.data,
  modalEdit: state.modais.modalEdit,
  modalRemItems: state.modais.modalRemItems
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(Actions, dispatch)
)

export default connect(mapStateToProps,mapDispatchToProps)(TradusList)
