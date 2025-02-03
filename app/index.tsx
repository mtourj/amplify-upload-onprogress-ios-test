import { Button, View } from "react-native";
import uploadData from "@/upload-test";
import { Asset } from "expo-asset";

export default function HomeScreen() {
  return (
    <View>
      <Button
        title="Upload"
        onPress={async () => {
          // Get the local asset
          const asset = Asset.fromModule(require("@/assets/test-image.jpg"));
          // Ensure the asset is loaded
          await asset.downloadAsync();
          const fileUri = asset.localUri;
          console.log("Starting upload...");

          try {
            const result = await uploadData(fileUri, (progress: number) => {
              console.log(`Progress: ${progress}`);
            });
            console.log("Upload complete", result);
          } catch (error) {
            console.log("Upload failed");
            console.error(error);
          }
        }}
      />
    </View>
  );
}
