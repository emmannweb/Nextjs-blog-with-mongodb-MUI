import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function useSinglePost(id) {
    const { data, error, isLoading } = useSWR(`/api/post/${id}`, fetcher);

    return {
        singlePost: data,
        isLoading,
        isError: error
    }
}

export default useSinglePost;
