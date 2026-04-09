export default function Loading() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container-main py-20">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-gold/20 border-t-gold animate-spin" />
          <p className="text-muted text-sm tracking-widest uppercase">Loading resources</p>
        </div>
      </div>
    </div>
  )
}
