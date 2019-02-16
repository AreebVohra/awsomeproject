/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {View, Text, TouchableOpacity,TouchableHighlight, TextInput, StyleSheet,Image} from 'react-native';
import Hr from './hr.dist';
import RadioForm from 'react-native-simple-radio-button';
 
var radio_props = [
  {label: 'Citizen', value: 0 },
  {label: 'Company', value: 1 },
  {label: 'Donation', value: 2 },
];

export default class App extends Component {
  state = {
    email: '',
    password: ''
 }
 handleEmail = (text) => {
    this.setState({ email: text })
 }
 handlePassword = (text) => {
    this.setState({ password: text })
 }
 login = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass)
 }
  render() {
    return (
      <View style = {styles.container}>
        <View>
            <TextInput style = {styles.input}
               underlineColorAndroid = "lightgray"
               placeholder = "Username or Email"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "lightgray"
               placeholderTextColor = "black"
               placeholder = "Password"
               autoCapitalize = "none"
               secureTextEntry={true}
               onChangeText = {this.handlePassword}/>
          </View>

          <View style={{ marginVertical: 20, marginHorizontal:80 }}>
             <RadioForm
                radio_props={radio_props}
                initial={-1}
                onPress={(value) => {}}
                buttonOuterSize={25}
                buttonColor={'#50C900'}
                selectedButtonColor={'#50C900'}
                formHorizontal={true}
                labelHorizontal={false}
                style={styles.radio}
              />
            </View>
            <View>
              <TouchableHighlight style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> LOG IN </Text>
              </TouchableHighlight>
            </View>
            <Hr text="OR"
            textStyle={{
              color: "gray", fontSize: 14,
              margin:4
           }}
            />
          <View>
              <TouchableHighlight style = {{backgroundColor: '#4267b2',padding: 15,margin: 15,height: 50}}>
               <Text style = {styles.submitButtonText}> LOGIN WITH FACEBOOK </Text>
              </TouchableHighlight>
              <TouchableHighlight style = {{backgroundColor: '#1da1f2',padding: 15,marginLeft:15,marginRight:15,height: 50}}>
               <Text style = {styles.submitButtonText}> LOGIN WITH TWITTER </Text>
              </TouchableHighlight>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  radio:{
    alignContent:'center'
  },
  input: {
      margin: 15,
      height: 40,
      fontSize: 15,
   },
   submitButton: {
      backgroundColor: '#77D353',
      padding: 15,
      margin: 15,
      height: 50,
   },
   submitButtonText:{
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center'
   }});
