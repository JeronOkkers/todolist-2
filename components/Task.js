import React, { useState } from "react";
import { View, Text, StyleSheet, CheckBox,} from 'react-native';
 

const Task = (props) => {
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems:  'center',
        flexWrap: 'wrap', 
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
        
    },
    checkboxContainer: {
        flexDirection: "row",
       
    },
      checkbox: {
        alignSelf: "center",
      },
});

export default Task;