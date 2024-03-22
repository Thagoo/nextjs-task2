"use server";
export const fetchUsersList = async () => {
  const USERDATA_API = process.env.USERDATA_API;

  try {
    const response = await fetch(USERDATA_API);

    if (!response.ok) {
      console.log(response);
      throw new Error(response);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
