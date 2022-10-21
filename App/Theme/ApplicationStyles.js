import { Platform } from 'react-native'
import Colors from './Colors'

export default {
  rootContainer: {
    flex: 1,
  },

  // Navigation:
  navigation: {
    headerTitleStyle: {
      fontSize: 16,
      textTransform: 'uppercase',
      color: Colors.white,
    },

    headerLeftContainerStyle: {
      left: 0,
      paddingLeft: 0,
    },

    headerStyle: {
      height: Platform.OS === 'ios' ? 80 : 60,
      backgroundColor: Colors.background,
      elevation: 0,
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
      },
    },

    headerBackTitleStyle: {
      color: Colors.white,
    },

    tabBar: {
      container: {
        justifyContent: 'center',
        flex: 0,
        alignItems: 'center',
      },

      image: {
        height: 24,
        width: 25,
        marginBottom: 2,
        color: Colors.darkGrey,
      },

      tabBarStyle: {
        height: 75,
        backgroundColor: Colors.background,
        borderTopWidth: 0,
        marginHorizontal: -5,
      },

      text: {
        marginTop: 4.5,
        textTransform: 'uppercase',
      },
    },

    topTabBar: {
      style: {
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
        backgroundColor: Colors.background,
      },
      noPadding: {
        paddingTop: 0,
      },
      tabBarIndicatorStyle: {
        backgroundColor: Colors.primary,
        height: 4,
      },
      tabBarLabelStyle: {
        fontSize: 16,
        textTransform: 'uppercase',
      },
      tabBarStyle: {
        height: 50,
        justifyContent: 'center',
        backgroundColor: Colors.background,
      },
    },
  },
}
