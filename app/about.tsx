import React, { useState } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { Image } from 'expo-image'
import { alert } from '../component/alert'

/**
 * 关于
 * @constructor
 */
const About = () => {
  const [loading, setLoading] = useState(false)

  return (
    <View style={styles.container}>
      <Image
        style={{ width: '100%', height: 80 }}
        source={require('../assets/icon.png')}
        contentFit="contain"
      />
      <Text style={styles.title}>coconut</Text>
      <Text style={styles.subhead}>是一款可在线观看 IPTV 的应用</Text>
      <Text style={styles.subhead}>version 1.0.0</Text>
      <Text style={styles.subhead}>by @ultra2g</Text>
      <View style={styles.checkButton}>
        <Button
          disabled={loading}
          title={loading ? 'fetching...' : '检查更新'}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingTop: 20,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#636363',
  },
  subhead: {
    fontSize: 15,
    color: '#bfbfbf',
    paddingTop: 15,
  },
  checkButton: {
    paddingTop: 20,
  },
})

export default About
