load('dispArr.js');
load('seqSearch.js');
var nums = [];
for (var i = 0; i < 100; ++i) {
  nums[i] = Math.floor(Math.random() * 101);
}

dispArr(nums);
write("Enter a number to search for: ");
var num = parseInt(readline());
print();
if (seqSearch(nums, num)) {
 print(num + " is in the array.");
}
else {
 print(num + " is not in the array.");
}
print();
dispArr(nums);
