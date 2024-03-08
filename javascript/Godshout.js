let btn = document.getElementById('btn');
let output = document.getElementById('output');

btn.addEventListener('click', function(){
    var numWords = 32;
    var generatedWords = [];

    fetch('https://www.random.org/integers/?num=' + numWords + '&min=0&max=100000&col=1&base=10&format=plain&rnd=new')
    .then(response => response.text())
    .then(data => {

        var linesArray = data.trim().split('\n');

        fetch('txt/Godshout.txt')
        .then(response => response.text())
        .then(wordsData => {
            var wordsArray = wordsData.split('\n').filter(Boolean);

            for (var i = 0; i < linesArray.length; i++) {
                var randomIndex = parseInt(linesArray[i]) % wordsArray.length;
                var godWords = wordsArray[randomIndex];
                generatedWords.push(godWords);
            }

            output.innerHTML = generatedWords.join(' ');
        })
        .catch(error => console.log('Error fetching words:', error));
    })
    .catch(error => console.log('Error fetching random numbers:', error));
});