import dynamic from "next/dynamic"

export const PdfViewerContainer = dynamic(() => import("./PdfViewer"), {
  ssr: false,
})

export default function Page() {
  return (
    <div>
      <h1>Test pdf</h1>
      <PdfViewerContainer url="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" />
    </div>
  )
}
