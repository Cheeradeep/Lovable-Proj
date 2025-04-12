
import { Button } from "@/components/ui/button";
import { AuthModal } from "./AuthModal";
import { useAuth } from "@/contexts/auth/AuthContext";
import { LogOut } from "lucide-react";

export function AuthButtons() {
  const { isAuthenticated, signOut, user } = useAuth();

  if (isAuthenticated && user) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm">
          Welcome, {user.user_metadata.full_name || user.email}
        </span>
        <Button onClick={() => signOut()} size="sm" variant="outline">
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <AuthModal
        defaultTab="login"
        trigger={
          <Button variant="outline" size="sm">
            Login
          </Button>
        }
        title="Welcome Back"
        description="Sign in to your account to continue"
      />

      <AuthModal
        defaultTab="signup"
        trigger={
          <Button size="sm">
            Sign Up
          </Button>
        }
        title="Create an Account"
        description="Join us today and get started"
      />
    </div>
  );
}
