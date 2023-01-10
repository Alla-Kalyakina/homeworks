function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]); 
}

function getUsersNamesInAgeRange(users, gender) {
    return users.filter(user => user.gender === gender).map(ages => ages.age).reduce((acc, item, index, array) => {return acc += item/array.length}, 0);
    }