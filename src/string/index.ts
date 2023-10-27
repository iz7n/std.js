export * from "./constants";
export * from "./word";

export function reverse(str: string) {
	return str.split("").reverse().join();
}

export function replace(str: string, replacements: Record<string, string>) {
	const regex = new RegExp(
		Object.keys(replacements).map(escapeRegex).join("|"),
		"g",
	);
	return str.replace(regex, matched => replacements[matched] || "");
}

function escapeRegex(regexStr: string) {
	return regexStr.replaceAll(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
