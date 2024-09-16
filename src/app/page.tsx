import dynamic from "next/dynamic"
import "@react-pdf-viewer/core/lib/styles/index.css"
import "@react-pdf-viewer/default-layout/lib/styles/index.css"
import "@react-pdf-viewer/toolbar/lib/styles/index.css"

export const PdfViewerContainer = dynamic(() => import("./PdfViewer"), {
  ssr: false,
})

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto pt-10 space-y-4">
      <h1 className="text-4xl font-bold">Test pdf</h1>
      <PdfViewerContainer url="https://pdfobject.com/pdf/sample.pdf" />
    </div>
  )
}
