import { $authHost, $host } from ".";

export const fetchUsers = async() => {
    const {data} = await $host.get('api/userlist')
    return data;
}