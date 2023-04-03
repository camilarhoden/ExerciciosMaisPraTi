import { Container, Grid} from "./styles";
import NotesContext from "../../hooks/notesContext";
import { useContext } from "react";

export function StickyNotes() {
    const { notes } = useContext<any>(NotesContext);
    return (
        <Container>
            <div className="reminderTitle">
                <h1>Reminders - {notes.length}</h1>
            </div>
            <Grid>
                {notes.map((notes:any) => (
                <div key={notes.title}>
                    <h2>{notes.title}</h2>
                    <p>{notes.description}</p>
                </div>
                ))}
            </Grid>
        </Container>
    );
}