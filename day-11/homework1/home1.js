const get = require('fetch').fetchUrl;
const url = 'https://lab.lectrum.io/geo/api/countries?size=2';
const send = (input) => {
    
    return new Promise((resolve,reject)=>{
        let info = get(input, function(error, meta, body){
            let statusCode= meta.status;
            if(error){
                reject(error)
            } else if (statusCode === 200) {
                const {data} = JSON.parse(body);
                resolve(data);
            } else if (statusCode !==200){
                reject(`We have error, status code: ${statusCode}`)
            }
        })
    });
}
send(url)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });