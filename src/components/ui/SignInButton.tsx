"use client";

import { FC, useState } from "react";
import Button from "@/ui/Button";
import { signIn } from "next-auth/react";
interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const sigInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "Error Signing In",
        message: "please try again later",
        type: "error",
      });
    }
    setIsLoading(false);
  };
  return (
    <Button onClick={sigInWithGoogle} isLoading={isLoading}>
      SignIn
    </Button>
  );
};

export default SignInButton;
