import useSWR from "swr";
import useDebounce from "./useDebounce";

const useDataFetcher = (url, value) => {
  const debouncedValue = useDebounce(value, 500);
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(debouncedValue && `${url}?nombre=${debouncedValue}`, fetcher);

  return { data, error };
};

export default useDataFetcher;
