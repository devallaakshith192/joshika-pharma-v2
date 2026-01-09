"use client"

import type React from "react"
import { Suspense } from "react"
import ScrollToTop from "./scroll-to-top"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>{children}</Suspense>
    </>
  )
}
