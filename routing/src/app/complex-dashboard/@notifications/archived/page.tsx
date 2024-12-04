import Card from '@/components/card'
import Link from 'next/link'

export default function ArchivedNotifications () {
  return (
    <Card>
      <div>
      <div>ArchivedNotifications</div>
      <Link href="/complex-dashboard" className='text-blue-500 text-2xl'>Default</Link>
      </div>
    </Card>
  )
}
