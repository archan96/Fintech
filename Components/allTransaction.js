import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Animated,
  FlatList,
  Image,
} from 'react-native';
// import Landingmoney from './LandingMoney';
import SlidingUpPanel from 'rn-sliding-up-panel';
import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const AllTransaction = ({navigation}) => {
  const [draggableRange, setdraggableRange] = useState({
    top: screenHeight,
    bottom: 400,
  });

  function currencyFormat(num) {
    return '$ ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  const transactions = useSelector(state => state.transactions);

  const _draggedValue = new Animated.Value(180);

  const borderRadius = _draggedValue.interpolate({
    inputRange: [screenHeight - 180, screenHeight],
    outputRange: [(screenHeight * 5) / 100, 0],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    // console.log(transactions);
    return () => {
      console.log('unmount');
    };
  }, []);

  return (
    <SlidingUpPanel
      //   ref={c => (this._panel = c)}
      draggableRange={draggableRange}
      animatedValue={_draggedValue}
      snappingPoints={[360]}
      height={screenHeight + 180}
      friction={0.5}>
      <Animated.View
        style={[
          styles.conatiner,
          {
            borderTopLeftRadius: borderRadius,
            borderTopRightRadius: borderRadius,
          },
        ]}>
        <View style={styles.dragableLine}></View>
        <Text style={styles.title}>All Transactions</Text>
        <FlatList
          data={transactions}
          renderItem={({item}) => (
            <View
              key={item.id}
              style={[
                item.id % 2 !== 0 && {backgroundColor: '#192259'},
                styles.tItems,
              ]}>
              <Image
                source={{uri: item.url}}
                style={styles.tItemsAvtar}></Image>
              <View style={styles.titemName}>
                <Text style={styles.tName}>{item.user}</Text>
                <View
                  style={[
                    item.type === 'Recieved' && {backgroundColor: '#1dc7ac'},
                    item.type === 'Sent' && {backgroundColor: '#faad39'},
                    item.type === 'Failed' && {backgroundColor: '#fe4a54'},
                    styles.ttype,
                  ]}>
                  <Text style={styles.tTypeTXT}>{item.type}</Text>
                </View>
              </View>
              <Text
                style={[
                  item.type === 'Recieved' && {color: '#1dc7ac'},
                  item.type === 'Sent' && {color: '#faad39'},
                  item.type === 'Failed' && {color: '#fe4a54'},
                  styles.ammount,
                ]}>
                {currencyFormat(item.ammount)}
              </Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </Animated.View>
    </SlidingUpPanel>
  );
};

const styles = StyleSheet.create({
  ammount: {
    fontFamily: 'Inter-Bold',
    fontSize: (screenHeight * 2.2) / 100,
    fontWeight: 'bold',
    marginRight: (screenWidth * 2.5) / 100,
  },
  ttype: {
    padding: (screenHeight * 0.5) / 100,
    borderRadius: (screenHeight * 0.5) / 100,
  },
  tTypeTXT: {
    fontSize: (screenHeight * 1.5) / 100,
    fontFamily: 'Inter-Regular',
    color: 'white',
  },
  titemName: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: (screenWidth * 2.5) / 100,
  },

  tName: {
    fontFamily: 'Inter-Bold',
    fontSize: (screenHeight * 2.2) / 100,
    color: '#767fb6',
    fontWeight: 'bold',
  },
  tItems: {
    width: screenWidth,
    height: (screenHeight * 10) / 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  tItemsAvtar: {
    width: (screenHeight * 6) / 100,
    height: (screenHeight * 6) / 100,
    marginLeft: (screenWidth * 2.5) / 100,
    borderRadius: (screenHeight * 6) / 100,
  },
  conatiner: {
    backgroundColor: '#10194e',
    width: screenWidth,
    height: screenHeight,
    borderTopLeftRadius: (screenHeight * 5) / 100,
    borderTopRightRadius: (screenHeight * 5) / 100,
    overflow: 'hidden',
    alignItems: 'center',
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
});

export default AllTransaction;
