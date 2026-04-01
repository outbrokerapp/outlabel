import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0d4a5a] px-5 py-16 sm:px-8">
      <Card className="w-full max-w-lg border-cyan-500/20 bg-slate-950/60 shadow-2xl backdrop-blur-md">
        <CardContent className="px-6 pb-8 pt-8 text-center sm:px-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-500/15 animate-pulse" />
              <AlertCircle className="relative h-16 w-16 text-cyan-400" />
            </div>
          </div>

          <h1 className="mb-2 text-4xl font-bold text-white">404</h1>

          <h2 className="mb-4 text-xl font-semibold text-slate-100">
            Page Not Found
          </h2>

          <p className="mb-8 leading-relaxed text-slate-300">
            Sorry, the page you are looking for doesn't exist.
            <br />
            It may have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="rounded-lg bg-cyan-500 px-6 py-2.5 text-black shadow-md transition-all duration-200 hover:bg-cyan-600 hover:shadow-lg">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
