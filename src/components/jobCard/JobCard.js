import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './JobCard.style'

const JobCard = ({ data, onSelect }) => {
    return (
        <TouchableOpacity onPress={onSelect} style={styles.container}>
            <Text style={styles.title} >{data.name.length > 30 ? data.name.slice(0, 30) + '..' : data.name}</Text>
            <Text>{data.company.name}</Text>
            <View style={styles.inner_container} >
                <Text style={styles.location}>{data.locations[0].name}</Text>
            </View>
            <Text style={styles.levels}>{data.levels[0].name}</Text>
        </TouchableOpacity>
    )
}

export default JobCard;