import { colors } from '../../utils/brandColors';
import {StyleSheet} from 'react-native';
const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;

export const styles = StyleSheet.create({
    weatherInfo: {
        alignItems: 'center',
    },

    weatherIcon: {
        width: 100,
        height: 100,
    },

    weatherDescription: {
        textTransform: 'capitalize',
    },
   
    textPrimary: {
        fontSize: 40,
        color: PRIMARY_COLOR,
    },
    texSecondary: {
        fontSize: 20,
        color: SECONDARY_COLOR,
        fontWeight: '500',
        marginTop: 10,
    },
})
