import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-7645a-default-rtdb.europe-west1.firebasedatabase.app'
})