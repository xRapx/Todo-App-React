import * as httpRequest from "./axios";

export const search = async(q, type = 'less') =>{
	const data = await httpRequest.get("users/search",{
		params:{
			q,
			type
		}
	})
	return data.data;
}