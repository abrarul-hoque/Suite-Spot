import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    from: {
      type: Date,
      required: true,
    },
    to: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    guests: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    host: {
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically creates 'createdAt' and 'updatedAt' fields
  }
);

// Export the model
export default mongoose.models.Room || mongoose.model("Room", RoomSchema);
