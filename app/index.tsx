import { Text, View, StyleSheet, Pressable, Button } from 'react-native'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'expo-image'

const Index = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          style={{ width: '100%', height: 100 }}
          source={require('../assets/icon.png')}
          contentFit="contain"
        />
        <Text style={styles.title}>coconut</Text>
        <View style={styles.options}>
          <Pressable style={styles.searchButton}>
            <Button
              title="搜索"
              color="white"
              onPress={() => {
                router.push('/search')
              }}
            />
          </Pressable>

          <Button
            title="关于..."
            onPress={() => {
              router.push('/about')
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 75,
    fontWeight: 'bold',
    color: '#636363',
  },
  options: {
    paddingTop: 60,
    fontSize: 30,
  },
  searchButton: {
    width: 200,
    backgroundColor: '#1890ff',
    borderRadius: 10,
    marginBottom: 10,
  },
})

export default Index
