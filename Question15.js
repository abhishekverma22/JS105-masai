let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  let str = "";

  for(i=arr.length-1; i>=0; i--){
    str += arr[i][0] + " ";
  }

  for(i=1; i<arr[0].length; i++){
    str += arr[0][i] + " ";
  }

  for(i=1; i<arr.length; i++){
    str += arr[i][arr[i].length-1] + " ";
  }

  for(i=arr[arr.length-1].length-2; i>0; i--){
    str += arr[arr.length-1][i] + " ";
  }
  console.log(str)