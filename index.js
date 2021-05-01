// Your code here
function mapToNegativize(array) {
    let newArr = array.map(num => num * -1);
    return newArr;
}

function mapToNoChange(array) {
    let noChange = array.map(num => num);
    return noChange;
}

function mapToDouble(array) {
    let double = array.map(num => num * 2);
    return double;
}

function mapToSquare(array) {
    let squared = array.map(num => num ** 2);
    return squared;
}

// -------------------------------------------------------------------
function reduceToTotal(array, startingPoint = 0 ) {
    let reducer = (num , currentValue) => num + currentValue;
    return array.reduce(reducer, startingPoint);
}

function reduceToAllTrue(array) {
    for(let a of array){
        if(!a){
            return false; 
        }
    }
    return true;

}

function reduceToAnyTrue(array) {
    for(let a of array){
        if(a){
            return true; 
        }
    }
    return false;

}