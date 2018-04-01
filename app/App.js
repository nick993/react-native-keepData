import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';
import {Container} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';


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
        <View style = {styles.navBar} >
          <Image source = {require('./images/toDoIcon.png')} 
          style = {{width:40, height: 40}}/>
          <View style = {styles.rightNav}>
            <TouchableOpacity>
              <Icon style = {styles.navItem} name = 'search' size = {25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style = {styles.navItem} name = 'account-circle' size = {25} />
            </TouchableOpacity>
          </View>
        </View>
        <View style = {styles.body} />
        <View style = {styles.tabBar}>
          <TouchableOpacity style = {styles.tabItem}>
            <Icon name = 'home'  size = {30} />
            <Text>home</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.tabItem}>
            <Icon name = 'add-circle-outline'  size = {30} />
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    height: 55,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  tabBar: {
    backgroundColor: 'white',
    height: 60,
    borderTopWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E5E5E5',
    justifyContent: 'space-around'
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightNav: {
    flexDirection: 'row'
  },
  navItem: {
    marginLeft: 25
  },
  body: {
    flex: 1
  }
});
