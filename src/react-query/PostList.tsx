import axios from "axios";
import usePosts from "./hooks/usePosts";
import React, { useState } from "react";

const PostList = () => {
  const pageSize = 10;

  // useInfiniteQuery handles page number automatically. can lead to data inconsistency.
  // const [page, setPage] = useState(1);

  // removed 'page' in param.
  // fetchNextPage from react query.
  // isFetchingNextPage boolean to disable button while fethcing more records.
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePosts({
      pageSize,
    });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {/* {data?.map((post) => ( */}
        {/* dont want to create a div in the middle of ul. so used <> */}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <button
        // disable while fetching next page
        disabled={isFetchingNextPage}
        // JSON placeholder doesnt give the total number of record ahead of time.
        // Otherwise button disabled if last page reached.
        // disabled={page === 1}
        className="btn btn-primary my-3 ms-1"
        // onClick={() => setPage(page + 1)}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;
