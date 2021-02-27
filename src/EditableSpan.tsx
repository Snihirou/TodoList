import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {TextField} from "@material-ui/core";

type EditableSpanPropsType = {
    title: string
    changeTitle: (newTitle: string) => void
}


function EditableSpan(props: EditableSpanPropsType) {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [title, setTitle] = useState<string>(props.title)
    const onEditMode = () => setEditMode(true)
    const offEditMode = () => {
        setEditMode(false)
        if (title.trim()) {
            props.changeTitle(title.trim())
        }
    }
        const changeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
        return (
            editMode
                ? <TextField
                    onBlur={offEditMode}
                    autoFocus
                    value={title}
                    onChange={changeTitle}
                />
                // ? <input
                //     onBlur={offEditMode}
                //     autoFocus
                //     value={title}
                //     onChange={changeTitle}/>
                : <span onDoubleClick={onEditMode}>{props.title}</span>
        )
    }

    export default EditableSpan