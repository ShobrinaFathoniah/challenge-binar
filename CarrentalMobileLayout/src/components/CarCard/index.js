import { StyleSheet, Text, View, Image } from 'react-native';
import { ABU, HIJAU, HITAM, NEUTRAL, SHADOW } from '../../utils/constant';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';

const CarCard = ({ name, people, storage, price, pic }) => {
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: 'row' }}>
        <Image source={pic} style={{ marginTop: 7 }} />

        <View style={styles.mobilInfo}>
          <Text style={styles.mobilName}>{name}</Text>

          <View style={{ flexDirection: 'row' }}>
            <View style={styles.mobilInfo1}>
              <Feather name="users" color={NEUTRAL} size={12} />
              <Text style={styles.number}>{people}</Text>
            </View>
            <View style={styles.mobilInfo1}>
              <Feather
                style={{ marginStart: 14 }}
                name="briefcase"
                color={NEUTRAL}
                size={12}
              />
              <Text style={styles.number}>{storage}</Text>
            </View>
          </View>

          <Text style={styles.harga}>{price}</Text>
        </View>
      </View>
    </View>
  );
};

export default CarCard;

const styles = StyleSheet.create({
  card: {
    width: 330,
    height: 100,
    borderRadius: 4,
    padding: 16,
    borderColor: ABU,
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: SHADOW
  },
  mobilInfo: {
    marginStart: 15,
  },
  mobilName: {
    fontSize: 14,
    color: HITAM,
  },
  mobilInfo1: {
    marginTop: 5,
    flexDirection: 'row',
  },
  number: {
    marginStart: 4,
    fontSize: 10,
  },
  harga: {
    color: HIJAU,
    fontSize: 14,
    marginTop: 5,
  },
});
