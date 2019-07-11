import React from 'react';

import { StatusBar } from 'react-native';

import Routes from './routes'

const App = () => (
    <>
        <StatusBar 
            backgroundColor = "transparent"
            translucent = {true}
            barStyle = 'dark-content'
        />
        <Routes/>
    </>
);

export default App;
