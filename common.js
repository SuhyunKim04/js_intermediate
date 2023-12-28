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

function Item(title, price){
    this.title = title;
    this.price = price;
    this.showPrice = function(){
        console.log(`가격은 ${price} 원 입니다.`)
    }
    //return this;
}
const item1 = new Item('인형', 3000);
const item2 = new Item('가방', 4000);
const item3 = new Item('지갑', 8000);
console.log(item1, item2, item3);
item3.showPrice();
//생성자 함수는 까먹지말고 new를 붙여줘야함



//Computed property(계산된 프로퍼디)
let a = 'age';
const user = {
    name: 'Mike',
    [a]: 30 //age: 30
}

const users = {
    [1 + 4]: 5,
    ['안녕' + '하세요']: "Hello"
}

users();