import React, {useState} from 'react';
import { View, Text, FlatList, Image, StyleSheet, Picker } from 'react-native';

const PlayerScreen = () => {
    
    const playerData = [
        {season: '2020', team:'CHC'},
        {season: '2019', team:'CHC'},
        {season: '2018', team:'CHC'},
        {season: '2017', team:'CHC'},
        {season: '2016', team:'CHC'},
        {season: '2015', team:'CHC'},
        {season: '2014', team:'CHC'},
        {season: '2013', team:'CHC'},
        {season: '2012', team:'CHC'},
        {season: '2011', team:'SD'},
    ]

    const [ season, setSeason ] = useState('2020');
    return(
        <View>
            <Text style={styles.headerStyle}>Anthony Rizzo</Text>
            <Image source={require('../../assets/rizzo_portrait.jpg')}/>
            <FlatList 
                keyExtractor={(item) => item.season}
                data={playerData} 
                renderItem={({item}) => {
                    return <Text style={styles.listStyle}>{item.season} - {item.team}</Text>;
                }}
            />
            <Picker
                selectedValue={season}
                onValueChange={(itemValue, itemIndex) => setSeason(itemValue)}
            >
                {playerData.map((season) => (
                    <Picker.Item key={season.season} label={season.season} value={season.season} />
                ))}
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 30,
        marginVertical: 5
    },
    listStyle: {
    }
});

export default PlayerScreen;