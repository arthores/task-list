import React, { useContext } from "react";
import TaskContext from "../provider/context";

function NoteList () {
  const {
    taskList,
  } = useContext(TaskContext);

  return (
    <section className="note-list">
      { taskList.map((item) => (
        <div
          key={ item.id }
          className='task'
        >
          { item.note }
          <button>
            Delete
          </button>
          <button>
            Update
          </button>
        </div>
      )) }
    </section>
  )
};

export default NoteList;