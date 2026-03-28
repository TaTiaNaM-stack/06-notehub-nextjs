import { Note } from "@/types/note";
import css from "./NoteDetails.module.css";

interface NoteDetailsClientProps {
  note: Note;
}

const NoteDetailsClient = ({ note }: NoteDetailsClientProps) => {
    console.log(note);
     return (
        <div className={css.container}>
          <div className={css.item}>
              <div className={css.header}>
                  <h2>Note title</h2>
              </div>
              <p className={css.tag}>{note.tag}</p>
              <p className={css.content}>Note content</p>
              <p className={css.date}>Created date</p>
          </div>
        </div>
     );
 }

 export default NoteDetailsClient;