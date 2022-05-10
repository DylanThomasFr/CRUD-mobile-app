import createDataContext from "../createDataContext"
import jsonServer from "../../api/jsonServer"

const initialState = {
    posts: [],
    addBlogPost: () => {},
    editBlogPost: () => {},
    removeBlogPost: () => {}
}

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'GET' :
            return {
                posts: action.payload
            }
        case 'ADD' :
            return {
                posts: [
                    ...state.posts,
                    {
                        id: Math.floor(Math.random() * 99999),
                        title: action.payload.title,
                        content: action.payload.content
                    }
                ]
            }
        case 'EDIT' :
            return {
                posts: state.posts.map(post => {
                    return post.id === action.payload.id ?
                        action.payload :
                        post
                })
            }
        case 'REMOVE':
            return {
                posts: state.posts.filter(post => post.id !== action.payload)
            }
        default:
            return state
    }
}

const getBlogPosts = dispatch => async () => {
    const response = await jsonServer.get('/blogposts')
    dispatch({type: 'GET', payload: response.data})
}

const addBlogPost = dispatch => async post => {
    await jsonServer.post('/blogposts', post)
    dispatch({type: 'ADD', payload: post})
}

const editBlogPost = dispatch => async post => {
    await jsonServer.put(`/blogposts/${post.id}`, {
        title: post.title,
        content: post.content
    })
    dispatch({type: 'EDIT', payload: post})
}

const removeBlogPost = dispatch => async id => {
    await jsonServer.delete(`/blogposts/${id}`)
    dispatch({type: 'REMOVE', payload: id})
}


const actions = {
    getBlogPosts,
    addBlogPost,
    editBlogPost,
    removeBlogPost
}

export const { Context, Provider } = createDataContext(blogReducer, actions, initialState)