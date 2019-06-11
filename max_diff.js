// find max diff in case min placed before max
const array = [ 8, 4, 9, 9, 15, 3, 1, 10];

const maxDiff = (arr) => {
    let min = arr[0];
    let diff = 0;

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > min && (arr[i] - min) > diff) { 
            diff = arr[i] - min;
        } else if(arr[i] < min) {
            min = arr[i];
        }
    }

    return diff;
}

console.log(maxDiff(array));