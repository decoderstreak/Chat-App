import React, { Component } from 'react';
import { View, Text ,StyleSheet, ScrollView, TouchableOpacity,TextInput} from 'react-native';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <ScrollView style={styles.container}>
            <View>
      <View style={styles.header}>
      <Text style={{color:"white"}}>hii , hello Uman Having fun right{'\n'}{'\n'} Let's create an amazing chat app</Text>
     

  

      <View style={{flexDirection:'row',color:"grey"}}>

      <TouchableOpacity style={styles.button}>
          <Text style={styles.text1}>Google</Text>

      </TouchableOpacity>
      

      <TouchableOpacity style={styles.button1}>
          <Text  style={styles.text1}>Facebook</Text>

      </TouchableOpacity>
      </View>

      </View>

      {/* ......................input data.................... */}

      <View style={{flex:1,marginLeft:20}}>
         
       <Text style={{fontWeight:"500",color:"white",fontFamily:"Roboto",fontSize:17,marginLeft:12}}>Email</Text>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="useless placeholder"
        // keyboardType="numeric"
      />
      <Text style={{fontWeight:"500",color:"white",fontFamily:"Roboto",fontSize:17,marginLeft:12}}>Password</Text>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
          
     </View>

     <TouchableOpacity style={styles.button1}>
         <Text>Login</Text>

     </TouchableOpacity>
     <Text style={{fontWeight:"500",color:"white",fontFamily:"Roboto",fontSize:17,marginLeft:12,marginTop:30}}>Don't have an account---create dude</Text>
  

      </View>
      </ScrollView>
    );
  }
}

export default Signup;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: 'black'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:50
    },
    header1:{
        
        marginTop:40

    },
    footer: {
      flex:3,
      width:"94%",
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30,
      marginLeft:11,
    },
    logo: {
      height: 250,
      width: 246,
      backgroundColor: "black",
      borderRadius: 250/2, 
    },
  
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
  
    text: {
        color: 'white',
        fontSize:16,
        fontFamily:'Roboto',
        fontWeight:"400"
    },
    text1: {
       
        fontSize:15,
        fontFamily:'Roboto',
        fontWeight:"500"
    },
  
    button: {
        marginTop: 30,
      alignSelf:'stretch',
      alignItems:"center",
      padding:20,
      width:150,
      height:40,

      backgroundColor:"#DDDDDD",
      marginTop:10,
      borderColor:"#DDDDDD",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      
    },
    button1 :{
      marginTop: 30,
      alignSelf:'stretch',
      alignItems:"center",
      padding:20,
      width:150,
      height:40,

      backgroundColor:"#DDDDDD",
      marginTop:10,
      borderColor:"#DDDDDD",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginLeft:10
  
    },
  
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderColor:"#DDDDDD",
      borderRadius:10,
      color:"white",
      
    },
   
    ButtonText: {
      fontSize: 18,
      color: "#fff",
      
      fontWeight: "bold",
      alignSelf: "center",
     
    },
    ButtonText1: {
      fontSize: 18,
      color: "black",
      fontWeight: "bold",
      alignSelf: "center",
     
    }
  });