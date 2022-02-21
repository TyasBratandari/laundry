'use strict'

const db = require('../db')

module.exports = {
    index: (req, res) => {
        const sql = 'select * from outlet'
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
            alamat: req.body.alamat,
            owner: req.body.owner
        }
        let sql = "insert into outlet SET ?";
        if(data.nama && data.alamat){
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
            let sql = "SELECT * from outlet where id = ?"
            db.query(sql, [id], (err,result) => {
                if(err){
                    throw err;
                }else{
                    data = result;
                }
            })
        }
        if(id){
            let sql = "DELETE from outlet where id = ?";
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
        let outlet = {
            nama: req.body.nama,
            alamat: req.body.alamat,
            owner: req.body.owner
        }
        db.query(`update outlet set ? where id = '${id}'`, outlet, (err, results) => {
            let response = null
            if (err) {
                response = {
                    message: err.message
                }
            } else {
                res.send({
                    message: "Berhasil Update Data",
                    data: outlet
                })
            }
        })
    },
}
