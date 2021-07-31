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
    Field,
} from "../../styles/Form";

const Login = () => {
    const [hasTriedToLogin, setHasTriedToLogin] = useState(false);
    const { state, dispatch } = useGeneral();
    const loggedIn = state.loggedIn;

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
            // TODO
            // implement a user validation when the application has a back-end

            const loggedIn = true;
            const user = values.email.split("@")[0];

            setSubmitting(loggedIn);

            window.localStorage.setItem(
                "@:ffff-user",
                JSON.stringify({ user, loggedIn })
            );

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
        const localStorageUser = window.localStorage.getItem("@:ffff-user");

        if (localStorageUser && !loggedIn) setLoggedIn(true);
    });

    return loggedIn ? (
        <Redirect to="/" />
    ) : (
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
                        <Field type="email" name="email" placeholder="Email" />

                        <ErrorMessage component="p" name="email" />

                        <Field
                            type="password"
                            name="password"
                            placeholder="Senha"
                        />

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
