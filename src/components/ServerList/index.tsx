import React from "react";
import ServerButton from "../ServerButton";
import { Container, Separator } from './styles'

const ServerList: React.FC = () => {
    return (
        <Container>

            <ServerButton isHome />

            <Separator />

            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton mentions={3} />
            <ServerButton mentions={6} />
            <ServerButton hasNotifications />
            <ServerButton mentions={1} />
            <ServerButton hasNotifications />
            <ServerButton mentions={8} />
            <ServerButton />
            <ServerButton />
            <ServerButton />

        </Container>
    )
}

export default ServerList