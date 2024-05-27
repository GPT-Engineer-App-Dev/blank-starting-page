import { createClient } from '@supabase/supabase-js';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Types and Relations:
 * 
 * Table: posts
 * - id: integer (Primary Key)
 * - title: text
 * - body: text
 * - created_at: timestamp with time zone (default: CURRENT_TIMESTAMP)
 * - author_id: uuid
 * 
 * Table: reactions
 * - id: integer (Primary Key)
 * - post_id: integer (Foreign Key to posts.id)
 * - user_id: uuid
 * - emoji: character (maxLength: 2)
 */

// Helper function to handle Supabase queries
const fromSupabase = async (query) => {
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data;
};

// React Query hooks for posts
export const usePosts = () => useQuery({
  queryKey: ['posts'],
  queryFn: () => fromSupabase(supabase.from('posts').select('*')),
});

export const useAddPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newPost) => fromSupabase(supabase.from('posts').insert([newPost])),
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });
};

// React Query hooks for reactions
export const useReactions = () => useQuery({
  queryKey: ['reactions'],
  queryFn: () => fromSupabase(supabase.from('reactions').select('*')),
});

export const useAddReaction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newReaction) => fromSupabase(supabase.from('reactions').insert([newReaction])),
    onSuccess: () => {
      queryClient.invalidateQueries('reactions');
    },
  });
};