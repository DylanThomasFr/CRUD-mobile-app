import {StyleSheet, Text, TouchableOpacity} from "react-native"
import {useContext} from "react"
import {Context as BlogContext} from "../store/providers/BlogProvider";
import {EvilIcons} from "@expo/vector-icons";

const ShowScreen = (props) => {
    const postId = props.navigation.getParam('id')
    const {posts} = useContext(BlogContext)
    const post = posts.find(post => post.id === postId)
    return (
        <>
            <Text>{post.id}</Text>
            <Text>{post.title}</Text>
            <Text>{post.content}</Text>
        </>
    )
}

ShowScreen.navigationOptions = (props) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => props.navigation.navigate('Form', { id: props.navigation.getParam('id') })}>
                <EvilIcons style={styles.iconStyle} name="pencil" size={30}/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        marginRight: 10
    }
})

export default ShowScreen