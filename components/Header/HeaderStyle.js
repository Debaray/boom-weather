import { StyleSheet } from 'react-native';
import { colors } from '../../utils/brandColors';
const { HEADER_COLOR, BORDER_COLOR } = colors;
export const styles = StyleSheet.create({
    header: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: -80,
        borderBottomWidth: 1,
        borderBottomColor: BORDER_COLOR
    },
    textStye: {
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic',
    }
})