//자바스크립트 데이터 타입
//기본 타입
let n1 = 10; //정수
let n2 = 10.5; //실수
let s1= "안녕하세요."; //문자열

console.log("정수 : ", n1);
console.log("실수 : ", n2);
console.log("문자열 : ", s1);
//문자열 순회
for(let i in s1){
    console.log("문자열 : ", s1[i]);
}
for(let c of s1){
    console.log("문자열 : ", c);
}


//배열
let arr = ['♠',1,'❤',2,'✌',3];
let arrone =['💋'];
console.log("배열 : ", arr);
console.log("배열의 요소접근 : ", arr[1]);
//배열 순회
for(let i in arr){
    console.log("배열 : ", arr[i]);
}
for(let c of arr){
    console.log("배열 : ", c);
}
//배열 map 함수
console.log("배열 map함수");

let arr2=arr.map((v)=>{
    console.log("map=> v:", v);
    return v + "👍";
});
console.log("arr2",arr2);

//콜백의 인수가 1개인 경우는 ()를 생략 가능
//콜백의 body에 실행문이 없고 return문만 있으면 {}와 return 생략가능
arr2 = arrone.map( v => v + "🤷‍♂️");
console.log("arr4" , arr2);

let arr4 = arrone.map( v => v + "✔");
console.log("arr4" , arr4);

const arr3 = arr.map((v,i)=>{
    console.log("map=> v:", v,"map=> i:", i );
    return v;
});
console.log("arr3",arr3);

//오브젝트
let obj = {'♠':1,'❤':2,'✌':3,}; //끝에 쉼표를 넣어도 오류나지 않음(tailing 쉼표)
console.log("오브젝트 : ", obj);
console.log("오브젝트의 요소접근 : ", obj['♠']);

//오브젝트 순회
for(let i in obj){
    console.log("오브젝트 : ", obj[i]);
}
for(let c of Object.entries(obj)){
    console.log("오브젝트 : ", c);
    console.log("오브젝트키 : ", c[0]);
    console.log("오브젝트값 : ", c[1]);
}
for(let [k,v] of Object.entries(obj)){
    console.log("오브젝트 : ", k);
    console.log("오브젝트 : ", v);
}


