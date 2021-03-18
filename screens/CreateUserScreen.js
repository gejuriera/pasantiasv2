import React, {useState} from 'react'
import {View,Button,TextInput,ScrollView,StyleSheet} from 'react-native'
import { color } from 'react-native-reanimated'
import firebase from '../database/firebase'

const CreateUserScreen =(props) => {
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        city: "",
    });

    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value })
    };

    const saveNewUser =  async () => {
        if (state.name === '') {
            alert('Please provide a name')
        }
        else {
            try{
                await firebase.db.collection('users').add({
                    name: state.name,
                    email: state.email,
                    password: state.password,
                    phone: state.phone,
                    city: state.city
                })
                props.navigation.navigate('UsersList');
            }catch (error) {
                console.log(error);
            }
        }
    }
    

    

    return(
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Name User"  onChangeText= {(value) => handleChangeText("name", value)}/>
            </View>

            <View style={styles.inputGroup}>
                <TextInput placeholder="Email User" onChangeText= {(value) => handleChangeText("email", value)}/>
            </View>

            <View style={styles.inputGroup}>
                <TextInput placeholder="Password" onChangeText= {(value) => handleChangeText("password", value)}/>
            </View>

            <View style={styles.inputGroup}>
                <TextInput placeholder="Phone User" onChangeText= {(value) => handleChangeText("phone", value)}/>
            </View>

            <View style={styles.inputGroup}>
                <TextInput placeholder="City" onChangeText= {(value) => handleChangeText("city", value)} />
            </View>

            

            <View style={styles.inputGroup}>
                <Button tittle=" Save user " onPress={() => saveNewUser()} />
            </View>
        </ScrollView>

    )
}

const styles =StyleSheet.create({
    container: {
        flex:1,
        padding:35
    },
    inputGroup: {
        flex: 1,
        padding:0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
        

    }
})

export default CreateUserScreen
