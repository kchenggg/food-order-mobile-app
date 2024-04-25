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

import { Dropdown } from 'react-native-material-dropdown';

export default class App extends Component<Props> {
  render() {

      return (
        <View style={styles.container}>
          <View style ={styles.row0}>
            <TouchableOpacity style={styles.buttonLogout}>
              <Text>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
          <View style ={styles.row1}>
            <Text style={styles.cart}>
              Your Cart
            </Text>
          </View>
          <View style ={styles.row2}>
            <Text style={styles.textrow2}> 1 x 0003   Deluxe Veggie Burger </Text>
            <Text style={styles.textrow2}> 2 x 0002   Seafood Box + Chips </Text>
          </View>
          <View style ={styles.row3}>
            <Text style={styles.textrow3}> Sub total: </Text>
            <Text style={styles.textrow3}> Delivery fee: </Text>
            <Text style={styles.textrow3}> Total: </Text>
          </View>
          <View style ={styles.row4}>
          <TouchableOpacity style={styles.button}>
            <Text>
              Cancel
            </Text>
          </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>
                Confirm Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#AAD3E3',
    },
    row0: {
      flex: 0.5, /*equal division spacing for all where you state "flex: 1"*/
      flexDirection: 'row', /*go sidewise*/
      justifyContent: 'flex-end', /*space-around, space-between*/
      alignItems: 'flex-start',
    },
    row1: {
      flex: 1, /*equal division spacing for all where you state "flex: 1"*/
      flexDirection: 'row', /*go sidewise*/
      justifyContent: 'center', /*space-around, space-between*/
      alignItems: 'center',
    },
    row2: {
      flex: 1,
      backgroundColor: 'lightcyan',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
    },
    row3:{
      flex: 1,
      backgroundColor: 'lightcyan',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    row4:{
      flex: 1,
      backgroundColor: 'lightcyan',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    textrow1: {
      borderWidth: 1,
      height: 70,
      width: 70,
      backgroundColor: 'green',
    },
    textrow2: {
      height: 30,
      width: 300,
      backgroundColor: 'white',
      fontSize: 20,
    },
    textrow3: {
      height: 50,
      width: 150,
      backgroundColor: 'white',
      fontSize: 20,
    },
    button: {
      backgroundColor: 'white',
      height: 40,
      width: 150,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 5,
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
    cart: {
      borderWidth: 1,
      height: 80,
      width: 350,
      backgroundColor: 'white',
      fontSize: 50,
      textAlign: 'center',
    },
});
