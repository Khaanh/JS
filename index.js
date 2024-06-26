let url = "https://jsonplaceholder.typicode.com/users";

async function getComments(url) {
	let resp = await fetch(url);
	let comment = await resp.json();
}

getComments(url);
