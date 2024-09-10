"use client"

import { Viewer, Worker } from "@react-pdf-viewer/core"
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"
import type { ToolbarProps, ToolbarSlot, TransformToolbarSlot } from "@react-pdf-viewer/toolbar"
import type * as React from "react"

interface Props {
  url: string
}

export default function PdfViewer({ url }: Props) {
  const transform: TransformToolbarSlot = (slot: ToolbarSlot) => ({
    ...slot,
    Open: () => <></>,
    OpenMenuItem: () => <></>,
    Print: () => <></>,
    PrintMenuItem: () => <></>,
    SwitchTheme: () => <></>,
    SwitchThemeMenuItem: () => <></>,
  })

  const renderToolbar = (Toolbar: (props: ToolbarProps) => React.ReactElement) => (
    <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
  )
  const defaultLayoutPluginInstance = defaultLayoutPlugin({ renderToolbar })
  const { renderDefaultToolbar } = defaultLayoutPluginInstance.toolbarPluginInstance

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/legacy/build/pdf.worker.min.js">
      <div className="h-[calc(100vh-200px)] sm:h-[calc(100vh-150px)] md:h-[calc(100vh-180px)] w-full">
        <Viewer
          fileUrl={url}
          theme={"light"}
          renderError={() => (
            <div className="h-[400px] flex items-center justify-center">
              <p>Error loading pdf</p>
            </div>
          )}
          renderLoader={() => (
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center space-y-6">
                <p>Depending on the size of the report and your connection, this may take a minute to load.</p>
              </div>
            </div>
          )}
          plugins={[defaultLayoutPluginInstance]}
        />
      </div>
    </Worker>
  )
}
