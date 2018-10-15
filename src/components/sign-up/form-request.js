import 'whatwg-fetch';


class httpService{
    
   getProducts = () =>{
    let promise = new Promise((resolve,reject) => {
        fetch('http://localhost:3007/product')
        .then(res => {
            resolve(res.json());
        });
    });
    return promise; 
   }
}

export default httpService;