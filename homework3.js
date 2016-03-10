/**
 * Created by Brendon Hollingsworth on 3/6/2016.
 */
$(document).ready(function() {
    "use strict";

    function exercise1(arr) {

        var count = arr.length,
          sum = 0;
        arr.forEach(function(val) {
            sum = sum + val;
        });
        return sum / count;
    }

    function exercise2(arr) {
        var max = arr[0];
        arr.forEach(function(val) {
            if (max < val) {
                max = val;
            }
        });
        return max;
    }

    function exercise3(arr) {
        var isEven = false;
        arr.forEach(function(val) {
            if (val % 2 === 0) {
                isEven = true;
            }
        });
        return isEven;
    }

    function exercise4(arr) {
        var evenCount = 0;
        arr.forEach(function(val) {
            if (val % 2 === 0) {
                evenCount++;
            }
        });
        return arr.length === evenCount;
    }

    function arrayContains(arr, str) {
        var arrContains = false;
        arr.forEach(function(val) {
            if (val === str) {
                arrContains = true;
            }
        });
        return arrContains;
    }

    function arrayContainsTwo(arr, str) {
        var arrContains = false;
        var count = 0;
        arr.forEach(function(val) {
            if (val === str) {
                count++;
                if (count >= 2) {
                    arrContains = true;
                }
            }
        });
        return arrContains;
    }

    function arrayContainsThree(arr, str) {
        var arrContains = false;
        var count = 0;
        arr.forEach(function(val) {
            if (val === str) {
                count++;
                if (count >= 3) {
                    arrContains = true;
                }
            }
        });
        return arrContains;
    }

    function arrayContainsNTimes(arr, str, n) {
        var arrContains = false;
        var count = 0;
        arr.forEach(function(val) {
            if (val === str) {
                count++;
                if (count >= n) {
                    arrContains = true;
                }
            }
        });
        return arrContains;
    }


    function underscoreExercise2(arr) {
        return _.max(arr);
    }

    function underscoreExercise3(arr) {
        return _.find(arr, function(num) {
              return num % 2 === 0;
          }) !== undefined;
    }

    function underscoreExercise4(arr) {
        return _.filter(arr, function(num) {
              return num % 2 === 0;
          }).length === arr.length;
    }

    var arr = [1, 1.2, 2, 2, 5, 7.5, 10];
    var strArr = ["foo", "bar", "brendon", "hello", "world", "brendon"];
    var str = "brendon";
    arr.forEach(function(el) {
        $("#arr-contents").append(el + ", ");
    });
    strArr.forEach(function(el) {
        $("#strArr-contents").append(el + ", ");
    });
    $("#find").append(str);
    $("#exercise-1").append(String(exercise1(arr)));
    $("#exercise-2").append(String(exercise2(arr)));
    $("#exercise-3").append(String(exercise3(arr)));
    $("#exercise-4").append(String(exercise4(arr)));
    $("#arr-contains-1").append(String(arrayContains(strArr, str)));
    $("#arr-contains-2").append(String(arrayContainsTwo(strArr, str)));
    $("#arr-contains-3").append(String(arrayContainsThree(strArr, str)));
    $("#arr-contains-n1").append(String(arrayContainsNTimes(strArr, str, 1)));
    $("#arr-contains-n2").append(String(arrayContainsNTimes(strArr, str, 2)));
    $("#arr-contains-n5").append(String(arrayContainsNTimes(strArr, str, 5)));
    $("#underscore-exercise-2").append(String(underscoreExercise2(arr)));
    $("#underscore-exercise-3").append(String(underscoreExercise3(arr)));
    $("#underscore-exercise-4").append(String(underscoreExercise4(arr)));


});