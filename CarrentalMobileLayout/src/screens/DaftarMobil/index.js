import { StyleSheet, View, FlatList, ScrollView } from 'react-native';
import { CarCard } from '../../components';
import { Mobil } from '../../assets';
import { HITAM, PUTIH } from '../../utils/constant';
import React from 'react';
import { HelveticaFont } from '../../components';
import { DATA } from '../../utils/data';

const Item = ({ name, people, storage, price }) => (
  <CarCard
    name={name}
    people={people}
    storage={storage}
    price={price}
    pic={Mobil}
  />
);

const renderItem = ({ item }) => (
  <Item name={item.name} people={item.people} storage={item.storage} price={item.price} />
);

const DaftarMobil = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.listPage}>
        <HelveticaFont type='Bold' style={styles.textJudul}>Daftar Mobil</HelveticaFont>
        <View style={styles.listMobil}>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
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
    backgroundColor: PUTIH,
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
