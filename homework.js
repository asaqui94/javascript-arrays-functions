let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max", "HAS", "PuRple", "dog"]
let matched_name = 'Matched dog_name'
let not_matched = 'No Matches'
function findWords(string,alist){
    for(i=0; i < alist.length; i++){
        if(string.includes(alist[i])){
            console.log(matched_name)
        }else{
            console.log(not_matched)
        }
    }}
console.log(findWords(dog_string, dog_names))

// Question 2
let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if(i%2==0){
            arr.splice(i,1,'even index')
        }
    }
    return arr
}
console.log(replaceEvens(arr))