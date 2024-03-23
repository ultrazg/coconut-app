import { Alert } from 'react-native'

/**
 * show an alert with ok and cancel buttons.
 * @param title
 * @param message
 */
function confirm(title: string, message?: string): Promise<any> {
  return new Promise((resolve, reject) => {
    Alert.alert(title, message, [
      { text: '取消', onPress: reject, style: 'cancel' },
      { text: '确定', onPress: resolve },
    ])
  })
}

/**
 * show an alert.
 * @param title
 * @param message
 */
function alert(title: string, message?: string): void {
  return Alert.alert(title, message)
}

export { confirm, alert }
