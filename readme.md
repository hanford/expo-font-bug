How to repro:

```sh
npm install
npm run start
```

Fonts never load, and I eventually get an MD5 mismatch error:

```sh
[Unhandled promise rejection: Error: Downloaded file for asset 'babysweet.ttf' Located at http://192.168.1.55:19000/assets/assets/fonts/babysweet.ttf?platform=ios&hash=7c9263d3cffcda46ff7a4d9c00472c07?platform=ios&dev=true&hot=false&minify=false failed MD5 integrity check]
at node_modules/expo-asset/build/PlatformUtils.js:53:18 in _downloadAsyncManagedEnv
at [native code]:null in flushedQueue
at [native code]:null in invokeCallbackAndReturnFlushedQueue
```
