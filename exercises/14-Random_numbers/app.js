function getRandomInt()
{
	let randomNumber = Math.random()*10+1;
	randomNumber = Math.floor(randomNumber);
	return randomNumber;
}


console.log(getRandomInt());
