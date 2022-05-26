import { createContext, ReactNode, useContext, useState } from 'react'

export interface MyContextType {
  value: any
  setValue: (val: any) => void
}

const initialMyContext: MyContextType = {
  value: null,
  setValue: (val: any) => {}
}

type Props = {
  children: ReactNode
}

const AuthContext = createContext<MyContextType>(initialMyContext)

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }: Props) {
  const [value, setData] = useState<any>(null)

  const setValue = (val: any) => {
    setData(val)
  }

  const value2 = {
    value,
    setValue,
  }
  return (
    <>
      <AuthContext.Provider value={value2}>{children}</AuthContext.Provider>
    </>
  )
}
