import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(BlogContext)

  useEffect(() => {
    getBlogPosts()
    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts()
    })
    return () => {
      listener.remove()
    }
  }, [])

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => {
          return blogPost.title
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <TouchableOpacity style={{ flex: 5 }} onPress={() => navigation.navigate('Show', { id: item.id })}>
                <View>
                  <Text style={styles.title}>{item.title} - {item.id}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => deleteBlogPost(item.id)}>
                <View>
                  <Feather name="trash" style={styles.icon} />
                </View>
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create')}>
      <Feather name="plus" style={styles.headerIcon} />
    </TouchableOpacity>
  }
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24,
    marginRight: 10
  },
  headerIcon: {
    fontSize: 32,
    marginRight: 20
  }
})

export default IndexScreen;