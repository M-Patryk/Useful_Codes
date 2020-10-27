//Site to generate regExp https://regexr.com/

// First define regExp I want to use
// For example
const re = /(\d)$/; //-- It gets all the nums at the end of a string
str = 'sadasd123'
// Then use it with specific method
// .test returns boolean value -- re.test(string)
// .exec gives found values in an array
// .match gives found value -- string.match(re)
// match().index returns index at which the match starts -- string.match(re).index

//Dla przykladu
str.match(re).index