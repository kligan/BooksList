import axios from 'axios'

export const getBooks = () => async dispatch => {
    // API POST call using npm axios
        const res = await axios.post(`http://nyx.vima.ekt.gr:3000/api/books`)
        dispatch( {
            type: 'GET_BOOKS',
            arr: res.data.books
        })
}