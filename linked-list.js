class LinkedList {
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

		return temp;
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
		return delete this.getTail();
	}

	contains(value) {
		if (this.head.value == null) return false;

		let temp = this.head;
		while (temp?.value != value && temp?.value != null) {
			temp = temp.nextNode;
		}

		return temp?.value === value;
	}

	find(value) {
		if (value == null) return null;

		let temp = this.head;
		let i = 0;

		while (temp?.value != value && temp?.value != null) {
			temp = temp.nextNode;
			i++;
		}

		return temp?.value === value ? i : null;
	}

	toString() {
		if (this.head == null) return "null";

		let temp = this.head;
		let string = "";

		while (temp != null) {
			string += `( ${temp.value} ) -> `;
			temp = temp.nextNode;
		}

		return (string += "null");
	}

	insertAt(value, index) {
		const insertNewNode = new Node(value);
		let temp = this.head;
		if (index === 0) {
			this.prepend(value);
			return;
		}
		if (index < 0) return;

		index -= 1;

		while (index--) {
			temp = temp?.nextNode;
		}
		if (!temp?.nextNode) return;

		const old = temp.nextNode;
		temp.nextNode = insertNewNode;
		temp.nextNode.nextNode = old;
	}

	removeAt(index) {
		let temp = this.head;

		if (index === 0) {
			this.head = this.head.nextNode;
		}
		if (index < 1) return;

		index -= 1;

		while (index--) {
			temp = temp?.nextNode;
		}
		if (!temp?.nextNode) return;

		let old = temp?.nextNode?.nextNode;
		temp.nextNode = old;
	}
}

class Node {
	constructor(value, nextNode = null) {
		return { value, nextNode };
	}
}

const node = new LinkedList();

node.append("Append Item 1");
node.append("Append Item 2");

node.prepend("Prepend Item 1");

console.log(node.size()); // 3
console.log(node.getHead());

console.log(node.getTail());
console.log("f", node);
node.at(1);
node.pop();
console.log("contains", node.contains("Append Item 2")); // true
console.log("find", node.find("Prepend Item 1")); // 0
console.log("toString", node.toString()); // ( Prepend Item 1 ) -> ( Append Item 1 ) -> ( Append Item 2 ) -> null
node.insertAt(4);
node.removeAt(1);

console.dir(node, { depth: null });
