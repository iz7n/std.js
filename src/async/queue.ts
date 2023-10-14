import { Queue } from "../structs";

export class AsyncQueue<T>
	extends Queue<() => Promise<T>>
	implements AsyncIterable<T>
{
	async *[Symbol.asyncIterator](): AsyncIterableIterator<T> {
		let item: (() => Promise<T>) | undefined;
		while ((item = this.dequeue())) {
			yield await item();
		}
	}
}
