import axios from "axios";

const getData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error: any) {
    return "There was some error in processing your request";
  }
};

export { getData };
