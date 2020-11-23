import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

function Btn(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.add}>add</Text>
      </View>
      <View style={styles.rect2StackRow}>
        <View style={styles.rect2Stack}>
          <View style={styles.rect2}></View>
          <Text style={styles.loremIpsum1}>-</Text>
        </View>
        <View style={styles.rect4}>
          <Text style={styles.soluong}>soluong</Text>
        </View>
        <View style={styles.rect3}>
          <Text style={styles.loremIpsum}>+</Text>
        </View>
      </View>
      <View style={styles.endWrapperFillerRow}>
        <View style={styles.endWrapperFiller}></View>
        <View style={styles.rect5Row}>
          <View style={styles.rect5}></View>
          <View style={styles.rect8}></View>
        </View>
      </View>
      <View style={styles.rect7}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 19,
  },
  rect: {
    width: 345,
    height: 41,
    backgroundColor: 'rgba(74,144,226,1)',
    borderRadius: 10,
    marginTop: 245,
    marginLeft: 15,
  },
  add: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 9,
    marginLeft: 157,
  },
  rect2: {
    top: 5,
    left: 0,
    width: 52,
    height: 44,
    position: 'absolute',
    backgroundColor: '#E6E6E6',
    borderRadius: 8,
  },
  loremIpsum1: {
    top: 0,
    left: 20,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 40,
  },
  rect2Stack: {
    width: 52,
    height: 49,
  },
  rect4: {
    width: 219,
    height: 44,
    backgroundColor: '#E6E6E6',
    borderRadius: 6,
    marginLeft: 11,
    marginTop: 5,
  },
  soluong: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 20,
    marginTop: 7,
    marginLeft: 73,
  },
  rect3: {
    width: 52,
    height: 44,
    backgroundColor: 'rgba(230,230,230,1)',
    borderRadius: 8,
    marginLeft: 11,
    marginTop: 5,
  },
  loremIpsum: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 23,
    marginTop: 7,
    marginLeft: 20,
  },
  rect2StackRow: {
    height: 49,
    flexDirection: 'row',
    marginTop: -100,
    marginLeft: 15,
    marginRight: 15,
  },
  endWrapperFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  rect5: {
    width: 82,
    height: 46,
    backgroundColor: '#E6E6E6',
    borderRadius: 8,
    overflow: 'visible',
    marginRight: 23,
  },
  rect8: {
    width: 82,
    height: 46,
    backgroundColor: '#E6E6E6',
    borderRadius: 8,
    overflow: 'visible',
  },
  rect5Row: {
    height: 46,
    flexDirection: 'row',
  },
  endWrapperFillerRow: {
    height: 46,
    flexDirection: 'row',
    marginTop: -100,
    marginLeft: 15,
    marginRight: 173,
  },
  rect7: {
    width: 345,
    height: 54,
    backgroundColor: '#E6E6E6',
    borderRadius: 9,
    marginTop: -108,
    marginLeft: 15,
  },
});

export default Btn;
