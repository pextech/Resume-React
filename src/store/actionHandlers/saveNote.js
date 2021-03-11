import axios from 'axios';

function saveNote(body) {
  const url = 'https://api-mybrand.herokuapp.com/messages';
  axios
    .post(url, body)
    .then(() => {
    //   dispatch(authSuccess(response.data));
    })
    .catch(() => {
    //   const message = (error.response
    //     && error.response.data
    //     && (error.response.data.message || error.response.data.Message))
    //   || error.message
    //   || error.toString();
      //   dispatch(authFail(message));
    });
}

export default saveNote;
