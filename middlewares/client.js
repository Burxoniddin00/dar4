export function client(req, res, next) {
  const { username, name, email, gender, city, money, age } = req.body;

  if (
    username.length > 20 ||
    username.length < 3 ||
    !isNaN(username) ||
    /[@#!$%^&*:']/g.test(username)
  )
    if (
      name.length > 20 ||
      name.length < 3 ||
      !isNaN(name) ||
      /[@#!$%^&*:']/g.test(username)
    )
      if (
        gender.length > 20 ||
        gender.length < 3 ||
        !isNaN(gender) ||
        /[@#!$%^&*:']/g.test(username)
      )
        if (
          email.length > 20 ||
          email.length < 3 ||
          !isNaN(email) ||
          /[#!$%^&*:']/g.test(username)
        )
          if (
            city.length > 20 ||
            city.length < 3 ||
            !isNaN(city) ||
            /[@#!$%^&*:']/g.test(username)
          )
            if (
              money.length > 20 ||
              money.length < 3 ||
              !isNaN(money) ||
              /[@#!$%^&*:']/g.test(username)
            )
              if (
                age > 65 ||
                age < 10 ||
                !isNaN(age) ||
                /[@#!$%^&*:']/g.test(username)
              )
                return res.send("Invalid value");

  return next();
}
