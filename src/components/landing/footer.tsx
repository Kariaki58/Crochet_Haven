import { YarnBallIcon } from "../icons/yarn-ball-icon";

export function Footer() {
  return (
    <footer className="py-6 border-t">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
            <YarnBallIcon className="h-5 w-5 text-primary" />
            <p className="text-center text-sm text-muted-foreground font-headline">
              Crochet Haven
            </p>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Crochet Haven. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
