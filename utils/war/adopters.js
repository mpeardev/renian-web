import { API } from "../../config";

export const getExist = async (token, route, value) => {
  try {
    const response = await fetch(
      `${API.war}adopters/${route}?${route}=${value}`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-token": token,
        },
      }
    )
      .then((content) => {
        if (content.ok) {
          return content.json();
        }
        throw new Error("Something went wrong");
      })
      .then((responseJson) => {
        return responseJson;
      });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleAdopter = async (
  token,
  country,
  document,
  documentNumber
) => {
  try {
    const response = await fetch(
      `${API.war}adopters?country=${country}&document=${document}&documentNumber=${documentNumber}`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-token": token,
        },
      }
    )
      .then((content) => {
        if (content.ok) {
          return content.json();
        }
        throw new Error("Something went wrong");
      })
      .then((responseJson) => {
        return responseJson;
      });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handlePost = async (data, token, method, id = "") => {
  try {
    const content = await fetch(`${API.war}adopters/${id}`, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "x-token": token,
      },
      method,
    });
    const response = await content.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleAdopterAddress = async (token, address) => {
  try {
    const response = await fetch(
      `${API.war}adopters/address?address=${address}`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-token": token,
        },
      }
    )
      .then((content) => {
        if (content.ok) {
          return content.json();
        }
        throw new Error("Something went wrong");
      })
      .then((responseJson) => {
        return responseJson;
      });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleAdopterPublic = async (address) => {
  try {
    const response = await fetch(
      `${API.war}adopters/public?address=${address}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((content) => {
        if (content.ok) {
          return content.json();
        }
        throw new Error("Something went wrong");
      })
      .then((responseJson) => {
        return responseJson;
      });

    return response;
  } catch (error) {
    console.log(error);
  }
};
