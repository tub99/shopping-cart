const RiskAnalyzerStrategy = require('./riskAnalyzerStrategy');
class Debt extends RiskAnalyzerStrategy{

    constructor(){
        super();
        this.userInfo = {
            'c1': 2,
            'c2': 5,
            'c3': 6,
            'c4': 9
        }
    }

    analyzeRisk(cId){
        console.log('Debt:', this.userInfo[cId]);
        if(this.userInfo[cId] <5) return true;
        else return false;
    }


   
}

module.exports = Debt;