import axios from 'axios'

export const createAvatar = async (username) => {
    return await axios.get(
        `https://ui-avatars.com/api/?background=random&name=${username}`,
        {
            responseType: 'blob' /* or responseType: 'arraybuffer'  */,
        }
    )
}
