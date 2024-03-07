let arr = [1, 2, 3] ;
// 요소가 primitive type인 경우는 깊은복사(deep copy)효과
let arr_deep = arr.map(v => v);
let arr_shallow = arr;
let arr_json = JSON.parse(JSON.stringify(arr)) ;

// case1
arr[0] = arr[0] * 100 ;
//case2
arr_deep[0] = arr_deep[0] * 10 ;

console.log("arr = ", arr);
console.log("arr_deep = ", arr_deep);
console.log("arr_shallow = ", arr_shallow);
console.log("arr_json = ", arr_json);

// arr2[0] = arr2[0] * 10 ;
// console.log("arr1 = ", arr1);
// console.log("arr2 = ", arr2);

// arr1 = [[1,2], [3,4]] ;
// // 요소가 reference type인 경우는 얕은복사(shallow copy)효과
// arr2 = arr1.map(v => v) ;

// // 요소가 reference type인 경우는 깊은복사(deep copy)효과
// // JSON.stringify() : 객체를 JSON 문자열로 변환
// // JSON.parse() :  JSON 형식의 문자열을 JavaScript 값이나 객체로 변환
let arr3 = JSON.parse(JSON.stringify(arr)) ;

// arr2[0][1] = arr2[0][1] * 10 ;
// console.log("arr1 = ", arr1);
// console.log("arr2 = ", arr2);
// console.log("arr3 = ", arr3);