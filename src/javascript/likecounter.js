var db;

// [START contador de likes]
function createCounter(ref, num_likes) {
    var batch = db.batch();

    // Inicializar el documento que almacenará los likes
    batch.set(ref, { num_likes: num_likes });

    // Empezar la cuenta de likes en 0
    for (let i = 0; i < num_likes; i++) {
        let likeRef = ref.collection('likes').doc(i.toString());
        batch.set(likeRef, { count: 0 });
    }

    // Commit the write batch
    return batch.commit();
}
// [END create_counter]


// [START increment_counter]
function incrementCounter(db, ref, num_likes) {

    // Select a shard of the counter at random
    const like_id = Math.floor(Math.random() * num_likes).toString();
    const like_ref = ref.collection('likes').doc(like_id);

    // Update count
    return like_ref.update("count", firebase.firestore.FieldValue.increment(1));
}
// [END increment_counter]


// [START get_count]
function getCount(ref) {
    // Sum the count of each shard in the subcollection
    return ref.collection('likes').get().then(snapshot => {
        let total_count = 0;
        snapshot.forEach(doc => {
            total_count += doc.data().count;
        });

        return total_count;
    });
}
// [END get_count]
