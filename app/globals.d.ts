import { Database as DB } from '@/lib/database.types'

type Doodle = DB['public']['Tables']['doodles']['Row']

declare global {
  type Database = DB
  type TDoodle = Doodle
}
