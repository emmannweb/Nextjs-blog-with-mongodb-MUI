import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function useAllPosts() {
    const { data, error, isLoading } = useSWR('/api/post', fetcher);

    return {
        data,
        isLoading,
        isError: error
    }
}

export default useAllPosts;
