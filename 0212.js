// 0212_객체, If문

// 객체(object) : 여러 개의 데이터를 하나로 묶어서 처리할 수 있게 해주는 자료형
// 객체를 만들 때는 중괄호({})를 사용하고, 중괄호 안에 데이터를 콤마(,)로 구분하여 넣는다.

let person = {
    name: "John",
    age: 20,
    isMarried: false
}

// 객체의 속성에 접근하는 두가지 방법
console.log(person.name); // John
console.log(person["name"]); // John


// If문
// If문은 조건문이다. 조건문은 주어진 조건이 참(true)인 경우에만 실행된다.
// If문은 if, else if(선택적), else(선택적, false)
// If문은 앞에서 부터 순차적으로 조건을 검사하고, 참인 경우 해당 블록을 실행하고 종료한다.
// 조건의 범위를 작은것부터 큰것 순으로 나열하면 좋다.

//if(조건문) {}

//문제 1. 유저가 입력하는 숫자가 0인지 음수인지 양수인지 판단하는 프로그램을 만드시오
let number = 2

if(number == 0) {
  console.log("숫자가 0입니다")
} else if (number > 0) { 
  console.log("숫자가 양수입니다")
} else {  //주의) else문에는 조건문이 들어가지 않는다!
    console.log("숫자가 음수입니다")
}

// 문제 2. 나는 대학교 교수다. 레포트 점수에 따라 등급을 매기는 프로그램을 만드시오
// 90~100 : A
// 80~89 : B
// 70~79 : C
// 60~69 : D
// less than 59 : F

let score = 86
let grade = ''

if(90 <= score && score <= 100) {
  console.log("당신의 레포트 점수는", grade = "A" ) 
} else if (80 <= score && score <= 89) {
  console.log("당신의 레포트 점수는", grade = "B" ) 
} else if (70 <= score && score <= 79) {
  console.log("당신의 레포트 점수는", grade = "C" ) 
} else if (60 <= score && score <= 69) {
  console.log("당신의 레포트 점수는", grade = "D" ) 
} else if (0 <= score && score <= 59) {
  console.log("당신의 레포트 점수는", grade = "F")
} else {
  console.log("fail")
}



//문제 3. 한 지원자가 우리 회사에 지원을 했다. 지원자가 사용 가능한 스킬은 배열에 제공이 된다
let skills = ["HTML","CSS","Javascript","React"]
// Javascript와 React 둘 다 할 줄 안다면 “합격” Javascript와 React 둘 중 하나만 할 줄 안다면 “예비”, 
// 두 스킬이 없다면 “탈락” 을 보여주는 프로그램을 짜시오

if(skills.includes("Javascript") && skills.includes("React") ) {
  console.log("합격")
} else if (skills.includes("Javascript") || skills.includes("React")) {
  console.log("예비")
} else {
  console.log("탈락")
}