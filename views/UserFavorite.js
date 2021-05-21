import React from 'react';
import {View, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, TouchableHighlight, Text, ImageBackground, ImageBackgroundBase} from 'react-native';
import COLORS from '../assets/components/color';
import {Row, Col, Layout} from 'antd';
import { MaterialIcons } from '@expo/vector-icons';
import { PrimaryButton, SecondaryButton } from '../assets/components/button';

const {Header, Content, Sider} = Layout;

const UserFavorite = () => {
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
                <View style={style.detail}>
                    <TouchableHighlight
                        underlayColor={COLORS.white}
                        activeOpacity={0.9}
                    >
                        <View style={style.card}>
                            <ImageBackground source={require('../assets/feature/tiga.jpg')} style={{minHeight: 120, minWidth: 150}} />
                            <View style={{ flex: 4, marginHorizontal: 10, marginTop: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Nama Produk</Text>
                                <Text style={{ fontSize: 12, color: COLORS.grey, marginTop: 2 }}>Varian Produk</Text>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                                    Rp 100.000
                                </Text>
                            </View>
                            <View style={{flex: 1, flexDirection:'row', justifyContent:'center', alignItems: 'center'}}>
                                <TouchableOpacity activeOpacity={0.8} style={style.iconContainerS}>
                                    <MaterialIcons name="favorite" color={COLORS.primary} size={25} />
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.8} style={style.iconContainer}>
                                    <MaterialIcons name="shopping-cart" color={COLORS.white} size={25} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        padding: 50,
        marginTop: 50,
        backgroundColor: COLORS.white,
    },
    detail: {
        flex: 3,
        minHeight: 500,
        flexDirection: "column",
        backgroundColor: COLORS.white,
        padding: 20,
        shadowColor: COLORS.grey,
        marginRight: 30,
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textInput: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.dark,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        marginBottom: 10,
      },
    detailsText: {
        flex: 4,
        flexDirection: 'row',
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        elevation: 13,
        backgroundColor: COLORS.white,
        shadowRadius: 5,
        shadowColor: COLORS.grey,
        marginBottom: 30,
        marginRight: 30,
    },
    actionBtn: {
        width: 100,
        height: 30,
        borderRadius: 30,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    iconContainerS: {
        backgroundColor: COLORS.secondary,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginRight: 10,
      },
      iconContainer: {
        backgroundColor: COLORS.primary,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginRight: 10,
      },
});

export default UserFavorite;