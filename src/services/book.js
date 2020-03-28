const serverURL = 'https://ti2-aux-2020.eu-gb.mybluemix.net';

const getAll = () => {
  return new Promise ((resolve, reject) => {
    fetch (`${serverURL}/book`, {method: 'GET'})
      .then (res => res.json ())
      .then (books => resolve (books))
      .catch (err => reject (`error GET /book: ${err.message}`));
  });
};
const getOne = id => {
  return new Promise ((resolve, reject) => {
    fetch (`${serverURL}/book/${id}`, {method: 'GET'})
      .then (res => res.json ())
      .then (books => resolve (books))
      .catch (err => reject (`error GET /book/${id}: ${err.message}`));
  });
};
const create = body => {
  return new Promise ((resolve, reject) => {
    fetch (`${serverURL}/book`, {
      method: 'POST',
      body: JSON.stringify (body),
      headers: {'Content-Type': 'application/json'},
    })
      .then (res => res.json ())
      .then (data => resolve (data._id))
      .catch (err => reject (`error POST /book: ${err.message}`));
  });
};
const update = (id, body) => {
  return new Promise ((resolve, reject) => {
    fetch (`${serverURL}/book/${id}`, {
      method: 'PUT',
      body: JSON.stringify (body),
      headers: {'Content-Type': 'application/json'},
    })
      .then (res => resolve ())
      .catch (err => reject (`error PUT /book${id}: ${err.message}`));
  });
};
const remove = id => {
  return new Promise ((resolve, reject) => {
    fetch (`${serverURL}/book/${id}`, {method: 'DELETE'})
      .then (res => resolve ())
      .catch (err => reject (`error DELETE /book/${id} : ${err.message}`));
  });
};
const reset = () => {
  return new Promise ((resolve, reject) => {
    fetch (`${serverURL}/book`, {method: 'PATCH'})
      .then (res => resolve ())
      .catch (err => reject (`error PATCH /book : ${err.message}`));
  });
};

export default {
  getAll,
  getOne,
  create,
  update,
  remove,
  reset,
};
