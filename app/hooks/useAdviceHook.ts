import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

async function getRandomAdvice() {
  return await axios
    .get(process.env.NEXT_PUBLIC_API_URL!)
    .then((result) => result.data);
}

const useAdviceHook = () => {
  const { data, isFetching, refetch } = useQuery({
    queryKey: ['advice'],
    queryFn: getRandomAdvice,
    enabled: true,
  });

  return { data, isFetching, refetch };
};

export default useAdviceHook;
