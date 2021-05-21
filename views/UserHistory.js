import React from 'react';
import {View, StyleSheet, Image, TextInput, TouchableOpacity, TouchableHighlight, Text, ImageBackground, ImageBackgroundBase} from 'react-native';
import COLORS from '../assets/components/color';
import {Layout} from 'antd';
import { MaterialIcons } from '@expo/vector-icons';

const {Header, Content, Sider} = Layout;

const UserHistory = () => {
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
                    <View style={style.cardd}>
                        <View style={style.textDesc}>
                            <Text style={style.text}>Date</Text>
                            <Text style={style.text}>Time</Text>
                            <Text style={style.text}>Total</Text>
                        </View>
                        <View style={style.textData}>
                            <Text style={style.text}>: 12 April 2021</Text>
                            <Text style={style.text}>: 15:00</Text>
                            <Text style={style.text}>: Rp 480.000</Text>
                        </View>
                        <View style={style.actionBtn}>
                            <TouchableOpacity activeOpacity={0.5} style={style.iconContainer}>
                                <MaterialIcons name="arrow-forward-ios" color={COLORS.primary} size={28} />
                            </TouchableOpacity>
                        </View>
                    </View>
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
        flex: 1,
        minHeight: 200,
        flexDirection: "column",
        backgroundColor: COLORS.white,
        padding: 20,
        shadowColor: COLORS.grey,
        marginRight: 30,
    },
    box: {
        height: 100,
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: COLORS.white,
        padding: 20,
        shadowRadius: 10,
        elevation: 10,
        shadowColor: COLORS.grey,
        borderRadius: 10,
    },
    footer: {
        flexDirection: 'column',
        alignItems: 'right',
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
    cardd: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        elevation: 13,
        backgroundColor: COLORS.white,
        shadowRadius: 5,
        shadowColor: COLORS.grey,
        marginBottom: 30,
        marginRight: 30,
        height: 200,
    },
    actionBtn: {
        marginTop: 40,
        width: 50,
        height: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    textDesc: {
        height: 100,
        marginLeft: 10,
        marginTop: 20,
        flex: 1,
      },
      textData: {
        height: 100,
        marginTop: 20,
        flex: 4,
      },
      text: {
        fontWeight: 'bold', 
        fontSize: 16, 
        color: COLORS.primary,
        marginBottom: 10,
      },
});

export default UserHistory;