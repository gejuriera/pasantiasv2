import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import image from '../assets/habitacion.jpg'

export default class DetallesReserva extends React.Component {

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={{ backgroundColor: "#fff", height: "100%" }}>



                <View
                    style={{ backgroundColor: "#ECE8E7", height: "60%" }}>
                    <Image
                    

                        style={{ alignSelf: 'center', height: 200, width: 200 }}
                        source={{
                            uri: image

                        }}
                    />
                    <Text
                        style={{

                            marginHorizontal: 20,
                            textAlign: 'center',
                            marginTop: 5,
                            opacity: 0.4
                        }}
                    >
                        Habitacion Doble incluye:{"\n"}
                    Agua Caliente{"\n"}
                    TV por cable{"\n"}
                    Sauna{"\n"}
                    Aire Acondicionado
                </Text>

                </View>
                <View
                style={{alignSelf:'center'}}>
                    <View style={{
                        flex: 1,
                        padding: 0,
                        marginBottom: 15,
                        borderBottomWidth: 1,
                        borderBottomColor: '#cccccc'
                    }}>
                        <TextInput placeholder="Subtotal: 100" />
                    </View>
                    <View style={{
                        flex: 1,
                        padding: 0,
                        marginBottom: 15,
                        borderBottomWidth: 1,
                        borderBottomColor: '#cccccc'
                    }}>
                        <TextInput placeholder="Total a pagar: 112" />
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
                    <Text style={{
                        flex:1,
                        paddingHorizontal:55,
                        color:"white",
                        
                    }}>Reservar</Text>
                </View>

                </View>



            </View>






        )


    }

}