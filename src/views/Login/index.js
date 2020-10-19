import React, { Component } from 'react';
import { Row, Col } from 'reactstrap'
import Logo from '../../assets/svg/Logo.svg';
import './index.css';
import { connect } from 'react-redux';
import { userActions } from '../../store/actions';
import { Form } from 'reactstrap';




// components 
import CustomInput from '../../components/atoms/CustomInput';
import CustomButton from '../../components/atoms/CustomButton';


function mapStateToProps(state) {
    const loading = state.user.loading;
    const isAuthenticated = state.user.isAuthenticated;


    return {
        loading,
        isAuthenticated
    };
}


function mapDispatchToProps(dispatch) {
    return {
        login: (data) => dispatch(userActions.login(data))
    };
}


class index extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            user: null
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(e) {
        this.setState({ user:{
            ...this.state.user,
            email: e.target.value,
        }});
    }

    handlePasswordChange(e) {
        this.setState({ user:{
            ...this.state.user,
            password: e.target.value,
        }});
    }

    async handleSubmit(e) {
        e.preventDefault();
        const { login } = this.props;
        const { user } = this.state;

        if (user) {
            login(user);
        }
    }

    componentDidUpdate(prevProps) {
        const { isAuthenticated, navigation,history } = this.props;

        if (isAuthenticated !== prevProps.isAuthenticated && isAuthenticated) {
            history.push("/dashboard");
            useHistory.pu
        }
    }

    render() {
        const { loading } = this.props;

        return (
            <div className='login-view '>
                <div className='login-container'>
                    <Logo />
                    <p className='file-text-large file-secondary'>Admin login</p>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <CustomInput
                                placeholder='Email'
                                type='email'
                                name='email'
                                onchange={this.handleEmailChange}
                            />
                        </Row>
                        <br />
                        <br />
                        {/* <Row>
                        <CustomInput
                            placeholder='Phone'
                        />
                    </Row> */}
                        <Row>
                            <CustomInput
                                placeholder='Password'
                                type='password'
                                name='password'
                                onchange={this.handlePasswordChange}
                            />
                        </Row>
                        <br />
                        <br />
                        <Row>
                            <CustomButton
                                onclick={()=>this.handleSubmit}
                                loading={loading}
                                title='Login'
                            />
                        </Row>
                    </Form>
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(index);