import _ from './node_modules/lodash-es/lodash.default.js'

export default {
    add(a, b){
        return a+b;
    },
    test(){
        let arr = [1,2]
        let newArr = _.map(arr, String)
        console.log(newArr);
    }
}