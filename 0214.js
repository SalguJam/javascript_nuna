// 0214 함수


// 문제1. 
function greet(){
  console.log("안녕 내 이름은 제시카야")
}

// 문제2. 
function greet(name){
  console.log("안녕 내 이름은",name,"야")
}


// 문제3. 
function greet(name){
  console.log("안녕 내 이름은",name,"야")
  return name
}
const name = greet("mike")
console.log("안녕 내 이름은",name,"이야")



// 문제4. 
// ` ${동적인값}정적인문장 `  ,백틱 사용
// String 문자열 안에 동적인 값을 넣을떄
function meetAt(year, month, date) {

  if (date) {
    return `${year}/${month}/${date}`;
  }
  if (month) {
    return `${year}년 ${month}월`;
  }
  if (year) {
    return `${year}년`;
  }

}

console.log(meetAt(2022,1,7))


// 문제5. 
// findSmallestElement 의 arr 인자는 숫자 값으로만 이루어진 배열
// arr 의 값들 중 가장 작은 값을 리턴
// 만일 arr 가 비어있으면 0을 리턴
function findSmallestElement(arr) {
	let result = arr[0];
	if (arr.length === 0 ) {
		return 0;
	}
  for (let i = 1; i < arr.length; i++) {
		if(result > arr[i]) {
			result = arr[i];
		}
	}
	return result;
}

let smallestNumber = findSmallestElement([100,200,3,0,2,1])
console.log(smallestNumber)



// 문제6. 
let unit = [50000,10000,5000,1000,500,100]
function changeCalculate(money) {
  for(let i=0; i < unit.length; i++) {
    
      let num = Math.floor(money / unit[i])
      console.log(unit[i] + "X" + num)
      money = money - (unit[i]*num)
    
  }
}
changeCalculate(12300)



