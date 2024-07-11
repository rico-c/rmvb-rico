import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { fetchGet } from "@/utils/fetch";
import Link from "next/link";

export default async function Detail({ params }: { params: { id?: string } }) {
  const { id } = params;
  const detailData = await fetchGet("/character/" + id);
  console.log(detailData.episode);
  const eposides = await Promise.all(
    detailData.episode.map((url: string) =>
      fetch(url).then((res) => res.json())
    )
  );
  console.log(eposides);
  return (
    <div className="mt-2 lg:mt-10">
      <Card className="p-4 lg:p-10">
        <CardTitle>{detailData.name}</CardTitle>
        <CardDescription className="flex gap-5">
          <span>{detailData.gender}</span>
          <span>{detailData.species}</span>
          <span>{detailData.status}</span>
        </CardDescription>
        <div className="font-bold text-lg pt-5">Episodes:</div>
        <div className="pt-1">
          {eposides.map((item: any) => (
            <Card key={item.id} className="p-2 mb-2">
              <div className="font-bold">{item.name}</div>
              <div>{item.episode}</div>
              <div className="text-slate-500">{item.air_date}</div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
