import { StatusBar, Image, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Alert, View } from 'react-native'
import React, { useState } from 'react'
import { GREEN_700, MAIN_COLOR, PURPLE_500 } from '../../utils/colors'
import styles from './style'
import axios from 'axios'
import { LibreBaskerville } from '../../components'
import { Logo } from '../../assets'
import { BASE_URL_STORE } from '@env'
import * as Progress from 'react-native-progress';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  // loadingBar
  const loadingBar = loading => {
    if (loading) {
      return (
        <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
          <Progress.CircleSnail size={80} indeterminate={true} thickness={5} color={PURPLE_500} />
        </View>
      )
    } else {
      return (null)
    }
  }


  const dataUser = {
    username: username, //mor_2314
    password: password //83r5^_
  }

  const login = async () => {
    setIsLoading(true)
    try {
      if (username && password) {
        const res = await axios.post(`${BASE_URL_STORE}/auth/login`, dataUser, {
          validateStatus: status => {
            if (status < 201) {
              Alert.alert('Pemberitahuan', 'Login Berhasil', [
                {
                  text: "OK", onPress: () => navigation.navigate('Home')
                }
              ])
              setIsLoading(false)
            } else if (status === 400) {
              Alert.alert(
                "Pemberitahuan",
                "Error: Status 400"
              );
              setIsLoading(false)
            } else if (status === 401) {
              Alert.alert(
                "Pemberitahuan",
                "Error: Salah Username atau Password"
              );
              setIsLoading(false)
            } else if (status > 500) {
              Alert.alert(
                "Pemberitahuan",
                "Error: Server"
              );
              setIsLoading(false)
            }
          }
        })

        console.log(res);
      } else {
        Alert.alert(
          "Pemberitahuan",
          "Error: Semua Field Wajib diisi"
        );

        setIsLoading(false)
      }

    } catch (error) {
      setIsLoading(false)
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

      {/* Button */}
      <SafeAreaView style={styles.allButton}>
        {/* registrasi */}
        <TouchableOpacity style={[styles.button, { backgroundColor: GREEN_700 }]} onPress={() => navigation.navigate("Registrasi")}>
          <LibreBaskerville style={styles.buttonText}>Registrasi</LibreBaskerville>
        </TouchableOpacity>

        {/* goes to login */}
        <TouchableOpacity style={styles.button} onPress={login}>
          <LibreBaskerville style={styles.buttonText}>Login</LibreBaskerville>
        </TouchableOpacity>
      </SafeAreaView>
      
      {loadingBar(isLoading)}
    </ScrollView>
  )
}

export default Login