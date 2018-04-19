/**
 * author:XR
 * email:413401168@qq.com
 * Time: 2018/4/19 23:23
 */
let rootUrl='http://xiaoshiyin-react.devbao.cn/mobile_api/'
// directInvest/projects?page=1
let Fetch=(url,type,params)=>{
    let initObj={
        method: type,
        credentials: 'include',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        }),
        body: params
    }

    let promiss=new Promise((resolve, reject)=>{
        fetch(rootUrl+url,initObj).then((response)=> {
               return response.json();
        }).then((response) => resolve({response}),
            (error) => resolve({error}))
    });
    return promiss;
};
export default Fetch