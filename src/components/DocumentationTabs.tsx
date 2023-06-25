"use client";

import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/Tabs";
import SimpleBar from "simplebar-react";
import Code from "@/ui/Code";
import { nodejs, python } from "@/helpers/documentation-code";

const Documentation: FC = () => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="nodejs">NodeJs</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      <SimpleBar forceVisible="y">
        <TabsContent value="nodejs">
          <Code animated code={nodejs} language="javascript" show />
        </TabsContent>
      </SimpleBar>
      <SimpleBar forceVisible="y">
        <TabsContent value="python">
          <Code animated code={python} language="python" show />
        </TabsContent>
      </SimpleBar>
    </Tabs>
  );
};

export default Documentation;
