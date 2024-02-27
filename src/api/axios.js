/* eslint-disable no-unused-vars */
import axios from 'axios'

const API_URL = 'https://tiktok.fullstack.edu.vn/api/'

const request = axios.create({
	baseURL: API_URL,
})

export const get = async(path, option = {}) =>{
	const res = await request.get(path, option)
	return res.data
}

export default request



