import { Platform, StyleSheet } from 'react-native'
import { Colors } from '../../Theme'

export default StyleSheet.create({
  blend: {
    backgroundColor: Colors.white,
  },

  container: {
    backgroundColor: Colors.stripe,
  },

  divider: {
    marginHorizontal: 5,
  },

  image: {
    height: Platform.OS === 'android' ? 240 : 270,
  },

  information: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },

  informationItem: {
    bottom: 0,
    color: Colors.icon,
    textTransform: 'uppercase',
  },

  largerImage: {
    height: 340,
  },

  primaryInformationItem: {
    color: Colors.primary,
  },
})
