import createHttp from './BaseService'

const http = createHttp(true)

export const getCurrentUser = () => http.get('/users/me')

export const payment = (data) => http.post('/users/123234234/checkout', data)
