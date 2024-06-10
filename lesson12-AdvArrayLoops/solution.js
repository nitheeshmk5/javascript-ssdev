// 11o
let arr = ["a", "b", "c", "search", "search"];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == "search") {
    console.log("Found");
  }
}

let result = -1;
for (element of arr) {
  if (element == "search") {
    result = "Found";
  }
}

// 11p

count = 0;
for (elements of arr) {
  if (elements == "search") {
    count += 1;
  }
}

//11q

let arrs = ["a", "b", "c", "dance"];

const findIndex = (word) => {
  res = -1;
  for (index in arrs) {
    if (arrs[index] == word) {
      res = index;
    }
  }
};
