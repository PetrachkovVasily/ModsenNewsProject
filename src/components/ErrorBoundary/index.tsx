import * as React from "react";
import { Component, ErrorInfo, ReactNode } from "react";

import { StyledHeader } from "./styled";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <StyledHeader>Sorry.. there was an error</StyledHeader>;
    }

    return this.props.children;
  }
}
