import React, { useState } from 'react'

import { IMAGES } from '../../../constants/images'
import { useFormik } from 'formik'
import {
    InputContainer,
    InputIcon,
    InputText,
    InputWrap,
    LoginButton,
    InputForm,
    Input,
    ErrorWrap,
    ErrorText,
    ButtonContainer,
    ButtonImage,
} from './form.styles'
import { validationSchema } from './validation/validation'
import {
    login,
    loginWithGoogle,
    resetPassword,
} from '../../../services/service'
import { notifyError, notifySuccess } from '../../../services/notification'
import { OtherButton, OtherButtonsWrap } from '../sign-in/signin.styles'
import { useDispatch, useSelector } from 'react-redux'
import { switchLogin } from '../../../redux/authSlice'

export const Login = () => {
    const [visible, setVisible] = useState(false)
    const isLogin = useSelector((state) => state.auth.isLogin)
    const dispatch = useDispatch()

    const handleSwitchLogin = (e) => {
        e.preventDefault()
        dispatch(switchLogin())
    }

    const handleSubmit = async (event) => {
        try {
            await login(event)
            notifySuccess('You have successfully logged in')
        } catch (e) {
            notifyError(e.message)
        }
    }

    const handleSubmitGoogle = async () => {
        try {
            await loginWithGoogle()
            notifySuccess('You have successfully logged in')
        } catch (e) {
            notifyError(e.message)
        }
    }

    const handleResetPass = async (event) => {
        event.preventDefault()
        try {
            await resetPassword(formik.values.email)
            notifySuccess('Check your email')
        } catch (e) {
            notifyError(e.message)
        }
    }

    const visibleChange = () => {
        if (visible) {
            setVisible(false)
        } else setVisible(true)
    }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
    })
    return (
        <InputForm onSubmit={formik.handleSubmit}>
            <InputContainer>
                <InputText>Email</InputText>
                <InputWrap>
                    <InputIcon src={IMAGES.mail} />
                    <Input
                        type="email"
                        placeholder="email@mail.com"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        name="email"
                    />
                </InputWrap>
                {formik.touched.email && formik.errors.email ? (
                    <ErrorWrap>
                        <ErrorText>{formik.errors.email}</ErrorText>
                    </ErrorWrap>
                ) : null}
            </InputContainer>
            <InputContainer>
                <InputText>Password</InputText>
                <InputWrap>
                    <InputIcon
                        src={visible ? IMAGES.show : IMAGES.hide}
                        onClick={visibleChange}
                    />
                    <Input
                        type={visible ? 'text' : 'password'}
                        placeholder="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        name="password"
                    />
                </InputWrap>
                {formik.touched.password && formik.errors.password ? (
                    <ErrorWrap>
                        <ErrorText>{formik.errors.password}</ErrorText>
                    </ErrorWrap>
                ) : null}
            </InputContainer>
            <ButtonContainer>
                <LoginButton
                    type={'submit'}
                    color={formik.errors.email || formik.errors.password}
                >
                    Login
                </LoginButton>
                <LoginButton
                    type={'button'}
                    onClick={handleSubmitGoogle}
                    color={formik.errors.email}
                >
                    <ButtonImage src={IMAGES.google} />
                </LoginButton>
            </ButtonContainer>
            <OtherButtonsWrap>
                <OtherButton href={''} onClick={handleSwitchLogin}>
                    {!isLogin ? 'Login' : 'Register'}
                </OtherButton>
                <OtherButton href={''} onClick={handleResetPass}>
                    I forgot
                </OtherButton>
            </OtherButtonsWrap>
        </InputForm>
    )
}
