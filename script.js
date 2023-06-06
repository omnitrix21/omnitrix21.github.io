const dataContainer = document.getElementById('releases');

fetch('database.json')
	.then(res => res.json())
	.then(data => {
		const fragment = document.createDocumentFragment();
		
		for (const device of data) {
			console.log(device);
			const nameHolder = document.createElement('p');
			nameHolder.textContent = 'name : ' + device.Device;
			fragment.appendChild(nameHolder);
		}
		dataContainer.appendChild(fragment)
	});