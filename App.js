/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {Container} from 'native-base';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {word: 'hello'};
  }  



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is a Demo app {this.state.word}
        </Text>
        <Button title='Click me' onPress = {this.getApiForNow}/>  
      </View>
    );
  }
 
  getApiForNow = () => {
   return fetch('https://soa-starter-1.appspot.com/api/greeting/2')    
    .then((response) => {
      this.setState({word: response._bodyText}) 
    })
    .catch(error => {
      console.error(error)
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
