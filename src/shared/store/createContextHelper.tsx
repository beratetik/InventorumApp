import { createContext, useContext } from 'react';

function CreateContext<T>(defaultValues: T): [() => T, React.Context<T>] {
  const contexts = createContext<T>(defaultValues)

  const useCustomContext = () => {
    const context = useContext(contexts)
    if (!context) throw new Error('useContext must be inside a Provider with a value')
    return context
  }

  return [useCustomContext, contexts]
}

export default CreateContext
