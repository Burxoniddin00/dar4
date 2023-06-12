import { readFile, writeFile } from "../utils/fs.js";

export function GET(req, res) {
  try {
    let users = JSON.parse(readFile("books"));
    if (req.url.includes("?")) {
      let obj = req.query;
      if (Object.keys(obj)) {
        let result = [];
        for (let u of users) {
          let s = true;
          for (let key of Object.keys(obj)) {
            if (u[key] != obj[key]) {
              s = false;
              break;
            }
          }
          if (s) result.push(u);
        }
        users = result;
      }
      return res.end(JSON.stringify(users));
    }
    res.send(users);
  } catch (error) {
    res.send({
      status: 404,
      message: error.message,
      data: null,
    });
  }
}

export function GETID(req, res) {
  try {
    let { id } = req.params;
    let users = JSON.parse(readFile("books"));
    let findUser = users.find((u) => u.id == id);
    if (!findUser) throw new Error("Cannot user-" + id);
    res.send({
      status: 200,
      message: "success",
      data: findUser,
    });
  } catch (error) {
    res.send({
      status: 404,
      message: error.message,
      data: null,
    });
  }
}

export function POST(req, res) {
  try {
    let users = JSON.parse(readFile("books"));
    const { price, cotegory, name, yers, page } = req.body;
    let datas = "";
    req.on("data", (chunk) => {
      datas += chunk;
    });
    req.on("end", () => {
      datas = JSON.parse(datas);
      let { price, cotegory, name, yers, page } = datas;
      if (price && cotegory && name && yers && page) {
        datas.id = users.at(-1)?.id + 1 || 1;
        users.push(datas);

        writeFile("/books.json", users);
        return res.end("Ma'lumot  kiritildi! Id:" + datas.id);
      } else return res.end("Ma'lumot to'g'ri  kiritilmadi!");
    });
  } catch (error) {
    res.send({
      status: 404,
      message: error.message,
      data: null,
    });
  }
}

export function DELETE(res, req) {
  try {
    const { id } = req.params;
    const user = read("books.json");
    const myfilter = user.find((e) => e.id !== +id);
    res.end("Delit book id:" + id);
    writeFile("books.json", myfilter);
  } catch (error) {}
}

export function PUT(res, req) {
  try {
    let { id } = req.params;
    const users = read("clients.json");
    let datas = "";
    if (users.find((u) => u.id == id)) {
      req.on("data", (chunk) => {
        datas += chunk;
      });
      req.on("end", () => {
        datas = JSON.parse(datas);
        let { price, cotegory, name, yers, page } = datas;
        if (price && cotegory && name && yers && page) {
          let user = users.find((u) => u.id == id);
          user.name = name || user.name;
          user.cotegory = cotegory || user.cotegory;
          user.yers = yers || user.yers;
          user.page = page || user.page;
          writeFile("books.json", user);
          return res.end("Ma'lumot o'zgartirildi!");
        } else return res.end("Ma'lumot to'g'ri  kiritilmadi!");
      });
    } else {
      res.end("Not fonu User Id:" + id);
    }
  } catch (error) {}
}
