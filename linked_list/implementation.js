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

    insertAtTail(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        newNode.next = null;
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

    removeTail() {
        if (this.length === 0) return null;
        let current = this.head;
        while(current.next.next != null) {
            current = current.next;
        }
        current.next = null;
        this.length--;
    }

    removeAtIndex(index) {
        if (index === 0) return this.removeHead();
        let prev = this.getByIndex(index - 1);
        if (prev === null) return null;
        prev.next = prev.next.next;
        this.length--;
    }

    printList() {
        let current = this.head;
        let index = 0;
        while (current) {
            console.log(current.value, index++);
            current = current.next;
        }
    }

    isEmpty() {
        return this.length === 0 ? true : false;
    }
}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

const d = new LinkedList();
