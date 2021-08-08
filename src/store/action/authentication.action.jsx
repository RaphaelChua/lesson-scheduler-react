import { authenticationConstant } from "../constants";
import * as API from "../../services/API";
import { history } from "../../utils/history";
import jwt from "jsonwebtoken";

const authenticate = (email, password) => {
  return async (dispatch) => {
    try {
      const token = await (await API.authenticate(email, password)).data;

      localStorage.setItem("token", token);

      const decodedToken = jwt.verify(token, process.env.jwtPrivateKey);

      const userInfo = {
        id: decodedToken.id,
        email: decodedToken.email,
        firstName: decodedToken.firstName,
        lastName: decodedToken.lastName,
        phoneNumber: decodedToken.phoneNumber,
      };
      dispatch({
        type: authenticationConstant.AUTHENTICATION_SUCCESS,
        payload: userInfo,
      });

      history.push("/v1/main");
    } catch (err) {
      dispatch({
        type: authenticationConstant.AUTHENTICATION_FAILED,
        error: err.response.data,
      });
    }
  };
};

export const authenticationAction = {
  authenticate,
};
