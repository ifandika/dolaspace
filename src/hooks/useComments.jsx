import { useState } from "react";
import { testimonials } from "../data/data";

/**
 * This file use for hook or save comment that add by user
 * @returns 
 */
const useComments = () => {
  const [userComments, setUserComments] = useState([]);

  const addComment = (comment) => {
    const newComment = {
      ...comment
    };
    setUserComments((prev) => [newComment, ...prev]);
  };

  const deleteComment = (id) => {
    setUserComments((prev) => prev.filter((c) => c.id !== id));
  };

  const allComments = [...userComments, ...testimonials];
  return { allComments, userComments, addComment, deleteComment };
};

export default useComments;