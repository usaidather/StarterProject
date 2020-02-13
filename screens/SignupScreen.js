import React, { useState } from 'react'
import { View, StyleSheet, Text, Button, Dimensions, SafeAreaView } from 'react-native'
import EmailTextField from '../components/EmailTextField'
import PasswordTextField from '../components/PasswordTextField'
import RoundedTextField from '../components/RoundedTextField'
import RoundedButton from '../components/RoundedButtton'


const { widht, height } = Dimensions.get('window')

const SignupScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <Text style = {styles.titleText} >Sign UP</Text>
                <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                    <RoundedTextField placeHolder = "Full Name"/>
                    <EmailTextField placeholder = "EmailAddress"/>
                    <RoundedTextField placeHolder = "Phone Number" />
                    <PasswordTextField placeHolder = "Password"/>
                    <RoundedButton buttonStyle = {styles.loginButtonStyle} title= "SignUP" textStyle = {styles.signInTextColorStyle} ></RoundedButton>

                </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 30,
    marginBottom: 30,
    marginTop: 20
},

loginButtonStyle: {
    backgroundColor: 'black',
},
signInTextColorStyle: {
    color: 'white'
}

})
export default SignupScreen