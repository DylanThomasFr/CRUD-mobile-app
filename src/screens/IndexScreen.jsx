import {FlatList, Button, TouchableOpacity, StyleSheet} from 'react-native'
import {useContext} from "react"
import {Context as BlogContext} from "../store/providers/BlogProvider"
import {Feather} from "@expo/vector-icons"
import Post from "../components/Post";

const IndexScreen = (props) => {
    const {posts, removeBlogPost} = useContext(BlogContext)
    return (
        <>
            <FlatList
                data={posts}
                keyExtractor={post => post.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => props.navigation.navigate('Show', { id: item.id })}>
                            <Post
                                post={item}
                                onDelete={removeBlogPost}
                            />
                        </TouchableOpacity>
                    )
                }}
            />
        </>
    )
}

IndexScreen.navigationOptions = (props) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => props.navigation.navigate('Form')}>
                <Feather style={styles.iconStyle} name="plus" size={30}/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        marginRight: 10
    }
})

export default IndexScreen
