import { StatusBar, Image, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { MAIN_COLOR } from '../../utils/colors'
import styles from './style'
import axios from 'axios'
import { LibreBaskerville } from '../../components'
import { Logo } from '../../assets'
import { BASE_URL_STORE } from '@env'

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const dataUser = {
    username: username, //mor_2314
    password: password //83r5^_
  }

  const login = async () => {
    try {
      const res = await axios.post(`${BASE_URL_STORE}/auth/login`, dataUser, {
        validateStatus: status => {
          if (status < 201) {
            Alert.alert('Pemberitahuan', 'Login Berhasil', [
              {
                text: "OK", onPress: () => navigation.navigate('Home')
              }
            ])
          } else if (status === 400) {
            Alert.alert(
              "Pemberitahuan",
              "HTTP STATUS 400"
            );
          } else if (status === 401) {
            Alert.alert(
              "Pemberitahuan",
              "Error: Salah Username atau Password"
            );
          }else if (status > 500) {
            Alert.alert(
              "Pemberitahuan",
              "Error: Server"
            );
          }
        }
      })

      console.log(res);
    } catch (error) {
      console.log(error);
      //Alert.alert('Pemberitahuan', `Error: Login Gagal karena ${error}`)
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

      {/* button */}
      <TouchableOpacity style={styles.button} onPress={login}>
        <LibreBaskerville style={styles.buttonText}>Login</LibreBaskerville>
      </TouchableOpacity>

    </ScrollView>
  )
}

export default Login