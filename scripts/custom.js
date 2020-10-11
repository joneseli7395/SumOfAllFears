document.getElementById("sumBtn").addEventListener('click', function () {
    let input1 = parseInt(document.getElementById("input1").value);
    let input2 = parseInt(document.getElementById("input2").value);
    let input3 = parseInt(document.getElementById("input3").value);
    let input4 = parseInt(document.getElementById("input4").value);
    let input5 = parseInt(document.getElementById("input5").value);
    let kValue = parseInt(document.getElementById("kValue").value);

    //Take inputs and collect in array

    let sumArray = [input1, input2, input3, input4, input5];
    //Searching vs forward searching 
    for (let i = 0; i < sumArray.length; i++) {
        for (let s = 0; s < sumArray.length; s++) {
            if (sumArray[i] + sumArray[s] === kValue) {
                document.getElementById("output").innerHTML = "Success!";
                document.getElementById("numSum").innerHTML = `${sumArray[i]} + ${sumArray[s]} = ${kValue}`;
            }
        }
    }
})



//let arrayLength = parseInt(Math.random() * 10); //Not 10 
//    let myArray = new Array(arrayLength);
//    for (let i = 0; i < arrayLength; i++) {
//        myArray.push(parseInt(Math.random() * 10))
//    }

document.getElementById("input1").addEventListener('keydown', function (evt) {

    var character = (evt.which) ? evt.which : evt.keycode;
    if (character >= 48 && character <= 57 ||
        character === 8 || character === 9) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
})

document.getElementById("input2").addEventListener('keydown', function (evt) {

    var character = (evt.which) ? evt.which : evt.keycode;
    if (character >= 48 && character <= 57 ||
        character === 8 || character === 9) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
})

document.getElementById("input3").addEventListener('keydown', function (evt) {

    var character = (evt.which) ? evt.which : evt.keycode;
    if (character >= 48 && character <= 57 ||
        character === 8 || character === 9) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
})

document.getElementById("input4").addEventListener('keydown', function (evt) {

    var character = (evt.which) ? evt.which : evt.keycode;
    if (character >= 48 && character <= 57 ||
        character === 8 || character === 9) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
})

document.getElementById("input5").addEventListener('keydown', function (evt) {

    var character = (evt.which) ? evt.which : evt.keycode;
    if (character >= 48 && character <= 57 ||
        character === 8 || character === 9) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
})

document.getElementById("kValue").addEventListener('keydown', function (evt) {

    var character = (evt.which) ? evt.which : evt.keycode;
    if (character >= 48 && character <= 57 ||
        character === 8 || character === 9) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
})

//document.querySelectorAll(".inputs").forEach( => {
//    .addEventListener('keydown', function (evt) {

//        var character = (evt.which) ? evt.which : evt.keycode;
//        if (character >= 48 && character <= 57 ||
//            character === 8 || character === 9) {
//            return true;
//        }
//        else {
//            evt.preventDefault();
//            return false;
//        }

//    })
//}