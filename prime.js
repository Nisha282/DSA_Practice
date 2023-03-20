// function prime(){
// var n,  i, flag = true;

// for( i = 2; i <= n - 1; i++)
//     if (n % i == 0) {
//         flag = false;
//      return i
//     }
     
// if (flag == true){
//    return 1
// }
// }

// console.log(prime(12))

function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(12))