import React, {userState, useState} from 'react'
import { View, StyleSheet, Text, Button, SafeAreaView } from 'react-native'
import EmailTextField from '../components/EmailTextField'
import PasswordTextField from '../components/PasswordTextField'
import RoundedButton from '../components/RoundedButtton'

const SignInScreen = ({navigation}) =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <SafeAreaView>
            <View>
                <Text style = {styles.titleText}>Sign In</Text>
                <View style = {{justifyContent: 'center', alignItems: 'center'}} >
                    <EmailTextField term = {email} placeholder = "Email Address"
                    onTermChange = {newEmail => setEmail(newEmail)}/>

                    <PasswordTextField 
                    term = {password}
                    placeHolder = "Password"
                    onTermChange = {newPassword => setPassword(newPassword)}/>

                    <RoundedButton buttonStyle = {styles.loginButtonStyle} textStyle = {styles.signInTextColorStyle} title = "Login"/>
                    
                </View>
            </View>

        </SafeAreaView>
      
    )
}

const styles = StyleSheet.create({
    titleText : {
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 30,
        marginBottom: 30,
        marginTop: 40,
    },
    loginButtonStyle: {
        backgroundColor: 'black'
    },
    signInTextColorStyle:{
        color: 'white'
    }
})

export default SignInScreen