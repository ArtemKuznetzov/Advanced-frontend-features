import { fireEvent, render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
    test('Render Sidebar', () => {
        // const SidebarWithTranslation = withTranslation()(Sidebar);
        // render(<SidebarWithTranslation />);
        // componentRender оборачивает тестируемый компонент в обертку и сразу добавляет нужную
        // конфигурацию для переводов
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle Sidebar', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        // fireEvent - имитация/генерация каких-то событий
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
