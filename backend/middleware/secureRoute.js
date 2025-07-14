import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const secureRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (token) {
            const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);
            if (!decodedToken) {
                return res.status(401).json({ message: 'Access denied. Invalid token.' });
            }
        } else {
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }
        const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);
        if (!decodedToken) {
            return res.status(401).json({ message: 'Access denied. Invalid token.' });
        }
        const user = await User.findById(decodedToken.userId).select('-password');
        if (!user) {
            return res.status(401).json({ message: 'Access denied. User not found.' });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
}

export default secureRoute;