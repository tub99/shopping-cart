const Debt = require('./debt');
class RiskAssessment{
    constructor(){
        this.debtSvc = new Debt();
    }

    analyze(riskStrategy, cId){
        console.log(riskStrategy);
       return riskStrategy.analyzeRisk(cId);
    }
}

module.exports = RiskAssessment;