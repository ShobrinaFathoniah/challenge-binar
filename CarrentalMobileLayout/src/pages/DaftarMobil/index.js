import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { Mobil } from '../../assets'
import { ABU, HIJAU, HITAM, NEUTRAL, PUTIH } from '../../utils/constant'
import Feather from 'react-native-vector-icons/Feather'
import React from 'react'

const DaftarMobil = () => {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.listPage}>
        <Text style={styles.textJudul}>Daftar Mobil</Text>
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
        
      </View>

    </ScrollView>
  )
}

export default DaftarMobil

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10
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