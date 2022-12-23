const url = 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new';

export const getRandomNumber = async () => {
	const response = await fetch(url);
	const number = await response.json();
	return +number;
}