import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const LeaderList = (props) => {
    return (
        <View>
            <Text style={styles.header}>{props.stat}</Text>
            <FlatList 
                data={props.list}
                keyExtractor={(item) => item.name}
                renderItem={({item}) => {
                    return(
                    <View style={styles.listRow}>
                        <Text>{item.pos}  </Text>
                        <Text style={styles.rowText}>{item.name}</Text>
                        <Text style={styles.rowText}>{item.stat}</Text>
                    </View>
                    
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        marginVertical: 5,
        fontSize: 20
    },
    listRow: {
        flexDirection: 'row'
    },
    rowText: {
        marginRight: 5,
        width: 150
    }
});

export default LeaderList;