import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  approvalDetailHeaderWrapper: {
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    backgroundColor: '#F8F7F2',
    flexDirection: 'row',
    height: 100,
  },
  approvalDetailHeaderChildLogoWrapper: {
    height: 100,
    justifyContent: 'center',
  },
  approvalDetailHeaderChildLogo: {
    height: 80,
    width: 80,
  },
  approvalDetailHeaderTitle: {
    flexGrow: 1,
    height: 100,
    justifyContent: 'center',
  },
  approvalDetailHeaderStatusIcon: {
    height: 112,
    width: 120,
  },
  approvalNameText: {
    color: '#5E5A59',
    fontSize: 16,
    paddingBottom: 5,
  },
  approvalTypeText: {
    color: '#AFAFAF',
    fontSize: 14,
  }
});

export { styles };
