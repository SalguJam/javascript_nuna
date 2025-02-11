// 0211_배열

// pop() : 배열의 마지막 요소를 제거
// push() : 배열의 마지막에 요소를 추가
// includes("아이템") : 배열에 특정 요소(아이템)가 포함되어 있는지 없는지 확인 -> true, false
// indexOf("아이템") : 배열에 특정 요소(아이템)가 몇 번째 인덱스에 있는지 확인
// slice(a) : 배열의 a인덱스 이후 값을 모두 지움
// slice(a,b) : 입력한 인덱스(a)부터(포함) 그 이후값 ~ 인텍스(b)이전까지(b 포함안함)을 가져옴
// * slice 는 기존의 배열을 건드리지 않는다! -> 기존 배열을 두고, 새로운 배열을 만들때 유용
// splice(a,b) : 입력한 인덱스(a)부터(시작점) 몇개(b)의 요소를 지움
// length : 배열의 길이를 알려줌

// 주어진 배열을 가지고 다음 질문에 코드를 짜시오
let animals= [
  "Aardvark",
  "Albatross",
  "Alligator",
  "Alpaca",
  "Ant",
  "Ape",
  "Armadillo",
  "Donkey",
  "Baboon",
  "Badger",
  "Barracuda",
  "Bat",
  "Bear",
  "Beaver",
  "Bee",
  "Bison",
  "Cat",
  "Caterpillar",
  "Cattle",
  "Chamois",
  "Cheetah",
  "Chicken",
  "Chimpanzee",
  "Chinchilla",
  "Chough",
  "Clam",
  "Cobra",
  "Cockroach",
  "Cod",
  "Cormorant",
  "Dugong",
  "Dunlin",
  "Eagle",
  "Echidna",
  "Eel",
  "Eland",
  "Elephant",
  "Elk",
  "Emu",
  "Falcon",
  "Ferret",
  "Finch",
  "Fish",
  "Flamingo",
  "Fly",
  "Fox",
  "Frog",
  "Gaur", 
  "Gazelle",
  "Gerbil",
  "Giraffe",
  "Grasshopper",
  "Heron",
  "Herring",
  "Hippopotamus",
  "Hornet",
  "Horse",
  "Kangaroo",
  "Kingfisher",
  "Koala",
  "Kookabura",
  "Moose",
  "Narwhal",
  "Newt",
  "Nightingale",
  "Octopus",
  "Okapi",
  "Opossum", 
  "Quail",
  "Quelea",
  "Quetzal",
  "Rabbit", 
  "Raccoon",
  "Rail",
  "Ram",
  "Rat",
  "Raven",
  "Red deer",
  "Sandpiper",
  "Sardine",
  "Sparrow",
  "Spider",
  "Spoonbill",
  "Squid",
  "Squirrel",
  "Starling",
  "Stingray",
  "Tiger",
  "Toad",
  "Whale",
  "Wildcat",
  "Wolf",
  "Worm",
  "Wren",
  "Yak",
  "Zebra"
]


// 1. 어레이에 마지막 아이템 “Zebra” 제거하기
animals.pop()
console.log(animals)

// 2. 주어진 어레이에 “Dog” 추가하기
animals.push("Dog")
console.log(animals)

// 3. 주어진 어레이에 “Mosquito”,“Mouse”,“Mule” 추가하기
animals.push("Mosquito","Mouse","Mule")
console.log(animals)

// 4. 해당 어레이에는 "Human"이 있는가?
console.log(animals.includes("Human"))

// 5. 해당 어레이에는 “Cat” 이 있는가?
console.log(animals.includes("Cat"))

// 6. "Red deer"을 "Deer"로 바꾸시오
console.log(animals.indexOf("Red deer"))  //77
animals[77] = "Deer"
console.log(animals)

// 7. "Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오
console.log(animals.indexOf("Spider"))  // 81
animals.splice(81,3)
console.log(animals)

// 8. "Tiger"부터 그 이후의 값을 제거하시오 (Tiger 포함임)
console.log(animals.indexOf("Tiger"))  // 84
animals.slice(84)
console.log(animals)

// 9. "B"로 시작되는 아이템인 "Baboon"부터 "Bison"까지 가져와 새로운 어레이에 저장하시오
console.log(animals.indexOf("Baboon"))  // 8
console.log(animals.indexOf("Bison"))  // 15
let newAnimals = animals.slice(8,16)
console.log(newAnimals)

// 정답 : https://hackmd.io/@oW_dDxdsRoSpl0M64Tfg2g/BkyixS9bF

// 오늘의 review

// indexOf()를 이용해서 자꾸 인덱스를 먼저 찾아서 배열을 잘라냈는데, imdexOf("아이템이름")으로 바로 찾아서 사용하는 것도 생각하기
// 예) "Spider"부터 3개의 아이템을 기존 어레이에서 제거
// animals.splice(animals.indexOf("Spider"),3)