import { collection, addDoc } from "firebase/firestore";

try {
    const docRef = await addDoc(collection(db, "menu"), {
        nama: "Nasi goreng",
        harga: "10.000",
        gambar: 'https://cdn-2.tstatic.net/travel/foto/bank/images/kuliner-nasi-goreng-jawa-enak-untuk-menu-sarapan.jpg'
    });
    console.log("Document written with ID: ", docRef.id);
} catch (e) {
    console.error("Error adding document: ", e);
}

const querySnapshot = await getDocs(collection(db, "menu"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });