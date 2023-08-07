import React, { useState } from "react";
import "./../css/products.css";

const categories = [
  {
    name: "Array",
    problems: [
      {
        id: 1,
        title: "Two Sum",
        leetcodeLink: "https://leetcode.com/problems/two-sum/",
      },
      {
        id: 1,
        title: "Two Sum",
        leetcodeLink: "https://leetcode.com/problems/two-sum/",
      },
      {
        id: 2,
        title: "Best Time to Buy and Sell Stock",
        leetcodeLink:
          "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      },
      {
        id: 3,
        title: "Contains Duplicate",
        leetcodeLink: "https://leetcode.com/problems/contains-duplicate/",
      },
      {
        id: 4,
        title: "Product of Array Except Self",
        leetcodeLink:
          "https://leetcode.com/problems/product-of-array-except-self/",
      },
      {
        id: 5,
        title: "Maximum Subarray",
        leetcodeLink: "https://leetcode.com/problems/maximum-subarray/",
      },
      {
        id: 6,
        title: "Maximum Product Subarray",
        leetcodeLink: "https://leetcode.com/problems/maximum-product-subarray/",
      },
      {
        id: 7,
        title: "Find Minimum in Rotated Sorted Array",
        leetcodeLink:
          "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
      },
      {
        id: 8,
        title: "Search in Rotated Sorted Array",
        leetcodeLink:
          "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      },
      {
        id: 9,
        title: "3Sum",
        leetcodeLink: "https://leetcode.com/problems/3sum/",
      },
      {
        id: 10,
        title: "Container With Most Water",
        leetcodeLink:
          "https://leetcode.com/problems/container-with-most-water/",
      },
      // ... other problems ...
    ],
  },
  {
    name: "Binary",
    problems: [
      {
        id: 11,
        title: "Sum of Two Integers",
        leetcodeLink: "https://leetcode.com/problems/sum-of-two-integers/",
      },

      {
        id: 11,
        title: "Sum of Two Integers",
        leetcodeLink: "https://leetcode.com/problems/sum-of-two-integers/",
      },
      {
        id: 12,
        title: "Number of 1 Bits",
        leetcodeLink: "https://leetcode.com/problems/number-of-1-bits/",
      },
      {
        id: 13,
        title: "Counting Bits",
        leetcodeLink: "https://leetcode.com/problems/counting-bits/",
      },
      {
        id: 14,
        title: "Missing Number",
        leetcodeLink: "https://leetcode.com/problems/missing-number/",
      },
      {
        id: 15,
        title: "Reverse Bits",
        leetcodeLink: "https://leetcode.com/problems/reverse-bits/",
      },
      // ... other problems ...
    ],
  },
  {
    name: "Dynamic Programming",
    problems: [
      {
        id: 16,
        title: "Climbing Stairs",
        leetcodeLink: "https://leetcode.com/problems/climbing-stairs/",
      },
      {
        id: 16,
        title: "Climbing Stairs",
        leetcodeLink: "https://leetcode.com/problems/climbing-stairs/",
      },
      {
        id: 17,
        title: "Coin Change",
        leetcodeLink: "https://leetcode.com/problems/coin-change/",
      },
      {
        id: 18,
        title: "Longest Increasing Subsequence",
        leetcodeLink:
          "https://leetcode.com/problems/longest-increasing-subsequence/",
      },
      {
        id: 19,
        title: "Longest Common Subsequence",
        leetcodeLink:
          "https://leetcode.com/problems/longest-common-subsequence/",
      },
      {
        id: 20,
        title: "Word Break Problem",
        leetcodeLink: "https://leetcode.com/problems/word-break/",
      },
      {
        id: 21,
        title: "Combination Sum",
        leetcodeLink: "https://leetcode.com/problems/combination-sum-iv/",
      },
      {
        id: 22,
        title: "House Robber",
        leetcodeLink: "https://leetcode.com/problems/house-robber/",
      },
      {
        id: 23,
        title: "House Robber II",
        leetcodeLink: "https://leetcode.com/problems/house-robber-ii/",
      },
      {
        id: 24,
        title: "Decode Ways",
        leetcodeLink: "https://leetcode.com/problems/decode-ways/",
      },
      {
        id: 25,
        title: "Unique Paths",
        leetcodeLink: "https://leetcode.com/problems/unique-paths/",
      },
      {
        id: 26,
        title: "Jump Game",
        leetcodeLink: "https://leetcode.com/problems/jump-game/",
      },
      // ... other problems ...
    ],
  },
  {
    name: "Graph",
    problems: [
      {
        id: 27,
        title: "Clone Graph",
        leetcodeLink: "https://leetcode.com/problems/clone-graph/",
      },
      {
        id: 28,
        title: "Course Schedule",
        leetcodeLink: "https://leetcode.com/problems/course-schedule/",
      },
      {
        id: 29,
        title: "Pacific Atlantic Water Flow",
        leetcodeLink:
          "https://leetcode.com/problems/pacific-atlantic-water-flow/",
      },
      {
        id: 30,
        title: "Number of Islands",
        leetcodeLink: "https://leetcode.com/problems/number-of-islands/",
      },
      {
        id: 31,
        title: "Longest Consecutive Sequence",
        leetcodeLink:
          "https://leetcode.com/problems/longest-consecutive-sequence/",
      },
      {
        id: 32,
        title: "Alien Dictionary (Leetcode Premium)",
        leetcodeLink: "https://leetcode.com/problems/alien-dictionary/",
      },
      {
        id: 33,
        title: "Graph Valid Tree (Leetcode Premium)",
        leetcodeLink: "https://leetcode.com/problems/graph-valid-tree/",
      },
      {
        id: 34,
        title:
          "Number of Connected Components in an Undirected Graph (Leetcode Premium)",
        leetcodeLink:
          "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
      },
    ],
  },
  {
    name: "Linked List",
    problems: [
      {
        id: 35,
        title: "Reverse a Linked List",
        leetcodeLink: "https://leetcode.com/problems/reverse-linked-list/",
      },
      {
        id: 36,
        title: "Detect Cycle in a Linked List",
        leetcodeLink: "https://leetcode.com/problems/linked-list-cycle/",
      },
      {
        id: 37,
        title: "Merge Two Sorted Lists",
        leetcodeLink: "https://leetcode.com/problems/merge-two-sorted-lists/",
      },
      {
        id: 38,
        title: "Merge K Sorted Lists",
        leetcodeLink: "https://leetcode.com/problems/merge-k-sorted-lists/",
      },
      {
        id: 39,
        title: "Remove Nth Node From End Of List",
        leetcodeLink:
          "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
      },
      {
        id: 40,
        title: "Reorder List",
        leetcodeLink: "https://leetcode.com/problems/reorder-list/",
      },
    ],
  },
  {
    name: "Matrix",
    problems: [
      {
        id: 41,
        title: "Set Matrix Zeroes",
        leetcodeLink: "https://leetcode.com/problems/set-matrix-zeroes/",
      },
      {
        id: 42,
        title: "Spiral Matrix",
        leetcodeLink: "https://leetcode.com/problems/spiral-matrix/",
      },
      {
        id: 43,
        title: "Rotate Image",
        leetcodeLink: "https://leetcode.com/problems/rotate-image/",
      },
      {
        id: 44,
        title: "Word Search",
        leetcodeLink: "https://leetcode.com/problems/word-search/",
      },
    ],
  },
  {
    name: "Interval",
    problems: [
      {
        id: 45,
        title: "Insert Interval",
        leetcodeLink: "https://leetcode.com/problems/insert-interval/",
      },
      {
        id: 46,
        title: "Merge Intervals",
        leetcodeLink: "https://leetcode.com/problems/merge-intervals/",
      },
      {
        id: 47,
        title: "Non-overlapping Intervals",
        leetcodeLink:
          "https://leetcode.com/problems/non-overlapping-intervals/",
      },
      {
        id: 48,
        title: "Meeting Rooms (Leetcode Premium)",
        leetcodeLink: "https://leetcode.com/problems/meeting-rooms/",
      },
      {
        id: 49,
        title: "Meeting Rooms II (Leetcode Premium)",
        leetcodeLink: "https://leetcode.com/problems/meeting-rooms-ii/",
      },
    ],
  },
  // ... other categories ...
];

function ProblemList({ problems }) {
  return (
    <ul>
      {problems.map((problem) => (
        <li key={problem.id}>
          <a
            className="list"
            href={problem.leetcodeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {problem.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (categoryName) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
  };

  return (
    <div>
      <h1 className="products"> Blind 75</h1>
      <div className="menu">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`toggle ${
              activeCategory === category.name ? "expanded" : ""
            }`}
            onClick={() => toggleCategory(category.name)}
          >
            {category.name}
            {activeCategory === category.name && (
              <div className={`lists expanded`}>
                <ProblemList problems={category.problems} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
