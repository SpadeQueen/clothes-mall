import originAxios from 'axios'

export default function axios(option){
    return new Promise((resolve,reject)=>{

        const instance = originAxios.create({
			baseURL: 'http://152.136.185.210:7878/api/m5',
			timeout: 5000
		});

        instance.interceptors.request.use(config=>{
            return config;
        });

        instance.interceptors.response.use(response=>{
            return response;
        },err=>{
            if (err && err.response) {
				switch (err.response.status) {
					case 400:
						err.message = '请求错误'
						break
					case 401:
						err.message = '未授权的访问'
						break
				}
			}
			return err;
        });

        instance(option).then(res=>{resolve(res)}).catch(err=>{reject(err)});
    })

}