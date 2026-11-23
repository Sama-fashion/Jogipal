import {Header,MobileNav} from '@/components/portal-header'
import {Portal} from '@/components/portal'
export default function Page(){const date=new Intl.DateTimeFormat('bn-BD',{timeZone:'Asia/Dhaka',weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(new Date());return <><Header date={date}/><Portal/><MobileNav/></>}
