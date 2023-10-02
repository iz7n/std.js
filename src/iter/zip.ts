export function* zip<T, U>(
	iterable1: Iterable<T>,
	iterable2: Iterable<U>,
): Iterator<[T, U]> {
	const iter1 = iterable1[Symbol.iterator]();
	const iter2 = iterable2[Symbol.iterator]();
	while (true) {
		const result1 = iter1.next();
		const result2 = iter2.next();
		if (result1.done || result2.done) break;
		yield [result1.value, result2.value];
	}
}