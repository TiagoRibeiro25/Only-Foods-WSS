const users = new Map();

const add = (socketId: string, userId: number) => {
	users.set(socketId, userId);
};

const del = (socketId: string) => {
	users.delete(socketId);
};

const get = (socketId: string) => {
	return users.get(socketId);
};

export default { add, del, get };
