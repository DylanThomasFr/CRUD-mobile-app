import axios from "axios"
import {SERVER_URL} from '@env'

export default axios.create({
    baseUrl: SERVER_URL,
})