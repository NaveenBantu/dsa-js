class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert value into a tree
    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        }
        else {
            let currentNode = this.root;

            // Loop continuously till the end of the tree
            while (true) {
                if (value < currentNode.value) {
                    // Left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
                else {
                    // Right
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    // Lookup or search for a value in a tree
    lookup(value) {
        if (this.root === null) {
            return false
        }
        else {
            let currentNode = this.root;

            while (true) {
                if (value === currentNode.value) {
                    return true;
                }

                if (value < currentNode.value) {
                    // Left
                    if (!currentNode.left) {
                        return false;
                    }
                    currentNode = currentNode.left;
                } else {
                    // Right
                    if (!currentNode.right) {
                        return false;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
}






