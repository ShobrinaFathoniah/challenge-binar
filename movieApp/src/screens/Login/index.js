import { StatusBar, Image, ScrollView, SafeAreaView, TouchableOpacity,TextInput,Alert } from 'react-native'
import React, {useState} from 'react'
import { MAIN_COLOR } from '../../utils/colors'
import styles from './style'
import axios from 'axios'
import { LibreBaskerville } from '../../components'
import { Logo } from '../../assets'
import {BASE_URL_STORE} from '@env'

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const dataUser = {
    username: username, //mor_2314
    password: password //83r5^_
  }

  const login = async () => {
    try {
      const res = await axios.post(`${BASE_URL_STORE}/auth/login`, dataUser)
      console.log(res);
      Alert.alert('Pemberitahuan', 'Login Berhasil', [
        {
          text: "OK", onPress: () => navigation.navigate('Home')
        }
      ])
    } catch (error) {
      console.log(error);
      Alert.alert('Pemberitahuan', `Error: Registrasi Gagal karena ${error}`)
    }
  }

  return (
    <ScrollView style={styles.page}>
      <StatusBar barStyle="dark-content" backgroundColor={MAIN_COLOR} />

      {/* Logo */}
      <Image source={Logo} style={styles.logo} />

      {/* Input */}
      <SafeAreaView style={styles.containerInput}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setUsername(value)}
          value={username}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => setPassword(value)}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
      </SafeAreaView>

      <TouchableOpacity style={styles.button} onPress={login}>
        <LibreBaskerville style={styles.buttonText}>Login</LibreBaskerville>
      </TouchableOpacity>

    </ScrollView>
  )
}

export default Login