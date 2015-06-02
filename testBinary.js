load('dispArr.js');
load('binSearch.js');
load('insertionSort.js');

var nums = [];
for (var i = 0; i < 100; ++i) {
  nums[i] = Math.floor(Math.random() * 101);
  }
insertionsort(nums);
dispArr(nums);
print();
write("Enter a value to search for: ");
var val = parseInt(readline());
var retVal = binSearch(nums, val);
if (retVal >= 0) {
  print("Found " + val + " at position " + retVal);
}
else {
  print(val + " is not in array.");
}
