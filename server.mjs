import { renderToPipeableStream } from "react-server-dom-webpack/server.node";

const buffer = Buffer.from([1, 2, 3, 4]);
const model =
  process.argv[2] === "root"
    ? buffer
    : { nested: buffer, viaPromise: Promise.resolve(buffer) };
renderToPipeableStream(model, {}).pipe(process.stdout);
