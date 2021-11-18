const chai = require('chai');
const expect = chai.expect;

const calculator = require('../src/calculator');

describe('Calculator', () => {
    describe('Suma', () => {
        it('suma de dos numeros', () => {
            expect(calculator.add(2,4)).to.equal(6);
            expect(calculator.add(4,4)).to.equal(8);
            expect(calculator.add(12,102)).to.equal(114);
            expect(calculator.add(32,30))
                .to.equal(62)
                .to.be.a('number');
        });

        it('suma 14 + 14 = 28', () => {
            expect(calculator.add(14,14))
                .to.equal(28)
                .to.be.a('number');
        });
    });

    describe('Multiplicacion', () => {
        it('mutiplicacion de dos numeros', () => {
            expect(calculator.multiply(2,2)).to.be.equal(4)
            expect(calculator.multiply(3,2)).to.be.equal(6)
            expect(calculator.multiply(1,2)).to.be.equal(2)
            expect(calculator.multiply(90,87)).to.be.equal(7830)
        });
        
    });
    
    
});
