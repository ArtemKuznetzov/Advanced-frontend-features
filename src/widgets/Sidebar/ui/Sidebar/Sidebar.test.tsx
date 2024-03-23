import { fireEvent, render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import Sidebar from './Sidebar';
import { renderWithTranslation } from '../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('Render Sidebar', () => {
        // const SidebarWithTranslation = withTranslation()(Sidebar);
        // render(<SidebarWithTranslation />);
        // renderWithTranslation оборачивает тестируемый компонент в обертку и сразу добавляет нужную
        // конфигурацию для переводов
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle Sidebar', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        // fireEvent - имитация/генерация каких-то событий
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
