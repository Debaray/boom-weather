import React from 'react'
import { View, Text } from 'react-native'
import { colors } from '../../utils/brandColors';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
const { HEADER_COLOR ,BORDER_COLOR} = colors;
import {styles} from './HeaderStyle';
export default function Header() {
    return (
        <View style={styles.header}>
             <FontAwesome5 name="cloud-sun-rain" size={45} color={HEADER_COLOR} />
              <Text style={styles.textStye}> Boom Weather</Text>
        </View>
    )
}
