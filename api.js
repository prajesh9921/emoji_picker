import axios from "axios";

export const AllEmoji = async () => {
  const response = await axios
    .get(
      "https://emoji-api.com/categories/travel-places?access_key=25b86a68278a7c08e0dc78cfbab7c0614d1cdbaa"
    )
    .catch((e) => {
      console.log("error in AllEmoji", e);
    });

  //   console.log("res =>", response?.data);
  const res = response?.data || [];
  return res.filter((val, i) => i < 100);
};

export const SearchEmoji = async (searchTerm) => {
  console.log("search for this ", searchTerm);
  const response = await axios
    .get(
      `https://emoji-api.com/emojis?search=${searchTerm}&access_key=25b86a68278a7c08e0dc78cfbab7c0614d1cdbaa`
    )
    .catch((e) => {
      console.log("error in SearchEmoji", e);
    });

    
  const res = response?.data || [];
  return res.filter((val, i) => i < 100);
};
