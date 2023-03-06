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
		const node = new Node(value, this.head?.nextNode);
		const oldHead = this.head;
		this.head = null;
		this.head = node;
		this.head.nextNode = oldHead;
	}
}

class Node {
	constructor(value, nextNode = null) {
		return { value, nextNode };
	}
}

const node = new LinkList();
