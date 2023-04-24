//Returns true or false depending on whether passed-in collection is an object or not
function checkIfObject(collection) {
    return (typeof collection === "object");
}

function myEach(collection, callback) {
    if (checkIfObject(collection)) {
        let convertedObject = Object.values(collection);
        for (let element of convertedObject) {
            callback(element);
        }
    } else {
        for (let element of collection) {
            callback(element);
        }
    }
    return collection;
}

function myMap(collection, callback) {
    let newCollection = []
    if (checkIfObject(collection)) {
        let convertedObject = Object.values(collection);
        for (let element of convertedObject) {
            newCollection.push(callback(element));
        }
    } else {
        for (let element of collection) {
            newCollection.push(callback(element));
        }
    }
    return newCollection;        
}

function myReduce(collection, callback, acc) {
    if (checkIfObject(collection)) {
        let convertedObject = Object.values(collection);
        return reduceDependingOnAcc(convertedObject, callback, acc);
    } else {
        return reduceDependingOnAcc(collection, callback, acc);
    }
}

//Dictates reducing behavior based on presence of accumulator value when function is called
function reduceDependingOnAcc(collection, callback, acc) {
    let value = acc;
    if (acc === undefined) {
        value = collection[0];
        for (let i=1; i < collection.length; i++) {
            value = callback(value, collection[i], collection);
        }

    } else {
        for (const element of collection) {
            value = callback(value, element, collection);
        }
    }
    return value;
}

function myFind(collection, callback) {
    for (const element of collection) {
        if (callback(element)) {
            return element;
        } 
    }
    return undefined;
}

function myFilter(collection, callback) {
    const array = [];
    if (checkIfObject(collection)) {
        let convertedObject = Object.values(collection);
        for (const element of convertedObject) {
            if (callback(element)) {
                array.push(element);
            }
        }
    } else {
        for (const element of collection) {
            if (callback(element)) {
                array.push(element);
            }
        }
    }
    return array;
}

function mySize(collection) {
    let count = 0;
    if (checkIfObject(collection)) {
        let convertedObject = Object.values(collection);
        for (const element of convertedObject) {
            count++;
        }
    } else {
        for(const element of collection) {
            count++;
        }
    }
    return count;
}

function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    } else {
        let newArray = [];
        for (let i=0; i < n; i++) {
            newArray.push(array[i])
        }
        return newArray;
    }
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length-1];    
    } else {
        const newArray = array.slice(-n);
        return newArray;
    }
}

function myKeys(object) {
    let arrayOfKeys = Object.keys(object);
    return arrayOfKeys;
}

function myValues(object) {
    let arrayOfValues = Object.values(object);
    return arrayOfValues;
}