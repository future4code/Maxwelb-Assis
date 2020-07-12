import {connection} from "./index";

const usersTable = "toDoListUsers"

export const createUser = async (
name: string,
nickname: string,
email: string): promise<void> => {
const id = (new Date()).getTime()
    await connection
    .insert({
        id,
        name,
        nickname,
        email
    })
    .into(usersTable)
}





)