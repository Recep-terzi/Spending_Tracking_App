import { useState, useEffect,useRef } from "react";
import { db } from "../firebase/config";
import { onSnapshot, collection,query,where,orderBy } from "@firebase/firestore";
export const useCollection = (col,_query,_orderBy) => {
  const [belge, setBelge] = useState(null);
  const [error, setError] = useState(null);
  const q = useRef(_query).current;
  const oBy = useRef(_orderBy).current;
  useEffect(() => {
    let ref = collection(db, col);
    if(q){
        ref = query(ref,where(...q))
    }
    if(oBy){
        ref = query(ref,orderBy(...oBy))
    }
    const unsub = onSnapshot(
      ref,
      (snapshot) => {
        let sonuclar = [];
        snapshot.docs.forEach((doc) =>
          sonuclar.push({ ...doc.data(), id: doc.id })
        );
        setBelge(sonuclar);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("Veriler Getirilemedi");
      }
    );
    return () => unsub();
  });
  return { belge, error };
};
