import axios from 'axios'

export const db = axios.create({
    baseURL: 'https://backfab.azurewebsites.net/api'
})

export const mock = axios.create({
    baseURL: 'https://626a808e737b438c1c496638.mockapi.io'
})

export const cam = axios.create({
    baseURL: 'https://api.meraki.com/api/v1'
})