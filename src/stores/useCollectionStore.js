import { create } from "zustand";
import pb from "../utils/pocketbase";
const useCollectionStore = create((set) => ({
	collections: [],
	loading: false,

	fetchCollections: async () => {
		try {
			set((state) => ({ ...state, loading: true }));
			const response = await pb.collection("Collections").getFullList({
				sort: "-created",
			});
			set((state) => ({
				...state,
				loading: false,
				collections: response,
			}));
			// console.log("collections:", response);
		} catch (error) {
			set((state) => ({ ...state, loading: false }));
			console.error(error);
		}
	},
}));

export default useCollectionStore;
