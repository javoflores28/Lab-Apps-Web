const mongoose = require('mongoose')
const Bicicleta = require('../../models/bicicleta')
const {expect} = require('chai')
const request = require('request')

let base_url = 'http://localhost:3000/api/bicicletas/'

describe('Bicicletas API', () => {

    beforeEach(function(done){
        var mongoDB = 'mongodb://localhost:27017/red_bicicletas'
        mongoose.connect(mongoDB, {useNewUrlParser: true})

        const db = mongoose.connection
        db.on('error', console.error.bind(console, 'connection error'))
        db.once('open', function(){
            //console.log('Connected to the test database')
            done()
        })
    })

    afterEach(function(done){
        Bicicleta.deleteMany({}, function(err, success){
            if(err) console.log(err)
            const db = mongoose.connection
            db.close()
            done()
        })
    })

    describe('GET BICICLETAS /', () => {
        it('Status 200', (done) => {
            request.get(base_url, function(error, response, body) {
                expect(response.statusCode).to.be.eq(200)
                done()
            })
        })
        it('Database should start empty', (done) => {
            request.get(base_url, function(error, response, body) {
                let res = JSON.parse(body)
                let bicis_num = res.bicicletas.length;
                expect(bicis_num).to.be.eq(0)
                done()
            })
        })
    })
    
    describe('POST BICICLETA / create', () => {
        it('Status 200', (done) => {
            let headers = {'content-type' : 'application/json'}
            let aBici = '{"code" : 10, "color": "black", "modelo": "susuki", "lat": -99.13413, "lon": 19.285512}'
            request.post({
                headers: headers,
                url: base_url + 'create',
                body: aBici
            }, (error, response, body) => {
                expect(response.statusCode).to.be.eq(200)
                done()
            })
        })
        it('Posted entity should live in database', (done) => {
            let headers = {'content-type' : 'application/json'}
            let aBici = '{"code" : 5, "color": "blue", "modelo": "bwm", "lat": -94.135312, "lon": 21.2898213}'
            request.post({
                headers: headers,
                url: base_url + 'create',
                body: aBici
            }, (error, response, body) => {
                let bici = JSON.parse(body).bicicleta
                expect(bici.color).to.be.eq('blue')
                expect(bici.ubicacion[0]).to.be.eq(-94.13)
                expect(bici.ubicacion[1]).to.be.eq(21.28)
                done()
            })
        })
    })
})

