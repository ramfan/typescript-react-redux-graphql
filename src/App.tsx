import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { connect } from "react-redux";
import { actions } from "./store/store";
import { TState } from "./store/store.d";
import { IAppProps, IAppState } from "./App.d";

class App extends React.PureComponent<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.props.dispatch(actions.emptyAction());
  }
  render() {
    return [
      <div>
        <strong>Store response: </strong>
        {this.props.emptyField}
      </div>,
      <div>
        <strong>Server response: </strong>
        {this.props.data.testQuery}
      </div>
    ];
  }
}
/**
 * with options
 * const queryOptions  = {
    options: props =>{
            return {
                variables: {
                    id: props.match.params.token
                }
        }
    }
};
 */
const testQuery = gql`
  query {
    testQuery
  }
`;

const mapStateToProps = (state: TState) => ({ emptyField: state.empty });

export default graphql(testQuery /*, queryOptions */)(
  connect(mapStateToProps)(App)
);
