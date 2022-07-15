import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
	"0xef6E3fe87440bCB8688C7FED5472Dd3DAf812b79",
);

(async () => {
	try {
		await editionDrop.createBatch([
			{
				name: "Leaf Village Headband",
				description: "This NFT will give you access to KonohaDAO!",
				image: readFileSync("scripts/assets/headband.jpg"),
			},
		]);
		console.log("✅ Successfully created a new NFT in the drop!");
	} catch (error) {
		console.error("failed to create the new NFT", error);
	}
})();
