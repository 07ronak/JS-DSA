/* Design a time-based key-value data structure that can store multiple values for the same key at 
different time stamps and retrieve the key's value at a certain timestamp.

Implement the TimeMap class:

-TimeMap() Initializes the object of the data structure.
-void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
-String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. 
    If there are multiple such values, it returns the value associated with the largest timestamp_prev. 
    If there are no values, it returns "". */

class TimeMap {
  constructor() {
    this.store = new Map();
  }
  set(key, value, timestamp) {
    if (!this.store.has(key)) {
      this.store.set(key, []);
    }
    this.store.get(key).push([timestamp, value]);
  }

  get(key, timeStamp) {
    if (!this.store.has(key)) return "";

    const values = this.store.get(key);

    let left = 0;
    let right = values.length - 1;
    let result = "";

    // Binary search for the largest timestamp <= given timestamp
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (values[mid][0] <= timeStamp) {
        result = values[mid][1]; // Update result to the value at mid
        left = mid + 1; // Move right to find a closer timestamp
      } else {
        right = mid - 1; // Move left to find a smaller timestamp
      }
    }

    return result;
  }
}
