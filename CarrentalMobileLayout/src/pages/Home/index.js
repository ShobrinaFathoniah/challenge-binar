import { StyleSheet, Text, View , ImageBackground, Dimensions, Image, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { Banner, Background, Profile, IconTruck, IconBox, IconCamera, IconKey, Kotak, Mobil } from '../../assets'
import { ABU, BIRU_MUDA, HIJAU, HITAM, NEUTRAL, PUTIH } from '../../utils/constant'
import Feather from 'react-native-vector-icons/Feather'

const Home = () => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={BIRU_MUDA} />


      <ImageBackground source={Background} style={styles.header}>
        <Text style={styles.textNama}>Hi, Nama</Text>
        
        <View style={styles.headerContent}>
          <Text style={styles.textLocation}>Your Location</Text>
          <Image source={Profile} style={styles.profile} />
        </View>
        
        <Image source={Banner} style={styles.banner} />
      </ImageBackground>


      <View style={styles.menuAll}>
        <View style={styles.menuSet}>
          <ImageBackground source={Kotak} style={styles.menu}>
            <Image source={IconTruck} style={styles.icon} />
          </ImageBackground>
          <Text style={styles.menuName}>Sewa Mobil</Text>
        </View>
        <View style={styles.menuSet}>
          <ImageBackground source={Kotak} style={styles.menu}>
            <Image source={IconBox} style={styles.icon} />
          </ImageBackground>
          <Text style={styles.menuName}>Oleh-Oleh</Text>
        </View>
        <View style={styles.menuSet}>
          <ImageBackground source={Kotak} style={styles.menu}>
            <Image source={IconKey} style={styles.icon} />
          </ImageBackground>
          <Text style={styles.menuName}>Penginapan</Text>
        </View>
        <View style={styles.menuSet}>
          <ImageBackground source={Kotak} style={styles.menu}>
            <Image source={IconCamera} style={styles.icon} />
          </ImageBackground>
          <Text style={styles.menuName}>Wisata</Text>
        </View>
      </View>
      

      <ScrollView style={styles.listPage}>
        <Text style={styles.textJudul}>Daftar Mobil Pilihan</Text>
        <View style={styles.listMobil}>
          <View style={styles.card}>
            <View style={{flexDirection: 'row'}}>
              <Image source={Mobil} style={{marginTop: 7}} />
              <View style={styles.mobilInfo}>
                <Text style={styles.mobilName}>Daihatsu Xenia</Text>

                <View style={{flexDirection: 'row'}}>
                  <View style={styles.mobilInfo1}>
                    <Feather name="users" color={NEUTRAL} size={12}/>
                    <Text style={styles.number}>4</Text>
                  </View>
                  <View style={styles.mobilInfo1}>
                    <Feather style={{marginStart: 14}} name='briefcase' color={NEUTRAL} size={12} />
                    <Text style={styles.number}>2</Text>
                  </View>
                </View>

                <Text style={styles.harga}>Rp 230.000</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={{flexDirection: 'row'}}>
              <Image source={Mobil} style={{marginTop: 7}} />
              <View style={styles.mobilInfo}>
                <Text style={styles.mobilName}>Daihatsu Xenia</Text>

                <View style={{flexDirection: 'row'}}>
                  <View style={styles.mobilInfo1}>
                    <Feather name="users" color={NEUTRAL} size={12}/>
                    <Text style={styles.number}>4</Text>
                  </View>
                  <View style={styles.mobilInfo1}>
                    <Feather style={{marginStart: 14}} name='briefcase' color={NEUTRAL} size={12} />
                    <Text style={styles.number}>2</Text>
                  </View>
                </View>

                <Text style={styles.harga}>Rp 230.000</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={{flexDirection: 'row'}}>
              <Image source={Mobil} style={{marginTop: 7}} />
              <View style={styles.mobilInfo}>
                <Text style={styles.mobilName}>Daihatsu Xenia</Text>

                <View style={{flexDirection: 'row'}}>
                  <View style={styles.mobilInfo1}>
                    <Feather name="users" color={NEUTRAL} size={12}/>
                    <Text style={styles.number}>4</Text>
                  </View>
                  <View style={styles.mobilInfo1}>
                    <Feather style={{marginStart: 14}} name='briefcase' color={NEUTRAL} size={12} />
                    <Text style={styles.number}>2</Text>
                  </View>
                </View>

                <Text style={styles.harga}>Rp 230.000</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={{flexDirection: 'row'}}>
              <Image source={Mobil} style={{marginTop: 7}} />
              <View style={styles.mobilInfo}>
                <Text style={styles.mobilName}>Daihatsu Xenia</Text>

                <View style={{flexDirection: 'row'}}>
                  <View style={styles.mobilInfo1}>
                    <Feather name="users" color={NEUTRAL} size={12}/>
                    <Text style={styles.number}>4</Text>
                  </View>
                  <View style={styles.mobilInfo1}>
                    <Feather style={{marginStart: 14}} name='briefcase' color={NEUTRAL} size={12} />
                    <Text style={styles.number}>2</Text>
                  </View>
                </View>

                <Text style={styles.harga}>Rp 230.000</Text>
              </View>
            </View>
          </View>

        </View>
        
      </ScrollView>
    </View>
  )
}

export default Home

const windowsWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  header: {
    width: windowsWidth,
    height: 176
  },
  profile:{
    marginStart: 220,
    marginTop: -20
  },
  banner:{
    width: 328,
    height: 140,
    marginTop: 30,
    marginLeft: 33
  },
  headerContent: {
    flexDirection: 'row'
  },
  textNama: {
    fontSize: 15,
    marginTop: 20,
    marginStart: 16,
    paddingBottom: 5,
    color: HITAM
  },
  textLocation: {
    fontSize: 18,
    color: HITAM,
    marginStart: 16,
    fontWeight: 'bold'
  },
  menuAll: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  menu: {
    height: 56,
    width: 56,
    alignItems: 'center',
    justifyContent:'center'
  },
  icon: {
    width: 24,
    height: 24,
  },
  menuName: {
    fontSize: 13
  },
  menuSet: {
    alignItems: 'center',
    justifyContent:'center'
  },
  listPage: {
    marginTop: 25,
    marginBottom: 10
  },
  textJudul: {
    marginStart: 16,
    fontSize: 18,
    fontWeight: 'bold',
    color: HITAM,
  },
  listMobil: {
    alignItems: 'center'
  },
  card: {
    width: 330,
    height: 100,
    borderRadius: 4,
    padding: 16,
    backgroundColor: PUTIH,
    borderColor: ABU,
    marginTop: 10
  },
  mobilInfo: {
    marginStart: 15
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
    fontSize: 10
  },
  harga: {
    color: HIJAU,
    fontSize: 14,
    marginTop: 5,
  }
  
})