import React, {useState} from 'react'
/*Se debe importar componentes relacionados */
import { View,Text, Button, TextInput, ScrollView, StyleSheet} from 'react-native'

const MetodoDePago = (props) =>{

    const[state, setState] = useState({
        name:'',
        email:'',
        phone:'',
        
    })

    const handleChangeText= (name,value) => {
        setState({...state,[name]:value });
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGrout}>
            <TextInput placeholder="Tipo de Tarjeta" onChangeText={(value) => handleChangeText("name",value)}/>
            </View>
            <View style={styles.inputGrout}> 
            <TextInput placeholder="Numero de Tarjeta"/>
            </View>
            <View style={styles.inputGrout}>
            <TextInput placeholder="Nombre en la tarjeta"/>
            </View>
            <View style={styles.inputGrout}>
            <TextInput placeholder="Fecha de Expiracion"/>
            </View>
            <View style={styles.inputGrout}>
            <TextInput placeholder="CVV"/>
            </View>
            
            <View style={styles.inputGrout}>
            <TextInput placeholder="Direccion de Facturacion"/>
            </View>
            <View style={styles.inputGrout}>
            <TextInput placeholder="Nombre Completo*"/>
            </View>
            <View style={styles.inputGrout}>
            <TextInput placeholder="Código Postal"/>
            </View>
            <View style={styles.inputGrout}>
            <TextInput placeholder="Ciudad"/>
            </View>
            <View style={styles.inputGrout}>
            <TextInput placeholder="País"/>
            </View>
            <View style={styles.inputGrout}>
            <TextInput placeholder="Numero de teléfono"/>
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
                    onPress={() => (props.navigation.navigate('Logo'))}
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

