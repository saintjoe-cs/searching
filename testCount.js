load('dispArr.js');
load('insertionSort.js');
load('count.js');
load('binSearch.js');

var nums = [];
for (var i = 0; i < 100; ++i) {
  nums[i] = Math.floor(Math.random() * 101);
}
insertionsort(nums);
dispArr(nums);
print();
write("Enter a value to count: ");
var val = parseInt(readline());
var retVal = count(nums, val);
print("Found " + retVal + " occurrences of " + val + ".");
