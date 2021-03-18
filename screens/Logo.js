import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import image from '../assets/favicon.png'
import CreateUserScreen from './CreateUserScreen'



const UserDetailScreen = () => {
    return (
        <View style={styles.container}>

            <Image
                source={{
                    uri: image

                }}
                style={styles.image}

            />
            <TouchableOpacity
            style={styles.button}
            
            >
                
                <Text style={styles.buttonText}>Continuar</Text>

            </TouchableOpacity>




        </View>
        


    )
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" },
    title: { fontSize: 30 },
    image: { height: 200, width: 200,borderRadius:100 },
    button: { backgroundColor: '#621FF7', padding: 7, marginTop: 10 },
    buttonText: {
        color: "#fff", fontSize: 20
    }
    

});


export default UserDetailScreen
