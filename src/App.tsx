import { NestedNavigatorParamContext } from './contexts/NestedNavigatorParamContext';

function App() {
  const items = [
    {
      label: 'Item 1',
    },
    {
      label: 'Item 2',
    },
  ]

  return (
    <NestedNavigatorParamContext.Provider value={{ items }}>
      <div className="App">App</div>
    </NestedNavigatorParamContext.Provider>
  );
}

export default App;
