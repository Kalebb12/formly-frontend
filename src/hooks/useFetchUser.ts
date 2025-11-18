import { getUser } from "@/api/auth"
import { useQuery } from "@tanstack/react-query"

export const useFetchUser = () => {
  const {data: user , isPending , error} = useQuery({
    queryKey:["user"],
    queryFn: () => getUser(),
    retry: false
  })

  return { user, isPending, error}
}