import createDataContext from "../createDataContext"

const initialState = {
    posts: [],
    addBlogPost: () => {},
    editBlogPost: () => {},
    removeBlogPost: () => {}
}

const blogReducer = (state, action) => {
    switch (action.type) {
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
const actions = {
    addBlogPost: dispatch => (post) => dispatch({type: 'ADD', payload: post}),
    editBlogPost: dispatch => (post) => dispatch({type: 'EDIT', payload: post}),
    removeBlogPost : dispatch => (id) => dispatch({type: 'REMOVE', payload: id})
}

export const { Context, Provider } = createDataContext(blogReducer, actions, initialState)