
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LoginForm } from "./LoginForm";
import { SignUpForm } from "./SignUpForm";
import { ForgotPasswordForm } from "./ForgotPasswordForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type AuthModalProps = {
  defaultTab?: "login" | "signup";
  trigger: React.ReactNode;
  title?: string;
  description?: string;
};

export function AuthModal({
  defaultTab = "login",
  trigger,
  title = "Welcome",
  description = "Sign in to your account or create a new one to continue.",
}: AuthModalProps) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"login" | "signup">(defaultTab);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleClose = () => {
    setOpen(false);
    // Reset to default state when modal closes
    setTimeout(() => {
      setActiveTab(defaultTab);
      setShowForgotPassword(false);
    }, 300); // Wait for dialog close animation
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        {showForgotPassword ? (
          <ForgotPasswordForm onBack={() => setShowForgotPassword(false)} />
        ) : (
          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as "login" | "signup")}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="mt-0">
              <LoginForm 
                onSuccess={handleClose} 
                onForgotPassword={() => setShowForgotPassword(true)} 
              />
            </TabsContent>

            <TabsContent value="signup" className="mt-0">
              <SignUpForm onSuccess={handleClose} />
            </TabsContent>
          </Tabs>
        )}
      </DialogContent>
    </Dialog>
  );
}
