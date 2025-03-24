import { Pencil2Icon, TrashIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export function Mission() {
  return (
    <>
      <div>
        <Button>
          <Pencil2Icon />
          新增
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>目標</TableHead>
            <TableHead>金冠</TableHead>
            <TableHead>任務星等★</TableHead>
            <TableHead>時間</TableHead>
            <TableHead>獎勵</TableHead>
            <TableHead className="w-px"></TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell className="gap-1">
              <div className="flex gap-1">
                <Button>
                  <Pencil2Icon />
                </Button>
                <Button variant="destructive">
                  <TrashIcon />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
