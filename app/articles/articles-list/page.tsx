import { redirect } from 'next/navigation'

// The category listing moved to dedicated routes (/blog, /news, /documents).
// /news is the default landing page.
export default function ArticlesListRedirect() {
  redirect('/news')
}
