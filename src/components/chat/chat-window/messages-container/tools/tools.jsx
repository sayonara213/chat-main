import { ToolsItem, ToolsItemWrap, ToolsList, ToolsWrap } from './tools.styles'
import { firestore } from '../../../../../services/firebase'
import { collection, deleteDoc, doc, getDoc } from 'firebase/firestore'
import { useDispatch } from 'react-redux'
import { setEdit, setInput, setReply } from '../../../../../redux/messageSlice'
import { setSelectedMessage } from '../../../../../redux/chatsSlice'

export const Tools = ({ hideTools, pos, message, chatId }) => {
    const currentChatRef = doc(collection(firestore, 'chats'), chatId)
    const messageRef = doc(
        collection(currentChatRef, 'messages'),
        message.messageId
    )

    const dispatch = useDispatch()

    const handleDeleteMessage = () => {
        deleteDoc(messageRef)
            .then(() => {
                console.log(
                    'Document successfully deleted: ',
                    message.messageId
                )
            })
            .catch((error) => {
                console.error('Error removing document: ', error)
            })
    }

    const handleEditMessage = () => {
        getDoc(messageRef).then((doc) => {
            if (doc.exists()) {
                dispatch(setSelectedMessage(message))
                dispatch(setInput(doc.data().text))
                dispatch(setEdit(true))
            } else {
                console.log('No such document!')
            }
        })
    }

    const handleReplyMessage = () => {
        getDoc(messageRef).then((doc) => {
            if (doc.exists()) {
                dispatch(setSelectedMessage(message))
                dispatch(setReply(true))
            } else {
                console.log('No such document!')
            }
        })
    }

    const handleCopyMessage = () => {
        navigator.clipboard.writeText(message.text)
    }

    return (
        <ToolsWrap onClick={hideTools}>
            <ToolsList pos={pos}>
                <ToolsItemWrap onClick={handleDeleteMessage}>
                    <ToolsItem>Delete</ToolsItem>
                </ToolsItemWrap>
                <ToolsItemWrap onClick={handleEditMessage}>
                    <ToolsItem>Edit</ToolsItem>
                </ToolsItemWrap>
                <ToolsItemWrap onClick={handleReplyMessage}>
                    <ToolsItem>Reply</ToolsItem>
                </ToolsItemWrap>
                <ToolsItemWrap onClick={handleCopyMessage}>
                    <ToolsItem>Copy</ToolsItem>
                </ToolsItemWrap>
            </ToolsList>
        </ToolsWrap>
    )
}
