import colors from 'colors';
import checkEnvs from './utils/checkEnvs';

// Clear the console
console.clear();

// Log the environment
console.log(
	colors.yellow('[server.ts] ') +
		colors.cyan('Environment: ') +
		colors.yellow(process.env.NODE_ENV),
);

// Load the environment variables from the .env file (development only)
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

// Check if all the environment variables are set
console.log(
	colors.yellow('[server.ts] ') + colors.cyan('Checking the environment variables...'),
);

if (!checkEnvs()) {
	process.exit(1);
}

import app from './app';
import connectToDatabases from './services/connectToDatabases';
const PORT: string = process.env.PORT;

connectToDatabases().then(() => {
	app.listen(PORT, () => {
		console.log(
			colors.yellow('[server.ts] ') +
				colors.cyan('Server is running on port: ') +
				colors.yellow(PORT + '\n'),
		);
	});
});
