import { Spinner } from '@/components/ui/spinner'

export function PageLoader() {
  return (
    <div className="fixed inset-0 bg-background/50 flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-4">
        <Spinner size="lg" />
      </div>
    </div>
  )
}