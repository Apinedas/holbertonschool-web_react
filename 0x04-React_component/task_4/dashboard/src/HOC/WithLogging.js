import React from 'react';

export default function WithLogging(WrappedComponent) {
  class WithLoggingComponent extends React.Component {
    componentDidMount() {
      console.log(`Component ${this.getDisplayName()} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${this.getDisplayName()} is going to unmount`);
    }

    getDisplayName() {
      return WrappedComponent.displayName || WrappedComponent.name || 'Component';
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLoggingComponent.displayName = `WithLogging(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithLoggingComponent;
}
