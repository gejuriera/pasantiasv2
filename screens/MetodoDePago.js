import React, {useState} from 'react'
/*Se debe importar componentes relacionados */
import { View,Text, Button, TextInput, ScrollView, StyleSheet} from 'react-native'
import firebase from '../database/firebase'

const MetodoDePago = (props) =>{

    const[state, setState] = useState({
        tipo:'',
        numero:'',
        name:'',
        fecha:'',
        cvv:'',
        direccion:'',
        codigo:'',
        city:'',
        phone:'',
        
    })

    const handleChangeText= (tipo,value) => {
        setState({...state,[tipo]:value });
    };

    const saveTarjeta =  async () => {
        if (state.tipo === '') {
            alert('Please provide a type of card')
        }
        else {
            try{
                await firebase.db.collection('cards').add({
                    tipo: state.tipo,
                    numero: state.numero,
                    name: state.name,
                    fecha: state.fecha,
                    cvv: state.cvv,
                    direccion:state.direccion,
                    codigo:state.codigo,
                    city:state.city,
                    phone:state.phone
                })
                props.navigation.navigate('Logo');
            }catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGrout}>
            <TextInput placeholder="Tipo de Tarjeta" onChangeText= {(value) => handleChangeText("tipo", value)}/>
            </View>
            <View style={styles.inputGrout}> 
            <TextInput placeholder="Numero de Tarjeta" onChangeText= {(value) => handleChangeText("numero", value)}/>
            </View>
            <View style={styles.inputGrout}>
            <TextInput placeholder="Nombre en la tarjeta" onChangeText= {(value) => handleChangeText("name", value)}/>
            </View>
            <View style={styles.inputGrout}>
            <TextInput placeholder="Fecha de Expiracion"onChangeText= {(value) => handleChangeText("fecha", value)}/>
            </View>
            <View style={styles.inputGrout}onChangeText= {(value) => handleChangeText("cvv", value)}>
            <TextInput placeholder="CVV"/>
            </View>
            
            <View style={styles.inputGrout}>
            <TextInput placeholder="Direccion de Facturacion" onChangeText= {(value) => handleChangeText("direccion", value)}/>
            </View>
            <View style={styles.inputGrout}>
            <TextInput placeholder="Código Postal" onChangeText= {(value) => handleChangeText("codigo", value)}/>
            </View>
            <View style={styles.inputGrout}>
            <TextInput placeholder="Ciudad" onChangeText= {(value) => handleChangeText("city", value)}/>
            </View>
            <View style={styles.inputGrout}>
            <TextInput placeholder="Numero de teléfono" onChangeText= {(value) => handleChangeText("phone", value)}/>
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
                    onPress={() =>saveTarjeta()}


                    style={{
                        color:"white",
                        
                    }}>Guardar Tarjeta</Text>
                </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35,

    },

   

    inputGrout:{
        flex: 1,
        padding:1,
        marginBottom:15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})

export default MetodoDePago