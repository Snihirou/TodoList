export type UserType = {
    name: string
    age: number
    childrenCount: number
}

export type ActionType = {
    type: string
    [key: string]: any
}

// function incCount(user: UserType) {
//     return {...user, childrenCount: user.childrenCount + 1}
// }
//
// function changeName(user: UserType, newName: string) {
//     return {...user, name: newName}
// }

export function userReducer(user: UserType, action: ActionType) {
    switch (action.type) {
        case "incAge":
            return {...user, age: user.age + 1}
        case "incCount":
            return {...user, childrenCount: user.childrenCount + 1}
        case "changeName":
            return {...user, name: action.newName}
        default:
            return user
    }
}