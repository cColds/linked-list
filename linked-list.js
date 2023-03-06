class LinkList {
	constructor() {
		this.head = null;
	}

	append(value) {
		const node = new Node(value);
		if (this.head == null) {
			this.head = node;
			return;
		}

		let temp = this.head;
		while (temp.nextNode != null) {
			temp = temp.nextNode;
		}
		temp.nextNode = node;
	}

	prepend(value) {
		const newHead = new Node(value, this.head?.nextNode);
		const oldHead = this.head;
		this.head = newHead;
		this.head.nextNode = oldHead;
	}

	size() {
		let i = 1;
		let temp = this.head;

		while (temp?.nextNode != null) {
			temp = temp.nextNode;
			i++;
		}

		return this.head == null ? 0 : i;
	}

	getHead() {
		return this.head;
	}

	getTail() {
		if (this.head == null) return null;

		let temp = this.head;

		while (temp.nextNode != null) {
			temp = temp.nextNode;
		}

		return temp.nextNode;
	}

	at(index) {
		if (this.head == null || index < 0 || !Number.isInteger(index))
			return null;

		let temp = this.head;
		while (index--) {
			temp = temp.nextNode;
		}

		return temp;
	}

	pop() {
		delete this.getTail();
	}
}

class Node {
	constructor(value, nextNode = null) {
		return { value, nextNode };
	}
}

const node = new LinkList();
node.append("Arthur");
node.append("Bob");
node.append("Cydia");
node.append("David");

node.pop();
console.log(node);
