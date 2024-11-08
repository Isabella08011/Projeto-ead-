function mudarCor() {
    const cores = ['lightblue', 'lightgreen', 'lightcoral', 'lightgoldenrodyellow', 'lightpink'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
}