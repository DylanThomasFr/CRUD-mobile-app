import {Text, TextInput, StyleSheet, View, Button} from "react-native"
import {useContext, useEffect, useState} from "react"

import {Context as BlogContext} from "../store/providers/BlogProvider"

export default function CreateScreen(props) {
    const postId = props.navigation.getParam('id')

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [formAction, setFormAction] = useState('Add')

    const { addBlogPost, editBlogPost, posts } = useContext(BlogContext)

    const submitHandler = () => {
        if(title.trim().length === 0 || content.trim().length === 0) {
            return
        }

        if(postId) {
            editBlogPost({
                id: postId,
                title,
                content
            })
        } else {
            addBlogPost({
                title,
                content
            })

        }

        props.navigation.pop()
    }

    useEffect(() => {
        if(postId) {
            const post = posts.find(post => post.id === postId)
            setTitle(post.title)
            setContent(post.content)
            setFormAction('Edit')
        }
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Post form</Text>
            <Text>Enter title :</Text>
            <TextInput
                style={styles.inputStyle}
                placeholder="Title"
                value={title}
                onChangeText={text => setTitle(text)}
            />
            <Text>Enter content :</Text>
            <TextInput
                style={styles.inputStyle}
                placeholder="Content"
                value={content}
                onChangeText={text => setContent(text)}
            />
            <Button
                title={`${formAction} blog post`}
                onPress={submitHandler}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20
    },
    container: {
        margin: 20
    },
    inputStyle: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 15
    }
})