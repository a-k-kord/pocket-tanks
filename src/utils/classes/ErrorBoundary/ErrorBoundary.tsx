import React from 'react';
import { SpareUI } from 'components/SpareUI/SpareUI';

import { Nullable } from 'types/Nullabel';

interface ErrorBoundaryProps {
    error?: Error;
}

interface ErrorBoundaryState {
    hasError: boolean;
    errorInChildren: string;
    children?: Nullable<JSX.Element>;
}

export default class ErrorBoundary extends React.Component<
ErrorBoundaryProps,
ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            errorInChildren: '',
        };
    }

    static getDerivedStateFromError = (error: Error) => ({
        hasError: true,
        errorInChildren: error.message,
    });

    render() {
        if (this.state) {
            const { hasError, errorInChildren } = this.state;
            if (hasError) {
                if (errorInChildren !== null) {
                    // Можно отрендерить запасной UI произвольного вида
                    return (
                        <SpareUI
                            errorMessage={this.state.errorInChildren}
                        />
                    );
                }
            }
        }
        return this.props.children;
    }
}
