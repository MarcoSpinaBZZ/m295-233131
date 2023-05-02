function verdoppeln(zahl, callback) {
    zahl = zahl * 2;
    callback(zahl);
}

verdoppeln(5, function (zahl) {
    console.log("Das Ergebnis ist: " + zahl);
}
);


/* Die gleiche Funktion, aber für mehrere Zahlen:

function verdoppeln(zahlen, callback) {
    for (let i = 0; i < zahlen.length; i++) {
        zahlen[i] = zahlen[i] * 2;
    }
    callback(zahlen);
}

verdoppeln([1, 2, 3, 4, 5], function (zahlen) {
    console.log("Das Ergebnis ist: " + zahlen);
}
);

*/