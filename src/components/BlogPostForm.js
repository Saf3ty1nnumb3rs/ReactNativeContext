import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'

const BlogPostForm = ({ navigation, onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)

  return (
    <View>
      <Text style={styles.text}>Enter Title:</Text>
      <TextInput value={title} onChangeText={text => setTitle(text)} style={styles.input} />
      <Text style={styles.text}>Enter Content:</Text>
      <TextInput value={content} onChangeText={content => setContent(content)} style={styles.input} />
      <Button
        title="Add Blog Post"
        onPress={() => {
          onSubmit(title, content)
        }}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F0EEEE',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    height: 50,
    marginHorizontal: 15,
    marginVertical: 10,
    fontSize: 20,
    padding: 4
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginVertical: 5
  }
})

export default BlogPostForm;