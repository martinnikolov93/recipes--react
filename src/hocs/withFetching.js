import React from 'react'

const API = 'http://localhost:9999/api'

const withFetching = (url) => (Component) =>
  class WithFetching extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: null,
        isLoading: false,
        error: null,
      };
    }

    componentDidMount() {
      this.setState({ isLoading: true });

      fetch(API + url)
        .then((response) => response.json())
        .then((result) => {
          this.setState({
            data: result,
            isLoading: false
          })
        })
        .catch(error => this.setState({
          error,
          isLoading: false
        }))
    }

    render() {
      return <Component {...this.props} {...this.state} />;
    }
  }

export default withFetching