import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { CarCard } from '../../components';
import { Mobil } from '../../assets';
import { HITAM } from '../../utils/constant';
import React from 'react';

const DaftarMobil = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.listPage}>
        <Text style={styles.textJudul}>Daftar Mobil</Text>
        <View style={styles.listMobil}>
          <CarCard
            name="Daihatsu Xenia"
            people={4}
            storage={2}
            price="Rp 230.000"
            pic={Mobil}
          />
          <CarCard
            name="Daihatsu Xenia"
            people={4}
            storage={2}
            price="Rp 230.000"
            pic={Mobil}
          />
          <CarCard
            name="Daihatsu Xenia"
            people={4}
            storage={2}
            price="Rp 230.000"
            pic={Mobil}
          />
          <CarCard
            name="Daihatsu Xenia"
            people={4}
            storage={2}
            price="Rp 230.000"
            pic={Mobil}
          />
          <CarCard
            name="Daihatsu Xenia"
            people={4}
            storage={2}
            price="Rp 230.000"
            pic={Mobil}
          />
          <CarCard
            name="Daihatsu Xenia"
            people={4}
            storage={2}
            price="Rp 230.000"
            pic={Mobil}
          />
          <CarCard
            name="Daihatsu Xenia"
            people={4}
            storage={2}
            price="Rp 230.000"
            pic={Mobil}
          />
          <CarCard
            name="Daihatsu Xenia"
            people={4}
            storage={2}
            price="Rp 230.000"
            pic={Mobil}
          />
          <CarCard
            name="Daihatsu Xenia"
            people={4}
            storage={2}
            price="Rp 230.000"
            pic={Mobil}
          />
          <CarCard
            name="Daihatsu Xenia"
            people={4}
            storage={2}
            price="Rp 230.000"
            pic={Mobil}
          />
          <CarCard
            name="Daihatsu Xenia"
            people={4}
            storage={2}
            price="Rp 230.000"
            pic={Mobil}
          />
          <CarCard
            name="Daihatsu Xenia"
            people={4}
            storage={2}
            price="Rp 230.000"
            pic={Mobil}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default DaftarMobil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  listPage: {
    marginTop: 25,
  },
  textJudul: {
    marginStart: 16,
    fontSize: 18,
    fontWeight: 'bold',
    color: HITAM,
  },
  listMobil: {
    alignItems: 'center',
  },
});
