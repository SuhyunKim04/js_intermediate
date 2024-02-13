//변수
//let const var
//var는 한번 선언된 변수를 다시 선언할 수 있다
//var는 선언하기 전에 사용할 수 있다

//호이스팅: 소코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동
//let 과 const 는 TDZ의 영향을 받는다 즉, 할당을 하기전에는 사용할 수 없다


//생성자 함수
// function  User(name, age){
//   this.name=name;
//   this.age=age;
//   this.sayName = function(){
//     console.log(this.name);
//   }
// }

// let user5= new User('Han', 40);

// user5.sayName();

// function Item(title, price){
//     this.title = title;
//     this.price = price;
//     this.showPrice = function(){
//         console.log(`가격은 ${price} 원 입니다.`)
//     }
//     //return this;
// }
// const item1 = new Item('인형', 3000);
// const item2 = new Item('가방', 4000);
// const item3 = new Item('지갑', 8000);
// console.log(item1, item2, item3);
// item3.showPrice();
//생성자 함수는 까먹지말고 new를 붙여줘야함



//Computed property(계산된 프로퍼디)
// let a = 'age';
// const user = {
//     name: 'Mike',
//     [a]: 30 //age: 30
// }

// const users = {
//     [1 + 4]: 5,
//     ['안녕' + '하세요']: "Hello"
// }

//객체에서 사용할 수 있는 몇가지 methods
//Object.assign()
//Object.keys()
//Object.values()
//Object.entries()
//Object.fromEntries()

//Object.assign(): 객체 복제
// const hun = {
//     name : 'Mike',
//     age: 30
// }
//동일하게 복사를 하려면
// const newUser = Object.assign({}, hun);
// { } + {name: 'Mike', age:30} = {name: 'Mike', age: 30}

// Object.assign({gender: 'male'}, hun);
// gender: 'male',
// name: 'Mike',
// age: 30

//만약 key가 같다면
//덮어쓰기

// const user = {
//     name: 'Mike'
// }
// const info1 = {
//     age: 30,
// }

// const info2 = {
//     gender: 'male'
// }

// object.assign(user, info1, info2) : 객체 복제

// const user = {
//     name : 'Mike',
//     age: 30, 
//     gender: 'male',
// }

// Object.keys(user); ["name", "age", "gender"] : 키 배열 반환

// Object.values(user); ["Mike", 30, "male"] : 값 배열 반환

// Object.entries(user); 
// [
//     ["name", "Mike"],
//     ["age", 30 ],
//     ["gender", "male"]
// ] : 키/값 배열 반환

// const arr = [
//     ["name", "Mike"],
//     ["age", 30],
//     ["gender", "male"]
// ];
// Object.fromEntries(arr);

// {
//     name: 'Mike',
//     age: 30,
//     gender: 'male'
// }
// : 키/값 배열을 객체로


// symbol: 유일성 보장
// const id = Symbol('id');
// const user = {
//     name: 'Mike',
//     age: 30,
//     [id]: 'myid'
// }
// {name: "Mike", age: 30, Symbol(id): "myid"}
//Object.keys(user); ['name', 'age']


//Symbol.for(): 전역 심볼
// 하나의 심볼만 보장받을 수 있음
// 없으면 만들고, 있으면 가져오기 때문
// Symbol 함수는 매번 다른 Symbol 값을 생성하지만,
// Symbol.for 매소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유

const id1 = Symbol.for('id');
const id2 = Symbol.for('id')

//숨겨진 Symbol key 보는 법
//const id = Symbol ('id')
// const user = {
//     name: 'Mike',
//     age: 30,
//     [id] : 'myid'
// }

//Object.getOwnPropertySymbols(user);  [Symbol(id)] => Symbol 만 볼 수 있다
//Reflect.ownKeys(user) ["name", "age", Symbol(id)] => Symbol형 키를 포함한 객체의 모든 키를 보여준다

// const user = {
//  name: "Mike",
//  age: 30,
// }

// //내가 작업
// // user.showName = function() {}
// const showName = Symbol('show name');
// user[showName] = function() {
//     console.log(this.name)
// }

// user[showName]();

// //사용자가 접속하면 보는 메세지
// for (let key in user) {
//     console.log(`His ${key} is ${user[key]}.`)
// }


// Number, Math
// toString()
// 10진수 => 2진수/16진수
// let num = 10;
// num.toString(); // "10"
// num.toString(2); // "1010"
// let num2 = 255;
// num2.toString(16);// "ff"


//Math.ceil() :올림
//let num1 = 5.1;
//let num2 = 5.7;



// let n ="name";
// let a = "age";

// const user = {
//     [n]: "Mike",
//     [a]: 30,
//     [1 + 4]: 5,
// };
// : {5: 5, name: "Mike", age: 30}

// function makeObj(key, val){
//     return {
//         [key]: val
//     }
// }

// const obj = makeObj("나이", 33);

// console.log(obj)
// : {나이: 33}

// const obj = makeObj("성별", "male");
// {성별: "male"}

// const user = {
//     name: "Mike",
//     age: 30,
// };

// const user2 = user 
// 이런 식으로 복사하면 안됨 복사하고 싶으먄


// const user2 = Object.assign({}, user);
// console.log(user2)

// 이런식으로 해줘야 값이 바뀌지 않고 복사됨


