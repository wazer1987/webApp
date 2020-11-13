import request from '@/utils/request'
export const  getHotcat = (data) => {
    return request({
        url: '/api/hotcate',
		method: 'get',
		data
    })
}