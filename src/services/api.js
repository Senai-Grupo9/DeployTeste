import axios from 'axios'

export const db = axios.create({
    baseURL: 'http://localhost:5000/api'
})

export const cam = axios.create({
    baseURL: 'https://api.meraki.com/api/v1'
})