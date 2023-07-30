import { StyleSheet } from 'react-native';

export const global = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    height: '100%'
  },
  innerText: {
    color: 'black',
    fontSize: 18,
    width: '100%',
  },
  button: {
    backgroundColor: 'orange',
    color: 'white',
    padding: 10,
    alignItems: 'center',
    borderRadius: 4,
  },
  card: {
    marginBottom: 150,
    backgroundColor: 'beige',
    borderRadius: 4,
    width: '90%',
    padding: 4,
    minHeight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toast: {
    backgroundColor: 'rgba(52, 120, 179,.8)',
    borderRadius: 4,
    position: 'absolute',
    top: 55,
    right: -20,
    width: 350,
    height: 70,
    padding: 20,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
