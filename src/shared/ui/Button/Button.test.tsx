import { render, screen } from '@testing-library/react';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>TEXT</Button>);
        expect(screen.getByText('TEXT')).toBeInTheDocument();
    });

    test('Button with theme and text', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEXT</Button>);
        expect(screen.getByText('TEXT')).toHaveClass('clear');
        // screen.debug используется для того, чтобы в логах можно было увидеть как отрендерился компонент
        // screen.debug();
    });
});
