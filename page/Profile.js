import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <Text> This is profile.</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
