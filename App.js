/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Alert, DrawerLayoutAndroid } from 'react-native';
import Hr from './hr.dist';
import RadioForm from 'react-native-simple-radio-button';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { LoginManager } from 'react-native-fbsdk';


var navigationView = (
  <View style={{ flex: 1, backgroundColor: '#fff' }}>
    <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>I'm in the Drawer!</Text>
  </View>
);

var radio_props = [
  { label: 'Citizen', value: 0 },
  { label: 'Company', value: 1 },
  { label: 'Donation', value: 2 },
];

export default class App extends Component {

  _fbAuth() {
    LoginManager.logInWithReadPermissions(['public_profile']).then(function (result) {
      if (result.isCancelled) {
        Alert.alert('Login was cancelled');
      } else {
        Alert.alert('Login was a success');
      }
    }, function (error) {
      Alert.alert('An error occured' + error);
    })
  }

  render() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        <View style={styles.container}>
          <View style={{ marginBottom: 60 }}>
            <Container>
              <Header style={{ backgroundColor: '#77D353' }}>
                <Left><Button transparent><Icon name='menu' /></Button></Left>
                <Body>
                  <Title>Auth Panel</Title>
                </Body>
                <Right></Right>
              </Header>
            </Container>
          </View>
          <View >
            <TextInput style={styles.input}
              underlineColorAndroid="lightgray"
              placeholder="Username or Email"
              placeholderTextColor="black"
              autoCapitalize="none"
              onChangeText={this.handleEmail} />

            <TextInput style={styles.input}
              underlineColorAndroid="lightgray"
              placeholderTextColor="black"
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={this.handlePassword} />
          </View>

          <View style={{ marginHorizontal: 80, marginVertical: 20 }}>
            <RadioForm
              radio_props={radio_props}
              initial={-1}
              onPress={(value) => { }}
              buttonOuterSize={25}
              buttonColor={'#77D353'}
              selectedButtonColor={'#77D353'}
              formHorizontal={true}
              labelHorizontal={false}
              style={{ alignContent: 'center' }}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitButtonText}> LOG IN </Text>
            </TouchableOpacity>
          </View>
          <Hr text="OR"
            textStyle={{
              color: "gray", fontSize: 14,
              margin: 4
            }}
          />
          <View style={{ margin: 15 }}>
            <TouchableOpacity style={[styles.touchableStyle, { backgroundColor: '#485a96', marginBottom: 20 }]} activeOpacity={0.5}
              onPress={() => this._fbAuth()}
            >
              <Image source={require('./img/facebook.jpg')} style={styles.ImageIconStyle} />
              <Text style={styles.submitButtonText}> LOGIN WITH FACEBOOK </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.touchableStyle, { backgroundColor: '#1da1f2' }]} activeOpacity={0.5}>
              <Image source={require('./img/twitter.png')} style={styles.ImageIconStyle} />
              <Text style={styles.submitButtonText}> LOGIN WITH TWITTER </Text>
            </TouchableOpacity>
          </View>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 15
  },
  touchableStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderRadius: 5,
    padding: 15,
  },
  ImageIconStyle: {
    padding: 10,
    margin: 15,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
});
