import { StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    topHeader: {
        flex: .5,
        flexDirection: 'column'
    },
    topHeaderPer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    main: {
        justifyContent: 'center',
        flex: 1.5,
        marginTop:-50
    },
    footer: {
        justifyContent: 'center',
        flex: 1
    }
  
  })