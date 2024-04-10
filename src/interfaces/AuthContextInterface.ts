import type User from '@/model/User'

export interface AuthContextProps {
  user?: User | any
  loading?: boolean
  login?: (email: string, password: string) => Promise<void>
  register?: (email: string, password: string) => Promise<void>
  loginGoogle?: () => Promise<void>
  logout?: () => Promise<void>
}
