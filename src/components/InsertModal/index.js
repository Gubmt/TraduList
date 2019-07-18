import React, {Component} from 'react';
import {Text} from 'react-native';
import { 
    ModalTradu, 
    Wrapper, 
    ContainerModal, 
    InputWord, 
    InputTradu, 
    InsertButton,
    InsertButtonText,
    ErrorText, 
    CancelButton,
    CancelButtonText
 } from './styles';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../../store/actions'
import getRealm from '../../services/realm'
import {Formik} from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
    word: yup
        .string()
        .required('*Este campo é obrigatório'),

    tradu: yup
        .string()
        .required('*Este campo é obrigatório')
})

class InsertModal extends Component {

    state = { newTranslation: {} }

    addNewTranslation = data => {
        const now = new Date()
        this.setState({
            newTranslation:{
                id: now.valueOf(),
                word: data.word,
                tradu: data.tradu
            },
        })  
        this.saveList()
        this.props.requestTraduList()
        this.props.handleModal(false)
    }

    saveList = async() =>{
        const realm = await getRealm()
        realm.write(()=>{
            realm.create('ListTradu', this.state.newTranslation)
        })
        this.setState({
            newTranslation:{},
        })
    }

    componentDidMount() {
        this.props.requestTraduList()
      }

    render(){
        return(  
            <ModalTradu
                onRequestClose={()=>this.props.handleModal(false)}
                visible={this.props.modal}
                transparent={true}
                animationType="fade"
                presentationStyle='overFullScreen'
            >
                <Formik
                    initialValues={{word:'', tradu:''}}
                    validationSchema={validationSchema}
                    onSubmit={values=>this.addNewTranslation(values)}
                    render={({values, handleChange, handleSubmit, errors, isValid, setFieldTouched, touched})=>(
                        <Wrapper>
                            <ContainerModal>
                                <InputWord 
                                    name={'word'}
                                    value={values.word}
                                    placeholder={'Digite a palavra'} 
                                    onBlur={()=>setFieldTouched('word')}
                                    onChangeText={handleChange('word')}
                                />
                                <InputTradu 
                                    name={'tradu'}
                                    value={values.tradu}
                                    placeholder={'Digite a tradução'} 
                                    onBlur={()=>setFieldTouched('tradu')}
                                    onChangeText={handleChange('tradu')}
                                />
                                <InsertButton disabled={!isValid} onPress={handleSubmit}><InsertButtonText>Inserir</InsertButtonText></InsertButton>
                            </ContainerModal>
                        </Wrapper>
                    )}
                />
            </ModalTradu>
        )
    }
};

const mapStateToProps = state => ({
  modal: state.modais.modal
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(InsertModal);
