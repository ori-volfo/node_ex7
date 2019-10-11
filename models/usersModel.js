let axios = require('axios');

exports.getUsers = function()
{
    return axios.get('https://jsonplaceholder.typicode.com/users');

};

exports.getUserData = async function(id)
{
    let users = await axios.get('https://jsonplaceholder.typicode.com/users');
    return users.data.find(user=>user.id == id);

};