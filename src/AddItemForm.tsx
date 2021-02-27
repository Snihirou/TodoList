import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {Button, IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

function AddItemForm(props: AddItemFormPropsType) {
    const [title, setTitle] = useState<string>("")
    const [error ,setError] = useState<string | null>(null)

    const addItem = () => {
        const itemTitle = title.trim()
        if(itemTitle) {
            props.addItem(itemTitle)
        }else {
            setError ("Title is required")
        }
        setTitle("")
    }

    const onChangehandler = (event: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTitle(event.currentTarget.value)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {

        if (event.key === "Enter") addItem()
    }
    return (
        <div>
            <TextField
                // variant={"outlined"}
                value={title}
                onChange={onChangehandler}
                onKeyPress={onKeyPressHandler}
                error={!!error}
                helperText={error}
                label={"Title"}
            />
    {/*        <input*/}
    {/*            value={title}*/}
    {/*onChange={onChangehandler}*/}
    {/*onKeyPress={onKeyPressHandler}*/}
    {/*// className={error ? "error" : ""}*/}
    {/*/>*/}
    <IconButton
        color={"primary"}
        onClick={addItem}>
    <AddBox />
    </IconButton>
    {/*<button onClick={addItem}>+</button>*/}
    {/*{error && <div className={"error-message"}>{error}</div>}*/}
        </div>
    )

}

export default AddItemForm