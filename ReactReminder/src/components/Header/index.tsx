import { Container } from "./styles";
import { Logo } from "../Logo";
import { Button } from "../Button";
import { useState } from "react";
import { NewStickyModal } from "../NewStickyModal";

export function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleOpenModal() {
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }

    return <Container>
        <Logo />
        <NewStickyModal isOpen={isModalOpen} onRequestClose={handleCloseModal}/>
        <Button title="Add Reminder" click={() => handleOpenModal()}/>
    </Container>;
}  