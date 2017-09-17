import { ZgwnuBonitaSessionInterface } from './zgwnu-bonita-session.interface'

export class ZgwnuBonitaSession implements ZgwnuBonitaSessionInterface {
  user_id: string = ''
  user_name: string = ''
  session_id: string = ''
  conf: string = ''
  is_technical_user: boolean = false
  version: string = ''
  tenant?: string = ''
  token?: string = ''
}
