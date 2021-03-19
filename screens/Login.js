import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import image from '../assets/favicon.png'

const Login=(props)=>{

    
        
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                
                
                 <Image
                 style={ { height: 400, width: 400,alignSelf:"center" }}
                source={{
                    uri: image

                }}
                

            />

                <Text
                style={{
                   
                    marginHorizontal:20,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                    Estas a un solo click de reservar unas vacaciones envidiables
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"black",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="mail" color="#1a6199" size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                    />

                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#black",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="lock" color="#1a6199" size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                    />

                    

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
                    onPress={() => (props.navigation.navigate('DetallesReserva'))}
                    style={{
                        color:"white",
                        
                    }}>Iniciar Sesion</Text>
                </View>
                
            </View>

            
        )
        

    }

    export default Login