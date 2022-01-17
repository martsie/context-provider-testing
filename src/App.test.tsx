import { render } from '@testing-library/react';
import App from './App';
import { NestedNavigatorParamContext } from './contexts/NestedNavigatorParamContext';

jest.mock('./contexts/NestedNavigatorParamContext', () => {
  const actual = jest.requireActual('./contexts/NestedNavigatorParamContext');
  return {
    NestedNavigatorParamContext: {
      ...actual.NestedNavigatorParamContext,
      Provider: jest.fn((props): JSX.Element => {
        return <actual.NestedNavigatorParamContext.Provider {...props} />;
      }),
    }
  };
});

it('passes value tocontext provider', () => {
  render(<App />);

  expect(NestedNavigatorParamContext.Provider).toBeCalledWith(
    expect.objectContaining({
      value: {
        items: [
          {
            label: 'Item 1',
          },
          {
            label: 'Item 2',
          }
        ]
      }
    }), {}
  )
});
