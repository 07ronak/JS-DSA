// Average Time Complexity = O(1)
// Worst Time Complexity = O(n)
class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size; // Ensure the index fits within the table size
  }
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index]; //store a reference to the bucket (array) at that index

    if (!bucket) {
      this.table[index] = [[key, value]]; // Store the newly created bucket at the index
    } else {
      // If a bucket already exists, check if the key is already present
      const sameKeyItem = bucket.find((item) => item[0] === key); // Look for an item with the same key
      if (sameKeyItem) {
        sameKeyItem[1] = value; // If key is found, update its value
      } else {
        bucket.push([key, value]); // If key is not found, add a new key-value pair to the bucket
      }
    }
  }
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index]; //store a reference to that index position

    //if bucket exists
    if (bucket) {
      //we check if an array exists with the same key
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        //remember, key is stored at index 0 and value is stored at index 1
        return sameKeyItem[1];
      }
    }
    //however if the conditions return false, we return undefined
    //indicating the key does not exists
    return undefined;
  }
  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      // if bucket exists, we check if an array exists with the same key
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        //if samekeyItem exists, we use array.splice to remove the item from the array
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set("name", "Bruce");
table.set("age", 25);
table.display();

console.log(table.get("name"));

table.set("mane", "Clark");
table.set("name", "Alex");
table.display();

table.remove("name");
table.display();
