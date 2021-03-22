let wordSet = new Set();

function addWordElement(word) {

    const newLine = document.createElement('li');
    newLine.innerHTML = word;
    return newLine;
}

function checkWordList() {

    document.getElementById('search-result').style.display = "none";

    let word = document.getElementById('search-box').value;

    document.getElementById('search-box').value = "";

    if (wordSet.has(word)) {
        document.getElementById('search-result').style.display = "block";
    } else {
        wordSet.add(word);
        document.getElementById('word-list').appendChild(addWordElement(word));
    }
}