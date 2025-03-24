import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export function MissionForm() {
  const form = useForm();
  const { id } = useParams();

  const isEditMode = Boolean(id);
  const title = isEditMode ? 'Edit mission' : 'New mission';

  return (
    <Dialog open>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>目標1</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </Form>

        <DialogFooter>
          <Button type="submit">確定</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
