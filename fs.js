import { open, copyFile, readFile, writeFile, appendFile } from "fs/promises";

let filehandle;
try {
  filehandle = await open("source.txt", "r");
  await copyFile("source.txt", "destination.txt");
  const stat = await filehandle.stat();

  const data = new Uint8Array(Buffer.from("Hello Node.js"));
  await writeFile("source.txt", data);
  await appendFile("source.txt", data);

  const content = await readFile("source.txt");

  console.log({ content: content.toString() });
  //   console.log({ stat });
} catch (error) {
  console.log({ error });
} finally {
  await filehandle?.close();
}
