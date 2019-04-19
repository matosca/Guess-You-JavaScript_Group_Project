const RequestHelper = function (url) {
  this.url = url;
};

RequestHelper.prototype.get = function () {
  return fetch(this.url)
    .then( (response) => response.json() )
    .catch( (err) => console.error(err) );
};

RequestHelper.prototype.post = function (payload) {
  return fetch(this.url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {'Content-Type':'application/json'}
  })
    .then( (response) => response.json() )
    .catch( (err) => console.error(err) );
};

RequestHelper.prototype.put = function (payload) {
  return fetch(this.url, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {'Content-Type':'application/json'}
  })
    .then( (response) => response.json() )
    .catch( (err) => console.error(err) );
}

module.exports = RequestHelper;
