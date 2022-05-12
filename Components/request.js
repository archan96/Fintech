import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Request = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/2.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.nav}>
          <TouchableOpacity
            style={styles.backbtn}
            onPress={() => navigation.navigate('Landing')}>
            <Text style={styles.bbArrow}>{'<'}</Text>
            <Text style={styles.bbTXT}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.navHead}>New Request</Text>
        </View>
        <View style={styles.otherElements}>
          <View style={styles.avatarGradOne}>
            <View style={styles.avatarGradTwo}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQ88nDFCxmzQeXgsq22U8pFzGP6_WoytyCg&usqp=CAU',
                }}
                style={styles.avtar}></Image>
            </View>
          </View>

          <Text style={styles.Title}>Adebeye Usman</Text>
          <Text style={styles.des}>is requesting for:</Text>
          <Text style={styles.ammount}>$ 200,000</Text>

          <TouchableOpacity style={styles.sendMoney}>
            <Text style={styles.sendMoneyTXT}>Send money</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sendMoney,
              {
                backgroundColor: 'none',
                borderWidth: (screenHeight * 0.3) / 100,
                borderColor: '#28306b',
                marginTop: (screenHeight * 2.5) / 100,
              },
            ]}
            onPress={() => navigation.navigate('Landing')}>
            <Text style={[styles.sendMoneyTXT, {color: '#28306b'}]}>
              Don't send
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  sendMoney: {
    width: (screenWidth * 60) / 100,
    height: (screenHeight * 7) / 100,
    marginTop: (screenHeight * 5) / 100,
    backgroundColor: '#ff2e63',
    borderRadius: (screenHeight * 1) / 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendMoneyTXT: {
    fontFamily: 'Inter-Regular',
    fontSize: (screenHeight * 1.8) / 100,
    color: 'white',
    // fontWeight: 'bold',
  },
  ammount: {
    fontFamily: 'Inter-Bold',
    fontSize: (screenHeight * 4) / 100,
    color: 'white',
    fontWeight: 'bold',

    marginTop: (screenHeight * 2.5) / 100,
  },
  Title: {
    fontFamily: 'Inter-Regular',
    fontSize: (screenHeight * 2.8) / 100,
    color: 'white',
    marginTop: (screenHeight * 2.5) / 100,
  },
  des: {
    fontFamily: 'Inter-Regular',
    fontSize: (screenHeight * 1.5) / 100,
    color: 'white',
    marginTop: (screenHeight * 2.5) / 100,
  },
  avatarGradOne: {
    width: (screenHeight * 30) / 100,
    height: (screenHeight * 30) / 100,
    borderRadius: (screenHeight * 30) / 100,
    backgroundColor: '#10194e',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  avatarGradTwo: {
    width: (screenHeight * 25) / 100,
    height: (screenHeight * 25) / 100,
    borderRadius: (screenHeight * 25) / 100,
    backgroundColor: '#192259',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avtar: {
    width: (screenHeight * 20) / 100,
    height: (screenHeight * 20) / 100,
    borderRadius: (screenHeight * 25) / 100,
  },

  otherElements: {
    width: screenWidth,
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#ff2e63',
    marginLeft: -screenWidth,
  },
  backbtn: {
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
  },

  bbArrow: {
    fontFamily: 'Inter-Regular',
    fontSize: (screenHeight * 5) / 100,
    color: 'white',
    opacity: 0.8,

    marginLeft: (screenWidth * 2.5) / 100,
  },

  bbTXT: {
    marginLeft: (screenWidth * 2.5) / 100,
    fontFamily: 'Inter-Regular',
    fontSize: (screenHeight * 1.8) / 100,
    color: 'white',
    opacity: 0.8,
  },

  navHead: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: (screenHeight * 2.5) / 100,
    textAlign: 'center',
    color: 'white',
    opacity: 0.8,
  },

  nav: {
    width: screenWidth,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: (screenHeight * 2.5) / 100,
  },
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#010a43',
    alignItems: 'center',
  },

  image: {
    width: screenWidth,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Request;
