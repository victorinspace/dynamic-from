import {publish} from '../lib/pubsub'
import axios from 'axios'

export function getFormElements(id) {
	axios.get(`http://localhost:3001/fields`).then(resp => {
    publish('data', resp.data)
  })
}