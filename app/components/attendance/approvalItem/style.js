import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    approvalItemWrapper: {
    flexDirection: 'row',
    height: 100,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  approvalItemLogo: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 50,
    width: 50,
  },
  approvalItemContent: {
    flexGrow: 1,
    paddingLeft: 10,
  },
  approvalNameText: {
    color: '#323131',
    fontSize: 16,
  },
  approvalTypeText: {
    color: '#9D9D9D',
    fontSize: 14,
    paddingBottom: 10,
    paddingTop: 10,
  },
  approvalStatusText: {
    fontSize: 14,
  },
  approvalTimeText: {
    color: '#9D9D9D',
    fontSize: 12,
  },
});

export { styles };
