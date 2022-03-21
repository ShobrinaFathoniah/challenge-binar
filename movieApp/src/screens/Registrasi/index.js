import { Image, StatusBar, Alert, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { Logo } from '../../assets'
import { MAIN_COLOR } from '../../utils/colors'
import axios from 'axios'
import { LibreBaskerville } from '../../components'
import { BASE_URL_STORE } from '@env'
import { checkEmail, isValidPassword } from '../../utils/validationData'

const Registrasi = ({ navigation }) => {

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const firstname = name.split(' ')[0]
  const lastname = name.split(' ')[1]
  const [city, setCity] = useState("")
  const [street, setStreet] = useState("")
  const [number, setNumber] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [lat, setLat] = useState("")
  const [long, setLong] = useState("")
  const [phone, setPhone] = useState("")

  const dataUser = {
    email: email,
    username: username,
    password: password,
    name: {
      firstname: firstname,
      lastname: lastname
    },
    address: {
      city: city,
      street: street,
      number: number,
      zipcode: zipcode,
      geolocation: {
        lat: lat,
        long: long
      }
    },
    phone: phone
  }

  const registration = async () => {
    try {
      if (checkEmail(email) && isValidPassword(password)) {
        const res = await axios.post(`${BASE_URL_STORE}/users`, dataUser)
        console.log(res);
        
        Alert.alert('Pemberitahuan', 'Registration Berhasil', [
          {
            text: "OK", onPress: () => navigation.navigate('Login')
          }
        ])
      } else if (!checkEmail(email) && isValidPassword(password)) {
        return Alert.alert('Pemberitahuan', `Error: Email INVALID`)
      } else if (checkEmail(email) && !isValidPassword(password)) {
        return Alert.alert('Pemberitahuan', `Error: Password INVALID`)
      } else {
        return Alert.alert('Pemberitahuan', `Error: Email & Password INVALID`)
      }
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
          onChangeText={(value) => setEmail(value)}
          value={email}
          placeholder="Email"
          textContentType="emailAddress"
        />
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
        <TextInput
          style={styles.input}
          onChangeText={(value) => setName(value)}
          value={name}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => setCity(value)}
          value={city}
          placeholder="City"
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => setStreet(value)}
          value={street}
          placeholder="Street"
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => setNumber(value)}
          value={number}
          placeholder="Your House Number"
          keyboardType='numeric'
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => setZipcode(value)}
          value={zipcode}
          placeholder="ZipCode"
          keyboardType='numeric'
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => setLat(value)}
          value={lat}
          placeholder="Latido"
          keyboardType='numeric'
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => setLong(value)}
          value={long}
          placeholder="Longitudo"
          keyboardType='numeric'
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => setPhone(value)}
          value={phone}
          placeholder="Phone Number"
          keyboardType='phone-pad'
        />
      </SafeAreaView>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={registration}>
        <LibreBaskerville style={styles.buttonText}>Registrasi</LibreBaskerville>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Registrasi