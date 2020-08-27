const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit : 10,
    password : 'NicePassword1',
    user : 'root',
    database : 'thanos',
    host : 'localhost',
    port : '3306'
});


let thanosdb = {};


thanosdb.all = () =>{
    return new Promise((resolve , reject) => {
        pool.query('SELECT * FROM scar', (err,results) =>{
            if(err){
                return reject(err)
            }
        return resolve(results)
        })
    });
}

thanosdb.one = (id) => {
    return new Promise((resolve , reject) => {
    pool.query(`SELECT * FROM scar WHERE idscar = ?`,[id], (err,results) =>{
        if(err){
            return reject(err)
        }
    return resolve(results[0])
    })
});

};

thanosdb.delete = (id) => {
    return new Promise((resolve , reject) => {
    pool.query(`DELETE FROM scar WHERE idscar = ?`,[id], (err,results) =>{
        if(err){
            return reject(err)
        }
    return resolve(results[0])
    })
});

};


thanosdb.update = (id,scarcol) => {
    return new Promise((resolve , reject) => {
    pool.query(`UPDATE scar SET scarcol = ? WHERE idscar = ?`,[scarcol,id],(err,results) =>{
        if(err){
            return reject(err)
        }
    return resolve(results[0])
    })
});

};

thanosdb.post = (id,scarcol,scarcol1,scarcol2) => {
    return new Promise((resolve , reject) => {
    pool.query(`INSERT INTO scar (idscar,scarcol, scarcol1,scarcol2) VALUES (?,?, ?,?)`,[id,scarcol,scarcol1,scarcol2],(err,results) =>{
        if(err){
            return reject(err)
        }
    return resolve(results[0])
    })
});

};




module.exports = thanosdb;