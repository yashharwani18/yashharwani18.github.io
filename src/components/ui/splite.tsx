'use client'

import { Suspense, lazy } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

function ErrorFallback() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black/50 backdrop-blur-md">
      <p className="text-white/50 text-sm italic font-light">Interactive background unavailable</p>
    </div>
  )
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense 
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <span className="loader"></span>
          </div>
        }
      >
        <Spline
          scene={scene}
          className={className}
        />
      </Suspense>
    </ErrorBoundary>
  )
}
