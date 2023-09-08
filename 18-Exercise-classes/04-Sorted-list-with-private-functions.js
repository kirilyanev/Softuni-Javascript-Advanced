class List {
    constructor() {
      this.arr = [];
      this.size = this.arr.length;
    }
   
    #sortArray(arr) {
      return arr.sort((a, b) => a - b);
    }
   
    #arrayLength(arr) {
      return arr.length;
    }
   
    #isIndexValid(index, arr) {
      return index >= 0 && index < arr.length;
    }
   
    #throwError() {
      throw new Error("Invalid index!");
    }
   
    add(element) {
      this.arr.push(element);
      this.arr = this.#sortArray(this.arr);
      this.size = this.#arrayLength(this.arr);
    }
   
    remove(index) {
      if (this.#isIndexValid(index, this.arr)) {
        this.arr.splice(index, 1);
        this.arr = this.#sortArray(this.arr);
        this.size = this.#arrayLength(this.arr);
      } else {
        this.#throwError();
      }
    }
   
    get(index) {
      if (this.#isIndexValid(index, this.arr)) {
        return this.arr[index];
      }
      this.#throwError();
    }
   
    size() {
      return this.#arrayLength(this.arr);
    }
  }
   
  let list = new List();
  list.add(5);
  list.add(6);
  list.add(7);
  console.log(list.get(1));
  list.remove(1);
  console.log(list.get(1));
  console.log(list.size);
  console.log(list.get(0))
  console.log(list.get(1))
  list.remove(0);
  console.log(list.get(0))
  console.log(list.get(1))
  list.#Sorte