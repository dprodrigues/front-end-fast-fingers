import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";

import Container from "../../styles/Container";
import Modal from "../../styles/Modal";
import {
    Title,
    Description,
    SubmitButton,
    ErrorMessage,
    Form,
    Field,
    Label,
} from "../../styles/Form";

const Register = () => {
    const [canRedirect, setCanRedirect] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [registered, setRegistered] = useState(false);

    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const schema = yup.object().shape({
        username: yup
            .string()
            .required("Digite um nome de usuário.")
            .min(5, "O nome de usuário deve ter no mínimo 5 caracteres.")
            .max(30, "O nome de usuário deve ter no máximo 30 caracteres."),
        email: yup
            .string()
            .required("Digite um email.")
            .email("Digite um email."),
        password: yup
            .string()
            .required("Digite uma senha.")
            .min(8, "A senha deve possuir no mínimo 8 caracteres.")
            .max(30, "A senha deve possuir no máximo 30 caracteres"),
        confirmPassword: yup
            .string()
            .required("Confirme sua senha.")
            .oneOf([yup.ref("password"), null], "As senhas devem ser iguais."),
    });

    const handleFormSubmit = (values, { setSubmitting, setErrors }) => {
        try {
            // TODO: implement validation to register user

            setSubmitting(true);

            localStorage.setItem(
                "@ffff:user",
                JSON.stringify({
                    username: values.username,
                    loggedIn: false,
                })
            );

            setRegistered(true);
        } catch (error) {
            // TODO: implement handle error
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("@ffff:user"));

        if (user) {
            setLoggedIn(user?.loggedIn);
            setRegistered(true);
            setCanRedirect(true);
        }
    }, [registered]);

    if (canRedirect && registered)
        return loggedIn ? <Redirect to="/" /> : <Redirect to="/login" />;

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
                        <Label htmlFor="username">Nome de usuário</Label>

                        <Field id="username" type="text" name="username" />

                        <ErrorMessage component="p" name="username" />

                        <Label htmlFor="email">E-mail</Label>

                        <Field id="email" type="email" name="email" />

                        <ErrorMessage component="p" name="email" />

                        <Label htmlFor="password">Senha</Label>

                        <Field id="password" type="password" name="password" />

                        <ErrorMessage component="p" name="password" />

                        <Label htmlFor="confirmPassword">
                            Confirme sua senha
                        </Label>

                        <Field
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                        />

                        <ErrorMessage component="p" name="confirmPassword" />

                        <SubmitButton type="submit">Cadastre-se</SubmitButton>
                    </Form>
                </Formik>
            </Modal>
        </Container>
    );
};

export default Register;
