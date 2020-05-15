const assert = require('assert');
const VectorCalculator = require('../app/VectorCalculator')

describe('VectorCalc', () => {
    describe('#sum', () => {
        it('Should sum the vectors', () => {
            let v1 = {x: 4, y: 3}
            let v2 = {x: 1, y: 3}

            assert.deepEqual({x: 5, y: 6}, VectorCalculator.sum(v1,v2) );
        })
    })

    describe('#substract', () => {
        it('Should substract the vectors', () => {
            let v1 = {x: 4, y: 3}
            let v2 = {x: 1, y: 3}

            assert.deepEqual({x: 3, y: 0}, VectorCalculator.sub(v1,v2) );
        })
    })

    describe('#scalar', () => {
        it('Should scale the vector', () => {
            let v1 = {x: 4, y: 3}
            let x = 2

            assert.deepEqual({x: 8, y: 6}, VectorCalculator.scalar(v1,x) );
        })
    })

    describe('#dot', () => {
        it('Should calculate the dot product of the vectors', () => {
            let v1 = {x: 4, y: 3}
            let v2 = {x: 1, y: 3}

            assert.deepEqual(13, VectorCalculator.dot(v1,v2) );
        })
    })
})