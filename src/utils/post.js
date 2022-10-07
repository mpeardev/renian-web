export const post = async (url, data, method = "POST") => {
  try {
    const rawResponse = await fetch(`${url}`, {
      method,
      headers: {
        Accept: "application/json",
      },
      body: data,
    });

    const content = await rawResponse.json();
    return content;
  } catch (error) {
    console.log(error);
  }
};

export const urlToObject = async (url) => {
  try {
    const response = await fetch(url);
    console.log(response);
    const blob = await response.blob();
    const file = new File([blob], "image.jpg", { type: "image/jpeg" });
    return file;
  } catch (error) {
    console.log(error);
  }
};

export const get = async (url) => {
  try {
    const rawResponse = await fetch(url);
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    console.log(error);
  }
};
