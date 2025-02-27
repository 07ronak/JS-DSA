class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    // the logic to convert key into a numeric index can vary in complexity
    // we typically want complex hashing functions which do not produce the same for different keys
    // we are using character-code-at for keeping it beginner friendly
    //BUT THIS HAS A BUG - IF THERE ARE TWO KEYS (say 'name' and 'mane'),
    // THIS D-S WILL OVERWRITE THE VALUE SINCE THE KEY PRODUCED BY THE HASH-FUNCTION BELOW IS SAME
    //lOSS OF DATA!!
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size; // Ensure the index fits within the table size
  }
  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }
  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }
  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}
