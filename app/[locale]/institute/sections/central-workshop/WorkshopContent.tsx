'use client';

import { Fragment, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '~/components/inputs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui';

const categories = Object.freeze([
  'machineShop',
  'productionShop',
  'fittingShop',
  'patternShop',
  'foundryShop',
  'weldingShop',
  'camLabs',
]);

export default function WorkshopContent({ text, section }) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <>
      <div className="my-8 flex justify-center">
        <div className="w-full sm:w-1/2">
          <Select variant="ui" onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Choose a Category</SelectLabel>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {text[category].title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <p>{section?.aboutUs}</p>
      {selectedCategory && (
        <Fragment>
          {selectedCategory === 'facilities' && (
            <h5>{text[selectedCategory].sub}</h5>
          )}
          <Table scrollAreaClassName="mb-7">
            <TableHeader>
              <TableRow>
                <TableHead>{text.tableTitle.sno}</TableHead>
                <TableHead>{text.tableTitle.name}</TableHead>
                <TableHead className="text-center">
                  {text.tableTitle.quantity}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {text[selectedCategory].data.map(({ name, quantity }, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell className="text-center">{quantity}</TableCell>
                </TableRow>
              ))}
              {'miscDetails' in text[selectedCategory] && (
                <>
                  <TableRow>
                    <TableHead colSpan={3}>{text.miscTitle}</TableHead>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={3}>
                      {text[selectedCategory].miscDetails}
                    </TableCell>
                  </TableRow>
                </>
              )}
            </TableBody>
          </Table>
        </Fragment>
      )}
    </>
  );
}
