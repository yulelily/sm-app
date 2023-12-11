import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const usePost = (postId?: string) => {
  const fetchPostId = postId ? `/api/posts/${postId}` : null;
  const { data, error, isLoading, mutate } = useSWR(fetchPostId, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default usePost;
