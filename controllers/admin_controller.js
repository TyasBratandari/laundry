'use strict'

const db = require('../db')

module.exports = {
    index: (req, res) => {
        const sql = 'select * from admin'
        db.query(sql, (err, result) => {
            if (err) throw (err)
            res.json({
                message: "Berhasil",
                data: result
            })
        })
    },
    add: (req, res) => {
        let data = {
            nama: req.body.nama,
            username: req.body.username,
            password: req.body.password
        }
        let sql = "insert into admin SET ?";
        if(data.nama && data.username){
            db.query(sql, data, (err) => {
                if (err){
                    throw err
                }else{
                    res.json({
                        message: "Added succes",
                        data
                    })
                }
            })
        }
    },
    delete: (req, res) => {
        let id = req.params.id;
        let data;
        if(id){
            let sql = "SELECT * from admin where id = ?"
            db.query(sql, [id], (err,result) => {
                if(err){
                    throw err;
                }else{
                    data = result;
                }
            })
        }
        if(id){
            let sql = "DELETE from admin where id = ?";
            db.query(sql, id, (err) => {
                if (err){
                    throw err
                }else{
                    res.json({
                        message: `ID ${id} deleted.`,
                        data: data[0]
                    })
                }
            })
        }
    },
    edit: (req, res) => {
        const id = req.params.id
        let admin = {
            nama: req.body.nama,
            username: req.body.username,
            password: req.body.password
        }
        db.query(`update admin set ? where id = '${id}'`, admin, (err, results) => {
            let response = null
            if (err) {
                response = {
                    message: err.message
                }
            } else {
                res.send({
                    message: "Berhasil Update Data",
                    data: admin
                })
            }
        })
    },
}
