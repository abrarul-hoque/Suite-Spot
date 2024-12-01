// import clientPromise from "@/lib/dbconnect";
// import Room from "@/models/Room";

// export async function GET() {
//   await clientPromise();

//   try {
//     const rooms = await Room.find();
//     console.log(rooms);
//     return Response.json({ rooms })
//   } catch (err) {
//     console.log(err);
//   }

// }


import clientPromise from "@/lib/dbconnect"; // Assuming this is the correct import
import Room from "@/models/Room"; // Assuming you have a Room model

// GET handler to retrieve all rooms
export async function GET() {
  try {
    // Await the clientPromise to get the MongoClient instance
    const client = await clientPromise;

    // Access the database and collection
    const db = client.db("Suite-Spot"); // Replace with your actual DB name
    const rooms = await db.collection("rooms").find().toArray();

    // Return the rooms as a JSON response
    return new Response(JSON.stringify({ rooms }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error fetching rooms:", err);
    return new Response(
      JSON.stringify({ error: "Failed to fetch rooms" }),
      { status: 500 }
    );
  }
}
