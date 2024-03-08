import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';
import { BiRightArrowAlt } from 'react-icons/bi';
import { Suspense } from 'react';

import { getForms } from '~/actions/form.actions';
//import CreateFormBtn from '~/components/forms/CreateFormBtn';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Skeleton } from '~/components/ui/skeleton';
import Tempcreate from '~/components/forms/Tempcreate';

export default function Home() {
  return (
    <section className="container min-h-screen pt-40">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* <CreateFormBtn />  //no builder*/}
        <Tempcreate />
        <Suspense
          fallback={[1, 2, 3, 4].map((i) => (
            <FormCardSkeleton key={i} />
          ))}
        >
          <FormCards />
        </Suspense>
      </div>
    </section>
  );
}
function FormCardSkeleton() {
  return <Skeleton className="border-primary-/20 h-[210px] w-full border-2" />;
}

async function FormCards() {
  const forms = await getForms();
  return forms.map((form) => <FormCard key={form.id} form={form} />);
}

function FormCard({
  form,
}: {
  form: {
    id: number;
    title: string;
    description?: string | null;
    is_published: boolean;
    is_active: boolean;
  };
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-3">
          <span className="truncate font-bold">{form.title}</span>
          {form.is_published ? (
            <Badge>Published</Badge>
          ) : (
            <Badge variant={'destructive'}>Draft</Badge>
          )}
        </CardTitle>
        <CardDescription className="text-muted-foreground flex items-center justify-between text-sm">
          {form.is_active ? (
            form.is_published ? (
              <span>Form is up and Running</span>
            ) : (
              <span>Form not yet formed</span>
            )
          ) : (
            <span>Form expired</span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-muted-foreground h-[20px] truncate text-sm">
        {form.description ?? 'No description'}
      </CardContent>
      <CardFooter>
        {form.is_published ? (
          <Button asChild className="text-md mt-2 w-full gap-4">
            <Link href={`/forms/${form.id}`}>
              View submissions <BiRightArrowAlt />
            </Link>
          </Button>
        ) : (
          <Button
            asChild
            variant={'secondary'}
            className="text-md mt-2 w-full gap-4"
          >
            <Link href={`/forms/builder/${form.id}`}>
              Edit form <FaEdit />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
