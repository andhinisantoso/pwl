// import React from 'react';
// import {View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
// import COLORS from '../../components/color';
// import {Row, Col} from 'antd';
// import { MaterialIcons } from '@expo/vector-icons';

// const HeaderUser = () => {
//     return (
//         <View style={style.header}>
//                     <View style={{flex: 1, marginRight: 20}}>
//                         <Image style={{width: 150, height: 32, flex: 1,}} source={require('../assets/logo.png')}/>
//                     </View>
//                     <View style={style.inputContainer}>
//                         <MaterialIcons name="search" size={28} color={COLORS.dark} />
//                         <TextInput
//                             style={{flex: 2, fontSize: 18 }}
//                             placeholder="Search"
//                         />
//                     </View>
//                     <View style={{
//                         flexDirection: 'row',
//                         paddingHorizontal: 20,
//                         flex: 1,
//                     }}>
//                         <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.5} style={style.icon}>
//                             <MaterialIcons name="shopping-cart" size={28} color={COLORS.dark} />
//                         </TouchableOpacity>
//                         <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.5} style={style.icon}>
//                             <MaterialIcons name="shopping-bag" size={28} color={COLORS.dark} />
//                         </TouchableOpacity>
//                         <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.5} style={style.icon}>
//                             <MaterialIcons name="favorite" size={28} color={COLORS.dark} />
//                         </TouchableOpacity>
//                         <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate('Profile')} >
//                             <Image source={require('../../feature/dua.jpg')} style={{ height: 32, width: 32, borderRadius: 25}}/>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//     );
// };

// const style = StyleSheet.create({
//     container: {
//         flex: 1,
//         height: '100%',
//         borderColor: COLORS.grey,
//         borderBottomWidth: 2,
//         flexDirection: 'column'
//     },
//     content: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: 'center',
//         flexDirection: 'row',
//     },
//     textContainer: {
//         flex: 1,
//         padding: 20,
//         justifyContent: 'space-between',
//       },
//       inputContainer: {
//         height: 60,
//         borderRadius: 15,
//         backgroundColor: COLORS.white,
//         shadowRadius: 10,
//         elevation: 10,
//         shadowColor: COLORS.grey,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//       },
// });

// export default HeaderUser;