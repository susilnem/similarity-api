"use client";

import { FC, useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/ui/Button";
import { toast } from "@/ui/toast";
interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const sigInWithGoogle = async () => {
    setIsLoading(true);
    try {
      // await signIn("google");
      toast({
        title: "Error Signing In",
        message: "please try again later",
        type: "error",
      });
    } catch (error) {}
    setIsLoading(false);
  };
  return (
    <Button onClick={sigInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  );
};

export default SignInButton;
