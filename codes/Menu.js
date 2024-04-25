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
    let listItems = [
    {value: '1'},
    {value: '2'},
    {value: '3'},
    {value: '4'},
    {value: '5'},
    {value: '6'},
    {value: '7'},
    {value: '8'},
    {value: '9'},
    {value: '10'},
    {value: '11'},
    {value: '12'},
    {value: '13'},
    {value: '14'},
    {value: '15'},
    ];

      return (
        <View style={styles.container}>
        <View style ={styles.row0}>
          <TouchableOpacity style={styles.buttonBack}>
            <Text>
              Back
            </Text>
          </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLogout}>
              <Text>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
          <View style ={styles.row1}>
            <Image source={require('./2burger.jpg')} style={styles.image}/>
            <Text style={styles.textrow1}> Burger Freight </Text>
            <Text style={styles.textrow2}> - MEALS - </Text>
          </View>
          <View style ={styles.row2}>
            <Text style={styles.textrow3}> 1. Grilled Chicken + Chips </Text>
            <Text style={styles.textrow4}> $9.50 </Text>
            <Dropdown
              containerStyle={styles.dropdown1}
              label='Qty'
              data={listItems}
            />
            <TouchableOpacity style={styles.buttonAdd}>
              <Text>
                Add To Cart
              </Text>
            </TouchableOpacity>
          </View>
          <View style ={styles.row3}>
            <Text style={styles.textrow3}> 2. Seafood box + Chips </Text>
            <Text style={styles.textrow4}> $9.50 </Text>
            <Dropdown
              containerStyle={styles.dropdown1}
              label='Qty'
              data={listItems}
            />
            <TouchableOpacity style={styles.buttonAdd}>
              <Text>
                Add To Cart
              </Text>
            </TouchableOpacity>
          </View>
          <View style ={styles.row4}>
            <Text style={styles.textrow3}> 3. Deluxe Veggie Burger </Text>
            <Text style={styles.textrow4}> $9.95 </Text>
            <Dropdown
              containerStyle={styles.dropdown1}
              label='Qty'
              data={listItems}
            />
            <TouchableOpacity style={styles.buttonAdd}>
              <Text>
                Add To Cart
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
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    row1: {
      flex: 1, /*equal division spacing for all where you state "flex: 1"*/
      justifyContent: 'center', /*space-around, space-between*/
      alignItems: 'center',
    },
    row2: {
      flex: 0,
      backgroundColor: 'lightcyan',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    row3:{
      flex: 0,
      backgroundColor: 'lightcyan',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    row4:{
      flex: 0,
      backgroundColor: 'lightcyan',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    textrow1: {
      borderWidth: 1,
      height: 80,
      width: 350,
      backgroundColor: 'white',
      fontSize: 50,
    },
    textrow2: {
      height: 40,
      width: 120,
      fontSize: 20,
      textAlign: 'center',
    },
    textrow3: {
      height: 50,
      width: 235,
      fontSize: 20,
    },
    textrow4: {
      height: 50,
      width: 55,
      fontSize: 20,
      textAlign: 'center',
    },
    button: {
      backgroundColor: 'white',
      height: 40,
      width: 150,
      padding: 10,
      marginTop: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 5,
    },
    buttonAdd: {
      backgroundColor: 'white',
      height: 40,
      width: 90,
      padding: 5,
      marginTop: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 5,
    },
    buttonBack: {
      backgroundColor: 'white',
      height: 30,
      width: 100,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 5,
    },
    dropdown1: {
      flex: 1,
      marginTop: 50,
    },
    image: {
      height: 220,
      width: 420,
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
});
