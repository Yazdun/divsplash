import { Database as DB } from '@/lib/database.types'

type Doodle = DB['public']['Tables']['doodles']['Row']
type Profile = DB['public']['Tables']['profiles']['Row']
type Download = DB['public']['Tables']['downloads']['Row']
type Like = DB['public']['Tables']['likes']['Row']

declare global {
  type Database = DB
  type TDoodle = Doodle
  type TProfile = Profile
  type TLike = Like
  type TDownload = Download
  type TDoodleWithStats = Doodle & {
    likes: number
    user_has_liked_doodle: boolean
  }
}
