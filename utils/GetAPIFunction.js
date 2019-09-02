export async function fetchDataAPI(url) {
  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    if (responseJson.status === "success") {
      return responseJson;
    }
  } catch (error) {
    return error;
  }
}
