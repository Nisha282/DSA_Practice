// Program for stack program 

class Stack {
    constructor(){
        this.items =[]
        this.maxSize= 4;
    }

    // add element to the stack
    add(element){
        return this.items.push(element)
    }

    // remove element from the stack
    remove(){
        if(this.items.length >0){
            return this.items.pop()
        }
    }

    // view the last element 
    peek(){
        return this.items[this.items.length -1  ]
    }

    // check if the stack is empty
    isEmpty(){
        return this.items.length == 0;
    }

    isFull(){
        return this.items.length == this.maxSize ;
    }

    // check size of the element 
    size(){
        return this.items.length;
    }

    // empty the stack
    clear(){
        this.items = []
    }

}
let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(6);
stack.add(9);
console.log(stack.items)

console.log(stack.isFull())
// stack.remove()
// console.log(stack.items)

// console.log(stack.peek())

// console.log(stack.isEmpty())

// console.log(stack.size())

// stack.clear();
// console.log(stack.items)
