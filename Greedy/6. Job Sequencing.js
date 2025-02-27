/* Given an array of jopvs where every job has dedaline and profit if the job is finished before the deadline. 
    It is also given that every job takes a siunle unit of time, so the minimum possible deadline for any job is 1.
    Maximize the total profit if only one job can be scheduled at a time.
    
    Example: jobA = 4,20
             jobB = 1,10
             jobC = 1,40
             jobD = 1,30

    Output: C,A  (40+20 = 60) maximum
*/

const jobs = [
  [4, 20], // Job A: [deadline, profit]
  [1, 10], // Job B
  [1, 40], // Job C
  [1, 30], // Job D
];

function findMaxProfit(jobs) {
  jobs.sort((a, b) => b[1] - a[1]);

  const maxDeadline = Math.max(...jobs.map((job) => job[0]));
  const schedule = new Array(maxDeadline).fill(null);

  // Schedule each job at the latest possible time
  for (const job of jobs) {
    const deadline = job[0];

    for (let time = deadline - 1; time >= 0; time--) {
      if (!schedule[time]) {
        schedule[time] = job;
        break;
      }
    }
  }

  const selectedJobs = schedule.filter((job) => job); // job !== null
  const totalProfit = selectedJobs.reduce((sum, job) => sum + job[1], 0);

  console.log("Selected Jobs:", selectedJobs);
  return totalProfit;
}

console.log("Max Profit:", findMaxProfit(jobs));
/* ------------------------------------------------------------------------------------------------------------------------------- */
/* --------------------------Disjoint Union Set----------------------------------- */

function jobSequenceOptimized(jobs) {
  jobs.sort((a, b) => b[1] - a[1]); // Sort by descending profit
  const n = jobs.length;

  // Find the maximum deadline (clamped to n, since we can't schedule more than n jobs)
  const maxDeadline = Math.min(Math.max(...jobs.map((job) => job[0])), n);
  const parent = Array.from({ length: maxDeadline + 1 }, (_, i) => i);

  const find = (slot) => {
    if (parent[slot] !== slot) {
      parent[slot] = find(parent[slot]); // Path compression
    }
    return parent[slot];
  };

  let totalProfit = 0;
  const selectedJobs = [];

  for (const [deadline, profit] of jobs) {
    const clampedDeadline = Math.min(deadline, n);
    const availableSlot = find(clampedDeadline);

    if (availableSlot > 0) {
      selectedJobs.push([clampedDeadline, profit]);
      totalProfit += profit;
      parent[availableSlot] = availableSlot - 1; // Union with previous slot
    }
  }

  console.log("Selected Jobs:", selectedJobs);
  return totalProfit;
}

console.log("Max Profit:", jobSequenceOptimized(jobs));
