import HTTPClient from './HTTPClient';

const loading = (userName, projectName) => {
	return HTTPClient.get(`/repos/${userName}/${projectName}/issues`);
};

export default {
	loading,
};