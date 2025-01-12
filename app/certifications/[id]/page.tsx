import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { certs, type CertType } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;
  const [certDetail]: CertType[] = certs.filter((cert) => cert.id === id);
  return {
    title: `${certDetail.title}`,
    description: `Details for ${certDetail.title}`,
  };
}

const CertDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const [certDetail]: CertType[] = certs.filter((cert) => cert.id === id);

  return (
    <main className='px-4 py-16 md:px-20 lg:px-28'>
      {" "}
      <Link
        href='/certifications'
        className='text-xl hover:font-bold text-violet-800 dark:text-violet-200 md:mb-20 mb-12' >
        Back to Certifications
      </Link>
      <Card className='bg-violet-100 text-violet-800 dark:bg-slate-900 dark:text-violet-200 shadow-lg shadow-violet-300 dark:shadow-slate-400 border-none flex flex-col gap-16 justify-center my-8'>
        <CardHeader>
          <CardTitle className='text-center my-8'>{certDetail.title}</CardTitle>{" "}
          <Image
            src={certDetail.image}
            alt={`${certDetail.title} certification image`}
            height='900'
            width='700'
            className='shadow-xl shadow-violet-300 dark:shadow-xl dark:shadow-slate-400/[0.5] w-full rounded-md object-cover'
          />{" "}
        </CardHeader>

        <CardContent className='text-xl font-semibold leading-9'>
          {certDetail.description}
        </CardContent>
      </Card>
    </main>
  );
};
export default CertDetailPage;
