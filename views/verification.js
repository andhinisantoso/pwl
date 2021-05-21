import React from 'react';
import {Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native';
import {PrimaryButton} from '../assets/components/button';
import COLORS from '../assets/components/color';
import {Row, Col} from 'antd';

const Verification = () => {
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
                            <View style={style.formLogin}>
                                <Text style={{fontSize: 18, color: COLORS.grey}}>
                                    Code Verification
                                </Text>
                                <TextInput placeholder="Input Code" style={style.textInput}/>
                                    <PrimaryButton
                                    onPress={() => navigation.navigate('Home')}
                                    title="Verification"
                                    />
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
    textInput: {
        height: 40,
        width: 300,
        borderColor: COLORS.dark,
        borderBottomWidth: 3,
        marginBottom: 20,
      },
      box: {
        height: 200,
        width: 350,
        marginTop: 20,
        padding: 30,
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

export default Verification;