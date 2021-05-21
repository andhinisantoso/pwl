import React from 'react';
import {View, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, TouchableHighlight, Text, ImageBackground} from 'react-native';
import COLORS from '../assets/components/color';
import {Row, Col, Layout} from 'antd';
import { MaterialIcons } from '@expo/vector-icons';
import categories from '../assets/components/category';

const {Header, Content, Sider} = Layout;

const UserHome = ({navigation}) => {

const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

const ListCategories = () => {
    return (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriesListContainer}>
        {categories.map((category, index) => (
        <TouchableOpacity
        key={index}
        activeOpacity={0.8}
        onPress={() => setSelectedCategoryIndex(index)}>
        <View
        style={{width: 120, marginRight: 10, borderRadius: 30, flex: 1, flexDirection: 'column', justifyContent: "center", height: 35,
        backgroundColor:
            selectedCategoryIndex == index
            ? COLORS.primary
            : COLORS.secondary,
        ...style.categoryBtn,
        }}>
        <Text
        style={{
            fontSize: 15,
            fontWeight: 'bold',
            padding: 15,
            color:
            selectedCategoryIndex == index
                ? COLORS.white
                : COLORS.primary,
        }}>
        {category.name}
        </Text>
        </View>
        </TouchableOpacity>
        ))}
    </ScrollView>
);
};

    return (
        <Layout>
            <Header>
                <View style={style.header}>
                    <View style={{flex: 1, marginRight: 20}}>
                        <Image style={{width: 150, height: 32, flex: 1,}} source={require('../assets/logo.png')}/>
                    </View>
                    <View style={style.inputContainer}>
                        <MaterialIcons name="search" size={28} color={COLORS.dark} />
                        <TextInput
                            style={{flex: 2, fontSize: 18 }}
                            placeholder="Search"
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        paddingHorizontal: 20,
                        flex: 1,
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.5} style={style.icon}>
                            <MaterialIcons name="shopping-cart" size={28} color={COLORS.dark} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.5} style={style.icon}>
                            <MaterialIcons name="shopping-bag" size={28} color={COLORS.dark} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.5} style={style.icon}>
                            <MaterialIcons name="favorite" size={28} color={COLORS.dark} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate('Profile')} >
                            <Image source={require('../assets/feature/dua.jpg')} style={{ height: 32, width: 32, borderRadius: 25}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </Header>


            <Content>
            <View style={style.content}>
            <ListCategories/>
                <Row>
                    <Col span={4}>
                        <TouchableHighlight
                        underlayColor={COLORS.white}
                        activeOpacity={0.9}
                        >
                            <View style={style.card}>
                                <ImageBackground source={require('../assets/feature/tiga.jpg')} style={{minHeight: 120, minWidth: 150}} />

                            <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Nama Produk</Text>
                                <Text style={{ fontSize: 12, color: COLORS.grey, marginTop: 2 }}>Varian Produk</Text>
                            </View>
                            <View
                                style={{
                                marginTop: 10,
                                marginHorizontal: 10,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                                Rp 100.000
                                </Text>
                                <TouchableOpacity >
                                <View style={style.addToCartBtn}>
                                    <MaterialIcons name="add" size={18} color={COLORS.white} />
                                </View>
                                </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </Col>
                </Row>
            </View>
        </Content>
    </Layout>
    );
};

const style = StyleSheet.create({
    header: {
        flex: 1,
        height: '100%',
        backgroundColor: COLORS.white,
        shadowRadius: 5,
        elevation: 10,
        shadowColor: COLORS.grey,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 50,
        paddingVertical: 20,
    },
    textContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between',
    },
    inputContainer: {
        height: 32,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        shadowRadius: 10,
        elevation: 10,
        shadowColor: COLORS.grey,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        flex: 6,
    },
    icon : {
        marginRight: 10,
    },
    content: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        padding: 50,
        marginTop: 50,
    },
    card: {
        height: 220,
        borderRadius: 5,
        elevation: 13,
        backgroundColor: COLORS.white,
        shadowRadius: 5,
        shadowColor: COLORS.grey,
        marginBottom: 30,
        marginRight: 30,
      },
      addToCartBtn: {
        height: 30,
        width: 30,
        borderRadius: 20,
        marginTop: -5,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
      },
      categoriesListContainer: {
        backgroundColor: COLORS.white,
        height: 40,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'left',
        width: '100%',
        marginBottom: 20,
      },

});

export default UserHome;