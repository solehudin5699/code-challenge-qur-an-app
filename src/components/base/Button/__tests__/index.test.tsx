import { expect } from 'vitest';
import { render, screen } from '../../../../test-utils';
import Button from '@/components/base/Button';

describe('first', () => {
  test('a', () => {
    render(<Button>Test</Button>);

    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
