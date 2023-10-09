import { FC } from 'react'

type SampleProps = {
  user: {
    name: string
  }
}
export const Sample: FC<SampleProps> = ({ user }) => {
  return <div>{user.name}</div>
}
