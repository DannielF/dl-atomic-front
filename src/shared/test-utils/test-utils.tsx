/* eslint-disable react-refresh/only-export-components */
import { RenderOptions, cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { afterEach } from 'vitest';
import { store } from '../store/Store';

afterEach(() => {
  cleanup();
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
