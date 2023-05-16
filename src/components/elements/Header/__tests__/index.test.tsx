import { render, screen } from '@/test-utils';
import Header from '../Header';

describe('Button', () => {
  test('should render correctly', () => {
    render(<Header />);

    expect(screen.getByText('Header')).toBeInTheDocument();
  });
});
