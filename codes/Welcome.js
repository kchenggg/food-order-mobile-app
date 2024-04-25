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
  Image,
  TouchableOpacity
} from 'react-native';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>

      <View style ={styles.row1}>
      <TouchableOpacity style={styles.buttonLogout}>
        <Text>
          Logout
        </Text>
      </TouchableOpacity>
      </View>
        <View style ={styles.row2}>
          <Text style={styles.welcome}>
            Welcome back, user!
          </Text>
        </View>
        <View style ={styles.row3}>
          <Text style={styles.textrow5}> Popular cafes near me </Text>
          <Image source={require('./2cafesnearme.jpg')} style={styles.image}/>
          <Text style={styles.textrow3}> Cereal Cafe . Breakfast & Brunch </Text>
          <Text style={styles.textrow3}> 30 - 40 minutes away </Text>
          <Text style={styles.textrow4}> 4/ 5 </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7FFFD4',
  },
  row1: {
    flex: 0, /*equal division spacing for all where you state "flex: 1"*/
    backgroundColor: '#AAD3E3',
    flexDirection: 'row', /*go sidewise*/
    justifyContent: 'flex-end', /*space-around, space-between*/
    alignItems: 'flex-start',
  },
  row2: {
    flex: 1,
    backgroundColor: '#AAD3E3',
    justifyContent: 'center',
    alignItems: 'center',
  },

  row3:{
    flex: 2,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textrow3: {
    height:30,
    width: 400,
    fontSize: 20,
  },
  textrow4: {
    borderWidth:1,
    height:30,
    width: 100,
    fontSize: 20,
    backgroundColor: 'lightgreen',
    textAlign: 'center'
  },
  textrow5: {
    fontSize: 20,
    backgroundColor: 'beige',
    textAlign: 'center'
  },
  image: {
    height: 250,
    width: 400,
  },
  buttonLogout: {
    backgroundColor: 'white',
    height: 30,
    width: 100,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
  welcome: {
    borderWidth: 1,
    height: 95,
    width: 350,
    backgroundColor: 'white',
    fontSize: 40,
    textAlign: 'center',
  },
});
