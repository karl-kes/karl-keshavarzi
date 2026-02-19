/**
 * Blog Post Registry
 * 
 * To add a new blog post:
 * 1. Create a new file in ./posts/ (e.g., my-new-post.js)
 * 2. Export postMeta and sections from it
 * 3. Import and register it here
 */

import * as preWaterlooThoughts from './posts/pre-waterloo-thoughts';

// All posts keyed by slug - add new posts here
const postModules = {
  'pre-waterloo-thoughts': preWaterlooThoughts,
};

// Derive the listing array from the registry (sorted newest first)
export const postList = Object.values(postModules)
  .map(m => m.postMeta)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

// Get full post data by slug
export function getPost(slug) {
  const mod = postModules[slug];
  if (!mod) return null;
  return {
    ...mod.postMeta,
    sections: mod.sections,
  };
}
