import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    approvalDetailFlowDetailWrapper: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    zIndex: 2,
  },
  approvalDetailFlowIconWrapper: {
    borderColor: '#FAFBFC',
    borderWidth: 5,
  },
  approvalDetailFlowIcon: {
    height: 20,
    width: 20,
  },
  approvalDetailFlowContentWrapper: {
    alignItems: 'center',
    borderColor: '#979797',
    borderRadius: 2,
    borderWidth: 1,
    flexDirection: 'row',
    flexGrow: 1,
    height: 80,
    marginBottom: 20,
    marginLeft: 30,
    marginTop: 20,
    paddingRight: 15,
  },
  approvalDetailFlowContentHeadLogo: {
    height: 45,
    marginLeft: 15,
    marginRight: 15,
    width: 45,
  },
  approvalDetailFlowContent: {
    flexGrow: 1,
  },
  approvalDetailFlowContentName: {
    color: '#5E5A59',
    fontSize: 15,
    lineHeight: 22,
  },
  approvalDetailFlowContentStatus: {
    color: '#84D5BF',
    fontSize: 15,
    lineHeight: 22,
  },
  approvalDetailFlowContentTime: {
    color: '#A7A7A7',
    fontSize: 14,
  }
});

export { styles };