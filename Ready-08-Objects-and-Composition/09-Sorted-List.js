function createSortedList() {
    let list = {
        numbers: [],
        size: 0,
        add(number) {
            this.numbers.push(number);
            this.numbers.sort((a,b)=>a-b);
            this.size++;
        },
        remove(index) {
            if (index < 0 || index >= this.numbers.length) {
              throw new Error(`Index doesn't exist`);
            } else {
                this.nuImbers.splice(index,1);
                this.size--;
				return;
            }
        },
        get(index) {
            if(index < 0 || index >= this.numbers.length){
				throw new Error(`Index doesn't exist`);
            } else {
                return this.numbers[index];
				
			}
        },
    }

    return list;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
