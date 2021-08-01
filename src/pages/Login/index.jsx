import { useState, useEffect, useCallback } from "react";
import { Redirect } from "react-router";
import { Formik } from "formik";
import * as yup from "yup";

import { useGeneral } from "../../context/General";

import Container from "../../styles/Container";
import Modal from "../../styles/Modal";
import {
    Title,
    Description,
    Link,
    SubmitButton,
    ErrorMessage,
    Form,
    Label,
    Field,
} from "../../styles/Form";

const Login = () => {
    const [hasTriedToLogin, setHasTriedToLogin] = useState(false);
    const { state, dispatch } = useGeneral();
    const { loggedIn } = state;

    const schema = yup.object().shape({
        email: yup.string().email("Email inválido."),
        password: yup.string(),
    });

    const initialValues = {
        email: "",
        password: "",
    };

    const setLoggedIn = useCallback(
        (loggedInValue) => {
            dispatch({
                type: "SET_LOGGED_IN_VALUE",
                payload: {
                    loggedIn: loggedInValue,
                },
            });
        },
        [dispatch]
    );

    const handleFormSubmit = (values, { setSubmitting, setErrors }) => {
        try {
            // TODO: implement a user validation when the application has a back-end

            setSubmitting(true);

            const loggedIn = true;

            let user = JSON.parse(window.localStorage.getItem("@ffff:user"));

            if (user) {
                window.localStorage.removeItem("@ffff:user");

                user.loggedIn = true;
            } else {
                const username = values.email.split("@")[0];

                user = {
                    username,
                    loggedIn,
                };
            }

            window.localStorage.setItem("@ffff:user", JSON.stringify(user));

            setTimeout(() => {
                setLoggedIn(loggedIn);
            }, 2000);
        } catch (error) {
            setHasTriedToLogin(true);
            setErrors({ email: handleException(error.response) });
        } finally {
            setSubmitting(false);
        }
    };

    const handleException = useCallback(({ status }) => {
        switch (status) {
            case 400: {
                return "Usuário ou senha inválido.";
            }

            default: {
                return "Algo deu errado, tente novamente mais tarde.";
            }
        }
    }, []);

    useEffect(() => {
        const localStorageUser = window.localStorage.getItem("@ffff-user");

        if (localStorageUser && !loggedIn) setLoggedIn(true);
    });

    if (loggedIn) return <Redirect to="/" />;

    return (
        <Container>
            <Modal>
                <Title>Seja bem vindo! :D</Title>

                <Description>
                    Estamos muito animados em te ver por aqui!
                </Description>

                <Formik
                    initialValues={initialValues}
                    onSubmit={handleFormSubmit}
                    validationSchema={schema}
                >
                    <Form>
                        <Label htmlFor="email">E-mail</Label>

                        <Field id="email" type="email" name="email" />

                        <ErrorMessage component="p" name="email" />

                        <Label htmlFor="password">Senha</Label>

                        <Field id="password" type="password" name="password" />

                        <ErrorMessage component="p" name="password" />

                        <Link to="recover-password">Esqueceu sua senha?</Link>

                        <SubmitButton type="submit">Entrar</SubmitButton>

                        {hasTriedToLogin && (
                            <ErrorMessage>
                                Email e/ou senha inválida.
                            </ErrorMessage>
                        )}
                    </Form>
                </Formik>
            </Modal>
        </Container>
    );
};

export default Login;
