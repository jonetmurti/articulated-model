function main() {
    console.log('hello world!');
}

document.getElementsByTagName('body')[0].onload = () => {
    main();
};