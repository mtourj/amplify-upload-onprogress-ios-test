function uploadFile(file, progressCallback) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    // Set up progress handler
    xhr.upload.onprogress = (event) => {
      console.log("Progress event:", event);
      if (event.lengthComputable) {
        const progress = (event.loaded / event.total) * 100;
        progressCallback(progress);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(new Error(`Upload failed with status ${xhr.status}`));
      }
    };

    xhr.onerror = () => {
      reject(new Error("Upload failed"));
    };

    xhr.open("POST", "http://localhost:3000/upload");

    const formData = new FormData();
    formData.append("file", {
      uri: file,
      type: "image/jpeg",
      name: "image.jpg",
    });

    xhr.send(formData);
  });
}

export default uploadFile;
