'use stricts'

const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = require('chai').expect
const fs = require('fs')

chai.use(chaiHttp);

const url = 'http://localhost:3700/api';


describe('POST una empresa: ', () => {
    it('Deberia ingresar una empresa', (done) => {
        chai.request(url)
            .post('/empresa')
            .send({
                cuit: '99999999999',
                nombre: 'TEST Nombre S.A.',
                email: 'empresa@test.com',
                piso: 'X',
                oficina: 'XXX',
                activa: true               
            })
            .end(function (err, res) {
                //console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe('GET todas las empresas: ', () => {
    it('Deberia traer todos las empresas', (done) => {
        chai.request(url)
            .get('/empresa/listar')
            .end(function (err, res) {
                //console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe('GET la empresa con id 5cf853ee0df6935975621380: ', () => {
    it('Deberia traer la empresa con id 5cf853ee0df6935975621380', (done) => {
        chai.request(url)
            .get('/empresa/5cf853ee0df6935975621380')
            .end(function (err, res) {
                //console.log(res.body)
                expect(res.body).to.have.property('_id').to.be.equal('5cf853ee0df6935975621380');
                expect(res).to.have.status(200);
                done();
            });
    });
});