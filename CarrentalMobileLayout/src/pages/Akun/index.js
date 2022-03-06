import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { HIJAU, HITAM, PUTIH } from '../../utils/constant'
import { NotRegistered } from '../../assets'
import React from 'react'

const Akun = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textJudul}>Akun</Text>

      <View style={styles.contentContainer}>
        <Image source={NotRegistered} style={styles.image}/>
        <Text style={styles.text}>Upss kamu belum memiliki akun. Mulai buat akun agar transaksi di BCR lebih mudah</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default Akun

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  textJudul: {
    marginStart: 16,
    fontSize: 18,
    fontWeight: 'bold',
    color: HITAM,
  },
  contentContainer: {
    alignItems: 'center',
  },
  image: {
    width: 312,
    height: 192,
    marginTop: 170
  },
  text:{
    fontSize: 16,
    textAlign: 'center',
    margin: 15
  },
  button: {
    marginTop: 10,
    backgroundColor: HIJAU,
    alignItems: "center",
    justifyContent: 'center',
    width: 80,
    height: 35
  },
  buttonText: {
    color: PUTIH,
    fontSize: 14
  }
})