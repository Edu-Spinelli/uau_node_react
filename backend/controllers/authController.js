const { loginUser } = require('../services/authService');

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await loginUser(username, password);
        res.json({ message: 'Login bem-sucedido', user });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

module.exports = { login };
