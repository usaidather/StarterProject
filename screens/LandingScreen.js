import React, {useState} from 'react'
import { View, StyleSheet, Text, Button, SafeAreaView, Image, Dimensions } from 'react-native'
import RoundedButton from '../components/RoundedButtton'

const {width, height} = Dimensions.get('window')
const LandingScreen = ({navigation}) =>{
    return(
        <SafeAreaView>
            <View style = {styles.ViewStyle}>
                <Image style = {styles.ImageStyle} source = {require('../assets/logo.png')}></Image>
                <Text style = {styles.WelcomeStyle} > Welome to UA Studios</Text>

                <RoundedButton onPress = {()=>navigation.navigate('SignInScreen')}  buttonStyle = {styles.LoginButtonStyle} textStyle = {styles.signinTextColorStyle} title = "Login" ></RoundedButton>
                <RoundedButton onPress = {()=>navigation.navigate('SignUpScreen')} buttonStyle = {styles.SignupButtonSytle} textStyle = {styles.signupTextColorStyle} title = "Sign up"></RoundedButton>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    ImageStyle: {
        width: width / 1.5,
        height: width / 1.5
        
    },

    ViewStyle : {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    WelcomeStyle: {
        marginHorizontal: 20,
        marginTop: 50,
        marginBottom: 30,
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    LoginButtonStyle: {
        backgroundColor:'black'
    },
    SignupButtonSytle: {
        backgroundColor: 'white'
    },
    signinTextColorStyle:{
        color:'white'
    },
    signupTextColorStyle:{
        color: 'black'
    }
    
    


    
})

export default LandingScreen