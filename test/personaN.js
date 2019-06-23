'use stricts'

const chai = require('chai')
const chaiHttp = require('chai-http')
const fetch = require('node-fetch')
const expect = require('chai').expect
const fs = require('fs')

chai.use(chaiHttp);

let resultadoId

const url = 'http://localhost:3700/api';

describe('POST una persona : ', () => {
    it('Deberia ingresar la visita', async (done) => {
        chai.request(url)
            .post('/persona')
            .send({
                dni: '99999999',
                nombre: "TEST Nombre",
                apellido: "TEST Apellido",
                email: "test@test.com",
                genero: 'M',
                fechaNac: '1990-01-01',
                activo: true,
                image: null
            })
            .end(function (err, res) {
                resultadoId = res.body.persona._id
                expect(res.statusCode).to.be.equal(200);
                expect(res).to.have.status(200);
                done();
            });
    });
});
console.log(resultadoId)

describe('UPDATE una persona con id 5cf5b43c92c70c03cd240ca5: ', () => {
    it('Deberia actualizar la persona', (done) => {
        chai.request(url)
            .put('/persona/5cf5b43c92c70c03cd240ca5')
            .send({
                dni: "28032177",
                nombre: "Juan",
                apellido: "Per",
                email: 'mfernandez@testss.com',
                genero: "M",
                fechaNac: "1981-03-12",
                activo: true,
                image: "JXbtjTiutYLxd0rmEi9akE-Z.png"
            })
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
});