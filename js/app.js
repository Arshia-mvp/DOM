let buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
    btn.addEventListener('click' , () => {
        let color = btn.textContent.trim().toLocaleLowerCase();
        switch (color) {
            case 'blue' :
                document.body.style.backgroundColor = 'blue';
            break;
            // blue color
            case 'red' :
                document.body.style.backgroundColor = 'red';
            break;
            // red color
            case 'green' :
                document.body.style.backgroundColor = 'green';
            break;
            // green color
            case 'yellow' :
                document.body.style.backgroundColor = 'yellow';
            break;
            // yellow color
            case 'black' :
                document.body.style.backgroundColor = 'black';
            break;
            // black color
            case 'light' :
                document.body.style.backgroundColor = 'white';
            break;
            // light or (white) color
            case 'purple' :
                document.body.style.backgroundColor = 'purple';
            break;
            // purple color
            case 'pink' :
                document.body.style.backgroundColor = 'pink';
            break;
            // pink color
            case 'palevioletred' :
                document.body.style.backgroundColor = 'palevioletred';
            break;
            // palevioletred color
        }
    });
});