// 0213 switch문, 삼항연산식, 반복문(for문, while문)

// switch문
// case가 값이 하나로 딱 떨어지는 경우에만 사용가능
// 조건을 비교식으로 사용 불가
let score = 30
switch(score) {
  case 50:
    console.log("불합격")
    break;
  case 80:
    console.log("합격")
    break;
  default:
    console.log("??")
}

// 삼항연산식
// 형식) 조건? true일때 : false 일때
// let score = answer >=50? true : "불합격입니다"

// for문은 정확히 몇번 회전해야하는지 범위를 알 때 사용. 배열과 함께쓸때의 궁합이 좋다
// while은 주로 정확한 범위가 아닌 상태에 따른 반복일때 사용된다 ex) true 일때

// 문제1. 1부터 100까지 더하는 for문을 만들고 결과를 출력하시오.
let sum = 0
for(let i = 1; i<=100; i++) {
  sum += i
}
console.log(sum)

// 문제2. 1부터 100까지 홀수만 출력하자.
for(let i = 1; i<=100; i+=2) {
  console.log(i)
}

// 문제3. 1부터 50까지 369결과를 프린트하라.
// 3의 배수가 아님
// 3,6,9 가 하나라도 들어간 숫자일때 '짝'으로 변환
// 포함 개수에 따라 '짝짝'으로 변환
// 포함되지 않으면 원래 숫자 그대로 출력
// toString() 사용하기

for(let i = 1; i<=50; i++) {
  let str = i.toString()  // 숫자 -> 문자열
  let count = 0 // 3,6,9 가 포함되는 개수 카운트

  for (let j = 0; j < str.length; j++) {
    if (str[j] === '3' || str[j] === '6' || str[j] === '9') {
      count+="짝"
    }
  }
  console.log(count.length > 0? count : i)

}

// 다른풀이 찾아보기1
for (let i = 1; i <= 50; i++) {
  let count = (i.toString().match(/[369]/g) || []).length; // 3,6,9 개수 확인

  if (count > 0) {
    console.log("짝".repeat(count)); 
  } else {
    console.log(i); // 3,6,9가 없으면 숫자 그대로 출력
  }
}

// 다른풀이 찾아보기2
for (let i = 1; i <= 50; i++) {
  let count = [...i.toString()].filter(num => num === '3' || num === '6' || num === '9').length;
  console.log(count > 0 ? '짝'.repeat(count) : i);
}




// 문제4. 주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오.
let number = 11

function isPrime(number) {
  if (number < 2) {
    return false // 0, 1은 소수가 아니므로 제외
  }
  for (let i = 2; i <number; i++) {
    if (number % i === 0) { //소수 : 1과 자기자신으로만 나누어지는 수 -> 자기 이외에 숫자로 나누었을때 나머지가 0이면 나누어떨어지는 것이므로 소수가 아님
      return false
    }
  }
  return true
}
console.log(isPrime(number))
