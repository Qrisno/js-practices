let data =  new Map();

let users = [];

data.set('users',[...users]);
let num=0;
class DB{
    
    constructor(){
        this.id = num.toString();
        num++;
    }
    
    create(obj){
        obj['id']=this.id;
        let arr = Object.keys(obj);
        
        if(!arr.includes('name') || typeof obj['name']!=='string'){
            throw new Error('not valid name');
        }else if(!arr.includes('age') || typeof obj['age']!=='number'){
            throw new Error('not valid age');
        }else if(!arr.includes('country') || typeof obj['country']!=='string'){
            throw new Error('not valid country');
        }else if(!arr.includes('salary') || typeof obj['salary']!=='number'){
            throw new Error('not valid salary');
        }
        
        users.push(obj);
        data.set('users',[...users]);
        data.set(this.id,obj);
        return obj['id'];
    }
    read(id){
        if(!data.has(id)){
            throw new Error('You must indicate an id');
        }
        if(typeof id !== 'string'){
            throw new Error('id must be a string');
        }
        if(data.has(id)){
            return data.get(id);
        }else{
            return null;
        }
    }
    readAll(a){
        if(a!==undefined){
            throw new Error('delete the parameter');
        }
        return data.get('users');
    }
    update(a,b){
        if(data.get(id)===undefined){
            throw new Error('Non exsting id ');
        }
        if(typeof a !== 'string'){
            throw new Error('id not type of string');
        }
        if(typeof b !== 'object'){
            throw new Error('b not type of object');
        }
        let ob;
        for(let i of users){
            if(i.hasOwnProperty('id')&& i.id === '0'){
                for(let j=0;j<Object.keys(b).length;j++){
                    i[Object.keys(b)[j]]=Object.values(b)[j];
                }
                
                ob=i;
            }
        }
        return ob;
    }
    delete(id){
        if(!data.get('ids').includes(id)){
            throw new Error('Non exsting id ');
            
        }
        let m = users.indexOf(id);
        users.splice(m,1);
        data.set('users',[...users]);
        data.delete(id);
        return true;
    }
}
const db = new DB();

const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};

const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll();
db.update(id, { age: 22 });







