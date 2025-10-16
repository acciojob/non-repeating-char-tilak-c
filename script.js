function firstNonRepeatedChar(str) {
 // Write your code here
	if(str[0]!==str[1]){
		return str[0];
	}
	for(let i=0;i<str.length-1;i++){
		if(str[i-1]!==str[i] and str[i]!==str[i+1]){
			return str[i];
		}
	}
	if(str[str.length-2]!==str[str.length-1]){
		return str[str.length-2];
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
