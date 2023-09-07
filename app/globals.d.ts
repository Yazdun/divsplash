import { Database as DB } from '@/lib/database.types'

type Doodle = DB['public']['Tables']['doodles']['Row']
type Profile = DB['public']['Tables']['profiles']['Row']
type Download = DB['public']['Tables']['downloads']['Row']

declare global {
  type Database = DB
  type TDoodle = Doodle
  type TProfile = Profile
  type TDownload = Download
}
