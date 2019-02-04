// import 'whatwg-fetch';


// class httpService{
    
//    getProducts = () =>{
//     let promise = new Promise((resolve,reject) => {
//         fetch('http://localhost:3007/product')
//         .then(res => {
//             resolve(res.json());
//         });
//     });
//     return promise; 
//    }
// }

// export default httpService;

import React from 'react';

class Cookies extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value: this.props
        }
    }
    render(){
        return(
            <h1>{this.state.value}</h1>
        )
     }
}
export default Cookies;