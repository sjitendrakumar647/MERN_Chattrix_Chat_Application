import jwt from 'jsonwebtoken';

const createTokenAndSaveCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_TOKEN, { 
        expiresIn: '25d' 
    });
    res.cookie('jwt', token, { 
        httpOnly: true, 
        // expires: new Date(Date.now() + 60 * 60 * 1000) 
        secure: true,
        //   secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'  // for HTTPS only, 'none' for all cookies
    });
    // document.cookie = `token=${token};path=/;expires=${new Date(Date.now() + 60 * 60 * 1000).toUTCString()}`;
};

export default createTokenAndSaveCookie;