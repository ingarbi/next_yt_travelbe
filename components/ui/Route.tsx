import clsx from "clsx"
import Link from "next/link"

interface linkProps {
    route: string
    name: string
    isActive: boolean
    onClick: () => void
}

const Route = ({route, name, isActive, onClick}:linkProps) => {
  return (
    <Link href={route} onClick={onClick} className={clsx(isActive && "bg-transparent text-slate-50 rounded-none" )}>
    {name}
    </Link>
  )
}

export default Route