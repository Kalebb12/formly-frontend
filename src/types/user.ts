export type User = {
  name: string,
  subscription: {
    plan: string,
    status: string
  },
  _id: string,
  email: string,
  isVerified: boolean,
  createdAt: string,
}