import jwt from 'jsonwebtoken';

const createTokenAndSaveCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_TOKEN, { 
        expiresIn: '15d' 
    });
    res.cookie('jwt', token, { 
        httpOnly: true, 
        // expires: new Date(Date.now() + 60 * 60 * 1000) 
        secure: true,
        sameSite: 'strict'  // for HTTPS only, 'none' for all cookies
    });
    // document.cookie = `token=${token};path=/;expires=${new Date(Date.now() + 60 * 60 * 1000).toUTCString()}`;
};

export default createTokenAndSaveCookie;