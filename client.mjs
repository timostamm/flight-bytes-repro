import { createFromNodeStream } from "react-server-dom-webpack/client.node";

const result = await createFromNodeStream(process.stdin, {
  moduleMap: {},
  serverModuleMap: null,
  moduleLoading: null,
});
if (ArrayBuffer.isView(result)) {
  console.log("root:", result);
} else {
  console.log("nested:", result.nested);
  console.log("viaPromise:", await result.viaPromise);
}
