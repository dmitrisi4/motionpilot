const toggleButton = document.getElementById('toggle-gesture');

toggleButton.addEventListener('click', async () => {
	const [tab] = await chrome?.tabs?.query({ active: true, currentWindow: true });

	chrome?.scripting?.executeScript({
		target: { tabId: tab.id },
		files: ['src/content/index.js']
	});
});