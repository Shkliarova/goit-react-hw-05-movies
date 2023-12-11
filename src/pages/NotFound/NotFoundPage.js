
import { Container, Wrapper, NotFoundLink } from "./NotFound.styled"

export default function NotFoundPage() {
    return (
        <Container>
            <Wrapper>You must be lost!</Wrapper> Please use this <NotFoundLink to="/">link</NotFoundLink> to navigate to <Wrapper>home page.</Wrapper>
        </Container>
    )
}