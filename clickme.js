document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('changeButton').addEventListener('click', function() {
        var element = document.getElementById('elementToChange');
        element.style.color = 'blue';
        element.style.fontSize = '24px';
    });
});

