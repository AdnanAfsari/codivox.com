export default {
  flex: {
    card: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      borderRadius: 30,
      border: '2px solid rgba(102, 112, 253, 0.05)',
      boxShadow: ' 0px 0px 5px rgba(102, 112, 253, 0.05)',
      '&:hover': {
        cursor: 'pointer',
        border: '2px dashed #6670FD',
        background: 'rgba(244, 245, 255, 0.5)',
        transition: 'all .3s ease-in',
        textDecorationLine: 'underline',
        color: '#5D67EE',
      },
    },
  },
};
