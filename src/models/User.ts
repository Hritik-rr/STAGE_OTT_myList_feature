import mongoose, { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Genre } from './GenreTypes';

export interface IUser extends Document {
  userId: string; 
  username: string;
  preferences: {
    favoriteGenres: Genre[];
    dislikedGenres: Genre[];
  };
  watchHistory: Array<{
    contentId: string;
    watchedOn: Date;
    rating?: number;
  }>;
  myList: Array<{
    itemId: string; 
    itemType: 'Movie' | 'TVShow'; 
  }>;
}

const UserSchema = new Schema<IUser>({
  // Generates UUID(default value) for userId  
  userId: { type: String, default: uuidv4}, 
  username: { type: String, required: true },
  preferences: {
    favoriteGenres: [{ type: String, enum: ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Romance', 'SciFi'] }],
    dislikedGenres: [{ type: String, enum: ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Romance', 'SciFi'] }]
  },
  watchHistory: [
    {
      contentId: { type: String, required: true },
      watchedOn: { type: Date, required: true },
      rating: { type: Number }
    }
  ],
  myList: [
    {
      itemId: { type: String, required: true },
      itemType: { type: String, enum: ['Movie', 'TVShow'], required: true }
    }
  ]
});

// Indexing userId field
// UserSchema.index({ userId: 1 });

// Compound indexing on itemId and ItemType under myList array 
UserSchema.index({ 'myList.itemType': 1, 'myList.itemId': 1 });

const User = mongoose.model<IUser>('User', UserSchema);
export default User;
