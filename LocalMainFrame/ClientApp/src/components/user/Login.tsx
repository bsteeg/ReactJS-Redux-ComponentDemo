import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../../store';
import * as LoginStore from '../../store/user/Login';

type LoginProps =
    LoginStore.LoginState &
    typeof LoginStore.actionCreators &
    RouteComponentProps<{}>;

class Login extends React.PureComponent<LoginProps> {
    public render() {
        return (
            <React.Fragment>
                
            </React.Fragment>
        );
    }
};

export default connect(
    (state: ApplicationState) => state.counter,
    LoginStore.actionCreators
)(Login);