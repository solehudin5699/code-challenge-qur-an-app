import * as Icons from '..';
import { render, waitFor, screen } from '@/test-utils';

const icons = Object.entries(Icons);

describe('Icons', () => {
  test('should render icon correctly', async () => {
    render(
      <div>
        {icons.map(([key, Icon]) => (
          <div key={key}>
            <Icon data-testid={key} />
            <p>{key}</p>
          </div>
        ))}
      </div>
    );

    await waitFor(() => {
      icons.forEach(([key]) => expect(screen.getByText(key)).toBeInTheDocument());
    });
  });

  test('should render as svg', async () => {
    render(
      <div>
        {icons.map(([key, Icon]) => (
          <Icon data-testid={key} key={key} />
        ))}
      </div>
    );

    await waitFor(() => {
      icons.forEach(([key]) => expect(screen.getByTestId(key)).toBeInstanceOf(SVGSVGElement));
    });
  });

  test('should unmount correctly', async () => {
    const { container, unmount } = render(
      <div>
        {icons.map(([key, Icon]) => (
          <div key={key}>
            <Icon />
            <p>{key}</p>
          </div>
        ))}
      </div>
    );

    await waitFor(() => {
      unmount();
      icons.forEach(([key]) => expect(container).not.toHaveTextContent(key));
    });
  });
});
