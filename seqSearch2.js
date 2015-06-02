 function seqSearch(arr, data) {
print('Seq search on array of size ' + arr.length);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] == data) {
print('I found ' + data + ' at ' + i);
      return i;
      }
    }
  return -1;
 }
