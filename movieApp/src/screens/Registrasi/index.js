import { StatusBar, Alert, SafeAreaView, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import axios from 'axios'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { PRIMARY_DARK, PRIMARY_LIGHT, YELLOW_200 } from '../../utils/colors'
import { Amita, LibreBaskerville, LoadingBar, Rancho } from '../../components'
import { BASE_URL_STORE } from '@env'
import { checkEmail, isValidPassword } from '../../utils/validationData'
import { moderateScale } from 'react-native-size-matters'
import { AddresPic, PersonalPic, RegisPic } from '../../assets'

const Registrasi = ({ navigation }) => {

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
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
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true)
    try {
      if (email, username, password, confirmPassword, name, city, street, number, zipcode, lat, long, phone) {
        if (password === confirmPassword) {
          if (checkEmail(email) && isValidPassword(password)) {
            const res = await axios.post(`${BASE_URL_STORE}/users`, dataUser)
            console.log(res);

            Alert.alert('Pemberitahuan', 'Registration Berhasil', [
              {
                text: "OK", onPress: () => navigation.navigate('Login')
              }
            ])
            setIsLoading(false)
          } else if (!checkEmail(email) && isValidPassword(password)) {
            Alert.alert('Pemberitahuan', `Error: Email INVALID`)
            setIsLoading(false)
          } else if (checkEmail(email) && !isValidPassword(password)) {
            Alert.alert('Pemberitahuan', `Error: Password INVALID`)
            setIsLoading(false)
          } else {
            Alert.alert('Pemberitahuan', `Error: Email & Password INVALID`)
            setIsLoading(false)
          }
        } else {
          Alert.alert(
            "Pemberitahuan",
            "Error: Antara Password dan Confirm Password Tidak Sama"
          );
          setIsLoading(false)
        }
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
      Alert.alert('Pemberitahuan', `Error: Registrasi Gagal karena ${error}`)
    }
  }

  return (
    <ScrollView style={styles.page}>
      <StatusBar barStyle="light-content" backgroundColor={PRIMARY_DARK} />

      {/* appname */}
      <SafeAreaView style={{ flexDirection: 'row' }}>
        <Amita style={styles.appName}>Livies</Amita>
      </SafeAreaView>

      <SafeAreaView style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <SafeAreaView style={{ flex: 2, marginStart: moderateScale(60) }}>
          <SafeAreaView style={styles.star}>
            <MaterialIcons name='star' size={25} color={YELLOW_200} />
            <MaterialIcons name='star' size={25} color={YELLOW_200} />
            <MaterialIcons name='star' size={25} color={YELLOW_200} />
            <MaterialIcons name='star' size={25} color={YELLOW_200} />
          </SafeAreaView>
          <Rancho style={styles.signUp}>SignUp</Rancho>
        </SafeAreaView>

        <SafeAreaView>
          <Image source={RegisPic} style={styles.image} />
        </SafeAreaView>
      </SafeAreaView>

      {/* Input */}
      <SafeAreaView style={{ flexDirection: 'row' }}>
        <Image source={PersonalPic} style={styles.pic} />
        <LibreBaskerville style={[styles.text, { fontSize: moderateScale(20), margin: moderateScale(15), alignSelf: 'center' }]}>Personal Data</LibreBaskerville>
      </SafeAreaView>

      <SafeAreaView style={styles.containerInput}>
        <SafeAreaView style={styles.rowInput}>
          <SafeAreaView>
            <LibreBaskerville style={styles.text}>Email</LibreBaskerville>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setEmail(value)}
              value={email}
              placeholder="Email"
              textContentType="emailAddress"
              placeholderTextColor={PRIMARY_LIGHT}
            />
          </SafeAreaView>

          <SafeAreaView style={styles.perInput}>
            <LibreBaskerville style={styles.text}>Username</LibreBaskerville>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setUsername(value)}
              value={username}
              placeholder="Username"
              placeholderTextColor={PRIMARY_LIGHT}
            />
          </SafeAreaView>
        </SafeAreaView>

        <SafeAreaView style={styles.rowInput}>
          <SafeAreaView >
            <LibreBaskerville style={styles.text}>Name</LibreBaskerville>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setName(value)}
              value={name}
              placeholder="Name"
              placeholderTextColor={PRIMARY_LIGHT}
            />
          </SafeAreaView>
          <SafeAreaView style={styles.perInput}>
            <LibreBaskerville style={styles.text}>Phone Number</LibreBaskerville>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setPhone(value)}
              value={phone}
              placeholder="Your Number"
              keyboardType='phone-pad'
              placeholderTextColor={PRIMARY_LIGHT}
            />
          </SafeAreaView>
        </SafeAreaView>

        <SafeAreaView style={styles.rowInput}>
          <SafeAreaView>
            <LibreBaskerville style={styles.text}>Password</LibreBaskerville>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setPassword(value)}
              value={password}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor={PRIMARY_LIGHT}
            />
          </SafeAreaView>

          <SafeAreaView style={styles.perInput}>
            <LibreBaskerville style={styles.text}>Confirm Password</LibreBaskerville>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setConfirmPassword(value)}
              value={confirmPassword}
              placeholder="Confirm Password"
              secureTextEntry={true}
              placeholderTextColor={PRIMARY_LIGHT}
            />
          </SafeAreaView>
        </SafeAreaView>

        <SafeAreaView style={{ flexDirection: 'row' }}>
          <Image source={AddresPic} style={styles.pic} />
          <LibreBaskerville style={[styles.text, { fontSize: moderateScale(20), margin: moderateScale(15), alignSelf: 'center' }]}>Your Address</LibreBaskerville>
        </SafeAreaView>

        <SafeAreaView style={styles.rowInput}>
          <SafeAreaView>
            <LibreBaskerville style={styles.text}>City</LibreBaskerville>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setCity(value)}
              value={city}
              placeholder="City"
              placeholderTextColor={PRIMARY_LIGHT}
            />
          </SafeAreaView>

          <SafeAreaView style={styles.perInput}>
            <LibreBaskerville style={styles.text}>House Number</LibreBaskerville>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setNumber(value)}
              value={number}
              placeholder="Your House Number"
              keyboardType='numeric'
              placeholderTextColor={PRIMARY_LIGHT}
            />
          </SafeAreaView>
        </SafeAreaView>

        <SafeAreaView style={styles.rowInput}>
          <SafeAreaView>
            <LibreBaskerville style={styles.text}>Street</LibreBaskerville>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setStreet(value)}
              value={street}
              placeholder="Street"
              placeholderTextColor={PRIMARY_LIGHT}
            />
          </SafeAreaView>
          <SafeAreaView style={styles.perInput}>
            <LibreBaskerville style={styles.text}>ZipCode</LibreBaskerville>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setZipcode(value)}
              value={zipcode}
              placeholder="ZipCode"
              keyboardType='numeric'
              placeholderTextColor={PRIMARY_LIGHT}
            />
          </SafeAreaView>
        </SafeAreaView>

        <SafeAreaView style={styles.rowInput}>
          <SafeAreaView>
            <LibreBaskerville style={styles.text}>Latido</LibreBaskerville>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setLat(value)}
              value={lat}
              placeholder="Latido"
              keyboardType='numeric'
              placeholderTextColor={PRIMARY_LIGHT}
            />
          </SafeAreaView>

          <SafeAreaView style={styles.perInput}>
            <LibreBaskerville style={styles.text}>Longitudo</LibreBaskerville>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setLong(value)}
              value={long}
              placeholder="Longitudo"
              keyboardType='numeric'
              placeholderTextColor={PRIMARY_LIGHT}
            />
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>

      {LoadingBar(isLoading)}

      {/* Button */}
      <View style={styles.allButton}>
        {/* registrasi */}
        <TouchableOpacity style={styles.button} onPress={registration}>
          <LibreBaskerville style={styles.buttonText}>Registrasi</LibreBaskerville>
        </TouchableOpacity>
      </View>

      <View style={styles.texts}>
        <LibreBaskerville style={styles.text}>Have an Account? </LibreBaskerville>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <LibreBaskerville style={[styles.text, styles.textRegis]}>Login</LibreBaskerville>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Registrasi