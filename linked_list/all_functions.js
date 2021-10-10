class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtHead(data) {
        const newNode = new Node(data, this.head);
        this.head = newNode;
    }

    deleteHead() {
        if (this.head === null) {
            return null;
        }
        let dummy = this.head.next;
        this.head.next = null;
        this.head = dummy;
    }

    insertAtTail(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    deleteTail() {
        if (this.head === null) {
            return null;
        } else if (this.head.next === null) {
            this.head = null;
        } else {
            let current = this.head;
            let prev = null;
            while (current.next !== null) {
                prev = current;
                current = current.next;
            }
            prev.next = null;
        }
    }

    insertAtIndex(data, val) {
        var val = new Node(val);
        if (this.length() < data) {
            return null;
        } else {
            let current = this.head;
            let prev = null;
            let i = 0;
            while (i < data) {
                prev = current;
                current = current.next;
                i++;
            }
            prev.next = val;
            val.next = current;
        }
    }

    deleteAtIndex(data) {
        if (this.length() <= data) {
            return null;
        } else {
            let current = this.head;
            let prev = null;
            let i = 0;
            while (i < data) {
                prev = current;
                current = current.next;
                i++;
            }
            let post = current.next;
            prev.next = post;
        }
    }

    printLinkedList() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    length() {
        let len = 0;
        if (this.head === null) {
            return len;
        } else {
            let current = this.head;
            while (current) {
                current = current.next;
                len++;
            }
            return len;
        }
    }
}

let list = new LinkedList()

list.insertAtHead("a");
// list.insertAtTail("b");
// console.log(list)
// list.insertAtTail("c");
// list.insertAtTail("d");
// console.log(list.deleteTail());
// console.log(list.deleteTail())
// list.deleteTail()
// list.insertAtIndex(2, "z")
list.deleteAtIndex(1);
list.printLinkedList();
// console.log(list.length());
