import React from 'react';
import * as Actions from '../../store/actions'
import {InsertTradu, DeleteButton, Foot, FilterButton} from './styles'
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/dist/Ionicons'

const Footer = ({dispatch}) => (
    <Foot>
        <FilterButton onPress={()=>{}}><Icon name='ios-funnel' size={32}/></FilterButton>
        <InsertTradu onPress={()=>dispatch(Actions.handleModal(true))}><Icon name="ios-add-circle" size={40} color='#0066CC'/></InsertTradu>
        <DeleteButton onPress={()=>dispatch(Actions.handleModalAll(true))}><Icon name="ios-trash" size={32}/></DeleteButton>
    </Foot>
);

export default connect()(Footer);