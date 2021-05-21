import React from 'react';
import categories from '../category';
import {View, TouchableOpacity, StyleSheet, ScrollView, Text} from 'react-native';
import COLORS from '../color';

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

const style = StyleSheet.create({
    categoriesListContainer: {
        backgroundColor: COLORS.white,
        height: 40,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'left',
        width: '100%',
        marginBottom: 20,
    },
})

export default ListCategories;