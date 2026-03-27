import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GalleryPage() {
  const TAB_LIST = ["images", "videos"];
  
  return (
    <div>
      <h2>GallaryPage</h2>

      <Tabs defaultValue="images" className="">
        <TabsList variant="line" className="mx-auto rounded shadow">
          <TabsTrigger value="images" className="rounded text-lg">
            Images
          </TabsTrigger>
          <TabsTrigger value="videos" className="rounded text-lg">
            Videos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="images" className="">
          Images
        </TabsContent>
        <TabsContent value="videos" className="">
          Videos
        </TabsContent>
      </Tabs>
    </div>
  );
}
