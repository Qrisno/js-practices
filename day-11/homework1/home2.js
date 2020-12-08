

const get = require('fetch').fetchUrl;

class Countries{
    
    constructor(url){
        this.url = url;
    }
    send(number){
        const promise = new Promise((resolve,reject)=>{
            if(typeof number !== 'number'){
                throw new Error(`A parameter isn't a number - typeof ${typeof number}`)
            }
            if(typeof this.url !== 'string'){
                throw new Error(`url must be a String - typeof ${typeof url}`)
            }
            get(this.url+`?size=${number}`, (error, meta, body)=>{
                let statusCode = meta.status;
                if(error){
                    reject(error);
                }
                else if(statusCode === 200) {
                    let {data} = JSON.parse(body);
                    resolve(data);
                } else {
                    reject(`We have error, status code: ${statusCode}`);
                }
            })
        });
        return promise;
    }
}

const url = 'https://lab.lectrum.io/geo/api/countries';
const countries = new Countries(url);

(async() => {
    try {
        const data = await countries.send(2);
        console.log(data); // array of countries
    } catch (error) {
        console.log(error);
    }
})();