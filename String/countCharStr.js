// Find the number of occurrences of a character in a String

/* int count = 0;

char search = 'a';

for (int i = 0; i < length; i++) {

    if (str.charAt(i) == search) {

        count++;

    }

}

System.out.println(count);*/

function countStr(str){
    let count =0;
    let sreach = "a";

    for(let i=0; i<str.length; i++){
        if(str[i] == sreach){
            count++
        }
    }
    return count

}
console.log(countStr("nisha sahu"))