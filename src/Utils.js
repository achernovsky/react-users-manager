import axios from 'axios';

//get all users data from url
const getAllUsers = async () =>
{
    let users = [];

    let resp = await axios.get("https://jsonplaceholder.typicode.com/users")
    users = resp.data.map(item => {
        return {
            id: item.id,
            name: item.name,
            email: item.email,
            street: item.address.street,
            city: item.address.city,
            zipcode: item.address.zipcode,
            hasIncompleted: true
        }
    })
    return users;
}

//get data from url by user id
const getItemsById = async (id, url) =>
{
    let resp = await axios.get(url);
    let allItems = resp.data;
    let userItems = allItems.filter(x => x.userId === parseInt(id));
    return userItems;
}

const utils = {
    getAllUsers,
    getItemsById
}

export default utils;