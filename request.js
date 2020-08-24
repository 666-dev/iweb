export default {
	const request = (parmas) => {
		const baseUrl = 'http://127.0.0.1:5050/'
		return new Promise((resolve, reject) => {
			uni.request({
				...params,
				withCredentials: true,
				url: baseUrl + parmas.url,
				success: (result) => {
					resolve(result.data)
				},
				fail: (err) => {
					reject(err)
				},
			})
		})
	}
}
