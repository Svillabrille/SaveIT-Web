import createHttp from './BaseService'

const http = createHttp(true)

export const createTicket = (data) => http.post('/new-ticket', data)