import { redirect } from 'next/navigation'

// The "Documents" category was replaced by "Case Study". Keep the old URL working.
export default function TinTucDocumentsPage() {
  redirect('/tin-tuc/case-study')
}
