export const isObjEmpty = (obj) => {
	for (var prop in obj) {
		if (obj.hasOwnProperty(prop)) return false;
	}
	return true;
};

export const objectUppercase = (object, includes = [""]) => {
    Object.keys(object).map((key) => {
        if (
            typeof object[key] === "string" &&
            key != "_id" &&
            key != "user" &&
            !includes.includes(key)
        ) {
            object[key] = String(object[key]).toUpperCase();
        }
    });
    return object;
};