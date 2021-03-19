import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import image from '../assets/favicon.png'




const Logo = (props) => {
    return (
        <View style={{backgroundColor:"#FFF",height:"100%"}}>

            <Image
                source={{
                    uri: image

                }}
                style={styles.image}

            />
             <View 

             style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#1a6199",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text
                    onPress={() => (props.navigation.navigate('Login'))}
                     style={{
                        color:"white",
                        
                    }}>Iniciar Sesion</Text>
                </View>

            <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#1a6199",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text 
                     onPress={() => (props.navigation.navigate('CreateUserScreen'))}
                    style={{
                        
                        color:"white",
                        
                    }}>Registrarse</Text>
                </View>





        </View>

        


    )
}



const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" },
    title: { fontSize: 30 },
    image: { height: 400, width: 400,alignItems:"center" },
    button: { backgroundColor: '#1a6199', padding: 7, marginTop: 10 },
    buttonText: {
        color: "#fff", fontSize: 20
    }
    

});


export default Logo
