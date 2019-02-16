/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet,Image} from 'react-native';
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
              <TouchableOpacity style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> LOG IN </Text>
              </TouchableOpacity>
            </View>
            <Hr text="OR"
            textStyle={{
              color: "gray", fontSize: 14,
              margin:4
           }}
            />
          <View>
            <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
               <Image source={require('./img/facebook.jpg')} style={styles.ImageIconStyle} />
               <Text style={styles.submitButtonText}> LOGIN WITH FACEBOOK </Text>
               </TouchableOpacity>
            <TouchableOpacity style={styles.TwitterStyle} activeOpacity={0.5}>
               <Image source={require('./img/twitter.png')} style={styles.ImageIconStyle} />
               <Text style={styles.submitButtonText}> LOGIN WITH TWITTER </Text>
               </TouchableOpacity>
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
      textAlign: 'center',
      marginLeft:15
   },
   FacebookStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#485a96',
      borderWidth: .5,
      borderColor: '#fff',
      height: 50,
      borderRadius: 5 ,
      padding: 15,
      margin:15
    },
    TwitterStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#1da1f2',
      borderWidth: .5,
      borderColor: '#fff',
      height: 50,
      borderRadius: 5 ,
      padding: 15,
      marginLeft:15,
      marginRight:15
    },      
    ImageIconStyle: {
       padding: 10,
       margin: 15,
       height: 25,
       width: 25,
       resizeMode : 'stretch',
    },
});
