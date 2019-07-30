import React, { Component } from 'react';
import { Container, Title, Search, InputSearch, SearchButton, ModalSearch, Box, BackButton } from './styles';
import getRealm from '../../services/realm'
import Icon from 'react-native-vector-icons/dist/Ionicons'
import * as Actions from '../../store/actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Keyboard, StatusBar} from 'react-native';

class Header extends Component {

  state = {
    isSearching: false
  }
  
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
    this.setState({isSearching:false})
  }
  
  render() {
    return (
      <>
        {this.state.isSearching ? 
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
          </Search> : 
          <Container>
              <Title>Traduções</Title>
              <SearchButton onPress={()=> this.setState({isSearching:true})}>
                <Icon name='ios-search' size={32} color='#000'/>
              </SearchButton>
          </Container>
        } 
      </>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(Actions, dispatch);

export default connect(null,mapDispatchToProps)(Header);