export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      doodles: {
        Row: {
          created_at: string
          fileKey: string
          fileUrl: string
          id: string
          title: string
          user_id: string
        }
        Insert: {
          created_at?: string
          fileKey: string
          fileUrl: string
          id?: string
          title: string
          user_id: string
        }
        Update: {
          created_at?: string
          fileKey?: string
          fileUrl?: string
          id?: string
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "doodles_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      downloads: {
        Row: {
          created_at: string
          doodle_id: string
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          doodle_id: string
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string
          doodle_id?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "downloads_doodle_id_fkey"
            columns: ["doodle_id"]
            referencedRelation: "doodles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "downloads_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      likes: {
        Row: {
          created_at: string
          doodle_id: string
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          doodle_id: string
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string
          doodle_id?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "likes_doodle_id_fkey"
            columns: ["doodle_id"]
            referencedRelation: "doodles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "likes_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string
          id: string
          name: string
          role: string
        }
        Insert: {
          avatar_url: string
          id: string
          name: string
          role?: string
        }
        Update: {
          avatar_url?: string
          id?: string
          name?: string
          role?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
