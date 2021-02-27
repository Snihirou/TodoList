import {ActionType, userReducer, UserType} from "./user-reducer";

test("increment age", () => {
    const startUser: UserType = {
        name: "Alex",
        age: 29 ,
        childrenCount: 3
    }
    const endUser = userReducer(startUser, {type: "incAge"})
    expect(endUser.age).toBe(30)
})

test("changeName", () => {
    const startUser: UserType = {
        name: "Alex",
        age: 29 ,
        childrenCount: 3
    }

    const myAction: ActionType = {type: "changeName", newName: "Bob"}

    const endUser = userReducer(startUser, myAction)
    expect(endUser.name).toBe("Bob")
})