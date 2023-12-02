export function copyToClipboard(text) {
	if (!navigator.clipboard) {
		console.error('Clipboard API not supported');
		return;
	}

	navigator.clipboard
		.writeText(text)
		.then(() => {
			// console.log('Text copied to clipboard:', text);
		})
		.catch((error) => {
			console.error('Failed to copy text to clipboard:', error);
		});
}
