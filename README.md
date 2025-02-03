To replicate this issue:

- Install deps (including expo-dev-client)
- run `npm run upload-server` to start the file upload server (to accept test file uploads)
- run `npm run ios` to start the app on iOS
- Click the "Upload" button and observe the console logs
- Note that progress events are never printed.
- Now stop the expo app, delete ios/ directory, run `npm uninstall expo-dev-client` and re-run the app using `npm run ios`.
- Click the "Upload" button and observe the console logs
- Note that progress events are printed normally.

This will have showed that onprogress callbacks are not fired when running an expo-dev-client development build on iOS.
