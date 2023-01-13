function wordsToUpperCase(string) {
    //const regex = /[A-z0-9 ]/g;
    // const result = string.match(/[A-z0-9]+/g).map(x=>x.toUpperCase()).join('');
    // console.log(result.split(' ').join(', '));
    console.log(string.match(/[A-z0-9]+/g).join(', ').toUpperCase());
}

wordsToUpperCase('Hi, how are you?');
wordsToUpperCase('hello');
wordsToUpperCase('Functions in JS can be nested, i.e. hold other functions');