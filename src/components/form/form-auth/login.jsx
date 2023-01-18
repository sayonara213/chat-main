import React, {useState} from "react";

import {IMAGES} from "../../../constants/images";
import {useFormik} from "formik";
import {
    InputContainer,
    InputIcon,
    InputText,
    InputWrap,
    LoginButton,
    InputForm, Input, ErrorWrap, ErrorText
} from "../form.styles";
import {validationSchema} from "./validation/validation";

export const Login = () => {
/*    const valuesList = ["email", "password"];*/

    const [visible, setVisible] = useState(false);

    const handleSubmit = (event) => {
        alert(JSON.stringify(event, null, 2));
    }
    const visibleChange = () => {
        if (visible) {
            setVisible(false)
        } else setVisible(true)
    }
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema : validationSchema,
        onSubmit: handleSubmit
    })
    return (
            <InputForm onSubmit={formik.handleSubmit}>
                <InputContainer>
                    <InputText>Email</InputText>
                    <InputWrap>
                        <InputIcon src={IMAGES.mail}/>
                        <Input type="email"
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
                        <InputIcon src={visible ? IMAGES.show : IMAGES.hide} onClick={visibleChange}/>
                        <Input type={visible ? "text" : "password"}
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
                <LoginButton type={"submit"} color={formik.errors.email || formik.errors.password}>Login</LoginButton>
            </InputForm>
    )
}