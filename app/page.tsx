"use client";

import Image from "next/image";
import ayush from "@/public/ayush.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      {/* About me Section */}
      <div className="pt-10 flex gap-10">
        <div>
          <Image
            src={ayush}
            width={280}
            height={280}
            className="rounded-2xl"
            alt="Ayush"
          />
        </div>
        <div className="gap-4 flex flex-col">
          <h1 className="text-6xl font-bold">Hi, i&apos;m ayush👋</h1>
          <p className="text-lg">
            I am a third year CS student, i love building apps and websites{" "}
          </p>
          <p className="text-lg">
            I am very active on{" "}
            <Link
              href={"https://x.com/ayushon_twt"}
              target="_blank"
              className="font-bold"
            >
              x/twitter
            </Link>{" "}
            where i share my learning journey have fun.{" "}
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold pt-10">Projects</h1>
        {/* Project Card */}
        <section>
          <h1>HackToGSoC</h1>
          <Image src={ayush} width={280} height={280} alt="Ayush" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            placeat possimus maxime voluptatum, harum obcaecati omnis veritatis
            sunt voluptates consequatur?
          </p>
        </section>
      </div>
    </main>
  );
}
