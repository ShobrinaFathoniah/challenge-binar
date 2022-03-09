import { StyleSheet, Text, View, Image } from 'react-native';
import { HIJAU, HITAM, PUTIH } from '../../utils/constant';
import { NotRegistered } from '../../assets';
import React from 'react';
import { Button } from '../../components';
import { HelveticaFont } from '../../components';

const Akun = () => {
  return (
    <View style={styles.container}>
      <HelveticaFont type='Bold' style={styles.textJudul}>Akun</HelveticaFont>

      <View style={styles.contentContainer}>
        <Image source={NotRegistered} style={styles.image} />
        <HelveticaFont style={styles.text}>
          Upss kamu belum memiliki akun. Mulai buat akun agar transaksi di BCR
          lebih mudah
        </HelveticaFont>
        <Button name="Register" buttonColor={HIJAU} textColor={PUTIH} />

      </View>
    </View>
  );
};

export default Akun;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PUTIH
  },
  textJudul: {
    marginStart: 16,
    marginTop: 18,
    fontSize: 18,
    color: HITAM,
  },
  contentContainer: {
    alignItems: 'center',
  },
  image: {
    width: 312,
    height: 192,
    marginTop: 140,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: HITAM,
    margin: 16,
  },
});
