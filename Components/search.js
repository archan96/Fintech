import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Animated,
} from 'react-native';
import {useState, useRef, useEffect} from 'react';
import {useSelector} from 'react-redux';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

import SlidingUpPanel from 'rn-sliding-up-panel';

const Search = ({navigation}) => {
  const transactions = useSelector(state => state.transactions);
  const [val, setval] = useState('');
  const [selected, setSelected] = useState(null);
  const [draggableRange, setdraggableRange] = useState({
    top: screenHeight,
    bottom: 300,
  });

  const _draggedValue = new Animated.Value(180);

  const inputEl = useRef(null);

  const borderRadius = _draggedValue.interpolate({
    inputRange: [screenHeight - 180, screenHeight],
    outputRange: [(screenHeight * 5) / 100, 0],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    selected === null && inputEl.current.focus();
    selected !== null && inputEl.current.blur();
  }, [selected]);

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity
          style={styles.backbtn}
          onPress={() => navigation.navigate('Landing')}>
          <Text style={styles.bbArrow}>{'<'}</Text>
          <Text style={styles.bbTXT}>Back</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.searchbar}
          value={val}
          placeholder="Search"
          placeholderTextColor="white"
          onChangeText={e => setval(e)}
          ref={inputEl}
        />
      </View>
      <View style={styles.othercontent}>
        <View style={styles.circleOne}>
          <View style={styles.circleTwo}>
            <View style={styles.circleThree}></View>
          </View>
        </View>
        {/**RESULTS */}
        {/**RESULTS */}
        <View style={styles.results}>
          {val !== '' &&
            transactions
              .filter(user =>
                user.user.toLowerCase().includes(val.toLowerCase()),
              )
              .map(user => (
                <TouchableOpacity
                  key={user.id}
                  style={[
                    styles.result,
                    {
                      marginLeft:
                        0 + Math.random() * ((screenWidth * 80) / 100 - 0),
                      marginTop:
                        0 + Math.random() * ((screenWidth * 90) / 100 - 0),
                    },
                  ]}
                  onPress={() => setSelected(user.id)}>
                  <Animated.Image
                    source={{uri: user.url}}
                    style={[
                      styles.avtar,
                      selected === user.id && {
                        width: (screenHeight * 7) / 100,
                        height: (screenHeight * 7) / 100,
                        borderColor: '#34c978',
                      },
                    ]}></Animated.Image>
                  <Text
                    style={[
                      styles.name,
                      selected === user.id && {color: '#34c978'},
                    ]}>
                    {user.user}
                  </Text>
                </TouchableOpacity>
              ))}
        </View>

        {/**RESULTS */}
        {/**RESULTS */}

        {selected !== null && (
          <SlidingUpPanel
            //   ref={c => (this._panel = c)}
            draggableRange={draggableRange}
            animatedValue={_draggedValue}
            snappingPoints={[360]}
            height={screenHeight + 180}
            friction={0.5}>
            <Animated.View
              style={[
                styles.conatinerTwo,
                {
                  borderTopLeftRadius: borderRadius,
                  borderTopRightRadius: borderRadius,
                },
              ]}>
              <View style={styles.dragableLine}></View>
              {/*<View style={styles.dUserPro} >
                    <Image
                      source={{uri: 'https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg'}}
                      style={styles.dupAvtar}></Image>
                    <Text style={styles.dupTitle}>random</Text>
                  </View> */}
              {transactions
                .filter(er => er.id === selected)
                .map(item => (
                  <View style={styles.dUserPro} key={item.id}>
                    <Image
                      source={{uri: item.url}}
                      style={styles.dupAvtar}></Image>
                    <Text style={styles.dupTitle}>{item.user}</Text>
                  </View>
                ))}
              <TouchableOpacity style={styles.continueBTN}>
                <Text style={styles.continue}>Continue</Text>
              </TouchableOpacity>
            </Animated.View>
          </SlidingUpPanel>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  continueBTN: {
    width: (screenWidth * 60) / 100,
    height: (screenHeight * 7) / 100,
    marginTop: (screenHeight * 2.5) / 100,
    backgroundColor: '#ff2e63',
    borderRadius: (screenHeight * 1) / 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continue: {
    fontFamily: 'Inter-Regular',
    fontSize: (screenHeight * 1.8) / 100,
    color: 'white',
  },
  dUserPro: {
    width: screenWidth,
    // marginLeft: -screenWidth / 2,
    // marginTop: -screenHeight,
    flexDirection: 'column',
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // zIndex: 1,
  },

  dupAvtar: {
    width: (screenWidth * 25) / 100,
    height: (screenWidth * 25) / 100,
    borderRadius: (screenWidth * 25) / 100,
    marginTop: (screenHeight * 1.5) / 100,
  },

  dupTitle: {
    fontSize: (screenHeight * 2.5) / 100,
    color: 'white',
    marginTop: (screenHeight * 0.5) / 100,
  },

  //dragable
  //dragable
  //dragable
  conatinerTwo: {
    backgroundColor: '#10194e',
    width: screenWidth,
    height: screenHeight,
    borderTopLeftRadius: (screenHeight * 5) / 100,
    borderTopRightRadius: (screenHeight * 5) / 100,
    overflow: 'hidden',
    alignItems: 'center',
    // zIndex: 99
  },
  dragableLine: {
    width: (screenWidth * 15) / 100,
    height: (screenHeight * 1) / 100,
    marginTop: (screenHeight * 2.5) / 100,
    marginBottom: (screenHeight * 2.5) / 100,
    borderRadius: (screenHeight * 2) / 100,
    backgroundColor: '#4e589f',
  },

  title: {
    fontSize: (screenHeight * 2.5) / 100,
    fontFamily: 'Inter-Regular',
    color: 'white',
    alignSelf: 'flex-start',
    marginLeft: (screenWidth * 2.5) / 100,
    marginBottom: (screenHeight * 2.5) / 100,
  },
  //Dragable
  //Dragable
  //Dragable
  //Dragable
  name: {
    fontSize: (screenHeight * 1.5) / 100,
    fontFamily: 'Inter-Regular',
    color: 'white',
  },
  result: {
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // zIndex: 1,
  },
  avtar: {
    width: (screenHeight * 5) / 100,
    height: (screenHeight * 5) / 100,
    borderRadius: (screenHeight * 5) / 100,
    borderWidth: (screenHeight * 0.3) / 100,
    borderColor: 'white',
  },
  results: {
    position: 'absolute',
    top: (screenHeight * 5) / 100,
    left: (screenWidth * 2.5) / 100,
    // backgroundColor: 'pink',
  },
  circleOne: {
    width: (screenWidth * 95) / 100,
    height: (screenWidth * 95) / 100,
    borderRadius: (screenWidth * 95) / 100,
    borderWidth: (screenHeight * 0.3) / 100,
    borderColor: 'rgba(255,255,255,0.05)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: (screenHeight * 5) / 100,
  },
  circleTwo: {
    width: (screenWidth * 80) / 100,
    height: (screenWidth * 80) / 100,
    borderRadius: (screenWidth * 95) / 100,
    borderWidth: (screenHeight * 0.3) / 100,
    borderColor: 'rgba(255,255,255,0.05)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleThree: {
    width: (screenWidth * 65) / 100,
    height: (screenWidth * 65) / 100,
    borderRadius: (screenWidth * 95) / 100,
    borderWidth: (screenHeight * 0.3) / 100,
    borderColor: 'rgba(255,255,255,0.05)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  othercontent: {
    width: screenWidth,
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  searchbar: {
    flex: 1,
    height: (screenHeight * 5) / 100,
    borderWidth: (screenHeight * 0.3) / 100,
    borderColor: '#16707d',
    borderRadius: (screenHeight * 1) / 100,
    marginLeft: (screenWidth * 3.5) / 100,
    marginRight: (screenWidth * 2.5) / 100,
    paddingLeft: (screenWidth * 2.5) / 100,
    backgroundColor: '#10194e',
    color: 'white',
    fontSize: (screenHeight * 1.5) / 100,
    fontFamily: 'Inter-Regular',
  },
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#010a43',
    alignItems: 'center',
    flexDirection: 'column',
  },

  backbtn: {
    // zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // position: 'absolute',
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

  nav: {
    width: screenWidth,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: (screenHeight * 2.5) / 100,
  },
});

export default Search;
