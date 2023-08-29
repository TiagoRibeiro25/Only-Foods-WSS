import colors from 'colors';
import mongo from '../config/mongoose.config';

export default async function connectToDatabases(): Promise<void> {
	console.log(
		colors.yellow('[connectToDatabases.ts] ') +
			colors.cyan('Connecting to the databases...'),
	);

	try {
		// Connect to MongoDB
		await mongo.connect();
		console.log(
			colors.yellow('[connectToDatabases.ts] ') +
				colors.cyan('Connected successfully to mongodb database'),
		);

		// Connect to Redis
		require('../config/redis.config');
		console.log(
			colors.yellow('[connectToDatabases.ts] ') +
				colors.cyan('Connected successfully to redis database'),
		);
	} catch (error) {
		console.log(
			colors.yellow('[connectToDatabases.ts] ') +
				colors.red('Error: ') +
				colors.yellow(error.name),
		);
		console.log(
			colors.yellow('[connectToDatabases.ts] ') +
				colors.red('Message: ') +
				colors.yellow(error.message),
		);

		process.exit(1);
	}
}
