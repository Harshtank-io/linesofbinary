import React from "react";
import { useState } from "react";
import "./../css/products.css";

const googleBlind75Problems = [
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
    leetcodeLink: "https://leetcode.com/problems/product-of-array-except-self/",
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
    leetcodeLink: "https://leetcode.com/problems/container-with-most-water/",
  },
];

export default function Products() {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div>
      <h1 className="products"> Blind 75</h1>
      <div className={`toggle ${showList ? "expanded" : ""}`} onClick={toggleList}>
        Array
      </div>
      {showList && (
        <div className={`lists ${showList ? "expanded" : ""}`}>
          <ul>
            {googleBlind75Problems.map((problem) => (
              <li key={problem.id}>
                <a className="list"
                  href={problem.leetcodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {problem.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}