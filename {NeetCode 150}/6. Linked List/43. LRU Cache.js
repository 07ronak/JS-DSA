/* Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

-LRUCache(int capacity) Initialize the LRU cache with positive size capacity.

-int get(int key) Return the value of the key if the key exists, otherwise return -1.

-void put(int key, int value) Update the value of the key if the key exists. Otherwise, add
the key-value pair to the cache. If the number of keys exceeds the 'capacity' from this 
operation, evict the least recently used key.

The functions get and put must each run in O(1) average time complexity. */

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }

    // Get the value and refresh the order
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    // If key exists, delete it first
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    // If at capacity, remove the first (oldest) item
    else if (this.cache.size >= this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    // Add the new key-value pair (will be added at the end)
    this.cache.set(key, value);
  }
}
