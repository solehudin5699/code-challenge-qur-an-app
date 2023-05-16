import { render, screen } from '@/test-utils';
import Main from '../Main';

describe('Button', () => {
  test('should render correctly', () => {
    render(
      <Main>
        <span>children</span>
      </Main>
    );

    expect(screen.getByText('children')).toBeInTheDocument();
  });
});
