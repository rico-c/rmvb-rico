"use client";

import { PaginationBar } from "@/components/pagination";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import useCharacter from "@/hooks/useCharacter";
import { Character } from "@/types/Character";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { useGlobalContext } from "@/context/context";
import Link from "next/link";

export default function Home() {
  const { list, currentPage } = useGlobalContext();

  const { loading } = useCharacter(currentPage);

  return (
    <div className="py-5">
      {loading ? (
        <>
          <Skeleton className="w-full h-[76px] mb-5 rounded" />
          <Skeleton className="w-full h-[76px] mb-5 rounded" />
          <Skeleton className="w-full h-[76px] mb-5 rounded" />
          <Skeleton className="w-full h-[76px] mb-5 rounded" />
        </>
      ) : (
        <>
          {list?.map((item: Character) => (
            <Link key={item.id} href={`/detail/${item.id}`}>
              <Card className="p-3 mb-2 flex gap-3 hover:bg-slate-50 cursor-pointer">
                <Image
                  alt={item.name}
                  src={item.image}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>
                    {item.status} {item.gender}
                  </CardDescription>
                </div>
              </Card>
            </Link>
          ))}
          {list.length ? <PaginationBar /> : null}
        </>
      )}
    </div>
  );
}
