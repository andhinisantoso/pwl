import React from 'react';
import {View, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, TouchableHighlight, Text, ImageBackground, ImageBackgroundBase} from 'react-native';
import COLORS from '../assets/components/color';
import {Row, Col, Layout} from 'antd';
import { MaterialIcons } from '@expo/vector-icons';
import { PrimaryButton, SecondaryButton } from '../assets/components/button';

const {Header, Content, Sider} = Layout;

const UserDetailProduct = () => {
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
                <View style={style.image}>
                    <Image style={{width: 500, height: 500}} source={require('../assets/feature/tiga.jpg')}/>
                </View>
                <View style={style.detail}>
                    <View style={style.description}>
                        <View
                            style={{
                            flex: 2,
                            flexDirection: 'column',
                            justifyContent:'space-between',
                            marginBottom: 30,
                        }}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: COLORS.dark, marginBottom: -10 }}>
                            Nama Produk
                            </Text>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: COLORS.dark, marginTop: 2 }}>lorem ipsum</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.dark, marginBottom: -10 }}>Rp 100.000</Text>
                        </View>
                        <View style={style.textInput}>
                            <Text style={{fontWeight:'bold', fontSize: 18}}>Detail</Text>
                        </View>
                        <Text style={style.detailsText}>
                            lorem
                        </Text>
                    </View>
                    <View style={style.button}>
                        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', marginRight: 10}}>
                            <SecondaryButton title="Add to Favorite"/>
                        </View>
                        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                            <PrimaryButton title="Add To Cart" />
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
    },
    content: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        padding: 50,
        marginTop: 50,
        backgroundColor: COLORS.white,
    },
    image: {
        flex: 2,
        flexDirection: "column",
        justifyContent: "center",
        marginRight: 50,
    },
    detail: {
        flex: 3,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: COLORS.white,
        padding: 20,
    },
    description: {
        flex: 4,
        flexDirection: 'column',
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
    }
});

export default UserDetailProduct;