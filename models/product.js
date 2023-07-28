const path = require('path');
const fs = require('fs');

const products = [];

module.exports = class product {
    constructor(title){
        this.title=title;
    }

    save(){
        products.push(this)
        const p = path.join(path.dirname(process.mainModule.filename),'data','products.json')
        fs.readFile(p, (err, data)=>{
            let products = [];
            if(!err){
                products = JSON.parse(data)
            }
            products.push(this);
            fs.writeFile(p,JSON.stringify(data), err=>{
                console.log(err)
            })
        })
    }

    static fetchAll(cb){
        const p = path.join(path.dirname(process.mainModule.filename),'data','products.json')
        fs.readFile(p,(err,data)=>{
            if(err){
                cb([])
            }
            cb(JSON.parse(data))
        })
    }
}