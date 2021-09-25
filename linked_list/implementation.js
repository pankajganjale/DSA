class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertAtHead(data) {
        const newNode = new Node(data, this.head);
        this.head = newNode;
        this.length++;
    }

    getByIndex(index) {
        if (index < 0 || index >= this.length) return null;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    insertAtIndex(index, value) {
        if (index === 0) return this.insertAtHead(value);

        let prev = this.getByIndex(index - 1);

        if (prev === null) return null;

        prev.next = new Node(value, prev.next);

        this.length++;
    }

    removeHead() {
        this.head = this.head.next;
        this.length--;
    }

    removeAtIndex(index) {
        if (index === 0) return this.removeHead();
        let prev = this.getByIndex(index - 1);
        if (prev === null) return null;
        prev.next = prev.next.next;
        this.length--;
    }
}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

const d = new LinkedList();
d.insertAtHead(10);
d.insertAtHead(20);
d.insertAtHead(30);
d.insertAtHead(40);
// console.log(d.getByIndex(2))
// d.insertAtIndex(100, 50)
console.log(d);
d.removeAtIndex(1)
console.log(d)