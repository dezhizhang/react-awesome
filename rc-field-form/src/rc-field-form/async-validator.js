
class Schema{
    constructor(descriptor) {
        this.descriptor = descriptor;
    }
    validate(values) {
        debugger
        return new Promise((resolve,reject) => {
            let errorFields = [];
            for(let name in this.descriptor) {
                let value = values[name];
                let rules = this.descriptor[name];
                let ruleKeys = Object.keys(rules);
                let errors = [];
                for(let i=0;i < ruleKeys.length;i++) {
                    let ruleKey = ruleKeys[i];
                    if(ruleKeys[i] === 'required') {
                        if(rules[ruleKey] && !value) {
                            errors.push(`${name} is required`)
                        }
                    }
                }

                if(errors.length > 0) {
                    errorFields.push({name,errors})
                } 
            }
            if(errorFields.length > 0) {
                reject({errorFields,values});
                return
            }
            resolve(values);
        })
    }
}


export default Schema;