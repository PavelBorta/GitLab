const express = require('express');

module.exports = (Collection) => {

  const create = (req, res) => {
    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birthday: req.body.birthday,
      country: req.body.country,
    };

    Collection.create(newUser, (e, newUser) => {
      if (e) {
        console.log(e);
        res.status(500).send(e);
        return;
      }

      res.status(201).send(newUser);
    });
  }

  const getList = (_, res) => {
    Collection.find({}, (e, result) => {
      if (e) {
        console.log(e);
        res.sendStatus(404);
        return;
      }

      res.send(result);
    });
  };

  const getById = (req, res) => {
    const { id } = req.params;

    Collection.findById(id, (e, result) => {
      if (e) {
        console.log(e);
        res.sendStatus(404);
        return;
      }

      res.send(result);
    });
  };

  const update = (req, res) => {
    const updated = req.body;
    Collection.update({ _id: req.params.id }, { $set: updated }, (e) => {
      if (e) {
        console.log(e);
        res.sendStatus(404);
        return;
      }

      res.status(201).send();
    });
  };

  const remove = (req, res) => {
    Collection.deleteOne({ _id: req.params.id }, (e) => {
      if (e) {
        res.sendStatus(404);
        return;
      }

      res.send('DELETED');
    });
  };

  const router = express.Router('/users');

  router.get('/', getList);
  router.get('/:id', getById);
  router.post('/', create);
  router.put('/:id', update);
  router.delete('/:id', remove);

  return router;
}