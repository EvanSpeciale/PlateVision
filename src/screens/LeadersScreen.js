import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import LeaderList from '../components/LeaderList';

const leaders = {
    h: [
        {name: 'Charlie Blackmon', stat: 45, pos: 1},
        {name: 'David Fletcher', stat: 40, pos: 2},
        {name: 'Kyle Lewis', stat: 39, pos: 3},
        {name: 'Jose Abreu', stat: 38, pos: 4},
        {name: 'Ketel Marte', stat: 38, pos: 4}
    ],
    rbi: [
        {name: 'Fernando Tatis Jr.', stat: 29, pos: 1},
        {name: 'Jose Abreu', stat: 28, pos: 2},
        {name: 'Nelson Cruz', stat: 27, pos: 3},
        {name: 'Anthony Santander', stat: 27, pos: 3},
        {name: 'Brandon Lowe', stat: 25, pos: 5},
        {name: 'Mike Trout', stat: 25, pos: 5}
    ],
    hr: [
        {name: 'Fernando Tatis Jr.', stat: 12, pos: 1},
        {name: 'Jose Abreu', stat: 11, pos: 2},
        {name: 'Mookie Betts', stat: 11, pos: 2},
        {name: 'Nelson Cruz', stat: 11, pos: 2},
        {name: 'Teoscar Hernandez', stat: 10, pos: 5},
        {name: 'Anthony Santander', stat: 10, pos: 5},
        {name: 'Mike Trout', stat: 10, pos: 5},
        {name: 'Luke Voit', stat: 10, pos: 5},
    ],
    avg: [
        {name: 'DJ LeMahieu', stat: .411, pos: 1},
        {name: 'Charlie Blackmon', stat: .405, pos: 2},
        {name: 'Paul Goldschmidt', stat: .368, pos: 3},
        {name: 'Kyle Lewis', stat: .368, pos: 4},
        {name: 'Donavan Solano', stat: .363, pos: 5}
    ]
}

const LeaderScreen = () => {
    return (
        <View>
            <LeaderList stat='H' list={leaders.h}/>
            <LeaderList stat='RBI' list={leaders.rbi}/>
            <LeaderList stat='HR' list={leaders.hr}/>
            <LeaderList stat='AVG' list={leaders.avg}/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default LeaderScreen;