import { TransparentContainer } from '../../../transparent-container/transparent-container.styles'
import {
    ChangeAvatarButton,
    ChangeAvatarIcon,
    ChangeAvatarWrap,
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
import { auth, firestore, storage } from '../../../../services/firebase'
import { CircleAvatar } from '../../circle-avatar/circle-avatar'
import { ProfileInput } from './profile-input/profile-input'
import { IMAGES } from '../../../../constants/images'
import TextareaAutosize from 'react-textarea-autosize'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { validationSchema } from './validation/user-info-validation'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { collection, query, where, updateDoc } from 'firebase/firestore'
import {
    notifyEndProgress,
    notifyError,
    notifyProgress,
    notifySuccess,
} from '../../../../services/notification'
import { updateProfile } from 'firebase/auth'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

export const ProfileSettings = ({ onclick }) => {
    const [userAuth, userLoading] = useAuthState(auth)

    const [userdb, loading, error, snapshot] = useCollectionData(
        query(collection(firestore, 'users'), where('uid', '==', userAuth.uid))
    )

    const [maxChar, setMaxChar] = useState(140)

    const [bio, setBio] = useState('')

    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
        },
        validationSchema: validationSchema,
    })

    const handleChangeBio = (e) => {
        setBio(e.target.value)
    }

    const handleBlurBio = () => {
        if (bio.length > 0) {
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
    }

    const handleSubmitUsername = () => {
        updateProfile(auth.currentUser, {
            displayName: formik.values.username,
        })
            .then(() => {
                notifySuccess('Profile updated successfully')
            })
            .catch(() => {
                notifyError('Profile update failed')
            })
        updateDoc(snapshot.docs[0].ref, {
            username: formik.values.username,
        })
    }

    const handleSubmitEmail = () => {
        updateProfile(auth.currentUser, {
            email: formik.values.email,
        })
            .then(() => {
                notifySuccess('Profile updated successfully')
            })
            .catch(() => {
                notifyError('Profile update failed')
            })
        updateDoc(snapshot.docs[0].ref, {
            email: formik.values.email,
        })
    }

    const uploadAvatar = (e) => {
        const notification = notifyProgress('Uploading avatar...')
        const file = e.target.files[0]

        const fileRef = ref(storage, `avatars/${userAuth.uid}/avatar.png`)
        uploadBytesResumable(fileRef, file)
            .then((uploadSnapshot) => {
                console.log('Uploaded a blob or file!')
                getDownloadURL(uploadSnapshot.ref).then((url) => {
                    updateProfile(auth.currentUser, {
                        photoURL: url,
                    }).then(() => {
                        updateDoc(snapshot.docs[0].ref, {
                            avatar: url,
                        }).then(() => {
                            notifyEndProgress(
                                notification,
                                'Avatar uploaded successfully'
                            )
                        })
                    })
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        setMaxChar(140 - bio.length)
    }, [bio])

    useEffect(() => {
        if (!loading) {
            setBio(userdb[0].bio)
        }
    }, [loading, userdb])

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
                        <ChangeAvatarWrap>
                            <ChangeAvatarButton
                                type={'file'}
                                accept="image/png, image/gif, image/jpeg"
                                onChange={uploadAvatar}
                            />
                            <ChangeAvatarIcon src={IMAGES.upload} />
                        </ChangeAvatarWrap>
                    </UserProfileAvatar>
                    <UserProfileName>{userAuth.displayName}</UserProfileName>
                    <UserProfileEmail>{userAuth.email}</UserProfileEmail>
                </UserProfileWrap>
                <UserProfileForm>
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
                            onsubmit={handleSubmitUsername}
                        />
                        <ProfileInput
                            text={'Email'}
                            placeholder={userAuth.email}
                            icon={IMAGES.email}
                            value={formik.values.email}
                            onchange={formik.handleChange}
                            name={'email'}
                            onsubmit={handleSubmitEmail}
                        />
                    </UserInputContainer>
                </UserProfileForm>
            </ProfileSettingsWrap>
        </TransparentContainer>
    )
}
