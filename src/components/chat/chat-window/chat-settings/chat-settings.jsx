import { TransparentContainer } from '../../../transparent-container/transparent-container.styles'
import {
    ChatName,
    ChatSettingsButton,
    ChatSettingsWrap,
} from './chat-settings.styles'

export const ChatSettings = ({ handleClose }) => {
    return (
        <TransparentContainer onClick={handleClose}>
            <ChatSettingsWrap>
                <ChatName>Chat 1</ChatName>
                <ChatSettingsButton>Leave</ChatSettingsButton>
            </ChatSettingsWrap>
        </TransparentContainer>
    )
}
