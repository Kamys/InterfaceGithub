import axios, { AxiosPromise } from 'axios';

const baseURL = 'https://api.github.com';

const instance = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
	},
	timeout: 15 * 1000,
});

function get(apiMethod: string, urlParams: { [key: string]: string | number } = {}): AxiosPromise<any> {
	return instance.get(apiMethod, { params: urlParams });
}

function post(apiMethod: string, body: any = {}): AxiosPromise<any> {
	return instance.post(apiMethod, body);
}

function put(apiMethod: string, body: any = {}): AxiosPromise<any> {
	return instance.put(apiMethod, body);
}

function deleteRequest(apiMethod: string, body?: any): AxiosPromise<any> {
	return instance.delete(apiMethod, { data: body });
}

export default {
	get,
	post,
	put,
	deleteRequest,
};
