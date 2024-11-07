const { findUserByUsername } = require('../models/userModel');

const loginUser = async (username, password) => {
    const user = await findUserByUsername(username);
    if (!user || user.password !== password) {
        throw new Error('Credenciais inválidas');
    }
    return user;
};

module.exports = { loginUser };
