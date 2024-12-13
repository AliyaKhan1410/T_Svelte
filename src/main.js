import App from './App.svelte';  // Import the main App component
import '/styles/index.css';  // Import your CSS styles

const app = new App({
	target: document.getElementById('root'),  // Target the element with id 'root' in the HTML
});

export default app;  // Export the app instance for possible future use
