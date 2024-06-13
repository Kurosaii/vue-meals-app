import axiosClient from "../axiosClient";

export async function searchMeals({ commit }, search) {
  const response = await axiosClient.get(`search.php?s=${search}`);

  commit("setFilteredMeals", response.data.meals);
}
