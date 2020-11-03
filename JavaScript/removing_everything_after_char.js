//This algorithm removes everything after specific character in a string

str = 'http://github.com/carbonfive/raygun'

//In this case, it removes everything after ".", so the output would be 'http://github'
str.split('.')[0]