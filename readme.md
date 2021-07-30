How to repro:

```sh
npm install
npm run start
```

Fonts don't load, and I eventually get an MD5 mismatch error:

```sh
[Unhandled promise rejection: Error: Downloaded file for asset 'babysweet.ttf' Located at http://192.168.1.55:19000/assets/assets/fonts/babysweet.ttf?platform=ios&hash=7c9263d3cffcda46ff7a4d9c00472c07?platform=ios&dev=true&hot=false&minify=false failed MD5 integrity check]
at node_modules/expo-asset/build/PlatformUtils.js:53:18 in _downloadAsyncManagedEnv
at [native code]:null in flushedQueue
at [native code]:null in invokeCallbackAndReturnFlushedQueue
```

This seems to happen with any `.ttf` font I try...

<img src="https://github.com/hanford/expo-font-bug/blob/main/iphone.gif" width="320" />

- We get a MD5 mismatch on the fonts.
- the URL includes `/assets/assets/..` which looks maybe incorrect?
- Font URL seems malformed (two `?` in the query params):
  - http://10.103.48.232:19000/assets/assets/fonts/babysweet.ttf?platform=ios&hash=5751ffa9c86291f684a5d30b67814476?platform=ios&dev=true&hot=false&minify=false
- What's also strange is manually manipulating the URL quickly seems to work
  - manually modify the URL to the following: http://10.103.48.232:19000/assets/fonts/babysweet.ttf
  - remove the `f` from `.ttf` causing an legitament 404 in the metro server
  - quickly restore the `f`, hit enter and you'll be served the font

![preview](https://github.com/hanford/expo-font-bug/blob/main/weird.gif)
