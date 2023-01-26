import './loading.css'
import { PageContainer } from '../authorization/auth.styles'
export const Loading = () => {
    return (
        <PageContainer>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </PageContainer>
    )
}
