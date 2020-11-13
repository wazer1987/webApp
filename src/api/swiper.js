import request from '@/utils/request'
export const  getSwiper = (data) => {
    return request({
        url: '/api/swiper',
		method: 'get',
		data
    })
}