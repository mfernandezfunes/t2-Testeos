'use stricts'

const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = require('chai').expect
const fs = require('fs')

chai.use(chaiHttp);

const url = 'http://localhost:3700/api';

describe('POST una visita con datos erroneos: ', () => {
    it('Deberia NO ingresar una visita con datos erroneos', (done) => {
        chai.request(url)
            .post('/visita')
            .send({
                dni: '99999999',
                nombre: "TEST Nombre",
                apellido: "TEST Apellido",
                genero: 'M',
                fechaNac: '1990-01-01',
                activo: true,
                image: null
            })
            .end(function (err, res) {
                //console.log(res.body)
                expect(res).to.have.status(404);
                done();
            });
    });
});
describe('POST una visita con datos validos: ', () => {
    it('Deberia ingresar una visita con datos validos', (done) => {
        chai.request(url)
            .post('/visita')
            .send({
                idEmpresa: '999999999999999',
                idPersona: '999999999999999',
                fechaEntrada: '2019-01-01T00:00:00',
                fechaSAlida: 'null',
                numeroTarjeta: '0000000000000000000',
                observaciones: 'TEST No posee se puede borrar TEST'
            })
            .end(function (err, res) {
                //console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});
describe('GET todas las visitas cerradas: ', () => {
    it('Deberia traer todos las visitas cerradas', (done) => {
        chai.request(url)
            .get('/visita')
            .end(function (err, res) {
                //console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});
describe('GET todas las visitas abiertas: ', () => {
    it('Deberia traer todos las visitas abiertas', (done) => {
        chai.request(url)
            .get('/visita/open')
            .end(function (err, res) {
                //console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});
/*
describe('GET la visita con id 5cf5b47b92c70c03cd240cc3: ', () => {
    it('Deberia traer la visita con id 5cf5b47b92c70c03cd240cc3', (done) => {
        chai.request(url)
            .get('/visita/5cf5b47b92c70c03cd240cc3')
            .end(function (err, res) {
                //console.log(res.body)
                expect(res.body).to.have.property('_id').to.be.equal('5cf5b47b92c70c03cd240cc3');
                expect(res).to.have.status(200);
                done();
            });
    });
});*/