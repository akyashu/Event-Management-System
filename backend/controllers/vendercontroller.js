const db = require("../config/firebase");

module.exports.createVender = async function (req, res) {
  try {
    const data = req.body;
    await db.collection("venders").add(data);
    res.status(201).json("Vender Created Sucessfully");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.getVender = async function (req, res) {
  try {
    const useremail = req.body.email;
    const snapsh = db.collection("venders");
    var ref = await snapsh.where("email", "==", `${useremail}`).get();
    var list = [];
    ref.forEach((doc) => {
      list.push({ id: doc.id, data: doc.data() });
    });

    res.status(200).json(list);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.getAllVender = async function (req, res) {
  try {
    const snapsh = db.collection("users");
    var ref = await snapsh.get();
    var list = [];
    ref.forEach((doc) => {
      list.push({ id: doc.id, data: doc.data() });
    });
    res.status(200).json(list);
  } catch (error) {
    console.log(error.message);
  }
};
