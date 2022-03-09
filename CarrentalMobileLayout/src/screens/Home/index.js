import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Image,
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
import { HITAM, PUTIH } from '../../utils/constant';
import { CarCard, HelveticaFont, Menu } from '../../components';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.page}>

      {/* header */}
      <ImageBackground source={Background} style={styles.header}>
        <HelveticaFont style={styles.textNama}>Hi, Nama</HelveticaFont>

        <View style={styles.headerContent}>
          <HelveticaFont type='Bold' style={styles.textLocation}>Your Location</HelveticaFont>
          <Image source={Profile} style={styles.profile} />
        </View>

        <View style={styles.containerBanner}>
          <Image source={Banner} style={styles.banner} />
        </View>
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
        <HelveticaFont type='Bold' style={styles.textJudul}>Daftar Mobil Pilihan</HelveticaFont>
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
    backgroundColor: PUTIH
  },
  header: {
    width: windowWidth,
    height: 176,
  },
  profile: {
    marginStart: 220,
    marginTop: -20,
  },
  containerBanner: {
    marginTop: 20,
    alignItems: 'center'
  },
  banner: {
    width: 328,
    height: 140,
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
  },
  menuAll: {
    marginTop: 92,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  listPage: {
    marginTop: 25,
  },
  textJudul: {
    marginStart: 16,
    fontSize: 18,
    color: HITAM,
  },
  listMobil: {
    alignItems: 'center',
    marginBottom: 10
  },
});
