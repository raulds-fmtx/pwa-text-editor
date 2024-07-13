import { openDB } from "idb";

const DB_NAME = "jate";
const DB_VERSION = 1;
const STORE_NAME = "content";

export const initDB = async () => {
  const db = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    },
  });
};

export const saveContent = async (content) => {
  const db = await openDB(DB_NAME, DB_VERSION);
  const tx = db.transaction(STORE_NAME, "readwrite");
  tx.store.put(content, "text");
  await tx.done;
};

export const getContent = async () => {
  const db = await openDB(DB_NAME, DB_VERSION);
  const tx = db.transaction(STORE_NAME, "readonly");
  const content = await tx.store.get("text");
  return content;
};
