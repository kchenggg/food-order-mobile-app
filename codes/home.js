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
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import { Actions } from 'react-native-router-flux';

export default class home extends Component {

  constructor(props){
    super(props);

    this.state={
      restaurant:"",
      menuItem1:"",
      quant1:0,
      menuItem2:"",
      quant2:0,
    }
      this.restaurantList =[{
        value:'Burger Freight'
      },{
        value:'Sushi World'
      },{
        value:'Boost Juice'
      },{
        value:'Iku wholefoods'
      },{
        value:'UBar'
      }]

      this.menuItems = [{
        value:'- Select item - $00'
      },{
        value:'Mango Tango Crush - $12'
      },{
        value:'Protein Shake - $14'
      },{
        value:'Banana Buzz - $13'
      },{
        value:'Strawberry Twist - $16'
      },{
        value:'Pineapple and Pear - $17'
      }]

      this.quantity =[{
        value:0
      },{
        value:1
      },{
        value:2
      },{
        value:3
      },{
        value:4
      },{
        value:5
      },{
        value:6
      }]
    }



  render() {
    return (
      <View style={styles.container}>
      <Image source={require('./welcome.png')} style={styles.home}/>

        <Text style={styles.welcome}>
          Welcome!
        </Text>

        <View style={styles.viewRow1}>
                <Dropdown
                    containerStyle={styles.dropdown1}
                    label='Choose the place of business'
                    data={this.restaurantList}
                    onChangeText={(chosenR)=>this.setState({
                      restaurant:chosenR
                    })}
                      />
        </View>
        <View style={styles.viewRow2}>
                <Dropdown
                      containerStyle={styles.dropdown2}
                      label='Choose a menu item'
                      data={this.menuItems}
                      onChangeText={(chosenm1)=>this.setState({menuItem1:chosenm1})}
                        />
                <Dropdown
                      containerStyle={styles.dropdown2}
                      label='Choose quantity'
                      data={this.quantity}
                      onChangeText={(chosenq1)=>this.setState({quant1:chosenq1})}
                        />
        </View>
        <View style={styles.viewRow2}>
                <Dropdown
                      containerStyle={styles.dropdown2}
                      label='Choose a menu item'
                      data={this.menuItems}
                      onChangeText={(chosenm2)=>this.setState({menuItem2:chosenm2})}
                        />
                <Dropdown
                      containerStyle={styles.dropdown2}
                      label='Choose quantity'
                      data={this.quantity}
                      onChangeText={(chosenq2)=>this.setState({quant2:chosenq2})}
                        />
        </View>

        <View style={styles.viewRow3}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPressEvent.bind(this)}>
                    <Text style={styles.buttonText}>
                      Proceed
                    </Text>
                </TouchableOpacity>
        </View>
      </View>
    );
  }

  onPressEvent(){
    let temp1 = this.state.menuItem1;
    //Get the price of item 1
    let costm1=parseInt(temp1.substring(temp1.length-2,temp1.length));
    //Find the cost of n number of items
    let total1=this.state.quant1*costm1;
    //Get the price of item 2
    let temp2 = this.state.menuItem2;
    let costm2=parseInt(temp2.substring(temp2.length-2,temp2.length));
    //Find the total of n number of items
    let total2=this.state.quant2*costm2;

    let final = total1+total2
    Actions.summary({
      fRestaurant:this.state.restaurant,
      fMenuItem1:temp1.substring(0,temp1.length-7),
      fQuant1:this.state.quant1,
      fMenuItem2:temp2.substring(0,temp2.length-7),
      fQuant2:this.state.quant2,
      fTotal: final
    });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  viewRow1:{
    flex:1,
  },
  viewRow2:{
    flex:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  viewRow3:{
    flex:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  dropdown1: {
    marginTop: 50,
  },
  dropdown2:{
    flex: 1,
    marginTop: 70,
  },
  button:{
      backgroundColor:'lightgrey',
      height: 45,
      width: 140,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      borderRadius:10,
      borderWidth: 1,
  },
  buttonText:{
    textAlign: 'center',
    fontSize: 20,
  },
  welcome:{
    fontSize: 40,
    textAlign: 'center',
    marginTop: 10,
  },
  home:{
    height: 180,
    width: 420,
  },

});
