import createHttp from './BaseService'

const http = createHttp(true)

export const getCurrentUser = () => http.get('/users/me')

export const payment = (data) => http.post('/create-your-shopping-list/checkout', data)
