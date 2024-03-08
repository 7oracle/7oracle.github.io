let btn2 = document.getElementById('btn2');
let output2 = document.getElementById('output2');

btn2.addEventListener('click', function(){
    var numWords = 1;
    var generatedWords = [];

    fetch('https://www.random.org/integers/?num=' + numWords + '&min=0&max=100000&col=1&base=10&format=plain&rnd=new')
    .then(response => response.text())
    .then(data => {

        var linesArray = data.trim().split('\n');

        fetch('txt/KJV.txt')
        .then(response => response.text())
        .then(wordsData => {
            var wordsArray = wordsData.split('\n').filter(Boolean);

            for (var i = 0; i < linesArray.length; i++) {
                var randomIndex = parseInt(linesArray[i]) % wordsArray.length;
                var godVerse = wordsArray[randomIndex];
                generatedWords.push(godVerse);
            }

            output2.innerHTML = generatedWords.join(' ');
        })
        .catch(error => console.log('Error fetching words:', error));
    })
    .catch(error => console.log('Error fetching random numbers:', error));
});
