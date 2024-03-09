// import Link from 'next/link';
// import { FaEdit } from 'react-icons/fa';
// import { BiRightArrowAlt } from 'react-icons/bi';
// import { Suspense } from 'react';

// import { getForms } from '~/actions/form.actions';
import CreateFormBtn from '~/components/forms/CreateFormBtn';
// import { Badge } from '~/components/ui/badge';
// import { Button } from '~/components/ui/button';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '~/components/ui/card';
// import { Skeleton } from '~/components/ui/skeleton';

export default function Home() {
  return (
    <section className="container pt-40 ">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CreateFormBtn />
      </div>
    </section>
  );
}
