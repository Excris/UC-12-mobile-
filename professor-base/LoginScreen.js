import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
TouchableOpacity } from 'react-native';
 
import {MaterialIcons, FontAwesome} from '@expo/vector-icons';
 
const background = require('../assets/background_cyber.png');
const logo = require('../assets/logo.png');
 
export default function LoginScreen() {
  return(  
    <ImageBackground source={background} style={styles.fundo}>
      <View style={styles.container}>
          <Image source={logo} style={styles.logo}/>
          <Text style={styles.titulo}>Faça Login</Text>
 
          <View style={[styles.inputContainer,styles.emailInput]}>
            <MaterialIcons name='email' size={20} color="#888" style={styles.icon} />
            <TextInput placeholder='Email' placeholderTextColor="#888" keyboardType='email-address' style={styles.input} />
          </View>
 
          <View style={[styles.inputContainer, styles.senhaInput]}>
            <MaterialIcons name='lock' size={20} color="#888" style={styles.icon} />
            <TextInput placeholder='Senha' placeholderTextColor="#888" secureTextEntry={true} style={styles.input} />
          </View>
 
          <TouchableOpacity style={styles.esqueceuSenha}>
            <Text style={styles.esqueceuSenhaText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
 
          <TouchableOpacity style={styles.loginBotao}>
            <Text style={styles.loginBotaoText}>Entrar</Text>
          </TouchableOpacity>
 
          <View style={styles.divisorContainer}>
            <View style={styles.divisorLinha}></View>
            <Text style={styles.divisorText}>Ou entre com</Text>
            <View style={styles.divisorLinha}></View>
          </View>
 
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialBotao}>
              <FontAwesome name="google" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBotao}>
              <FontAwesome name="apple" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBotao}>
              <FontAwesome name="facebook" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
 
          <TouchableOpacity style={styles.signUpBotao}>
            <Text style={styles.signUpText}>Não tenho conta</Text>
          </TouchableOpacity>
 
 
      </View>
    </ImageBackground>
  );
};
 
const styles = StyleSheet.create({
  fundo: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  container:{
    width:'85%',
    alignItems:'center',
    paddingTop:50,
    // backgroundColor:'red'
  },
  logo:{
    width:'100%',
    height:100,
    marginBottom: 20
  },
  titulo:{
    fontSize:24,
    fontWeight:'bold',
    color:'#fff',
    marginBottom: 30
  },
  inputContainer:{
    flexDirection: 'row',
    alignItems:'center',
    width: '100%',
    height:50,
    backgroundColor:'rgba(255,255,255,0.1)',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom:15,
  },
  emailInput:{
    borderColor: '#888',
  },
  input:{
    color:'#fff',
    flex:1,
    fontSize:16
  },
  senhaInput:{
    borderColor: '#9370db',
    borderWidth: 2,
    shadowColor:'#9370db',
    shadowOffset:{width:0,height:0},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5
  },
  esqueceuSenha:{
    alignSelf:'flex-start',
    marginLeft: 0,
    marginBottom:30
  },
  esqueceuSenhaText:{
    color: '#ffa500',
    fontSize:14
  },
  loginBotao:{
    width: '100%',
    height:55,
    backgroundColor:'#ff8c00',
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',
    marginBottom: 30,
    shadowColor:'#ff8c00',
    shadowOffset: {width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius:10,
    elevation:8
  },
  loginBotaoText:{
    fontSize:18,
    fontWeight:'bold',    
  },
  divisorContainer:{
    flexDirection: 'row',
    alignItems:'center',
   marginVertical: 20
  },
  divisorLinha:{
    backgroundColor:'#444',
    height:2,
    flex:1
  },
  divisorText:{
    color: '#888',
    marginHorizontal:10,
    fontSize:14
  },
  socialContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    width: '80%',
    marginBottom:30
  },
  signUpBotao:{
    marginTop:10  
  },
  signUpText:{
    color:'#fff',
    fontSize:14,
    textDecorationLine:'underline'
  }
 
});