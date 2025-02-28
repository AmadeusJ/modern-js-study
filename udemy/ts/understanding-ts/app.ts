
enum Permission {
  ADMIN,      // 0
  READ_ONLY,  // 1
  AUTHOR,     // 2
}

const person: {
  name: string;
  age: number;
  hobbies: string[];        // array of strings
  role: [number, string];   // tuple
  permission: Permission;
} = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
  permission: Permission.AUTHOR,
};

// Type Alias
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';
// 유니온 타입 (Union Type)
function combine(input1: Combinable, input2: Combinable) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

// 리터럴 타입 (Literal Type)
function combine2(
  input1: Combinable, 
  input2: Combinable, 
  resultConversion: ConversionDescriptor
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
}

const combinedNames = combine2('Max', 'Anna', 'as-text');
console.log(combinedNames);

const combinedAges2 = combine2(30, 26, 'as-number');
console.log(combinedAges2);


// Callback Function
function addAndHandle(a: number, b: number, cb: (num: number) => void) {
  const result = a + b;
  cb(result);
}

const printResult = (num: number) => {
  console.log('Result: ' + num);
};

addAndHandle(10, 20, printResult);

// Never Type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError('An error occurred!', 500);
console.log(result);
