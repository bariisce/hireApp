import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from './Button.style'

import Icon from '@expo/vector-icons/MaterialCommunityIcons'

const Button = ({ title, onPress, icon }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text><Icon style={styles.icon} name={icon} size={15}/></Text>
            <Text style={styles.name}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;