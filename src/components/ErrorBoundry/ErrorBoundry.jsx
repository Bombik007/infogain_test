import { Component } from "react";

export class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.log(error);
  }

  render() {
    return this.state.hasError ? (
      <section>
        <h2>Sorry, something went wrong</h2>
      </section>
    ) : (
      this.props.children
    );
  }
}
