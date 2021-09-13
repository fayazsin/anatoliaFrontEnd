import React from 'react'
import { Formik, Field, Form, } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import * as Yup from 'yup';
import { Container, Row, Col } from 'react-bootstrap';
import { Button, LinearProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { useStateValue } from "../StateProvider"
import service from '../service/BankService'
import { useHistory } from 'react-router';

import "./Login.css"
const Loginform = (props) => {
    return (
        <Container className="d-flex jsutify-content-center">
            <fieldset >
                <legend>Login</legend>
                <Form>
                    <Row className="justify-content-center">
                        <Col xs={12} md={6} className="text-center p-3">
                            <label htmlFor="username">Username</label>
                            <Field className="ms-4" component={TextField} name="username" type="text" />
                        </Col>
                        <Col xs={12} md={6} className="text-center p-3">
                            <label htmlFor="password">Password</label>
                            <Field className="ms-4"
                                component={TextField}
                                name="password"
                                type="password" />
                        </Col>
                        {props.isSubmitting && <LinearProgress />}
                    </Row>
                    <Row className="mt-4 ">
                        <Col className="d-flex justify-content-center">
                            <Button type="submit"
                                variant="contained"
                                color="secondary"
                                onClick={props.submitFrom}
                            > Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </fieldset>
        </Container>
    )
}
const Login = () => {
    const history = useHistory();
    const [{ userInfo }, dispatch] = useStateValue();
    return (
        <div>
            <Formik
                initialValues={{ username: "", password: "" }}
                validationSchema={Yup.object({
                    username: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Username Required'),
                    password: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .min(8, 'Must be at least 8 characters')
                        .required('Password Required'),
                })}
                onSubmit={(values, actions) => {
                    service.login(values).then((res) => {
                        localStorage.removeItem("auth");
                        if (res.status === 200) {
                            toast.success("Login successfully",
                                {
                                    position: toast.POSITION.TOP_CENTER,
                                });
                            const userInfo = res.data;
                            localStorage.setItem("auth",
                                JSON.stringify({ token: userInfo.jwt }));
                            dispatch({
                                type: "LOGIN",
                                item: userInfo,
                            });
                            if (userInfo?.user?.isAdmin) {
                                history.push("./admin")
                            } else {
                                history.push("./user")
                            }

                            actions.resetForm();
                            actions.setSubmitting(false);
                        }
                    }).catch(() => {
                        actions.setSubmitting(false);
                        actions.resetForm();
                        toast.error("Login Denied", {
                            position: toast.POSITION.TOP_CENTER,
                        });
                    });
                }}
                component={Loginform}
            >

            </Formik>
            <ToastContainer />

        </div>
    )
}

export default Login
