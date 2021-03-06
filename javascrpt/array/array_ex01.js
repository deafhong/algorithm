let _ = require('underscore');

// 배열 생성하고 값 넣어보기 (무작위)
let arr = [],
    arr1 = [];

for (let i = 0; i < 10; i++) {
    arr.push(parseInt(Math.random() * 10));
    arr1.push(parseInt(Math.random() * 10));
}

console.log('step 01 : ', arr);

// 배열에 값 추가/삭제 해보기
arr.push(100);
console.log('step 02 : ', arr);
arr.pop();
console.log('step 03-1 : ', arr);
arr.splice(2, 1);
console.log('step 03-2 : ', arr);

// 배열내의 값을 바꿔치기 해보기
// arr.splice(0, 0, arr.splice(9, 1)[0]);
let swap = (arr, i, j) => {
    let a = arr[i]; arr[i] = arr[j]; arr[j] = a;
    return arr;
}
console.log('step 04 : ', swap(arr, 0, arr.length - 1));

// 배열을 오름차순 혹은 내림차순으로 정렬해보기
console.log('step 05 : ', arr.sort((a, b) => {
    return a - b;
}));
console.log('step 06 : ', arr.sort((a, b) => {
    return b - a;
}));
// console.log('step 05 : ', arr.reverse());

// 배열내에 중복값이 있으면 중복제거해보기
console.log('step 07 : ', arr.reduce((a, b) => {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
}, []));
console.log('arr1 : ', arr1);
console.log('step 07 : ', _.unique(arr1))

// 배열에 특정값이 존재하는지 확인해보기 (정규식)

// 배열의 특정값을 기준으로 오름차순 혹은 내림차순 정렬해보기