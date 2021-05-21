import React from 'react';
import {Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native';
import {PrimaryButton} from '../assets/components/button';
import COLORS from '../assets/components/color';
import {Row, Col} from 'antd';

const SignIn = () => {
    return (
        <View style={style.container}>
            <ImageBackground  style={style.image} source={require('../assets/blue.png')}>
                <View style={style.content}>
                    <Row>
                        <Col span={12} offset={2}>
                            <Image
                                style={{
                                    width: 310,
                                    height: 60,
                                }}
                                source={require('../assets/logo.png')}
                            />
                            <View style={style.box}>
                                <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center'}}>
                                    SIGN IN
                                </Text>
                            <View style={style.formLogin}>
                                <View style={style.inputContainer}>
                                    <TextInput
                                        style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey }}
                                        placeholder="Username"
                                    />
                                </View>
                                <View style={style.inputContainer}>
                                    <TextInput
                                        style={{ paddingLeft: 10, flex: 2, fontSize: 16 }}
                                        placeholder="Password"
                                    />
                                </View>
                                <PrimaryButton
                                    title="Sign In"
                                />
                            <Text
                                style={{
                                    marginTop: 20,
                                    fontSize: 16,
                                    textAlign: 'center',
                                    color: COLORS.grey,
                                }}>
                                Do you have an Account? <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('SignUp')}><Text style={{ color: COLORS.primary, fontWeight: 'bold', fontSize: 18 }}>Sign Up</Text></TouchableOpacity>
                            </Text>
                            </View>
                        </View>
                    </Col>
                </Row>
            </View>
        </ImageBackground>
    </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "left"
    },
    content: {
        flex: 1,
        justifyContent: "center",
        flexDirection: 'column'
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
      },
      inputContainer: {
        height: 50,
        width: 290,
        marginBottom: 20,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        shadowRadius: 20,
        elevation: 13,
        shadowColor: COLORS.grey,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      box: {
        height: 350,
        width: 350,
        marginTop: 20,
        padding: 20,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        shadowRadius: 10,
        elevation: 13,
        shadowColor: COLORS.grey,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }
});

export default SignIn;