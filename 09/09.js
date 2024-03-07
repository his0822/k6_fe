//자바스크립트 데이터 타입
//기본 타입
let n1 = 10; //정수
let n2 = 10.5; //실수
let s1= "안녕하세요."; //문자열

console.log("정수 : ", n1);
console.log("실수 : ", n2);
console.log("문자열 : ", s1);

//반복문의 필요성
console.log("문자열 : ", s1[0]);
console.log("문자열 : ", s1[1]);
console.log("문자열 : ", s1[2]);

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

//arr1 만들기
let arr1 =[,]
for (let i in arr){
    arr1[i] = arr[i];
}
console.log("반복문 첨자로 arr1 =", arr1);

//arr2 만들기
let arr5=[];
console.log("arr5 = " , arr5);

//반복문 of 사용
for(let item of arr){
    arr5.push(item);
}
//반복문 in 사용
for(let item in arr){
    arr5.push(arr[item]);
}

console.log("반복문으로 arr5 :", arr5);

//배열 map 함수
console.log("배열 map함수");

let arr2 = arr.map((v)=>{
    console.log("map=> v:", v);
    return v + "👍";
});
console.log("map arr2 : ", arr2);

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

//filter
//isNaN : 숫자가 아닌 타임(Not a Number)
let arr21=[];
for(let item of arr){
    if (!isNaN(item))arr21.push(item);
}
console.log("Filter arr21 = ", arr21);

let arr22 = arr.filter((v) => {
    if(isNaN((v))) console.log(v)
    return isNaN(v)
})
console.log("Filter arr22 = ", arr22);

//전개연산자
let arr222=[...arr];
console.log("전개전산자: ". arr222);


// -------------------------------------
//  map()과 filter()는 배열에만 사용가능
// -------------------------------------

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

let arr3 = Object.keys(obj).map(k=> k + "="+ obj[k]);
}


