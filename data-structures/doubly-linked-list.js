// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        //Code here
        const newObj = {
            value: value,
            next: null,
            prev: null
        }
        newObj.prev = this.tail;
        this.tail.next = newObj;
        this.tail = newObj;
        this.length++
    }

    prepend(value) {
        const newObj = {
            value: value,
            next: null,
            prev: null
        }
        newObj.next = this.head;
        this.head.prev = newObj;
        this.head = newObj;
        this.length++;
    }

    printList() {
        const listArray = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            listArray.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return listArray;
    }

    insert(index, value) {
        //check params
        if (index >= this.length) {
            return this.append(value);
        }
        if (index === 0) {
            return this.prepend(value);
        }

        const newObj = {
            value: value,
            next: null,
            prev: null
        }
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newObj;
        newObj.next = follower;
        newObj.prev = leader;
        follower.prev = newObj;
        this.length++;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index) {
        const leader = this.traverseToIndex(index - 1)
        const currentNode = leader.next;
        const nextNode = currentNode.next;
        leader.next = nextNode;
        currentNode.prev = leader;
        this.length--;
    }
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList);
myLinkedList.insert(3, 99);
myLinkedList.remove(2);
console.log(myLinkedList.printList());



