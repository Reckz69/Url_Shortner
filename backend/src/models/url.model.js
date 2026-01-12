import mongoose, {Schema} from "mongoose";

const urlSchema = new Schema(
  {
    originalUrl: {
      type: String,
      required: true,
      trim: true,
    },

    shortId: {
      type: String,
      required: true,
      unique: true,
      index: true, // FAST redirect
    },

    shortUrl: {
      type: String,
      required: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      index: true,
      default: null,
    },

    clicks: {
      type: Number,
      default: 0,
    },

    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },

    expiresAt: {
      type: Date,
      default: null,
      index: { expires: 0 }, // TTL support
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Url = mongoose.model("Url", urlSchema);

export {Url}