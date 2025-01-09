import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { certs } from "@/lib/data";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Certifications",
};

const CertificationsPage = () => {
  return (
    <main className='flex flex-col justify-center gap-4 py-16 px-8 md:px-4 xl:px-8'>
      <h1 className='text-center mb-8 md:mb-20 text-violet-900 dark:text-violet-200'>
        Certifications
      </h1>

      <div className='grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-12 grid-flow-dense'>
        {certs.map((cert) => (
          <Link href={`/certifications/${cert.id}`} key={cert.id}>
            <Card className='bg-violet-100 text-violet-800 dark:bg-slate-900 dark:text-violet-200 shadow-lg shadow-violet-300 dark:shadow-slate-400 border-none flex flex-col md:min-h-[420px] lg:min-h-[380px] xl:min-h-[410px] hover:scale-105 transition-all duration-700'>
              <CardHeader>
                <CardTitle className='text-2xl md:text-lg lg:text-base'>
                  {cert.title}
                </CardTitle>
                <Image
                  className='shadow-xl shadow-violet-300 dark:shadow-xl dark:shadow-slate-400/[0.5] w-full rounded-md object-cover'
                  src={cert.image}
                  alt={cert.title}
                  height='300'
                  width='250'
                />
              </CardHeader>

              <CardContent className='flex pt-0 pb-4 mt-auto '>
                <CardDescription className=''>{cert.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
};
export default CertificationsPage;
