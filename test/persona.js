'use stricts'

const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = require('chai').expect
const fs = require('fs')

chai.use(chaiHttp);

const url = 'http://localhost:3700/api';

describe('POST una persona : ', () => {
    it('Deberia ingresar la visita', (done) => {
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
                expect(res).to.have.status(200);
                done();
            });
    });
});
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
describe('PUT foto de una persona: ', () => {
    it('Deberia ingresar la foto de una persona', (done) => {
        chai.request(url)
            .post('/persona/5cf5b43c92c70c03cd240ca5/foto')
            .attach('image', fs.readFileSync('./test/fotos/99999999.jpg'), '99999999.jpg')
            .send()
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
});
describe('GET todas las personas: ', () => {
    it('Deberia traer todos las personas', (done) => {
        chai.request(url)
            .get('/persona/')
            .end(function (err, res) {
                //console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});
describe('GET la persona con id 5cf5b47b92c70c03cd240cc3: ', () => {
    it('Deberia traer la persona con id 5cf5b47b92c70c03cd240cc3', (done) => {
        chai.request(url)
            .get('/persona/5cf5b47b92c70c03cd240cc3')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
});
describe('DELETE la persona con id : ', () => {
    it('Deberia traer todos las personas', (done) => {
        chai.request(url)
            .delete('/persona/5cf5b43c92c70c03cd240ca5')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
});