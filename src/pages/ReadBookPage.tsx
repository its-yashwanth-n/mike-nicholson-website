import { useParams } from 'react-router-dom'
import { PageHero } from '@/components/common/PageHero'
import { PdfViewer } from '@/components/common/PdfViewer'

export function ReadBookPage() {
  const { bookname = '' } = useParams<{ bookname: string }>()
  const pdfUrl = `https://mikenicholson.s3-ap-southeast-2.amazonaws.com/pdf/${bookname.replace(/ /g, '+')}.pdf`

  return (
    <div>
      <PageHero title={bookname} />
      <PdfViewer url={pdfUrl} title={bookname} />
    </div>
  )
}
