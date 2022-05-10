import {createStackNavigator} from "react-navigation-stack"
import {createAppContainer} from "react-navigation"

import IndexScreen from "./src/screens/IndexScreen"
import ShowScreen from "./src/screens/ShowScreen"

import {Provider as BlogProvider} from "./src/store/providers/BlogProvider"
import CreateScreen from "./src/screens/CreateScreen";

const App = createAppContainer(
    createStackNavigator(
        {
            Index: IndexScreen,
            Show: ShowScreen,
            Form: CreateScreen
        },
        {
            initialRouteName: 'Index',
            defaultNavigationOptions: {
                title: 'Skyblog'
            }
        }
    )
)

export default () => {
    return (
        <BlogProvider>
            <App />
        </BlogProvider>
    )
}