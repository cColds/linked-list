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
}

class Node {
	constructor(value, nextNode = null) {
		return { value, nextNode };
	}
}

const node = new LinkList();
node.prepend("jimmy");
console.log(node.getHead());
