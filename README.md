# Linked List

# Description

Singly [Linked List](https://en.wikipedia.org/wiki/Linked_list) implementation. It uses a `Linked List` class to store the nodes in a list and has several methods, and a `Node` class to create a node.

# Node

## Constructor

-   `value` sets the node's value
-   `nextNode` sets the node's next node

# Linked List

## Constructor

-   `head` retrieves the first node

## Methods

-   `append(value)` adds a new node with specified value at the end of the list
-   `prepend(value)`adds a new node with specified value at the start of the list
-   `size()` returns the total number of nodes in the list
-   `getHead()` returns the first node in the list
-   `getTail()` returns the last node in the list
-   `at(index)` returns the node at said index
-   `pop()` removes the last node in the list
-   `contains(value)` returns true if the list contains said value, else false
-   `find(value)` returns the index of the node with said value, else false
-   `toString()` returns list object as a string in the format: ( value ) -> ( value ) -> ( value ) -> null
-   `insertAt(value, index)` inserts a new node with said value at the given index
-   `removeAt(index)` removes the node at the given index
