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
      {value: 'Campus Common'},
      {value: 'Globe Cafe'},
      {value: 'Library Cafe'}
      ];
    let listItemsRanking = [
        {value: '1'},
        {value: '2'},
        {value: '3'},
    ];



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
          <Image source={require('./2heading.jpeg')} style={styles.imagelabel}/>
          <Dropdown
            containerStyle={styles.dropdown1}
            label='Campus Common'
            data={listItems}
          />

        </View>
        <View style ={styles.row3}>
          <Image source={require('./2burger.jpg')} style={styles.image}/>
          <TouchableOpacity style={styles.buttonLink}>
            <Text>
              Burger Freight . Western
            </Text>
          </TouchableOpacity>
          <Text style={styles.textrow4}> 4.5/ 5 </Text>
        </View>
        <View style ={styles.row4}>
          <Image source={require('./2pizza.jpg')} style={styles.image}/>
          <TouchableOpacity style={styles.buttonLink}>
            <Text>
              Pizza World . Italian
            </Text>
          </TouchableOpacity>
          <Text style={styles.textrow4}> 4.5/ 5 </Text>
        </View>
        <View style ={styles.row5}>
          <Image source={require('./2sushi.jpg')} style={styles.image}/>
          <TouchableOpacity style={styles.buttonLink}>
            <Text>
              Sushi World . Asian
            </Text>
          </TouchableOpacity>
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
    flexDirection: 'column',
    justifyContent: 'center',
  },
  row3:{
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  row4:{
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row5:{
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textrow4: {
    borderWidth:1,
    backgroundColor:'lightgreen',
    height:50,
    width:45,
    fontSize: 15,
  },
  dropdown1: {
    flex: 3,
  },
  imagelabel: {
    height: 125,
    width: 420,
  },
  image: {
    height: 160,
    width: 220,
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
  buttonLink: {
    backgroundColor: 'white',
    height: 50,
    width: 150,
    padding: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },

});
