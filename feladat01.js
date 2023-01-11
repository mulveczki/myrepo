function feladat01(szinek) {
	const n_szinek = szinek.length;

	let sum = 0;

	for (let i = 2; i <= n_szinek; i++)
    	sum += alatt(n_szinek,i);
       
    return sum;
}

function faktor(a) {
	let prod = 1;
    for (let i = 2; i <= a; i++)
    	prod *= i;
    return prod;
}

function alatt(a,b) {
	return faktor(a)/faktor(b)/faktor(a-b);
}