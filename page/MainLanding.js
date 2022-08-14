import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


function MainLanding({navigation}) {
  return (
    <View style={styles.container}>
      <Text> 랜딩페이지입니다. </Text>
      <View style={styles.footer}>
        <Button
          style={styles.footerBtn}
          title="로그아웃"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          style={styles.footerBtn}
          title="컨텐츠 화면으로"
          onPress={() => navigation.navigate('ContentLanding')}
        />
        <Button
          style={styles.footerBtn}
          title="프로필 화면으로"
          onPress={() => navigation.navigate('Profile')}
        />
        <Button
          style={styles.footerBtn}
          title="채팅 페이지"
          onPress={() => navigation.navigate('Chatting')}
        />
      </View>
    </View>
  );
}

export default MainLanding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerBtn: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginLeft: 30,
    marginBottom: 40,
    margin: 5,
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
  },
  footer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    padding: 20,
    margin: 10,
    backgroundColor: 'powderblue',
  },
});
