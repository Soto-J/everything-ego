import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GalleryPage() {
  return (
    <div>
      GallaryPage
      
      <Tabs defaultValue="images" className="mx-auto max-w-7xl">
        <TabsList>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>

        <TabsContent value="images">Images</TabsContent>
        <TabsContent value="videos">Videos</TabsContent>
      </Tabs>
    </div>
  );
}
