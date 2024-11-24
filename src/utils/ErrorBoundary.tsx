import React, { ErrorInfo, PropsWithChildren } from 'react';

interface ErrorBoundaryProps extends PropsWithChildren {
	fallback: React.ReactNode;
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
	state = { hasError: false };

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Uncaught error:', error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return this.props.fallback;
		}

		return this.props.children;
	}
}
