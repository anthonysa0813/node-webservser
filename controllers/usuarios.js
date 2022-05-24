const { response } = require("express");

const usuariosGet = (req, res = response) => {
  const query = req.query;

  res.json({
    message: "list all users - controller",
    query,
  });
};

const usuariosPost = (req, res) => {
  const body = req.body;
  console.log(body);
  res.json({
    message: "create a new user - controller - cague de ri",
    body,
  });
};

const usuariosPut = (req, res) => {
  const { id } = req.params;
  res.json({
    message: "update a user - controller",
    id,
  });
};

const usuariosPatch = (req, res) => {
  res.json({
    message: "update partial to a user - controller",
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    message: "delete a user - controller",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
