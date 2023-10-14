import { ReactElement } from 'react';
import { render, RenderOptions, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const customRender = (ui: ReactElement, options: RenderOptions = {}) => {
  const queryClient = new QueryClient();
  return render(
    <>
      {' '}
      <QueryClientProvider client={queryClient}> {ui}</QueryClientProvider>
    </>,
    { ...options }
  );
};

export function dispatchEvt(node: any, type: string, data: any) {
  const event = new Event(type, { bubbles: true });
  Object.assign(event, data);
  fireEvent(node, event);
}

export function mockData(files: File[]) {
  return {
    dataTransfer: {
      files,
      items: files.map((file) => ({
        kind: 'file',
        type: file.type,
        getAsFile: () => file,
      })),
      types: ['Files'],
    },
  };
}

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render, render as defaultRender };
