export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Designing Novel Interactions
            </h3>
            <p className="text-sm text-primary-foreground/70">
              Exploring the future of human-computer interaction
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Game Design
            </h3>
            <p className="text-sm text-primary-foreground/70">
              Pushing the boundaries of interactive entertainment
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">
              University of Melbourne
            </h3>
            <p className="text-sm text-primary-foreground/70">
              School of Computing and Information Systems
            </p>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-primary-foreground/20 text-center space-y-2">
          <p className="text-sm text-primary-foreground/60">
            &copy; 2026 Cybernetic Futures. University of Melbourne.
          </p>
          <p className="text-xs text-primary-foreground/40">
            This website was created with assistance from v0 by Vercel, an AI-powered development tool.
          </p>
        </div>
      </div>
    </footer>
  )
}
