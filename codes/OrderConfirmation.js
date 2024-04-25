/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   Platform,
   StyleSheet,
   Text, /*label*/
   View,
   TextInput, /*text box*/
   Image, /*add image*/
   TouchableOpacity
 } from 'react-native';

 type Props = {};
 export default class App extends Component<Props> {
   render() {
     return (
       <View style={styles.container}>
       <View style ={styles.row1}>
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
         <View style ={styles.row2}>
           <Text style={styles.welcome}>
             Thank you for your order! You will receive a confirmation notification on your mobile.
           </Text>
           <Image source={require('./2time.jpg')} style={styles.image}/>
           <Text style={styles.time}>
             Estimated delivery time
           </Text>
           <Text style={styles.time1}>
             11:00 A M
           </Text>
           <TouchableOpacity style={styles.button}>
             <Text>
             Report a problem
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
     justifyContent: 'center', /*up, down*/
     alignItems: 'center', /*left, right*/
     backgroundColor: 'lightcyan',
   },
   row1: {
     flex: 0, /*equal division spacing for all where you state "flex: 1"*/
     flexDirection: 'row', /*go sidewise*/
     justifyContent: 'flex-end', /*space-around, space-between*/
     alignItems: 'flex-start',
   },
   row2: {
     flex: 1,
     backgroundColor: 'white',
     alignItems: 'center',
   },
   welcome: {
     borderWidth: 1,
     fontSize: 20,
     textAlign: 'center',
     margin: 30,
     backgroundColor: 'lightgreen',
     height: 75,
     width: 350,
   },
   button: {
     backgroundColor: 'gray',
     height: 75,
     width: 250,
     padding: 10,
     marginTop: 140,
     justifyContent: 'center',
     alignItems: 'center',
     borderWidth: 1,
     borderRadius: 10,
     fontSize: 10,
   },
   time: {
     fontSize: 30,
   },
   time1: {
     fontSize: 45,
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
   image: {
     height: 200,
     width: 400,
   },
 });
