function removeDuplicates(arr) {
    return [...new Set(arr)];
}

const arr1 = removeDuplicates(['html', 'css', 'html', 'js']);
const arr2 = removeDuplicates(['html', 'css', 'js', 'html', 'js', 'python', 'js', 'scss']);

document.write(`<h1>${arr1}</h1></h1>`)
document.write(`<h1>${arr2}</h1></h1>`)

