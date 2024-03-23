import React, { useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
} from 'react-native'
import { alert } from '../component/alert'

/**
 * 搜索
 * @constructor
 */
const Search = () => {
  const [keyword, setKeyword] = useState<string>('')

  const onTextChange = (value: any) => {
    setKeyword(value)
  }

  const onSearch = () => {
    alert(keyword)
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchLayout}>
        <TextInput
          style={styles.input}
          placeholder="键入关键词来搜索"
          onChangeText={onTextChange}
          value={keyword}
          clearButtonMode="while-editing"
          enterKeyHint="search"
          onSubmitEditing={onSearch}
        />
      </View>

      <Text style={styles.suggest}>
        搜索建议：中央1号、央视、电影、星空卫视...
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  searchLayout: {
    backgroundColor: '#dfdfdf',
    paddingTop: 5,
    paddingLeft: 15,
    paddingBottom: 5,
    paddingRight: 15,
    borderRadius: 20,
  },
  input: {
    fontSize: 20,
  },
  suggest: {
    marginTop: 10,
    color: '#636363',
  },
})

export default Search
