import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { type UserFilterProps } from '@/types/user'

export function UserFilter({ searchTerm, onSearchChange }: UserFilterProps) {
  return (
    <div className="relative md:max-w-md md:w-[300px]">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search by name or @username..."
        value={searchTerm}
        onChange={e => onSearchChange(e.target.value)}
        className="pl-10"
        aria-label="Search users"
      />
    </div>
  )
}
