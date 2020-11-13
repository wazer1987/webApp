import request from '@/utils/request'
export const  getFacation = (data) => {
    return request({
        url: '/api/facation',
		method: 'get',
		data
    })
}