"use client";

import { signOut } from "next-auth/react";
import { FC, useState } from "react";
import { Button } from "@/ui/Button";
import { toast } from "@/ui/toast";
interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signUserOut = async () => {
    try {
      setIsLoading(true);
      toast({
        title: "Error signing out",
        message: "Please try again later.",
        type: "error",
      });
      // await signOut();
    } catch (error) {}
  };

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign out
    </Button>
  );
};

export default SignOutButton;
