import React from 'react';
import {View, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, TouchableHighlight, Text, ImageBackground, ImageBackgroundBase} from 'react-native';
import COLORS from '../assets/components/color';
import {Row, Col, Layout} from 'antd';
import { MaterialIcons } from '@expo/vector-icons';
import { PrimaryButton, SecondaryButton } from '../assets/components/button';

const {Header, Content, Sider} = Layout;

const UserProfile = () => {
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
            <View style={{marginBottom: 50}}>
                <Text style={{fontSize: 28, fontWeight: 'bold', color: COLORS.primary}}>Profile User</Text>
                <View style={style.box}>
                        <View style={style.foto}>
                            <Image style={{ height: 300, width: 300}} source={require('../assets/feature/empat.jpg')}/>
                        </View>
                    <View style={style.form}>
                        <View style={style.inputContainerForm}>
                            <View style={{ paddingLeft: 10, flex: 2, height: 40, justifyContent: 'center'}}>
                                <Text style={{fontSize: 16, color: COLORS.grey, }}>Your Name</Text>
                            </View> 
                        </View>
                        <View style={style.inputContainerForm}>
                            <View style={{ paddingLeft: 10, flex: 2, height: 40, justifyContent: 'center'}}>
                                <Text style={{fontSize: 16, color: COLORS.grey, }}>Example@gmail.com</Text>
                            </View> 
                        </View>
                        <View style={style.inputContainerForm}>
                            <View style={{ paddingLeft: 10, flex: 2, height: 40, justifyContent: 'center'}}>
                                <Text style={{fontSize: 16, color: COLORS.grey, }}>088888888</Text>
                            </View> 
                        </View>
                        <View style={style.inputContainerForm}>
                            <View style={{ paddingLeft: 10, flex: 2, height: 40, justifyContent: 'center'}}>
                                <Text style={{fontSize: 16, color: COLORS.grey, }}>Password</Text>
                            </View> 
                        </View>
                        
                        <View style={{marginBottom: 10}}>
                            <PrimaryButton
                                onPress={() => navigation.navigate('Home')}
                                title="Edit"
                            />
                        </View>
                        <View style={{marginBottom: 10}}>
                            <SecondaryButton
                                onPress={() => navigation.navigate('Home')}
                                title="Logout"
                                />
                        </View>
                    </View>
                </View>
                </View>
                <View style={{marginBottom: 50}}>
                <Text style={{fontSize: 28, fontWeight: 'bold', color: COLORS.primary}}>Profile Store</Text>
                <View style={style.box}>
                    <View style={style.form}>
                    <View style={style.inputContainerForm}>
                            <View style={{ paddingLeft: 10, flex: 2, height: 40, justifyContent: 'center'}}>
                                <Text style={{fontSize: 16, color: COLORS.grey, }}>Nama Toko</Text>
                            </View> 
                        </View>
                        <View style={style.inputContainerForm}>
                            <View style={{ paddingLeft: 10, flex: 2, height: 40, justifyContent: 'center'}}>
                                <Text style={{fontSize: 16, color: COLORS.grey, }}>Example@gmail.com</Text>
                            </View> 
                        </View>
                        <View style={style.inputContainerForm}>
                            <View style={{ paddingLeft: 10, flex: 2, height: 40, justifyContent: 'center'}}>
                                <Text style={{fontSize: 16, color: COLORS.grey, }}>088888888</Text>
                            </View> 
                        </View>
                        <View style={style.inputContainerForm}>
                            <View style={{ paddingLeft: 10, flex: 2, height: 40, justifyContent: 'center'}}>
                                <Text style={{fontSize: 16, color: COLORS.grey, }}>Alamat</Text>
                            </View> 
                        </View>
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
        flex: 3,
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
    inputContainerForm: {
        height: 50,
        marginBottom: 20,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        shadowRadius: 10,
        elevation: 13,
        shadowColor: COLORS.grey,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
      },
    icon : {
        marginRight: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        padding: 50,
        marginTop: 50,
        backgroundColor: COLORS.white,
    },
    box: {
        flex: 1,
        padding: 30,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        shadowRadius: 5,
        elevation: 13,
        shadowColor: COLORS.grey,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    form: {
        flex: 2,
        flexDirection: 'column',
    },
    foto: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default UserProfile;