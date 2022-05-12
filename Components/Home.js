import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Home = ({navigation}) => {
  const handleClick = () => {
    // console.log('landing');
    navigation.navigate('Landing');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/1.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.poster}>
          <View style={styles.navDots}>
            <View style={styles.navdot}></View>
            <View
              style={[
                styles.navdot,
                {width: (screenWidth * 10) / 100, opacity: 1},
              ]}></View>
            <View style={styles.navdot}></View>
          </View>
          <Text style={styles.title}>Transfer that is safe.</Text>
          <Text style={styles.subtitle}>
            You got nothing to be scared about we got you covered.
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => handleClick()}>
            <Text style={styles.btnTXT}>Start banking</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  /**nav dots */
  /**nav dots */
  navDots: {
    width: 'auto',
    height: (screenHeight * 1.5) / 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: (screenWidth * 5) / 100,
    marginTop: (screenWidth * 5) / 100,
    marginBottom: (screenHeight * 2.5) / 100,
  },

  navdot: {
    width: (screenWidth * 5) / 100,
    height: (screenHeight * 1.5) / 100,
    backgroundColor: '#c58e42',
    borderRadius: (screenHeight * 1.5) / 100,
    marginRight: (screenHeight * 1.5) / 100,
    opacity: 0.5,
  },
  /**nav dots */
  /**nav dots */
  container: {
    width: screenWidth,
    height: screenHeight,
  },

  image: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // backgroundColor: 'pink',
  },

  poster: {
    width: (screenWidth * 80) / 100,
    height: (screenHeight * 30) / 100,
    alignSelf: 'flex-end',
    backgroundColor: '#17288e',
    borderTopRightRadius: (screenHeight * 5) / 100,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: -(screenWidth * 20) / 100,
  },

  title: {
    marginLeft: (screenWidth * 5) / 100,
    fontFamily: 'Inter-Bold',
    fontSize: (screenHeight * 2.5) / 100,
    color: 'white',
    fontWeight: 'bold',
  },

  subtitle: {
    marginLeft: (screenWidth * 5) / 100,
    marginTop: (screenWidth * 2.5) / 100,
    width: (screenWidth * 60) / 100,
    fontFamily: 'Inter-Regular',
    fontSize: (screenHeight * 1.8) / 100,
    color: 'white',
  },

  button: {
    marginLeft: (screenWidth * 5) / 100,
    marginTop: (screenWidth * 2.5) / 100,
    width: (screenWidth * 40) / 100,

    height: (screenHeight * 5) / 100,
    borderRadius: (screenHeight * 1) / 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  btnTXT: {
    fontFamily: 'Inter-Bold',
    fontSize: (screenHeight * 1.8) / 100,
    color: '#17288e',
    // fontWeight: 'bold',
  },
});

export default Home;
