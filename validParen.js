// let s = "[,(,{,},),]"
let s = "()"
var isValid = function(s) {
        let a = 0;
    	        if(s.length == 0) return true;
    	        while(s.length!= a){
    	            a = s.length
    	            s = s.replace("{}", "").replace("()", "").replace("[]", "");
    	        }
    
    	        return s.length == 0;
    	     }
console.log(isValid(s))