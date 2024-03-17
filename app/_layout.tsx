import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: '首页' }}
      />
      <Stack.Screen
        name="search"
        options={{ headerShown: true, title: '搜索' }}
      />
      <Stack.Screen
        name="about"
        options={{
          presentation: 'modal',
          title: '关于 coconut',
        }}
      />
    </Stack>
  )
}

export default RootLayout
