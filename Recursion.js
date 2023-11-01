// Product of Nums
function product(arr) {
    if (arr.length === 0) return 1;
    return arr[0] * product(arr.slice(1));
  }
  
  // Longest Word
  function longest(words) {
    if (words.length === 1) return words[0].length;
    const len = words[0].length;
    const rest = longest(words.slice(1));
    return len > rest ? len : rest;
  }
  
  // Every Other Character
  function everyOther(str, index = 0) {
    if (index >= str.length) return '';
    return str[index] + everyOther(str, index + 2);
  }
  
  // Is Palindrome?
  function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
  }
  
  // Find Index
  function findIndex(arr, str, index = 0) {
    if (index >= arr.length) return -1;
    if (arr[index] === str) return index;
    return findIndex(arr, str, index + 1);
  }
  
  // Reverse String
  function revString(str) {
    if (str === '') return '';
    return revString(str.slice(1)) + str[0];
  }
  
  // Gather Strings
  function gatherStrings(obj) {
    let strings = [];
    for (let key in obj) {
      if (typeof obj[key] === 'string') {
        strings.push(obj[key]);
      } else if (typeof obj[key] === 'object') {
        strings = strings.concat(gatherStrings(obj[key]));
      }
    }
    return strings;
  }
  
  // Binary Search
  function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) return binarySearch(arr, target, mid + 1, right);
    return binarySearch(arr, target, left, mid - 1);
  }
  
  // Examples
  console.log(product([2, 3, 4])); // Output: 24
  console.log(longest(["hello", "hi", "hola"])); // Output: 5
  console.log(everyOther("hello")); // Output: "hlo"
  console.log(isPalindrome("tacocat")); // Output: true
  console.log(isPalindrome("tacodog")); // Output: false
  
  let animals = ["duck", "cat", "pony"];
  console.log(findIndex(animals, "cat")); // Output: 1
  console.log(findIndex(animals, "porcupine")); // Output: -1
  
  console.log(revString("porcupine")); // Output: 'enipucrop'
  
  let nestedObj = {
    firstName: "Lester",
    favoriteNumber: 22,
    moreData: {
      lastName: "Testowitz"
    },
    funFacts: {
      moreStuff: {
        anotherNumber: 100,
        deeplyNestedString: {
          almostThere: {
            success: "you made it!"
          }
        }
      },
      favoriteString: "nice!"
    }
  };
  console.log(gatherStrings(nestedObj)); // Output: ["Lester", "Testowitz", "you made it!", "nice!"]
  
  console.log(binarySearch([1,2,3,4],1)); // Output: 0
  console.log(binarySearch([1,2,3,4],3)); // Output: 2
  console.log(binarySearch([1,2,3,4],5)); // Output: -1
  