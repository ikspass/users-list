import { $authHost } from ".";

export const fetchUsers = async() => {
    const {data} = await $authHost.get('api/userlist')
    return data;
}