import {StyleSheet} from 'react-native';
import colors from '../../config/colors';
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  image: {
    marginTop: 10,
    marginBottom: 10,
    left: 140,
    height: 140,
    width: 100,
    borderRadius: 5,
    backgroundColor: colors.offWhite,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'stretch',
  },
  detailsContainer: {paddingLeft: 20, paddingTop: 20},
  title: {
    marginBottom: 7,
    fontSize: 15,
    fontWeight: '700',
  },
  subTitle: {
    color: colors.secondary,
  },
});
export default styles;
