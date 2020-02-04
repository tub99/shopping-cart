const expect = require('chai').expect;
const sinon = require('sinon');
const RiskSvc = require('./../src/riskAssessment');
const Debt = require('./../src/debt')

describe.only('Risk Assessment ', () => {
    let risk;
    beforeEach(() => {
        risk = new RiskSvc();
        debt = new Debt();

    });

    it('should analyze risk for when  customer c1 buys', ()=>{
        expect(risk.analyze(debt, 'c1')).to.equal(true)
    });

    it('should not allow c4 to  buy', ()=>{
        expect(risk.analyze(debt,'c4')).to.equal(false)
    });

    it('should not allow unknown customer to  buy', ()=>{
        expect(risk.analyze(debt, 'unknown')).to.equal(false)
    })
});