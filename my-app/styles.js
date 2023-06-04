import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: 'orange',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchInput: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
  },
  contactList: {
    flexGrow: 1,
    marginBottom: 20,
  },
  contactContainer: {
    marginTop: 10,
  },
  contactName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  contactPhone: {
    marginLeft: 10,
    fontSize: 14,
    color: '#777',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalPhone: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  dialPadContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  dialButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  dialButton: {
    fontSize: 24,
  },
  contactContainer: {
    marginBottom: 10,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  callIcon: {
    marginLeft: 10,
  },
  addContactContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  addContactInput: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 16,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  addButton: {
    backgroundColor: '#ff0d0d',
    color: '#fff',
    padding: 12,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
