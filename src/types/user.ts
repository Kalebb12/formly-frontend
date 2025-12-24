export type  User = {
  user : {
    name : string,
    subscription: {
        plan: string,
        status: string
    },
    _id: string,
    email: string,
    isVerified: boolean,
    createdAt: string,
  },
  isPending: boolean,
}