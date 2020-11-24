/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Btn from '../components/btn';

export default class Home extends Component {
  state = {
    modalVisible: false,
    txt: '',
    modalSP: false,
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  renderItem = () => {
    return (
      <View style={styles.rowitem}>
        <View style={styles.rowitemc}>
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(true);
              this.setState({txt: 'Đồ uống các loại'});
            }}>
            <View style={{width: 100}}>
              <Text style={styles.txt}>Đồ uống các loại</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.rowitemc}>
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(true);
              this.setState({txt: 'Bánh kẹo, trà, cà phê'});
            }}>
            <View style={{width: 100}}>
              <Text style={styles.txt}>Bánh kẹo, trà, cà phê</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderSale = () => {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          backgroundColor: '#FFFFFF',
          width: 300,
          height: 80,
          marginHorizontal: 15,
          marginBottom: 10,
          marginTop: 3,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,

          elevation: 1,
        }}>
        <View
          style={{
            backgroundColor: '#ffe4c4',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}>
          <Text style={{fontSize: 16, margin: 10}}>63.47</Text>
        </View>

        <Text style={{marginLeft: 10}}>
          gjkdsfng,nbx,xcjvnhbkdnhvxcnvksdjnv
        </Text>
      </View>
    );
  };

  renderSaleDay = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({modalSP: true});
        }}>
        <View style={styles.itemgt}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: 'gray',
              width: 110,
              height: 100,
              margin: 10,
            }}></View>
          <Text style={{marginLeft: 10, fontSize: 16, fontWeight: 'bold'}}>
            3xx,xxxđ
          </Text>
          <Text style={{marginLeft: 10, marginTop: 40}}>
            Bánh quy sữa cosy marie hộp sắt...
          </Text>
          <Text style={{color: '#808080', marginLeft: 10, marginTop: 15}}>
            thùng 200 hộp
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.setState({modalSP: true});
            }}
            style={{
              width: 95,
              height: 30,
              backgroundColor: '#b3e5fc',
              borderRadius: 10,
              justifyContent: 'center',
              flexDirection: 'row',
              marginLeft: 18,
              paddingTop: 4,
              marginTop: 10,
            }}>
            <Text>Chọn</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  renderTKPB = () => {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: 200,
          height: 140,
          backgroundColor: '#FFFFFF',
          borderRadius: 10,
          marginLeft: 15,
          marginRight: 10,
          marginTop: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,

          elevation: 2,
        }}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: 'row',
            margin: 8,
            //justifyContent: 'space-between',
            marginHorizontal: 15,
          }}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: 30,
              height: 30,
              backgroundColor: 'red',
              //marginTop: 5,
            }}></View>
          <View>
            <Text style={{fontSize: 11, marginLeft: 15}}>Bò húc</Text>
            <Text style={{color: '#808080', fontSize: 11, marginLeft: 15}}>
              123451 Lượt
            </Text>
          </View>
        </View>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: 'row',
            margin: 8,
            //justifyContent: 'space-between',
            marginHorizontal: 15,
          }}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: 30,
              height: 30,
              backgroundColor: 'red',
              //marginTop: 5,
            }}></View>
          <View>
            <Text style={{fontSize: 11, marginLeft: 15}}>Bò húc</Text>
            <Text style={{color: '#808080', fontSize: 11, marginLeft: 15}}>
              123451 Lượt
            </Text>
          </View>
        </View>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: 'row',
            margin: 8,
            //justifyContent: 'space-between',
            marginHorizontal: 15,
          }}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: 30,
              height: 30,
              backgroundColor: 'red',
              //marginTop: 5,
            }}></View>
          <View>
            <Text style={{fontSize: 11, marginLeft: 15}}>Bò húc</Text>
            <Text style={{color: '#808080', fontSize: 11, marginLeft: 15}}>
              123451 Lượt
            </Text>
          </View>
        </View>
      </View>
    );
  };

  renderNH = () => {
    return (
      <View style={{flexDirection: 'column'}}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: 150,
            height: 80,
            backgroundColor: 'gray',
            marginTop: 15,
            marginHorizontal: 15,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,

            elevation: 2,
          }}></View>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: 150,
            height: 80,
            backgroundColor: 'gray',
            marginTop: 15,
            marginHorizontal: 15,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,

            elevation: 2,
          }}></View>
      </View>
    );
  };

  renderModal = () => {
    const modalSP = this.state;
    return (
      <Modal animationType="slide" transparent={true} visible={modalSP}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            marginTop: '50%',
            backgroundColor: '#FFFFFF',
            flex: 1,
            borderRadius: 15,
          }}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              margin: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: 'bold'}}>{}</Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({modalSP: false});
              }}>
              <Icon name="close" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  render() {
    const {modalVisible, modalSP} = this.state;
    //if(this.state.modalSP === true || this.state.modalVisible === true)
    return (
      // <View style={{backgroundColor: 'gray', flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View
            style={{
              marginTop: '50%',
              backgroundColor: '#FFFFFF',
              flex: 1,
              borderRadius: 15,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}>
            <View
              style={{
                margin: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontWeight: 'bold'}}>{this.state.txt}</Text>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(false);
                }}>
                <Icon name="close" size={25} />
              </TouchableOpacity>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 10,
                }}>
                <View>
                  <View style={styles.itemmodal}></View>
                  <Text style={{marginLeft: 40}}>Bia</Text>
                </View>
                <View>
                  <View style={styles.itemmodal}></View>
                  <Text style={{marginLeft: 40}}>Bia</Text>
                </View>
                <View>
                  <View style={styles.itemmodal}></View>
                  <Text style={{marginLeft: 40}}>Bia</Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalSP}
          backdropOpacity={10}>
          <View
            style={{
              marginTop: '50%',
              backgroundColor: '#FFFFFF',
              flex: 1,
              borderRadius: 15,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}>
            <View
              style={{
                margin: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: 'red',
                  }}></View>
                <View style={{marginLeft: 10}}>
                  <Text>Nước Tương Maggi</Text>
                  <Text style={{color: '#808080'}}>Thùng 12 hộp</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      marginTop: 5,
                      color: 'red',
                      fontWeight: 'bold',
                    }}>
                    3xx,000 đ
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  this.setState({modalSP: false});
                }}>
                <Icon name="close" size={25} />
              </TouchableOpacity>
            </View>
            <View>
              <View
                style={{
                  borderWidth: 0.3,
                  margin: 15,
                  padding: 10,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text style={{color: '#808080'}}>Xuất sứ</Text>
                    <Text>Viet nam</Text>
                  </View>
                  <View>
                    <Text style={{color: '#808080'}}>Dung tích</Text>
                    <Text>700ml</Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 15,
                }}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 5,
                    backgroundColor: 'gray',
                    justifyContent: 'center',
                    paddingLeft: 20,
                  }}>
                  <Text style={{fontSize: 30}}>-</Text>
                </View>
                <View
                  style={{
                    borderWidth: 0.3,
                    height: 50,
                    borderRadius: 5,
                    width: '70%',
                    justifyContent: 'center',
                  }}>
                  <Text style={{marginLeft: 50, fontSize: 16}}>Số Lượng: </Text>
                </View>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 5,
                    backgroundColor: 'gray',
                    justifyContent: 'center',
                    paddingLeft: 16,
                  }}>
                  <Text style={{fontSize: 30}}>+</Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: 'rgba(74,144,226,1)',
                  borderRadius: 10,
                  height: 45,
                  marginLeft: 15,
                  marginRight: 15,
                  marginTop: 20,
                }}></View>
            </View>
          </View>
        </Modal>

        <View
          style={{
            flex: 1,
          }}>
          <ScrollView style={{flex: 1}}>
            <View style={styles.container}>
              <View style={styles.cpTop}>
                <View style={styles.icon}>
                  <Icon style={{marginLeft: 10}} name="search" size={20} />
                  <Text style={{fontSize: 12}}>Tìm Kiếm</Text>
                </View>
                <View style={styles.icon}>
                  <Icon style={{marginLeft: 13}} name="file-text-o" size={20} />
                  <Text style={{fontSize: 12}}>Đơn hàng</Text>
                </View>
                <View style={styles.icon}>
                  <Icon
                    style={{marginLeft: 10}}
                    name="shopping-bag"
                    size={20}
                  />
                  <Text style={{fontSize: 12}}>Bán hàng</Text>
                </View>
                <View style={styles.icon}>
                  <Icon style={{marginLeft: 6}} name="percent" size={20} />
                  <Text style={{fontSize: 12}}>Ưu đãi</Text>
                </View>
              </View>

              <View style={styles.vsh}>
                <ScrollView
                  horizontal={true}
                  pagingEnabled={true}
                  showsHorizontalScrollIndicator={false}
                  //persistentScrollbar={false}
                >
                  <View
                    style={[styles.imgscroll, {backgroundColor: 'red'}]}></View>
                  <View
                    style={[
                      styles.imgscroll,
                      {backgroundColor: 'skyblue'},
                    ]}></View>
                  <View
                    style={[
                      styles.imgscroll,
                      {backgroundColor: 'yellow'},
                    ]}></View>
                  <View
                    style={[styles.imgscroll, {backgroundColor: 'red'}]}></View>
                </ScrollView>
              </View>

              <View style={styles.item}>
                <this.renderItem />
                <this.renderItem />
                <this.renderItem />
              </View>

              <View
                style={{
                  marginLeft: 15,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 15,
                  marginTop: 20,
                }}>
                <Text style={styles.txt}>Ưu đãi</Text>
                <Text style={[styles.txt, {color: 'blue'}]}>Tất cả</Text>
              </View>

              <View style={{marginTop: 10}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <this.renderSale />
                  <this.renderSale />
                </ScrollView>
              </View>

              <View
                style={{
                  marginLeft: 15,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 15,
                  marginTop: 20,
                }}>
                <Text style={styles.txt}>Giá tốt mỗi ngày</Text>
              </View>

              <View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <this.renderSaleDay />
                  <this.renderSaleDay />
                  <this.renderSaleDay />
                  <this.renderSaleDay />
                  <this.renderSaleDay />
                  <View style={{justifyContent: 'center'}}>
                    <Icon
                      name="chevron-right"
                      size={35}
                      style={{marginLeft: 15}}
                    />
                    <Text style={{fontSize: 12, marginRight: 10}}>
                      Xem thêm
                    </Text>
                  </View>
                </ScrollView>
              </View>

              <View
                style={{
                  marginLeft: 15,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 15,
                  marginTop: 20,
                }}>
                <Text style={styles.txt}>Sản phẩm bán chạy</Text>
              </View>
              <View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <this.renderSaleDay />
                  <this.renderSaleDay />
                  <this.renderSaleDay />
                  <this.renderSaleDay />
                  <this.renderSaleDay />
                </ScrollView>
              </View>

              <View
                style={{
                  marginLeft: 15,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 15,
                  marginTop: 20,
                }}>
                <Text style={styles.txt}>Dành riêng cho bạn</Text>
              </View>
              <View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <this.renderSaleDay />
                  <this.renderSaleDay />
                  <this.renderSaleDay />
                  <this.renderSaleDay />
                  <this.renderSaleDay />
                </ScrollView>
              </View>

              <View
                style={{
                  marginLeft: 15,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 15,
                  marginTop: 20,
                }}>
                <Text style={styles.txt}>Tìm kiếm phổ biến</Text>
              </View>
              <View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <this.renderTKPB />
                  <this.renderTKPB />
                  <this.renderTKPB />
                  <this.renderTKPB />
                </ScrollView>
              </View>
              <View
                style={{
                  marginLeft: 15,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 15,
                  marginTop: 20,
                }}>
                <Text style={styles.txt}>Nhãn hàng nổi bật</Text>
              </View>
              <View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <this.renderNH />
                  <this.renderNH />
                  <this.renderNH />
                  <this.renderNH />
                  <this.renderNH />
                </ScrollView>
              </View>
            </View>

            <View
              style={{
                marginLeft: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 15,
                marginTop: 20,
              }}>
              <Text style={styles.txt}>Lợi ích khi tham gia</Text>
            </View>

            <View
              style={{
                marginHorizontal: 30,
                marginTop: 15,
                flexDirection: 'row',
              }}>
              <Icon style={{marginTop: 3}} name="dollar" size={30} />
              <View style={{marginLeft: 20}}>
                <Text style={{fontSize: 14}}>Tăng thu nhập 10tr/tháng</Text>
                <Text style={{fontSize: 12, color: '#808080'}}>
                  Đa dạng chương trình
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 0.5,
                width: '80%',
                marginHorizontal: 30,
                backgroundColor: 'gray',
                marginTop: 10,
              }}
            />
            <View
              style={{
                marginHorizontal: 30,
                marginTop: 15,
                flexDirection: 'row',
              }}>
              <Icon style={{marginTop: 3}} name="dollar" size={30} />
              <View style={{marginLeft: 20}}>
                <Text style={{fontSize: 14}}>Tăng thu nhập 10tr/tháng</Text>
                <Text style={{fontSize: 12, color: '#808080'}}>
                  Đa dạng chương trình
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 0.5,
                width: '80%',
                marginHorizontal: 30,
                backgroundColor: 'gray',
                marginTop: 10,
              }}
            />
            <View
              style={{
                marginHorizontal: 30,
                marginTop: 15,
                flexDirection: 'row',
              }}>
              <Icon style={{marginTop: 3}} name="dollar" size={30} />
              <View style={{marginLeft: 20}}>
                <Text style={{fontSize: 14}}>Tăng thu nhập 10tr/tháng</Text>
                <Text style={{fontSize: 12, color: '#808080'}}>
                  Đa dạng chương trình
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: '75%',
                height: 35,
                justifyContent: 'center',
                borderWidth: 0.5,
                borderRadius: 10,
                margin: 30,
                marginHorizontal: 55,
              }}>
              <Icon style={{margin: 5}} name="headphones" size={25} />
              <Text style={{margin: 7}}>Liên hệ: 1800 000663</Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  itemmodal: {
    width: 60,
    height: 60,
    backgroundColor: 'gray',
    margin: 20,
    borderRadius: 15,
  },
  itemgt: {
    backgroundColor: '#FFFFFF',
    width: 130,
    height: 300,
    marginHorizontal: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    marginTop: 15,
  },
  txt: {fontWeight: 'bold', fontSize: 13, margin: 5},
  rowitemc: {
    width: 170,
    height: 50,
    backgroundColor: 'skyblue',
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
  },
  rowitem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    //backgroundColor: 'gray',
    width: 352,
    height: 175,
    marginHorizontal: 15,
    marginTop: 15,
  },
  container: {
    flex: 1,
  },
  txtTop: {
    marginTop: 40,
  },
  cpTop: {
    backgroundColor: '#FFFFFF',
    flex: 1.4 / 10,
    margin: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 1.5,
  },
  icon: {
    margin: 8,
    //marginLeft: 20,
  },
  vsh: {
    flex: 3 / 10,
    backgroundColor: 'gray',
    borderRadius: 10,
    marginHorizontal: 15,
  },
  imgscroll: {
    //backgroundColor: 'red',
    height: 150,
    width: 354,
    borderRadius: 10,
  },
});
