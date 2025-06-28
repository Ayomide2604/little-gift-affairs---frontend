import pb from "./pocketbase";

const getImageUrl = (record, image) => {
	const imageUrl = pb.files.getURL(record, image);
	console.log("Image URL:", imageUrl);
	return imageUrl;
};

export default getImageUrl;
