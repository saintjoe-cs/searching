load('seqSearch4.js');
load('dispArr.js');
var nums = [];
for (var i = 0; i < 10; ++i) {
  nums[i] = Math.floor(Math.random() * 11);
}

dispArr(nums);
print();
write("Enter a value to search for: ");
var val = parseInt(readline());
if (seqSearch(nums, val)) {
  print("Found element: ");
  print();
  dispArr(nums);
}
else {
  print(val + " is not in array.");
}
