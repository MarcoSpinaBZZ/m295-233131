async function simuliereVerzoegerung(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function addiereNachVerzoegerung(a, b, ms) {
    await simuliereVerzoegerung(ms);
    console.log(a + b);
}

// Beispiele:
addiereNachVerzoegerung(1, 2, 1000); // 3
addiereNachVerzoegerung(3, 4, 2000); // 7
addiereNachVerzoegerung(5, 6, 3000); // 11