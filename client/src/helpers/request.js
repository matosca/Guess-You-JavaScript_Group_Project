const Request = function (url) {
  this.url = url;
};

Request.prototype.get = function () {
  return fetch(this.url)
    .then( (response) => response.json() )
    .catch( (err) => console.error(err) );
};

Request.prototype.post = function (payload) {
  return fetch(this.url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {'Content-Type':'application/json'}
  })
    .then( (response) => response.json() )
    .catch( (err) => console.error(err) );
};

Request.prototype.put = function (payload) {
  return fetch(this.url, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {'Content-Type':'application/json'}
  })
    .then( (response) => response.json() )
    .catch( (err) => console.error(err) );
}

module.exports = Request;
