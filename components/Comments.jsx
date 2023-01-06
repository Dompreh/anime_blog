import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import { getComments } from "../services";
import moment from "moment";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, []);
  return (
    <>
      {comments.length > 0 && (
        <div className="mb-8 shadow-lg rounded-lg bg-white pb-12 p-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.lenth} Comments
          </h3>
          {comments.map((comment) => (
            <div
              key={comment.createdAt}
              className="border-gray-200 border-b mb-4 pb-4"
            >
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{" "}
                {moment(comment.createdAt).format("MMM DD, YYYY")}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
