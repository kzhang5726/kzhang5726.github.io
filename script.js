


let x = false;

document.getElementById('button').onclick = () => {
    let str = x ? 'Hello There' : 'Secret Message';
    document.getElementById('item').innerHTML = str;
    x = !x;
};