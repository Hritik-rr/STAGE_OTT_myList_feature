"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/TVShow.ts
const mongoose_1 = __importStar(require("mongoose"));
const TVShowSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    genres: [{ type: String, enum: ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Romance', 'SciFi'] }],
    episodes: [
        {
            episodeNumber: { type: Number, required: true },
            seasonNumber: { type: Number, required: true },
            releaseDate: { type: Date, required: true },
            director: { type: String, required: true },
            actors: [{ type: String }]
        }
    ]
});
// TVShowSchema.index({ _id: 1 });
const TVShow = mongoose_1.default.model('TVShow', TVShowSchema);
exports.default = TVShow;
