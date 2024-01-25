import React, { Component, ReactNode } from 'react';
import { GeneralBoundaries } from './GeneralBoundaries';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback ?: ({ message }: { message: string }) => JSX.Element;
}

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
}

export class ErrorBoundaryWithDynamicComponent extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      message: ''
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      message: error.message
    };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    // You can log the error to an error reporting service
    console.error('Error caught by error boundary:', error, info);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      const Component = this.props.fallback ?? GeneralBoundaries.GeneralError
      return <Component message={this.state.message} />
    }

    return this.props.children;
  }
}
