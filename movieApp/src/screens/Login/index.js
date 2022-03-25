import {
  StatusBar,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  View,
  RefreshControl,
} from 'react-native';
import React, {useState} from 'react';
import {MAIN_COLOR, PRIMARY_DARK, YELLOW_200} from '../../utils/colors';
import styles from './style';
import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import {
  Amita,
  LibreBaskerville,
  LoadingBar,
  NoConnection,
  Rancho,
} from '../../components';
import {BASE_URL_STORE} from '@env';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LoginPic} from '../../assets';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [connection, setConnection] = useState(true);

  const dataUser = {
    username: username, //mor_2314
    password: password, //83r5^_
  };

  const onRefresh = () => {
    setRefreshing(true);
    internetChecker();
  };

  const internetChecker = () => {
    NetInfo.fetch().then(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);

      setConnection(state.isConnected);
      setRefreshing(false);
    });
  };

  const login = async () => {
    setIsLoading(true);

    try {
      if (username && password) {
        internetChecker();

        const res = await axios.post(`${BASE_URL_STORE}/auth/login`, dataUser, {
          validateStatus: status => {
            if (status <= 201) {
              Alert.alert('Pemberitahuan', 'Login Berhasil', [
                {
                  text: 'OK',
                  onPress: () => navigation.navigate('Home'),
                },
              ]);
              setIsLoading(false);
            } else if (status === 401) {
              Alert.alert(
                'Pemberitahuan',
                'Error: Salah Username atau Password',
              );
              setIsLoading(false);
            } else if (status > 500) {
              Alert.alert('Pemberitahuan', 'Error: Server');
              setIsLoading(false);
            }
          },
        });

        console.log(res);
      } else {
        Alert.alert('Pemberitahuan', 'Error: Semua Field Wajib diisi');
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      //Alert.alert('Pemberitahuan', `Error: Login Gagal karena ${error}`)
    }
  };

  const tampilan = () => {
    return (
      <View>
        <Image source={LoginPic} style={styles.image} />

        {/* Input */}
        <SafeAreaView style={styles.containerInput}>
          <TextInput
            style={styles.input}
            onChangeText={value => setUsername(value)}
            value={username}
            placeholder="Username"
            placeholderTextColor={MAIN_COLOR}
          />
          <TextInput
            style={styles.input}
            onChangeText={value => setPassword(value)}
            value={password}
            placeholder="Password"
            placeholderTextColor={MAIN_COLOR}
            secureTextEntry={true}
          />
        </SafeAreaView>

        {/* Button */}
        {/* goes to login */}
        <TouchableOpacity style={styles.button} onPress={login}>
          <LibreBaskerville style={styles.buttonText}>Login</LibreBaskerville>
        </TouchableOpacity>

        {/* registrasi */}
        <SafeAreaView style={styles.texts}>
          <LibreBaskerville style={styles.text}>
            Not Have an Account?{' '}
          </LibreBaskerville>
          <TouchableOpacity onPress={() => navigation.navigate('Registrasi')}>
            <LibreBaskerville style={[styles.text, styles.textRegis]}>
              Registrasi
            </LibreBaskerville>
          </TouchableOpacity>
        </SafeAreaView>

        {LoadingBar(isLoading)}
      </View>
    );
  };

  return (
    <ScrollView
      style={styles.page}
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }>
      <StatusBar barStyle="light-content" backgroundColor={PRIMARY_DARK} />

      {/* appNamw */}
      <Amita style={styles.appName}>Livies</Amita>

      <SafeAreaView style={styles.star}>
        <MaterialIcons name="star" size={25} color={YELLOW_200} />
        <MaterialIcons name="star" size={25} color={YELLOW_200} />
        <MaterialIcons name="star" size={25} color={YELLOW_200} />
      </SafeAreaView>
      <Rancho style={styles.login}>Login</Rancho>

      {connection ? tampilan() : NoConnection(connection)}
    </ScrollView>
  );
};

export default Login;
