import { TransparentContainer } from '../../../transparent-container/transparent-container.styles'
import {
    InputSubmit,
    MaxCharLabel,
    ProfileBioInput,
    ProfileBioLabel,
    ProfileBioWrap,
    ProfileSettingsHeader,
    ProfileSettingsWrap,
    UserInputContainer,
    UserProfileAvatar,
    UserProfileEmail,
    UserProfileForm,
    UserProfileName,
    UserProfileWrap,
} from './profile-settings.styles'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../../../../services/firebase'
import { CircleAvatar } from '../../circle-avatar/circle-avatar'
import { ProfileInput } from './profile-input/profile-input'
import { IMAGES } from '../../../../constants/images'
import TextareaAutosize from 'react-textarea-autosize'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { validationSchema } from './validation/user-info-validation'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { collection, query, where, updateDoc } from 'firebase/firestore'
import { notifyError, notifySuccess } from '../../../../services/notification'
import { updateProfile } from 'firebase/auth'

export const ProfileSettings = ({ onclick }) => {
    const [userAuth, userLoading] = useAuthState(auth)
    const [userdb, loading, error, snapshot] = useCollectionData(
        query(collection(firestore, 'users'), where('uid', '==', userAuth.uid))
    )
    const [maxChar, setMaxChar] = useState(140)

    const [bio, setBio] = useState('')

    const handleChangeBio = (e) => {
        setBio(e.target.value)
    }
    const handleBlurBio = () => {
        updateDoc(snapshot.docs[0].ref, {
            bio: bio.trim(),
        })
            .then(() => {
                notifySuccess('Bio updated successfully')
            })
            .catch((e) => {
                notifyError('Bio update failed')
            })
    }
    const handleSubmit = () => {
        updateProfile(auth.currentUser, {
            displayName: formik.values.username,
            email: formik.values.email,
            password: formik.values.password,
        })
            .then(() => {
                notifySuccess('Profile updated successfully')
            })
            .catch(() => {
                notifyError('Profile update failed')
            })
        updateDoc(snapshot.docs[0].ref, {
            username: formik.values.username,
            email: formik.values.email,
        })
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            username: '',
        },
        onSubmit: handleSubmit,
        validationSchema: validationSchema,
    })

    useEffect(() => {
        setMaxChar(140 - bio.length)
    }, [bio])

    return (
        <TransparentContainer onClick={onclick}>
            <ProfileSettingsWrap>
                <ProfileSettingsHeader>Info</ProfileSettingsHeader>
                <UserProfileWrap>
                    <UserProfileAvatar>
                        <CircleAvatar
                            size={100}
                            src={userAuth.photoURL}
                        ></CircleAvatar>
                    </UserProfileAvatar>
                    <UserProfileName>{userAuth.displayName}</UserProfileName>
                    <UserProfileEmail>{userAuth.email}</UserProfileEmail>
                </UserProfileWrap>
                <UserProfileForm onSubmit={formik.handleSubmit}>
                    <UserInputContainer>
                        <ProfileBioWrap>
                            <ProfileBioInput>
                                <TextareaAutosize
                                    rows={1}
                                    spellCheck={false}
                                    placeholder={'Bio...'}
                                    value={bio}
                                    onChange={handleChangeBio}
                                    onBlur={handleBlurBio}
                                    name={'bio'}
                                    maxLength={140}
                                />
                            </ProfileBioInput>
                            <ProfileBioLabel>
                                Any details such as age, occupation or city.
                                Example: 23 Y.O. designer from San Francisco
                            </ProfileBioLabel>
                            <MaxCharLabel>
                                Characters left: {maxChar}
                            </MaxCharLabel>
                        </ProfileBioWrap>
                        <ProfileInput
                            text={'User Name'}
                            placeholder={userAuth.displayName}
                            icon={IMAGES.username}
                            value={formik.values.username}
                            onchange={formik.handleChange}
                            name={'username'}
                        />
                        <ProfileInput
                            text={'Email'}
                            placeholder={userAuth.email}
                            icon={IMAGES.email}
                            value={formik.values.email}
                            onchange={formik.handleChange}
                            name={'email'}
                        />
                        <ProfileInput
                            text={'Password'}
                            placeholder={'* * * * * * * * *'}
                            icon={IMAGES.password}
                            value={formik.values.password}
                            onchange={formik.handleChange}
                            name={'password'}
                        />
                    </UserInputContainer>
                    <InputSubmit>Submit</InputSubmit>
                </UserProfileForm>
            </ProfileSettingsWrap>
        </TransparentContainer>
    )
}
