import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../../store';
import * as LoginStore from '../../store/user/Login';
import './Login.css';

type LoginProps =
    LoginStore.LoginState &
    typeof LoginStore.actionCreators &
    RouteComponentProps<{}>;

class Login extends React.PureComponent<LoginProps> {
    public render() {
        return (
            <React.Fragment>
                <div className="cotainer">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <form action="" method="POST">
                                    <div className="card-header">Login Terminal</div>
                                        <div className="card-body">
                                                <div className="form-group row">
                                                    <label htmlFor="email_address" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                                <div className="col-md-6">
                                                    <input type="text" id="email_address" className="form-control" name="email-address" required autoFocus></input>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                                <div className="col-md-6">
                                                    <input type="password" id="password" className="form-control" name="password" required/> 
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <div className="col-md-6 offset-md-4">
                                                    <div className="checkbox">
                                                        <label>
                                                            <input checked={this.props.rememberMe} onClick={ () => { this.props.toggleRememberMe(); } } type="checkbox" name="remember"/> Remember Me
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 offset-md-4">
                                                <button type="submit" className="btn btn-primary">
                                                    Login
                                                </button>
                                            </div>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};

export default connect(
    (state: ApplicationState) => state.login,
    LoginStore.actionCreators
)(Login);