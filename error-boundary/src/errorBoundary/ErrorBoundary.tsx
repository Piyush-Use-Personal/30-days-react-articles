import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
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
      return <h6 style={{
        color: 'red'
      }}>
        {this.state.message}
      </h6>;
    }

    return this.props.children;
  }
}
