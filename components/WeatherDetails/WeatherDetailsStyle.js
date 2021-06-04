import {StyleSheet } from 'react-native';
import { colors } from '../../utils/brandColors';
const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;
export const styles = StyleSheet.create({
    weatherDetails: {
        marginTop: 'auto',
        margin: 15,
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        borderRadius: 10,
        flex:1,
        flexDirection:'column'
    },

    weatherDetailsRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    weatherDetailsBox: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
    },
    weatherDetailsItems: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },

    textSecondary: {
        fontSize: 15,
        color: SECONDARY_COLOR,
        fontWeight: '700',
        margin: 7,
    },
})