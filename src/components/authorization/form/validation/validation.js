import * as Yup from "yup";

import { REGEXPS } from "../../../../constants/regex";

export const validationSchema = Yup.object().shape({
    email: Yup.string()
        .max(50, "Too long email")
        .trim()
        .required("Enter user's email")
        .matches(REGEXPS.email, "Please enter valid email"),
    password: Yup.string()
        .max(50, "Too long password")
        .trim()
        .required("Enter user's password")
        .matches(REGEXPS.password, "Please enter valid password"),
});