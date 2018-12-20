import request from "superagent";
import { camelizeKeys } from "humps";

import API_CALL from "src/constants/API_CALL";

export default () => next => action => {
  if (!action[API_CALL]) return next(action);

  let args = action[API_CALL];
  let newAction = Object.assign({}, action, { [API_CALL]: undefined });
  let [requestType, successType, errorType] = args.types;

  next(Object.assign({}, newAction, { type: requestType }));

  request[args.method.toLowerCase()](args.endpoint)
    .then(({ body }) => {
      let data = camelizeKeys(body);

      next(Object.assign({}, newAction, { type: successType, data: data }));
    })
    .catch((error) => {
      next(Object.assign({}, newAction, { type: errorType, error: error }));
    });
};
