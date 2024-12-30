//imports
import NotesList from "../../../components/workspaceComponents/notes/notesList"
import NotesEditor from "../../../components/workspaceComponents/notes/notesEditor"
import WorkspaceHeader from "../../../components/workspaceComponents/workspaceHeader"


const NotesPage = () => {
    return (
        <>
            <WorkspaceHeader />

            <div className="emberWraper">
                <NotesList />
                <NotesEditor />
            </div> {/* continue development in the future, because still in development */}
        </>
    )
}

export default NotesPage