import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {useSelector} from 'react-redux';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Landingmoney = ({navigation}) => {
  const money = useSelector(state => state.money);

  function currencyFormat(num) {
    return '$ ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your current balance is</Text>
      <Text style={styles.balance}>{currencyFormat(money)}</Text>
      <View style={styles.options}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('Search')}>
          <Text style={styles.optionTXT}>Request Money</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('Search')}>
          <Text style={styles.optionTXT}>Send Money</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: (screenWidth * 95) / 100,
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    marginTop: (screenHeight * 2.5) / 100,
  },

  title: {
    fontSize: (screenHeight * 1.5) / 100,
    fontFamily: 'Inter-Regular',
    color: 'white',
    // marginLeft: (screenWidth * 5) / 100,
  },
  balance: {
    fontSize: (screenHeight * 5) / 100,
    fontWeight: 'bold',
    fontFamily: 'Inter-bold',
    color: 'white',
  },

  options: {
    width: (screenWidth * 95) / 100,
    height: (screenHeight * 10) / 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: (screenHeight * 5) / 100,
  },

  option: {
    width: (screenWidth * 45) / 100,
    height: (screenHeight * 8) / 100,
    borderWidth: (screenHeight * 0.3) / 100,
    borderRadius: (screenHeight * 1) / 100,
    borderColor: '#212a6b',
    justifyContent: 'center',
    alignItems: 'center',
  },

  optionTXT: {
    color: '#212a6b',
    fontSize: (screenHeight * 2.2) / 100,
    fontFamily: 'Inter-Regular',
  },
});

export default Landingmoney;
