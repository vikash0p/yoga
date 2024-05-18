"use client";
import React from "react";

interface BlogPaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const BlogPagination: React.FC<BlogPaginationProps> = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {


  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number: number) => {
    paginate(number);
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  return (
    <nav>
      <ul className="flex justify-center space-x-2">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`cursor-pointer px-3 border py-1 rounded hover:bg-gray-900 hover:text-white hover:transition-colors hover:duration-500 hover:ease-linear hover:border-white ${
              number === currentPage
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            <a onClick={() => handleClick(number)}>{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BlogPagination;
