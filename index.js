function index () {
	const n = 1000;
	let string = '';
	for (let i = 1; i <= n; i++) {
		string = i.toString();
		// if n is divisble by 3, make the string read fizz, if not, just read the number
		string = i % 3 == 0 ? 'fizz' : string;
		// if n is divisible by 3 and 5, add buzz onto the string, if not, only make it buzz
		string = i % 5 == 0 ? i % 3 == 0 ? string + 'buzz' : 'buzz' : string;
		console.log(string);
	}
}

index();