import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import {
  Banner,
  Background,
  Profile,
  IconTruck,
  IconBox,
  IconCamera,
  IconKey,
  Mobil,
} from '../../assets';
import { BIRU_MUDA, HITAM } from '../../utils/constant';
import { CarCard, Menu } from '../../components';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={BIRU_MUDA} />

      {/* header */}
      <ImageBackground source={Background} style={styles.header}>
        <Text style={styles.textNama}>Hi, Nama</Text>

        <View style={styles.headerContent}>
          <Text style={styles.textLocation}>Your Location</Text>
          <Image source={Profile} style={styles.profile} />
        </View>

        <Image source={Banner} style={styles.banner} />
      </ImageBackground>

      {/* Menu */}
      <View style={styles.menuAll}>
        <Menu icon={IconTruck} name="Sewa Mobil" />
        <Menu icon={IconBox} name="Oleh-Oleh" />
        <Menu icon={IconKey} name="Penginapan" />
        <Menu icon={IconCamera} name="Wisata" />
      </View>

      {/* List Mobil */}
      <ScrollView style={styles.listPage}>
        <Text style={styles.textJudul}>Daftar Mobil Pilihan</Text>
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
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    width: windowWidth,
    height: 176,
  },
  profile: {
    marginStart: 220,
    marginTop: -20,
  },
  banner: {
    width: 328,
    height: 140,
    marginTop: 30,
    marginLeft: 33,
  },
  headerContent: {
    flexDirection: 'row',
  },
  textNama: {
    fontSize: 15,
    marginTop: 20,
    marginStart: 16,
    paddingBottom: 5,
    color: HITAM,
  },
  textLocation: {
    fontSize: 18,
    color: HITAM,
    marginStart: 16,
    fontWeight: 'bold',
  },
  menuAll: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  listPage: {
    marginTop: 25,
    marginBottom: 10,
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
