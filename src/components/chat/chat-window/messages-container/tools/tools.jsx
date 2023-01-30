import { ToolsItem, ToolsItemWrap, ToolsList, ToolsWrap } from './tools.styles'
import { useEffect, useState } from 'react'
import { deleteDoc, doc } from '@firebase/firestore'
import { firestore } from '../../../../../services/firebase'

export const Tools = ({ hideTools, pos, message }) => {
    const handleDeleteMessage = () => {
        deleteDoc(doc(firestore, 'messages', message))
            .then(() => {
                console.log('Document successfully deleted: ', message)
            })
            .catch((error) => {
                console.error('Error removing document: ', error)
            })
    }

    return (
        <ToolsWrap onClick={hideTools}>
            <ToolsList pos={pos}>
                <ToolsItemWrap onClick={handleDeleteMessage}>
                    <ToolsItem>Delete</ToolsItem>
                </ToolsItemWrap>
                <ToolsItemWrap>
                    <ToolsItem>Edit</ToolsItem>
                </ToolsItemWrap>
                <ToolsItemWrap>
                    <ToolsItem>Reply</ToolsItem>
                </ToolsItemWrap>
            </ToolsList>
        </ToolsWrap>
    )
}
