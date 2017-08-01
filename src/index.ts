// **** Client side entry point ****

function addHelloWord(elementId: string) {
    const element = document.getElementById(elementId);

    if (element === null) {
        console.error('Can not find element with id ' + elementId);
        return;
    }

    var child = document.createElement('DIV');

    child.innerHTML = 'hello World!';

    child.style.margin = '20px';
    child.style.textAlign = 'center';

    element.appendChild(child);
}


addHelloWord('app');