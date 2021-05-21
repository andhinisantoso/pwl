import React from 'react';
import {Text, View, StyleSheet, ImageBackground, Image} from 'react-native';
import {YellowButton} from '../assets/components/button';
import COLORS from '../assets/components/color';
import {Row, Col} from 'antd';

const OnBoard = () => {
    return (
        <View style={style.container}>
            <ImageBackground  style={style.image} source={require('../assets/green.png')}>
                <View style={style.content}>
                    <Row>
                        <Col span={8} offset={2}>
                            <Image style={{width: 300, height: 60}} source={require('../assets/logo.png')}/>
                            <Text style={{fontSize: 42, fontWeight: 'bold', color: COLORS.primary}}>Find Your Needs</Text>
                            <YellowButton title="SHOP NOW"/>
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
    }
});

export default OnBoard;