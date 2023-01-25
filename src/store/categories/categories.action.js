import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { getCategoriesAndDocuments } from "../../utils/firebase.util";

export const fetchCategoriesStart = () => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
});

export const fetchCategoriesSuccess = (categories) => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});

export const fetchCategoriesFailed = (error) => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  payload: error,
});

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const categories = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
