import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; // Para ícones como e-mail, senha, olho, etc.

// Ícones sociais simulados
const GoogleIcon = () => (
  <View style={styles.socialIconContainer}>
    <FontAwesome name="google" size={24} color="#DB4437" />
  </View>
);
const SteamIcon = () => (
  <View style={styles.socialIconContainer}>
    <FontAwesome name="steam" size={24} color="#000000" />
  </View>
);
const DiscordIcon = () => (
  <View style={styles.socialIconContainer}>
    <FontAwesome name="discord" size={24} color="#7289DA" />
  </View>
);


export default function App() {
  return (
    <LinearGradient
      // Cores aproximadas do fundo azul escuro/preto da sua imagem
      colors={['#1a237e', '#0d47a1', '#121212']} 
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* -------------------- ESPAÇO DA LOGO -------------------- */}
        <View style={styles.logoContainer}>
          {/* Você pode adicionar sua imagem aqui quando tiver o arquivo,
            exemplo: <Image source={require('./assets/sua-logo.png')} style={styles.logo} />
            Por enquanto, fica um espaço em branco para simular o layout.
          */}
          <View style={styles.logoPlaceholder}>
            <Text style={{color: '#fff', fontSize: 18}}>LOGO AQUI</Text>
          </View>
        </View>
        {/* -------------------------------------------------------- */}

        <View style={styles.card}>
          {/* Abas de Entrar / Criar conta */}
          <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.tabActive}>
              <Text style={styles.tabTextActive}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabInactive}>
              <Text style={styles.tabTextInactive}>Criar minha conta</Text>
            </TouchableOpacity>
          </View>

          {/* Input de E-mail */}
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="#666"
              keyboardType="email-address"
            />
          </View>

          {/* Input de Senha */}
          <View style={styles.inputContainer}>
            <Ionicons name="key-outline" size={20} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#666"
              secureTextEntry={true}
            />
            <Ionicons name="eye-outline" size={20} color="#666" style={styles.passwordEyeIcon} />
          </View>

          {/* Checkbox e Esqueceu Senha */}
          <View style={styles.optionsContainer}>
            <View style={styles.rememberMeContainer}>
              <TouchableOpacity style={styles.checkbox}></TouchableOpacity>
              <Text style={styles.rememberMeText}>Lembrar</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>

          {/* Botão Acessar */}
          <TouchableOpacity style={styles.accessButton}>
            <Text style={styles.accessButtonText}>Acessar</Text>
          </TouchableOpacity>

          {/* Divisor/Social Login */}
          <Text style={styles.orText}>Ou Conecte-se via</Text>

          {/* Ícones de Redes Sociais */}
          <View style={styles.socialLoginContainer}>
            <GoogleIcon />
            <SteamIcon />
            <DiscordIcon />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center', // Centraliza o conteúdo se a tela for grande
  },

  // Estilos da Logo
  logoContainer: {
    marginBottom: 40, // Espaço entre a logo e o card de login
    alignItems: 'center',
  },
  logoPlaceholder: {
    // Dimensões do espaço reservado (ajuste conforme a imagem real)
    width: 150, 
    height: 100, 
    justifyContent: 'center',
    alignItems: 'center',
    // Opcional: para visualizar o espaço
    // backgroundColor: 'rgba(255, 255, 255, 0.2)', 
    borderRadius: 10,
  },
  // Estilo da imagem da logo (se for usar o <Image>)
  // logo: {
  //   width: 200, // Ajuste conforme a imagem
  //   height: 100, // Ajuste conforme a imagem
  //   resizeMode: 'contain',
  // },

  // Estilos do Card de Login
  card: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Fundo semi-transparente do card
    borderRadius: 20,
    padding: 25,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },

  // Estilos das Abas (Entrar / Criar Conta)
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 25,
    justifyContent: 'space-between',
  },
  tabActive: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: '#fff', // Cor do botão ativo
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  tabInactive: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Cor do botão inativo
    borderRadius: 10,
    marginLeft: 10,
    alignItems: 'center',
  },
  tabTextActive: {
    color: '#1a237e', // Cor do texto do botão ativo (azul escuro)
    fontWeight: 'bold',
    fontSize: 16,
  },
  tabTextInactive: {
    color: '#fff', // Cor do texto do botão inativo
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Estilos dos Inputs
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Fundo do input mais claro
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    height: 50,
  },
  inputIcon: {
    marginRight: 10,
  },
  passwordEyeIcon: {
    marginLeft: 'auto',
  },
  input: {
    flex: 1,
    color: '#000',
    fontSize: 16,
  },

  // Estilos das Opções (Lembrar / Esqueceu Senha)
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 4,
    marginRight: 8,
  },
  rememberMeText: {
    color: '#fff',
    fontSize: 14,
  },
  forgotPasswordText: {
    color: '#A9A9A9', // Cor do link de esqueceu senha
    fontSize: 14,
    textDecorationLine: 'underline',
  },

  // Estilos do Botão Acessar
  accessButton: {
    backgroundColor: '#FFC300', // Amarelo/Ouro vibrante
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  accessButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },

  // Estilos do Login Social
  orText: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 14,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialIconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
