import axios from "axios";

export const bookRepair = async (formData) => {
  try {
    const response = await axios.post("https://projectnewbackend1-1.onrender.com/api/repair/book", formData);
    return response.data;
  } catch (error) {
    console.error("Error booking repair:", error);
    throw error;
  }
};
