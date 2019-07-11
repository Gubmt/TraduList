import React, { Component } from 'react';
import { Container, Title, Search, InputSearch, SearchButton, ModalSearch, Box, BackButton } from './styles';
import getRealm from '../../services/realm'
import Icon from 'react-native-vector-icons/dist/Ionicons'
import * as Actions from '../../store/actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Keyboard, StatusBar} from 'react-native';

class Header extends Component {
  
  handleSearch = async (search) => {
    if(search !== ''){
      const realm = await getRealm()
      realm.write(()=>{
        let res = realm.objects('ListTradu').filtered('word CONTAINS $0 OR tradu CONTAINS $0',search)
        this.props.searchTranslations(res)
      })
    }
    else this.props.requestTraduList() 
  }

  handleArrowBack = () => {
    this.props.requestTraduList() 
    this.props.handleModalSearch(false)
  }
  
  render() {
    return (
        <Container>
            <Title>Traduções</Title>
            <SearchButton onPress={()=> this.props.handleModalSearch(true)}>
              <Icon name='ios-search' size={32} color='#000'/>
            </SearchButton>
            <ModalSearch
                onRequestClose={()=>this.props.handleModalSearch(false)}
                visible={this.props.modalSearch}
                transparent={true}
                animationType="fade"
                presentationStyle='overFullScreen'
            >
              <Box>
                <Search>
                  <BackButton onPress={()=>this.handleArrowBack()}>
                    <Icon name='ios-arrow-back' size={32} color='#000'/>
                  </BackButton>
                  <InputSearch 
                    autoFocus = {true}
                    disableFullscreenUI = {true}
                    placeholder = 'Procurar tradução'
                    onChangeText = {text => this.handleSearch(text)}
                  /> 
                </Search> 
              </Box>
            </ModalSearch>
        </Container>
    );
  }
}

const mapStateToProps = state => ({
  modalSearch: state.modais.modalSearch
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Header);