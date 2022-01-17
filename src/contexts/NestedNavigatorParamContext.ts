import { createContext } from 'react';

interface IContextValue {
  items: {
    label: string
  }[]
}

export const NestedNavigatorParamContext = createContext<IContextValue>({
  items: [],
});
