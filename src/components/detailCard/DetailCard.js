import React from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';

import styles from './DetailCard.style';
import RenderHtml from 'react-native-render-html'

import BUTTON from '../Button';
const JobDetailCard = ({ detail, on_click }) => {

    const width = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Text style={styles.title}>{detail.name}</Text>
                <Text style={styles.heading}>Locations:
                    <Text style={styles.name}> {detail.locations[0].name}</Text>
                </Text>
                <Text style={styles.heading}>Job Level:
                    <Text style={styles.name}> {detail.levels[0].name}</Text>
                </Text>
                <Text style={styles.detail}>Job Detail</Text>
                <View style={styles.contents}>
                    <RenderHtml source={{ html: `${detail.contents}` }} contentWidth={width} />
                </View>
                <View style={styles.buttons}>
                    <BUTTON name='Submit' icon='logout' onSelect={null} />
                    <BUTTON name='Favorite Job' icon='favorite' onSelect={on_click} />
                </View>
            </ScrollView>
        </View>
    );
}

export default JobDetailCard;