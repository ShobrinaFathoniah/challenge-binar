import { StyleSheet, View, ScrollView } from 'react-native';
import { CarCard } from '../../components';
import { Mobil } from '../../assets';
import { HITAM, PUTIH } from '../../utils/constant';
import React from 'react';
import { HelveticaFont } from '../../components';

const DaftarMobil = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.listPage}>
        <HelveticaFont type='Bold' style={styles.textJudul}>Daftar Mobil</HelveticaFont>
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
    backgroundColor: PUTIH
  },
  listPage: {
    marginTop: 25,
    marginBottom: 10,
  },
  textJudul: {
    marginStart: 16,
    fontSize: 18,
    color: HITAM,
  },
  listMobil: {
    alignItems: 'center',
  },
});
