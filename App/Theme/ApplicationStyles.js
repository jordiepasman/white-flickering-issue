import { Platform, StatusBar } from 'react-native'
import Colors from './Colors'

export default {
  rootContainer: {
    flex: 1,
  },

  darkBackground: {
    backgroundColor: Colors.background,
  },

  whiteBackground: {
    backgroundColor: Colors.white,
  },

  defaultPaddingHorizontal: {
    paddingHorizontal: 20,
  },

  defaultPaddingVertical: {
    paddingVertical: 20,
  },

  defaultPaddingTop: {
    paddingTop: 40,
  },

  defaultMarginBottom: {
    marginBottom: 10,
  },

  opacidBorder: {
    borderBottomWidth: 1,
    borderColor: Colors.opacidBorder,
  },

  fill: {
    width: '100%',
    height: '100%',
  },

  htmlContainer: {
    marginTop: 16,
  },

  flexGrow: {
    flexGrow: 1,
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  selfCenter: {
    alignSelf: 'center',
  },

  fullWidth: {
    width: '100%',
  },

  row: {
    flexDirection: 'row',
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

    headerNotchStyle: {
      height: StatusBar.currentHeight,
      backgroundColor: Colors.background,
      borderBottomWidth: 0,
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
      },
    },

    headerBackTitleStyle: {
      color: Colors.white,
    },

    // Use for background when list bounces on iOS.
    scrollColor: {
      backgroundColor: Colors.background,
      marginTop: -500,
      paddingTop: 500,
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

  modal: {
    closeText: {
      color: Colors.secondary,
    },

    container: {
      flex: 1,
      justifyContent: 'flex-end',
      shadowColor: Colors.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },

    header: {
      alignItems: 'flex-end',
      marginRight: 20,
      marginTop: 12,
    },

    modalBar: {
      alignSelf: 'center',
      backgroundColor: Colors.border,
      borderRadius: 2.5,
      height: 7,
      marginTop: 20,
      width: 60,
    },

    headerWithTitle: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
      marginBottom: 20,
      marginTop: 12,
    },

    item: {
      paddingHorizontal: 20,
      backgroundColor: Colors.lightGrey,
    },

    view: {
      backgroundColor: Colors.white,
      paddingBottom: 30,
      height: Platform.select({ android: '98%', ios: '94%' }),
      width: '100%',
    },
  },
}
