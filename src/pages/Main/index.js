import React, {Component} from 'react';
import {Container} from './styles'
import store from '../../store/index'
import { Provider } from 'react-redux'
import Header from '../../components/Header'
import TradusList from '../../components/TradusList'
import InsertModal from '../../components/InsertModal'
import RemAllModal from '../../components/RemAllModal'
import Footer from '../../components/Footer'


export default class Main extends Component {

  render(){
    return (
      <Container>
          <Provider store={store}>
            <Header/>
            <TradusList/>
            <Footer/> 
            <InsertModal/>
            <RemAllModal/>
          </Provider>     
      </Container>
    );
  }
}



