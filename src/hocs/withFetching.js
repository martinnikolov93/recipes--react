import React from 'react'
import { config } from '../utils/constants'

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

      fetch(config.url.API_URL + url)
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