// import React, { ErrorInfo, ReactNode, Suspense } from 'react';
// import { withTranslation } from 'react-i18next';
// import ErrorPage from 'widgets/ErrorPage/ui/ErrorPage';
//
//
// class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
//     constructor(props: ErrorBoundaryProps) {
//         super(props);
//         this.state = { hasError: false };
//     }
//
//     static getDerivedStateFromError(error: Error) {
//         // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
//         return { hasError: true };
//     }
//
//     componentDidCatch(error: Error, errorInfo: ErrorInfo) {
//         // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
//         console.log(error, errorInfo);
//     }
//
//     render() {
//         const { hasError } = this.state;
//         const children = this.props;
//         if (hasError) {
//             // Можно отрендерить запасной UI произвольного вида
//             // Suspense необходим для подгрузки переводов
//             return (<Suspense fallback=""><ErrorPage /></Suspense>);
//         }
//
//         return children;
//     }
// }
// // Пример использования i18n в классовых компонентах
// // export default withTranslation()(ErrorBoundary);
// export default ErrorBoundary;

import React, {
    Component, ErrorInfo, ReactNode, Suspense, 
} from 'react';
import { ErrorPage } from 'widgets/ErrorPage';

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return <Suspense fallback=""><ErrorPage /></Suspense>;
        }

        return children;
    }
}

export default ErrorBoundary;
