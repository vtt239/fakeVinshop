/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TextInput,
  RefreshControl,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default class userScreen extends Component {
  state = {
    language: 'Tỉnh TP',
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <ScrollView style={{flex: 1}}>
          <View style={{justifyContent: 'center'}}>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: 10,
              }}>
              <Image style={{}} source={require('../img/vin.png')} />
            </View>
            <Text style={{marginLeft: '30%', margin: 15, fontWeight: 'bold'}}>
              {' '}
              Đăng ký tài khoản VinShop{' '}
            </Text>
            <Text style={{marginLeft: '25%'}}>
              Tạo tài khoản ngay để nhận ưu đãi{' '}
            </Text>
            <View style={{justifyContent: 'center'}}>
              <View style={styles.rect0}>
                <TextInput placeholder=" Tên của hàng" />
              </View>
              <View style={styles.rect0}>
                <TextInput placeholder=" SĐT" />
              </View>
              <View style={styles.rect0}>
                <Picker
                  prompt="ádsad"
                  mode="dropdown"
                  style={{height: 50}}
                  selectedValue={this.state.language}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})
                  }>
                  <Picker.Item label="Hà Nội" value="java" />
                  <Picker.Item label="HCM" value="js" />
                </Picker>
              </View>
              <View style={styles.rect0}>
                <Picker
                  mode="dropdown"
                  style={{height: 50}}
                  selectedValue={this.state.language}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})
                  }>
                  <Picker.Item label="Hà Nội" value="java" />
                  <Picker.Item label="HCM" value="js" />
                </Picker>
              </View>
              <View style={styles.rect0}>
                <TextInput placeholder=" Địa chỉ" />
              </View>
              <View style={styles.rect0}>
                <TextInput placeholder=" Số nhà, tên đường" />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.container}>
          <View style={styles.rect}>
            <View style={styles.rect2}>
              <Text
                style={{
                  marginLeft: '40%',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                }}>
                Gửi Thông Tin
              </Text>
            </View>
            <Text style={styles.loremIpsum}>Tôi đã có tài khoản</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  rect: {
    height: 120,
    backgroundColor: '#FFFFFF',
    //marginTop: 23,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 24,
  },
  rect2: {
    height: 49,
    backgroundColor: 'rgba(6,119,251,1)',
    borderRadius: 10,
    marginTop: 15,
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  loremIpsum: {
    fontFamily: 'roboto-regular',
    color: '#03a9f4',
    marginTop: 10,
    marginLeft: '37%',
    fontWeight: 'bold',
  },
  rect0: {
    height: 53,
    backgroundColor: '#E6E6E6',
    borderRadius: 10,
    marginTop: 36,
    marginHorizontal: 15,
  },
});
