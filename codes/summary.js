import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

export default class summary extends Component {

  constructor(props) {
    super(props);

    let params = this.props.navigation.state.params;
    this.state = {
        fRestaurant: params.fRestaurant,
        fMenuItem1: params.fMenuItem1,
        fMenuItem2: params.fMenuItem2,
        fQuant1: params.fQuant1,
        fQuant2: params.fQuant2,
        fTotal: params.fTotal,
    };
  }
  render() {

    return(
      <View style={styles.container}>
        <Text style={{marginTop:30,textAlign:'center', fontSize: 20}}> --THANK YOU FOR YOUR PURCHASE-- </Text>
        <Text style={{marginTop:30,textAlign:'center'}}> --INVOICE-- </Text>
        <Text style={{marginTop:30,textAlign:'center'}}> Restaurant Name: {this.state.fRestaurant} </Text>
        <Text style={{marginTop:30,textAlign:'center'}}> Menu Item 1: {this.state.fMenuItem1}  Quantity: {this.state.fQuant1} </Text>
        <Text style={{marginTop:30,textAlign:'center'}}> Menu Item 2: {this.state.fMenuItem2}  Quantity: {this.state.fQuant2} </Text>
        <Text style={{marginTop:30,textAlign:'center',fontSize:20}}> Total Cost: ${this.state.fTotal} </Text>
        <Text style={{marginTop:30,textAlign:'center',fontSize:15}}> Your order will be ready to pick up in 15 minutes </Text>
          <Image source={require('./van.png')} style={styles.image}/>
        <Text style={{marginTop:50,textAlign:'center',fontSize:15}}> App developed </Text>

      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  image:{
    marginTop: 10,
    height: 180,
    width: 420,
  },
});
