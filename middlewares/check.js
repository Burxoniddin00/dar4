export function checkValue(req, res, next) {
    const { username, name, phone, email } = req.body;
    if (
        username.length > 20 ||
        username.length < 3 ||
        !isNaN(username) ||
        /[@#!$%^&*:']/g.test(username)
    )
        return res.send("Invalid value");

    return next();
}
