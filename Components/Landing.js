import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Landingmoney from './LandingMoney';
import AllTransaction from './allTransaction';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updatefirst} from '../Store/actions/action';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Landing = ({navigation}) => {
  const dispatch = useDispatch();
  const firsttime = useSelector(state => state.firsttime);
  useEffect(() => {
    setTimeout(() => {
      firsttime && navigation.navigate('Request');
      firsttime && dispatch(updatefirst(false));
    }, 1000);
    return () => {
      console.log('unmount');
    };
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.menu}>
          <View
            style={[
              styles.menuDash,
              {
                marginBottom: (screenHeight * 1) / 100,
                width: (screenHeight * 4) / 100,
              },
            ]}></View>
          <View style={styles.menuDash}></View>
        </TouchableOpacity>
        <Text style={styles.nbTitle}>Hello Sandra,</Text>
        <TouchableOpacity style={styles.nbAddMoney}>
          <Text style={styles.nbAMTXT}>Add money</Text>
        </TouchableOpacity>
      </View>
      <Landingmoney navigation={navigation}/>
      <AllTransaction />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#010a43',
    alignItems: 'center',
  },

  navbar: {
    width: (screenWidth * 95) / 100,
    height: (screenHeight * 10) / 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: (screenHeight * 2.5) / 100,
    marginBottom: (screenHeight * 2.5) / 100,
  },

  menu: {
    width: (screenHeight * 8) / 100,
    height: (screenHeight * 8) / 100,
    borderRadius: (screenHeight * 8) / 100,
    backgroundColor: '#212a6b',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  menuDash: {
    marginLeft: (screenHeight * 2) / 100,
    width: (screenHeight * 2) / 100,
    height: (screenHeight * 0.3) / 100,
    backgroundColor: '#ff2e63',
  },

  nbTitle: {
    flex: 1,
    fontSize: (screenHeight * 2.5) / 100,
    fontFamily: 'Inter-Regular',
    color: 'white',
    marginLeft: (screenWidth * 5) / 100,
  },

  nbAddMoney: {
    backgroundColor: '#212a6b',
    padding: (screenHeight * 1) / 100,
    borderRadius: (screenHeight * 1) / 100,
  },
  nbAMTXT: {
    color: '#3e65ce',
    fontSize: (screenHeight * 1.8) / 100,
    fontFamily: 'Inter-Regular',
  },
});

export default Landing;
