/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Btn from '../components/btn';

export default class userScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{justifyContent: 'center'}}>
          <Text style={{marginLeft: '30%', margin: 25, fontWeight: 'bold'}}>
            {' '}
            Đăng ký tài khoản VinShop{' '}
          </Text>
          <Text style={{marginLeft: '25%'}}>
            {' '}
            Tạo tài khoản ngay để nhận ưu đãi{' '}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
